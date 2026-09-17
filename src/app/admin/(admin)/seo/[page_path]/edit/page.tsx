'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface SeoEntry {
  id?: string;
  page_path: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  canonical_url: string;
  og_title: string;
  og_description: string;
  og_image: string;
  twitter_title: string;
  twitter_description: string;
  twitter_image: string;
  robots_index: boolean;
  robots_follow: boolean;
}

export default function AdminSeoEditPage({ params }: { params: Promise<{ page_path: string }> }) {
  const { page_path } = use(params);
  const decodedPath = decodeURIComponent(page_path);
  const router = useRouter();
  const [form, setForm] = useState<SeoEntry>({
    page_path: decodedPath, meta_title: '', meta_description: '', meta_keywords: '',
    canonical_url: '', og_title: '', og_description: '', og_image: '',
    twitter_title: '', twitter_description: '', twitter_image: '',
    robots_index: true, robots_follow: true,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/admin/seo');
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        const entry = (data.entries || []).find((e: SeoEntry) => e.page_path === decodedPath);
        if (entry) {
          setForm(entry);
        }
      } catch {
        toast.error('Failed to load SEO data');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [decodedPath]);

  function update(field: keyof SeoEntry, value: unknown) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSave() {
    setSaving(true);
    try {
      const res = await fetch('/api/admin/seo', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Save failed');
      toast.success('SEO settings saved!');
      router.push('/admin/seo');
      router.refresh();
    } catch {
      toast.error('Failed to save. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  const titleLen = form.meta_title?.length || 0;
  const descLen = form.meta_description?.length || 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <button onClick={() => router.back()} className="text-sm text-gray-500 hover:text-[#1B2A4A] mb-2">← Back</button>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">Edit SEO: {decodedPath}</h1>
          <p className="mt-1 text-sm text-gray-500">Update meta tags and social sharing settings.</p>
        </div>
        <button onClick={handleSave} disabled={saving}
          className="rounded-lg bg-[#1B2A4A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1e3357] disabled:opacity-50 transition">
          {saving ? 'Saving…' : 'Save Changes'}
        </button>
      </div>

      {loading ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center text-gray-400 text-sm">Loading…</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Edit Form */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-5">
            <h2 className="font-semibold text-[#1B2A4A]">Meta Tags</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Meta Title</label>
                <input type="text" value={form.meta_title || ''} onChange={e => update('meta_title', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
                <p className={`mt-1 text-xs ${titleLen < 50 ? 'text-yellow-600' : titleLen > 60 ? 'text-red-600' : 'text-green-600'}`}>
                  {titleLen}/60 characters {titleLen < 50 ? '(too short)' : titleLen > 60 ? '(too long)' : '(good)'}
                </p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Meta Description</label>
                <textarea value={form.meta_description || ''} onChange={e => update('meta_description', e.target.value)} rows={3}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
                <p className={`mt-1 text-xs ${descLen < 150 ? 'text-yellow-600' : descLen > 160 ? 'text-red-600' : 'text-green-600'}`}>
                  {descLen}/160 characters {descLen < 150 ? '(too short)' : descLen > 160 ? '(too long)' : '(good)'}
                </p>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Meta Keywords</label>
                <input type="text" value={form.meta_keywords || ''} onChange={e => update('meta_keywords', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Canonical URL</label>
                <input type="text" value={form.canonical_url || ''} onChange={e => update('canonical_url', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
              </div>
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" checked={form.robots_index} onChange={e => update('robots_index', e.target.checked)}
                    className="rounded border-gray-300 text-[#08CCD4] focus:ring-[#08CCD4]" />
                  Index
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" checked={form.robots_follow} onChange={e => update('robots_follow', e.target.checked)}
                    className="rounded border-gray-300 text-[#08CCD4] focus:ring-[#08CCD4]" />
                  Follow
                </label>
              </div>
            </div>

            <h2 className="font-semibold text-[#1B2A4A] pt-4">Open Graph</h2>
            <div className="space-y-4">
              {[
                { field: 'og_title' as const, label: 'OG Title' },
                { field: 'og_description' as const, label: 'OG Description' },
                { field: 'og_image' as const, label: 'OG Image URL' },
              ].map(({ field, label }) => (
                <div key={field}>
                  <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
                  <input type="text" value={form[field] || ''}
                    onChange={e => update(field, e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
                </div>
              ))}
            </div>

            <h2 className="font-semibold text-[#1B2A4A] pt-4">Twitter Card</h2>
            <div className="space-y-4">
              {[
                { field: 'twitter_title', label: 'Twitter Title' },
                { field: 'twitter_description', label: 'Twitter Description' },
                { field: 'twitter_image', label: 'Twitter Image URL' },
              ].map(({ field, label }) => (
                <div key={field}>
                  <label className="block text-xs font-medium text-gray-600 mb-1">{label}</label>
                  <input type="text" value={(form as unknown as Record<string, string>)[field] || ''}
                    onChange={e => update(field as keyof SeoEntry, e.target.value)}
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20" />
                </div>
              ))}
            </div>
          </div>

          {/* SERP Preview */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="font-semibold text-[#1B2A4A] mb-4">Google SERP Preview</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-[#1a0dab] truncate">{form.meta_title || 'Page Title'}</p>
              <p className="text-xs text-[#006621] truncate">{form.canonical_url || 'https://texventure.com' + decodedPath}</p>
              <p className="mt-1 text-sm text-gray-600 leading-snug line-clamp-2">
                {form.meta_description || 'Meta description will appear here. Aim for 150-160 characters for optimal display in search results.'}
              </p>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Social Preview</p>
              <div className="space-y-2">
                <p className="text-xs text-gray-600">
                  <span className="font-semibold">OG:</span> {form.og_title || 'No OG title set'} | {form.og_description ? 'Has description' : 'No description'}
                </p>
                <p className="text-xs text-gray-600">
                  <span className="font-semibold">Twitter:</span> {form.twitter_title || 'No Twitter title set'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
