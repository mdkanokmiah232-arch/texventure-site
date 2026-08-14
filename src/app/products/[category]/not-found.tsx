import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export default function ProductNotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Products', href: '/products' },
              { name: 'Not Found', href: '/products/not-found' },
            ]}
          />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Product Category Not Found
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              We couldn&apos;t find the product category you&apos;re looking for.
              It may have been moved or doesn&apos;t exist.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* 404 Icon */}
          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#08CCD4]/10">
            <svg className="h-10 w-10 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-[#1B2A4A]">
            This product category doesn&apos;t exist
          </h2>
          <p className="mt-4 text-gray-600">
            Here are our available product categories — click any to learn more:
          </p>

          {/* Available Categories */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link
              href="/products/knit-wear"
              className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-lg font-semibold text-[#1B2A4A]">Knit Wear</div>
              <div className="mt-1 text-sm text-gray-500">T-shirts, hoodies, joggers & more</div>
            </Link>
            <Link
              href="/products/wovens"
              className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-lg font-semibold text-[#1B2A4A]">Wovens</div>
              <div className="mt-1 text-sm text-gray-500">Shirts, blouses, dresses & more</div>
            </Link>
            <Link
              href="/products/circular-knit"
              className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-lg font-semibold text-[#1B2A4A]">Circular Knit</div>
              <div className="mt-1 text-sm text-gray-500">Seamless & tubular garments</div>
            </Link>
            <Link
              href="/products/denim"
              className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-lg font-semibold text-[#1B2A4A]">Denim</div>
              <div className="mt-1 text-sm text-gray-500">Jeans, jackets, shorts & more</div>
            </Link>
            <Link
              href="/products/sweaters"
              className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-lg font-semibold text-[#1B2A4A]">Sweaters</div>
              <div className="mt-1 text-sm text-gray-500">Pullovers, cardigans & knitwear</div>
            </Link>
            <Link
              href="/products/work-wear"
              className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-lg font-semibold text-[#1B2A4A]">Work Wear</div>
              <div className="mt-1 text-sm text-gray-500">Uniforms, hi-vis & industrial</div>
            </Link>
            <Link
              href="/products/active-wear"
              className="rounded-2xl border border-gray-100 bg-white p-6 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md sm:col-span-2 sm:mx-auto sm:max-w-xs"
            >
              <div className="text-lg font-semibold text-[#1B2A4A]">Active Wear</div>
              <div className="mt-1 text-sm text-gray-500">Sportswear, gym clothes & yoga sets</div>
            </Link>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-full bg-[#08CCD4] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#07b8be]"
            >
              Browse All Products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 px-8 py-3.5 text-sm font-semibold text-[#1B2A4A] transition hover:border-[#08CCD4] hover:text-[#08CCD4]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
