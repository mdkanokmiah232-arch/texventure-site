import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';
import InternalLinks from '@/components/sections/InternalLinks';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Badge from '@/components/ui/Badge';
import CTABand from '@/components/sections/CTABand';

export const metadata: Metadata = {
  title: 'Product Categories — Clothing Manufacturing in Bangladesh | TexVenture',
  description:
    'Explore our product categories: Knit Wear, Wovens, Circular Knit, Denim, Sweaters, Work Wear, and Active Wear. Custom clothing manufacturer in Bangladesh with low MOQ from 100 pieces.',
  alternates: { canonical: 'https://texventure.com/products' },
  openGraph: {
    title: 'Product Categories — TexVenture | Bangladesh Clothing Manufacturer',
    description:
      'Custom clothing manufacturing in Bangladesh — Knit Wear, Wovens, Circular Knit, Denim, Sweaters, Work Wear, and Active Wear. Low MOQ, certified factories.',
    url: 'https://texventure.com/products',
    siteName: 'TexVenture',
    type: 'website',
  },
};

export default function ProductsIndexPage() {
  // Filter products that have subCategories with images
  const productsWithImages = products.filter(
    (p) => p.subCategories && p.subCategories.length > 0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
          <Breadcrumbs items={[{ name: 'Products', href: '/products' }]} />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Badge variant="brand" className="mb-4">
              Our Collections
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              What We Manufacture
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Explore our full range of clothing categories — from everyday basics
              to fashion-forward collections, all produced in Bangladesh from just
              100 pieces per style.
            </p>
          </div>
        </div>
      </section>

      {/* AI Citation Box */}
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="rounded-2xl border border-[#08CCD4]/20 bg-[#08CCD4]/5 p-6">
          <h2 className="text-lg font-bold text-[#1B2A4A]">Quick Answer</h2>
          <p className="mt-2 text-gray-600">
            <strong>TexVenture</strong> manufactures clothing across <strong>7 categories</strong> in
            Bangladesh: <strong>Knit Wear</strong>, <strong>Wovens</strong>, <strong>Circular Knit</strong>,
            <strong> Denim</strong>, <strong>Sweaters</strong>, <strong>Work Wear</strong>, and
            <strong> Active Wear</strong>. Founded in <strong>2016</strong>, we serve <strong>8+ brands</strong> across
            <strong> 30+ countries</strong> with a low MOQ of <strong>100 pieces</strong> and AQL 2.5
            quality standards.
          </p>
        </div>
      </section>

      {/* Product Collections */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {productsWithImages.map((product) => (
          <section key={product.slug} className="mb-16 last:mb-0">
            <div className="flex items-center justify-between">
              <div>
                <Badge variant="brand" className="mb-2">
                  {product.name}
                </Badge>
                <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                  Our {product.name} Collection
                </h2>
              </div>
              <Link
                href={`/products/${product.slug}`}
                className="hidden items-center gap-1 text-sm font-semibold text-[#08CCD4] hover:underline sm:flex"
              >
                View all
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <p className="mt-2 text-gray-500">{product.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {product.subCategories?.map((subCat) =>
                subCat.images.map((img, idx) => (
                  <Link
                    key={`${product.slug}-${idx}`}
                    href={`/products/${product.slug}`}
                    className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="relative w-full overflow-hidden" style={{ paddingBottom: '100%' }}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="absolute inset-0 h-full w-full object-contain transition duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-xs font-semibold text-[#1B2A4A] group-hover:text-[#08CCD4] transition">
                        {product.name}
                      </h3>
                      <p className="mt-0.5 text-[10px] text-gray-400">Custom manufacturing available</p>
                    </div>
                  </Link>
                ))
              )}
            </div>

            <Link
              href={`/products/${product.slug}`}
              className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#08CCD4] hover:underline sm:hidden"
            >
              View all {product.name}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </section>
        ))}
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
