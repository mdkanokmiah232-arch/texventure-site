'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CATEGORIES = ['manufacturing', 'sourcing', 'industry', 'pricing'];

export default function AdminNewBlogPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    featured_image: '',
    category: 'manufacturing',
    tags: '',
    author_name: '',
    author_role: '',
    status: 'draft',
    meta_title: '',
    meta_description: '',
    read_time_minutes: '5',
  });

  function handleTitleChange(value: string) {
    setForm((f) => ({
      ...f,
      title: value,
      // Auto-generate slug from title if slug hasn't been manually edited
      slug: f.slug || generateSlug(value),
    }));
  }

  function generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 80);
  }

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const payload = {
        ...form,
        tags: form.tags
          ? form.tags.split(',').map((t) => t.trim()).filter(Boolean)
          : [],
        read_time_minutes: parseInt(form.read_time_minutes) || 5,
      };

      const res = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to create post.');
        return;
      }

      router.push('/admin/blog');
      router.refresh();
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/admin/blog" className="text-gray-400 hover:text-gray-600 transition">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">New Blog Post</h1>
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 border border-red-100 p-4 text-sm text-red-600 mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main content */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-5">
            <h2 className="font-semibold text-[#1B2A4A] border-b border-gray-100 pb-2">
              Post Content
            </h2>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                placeholder="What Is MOQ? Minimum Order Quantity Explained"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Slug <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400 shrink-0">/blog/</span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => set('slug', generateSlug(e.target.value))}
                  required
                  pattern="[a-z0-9-]+"
                  placeholder="what-is-moq"
                  className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                />
              </div>
              <p className="mt-1 text-xs text-gray-400">
                Auto-generated from title. Lowercase letters, numbers, and hyphens only.
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Excerpt</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => set('excerpt', e.target.value)}
                rows={3}
                placeholder="Brief description shown in blog listings and SEO snippets…"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Content</label>
              <textarea
                value={form.content}
                onChange={(e) => set('content', e.target.value)}
                rows={20}
                placeholder="Use Markdown: ## Heading, **bold**, - list item, | table | columns |"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20 resize-y font-mono"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                <select
                  value={form.category}
                  onChange={(e) => set('category', e.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c.charAt(0).toUpperCase() + c.slice(1)}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Read Time (minutes)
                </label>
                <input
                  type="number"
                  value={form.read_time_minutes}
                  onChange={(e) => set('read_time_minutes', e.target.value)}
                  min="1"
                  max="120"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Featured Image URL
              </label>
              <input
                type="url"
                value={form.featured_image}
                onChange={(e) => set('featured_image', e.target.value)}
                placeholder="https://i.ibb.co.com/... or /images/..."
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Author Name</label>
                <input
                  type="text"
                  value={form.author_name}
                  onChange={(e) => set('author_name', e.target.value)}
                  placeholder="TexVenture Sourcing Team"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Author Role</label>
                <input
                  type="text"
                  value={form.author_role}
                  onChange={(e) => set('author_role', e.target.value)}
                  placeholder="Manufacturing & Sourcing"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Tags <span className="text-gray-400 font-normal">(comma-separated)</span>
              </label>
              <input
                type="text"
                value={form.tags}
                onChange={(e) => set('tags', e.target.value)}
                placeholder="MOQ, garment manufacturing, clothing production"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
              />
            </div>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-5">
            <h2 className="font-semibold text-[#1B2A4A] border-b border-gray-100 pb-2">
              SEO Settings
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Meta Title</label>
              <input
                type="text"
                value={form.meta_title}
                onChange={(e) => set('meta_title', e.target.value)}
                placeholder="What Is MOQ? Minimum Order Quantity Explained | TexVenture"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Meta Description
              </label>
              <textarea
                value={form.meta_description}
                onChange={(e) => set('meta_description', e.target.value)}
                rows={3}
                placeholder="Brief description for search engines (150–160 characters recommended)…"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20 resize-none"
              />
            </div>
          </div>

          {/* Publish */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-5">
            <h2 className="font-semibold text-[#1B2A4A] border-b border-gray-100 pb-2">
              Publish
            </h2>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="draft"
                  checked={form.status === 'draft'}
                  onChange={() => set('status', 'draft')}
                  className="w-4 h-4 text-[#08CCD4] border-gray-300 focus:ring-[#08CCD4]"
                />
                <span className="text-sm text-gray-700">Save as Draft</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value="published"
                  checked={form.status === 'published'}
                  onChange={() => set('status', 'published')}
                  className="w-4 h-4 text-[#08CCD4] border-gray-300 focus:ring-[#08CCD4]"
                />
                <span className="text-sm text-gray-700">Publish Now</span>
              </label>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
            <Link
              href="/admin/blog"
              className="rounded-lg border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-[#1B2A4A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#1e3357] disabled:opacity-50 transition"
            >
              {loading ? 'Creating…' : 'Create Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Header() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
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
  );
}
