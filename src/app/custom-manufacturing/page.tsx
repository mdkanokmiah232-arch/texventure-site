import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CTABand from '@/components/sections/CTABand';
import FAQ from '@/components/sections/FAQ';
import HowItWorks from '@/components/sections/HowItWorks';
import Testimonials from '@/components/sections/Testimonials';
import TrustStrip from '@/components/sections/TrustStrip';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Custom Clothing Manufacturer in Bangladesh | TexVenture',
  description:
    'TexVenture is a custom clothing manufacturer in Bangladesh offering low MOQ production from 100 pieces per style. From design to delivery — knitwear, streetwear, wovens, denim, and more.',
  alternates: { canonical: 'https://texventure.com/custom-manufacturing' },
  openGraph: {
    title: 'Custom Clothing Manufacturer in Bangladesh | TexVenture',
    description:
      'Low MOQ custom clothing manufacturing in Bangladesh. 100 pieces per style. BSCI & OEKO-TEX certified.',
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
      'Custom clothing manufacturing is the process of producing garments according to a buyer\'s unique specifications — including fabric type, colour, measurements, labelling, and packaging. Unlike ready-made or off-the-shelf production, every element of the garment is designed and manufactured to match your brand\'s exact requirements. At TexVenture, we manage the full cycle: sourcing fabric, creating patterns, sampling, production, quality inspection, and global shipping — all from our partner factories in Bangladesh.',
  },
  {
    question: 'What is the minimum order quantity (MOQ) for custom clothing?',
    answer:
      'TexVenture works with a low MOQ starting from just 100 pieces per style. This makes us ideal for emerging brands, streetwear labels, and small-to-mid-size retailers who need quality custom production without committing to thousands of units. MOQ may vary slightly depending on fabric availability and complexity of the design, but our standard threshold remains among the lowest in the Bangladesh manufacturing sector.',
  },
  {
    question: 'How long does custom clothing production take?',
    answer:
      'From design approval to finished goods, custom production typically takes 3–6 weeks depending on order volume and complexity. Sampling takes approximately 7–14 days. Once samples are approved, bulk production runs for 2–4 weeks, followed by quality inspection and shipping. We provide a detailed timeline with every order so you can plan your launch or restock with confidence.',
  },
  {
    question: 'Which clothing categories does TexVenture manufacture?',
    answer:
      'We manufacture across seven core categories: Knit Wear (t-shirts, polos, tank tops), Wovens (shirts, blouses, dresses), Circular Knit (jerseys, leggings), Denim (jeans, jackets, shorts), Sweaters (pullovers, cardigans, knits), Work Wear (uniforms, hi-vis, industrial), and Active Wear (gym wear, athleisure, performance garments). Each category has dedicated production lines and specialised quality control.',
  },
  {
    question: 'Do you offer private label and white label manufacturing?',
    answer:
      'Yes. We offer full private label manufacturing where your brand\'s labels, tags, and packaging are applied to custom-designed garments. We also support white label production where pre-designed garments are branded with your labels. Both options include custom packaging, hang tags, woven labels, and barcode integration as needed.',
  },
  {
    question: 'What certifications do your factories hold?',
    answer:
      'Our partner factories hold BSCI (Business Social Compliance Initiative), OEKO-TEX® Standard 100, SEDEX/SMETA, WRAP (Worldwide Responsible Accredited Production), and GOTS (Global Organic Textile Standard) certifications. These ensure ethical labour practices, environmentally responsible production, and chemical safety in every garment we produce.',
  },
  {
    question: 'How do you handle quality control?',
    answer:
      'Quality control is built into every stage. We conduct incoming fabric inspection (AQL 2.5), in-line checks during production, and a final pre-shipment inspection using the AQL (Acceptable Quality Level) standard. Buyers can request third-party inspection or visit factories directly. We also provide photos, videos, and detailed QC reports at each milestone.',
  },
];

/* ──────────────────────── Capabilities ──────────────────────── */
const capabilities = [
  {
    title: 'Fabric Sourcing',
    description:
      'Access to 200+ mills across Bangladesh, China, and India. We source cotton, polyester, linen, bamboo, organic blends, denim, and performance fabrics — matching your spec, hand-feel, and budget.',
  },
  {
    title: 'Pattern Making & Grading',
    description:
      'In-house pattern makers create precise tech packs and graded patterns across your full size range. Digital pattern cutting reduces waste and accelerates sampling.',
  },
  {
    title: 'Sampling & Prototyping',
    description:
      'From initial prototype to production-ready sample in 7–14 days. We provide fit samples, pre-production samples, and shipment samples — each reviewed against your approved spec sheet.',
  },
  {
    title: 'Bulk Production',
    description:
      'Factory lines producing 500–50,000+ pieces per month across knit, woven, denim, and sweater categories. Scalable capacity that grows with your brand.',
  },
  {
    title: 'Custom Branding',
    description:
      'Woven labels, printed labels, hang tags, embroidery, screen printing, sublimation, heat transfer, and custom packaging — every branding element manufactured to your spec.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Multi-stage QC: incoming fabric inspection, in-line production checks, and final AQL 2.5 pre-shipment audit. Full transparency with photos, reports, and third-party inspection access.',
  },
  {
    title: 'Logistics & Shipping',
    description:
      'FOB Chittagong or CIF to your door. We handle customs documentation, freight forwarding, and door-to-door delivery via sea, air, or express courier to 50+ countries.',
  },
  {
    title: 'Compliance & Certification',
    answer:
      'Every factory in our network holds BSCI, OEKO-TEX®, SEDEX, or WRAP certification. We ensure ethical manufacturing, chemical safety, and social compliance throughout the supply chain.',
  },
];

/* ──────────────────────── Process Steps ──────────────────────── */
const processSteps = [
  {
    number: '1',
    title: 'Share Your Vision',
    description:
      'Send us your design sketches, tech packs, reference samples, or even a rough idea. Our team will review your requirements and provide a detailed production plan with pricing within 48 hours.',
  },
  {
    number: '2',
    title: 'Sampling & Approval',
    description:
      'We create a prototype sample based on your specifications. You review the fit, fabric, colour, and construction. Revisions are included until you sign off on the final sample.',
  },
  {
    number: '3',
    title: 'Production & Quality Control',
    description:
      'Once the sample is approved, bulk production begins. Our QC team monitors every stage — fabric inspection, cutting, sewing, finishing, and packing — maintaining AQL 2.5 standards throughout.',
  },
  {
    number: '4',
    title: 'Delivery to Your Door',
    description:
      'Finished goods are inspected, packed, and shipped FOB Chittagong or CIF to your warehouse. We handle all documentation, customs, and logistics — you receive your order on schedule.',
  },
];

/* ──────────────────────── Why TexVenture ──────────────────────── */
const whyUs = [
  {
    title: 'Low MOQ, High Flexibility',
    description:
      'Start with just 100 pieces per style. No massive commitments. Ideal for emerging brands testing new designs or established labels running limited drops.',
  },
  {
    title: 'Direct Factory Access',
    description:
      'No middlemen. We work directly with audited factories in the Dhaka manufacturing belt — giving you faster communication, better pricing, and full supply chain visibility.',
  },
  {
    title: 'End-to-End Management',
    description:
      'From fabric sourcing to final delivery, we handle every step. You get a single point of contact managing your entire production cycle — sampling, manufacturing, QC, and shipping.',
  },
  {
    title: 'Certified Factories',
    description:
      'All partner factories hold BSCI, OEKO-TEX®, SEDEX, WRAP, or GOTS certifications. Ethical manufacturing isn\'t optional — it\'s our standard.',
  },
  {
    title: 'Transparent Pricing',
    description:
      'No hidden costs. We provide detailed cost breakdowns per unit — fabric, CMT (Cut-Make-Trim), trims, branding, and shipping — so you know exactly what you\'re paying for.',
  },
  {
    title: 'Global Shipping',
    description:
      'FOB Chittagong, CIF, or door-to-door delivery to 50+ countries. We handle customs, documentation, and freight — so your products arrive on time and compliant.',
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
              TexVenture is a custom clothing manufacturer in Bangladesh producing knitwear, streetwear, wovens, denim,
              and activewear — from 100 pieces per style with BSCI and OEKO-TEX® certified factories.
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
          { number: '5', label: 'Factory Certifications' },
          { number: '50+', label: 'Production Lines' },
          { number: '50+', label: 'Countries Served' },
        ]}
      />

      {/* ── Introduction ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            Your Trusted Custom Clothing Manufacturing Partner
          </h2>
          <div className="prose prose-lg mt-8 max-w-none text-gray-600 leading-relaxed">
            <p>
              Custom clothing manufacturing is the backbone of modern fashion brands. Whether you&apos;re launching a
              streetwear label, scaling an athleisure line, or sourcing work uniforms for a corporate client, the ability
              to produce garments to your exact specifications — at the right quality, price, and timeline — determines
              your competitive edge.
            </p>
            <p>
              TexVenture is a Bangladesh-based custom clothing manufacturer and buying house that manages the entire
              production cycle for brands worldwide. We don&apos;t just connect you with a factory — we become your
              production partner, handling fabric sourcing, pattern making, sampling, bulk manufacturing, quality control,
              and global logistics from our base in Dhaka.
            </p>
            <p>
              Bangladesh is the world&apos;s second-largest garment exporter, and for good reason. The country produces
              over $45 billion in apparel annually, with a deeply specialised workforce, vertically integrated mills,
              and competitive pricing that Western manufacturers simply cannot match. But navigating this ecosystem
              requires local knowledge, established factory relationships, and rigorous quality oversight — that&apos;s
              exactly what TexVenture provides.
            </p>
            <p>
              Our production network spans seven core categories: <strong>Knit Wear</strong> (t-shirts, polos, tank tops),
              <strong> Wovens</strong> (shirts, blouses, dresses), <strong>Circular Knit</strong> (jerseys, leggings),
              <strong> Denim</strong> (jeans, jackets, shorts), <strong>Sweaters</strong> (pullovers, cardigans),
              <strong> Work Wear</strong> (uniforms, hi-vis), and <strong>Active Wear</strong> (gym wear, athleisure).
              Each category has dedicated production lines, specialised QC teams, and fabric sourcing networks.
            </p>
            <p>
              What sets us apart is our commitment to transparency and low minimums. We work with brands that order as
              few as 100 pieces per style — because we believe great design shouldn&apos;t require a six-figure
              commitment. Every order receives the same attention to detail, the same multi-stage quality inspection,
              and the same end-to-end management regardless of volume.
            </p>
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">What We Do</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              End-to-End Manufacturing Capabilities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              From the first fabric swatch to the final shipment — we manage every step of your production cycle.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ── Detailed Content Section ── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            Why Bangladesh for Custom Clothing Manufacturing?
          </h2>
          <div className="prose prose-lg mt-8 max-w-none text-gray-600 leading-relaxed">
            <p>
              Bangladesh has emerged as the premier destination for custom clothing manufacturing, and the numbers speak
              for themselves. The country&apos;s garment industry employs over 4 million workers, operates across 1,500+
              factories, and exports to virtually every country on the planet. The Dhaka manufacturing belt — stretching
              from Gazipur to Narayanganj — houses some of the most advanced garment production facilities in South Asia.
            </p>
            <h3 className="text-xl font-bold text-[#1B2A4A]">Cost Advantage Without Compromise</h3>
            <p>
              Manufacturing costs in Bangladesh are 30–50% lower than China and 20–30% lower than Vietnam for comparable
              quality. This isn&apos;t about cutting corners — it&apos;s about a mature ecosystem with specialised
              labour, competitive wages, and vertically integrated supply chains. Cotton is sourced locally from
              Bangladesh&apos;s own mills or imported from India, Pakistan, and Australia at competitive rates. CMT
              (Cut-Make-Trim) costs remain among the lowest globally, and the country&apos;s duty-free access to
              European markets (under EBA — Everything But Arms) provides additional cost benefits for EU-bound orders.
            </p>
            <h3 className="text-xl font-bold text-[#1B2A4A]">Quality Infrastructure</h3>
            <p>
              Modern Bangladesh factories rival production facilities anywhere in the world. Automated cutting machines,
              computerised embroidery, digital printing, and AI-assisted quality control systems are now standard in
              Tier-1 factories. Our partner facilities feature dedicated production lines for each garment category,
              climate-controlled fabric storage, and in-house testing labs for shrinkage, colourfastness, and tensile
              strength — ensuring every piece meets international standards before it ships.
            </p>
            <h3 className="text-xl font-bold text-[#1B2A4A]">Ethical Manufacturing</h3>
            <p>
              The post-Rana Plaza era transformed Bangladesh&apos;s garment industry. Today, the country leads South Asia
              in factory safety, labour rights, and environmental compliance. Our partner factories hold BSCI, OEKO-TEX®
              Standard 100, SEDEX/SMETA, WRAP, and GOTS certifications. Regular third-party audits, fire safety
              improvements, and worker welfare programmes ensure that every garment we produce is made ethically and
              sustainably. We believe that responsible manufacturing isn&apos;t just good ethics — it&apos;s good
              business. Buyers increasingly demand supply chain transparency, and our certified factory network gives you
              the documentation and audit trails your customers expect.
            </p>
            <h3 className="text-xl font-bold text-[#1B2A4A]">Speed to Market</h3>
            <p>
              Time-to-market is critical in fashion. Our streamlined process — from design handover to shipped goods —
              takes 3–6 weeks for most orders. Sampling takes 7–14 days, and once approved, bulk production runs for
              2–4 weeks depending on volume. We maintain buffer stock of popular base fabrics for common garment types,
              which can reduce lead times by an additional 5–7 days. For urgent orders, we offer air-freight options
              that deliver finished goods to major global cities within 5–7 days of production completion.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why TexVenture ── */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">Why TexVenture</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Why Brands Choose TexVenture
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              We&apos;re not just a supplier — we&apos;re your production partner, quality gatekeeper, and logistics
              coordinator rolled into one.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">Product Categories</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Custom Manufacturing Across 7 Categories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              Each category has dedicated production lines, specialised expertise, and optimised supply chains.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Knit Wear', desc: 'T-shirts, polos, tank tops, casual knits', href: '/products/knit-wear' },
              { name: 'Wovens', desc: 'Shirts, blouses, dresses, formal wear', href: '/products/wovens' },
              { name: 'Circular Knit', desc: 'Jerseys, leggings, seamless garments', href: '/products/circular-knit' },
              { name: 'Denim', desc: 'Jeans, jackets, shorts, denim skirts', href: '/products/denim' },
              { name: 'Sweaters', desc: 'Pullovers, cardigans, knitwear', href: '/products/sweaters' },
              { name: 'Work Wear', desc: 'Uniforms, hi-vis, industrial clothing', href: '/products/work-wear' },
              { name: 'Active Wear', desc: 'Gym wear, athleisure, performance', href: '/products/active-wear' },
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
