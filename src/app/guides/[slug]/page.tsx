import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGuideBySlug, getAllGuideSlugs, guides } from '@/data/guides';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Badge from '@/components/ui/Badge';

// ---------------------------------------------------------------------------
// Static Params
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Dynamic Metadata
// ---------------------------------------------------------------------------

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: 'Guide Not Found' };

  return {
    title: `${guide.title} | TexVenture`,
    description: guide.metaDescription,
    alternates: {
      canonical: `https://texventure.com/guides/${guide.slug}`,
    },
    openGraph: {
      title: guide.title,
      description: guide.excerpt,
      url: `https://texventure.com/guides/${guide.slug}`,
      siteName: 'TexVenture',
      type: 'article',
      publishedTime: guide.publishedAt,
      authors: [guide.author.name],
      images: [{ url: guide.featuredImage, width: 1200, height: 630, alt: guide.imageAlt }],
    },
  };
}

// ---------------------------------------------------------------------------
// Markdown Renderer
// ---------------------------------------------------------------------------

function renderContent(content: string) {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let inTable = false;
  let tableRows: string[][] = [];

  const flushTable = () => {
    if (tableRows.length > 0) {
      elements.push(
        <div key={`table-${elements.length}`} className="my-6 overflow-x-auto rounded-xl border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                {tableRows[0].map((cell, i) => (
                  <th key={i} className="px-4 py-3 text-left font-semibold text-[#1B2A4A]">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.slice(1).map((row, ri) => (
                <tr key={ri} className="border-b border-gray-50 last:border-0">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 text-gray-600">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
    }
    inTable = false;
  };

  for (const line of lines) {
    // Table row
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      const cells = line.split('|').filter(Boolean).map(c => c.trim());
      if (cells.every(c => c.match(/^[-:]+$/))) continue; // separator row
      if (!inTable) inTable = true;
      tableRows.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Empty line
    if (line.trim() === '') {
      elements.push(<div key={`sp-${elements.length}`} className="h-4" />);
      continue;
    }

    // Headers
    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${elements.length}`} className="mt-8 mb-3 text-xl font-bold text-[#1B2A4A]">
          {line.replace('### ', '')}
        </h3>
      );
      continue;
    }
    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={`h2-${elements.length}`} className="mt-10 mb-4 text-2xl font-bold text-[#1B2A4A]">
          {line.replace('## ', '')}
        </h2>
      );
      continue;
    }

    // List items
    if (line.match(/^[-] /)) {
      elements.push(
        <li key={`li-${elements.length}`} className="ml-5 list-disc py-1 text-gray-600 leading-relaxed">
          {renderInline(line.replace(/^[-] /, ''))}
        </li>
      );
      continue;
    }
    if (line.match(/^\d+\. /)) {
      elements.push(
        <li key={`oli-${elements.length}`} className="ml-5 list-decimal py-1 text-gray-600 leading-relaxed">
          {renderInline(line.replace(/^\d+\. /, ''))}
        </li>
      );
      continue;
    }

    // Paragraph
    elements.push(
      <p key={`p-${elements.length}`} className="py-2 text-gray-600 leading-relaxed">
        {renderInline(line)}
      </p>
    );
  }

  if (inTable) flushTable();

  return elements;
}

function renderInline(text: string) {
  // Bold
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i} className="font-semibold text-[#1B2A4A]">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) notFound();

  // Get categories and recent posts
  const categories = [...new Set(guides.map(g => g.category))];
  const recentPosts = guides.filter(g => g.slug !== slug).slice(0, 4);

  // Article structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": guide.title,
    "description": guide.excerpt,
    "author": {
      "@type": "Person",
      "name": guide.author.name,
      "jobTitle": guide.author.role,
      "worksFor": { "@type": "Organization", "name": "TexVenture" }
    },
    "publisher": {
      "@type": "Organization",
      "name": "TexVenture",
      "url": "https://texventure.com"
    },
    "datePublished": guide.publishedAt,
    "dateModified": guide.updatedAt || guide.publishedAt,
    "image": guide.featuredImage,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://texventure.com/guides/${guide.slug}`
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#08CCD4] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#08CCD4] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
          <Breadcrumbs
            light
            items={[
              { name: 'Blog', href: '/blog' },
              { name: guide.title, href: `/guides/${guide.slug}` },
            ]}
          />
          <div className="mx-auto mt-8 max-w-3xl">
            <Badge variant="brand" light className="mb-4">
              {guide.category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl leading-tight">
              {guide.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#08CCD4]/20 text-xs font-bold text-[#08CCD4]">
                  {guide.author.name.charAt(0)}
                </div>
                <span className="font-medium text-white">{guide.author.name}</span>
              </div>
              <span className="text-gray-500">·</span>
              <time dateTime={guide.publishedAt}>
                {new Date(guide.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </time>
              <span className="text-gray-500">·</span>
              <span>{guide.readTimeMinutes} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main Article */}
          <article className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              {/* Article Body */}
              <div className="prose-custom">
                {renderContent(guide.content)}
              </div>

              {/* Author Box */}
              <div className="mt-10 rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#08CCD4]/10 text-sm font-bold text-[#08CCD4]">
                    {guide.author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-[#1B2A4A]">{guide.author.name}</p>
                    <p className="text-sm text-gray-500">{guide.author.role} at TexVenture</p>
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Written and reviewed by <strong>{guide.author.name}</strong> — with hands-on experience in
                  Bangladesh&apos;s garment manufacturing industry. All specifications and pricing reflect
                  actual production data from our vetted factory network.
                </p>
              </div>

              {/* Share + Back */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-gray-100 pt-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1 text-sm font-medium text-[#08CCD4] transition hover:text-[#07b8be]"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Blog
                </Link>
                <div className="flex gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?url=https://texventure.com/guides/${guide.slug}&text=${encodeURIComponent(guide.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-600 transition hover:border-[#08CCD4] hover:text-[#08CCD4]"
                  >
                    Share on X
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=https://texventure.com/guides/${guide.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-600 transition hover:border-[#08CCD4] hover:text-[#08CCD4]"
                  >
                    Share on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Categories */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1B2A4A]">Categories</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/blog?category=${cat}`}
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-[#08CCD4] hover:bg-[#08CCD4]/5 hover:text-[#08CCD4]"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1B2A4A]">Recent Posts</h3>
              <div className="mt-4 space-y-4">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/guides/${post.slug}`}
                    className="group block"
                  >
                    <p className="text-sm font-semibold text-[#1B2A4A] line-clamp-2 transition group-hover:text-[#08CCD4]">
                      {post.title}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short', day: 'numeric', year: 'numeric',
                      })}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl !bg-[#08CCD4] p-6 text-white shadow-sm">
              <h3 className="text-lg font-bold">Need a Quote?</h3>
              <p className="mt-2 text-sm text-white/80">
                Get custom pricing for your next production run. Low MOQ from 100 pieces.
              </p>
              <Link
                href="/get-a-quote"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#08CCD4] transition hover:bg-gray-50"
              >
                Get a Free Quote
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  );
}
