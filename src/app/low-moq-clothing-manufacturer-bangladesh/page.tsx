import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMeta } from '@/lib/metadata';
import { FAQPageSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import HeroSection from '@/components/sections/HeroSection';
import TrustStrip from '@/components/sections/TrustStrip';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';
import Testimonials from '@/components/sections/Testimonials';

/* ─── SEO Metadata ─── */
export const metadata: Metadata = generatePageMeta({
  title: 'Low MOQ Clothing Manufacturer Bangladesh — 100 Pieces Per Style | TexVenture',
  description:
    'Looking for a low MOQ clothing manufacturer in Bangladesh? TexVenture accepts orders from just 100 pieces per style. Mix colours and sizes. Ideal for startups, capsule collections, and limited drops.',
  path: '/low-moq-clothing-manufacturer-bangladesh',
  image: 'https://texventure.com/og-low-moq.jpg',
});

/* ─── FAQ Data ─── */
const faqItems = [
  {
    question: 'What is the minimum order quantity at TexVenture?',
    answer:
      'Our standard MOQ starts from just 100 pieces per style. You can mix colours and sizes within your order. Some products with more complex construction (like denim or sweaters) may have slightly higher minimums of 150-200 pieces.',
  },
  {
    question: 'Why do factories have minimum order quantities?',
    answer:
      'Factories set MOQs because every production run involves fixed setup costs — fabric dyeing, pattern cutting, machine calibration, and trim ordering. These costs are spread across more units at higher volumes, making per-unit pricing lower.',
  },
  {
    question: 'Can I mix colours and sizes in a 100-piece order?',
    answer:
      'Yes. Our 100-piece MOQ is per style, not per colour or size. You can distribute your 100 pieces across different colourways and sizes within the same style to match your target market.',
  },
  {
    question: 'Does low MOQ mean lower quality?',
    answer:
      'Absolutely not. Every order — whether 100 pieces or 10,000 — goes through the same rigorous quality control process including AQL 2.5 inspections, in-line checks, and end-line verification. Quality is never compromised.',
  },
  {
    question: 'How do I scale up from a small order?',
    answer:
      'Start with 100 pieces to test your market, then scale to 500, 1,000, or more as demand grows. We match you with the right factory at each stage and offer volume pricing discounts as your quantities increase.',
  },
  {
    question: 'What products can I order with a low MOQ?',
    answer:
      'Most knit products — t-shirts, hoodies, polo shirts, joggers, sweatshirts — are available from 100 pieces. Activewear like leggings and sports bras also start at 100. Denim and sweaters may require 150-200 pieces minimum.',
  },
  {
    question: 'Do you offer samples for low MOQ orders?',
    answer:
      'Yes. We produce pre-production samples before any bulk order. Sample costs are quoted separately and are often credited toward your first bulk order. This lets you verify quality and fit before committing.',
  },
];

/* ─── Page Component ─── */
export default function LowMOQPage() {
  const faqSchema = FAQPageSchema({ mainEntity: faqItems });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Hero */}
        <HeroSection
          headline="Low MOQ Clothing Manufacturer in Bangladesh"
          subheadline="Start with just 100 pieces per style. Test new designs, launch capsule collections, and grow your brand — without committing to thousands of units upfront."
          primaryCta={{ text: 'Get a Low MOQ Quote', href: '/get-a-quote' }}
          secondaryCta={{ text: 'See Pricing Estimates', href: '/instant-quote' }}
          trustIndicators={[
            '100 Pieces Per Style',
            'Mix Colours & Sizes',
            'Same Quality as Large Orders',
            'Scale When Ready',
          ]}
        />

        {/* Trust Strip */}
        <TrustStrip
          items={[
            { number: '100', label: 'Piece Minimum MOQ' },
            { number: '7', label: 'Product Categories' },
            { number: '50+', label: 'Vetted Factory Partners' },
            { number: '500+', label: 'Global Clients' },
            { number: '24/7', label: 'WhatsApp Support' },
          ]}
        />

        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs
            items={[{ name: 'Low MOQ Manufacturing', href: '/low-moq-clothing-manufacturer-bangladesh' }]}
          />
        </div>

        {/* Value Proposition */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
                Why Start Small with Low MOQ?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
                Not every brand needs 5,000 units on day one. Our low MOQ service lets you test the market, validate designs, and build demand before scaling up.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: '🚀',
                  title: 'Launch Without Risk',
                  description: 'Test new designs and colourways with just 100 pieces. See what sells before committing to larger production runs.',
                },
                {
                  icon: '🎨',
                  title: 'Capsule Collections',
                  description: 'Produce limited-edition drops and seasonal collections without overstocking. Create scarcity and urgency for your brand.',
                },
                {
                  icon: '💰',
                  title: 'Manage Cash Flow',
                  description: 'Lower upfront investment means better cash flow for early-stage brands. Reinvest revenue into growth instead of inventory.',
                },
                {
                  icon: '🔄',
                  title: 'Iterate Fast',
                  description: 'Get feedback on small batches, refine your designs, and improve quality with each production cycle.',
                },
                {
                  icon: '📦',
                  title: 'Mix Colours & Sizes',
                  description: 'Our 100-piece MOQ is per style — mix different colours and sizes within your order to match your target market.',
                },
                {
                  icon: '📈',
                  title: 'Scale When Ready',
                  description: 'Start with 100 and scale to 1,000+ as demand grows. We match you with the right factory at each stage with volume pricing.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MOQ Breakdown */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Low MOQ by Product Category
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-500">
              Our MOQs vary slightly by product type. Here&apos;s what to expect for each category.
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { category: 'T-Shirts', moq: '100 pcs', price: 'From $4.50', href: '/products/knit-wear' },
                { category: 'Hoodies', moq: '100 pcs', price: 'From $9.50', href: '/products/knit-wear' },
                { category: 'Polo Shirts', moq: '100 pcs', price: 'From $6.50', href: '/products/knit-wear' },
                { category: 'Activewear', moq: '100 pcs', price: 'From $5.00', href: '/products/active-wear' },
                { category: 'Joggers', moq: '100 pcs', price: 'From $8.00', href: '/products/knit-wear' },
                { category: 'Sweaters', moq: '150 pcs', price: 'From $11.00', href: '/products/sweaters' },
                { category: 'Denim', moq: '200 pcs', price: 'From $8.50', href: '/products/denim' },
                { category: 'Work Wear', moq: '200 pcs', price: 'From $7.00', href: '/products/work-wear' },
              ].map((item) => (
                <Link
                  key={item.category}
                  href={item.href}
                  className="rounded-xl border border-gray-100 bg-white p-5 transition hover:shadow-md"
                >
                  <h3 className="font-semibold text-[#1B2A4A]">{item.category}</h3>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="rounded-full bg-[#08CCD4]/10 px-3 py-1 text-xs font-medium text-[#08CCD4]">
                      MOQ: {item.moq}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">{item.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks
          headline="How Low MOQ Manufacturing Works"
          steps={[
            {
              number: '01',
              title: 'Tell Us What You Need',
              description: 'Share your product idea, target quantity, and any design references. We\'ll advise on the best approach for your 100+ piece order.',
            },
            {
              number: '02',
              title: 'Get a Quote & Sample',
              description: 'We provide a transparent quote and produce a pre-production sample within 5-7 days. Review and approve before production.',
            },
            {
              number: '03',
              title: 'Small-Batch Production',
              description: 'Your order goes into production with the same quality controls as large orders — AQL inspections at every stage.',
            },
            {
              number: '04',
              title: 'Delivered to Your Door',
              description: 'Finished goods are packed, inspected, and shipped via air, sea, or express courier to your warehouse worldwide.',
            },
          ]}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ
          headline="Low MOQ Manufacturing — Frequently Asked Questions"
          items={faqItems}
        />

        {/* CTA */}
        <CTABand
          headline="Ready to Start with 100 Pieces?"
          description="Get a free quote for your low MOQ order. Tell us what you need — we'll handle the manufacturing, quality control, and delivery."
          buttonText="Get a Low MOQ Quote"
          buttonHref="/get-a-quote"
        />

        {/* Internal Links */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
            <h2 className="text-xl font-bold text-[#1B2A4A]">Related Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Clothing Manufacturer Bangladesh', desc: 'Full-service custom manufacturing', href: '/custom-clothing-manufacturer-bangladesh' },
                { title: 'Private Label Manufacturing', desc: 'Your brand, our expertise', href: '/private-label-clothing-manufacturer-bangladesh' },
                { title: 'Instant Quote Calculator', desc: 'Get pricing estimates in seconds', href: '/instant-quote' },
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
    </>
  );
}
