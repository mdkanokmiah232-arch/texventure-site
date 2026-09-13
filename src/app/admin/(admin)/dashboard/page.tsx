'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';

interface Stats {
  totalPosts: number;
  publishedPosts: number;
  draftPosts: number;
  totalProducts: number;
  totalTestimonials: number;
  totalFaqs: number;
  unreadInbox: number;
}

interface RecentPost {
  id: string;
  title: string;
  slug: string;
  status: string;
  updated_at: string;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats>({
    totalPosts: 0, publishedPosts: 0, draftPosts: 0,
    totalProducts: 0, totalTestimonials: 0, totalFaqs: 0, unreadInbox: 0,
  });
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [blogRes, productsRes, testimonialsRes, faqsRes, inboxRes] = await Promise.all([
          fetch('/api/admin/blog'),
          fetch('/api/admin/products'),
          fetch('/api/admin/testimonials'),
          fetch('/api/admin/faqs'),
          fetch('/api/admin/inbox'),
        ]);

        const posts = blogRes.ok ? (await blogRes.json()).posts : [];
        const published = posts.filter((p: { status: string }) => p.status === 'published').length;
        const draft = posts.filter((p: { status: string }) => p.status === 'draft').length;
        setStats(s => ({ ...s, totalPosts: posts.length, publishedPosts: published, draftPosts: draft }));
        setRecentPosts(posts.slice(0, 5));

        if (productsRes.ok) {
          const { products } = await productsRes.json();
          setStats(s => ({ ...s, totalProducts: products?.length || 0 }));
        }
        if (testimonialsRes.ok) {
          const { testimonials } = await testimonialsRes.json();
          setStats(s => ({ ...s, totalTestimonials: testimonials?.length || 0 }));
        }
        if (faqsRes.ok) {
          const { faqs } = await faqsRes.json();
          setStats(s => ({ ...s, totalFaqs: faqs?.length || 0 }));
        }
        if (inboxRes.ok) {
          const { submissions } = await inboxRes.json();
          const unread = submissions?.filter((s: { status: string }) => s.status === 'new').length || 0;
          setStats(s => ({ ...s, unreadInbox: unread }));
        }
      } catch {
        toast.error('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1B2A4A]">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome back. Here&apos;s an overview of your site.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Posts" value={stats.totalPosts} />
        <StatCard label="Published" value={stats.publishedPosts} color="text-green-600" />
        <StatCard label="Drafts" value={stats.draftPosts} color="text-yellow-600" />
        <StatCard label="Products" value={stats.totalProducts} />
        <StatCard label="Testimonials" value={stats.totalTestimonials} />
        <StatCard label="FAQs" value={stats.totalFaqs} />
        <StatCard
          label="Unread Inbox"
          value={stats.unreadInbox}
          color={stats.unreadInbox > 0 ? 'text-red-600' : 'text-gray-900'}
        />
        <StatCard label="SEO Pages" value={0} />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickLinkCard
          href="/admin/blog/new"
          title="New Post"
          description="Create a blog article"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          }
        />
        <QuickLinkCard
          href="/admin/seo"
          title="SEO Manager"
          description="Manage meta tags"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          }
        />
        <QuickLinkCard
          href="/"
          title="View Site"
          description="Open public site"
          external
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          }
        />
        <QuickLinkCard
          href="/admin/inbox"
          title="Form Inbox"
          description="View submissions"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
        />
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-semibold text-[#1B2A4A]">Recent Posts</h2>
          <Link href="/admin/blog" className="text-sm text-[#08CCD4] hover:underline">View all</Link>
        </div>
        {loading ? (
          <div className="p-6 text-center text-gray-400 text-sm">Loading…</div>
        ) : recentPosts.length === 0 ? (
          <div className="p-6 text-center text-gray-400 text-sm">
            No posts yet. <Link href="/admin/blog/new" className="text-[#08CCD4] hover:underline">Create your first post</Link>
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
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${post.status === 'published' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                    {post.status}
                  </span>
                  <Link href={`/admin/blog/${post.id}/edit`} className="text-xs text-[#08CCD4] hover:underline">Edit</Link>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, color = 'text-[#1B2A4A]' }: { label: string; value: number; color?: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <p className="text-sm text-gray-500">{label}</p>
      <p className={`mt-1 text-3xl font-bold ${color}`}>{value}</p>
    </div>
  );
}

function QuickLinkCard({ href, title, description, icon, external = false }: {
  href: string; title: string; description: string; icon: React.ReactNode; external?: boolean;
}) {
  const content = (
    <>
      <div className="w-10 h-10 rounded-xl bg-[#08CCD4]/10 text-[#08CCD4] flex items-center justify-center mb-3">{icon}</div>
      <h3 className="font-semibold text-[#1B2A4A]">{title}</h3>
      <p className="mt-0.5 text-sm text-gray-500">{description}</p>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-xl border border-gray-100 p-5 hover:border-[#08CCD4]/30 hover:shadow-sm transition">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className="block bg-white rounded-xl border border-gray-100 p-5 hover:border-[#08CCD4]/30 hover:shadow-sm transition">
      {content}
    </Link>
  );
}
