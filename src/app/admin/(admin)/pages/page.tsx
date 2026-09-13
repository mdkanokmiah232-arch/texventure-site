'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

const EDITABLE_PAGES = [
  { slug: '/', label: 'Home' },
  { slug: '/about', label: 'About' },
  { slug: '/contact', label: 'Contact' },
  { slug: '/certifications', label: 'Certifications' },
  { slug: '/services', label: 'Services' },
  { slug: '/products', label: 'Products' },
  { slug: '/get-a-quote', label: 'Get a Quote' },
  { slug: '/instant-quote', label: 'Instant Quote' },
  { slug: '/blog', label: 'Blog' },
  { slug: '/privacy-policy', label: 'Privacy Policy' },
  { slug: '/terms-of-service', label: 'Terms of Service' },
  { slug: '/esg-transparency', label: 'ESG Transparency' },
  { slug: '/custom-clothing-manufacturer-bangladesh', label: 'Custom Clothing Manufacturer' },
  { slug: '/private-label-clothing-manufacturer-bangladesh', label: 'Private Label Manufacturer' },
  { slug: '/streetwear-manufacturer-bangladesh', label: 'Streetwear Manufacturer' },
];

export default function AdminPagesPage() {
  const [pageSections, setPageSections] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const counts: Record<string, number> = {};
        await Promise.all(
          EDITABLE_PAGES.map(async ({ slug }) => {
            const res = await fetch(`/api/admin/pages/${encodeURIComponent(slug)}`);
            if (res.ok) {
              const data = await res.json();
              counts[slug] = data.sections?.length || 0;
            }
          })
        );
        setPageSections(counts);
      } catch {
        toast.error('Failed to load page data');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1B2A4A]">Pages</h1>
        <p className="mt-1 text-sm text-gray-500">Edit sections for each public page.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-400 text-sm">Loading…</div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-left">
                <th className="px-6 py-3 font-semibold text-gray-600">Page</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Path</th>
                <th className="px-6 py-3 font-semibold text-gray-600">Sections</th>
                <th className="px-6 py-3 font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {EDITABLE_PAGES.map((page) => (
                <tr key={page.slug} className="hover:bg-gray-50/50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">{page.label}</td>
                  <td className="px-6 py-4 text-gray-500">{page.slug}</td>
                  <td className="px-6 py-4 text-gray-500">{pageSections[page.slug] || 0}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <Link
                        href={`/admin/pages/${encodeURIComponent(page.slug)}/edit`}
                        className="text-xs font-medium text-[#08CCD4] hover:underline whitespace-nowrap"
                      >
                        Edit Sections
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
