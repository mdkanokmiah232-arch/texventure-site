import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Product Categories',
  description: 'Explore TexVenture product categories — knit wear, wovens, denim, sweaters, active wear, work wear, and circular knit manufacturing in Bangladesh.',
  alternates: { canonical: 'https://texventure.com/products' },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#08CCD4] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#08CCD4] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
          <Breadcrumbs items={[{ name: 'Products', href: '/products' }]} />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Badge variant="brand" className="mb-4">Our Categories</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              What We <span className="text-[#08CCD4]">Manufacture</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Seven product categories, each with specialized factories, fabrics, and construction techniques. Find the category that matches your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="rounded-2xl border border-[#08CCD4]/20 bg-[#08CCD4]/5 p-6">
          <h2 className="text-lg font-bold text-[#1B2A4A]">Quick Answer</h2>
          <p className="mt-2 text-gray-600">
            <strong>TexVenture</strong> manufactures <strong>7 categories</strong> of clothing in Bangladesh:
            <strong> knit wear</strong>, <strong>wovens</strong>, <strong>circular knit</strong>,
            <strong> denim</strong>, <strong>sweaters</strong>, <strong>work wear</strong>, and
            <strong> active wear</strong>. Founded in <strong>2016</strong>, we serve
            <strong> 30+ countries</strong> with a low MOQ of <strong>100 pcs/style</strong> and AQL 2.5 quality standards.
          </p>
        </div>
      </section>

      {/* All Product Collections with Images */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {products.map((product) => (
          <section key={product.slug} className="mb-16 last:mb-0">
            {/* Section Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                  Our {product.name} Collection
                </h2>
                <p className="mt-2 max-w-2xl text-gray-600">
                  {product.description}
                </p>
              </div>
              <Link
                href={`/products/${product.slug}`}
                className="hidden items-center gap-2 rounded-full border-2 border-[#08CCD4] px-6 py-2.5 text-sm font-semibold text-[#08CCD4] transition hover:bg-[#08CCD4] hover:text-white sm:inline-flex"
              >
                View all
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Images Grid */}
            {product.subCategories && product.subCategories.length > 0 ? (
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {product.subCategories.flatMap((sub) => sub.images).map((img, idx) => (
                  <div key={idx} className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">
                    <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-medium text-[#1B2A4A] line-clamp-1">{img.alt.split(' — ')[1] || img.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link href={`/products/${product.slug}`} className="group relative overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:shadow-md">
                  <div className="relative w-full overflow-hidden" style={{ paddingBottom: '60%' }}>
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-[#1B2A4A]">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#08CCD4] group-hover:underline">
                      Learn more
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            )}

            {/* View All Link (mobile) */}
            <div className="mt-6 text-center sm:hidden">
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#08CCD4] px-6 py-2.5 text-sm font-semibold text-[#08CCD4] transition hover:bg-[#08CCD4] hover:text-white"
              >
                View all {product.name}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Divider */}
            {product.slug !== products[products.length - 1].slug && (
              <div className="mt-16 border-t border-gray-200" />
            )}
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-[#1B2A4A]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-white">Ready to Start Your Production?</h2>
          <p className="mt-4 text-lg text-gray-300">Get a free quote for any category. Low MOQ from 100 pieces.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/get-a-quote" className="inline-flex items-center gap-2 rounded-full bg-[#08CCD4] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#08CCD4]/25 transition hover:bg-[#07b8be]">
              Get a Free Quote
            </Link>
            <Link href="/instant-quote" className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5">
              Instant Pricing Calculator
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
