'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
  slug: string;
  status: string;
  category: string;
  author_name: string;
  published_at: string | null;
  updated_at: string;
  read_time_minutes: number;
}

export default function AdminBlogPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadPosts();
  }, []);

  async function loadPosts() {
    setLoading(true);
    try {
      const res = await fetch('/api/blog');
      if (!res.ok) throw new Error('Failed to load posts');
      const { posts: data } = await res.json();
      setPosts(data);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed to load posts');
    } finally {
      setLoading(false);
    }
  }

  async function handleTogglePublish(post: Post) {
    try {
      const res = await fetch(`/api/blog/${post.id}/publish`, { method: 'POST' });
      if (!res.ok) throw new Error('Failed to update post');
      await loadPosts();
    } catch (e: unknown) {
      alert(e instanceof Error ? e.message : 'Failed to update post');
    }
  }

  async function handleDelete(post: Post) {
    if (!confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    try {
      const res = await fetch(`/api/blog/${post.id}/edit`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete post');
      setPosts((prev) => prev.filter((p) => p.id !== post.id));
    } catch (e: unknown) {
      alert(e instanceof Error ? e.message : 'Failed to delete post');
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
              <SidebarLink href="/admin/blog" active>Blog Posts</SidebarLink>
              <SidebarLink href="/admin/pages">Pages SEO</SidebarLink>
            </nav>
          </aside>

          {/* Main */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#1B2A4A]">Blog Posts</h1>
              <Link
                href="/admin/blog/new"
                className="inline-flex items-center gap-2 rounded-lg bg-[#1B2A4A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1e3357] transition"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                New Post
              </Link>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-lg bg-red-50 border border-red-100 p-4 text-sm text-red-600 mb-4">
                {error}
              </div>
            )}

            {/* Table */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              {loading ? (
                <div className="p-12 text-center text-gray-400 text-sm">Loading posts…</div>
              ) : posts.length === 0 ? (
                <div className="p-12 text-center text-gray-400 text-sm">
                  No posts yet.{' '}
                  <Link href="/admin/blog/new" className="text-[#08CCD4] hover:underline">
                    Create your first post
                  </Link>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50/50 text-left">
                        <th className="px-6 py-3 font-semibold text-gray-600">Title</th>
                        <th className="px-6 py-3 font-semibold text-gray-600">Slug</th>
                        <th className="px-6 py-3 font-semibold text-gray-600">Category</th>
                        <th className="px-6 py-3 font-semibold text-gray-600">Status</th>
                        <th className="px-6 py-3 font-semibold text-gray-600">Author</th>
                        <th className="px-6 py-3 font-semibold text-gray-600">Updated</th>
                        <th className="px-6 py-3 font-semibold text-gray-600 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {posts.map((post) => (
                        <tr key={post.id} className="hover:bg-gray-50/50 transition">
                          <td className="px-6 py-4 font-medium text-gray-900">{post.title}</td>
                          <td className="px-6 py-4 text-gray-500">/{post.slug}</td>
                          <td className="px-6 py-4 text-gray-500 capitalize">{post.category || '—'}</td>
                          <td className="px-6 py-4">
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                post.status === 'published'
                                  ? 'bg-green-50 text-green-700'
                                  : 'bg-yellow-50 text-yellow-700'
                              }`}
                            >
                              {post.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-500">{post.author_name || '—'}</td>
                          <td className="px-6 py-4 text-gray-400 text-xs">
                            {new Date(post.updated_at).toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-end gap-3">
                              <button
                                onClick={() => handleTogglePublish(post)}
                                className="text-xs font-medium text-[#08CCD4] hover:underline whitespace-nowrap"
                              >
                                {post.status === 'published' ? 'Unpublish' : 'Publish'}
                              </button>
                              <Link
                                href={`/admin/blog/${post.id}/edit`}
                                className="text-xs font-medium text-gray-600 hover:text-[#1B2A4A] hover:underline whitespace-nowrap"
                              >
                                Edit
                              </Link>
                              <button
                                onClick={() => handleDelete(post)}
                                className="text-xs font-medium text-red-500 hover:underline whitespace-nowrap"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
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
