import type { Metadata } from 'next';
import Link from 'next/link';
import { guides } from '@/data/guides';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Badge from '@/components/ui/Badge';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Blog | TexVenture — Garment Manufacturing Insights',
  description:
    'Expert articles on garment manufacturing, apparel sourcing, MOQs, pricing, and the fashion supply chain — by the TexVenture sourcing team.',
  alternates: {
    canonical: 'https://texventure.com/blog',
  },
};

// ---------------------------------------------------------------------------
// Category label map
// ---------------------------------------------------------------------------

const categoryLabels: Record<string, string> = {
  manufacturing: 'Manufacturing',
  sourcing: 'Sourcing',
  industry: 'Industry',
  pricing: 'Pricing',
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function BlogPage() {
  const sorted = [...guides].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  const categories = [...new Set(guides.map(g => g.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#08CCD4] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#08CCD4] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
          <Breadcrumbs
            light
            items={[{ name: 'Blog', href: '/blog' }]}
          />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Badge variant="brand" light className="mb-4">
              TexVenture Blog
            </Badge>
            {/* H1 — extra large */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Manufacturing <span className="text-[#08CCD4]">Insights</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Expert guides on garment production, sourcing strategies, and supply chain management —
              backed by real factory data from Bangladesh.
            </p>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            {sorted[0] && (
              <Link href={`/guides/${sorted[0].slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    {sorted[0].featuredImage ? (
                      <img
                        src={sorted[0].featuredImage}
                        alt={sorted[0].imageAlt || sorted[0].title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A4A] to-[#0f2240]" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8">
                    <Badge variant="brand" light className="mb-3 w-fit">
                      {categoryLabels[sorted[0].category] ?? sorted[0].category}
                    </Badge>
                    {/* Featured post H2 — bigger */}
                    <h2 className="text-3xl font-bold text-white sm:text-4xl group-hover:text-[#08CCD4] transition-colors">
                      {sorted[0].title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300 line-clamp-2">
                      {sorted[0].excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-3 text-xs text-gray-400">
                      <span>{sorted[0].author.name}</span>
                      <span>·</span>
                      <time dateTime={sorted[0].publishedAt}>
                        {new Date(sorted[0].publishedAt).toLocaleDateString('en-US', {
                          month: 'long', day: 'numeric', year: 'numeric',
                        })}
                      </time>
                      <span>·</span>
                      <span>{sorted[0].readTimeMinutes} min read</span>
                    </div>
                  </div>
                </div>
                </div>
              </Link>
            )}

            {/* Posts Grid */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {sorted.slice(1).map((guide) => (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block">
                  <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg">
                    {guide.featuredImage && (
                      <img
                        src={guide.featuredImage}
                        alt={guide.imageAlt || guide.title}
                        className="mb-4 aspect-[16/9] w-full rounded-xl object-cover"
                      />
                    )}
                    <div className="mb-3 flex items-center gap-2">
                      <Badge variant="brand" light>
                        {categoryLabels[guide.category] ?? guide.category}
                      </Badge>
                      <span className="text-xs text-gray-400">
                        {guide.readTimeMinutes} min read
                      </span>
                    </div>
                    {/* Grid post H2 — bigger */}
                    <h2 className="text-xl font-bold text-[#1B2A4A] group-hover:text-[#08CCD4] transition-colors line-clamp-2">
                      {guide.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500 line-clamp-3">
                      {guide.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <time className="text-xs text-gray-400" dateTime={guide.publishedAt}>
                        {new Date(guide.publishedAt).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric',
                        })}
                      </time>
                      <span className="text-xs font-semibold text-[#08CCD4] group-hover:underline">
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Categories */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1B2A4A]">Categories</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-[#08CCD4] hover:bg-[#08CCD4]/5 hover:text-[#08CCD4] cursor-pointer"
                  >
                    {categoryLabels[cat] ?? cat}
                  </span>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-[#1B2A4A]">About the Blog</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                Practical insights from our sourcing team — covering manufacturing costs, factory
                selection, quality control, and supply chain strategy for fashion brands.
              </p>
              <Link
                href="/about"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#08CCD4] hover:underline"
              >
                Learn about TexVenture →
              </Link>
            </div>

            {/* CTA */}
            <div className="rounded-2xl !bg-[#08CCD4] p-6 text-white shadow-sm">
              <h3 className="text-lg font-bold">Ready to Start?</h3>
              <p className="mt-2 text-sm text-white/80">
                Get custom manufacturing pricing. Low MOQ from 100 pieces.
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
    </div>
  );
}
