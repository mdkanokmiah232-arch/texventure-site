import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';
import InternalLinks from '@/components/sections/InternalLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import CTABand from '@/components/sections/CTABand';

export const metadata: Metadata = {
  title: 'Product Categories — Clothing Manufacturing in Bangladesh | TexVenture',
  description:
    'Explore our3 product categories: Women\'s Wear, Men\'s Wear, and Kid\'s Wear. Custom clothing manufacturer in Bangladesh with low MOQ from 100 pieces.',
  alternates: { canonical: 'https://texventure.com/products' },
  openGraph: {
    title: 'Product Categories — TexVenture | Bangladesh Clothing Manufacturer',
    description:
      'Custom clothing manufacturing in Bangladesh — Women\'s Wear, Men\'s Wear, and Kid\'s Wear. Low MOQ, certified factories.',
    url: 'https://texventure.com/products',
    siteName: 'TexVenture',
    type: 'website',
  },
};

export default function ProductsIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
          <Breadcrumbs items={[{ name: 'Products', href: '/products' }]} />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Badge variant="brand" className="mb-4">
              Our Categories
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              What We Manufacture
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Three core clothing categories covering the full spectrum of apparel
              manufacturing — from everyday basics to fashion-forward collections,
              all produced in Bangladesh from just 100 pieces per style.
            </p>
          </div>
        </div>
      </section>

      {/* AI Citation Box */}
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="rounded-2xl border border-[#08CCD4]/20 bg-[#08CCD4]/5 p-6">
          <h2 className="text-lg font-bold text-[#1B2A4A]">Quick Answer</h2>
          <p className="mt-2 text-gray-600">
            <strong>TexVenture</strong> manufactures <strong>3 categories</strong> of clothing in Bangladesh:
            <strong> Women&apos;s Wear</strong>, <strong>Men&apos;s Wear</strong>, and <strong>Kid&apos;s Wear</strong>.
            Founded in <strong>2016</strong>, we serve <strong>8+ brands</strong> across <strong>30+ countries</strong> with
            a low MOQ of <strong>100 pieces</strong> and AQL 2.5 quality standards.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`} className="group">
              <Card hover className="h-full p-6 transition-all hover:shadow-lg hover:border-[#08CCD4]/30">
                <h2 className="text-lg font-bold text-[#1B2A4A] group-hover:text-[#08CCD4] transition sm:text-xl">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{product.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#08CCD4]">
                  Learn more
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <InternalLinks currentPage="/products" />
      <CTABand
        headline="Ready to Start Your Production?"
        description="Get a detailed production plan and pricing within 48 hours. No commitment required."
        buttonText="Get a Free Quote"
        buttonHref="/get-a-quote"
      />
    </div>
  );
}
