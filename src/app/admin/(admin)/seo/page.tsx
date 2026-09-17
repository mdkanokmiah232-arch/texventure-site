'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface SeoEntry {
  id: string;
  page_path: string;
  meta_title: string;
  meta_description: string;
  og_title: string;
  og_description: string;
  canonical_url: string;
  robots_index: boolean;
  robots_follow: boolean;
}

function CharCount({ current, min, max }: { current: number; min: number; max: number }) {
  const status = current < min ? 'low' : current > max ? 'high' : 'ok';
  const color = status === 'ok' ? 'text-green-600' : status === 'low' ? 'text-yellow-600' : 'text-red-600';
  return (
    <span className={`text-xs font-medium ${color}`}>
      {current} / {min}-{max}
    </span>
  );
}

export default function AdminSeoPage() {
  const [entries, setEntries] = useState<SeoEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/admin/seo');
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setEntries(data.seo || []);
      } catch {
        toast.error('Failed to load SEO data');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1B2A4A]">SEO Manager</h1>
        <p className="mt-1 text-sm text-gray-500">Manage meta tags for all pages. Titles should be 50-60 chars, descriptions 150-160 chars.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400 text-sm">Loading…</div>
        ) : entries.length === 0 ? (
          <div className="p-12 text-center text-gray-400 text-sm">No SEO entries found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50 text-left">
                  <th className="px-6 py-3 font-semibold text-gray-600">Page Path</th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Meta Title <span className="text-gray-400 font-normal">(50-60)</span></th>
                  <th className="px-6 py-3 font-semibold text-gray-600">Meta Desc <span className="text-gray-400 font-normal">(150-160)</span></th>
                  <th className="px-6 py-3 font-semibold text-gray-600 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {entries.map((entry) => {
                  const titleLen = entry.meta_title?.length || 0;
                  const descLen = entry.meta_description?.length || 0;
                  const titleStatus = titleLen < 50 ? 'short' : titleLen > 60 ? 'long' : 'ok';
                  const descStatus = descLen < 150 ? 'short' : descLen > 160 ? 'long' : 'ok';
                  return (
                    <tr key={entry.id} className="hover:bg-gray-50/50 transition">
                      <td className="px-6 py-4 text-gray-900 font-medium">{entry.page_path}</td>
                      <td className="px-6 py-4">
                        <p className="text-gray-700 truncate max-w-xs">{entry.meta_title || <span className="text-gray-300 italic">No title</span>}</p>
                        <CharCount current={titleLen} min={50} max={60} />
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-gray-700 truncate max-w-xs">{entry.meta_description || <span className="text-gray-300 italic">No description</span>}</p>
                        <CharCount current={descLen} min={150} max={160} />
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-3">
                          {titleStatus !== 'ok' && (
                            <span className="inline-flex items-center rounded-full bg-yellow-50 text-yellow-700 px-2 py-0.5 text-xs font-medium">
                              {titleStatus === 'short' ? 'Title short' : 'Title long'}
                            </span>
                          )}
                          {descStatus !== 'ok' && (
                            <span className="inline-flex items-center rounded-full bg-yellow-50 text-yellow-700 px-2 py-0.5 text-xs font-medium">
                              {descStatus === 'short' ? 'Desc short' : 'Desc long'}
                            </span>
                          )}
                          <Link
                            href={`/admin/seo/${encodeURIComponent(entry.page_path)}/edit`}
                            className="text-xs font-medium text-[#08CCD4] hover:underline whitespace-nowrap"
                          >
                            Edit
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
