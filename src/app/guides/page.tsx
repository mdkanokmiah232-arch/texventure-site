import type { Metadata } from 'next';
import Link from 'next/link';
import { guides } from '@/data/guides';
import InternalLinks from '@/components/sections/InternalLinks';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Guides and Resources',
  description:
    'Expert guides on garment manufacturing, apparel sourcing, MOQs, pricing, and the fashion supply chain — written by the TexVenture team.',
  alternates: {
    canonical: 'https://texventure.com/guides',
  },
  openGraph: {
    title: 'Guides and Resources | TexVenture',
    description:
      'Expert guides on garment manufacturing, apparel sourcing, MOQs, pricing, and the fashion supply chain.',
    url: 'https://texventure.com/guides',
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

export default function GuidesPage() {
  const sorted = [...guides].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#08CCD4] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#08CCD4] blur-3xl" />
      <InternalLinks currentPage="/guides" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:py-24 lg:px-8">
          <Badge variant="brand" className="mb-4">
            TexVenture Resources
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Guides and Resources
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            Expert insights on garment manufacturing, apparel sourcing, pricing,
            and the global fashion supply chain.
          </p>
        </div>
      </section>

      {/* Guide Cards */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block">
              <Card hover className="h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="brand">
                      {categoryLabels[guide.category] ?? guide.category}
                    </Badge>
                    <span className="text-xs text-gray-400">
                      {guide.readTimeMinutes} min read
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#1B2A4A] group-hover:text-[#08CCD4] transition-colors">
                    {guide.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-500">
                    {guide.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <time className="text-xs text-gray-400" dateTime={guide.publishedAt}>
                      {new Date(guide.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span className="text-xs font-medium text-[#08CCD4] group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
