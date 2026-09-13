'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface PageSeo {
  id?: string;
  page_path: string;
  meta_title: string;
  meta_description: string;
  og_title?: string;
  og_description?: string;
  canonical_url?: string;
  robots?: string;
}

// Discovered public routes from src/app
const PUBLIC_ROUTES = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/blog', label: 'Blog' },
  { path: '/products', label: 'Products' },
  { path: '/products/[category]', label: 'Product Category' },
  { path: '/services', label: 'Services' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/contact', label: 'Contact' },
  { path: '/get-a-quote', label: 'Get a Quote' },
  { path: '/instant-quote', label: 'Instant Quote' },
  { path: '/checkout', label: 'Checkout' },
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms-of-service', label: 'Terms of Service' },
  { path: '/esg-transparency', label: 'ESG Transparency' },
  { path: '/custom-clothing-manufacturer-bangladesh', label: 'Custom Clothing Manufacturer' },
  { path: '/private-label-clothing-manufacturer-bangladesh', label: 'Private Label Manufacturer' },
  { path: '/streetwear-manufacturer-bangladesh', label: 'Streetwear Manufacturer' },
];

export default function AdminPagesPage() {
  const router = useRouter();
  const [pages, setPages] = useState<PageSeo[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState<string | null>(null);
  const [saved, setSaved] = useState<string | null>(null);
  const [error, setError] = useState('');

  // Local form state: keyed by page_path
  const [forms, setForms] = useState<Record<string, PageSeo>>({});

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/pages-seo');
        if (!res.ok) throw new Error('Failed to load');
        const { pages: data } = await res.json();

        // Build initial form state: merge DB records with route list
        const merged: Record<string, PageSeo> = {};
        for (const route of PUBLIC_ROUTES) {
          const dbRecord = data.find((p: PageSeo) => p.page_path === route.path);
          merged[route.path] = dbRecord
            ? { ...dbRecord }
            : {
                page_path: route.path,
                meta_title: '',
                meta_description: '',
                og_title: '',
                og_description: '',
                canonical_url: '',
                robots: 'index, follow',
              };
        }
        // Add any extra DB records not in our route list
        for (const record of data) {
          if (!merged[record.page_path]) {
            merged[record.page_path] = { ...record };
          }
        }

        setPages(data);
        setForms(merged);
      } catch {
        setError('Failed to load page SEO data.');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  function updateForm(path: string, field: keyof PageSeo, value: string) {
    setForms((f) => ({
      ...f,
      [path]: { ...f[path], [field]: value },
    }));
  }

  async function handleSave(path: string) {
    setSaving(path);
    setError('');
    setSaved(null);

    try {
      const formData = forms[path];
      const res = await fetch('/api/pages-seo', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to save');

      setSaved(path);
      setTimeout(() => setSaved(null), 3000);
    } catch {
      setError('Failed to save. Please try again.');
    } finally {
      setSaving(null);
    }
  }

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1B2A4A] flex items-center justify-center">
                <span className="text-[#08CCD4] font-bold text-sm">TV</span>
              </div>
              <span className="font-bold text-[#1B2A4A]">TexVenture CMS</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/admin/dashboard" className="text-sm text-gray-500 hover:text-[#1B2A4A] transition">
                Dashboard
              </Link>
              <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-red-500 transition">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-56 shrink-0">
            <nav className="bg-white rounded-xl border border-gray-100 p-3 space-y-1">
              <SidebarLink href="/admin/dashboard">Dashboard</SidebarLink>
              <SidebarLink href="/admin/blog">Blog Posts</SidebarLink>
              <SidebarLink href="/admin/pages" active>Pages SEO</SidebarLink>
            </nav>
          </aside>

          {/* Main */}
          <main className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#1B2A4A]">Page SEO</h1>
              <p className="mt-1 text-sm text-gray-500">
                Set meta title and description for each public page.
              </p>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-100 p-4 text-sm text-red-600 mb-6">
                {error}
              </div>
            )}

            {loading ? (
              <div className="bg-white rounded-xl border border-gray-100 p-12 text-center text-gray-400 text-sm">
                Loading…
              </div>
            ) : (
              <div className="space-y-4">
                {PUBLIC_ROUTES.map((route) => {
                  const form = forms[route.path] || {
                    page_path: route.path,
                    meta_title: '',
                    meta_description: '',
                    og_title: '',
                    og_description: '',
                    canonical_url: '',
                    robots: 'index, follow',
                  };
                  const isSaving = saving === route.path;
                  const isSaved = saved === route.path;

                  return (
                    <div
                      key={route.path}
                      className="bg-white rounded-xl border border-gray-100 p-5"
                    >
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="font-semibold text-[#1B2A4A]">{route.label}</h3>
                          <p className="text-xs text-gray-400 mt-0.5">{route.path}</p>
                        </div>
                        <button
                          onClick={() => handleSave(route.path)}
                          disabled={isSaving}
                          className="shrink-0 rounded-lg bg-[#1B2A4A] px-4 py-2 text-xs font-semibold text-white hover:bg-[#1e3357] disabled:opacity-50 transition"
                        >
                          {isSaving ? 'Saving…' : isSaved ? '✓ Saved' : 'Save'}
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Meta Title
                          </label>
                          <input
                            type="text"
                            value={form.meta_title || ''}
                            onChange={(e) => updateForm(route.path, 'meta_title', e.target.value)}
                            placeholder={route.label}
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Meta Description
                          </label>
                          <input
                            type="text"
                            value={form.meta_description || ''}
                            onChange={(e) =>
                              updateForm(route.path, 'meta_description', e.target.value)
                            }
                            placeholder="Brief description for search engines…"
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Canonical URL
                          </label>
                          <input
                            type="url"
                            value={form.canonical_url || ''}
                            onChange={(e) =>
                              updateForm(route.path, 'canonical_url', e.target.value)
                            }
                            placeholder="https://texventure.com"
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">
                            Robots
                          </label>
                          <input
                            type="text"
                            value={form.robots || 'index, follow'}
                            onChange={(e) => updateForm(route.path, 'robots', e.target.value)}
                            placeholder="index, follow"
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({
  href,
  children,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition ${
        active ? 'bg-[#1B2A4A] text-white' : 'text-gray-600 hover:bg-gray-50 hover:text-[#1B2A4A]'
      }`}
    >
      {children}
    </Link>
  );
}
