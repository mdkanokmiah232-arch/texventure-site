import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMeta } from '@/lib/metadata';
import InternalLinks from '@/components/sections/InternalLinks';
import { OrganizationSchema, ServiceSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import HeroSection from '@/components/sections/HeroSection';
import TrustStrip from '@/components/sections/TrustStrip';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';
import Testimonials from '@/components/sections/Testimonials';
import StatsCounter from '@/components/sections/StatsCounter';

/* ─── SEO Metadata ─── */
export const metadata: Metadata = generatePageMeta({
  title: 'Clothing Manufacturer in Bangladesh — Custom Apparel',
  description:
    'Need a trusted clothing manufacturer in Bangladesh? TexVenture offers custom apparel production, low MOQ from 100 pcs, certifications, and global shipping.',
  path: '/custom-clothing-manufacturer-bangladesh',
  image: 'https://texventure.com/og-pillar.jpg',
});

/* ─── FAQ Data ─── */
const faqItems = [
  {
    question: 'Why should I manufacture clothing in Bangladesh?',
    answer:
      'Bangladesh is the world\'s second-largest garment exporter with highly competitive pricing, skilled labour, large-scale production capacity, and deep expertise in knitwear, denim, and woven garments. The country offers some of the most cost-effective garment manufacturing globally while maintaining improving quality standards and certifications.',
  },
  {
    question: 'What is the minimum order quantity (MOQ) for clothing manufacturing in Bangladesh?',
    answer:
      'Our standard MOQ starts from just 100 pieces per style. This makes us ideal for startups, small brands, and capsule collections that don\'t need thousands of units to get started. Some products may have different MOQs depending on fabric and complexity.',
  },
  {
    question: 'How long does clothing manufacturing take in Bangladesh?',
    answer:
      'Sampling typically takes 5-7 business days. Once approved, mass production ranges from 40 to 75 days depending on the product type, order volume, and complexity. Lead times include fabric procurement, cutting, sewing, finishing, and quality inspection.',
  },
  {
    question: 'What types of clothing can you manufacture?',
    answer:
      'We cover 7 main product categories: Knit Wear (t-shirts, hoodies, joggers), Wovens (shirts, blouses, dresses), Circular Knit (seamless, underwear), Denim (jeans, jackets, shorts), Sweaters (pullovers, cardigans), Work Wear (uniforms, hi-vis), and Activewear (leggings, sports bras).',
  },
  {
    question: 'Do you provide quality certifications for manufactured clothing?',
    answer:
      'Yes. Our factory partners hold ISO 9001:2015, BSCI, OEKO-TEX Standard 100, SGS, Sedex, and WRAP certifications. We conduct multi-point quality control including in-line inspections, end-line checks, and final AQL 2.5 inspections before shipping.',
  },
  {
    question: 'Can I get samples before placing a bulk order?',
    answer:
      'Absolutely. We produce pre-production samples for your review and approval. Sample costs are typically deducted from your bulk order once production begins. We recommend 1-2 rounds of sampling to ensure quality and fit are perfect.',
  },
  {
    question: 'What countries do you ship to?',
    answer:
      'We ship globally to over 30 countries including the USA, UK, Canada, Australia, Germany, France, and Japan. We handle all export documentation, customs clearance, and freight forwarding with FOB, CIF, and DDP shipping terms available.',
  },
  {
    question: 'How does TexVenture differ from other clothing manufacturers in Bangladesh?',
    answer:
      'TexVenture acts as your on-the-ground representative in Bangladesh. We handle factory selection, quality control, logistics, and communication — giving you access to Bangladesh\'s manufacturing ecosystem without the complexity. We specialise in serving small and growing brands with low MOQs and transparent pricing.',
  },
];

/* ─── Page Component ─── */
export default function PillarPage() {
  const orgSchema = OrganizationSchema();
  const serviceSchema = ServiceSchema({
    name: 'Custom Clothing Manufacturing',
    description:
      'Custom apparel manufacturing in Bangladesh with low MOQ from 100 pieces per style, covering knitwear, wovens, denim, and activewear.',
    url: 'https://texventure.com/custom-clothing-manufacturer-bangladesh',
    serviceType: 'Apparel Manufacturing',
    areaServed: 'Worldwide',
  });

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <main>
        {/* Hero */}
        <HeroSection
          headline="Best Custom Clothing Manufacturer in Bangladesh"
          subheadline="From concept to delivery — TexVenture provides custom apparel manufacturing with low MOQs from 100 pieces, competitive pricing, certified factories, and global shipping to 30+ countries."
          primaryCta={{ text: 'Get a Free Quote', href: '/get-a-quote' }}
          secondaryCta={{ text: 'Instant Quote Calculator', href: '/instant-quote' }}
        />

        {/* Trust Strip */}
        <TrustStrip
          items={[
            { number: '10+', label: 'Years Experience' },
            { number: '8+', label: 'Global Clients' },
            { number: '1M+', label: 'Pieces / Year' },
            { number: '100', label: 'Piece Minimum MOQ' },
            { number: '30+', label: 'Countries Served' },
          ]}
        />

        {/* Breadcrumbs + Content */}
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs
            items={[{ name: 'Clothing Manufacturer Bangladesh', href: '/custom-clothing-manufacturer-bangladesh' }]}
          />
        </div>

        {/* Capabilities Section */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
                Full-Service Clothing Manufacturing in Bangladesh
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-500">
                TexVenture provides end-to-end apparel manufacturing solutions — from fabric sourcing and sampling to production, quality control, and door-to-door delivery. Whether you need 100 pieces or 10,000, we handle it all.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: '🏭',
                  title: 'Custom Manufacturing',
                  description: 'Your designs, your specs, your branding. We produce garments exactly to your tech pack requirements.',
                  link: '/services#custom-manufacturing',
                },
                {
                  icon: '📉',
                  title: 'Low MOQ Production',
                  description: 'Start with as few as 100 pieces per style. Perfect for startups, capsule collections, and limited drops.',
                  link: '/low-moq-clothing-manufacturer-bangladesh',
                },
                {
                  icon: '🏷️',
                  title: 'Private Label / OEM',
                  description: 'Launch or expand your own label with full private label services — labels, tags, packaging, and branding.',
                  link: '/private-label-clothing-manufacturer-bangladesh',
                },
                {
                  icon: '🔥',
                  title: 'Streetwear Manufacturing',
                  description: 'Premium heavyweight fabrics, bold graphics, and drop-ready production schedules for streetwear brands.',
                  link: '/streetwear-manufacturer-bangladesh',
                },
                {
                  icon: '✅',
                  title: 'Quality Control',
                  description: 'Every order goes through AQL 2.5 inspection standards with in-line and end-line checks at every stage.',
                  link: '/services',
                },
                {
                  icon: '🌐',
                  title: 'Global Shipping',
                  description: 'FOB, CIF, and DDP terms with sea, air, and express courier options to 30+ countries worldwide.',
                  link: '/get-a-quote',
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
                >
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A] group-hover:text-[#08CCD4]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#08CCD4]">
                    Learn more
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks headline="How Our Manufacturing Process Works" />

        {/* Why TexVenture */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
                  Why Leading Brands Choose TexVenture
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  We&apos;re not just a factory — we&apos;re your manufacturing partner. Here&apos;s what sets us apart from other clothing manufacturers in Bangladesh.
                </p>
                <div className="mt-8 space-y-6">
                  {[
                    { title: 'Low MOQ from 100 Pieces', desc: 'Test new designs without committing to thousands of units. Mix colours and sizes in one order.' },
                    { title: 'Certified Factory Partners', desc: 'ISO 9001, BSCI, OEKO-TEX, SEDEX, GOTS, and WRAP certifications across our factory network.' },
                    { title: 'Transparent Pricing', desc: 'No hidden fees. We provide detailed cost breakdowns for manufacturing, shipping, and extras.' },
                    { title: 'Dedicated Account Manager', desc: 'One point of contact who understands your brand, your quality standards, and your timeline.' },
                    { title: 'End-to-End Service', desc: 'From tech pack review to door delivery — we handle fabric sourcing, sampling, production, QC, and logistics.' },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#08CCD4]/10">
                        <svg className="h-4 w-4 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#1B2A4A]">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    href="/get-a-quote"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#08CCD4] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#07b8be]"
                  >
                    Get a Free Quote
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Product Categories */}
              <div className="rounded-2xl bg-gray-50 p-8">
                <h3 className="text-lg font-semibold text-[#1B2A4A]">Product Categories We Manufacture</h3>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    { name: 'T-Shirts', moq: '100 pcs', href: '/products/knit-wear' },
                    { name: 'Hoodies', moq: '100 pcs', href: '/products/knit-wear' },
                    { name: 'Polo Shirts', moq: '100 pcs', href: '/products/knit-wear' },
                    { name: 'Denim Jeans', moq: '200 pcs', href: '/products/denim' },
                    { name: 'Activewear', moq: '100 pcs', href: '/products/active-wear' },
                    { name: 'Sweaters', moq: '150 pcs', href: '/products/sweaters' },
                    { name: 'Joggers', moq: '100 pcs', href: '/products/knit-wear' },
                    { name: 'Work Wear', moq: '200 pcs', href: '/products/work-wear' },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 transition hover:shadow-sm"
                    >
                      <span className="text-sm font-medium text-[#1B2A4A]">{item.name}</span>
                      <span className="text-xs text-[#08CCD4]">{item.moq}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsCounter />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ
          headline="Frequently Asked Questions About Clothing Manufacturing in Bangladesh"
          items={faqItems}
        />

        {/* CTA */}
      <InternalLinks currentPage="/custom-clothing-manufacturer-bangladesh" />
        <CTABand
          headline="Ready to Start Manufacturing in Bangladesh?"
          description="Get a free, no-obligation quote within 24 hours. Share your tech pack or tell us what you need — we'll handle the rest."
          buttonText="Get a Free Quote"
          buttonHref="/get-a-quote"
        />

        {/* Internal Links */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
            <h2 className="text-xl font-bold text-[#1B2A4A]">Explore Our Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Low MOQ Manufacturing', desc: 'From 100 pieces per style', href: '/low-moq-clothing-manufacturer-bangladesh' },
                { title: 'Private Label Manufacturing', desc: 'Your brand, our expertise', href: '/private-label-clothing-manufacturer-bangladesh' },
                { title: 'Streetwear Manufacturing', desc: 'Built for the culture', href: '/streetwear-manufacturer-bangladesh' },
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
