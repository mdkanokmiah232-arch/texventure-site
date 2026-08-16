import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CTABand from '@/components/sections/CTABand';
import FAQ from '@/components/sections/FAQ';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import TrustStrip from '@/components/sections/TrustStrip';
import TrustBlock from '@/components/sections/TrustBlock';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Custom Clothing Manufacturer in Bangladesh',
  description:
    'TexVenture is a custom clothing manufacturer in Bangladesh offering low MOQ production from 100 pieces per style. From design to delivery — knitwear, streetwear, wovens, denim, and more.',
  alternates: { canonical: 'https://texventure.com/custom-manufacturing' },
  openGraph: {
    title: 'Custom Clothing Manufacturer in Bangladesh',
    description:
      'Low MOQ custom clothing manufacturing in Bangladesh. 100 pieces per style. BSCI and OEKO-TEX certified.',
    url: 'https://texventure.com/custom-manufacturing',
    siteName: 'TexVenture',
    type: 'website',
  },
};

/* ──────────────────────── FAQ Data ──────────────────────── */
const faqItems = [
  {
    question: 'What is custom clothing manufacturing?',
    answer:
      'Custom clothing manufacturing produces garments to your exact specifications — fabric, colour, measurements, and labelling. At TexVenture, we manage the full cycle: sourcing, sampling, production, QC, and global shipping from Bangladesh.',
  },
  {
    question: 'What is the minimum order quantity (MOQ)?',
    answer:
      'We work with a low MOQ starting from 100 pieces per style. Ideal for emerging brands and streetwear labels who need quality custom production without large commitments.',
  },
  {
    question: 'How long does production take?',
    answer:
      'Sampling takes 7–14 days. Bulk production runs 2–4 weeks after approval. Total timeline: 3–6 weeks from design to finished goods.',
  },
  {
    question: 'Which categories do you manufacture?',
    answer:
      'Seven core categories: Knit Wear, Wovens, Circular Knit, Denim, Sweaters, Work Wear, and Active Wear — each with dedicated production lines.',
  },
  {
    question: 'Do you offer private label manufacturing?',
    answer:
      'Yes. Full private label with your brand labels, tags, and packaging. We also support white label production.',
  },
  {
    question: 'What certifications do your factories hold?',
    answer:
      'BSCI, OEKO-TEX® Standard 100, SEDEX/SMETA, WRAP, and GOTS — ensuring ethical labour, chemical safety, and environmental compliance.',
  },
];

/* ──────────────────────── Capabilities ──────────────────────── */
const capabilities = [
  {
    title: 'Fabric Sourcing',
    description:
      'Access to 200+ mills. Cotton, polyester, linen, bamboo, organic blends, denim, and performance fabrics.',
  },
  {
    title: 'Sampling and Prototyping',
    description:
      'Production-ready samples in 7–14 days. Fit, pre-production, and shipment samples against your spec.',
  },
  {
    title: 'Bulk Production',
    description:
      '500–50,000+ pieces per month across knit, woven, denim, and sweater categories.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Multi-stage QC: fabric inspection, in-line checks, and final AQL 2.5 pre-shipment audit.',
  },
];

/* ──────────────────────── Process Steps ──────────────────────── */
const processSteps = [
  {
    number: '1',
    title: 'Share Your Vision',
    description:
      'Send your sketches, tech packs, or rough idea. We provide a production plan with pricing within 48 hours.',
  },
  {
    number: '2',
    title: 'Sampling and Approval',
    description:
      'We create a prototype. You review fit, fabric, and construction. Revisions included until sign-off.',
  },
  {
    number: '3',
    title: 'Production and QC',
    description:
      'Bulk production with QC at every stage — fabric, cutting, sewing, finishing — maintaining AQL 2.5 standards.',
  },
  {
    number: '4',
    title: 'Delivery',
    description:
      'Inspected, packed, and shipped FOB Chittagong or CIF to your warehouse. All documentation handled.',
  },
];

/* ──────────────────────── Why TexVenture ──────────────────────── */
const whyUs = [
  {
    title: 'Low MOQ, High Flexibility',
    description:
      'Start with 100 pieces per style. Ideal for testing new designs or running limited drops.',
  },
  {
    title: 'Direct Factory Access',
    description:
      'No middlemen. Direct partnerships with audited factories in the Dhaka manufacturing belt.',
  },
  {
    title: 'Certified Factories',
    description:
      'BSCI, OEKO-TEX®, SEDEX, WRAP, or GOTS certified. Ethical manufacturing is our standard.',
  },
  {
    title: 'Transparent Pricing',
    description:
      'Detailed cost breakdowns per unit — fabric, CMT, trims, branding, and shipping.',
  },
  {
    title: 'End-to-End Management',
    description:
      'Single point of contact for sampling, manufacturing, QC, and global shipping.',
  },
  {
    title: 'Global Shipping',
    description:
      'FOB, CIF, or door-to-door to 50+ countries. Customs, documentation, and freight handled.',
  },
];

/* ──────────────────────── Page Component ──────────────────────── */
export default function CustomManufacturingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#08CCD4] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#08CCD4] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Home', href: '/' },
              { name: 'Custom Manufacturing', href: '/custom-manufacturing' },
            ]}
          />
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="brand">Custom Manufacturing</Badge>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Custom Clothing Manufacturer in Bangladesh
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Custom clothing production from 100 pieces per style. Knitwear, streetwear, wovens, denim — BSCI &
              OEKO-TEX® certified factories.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 rounded-full bg-[#08CCD4] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#08CCD4]/25 transition hover:bg-[#07b8be]"
              >
                Get a Free Quote
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/instant-quote"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Instant Price Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ── */}
      <TrustStrip
        items={[
          { number: '15+', label: 'Years Experience' },
          { number: '100', label: 'Piece MOQ' },
          { number: '5', label: 'Certifications' },
          { number: '50+', label: 'Countries Served' },
        ]}
      />

      {/* ── Introduction ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            Your Custom Clothing Manufacturing Partner
          </h2>
          <div className="prose prose-lg mt-6 max-w-none text-gray-600 leading-relaxed">
            <p>
              TexVenture is a Bangladesh-based custom clothing manufacturer managing the entire production cycle for
              brands worldwide. We handle fabric sourcing, sampling, bulk manufacturing, quality control, and global
              logistics — so you can focus on building your brand.
            </p>
            <p>
              We work with brands that order as few as <strong>100 pieces per style</strong>. Every order receives the
              same multi-stage quality inspection and end-to-end management, regardless of volume.
            </p>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">What We Do</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Manufacturing Capabilities
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <Card key={cap.title} className="p-6 transition hover:shadow-lg">
                <h3 className="text-lg font-bold text-[#1B2A4A]">{cap.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{cap.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <HowItWorks steps={processSteps} />

      {/* ── Why Bangladesh ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            Why Manufacture in Bangladesh?
          </h2>
          <div className="prose prose-lg mt-6 max-w-none text-gray-600 leading-relaxed">
            <p>
              Bangladesh is the world&apos;s second-largest garment exporter with 1,500+ factories and 4 million
              workers. Manufacturing costs are <strong>30–50% lower than China</strong> with comparable quality.
            </p>
            <p>
              Our partner factories feature automated cutting, digital printing, and in-house testing labs — all
              holding BSCI, OEKO-TEX®, SEDEX, and GOTS certifications for ethical, compliant production.
            </p>
            <p>
              Fabric lead times typically run 5–10 days for stock cotton and poly-cotton blends, with sampling
              completed in 7–14 days and bulk cutting starting once fit approval is signed off. We work primarily
              with single jersey, pique, French terry, twill, and rib-knit fabrications, sourced from mills within
              a 60km radius of Dhaka to keep transit time and cost predictable.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Trust TexVenture ── */}
      <TrustBlock
        headline="Our Quality Process"
        intro="Every custom order runs through the same audited quality system, regardless of order size — from factory vetting to final AQL 2.5 inspection before your shipment leaves Bangladesh."
      />

      {/* ── Why TexVenture ── */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">Why TexVenture</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Why Brands Choose Us
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((item) => (
              <Card key={item.title} className="p-8 transition hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#08CCD4]/10 text-[#08CCD4]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#1B2A4A]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Production Categories ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">Product Categories</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              7 Manufacturing Categories
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Knit Wear', desc: 'T-shirts, polos, tank tops', href: '/products/knit-wear' },
              { name: 'Wovens', desc: 'Shirts, blouses, dresses', href: '/products/wovens' },
              { name: 'Circular Knit', desc: 'Jerseys, leggings', href: '/products/circular-knit' },
              { name: 'Denim', desc: 'Jeans, jackets, shorts', href: '/products/denim' },
              { name: 'Sweaters', desc: 'Pullovers, cardigans', href: '/products/sweaters' },
              { name: 'Work Wear', desc: 'Uniforms, hi-vis', href: '/products/work-wear' },
              { name: 'Active Wear', desc: 'Gym wear, athleisure', href: '/products/active-wear' },
            ].map((cat) => (
              <Link key={cat.name} href={cat.href} className="group">
                <Card className="p-6 transition-all hover:shadow-lg hover:border-[#08CCD4]/30">
                  <h3 className="text-lg font-bold text-[#1B2A4A] group-hover:text-[#08CCD4] transition">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">{cat.desc}</p>
                  <span className="mt-3 inline-flex items-center text-sm font-medium text-[#08CCD4]">
                    View Details →
                  </span>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── FAQ ── */}
      <FAQ items={faqItems} headline="Frequently Asked Questions" />

      {/* ── CTA ── */}
      <CTABand
        headline="Ready to Start Your Custom Production?"
        description="Get a detailed production plan and pricing within 48 hours. No commitment required."
        buttonText="Get a Free Quote"
        buttonHref="/get-a-quote"
      />
    </>
  );
}
