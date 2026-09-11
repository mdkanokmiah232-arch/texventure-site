'use client';

import { useEffect, useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const CATEGORIES = ['manufacturing', 'sourcing', 'industry', 'pricing'];

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  category: string;
  tags: string[];
  author_name: string;
  author_role: string;
  status: string;
  meta_title: string;
  meta_description: string;
  read_time_minutes: number;
}

export default function AdminEditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [postId, setPostId] = useState<string | null>(null);
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
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

  useEffect(() => {
    params.then((p) => setPostId(p.id));
  }, [params]);

  useEffect(() => {
    if (!postId) return;

    async function load() {
      try {
        const res = await fetch(`/api/blog/${postId}`);
        if (!res.ok) throw new Error('Post not found');
        const { post: p } = await res.json();
        setPost(p);
        setForm({
          title: p.title || '',
          slug: p.slug || '',
          excerpt: p.excerpt || '',
          content: p.content || '',
          featured_image: p.featured_image || '',
          category: p.category || 'manufacturing',
          tags: Array.isArray(p.tags) ? p.tags.join(', ') : '',
          author_name: p.author_name || '',
          author_role: p.author_role || '',
          status: p.status || 'draft',
          meta_title: p.meta_title || '',
          meta_description: p.meta_description || '',
          read_time_minutes: String(p.read_time_minutes || 5),
        });
      } catch {
        setError('Failed to load post.');
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [postId]);

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    setSaving(true);

    try {
      const payload = {
        ...form,
        tags: form.tags
          ? form.tags.split(',').map((t) => t.trim()).filter(Boolean)
          : [],
        read_time_minutes: parseInt(form.read_time_minutes) || 5,
      };

      const res = await fetch(`/api/blog/${postId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Failed to update post.');
        return;
      }

      setPost(data.post);
      setSuccess('Post updated successfully.');
      setTimeout(() => setSuccess(''), 3000);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-400">Loading…</p>
      </div>
    );
  }

  if (error && !post) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-4">
        <p className="text-red-500">{error}</p>
        <Link href="/admin/blog" className="text-[#08CCD4] hover:underline">
          Back to Blog
        </Link>
      </div>
    );
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
              <button
                onClick={async () => {
                  await fetch('/api/auth/logout', { method: 'POST' });
                  router.push('/admin/login');
                  router.refresh();
                }}
                className="text-sm text-gray-500 hover:text-red-500 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/admin/blog" className="text-gray-400 hover:text-gray-600 transition">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-2xl font-bold text-[#1B2A4A]">Edit Blog Post</h1>
        </div>

        {/* Feedback */}
        {error && (
          <div className="rounded-lg bg-red-50 border border-red-100 p-4 text-sm text-red-600 mb-6">
            {error}
          </div>
        )}
        {success && (
          <div className="rounded-lg bg-green-50 border border-green-100 p-4 text-sm text-green-700 mb-6">
            {success}
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
                onChange={(e) => set('title', e.target.value)}
                required
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
                  onChange={(e) =>
                    set('slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))
                  }
                  required
                  pattern="[a-z0-9-]+"
                  className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Excerpt</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => set('excerpt', e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Content</label>
              <textarea
                value={form.content}
                onChange={(e) => set('content', e.target.value)}
                rows={20}
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
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Author Role</label>
                <input
                  type="text"
                  value={form.author_role}
                  onChange={(e) => set('author_role', e.target.value)}
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
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20 resize-none"
              />
            </div>
          </div>

          {/* Status */}
          <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-5">
            <h2 className="font-semibold text-[#1B2A4A] border-b border-gray-100 pb-2">
              Status
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
                <span className="text-sm text-gray-700">Draft</span>
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
                <span className="text-sm text-gray-700">Published</span>
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
              disabled={saving}
              className="rounded-lg bg-[#1B2A4A] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#1e3357] disabled:opacity-50 transition"
            >
              {saving ? 'Saving…' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
