import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import CTABand from '@/components/sections/CTABand';

export const metadata: Metadata = {
  title: 'Product Categories — Clothing Manufacturing in Bangladesh',
  description:
    'Explore all 7 product categories TexVenture manufactures in Bangladesh: knit wear, wovens, circular knit, denim, sweaters, work wear, and active wear.',
  alternates: { canonical: 'https://texventure.com/products' },
  openGraph: {
    title: 'Product Categories — TexVenture',
    description:
      'Explore all 7 product categories TexVenture manufactures in Bangladesh, from knitwear to activewear.',
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
              7 Product Categories
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              What We Manufacture
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Seven product categories covering the full spectrum of apparel manufacturing —
              from everyday basics to technical performance wear, all produced in Bangladesh
              from just 100 pieces per style.
            </p>
          </div>
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

      <CTABand
        headline="Ready to Start Your Production?"
        description="Get a detailed production plan and pricing within 48 hours. No commitment required."
        buttonText="Get a Free Quote"
        buttonHref="/get-a-quote"
      />
    </div>
  );
}
