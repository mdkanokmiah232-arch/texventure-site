import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import InternalLinks from '@/components/sections/InternalLinks';
import { guides, getGuideBySlug, getAllGuideSlugs } from '@/data/guides';
import { ArticleSchema, BreadcrumbListSchema } from '@/lib/schema';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CTABand from '@/components/sections/CTABand';

const SITE_URL = 'https://texventure.com';

// ---------------------------------------------------------------------------
// Static Params
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ topic: slug }));
}

// ---------------------------------------------------------------------------
// Dynamic Metadata
// ---------------------------------------------------------------------------

type Props = { params: Promise<{ topic: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const guide = getGuideBySlug(topic);
  if (!guide) return { title: 'Guide Not Found' };

  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/guides/${guide.slug}`,
    },
    openGraph: {
      title: `${guide.title} | TexVenture`,
      description: guide.metaDescription,
      url: `${SITE_URL}/guides/${guide.slug}`,
      type: 'article',
      publishedTime: guide.publishedAt,
      authors: [guide.author.name],
      tags: guide.tags,
    },
    keywords: guide.tags,
  };
}

// ---------------------------------------------------------------------------
// Category label helper
// ---------------------------------------------------------------------------

const categoryLabels: Record<string, string> = {
  manufacturing: 'Manufacturing',
  sourcing: 'Sourcing',
  industry: 'Industry',
  pricing: 'Pricing',
};

// ---------------------------------------------------------------------------
// Simple Markdown → HTML renderer
// ---------------------------------------------------------------------------

function renderMarkdown(md: string): string {
  let html = md;

  // Code blocks (fenced)
  html = html.replace(/```[\s\S]*?```/g, (match) => {
    const code = match.slice(3, -3).replace(/^\w+\n/, '');
    return `<pre class="rounded-xl bg-gray-900 p-4 text-sm text-gray-100 overflow-x-auto my-6"><code>${code}</code></pre>`;
  });

  // Tables
  html = html.replace(/^(\|.+\|)\n(\|[-| :]+\|)\n((?:\|.+\|\n?)+)/gm, (_, headerRow, _sep, bodyRows) => {
    const headers = headerRow.split('|').filter(Boolean).map((h: string) => h.trim());
    const rows = bodyRows.trim().split('\n').map((r: string) =>
      r.split('|').filter(Boolean).map((c: string) => c.trim())
    );
    const headerHtml = headers.map((h: string) => `<th class="border border-gray-200 bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-[#1B2A4A]">${h}</th>`).join('');
    const bodyHtml = rows.map((cells: string[]) => {
      const cellHtml = cells.map((c: string) => `<td class="border border-gray-200 px-4 py-2 text-sm text-gray-600">${c}</td>`).join('');
      return `<tr>${cellHtml}</tr>`;
    }).join('');
    return `<div class="overflow-x-auto my-6"><table class="w-full border-collapse rounded-xl border border-gray-200 text-sm"><thead><tr>${headerHtml}</tr></thead><tbody>${bodyHtml}</tbody></table></div>`;
  });

  // Headings
  html = html.replace(/^### (.+)$/gm, '<h3 class="mt-8 mb-3 text-xl font-bold text-[#1B2A4A]">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="mt-10 mb-4 text-2xl font-bold text-[#1B2A4A]">$1</h2>');

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-[#1B2A4A]">$1</strong>');

  // Ordered lists
  html = html.replace(/^(\d+)\. (.+)$/gm, '<li class="ml-6 list-decimal text-gray-600 leading-relaxed mb-1">$2</li>');

  // Unordered lists
  html = html.replace(/^- (.+)$/gm, '<li class="ml-6 list-disc text-gray-600 leading-relaxed mb-1">$1</li>');

  // Wrap consecutive <li> in <ul>
  html = html.replace(/((?:<li[^>]*>.*?<\/li>\n?)+)/g, (match) => {
    if (match.includes('list-decimal')) {
      return `<ol class="my-4 space-y-1">${match}</ol>`;
    }
    return `<ul class="my-4 space-y-1">${match}</ul>`;
  });

  // Paragraphs
  html = html
    .split('\n\n')
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return '';
      if (
        trimmed.startsWith('<h') ||
        trimmed.startsWith('<ul') ||
        trimmed.startsWith('<ol') ||
        trimmed.startsWith('<pre') ||
        trimmed.startsWith('<div') ||
        trimmed.startsWith('<table')
      ) {
        return trimmed;
      }
      return `<p class="my-4 leading-relaxed text-gray-600">${trimmed}</p>`;
    })
    .join('\n');

  return html;
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function GuideDetailPage({ params }: Props) {
  const { topic } = await params;
  const guide = getGuideBySlug(topic);
  if (!guide) notFound();

  const articleSchema = ArticleSchema({
    headline: guide.title,
    description: guide.metaDescription,
    url: `${SITE_URL}/guides/${guide.slug}`,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
    author: guide.author.name,
  });

  const breadcrumbSchema = BreadcrumbListSchema({
    items: [
      { name: 'Home', url: SITE_URL },
      { name: 'Guides', url: `${SITE_URL}/guides` },
      { name: guide.title, url: `${SITE_URL}/guides/${guide.slug}` },
    ],
  });

  // Related guides (same category, excluding current)
  const related = guides
    .filter((g) => g.category === guide.category && g.slug !== guide.slug)
    .slice(0, 3);

  // If not enough same-category, fill with others
  const relatedGuides =
    related.length >= 2
      ? related
      : guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#08CCD4] blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#08CCD4] blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 py-16 sm:py-20 lg:px-8">
            <Breadcrumbs
              items={[
                { name: 'Guides', href: '/guides' },
                { name: guide.title, href: `/guides/${guide.slug}` },
              ]}
            />
            <div className="mx-auto mt-8 max-w-3xl text-center">
              <Badge variant="brand" className="mb-4">
                {categoryLabels[guide.category] ?? guide.category}
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {guide.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
                <span className="font-medium text-[#08CCD4]">{guide.author.name}</span>
                <span>•</span>
                <time dateTime={guide.publishedAt}>
                  {new Date(guide.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <span>{guide.readTimeMinutes} min read</span>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {guide.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-white border-white/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content + Sidebar */}
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <article className="lg:col-span-2">
              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: renderMarkdown(guide.content) }}
              />
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Author Card */}
              <Card>
                <h3 className="text-lg font-bold text-[#1B2A4A]">About the Author</h3>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#08CCD4] text-white font-bold text-lg">
                    {guide.author.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1B2A4A]">{guide.author.name}</div>
                    <div className="text-sm text-gray-500">{guide.author.role}</div>
                  </div>
                </div>
              </Card>

              {/* Related Guides */}
              <Card>
                <h3 className="text-lg font-bold text-[#1B2A4A]">Related Guides</h3>
                <ul className="mt-4 space-y-3">
                  {relatedGuides.map((rg) => (
                    <li key={rg.slug}>
                      <Link
                        href={`/guides/${rg.slug}`}
                        className="group block rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-[#08CCD4]"
                      >
                        <div className="font-medium text-[#1B2A4A] group-hover:text-[#08CCD4] transition-colors">
                          {rg.title}
                        </div>
                        <div className="mt-1 text-xs text-gray-400">
                          {rg.readTimeMinutes} min read
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* CTA Card */}
              <Card className="bg-[#1B2A4A]">
                <h3 className="text-lg font-bold text-white">Need Help Sourcing?</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Talk to our experts about your apparel sourcing requirements.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#08CCD4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#07b8be]"
                >
                  Get a Quote
                </Link>
              </Card>
            </aside>
          </div>
        </div>

        {/* CTA Band */}
      <InternalLinks currentPage="/guides" />
        <CTABand
          headline="Ready to Source Your Collection?"
          description="Partner with TexVenture for reliable garment manufacturing in Bangladesh. Low MOQ, fast turnaround, and quality you can count on."
          buttonText="Get a Quote"
          buttonHref="/contact"
        />
      </div>
    </>
  );
}
