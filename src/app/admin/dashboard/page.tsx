'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalPages: number;
}

interface RecentPost {
  id: string;
  title: string;
  slug: string;
  status: string;
  updated_at: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [stats, setStats] = useState<Stats>({ totalPosts: 0, publishedPosts: 0, draftPosts: 0, totalPages: 0 });
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [blogRes, pagesRes] = await Promise.all([
          fetch('/api/blog'),
          fetch('/api/pages-seo'),
        ]);

        if (blogRes.ok) {
          const { posts } = await blogRes.json();
          const published = posts.filter((p: { status: string }) => p.status === 'published').length;
          const draft = posts.filter((p: { status: string }) => p.status === 'draft').length;
          setStats((s) => ({ ...s, totalPosts: posts.length, publishedPosts: published, draftPosts: draft }));
          setRecentPosts(posts.slice(0, 5));
        }

        if (pagesRes.ok) {
          const { pages } = await pagesRes.json();
          setStats((s) => ({ ...s, totalPages: pages.length }));
        }
      } catch {
        // silently fail dashboard load
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin/login');
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#1B2A4A] flex items-center justify-center">
                <span className="text-[#08CCD4] font-bold text-sm">TV</span>
              </div>
              <span className="font-bold text-[#1B2A4A]">TexVenture CMS</span>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-500 transition"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar + Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Nav */}
          <aside className="lg:w-56 shrink-0">
            <nav className="bg-white rounded-xl border border-gray-100 p-3 space-y-1">
              <NavLink href="/admin/dashboard" icon="home">Dashboard</NavLink>
              <NavLink href="/admin/blog" icon="document">Blog Posts</NavLink>
              <NavLink href="/admin/pages" icon="tag">Pages SEO</NavLink>
            </nav>
          </aside>

          {/* Main */}
          <main className="flex-1 space-y-6">
            <h1 className="text-2xl font-bold text-[#1B2A4A]">Dashboard</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard label="Total Posts" value={stats.totalPosts} />
              <StatCard label="Published" value={stats.publishedPosts} color="text-green-600" />
              <StatCard label="Drafts" value={stats.draftPosts} color="text-yellow-600" />
              <StatCard label="SEO Pages" value={stats.totalPages} />
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <QuickLinkCard
                href="/admin/blog/new"
                title="New Blog Post"
                description="Create a new article"
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                }
              />
              <QuickLinkCard
                href="/admin/blog"
                title="Manage Blog Posts"
                description="Edit or delete existing posts"
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                }
              />
              <QuickLinkCard
                href="/admin/pages"
                title="Page SEO"
                description="Edit meta tags for all pages"
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                }
              />
              <QuickLinkCard
                href="/"
                title="View Public Site"
                description="Open texventure.com"
                external
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                }
              />
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <h2 className="font-semibold text-[#1B2A4A]">Recent Posts</h2>
                <Link href="/admin/blog" className="text-sm text-[#08CCD4] hover:underline">
                  View all
                </Link>
              </div>
              {loading ? (
                <div className="p-6 text-center text-gray-400 text-sm">Loading…</div>
              ) : recentPosts.length === 0 ? (
                <div className="p-6 text-center text-gray-400 text-sm">
                  No posts yet.{' '}
                  <Link href="/admin/blog/new" className="text-[#08CCD4] hover:underline">
                    Create your first post
                  </Link>
                </div>
              ) : (
                <ul className="divide-y divide-gray-50">
                  {recentPosts.map((post) => (
                    <li key={post.id} className="px-6 py-4 flex items-center justify-between">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                        <p className="text-xs text-gray-400">/{post.slug}</p>
                      </div>
                      <div className="flex items-center gap-3 ml-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            post.status === 'published'
                              ? 'bg-green-50 text-green-700'
                              : 'bg-yellow-50 text-yellow-700'
                          }`}
                        >
                          {post.status}
                        </span>
                        <Link
                          href={`/admin/blog/${post.id}/edit`}
                          className="text-xs text-[#08CCD4] hover:underline"
                        >
                          Edit
                        </Link>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ─────────────────────────────────────────────────────────

function NavLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: 'home' | 'document' | 'tag';
  children: React.ReactNode;
}) {
  const icons = {
    home: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    document: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    tag: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  };

  return (
    <Link
      href={href}
      className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-[#1B2A4A] transition"
    >
      {icons[icon]}
      {children}
    </Link>
  );
}

function StatCard({
  label,
  value,
  color = 'text-[#1B2A4A]',
}: {
  label: string;
  value: number;
  color?: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`mt-1 text-3xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

function QuickLinkCard({
  href,
  title,
  description,
  icon,
  external = false,
}: {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  const content = (
    <>
      <div className="w-10 h-10 rounded-xl bg-[#08CCD4]/10 text-[#08CCD4] flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-[#1B2A4A]">{title}</h3>
      <p className="mt-0.5 text-sm text-gray-500">{description}</p>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white rounded-xl border border-gray-100 p-5 hover:border-[#08CCD4]/30 hover:shadow-sm transition"
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="block bg-white rounded-xl border border-gray-100 p-5 hover:border-[#08CCD4]/30 hover:shadow-sm transition"
    >
      {content}
    </Link>
  );
}
