import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGuideBySlug, getAllGuideSlugs } from '@/data/guides';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import InternalLinks from '@/components/sections/InternalLinks';

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
// Page Component
// ---------------------------------------------------------------------------

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) notFound();

  // Simple markdown-to-HTML (handles ##, ###, bold, lists, tables)
  const htmlContent = guide.content
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(Boolean).map(c => c.trim());
      if (cells.every(c => c.match(/^[-]+$/))) return '';
      return `<tr>${cells.map(c => `<td>${c}</td>`).join('')}</tr>`;
    });

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
      "worksFor": {
        "@type": "Organization",
        "name": "TexVenture"
      }
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
        <div className="relative mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:px-8">
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
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {guide.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-300">
              <span>By <strong className="text-white">{guide.author.name}</strong></span>
              <span>·</span>
              <time dateTime={guide.publishedAt}>
                {new Date(guide.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span>·</span>
              <span>{guide.readTimeMinutes} min read</span>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks currentPage={`/guides/${guide.slug}`} />

      {/* Article Content */}
      <article className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">
          {/* Article Body */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#1B2A4A] prose-strong:text-[#1B2A4A] prose-a:text-[#08CCD4] prose-li:text-gray-600"
            dangerouslySetInnerHTML={{ __html: `<p>${htmlContent}</p>` }}
          />

          {/* Author Box */}
          <div className="mt-10 rounded-xl border border-gray-100 bg-gray-50 p-6">
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
          <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
            <Link
              href="/blog"
              className="text-sm font-medium text-[#08CCD4] hover:underline"
            >
              ← Back to Blog
            </Link>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?url=https://texventure.com/guides/${guide.slug}&text=${encodeURIComponent(guide.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
              >
                Share on X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://texventure.com/guides/${guide.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-200 px-4 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50"
              >
                Share on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  );
}
