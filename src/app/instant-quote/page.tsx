import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMeta } from '@/lib/metadata';
import InternalLinks from '@/components/sections/InternalLinks';
import { pricingConfig } from '@/data/pricing';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CTABand from '@/components/sections/CTABand';
import FAQ from '@/components/sections/FAQ';
import QuoteCalculator from '@/components/forms/QuoteCalculator';

/* ─── SEO Metadata ─── */
export const metadata: Metadata = generatePageMeta({
  title: 'Instant Quote Calculator — Custom Clothing Pricing',
  description:
    "Need instant pricing for custom clothing manufacturing? Use TexVenture's calculator to see per-unit costs for t-shirts, hoodies, and activewear from 100 pcs.",
  path: '/instant-quote',
});

/* ─── FAQ Data ─── */
const faqItems = [
  {
    question: 'How accurate are the instant pricing estimates?',
    answer:
      'Our calculator provides estimates based on standard specifications. Actual pricing may vary based on fabric choice, print techniques, trims, and order complexity. Use the estimate as a starting point, then request an exact quote for your specific requirements.',
  },
  {
    question: 'What affects the price per piece?',
    answer:
      'Price depends on fabric type and weight, garment complexity, order quantity, print/embroidery techniques, trims and hardware, and packaging requirements. Higher quantities typically bring the per-unit cost down due to volume discounts.',
  },
  {
    question: 'Can I get an exact quote after using the calculator?',
    answer:
      'Yes. Click "Request Exact Quote" to fill out our quote form with your specific requirements. Our team will provide a detailed, accurate quote within 24 hours based on your actual specifications.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept bank transfers (wire), PayPal, and Western Union. For orders above $5,000, we offer letter of credit (LC) options. Standard terms are 30% deposit and 70% balance before shipping.',
  },
  {
    question: 'Are there any hidden fees?',
    answer:
      'No. Our quotes include manufacturing and quality control. Shipping costs are shown separately based on your preferred method (sea, air, or express). All costs are transparent with no hidden fees.',
  },
];

/* ─── Page Component ─── */
export default function InstantQuotePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#08CCD4] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#08CCD4] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Instant Quote Calculator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Select your product, choose a quantity, and get an instant pricing estimate — then request an exact quote for your specific requirements.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Breadcrumbs items={[{ name: 'Instant Quote', href: '/instant-quote' }]} />
      </div>

      {/* Calculator */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
          <QuoteCalculator />
        </div>
      </section>

      {/* Price Reference Table */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            Pricing Reference Guide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-500">
            Base pricing per product category. Final pricing depends on fabric, trims, and specifications.
          </p>

          <div className="mt-12 overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="grid grid-cols-4 gap-4 rounded-xl bg-[#1B2A4A] p-4 text-sm font-semibold text-white">
                <div>Product</div>
                <div>Base Price</div>
                <div>MOQ</div>
                <div>Description</div>
              </div>
              {pricingConfig.productTypes.map((product, index) => (
                <div
                  key={product.slug}
                  className={`grid grid-cols-4 gap-4 border-b border-gray-100 p-4 text-sm ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <div className="font-medium text-[#1B2A4A]">{product.name}</div>
                  <div className="text-[#08CCD4] font-semibold">
                    ${product.basePriceUSD.toFixed(2)}
                  </div>
                  <div className="text-gray-500">{product.moq} pcs</div>
                  <div className="text-gray-500 text-xs">{product.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Reference */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#1B2A4A]">Shipping Options</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {pricingConfig.shippingOptions.map((opt) => (
                <div key={opt.method} className="rounded-xl border border-gray-100 bg-white p-4">
                  <h4 className="font-semibold text-[#1B2A4A]">{opt.label}</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    {opt.estimatedDays.min}–{opt.estimatedDays.max} days
                  </p>
                  <p className="mt-2 text-lg font-bold text-[#08CCD4]">
                    +${opt.pricePerPieceUSD.toFixed(2)}/piece
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Options */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-[#1B2A4A]">Branding Add-Ons</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(pricingConfig.additionalOptions).map(([key, opt]) => (
                <div key={key} className="rounded-xl border border-gray-100 bg-white p-4">
                  <h4 className="font-medium text-[#1B2A4A] capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h4>
                  <p className="mt-2 text-lg font-bold text-[#08CCD4]">
                    +${opt.pricePerPieceUSD.toFixed(2)}/piece
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        headline="Pricing — Frequently Asked Questions"
        items={faqItems}
      />

      {/* CTA */}
      <InternalLinks currentPage="/instant-quote" />
      <CTABand
        headline="Ready for an Exact Quote?"
        description="Our calculator gives you estimates. For accurate pricing based on your specific requirements, request a detailed quote from our team."
        buttonText="Get an Exact Quote"
        buttonHref="/get-a-quote"
      />

      {/* Internal Links */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <h2 className="text-xl font-bold text-[#1B2A4A]">Explore Our Services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Custom Manufacturing', desc: 'Your design, built to spec', href: '/custom-clothing-manufacturer-bangladesh' },
              { title: 'Get a Quote', desc: 'From 100 pieces per style', href: '/get-a-quote' },
              { title: 'Private Label', desc: 'Your brand, our expertise', href: '/private-label-clothing-manufacturer-bangladesh' },
              { title: 'Streetwear', desc: 'Built for the culture', href: '/streetwear-manufacturer-bangladesh' },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="rounded-xl border border-gray-100 bg-white p-4 transition hover:shadow-md"
              >
                <h3 className="text-sm font-semibold text-[#1B2A4A]">{item.title}</h3>
                <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
