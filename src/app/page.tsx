import type { Metadata } from "next";
import Link from "next/link";

import HeroSection from "@/components/sections/HeroSection";
import TrustStrip from "@/components/sections/TrustStrip";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import CTABand from "@/components/sections/CTABand";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

import { company } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { guides } from "@/data/guides";

/* ─── Home Page Product Categories (matches nav menu) ─── */
const homeProducts = [
  { slug: "knit-wear", name: "Knit Wear", description: "Premium jersey, interlock, and piqué knit garments — t-shirts, polos, and hoodies", image: "https://i.postimg.cc/RZ2q0vBC/t-shart.webp", alt: "Custom knit wear t-shirts manufactured in Bangladesh by TexVenture" },
  { slug: "wovens", name: "Wovens", description: "Button-down shirts, blouses, and dresses tailored from premium woven fabrics", image: "https://i.postimg.cc/FHY7m725/hoodies.webp", alt: "Woven clothing manufacturer Bangladesh — shirts and blouses" },
  { slug: "circular-knit", name: "Circular Knit", description: "Seamless leggings, underwear, and performance base layers with 4-way stretch", image: "https://i.postimg.cc/Dzs0JRvq/Pants-Joggers.webp", alt: "Circular knit seamless leggings and joggers produced in Bangladesh" },
  { slug: "denim", name: "Denim", description: "Raw, washed, and distressed denim jeans, jackets, and shorts to your spec", image: "https://i.postimg.cc/6qHpxXcW/Jackets.webp", alt: "Custom denim jeans and jackets manufactured in Bangladesh" },
  { slug: "active-wear", name: "Active Wear", description: "Performance sportswear, gym sets, yoga wear, and moisture-wicking athletic garments", image: "https://i.postimg.cc/3JRwCkrG/Activewear.webp", alt: "Activewear and sportswear manufacturer in Bangladesh" },
  { slug: "sweaters", name: "Sweaters", description: "Full-fashion knit sweaters and cardigans in wool, cotton, and acrylic yarns", image: "https://i.postimg.cc/nVwxx0ZH/Kids.jpg", alt: "Knit sweaters and cardigans produced in Bangladesh factories" },
  { slug: "work-wear", name: "Work Wear", description: "Durable uniforms, safety vests, and industrial garments built to last", image: "https://i.postimg.cc/NFNjvc4P/Accessories.webp", alt: "Industrial work wear uniforms and safety vests manufactured in Bangladesh" },
];

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  title: "Best Clothing Manufacturer & Supplier in Bangladesh | TexVenture",
  description:
    "TexVenture is a leading clothing manufacturer & supplier in Bangladesh, offering custom garment production from 100 pcs MOQ, ISO 9001 certified, with global shipping.",
  openGraph: {
    title: "Best Clothing Manufacturer & Supplier in Bangladesh | TexVenture",
    description:
      "TexVenture is a leading clothing manufacturer & supplier in Bangladesh, offering custom garment production from 100 pcs MOQ, ISO 9001 certified, with global shipping.",
    url: "https://texventure.com",
    images: [
      {
        url: "https://texventure.com/images/og-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "TexVenture — Best Clothing Manufacturer & Supplier in Bangladesh",
      },
    ],
  },
  alternates: {
    canonical: "https://texventure.com",
  },
};

/* ─── JSON-LD Structured Data ─── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TexVenture",
  url: "https://texventure.com",
  logo: "https://texventure.com/images/logo.png",
  description:
    "TexVenture is a Bangladesh-based clothing manufacturer and supplier connecting global brands with 20+ certified garment factories, offering low MOQ production from 100 pieces.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House: 2, Road: 3/A, Sector: 5",
    addressLocality: "Uttara, Dhaka",
    addressCountry: "BD",
    postalCode: "1230",
  },
  telephone: "+880****6246",
  email: "info@texventure.com",
  sameAs: [
    "https://www.facebook.com/texventure",
    "https://www.linkedin.com/company/texventure",
    "https://wa.me/8801354316246",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "TexVenture — Clothing Manufacturer & Supplier in Bangladesh",
  url: "https://texventure.com",
  logo: "https://texventure.com/images/logo.png",
  description:
    "Leading clothing manufacturer and supplier in Bangladesh. Custom garment production, low MOQ from 100 pcs, 20+ certified factories, global shipping.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House: 2, Road: 3/A, Sector: 5",
    addressLocality: "Uttara",
    addressRegion: "Dhaka",
    addressCountry: "BD",
    postalCode: "1230",
  },
  telephone: "+880****6246",
  email: "info@texventure.com",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.8676,
    longitude: 90.3995,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/texventure",
    "https://www.linkedin.com/company/texventure",
    "https://wa.me/8801354316246",
  ],
};

/* ─── FAQ Data ─── */
const faqItems = [
  {
    question: "Who is the best clothing manufacturer in Bangladesh?",
    answer:
      "TexVenture is widely recognised as one of the best clothing manufacturers in Bangladesh, with over 10 years of experience, a network of 20+ certified garment factories, and a proven track record of delivering quality clothing to 8+ global brands. We handle everything from fabric sourcing to door-to-door delivery with low MOQs starting from just 100 pieces.",
  },
  {
    question: "What is the minimum order quantity (MOQ) for garment manufacturing in Bangladesh?",
    answer:
      "TexVenture offers one of the lowest MOQs in the industry — starting from just 100 pieces per style. This makes us ideal for startups, small brands, and capsule collections that don't need thousands of units to get started. Some products may have slightly different MOQs depending on fabric and complexity.",
  },
  {
    question: "Are TexVenture's factories certified?",
    answer:
      "Yes. Our factory partners hold multiple internationally recognised certifications including ISO 9001:2015 (Quality Management), BSCI (Business Social Compliance Initiative), OEKO-TEX Standard 100 (Product Safety), SGS (Global Certification), Sedex (Ethical Trade), and GOTS (Global Organic Textile Standard). We conduct multi-point quality control including in-line inspections, end-line checks, and final AQL 2.5 inspections before shipping.",
  },
  {
    question: "How long does sampling and production take?",
    answer:
      "Sampling typically takes 5–7 business days. Once samples are approved, mass production ranges from 40 to 75 days depending on the product type, order volume, and complexity. Lead times include fabric procurement, cutting, sewing, finishing, and quality inspection. We provide regular production updates throughout the process.",
  },
  {
    question: "What types of clothing does TexVenture manufacture?",
    answer:
      "TexVenture covers 7 main product categories: Knit Wear (t-shirts, polos, hoodies), Wovens (shirts, blouses, dresses), Circular Knit (seamless leggings, underwear), Denim (jeans, jackets, shorts), Sweaters (pullovers, cardigans), Work Wear (uniforms, hi-vis garments), and Activewear (leggings, sports bras, gym sets). We serve brands across all these categories with custom manufacturing solutions.",
  },
  {
    question: "Does TexVenture work with small or startup brands?",
    answer:
      "Absolutely. We specialise in working with small and growing brands. Our low MOQ of 100 pieces per style is designed specifically for startups, capsule collections, and limited drops. We provide the same level of quality control, factory access, and end-to-end service to a 100-piece order as we do to a 10,000-piece order.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

/* ─── Static Data ─── */

const trustStats = [
  { number: "10+", label: "Years Experience" },
  { number: "20+", label: "Vetted Factories" },
  { number: "5", label: "Quality Certifications" },
  { number: "100", label: "Piece MOQ" },
  { number: "8+", label: "Global Clients" },
  { number: "7–14", label: "Day Sampling" },
];

const whyItems = [
  {
    icon: "🏭",
    title: "Direct Factory Access",
    description:
      "We maintain relationships with 20+ vetted factories across Bangladesh — giving you direct access to manufacturing capacity without the middleman.",
  },
  {
    icon: "📉",
    title: "Low MOQ from 100 Pieces",
    description:
      "No factory wants 5,000 pieces on day one. We specialise in connecting brands with factories that accept orders as low as 100 pieces per style.",
  },
  {
    icon: "🔍",
    title: "Rigorous Quality Control",
    description:
      "In-line and end-line inspections, AQL 2.5 standards, photo and video approvals — we ensure every piece meets your quality bar before shipping.",
  },
  {
    icon: "🌍",
    title: "End-to-End Logistics",
    description:
      "From tech pack to doorstep. We handle fabric sourcing, sampling, production, QC, export documentation, and door-to-door shipping worldwide.",
  },
];

/* ─── Helpers ─── */

function getLatestGuides(count: number) {
  return [...guides]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, count);
}

/* ─── Page Component ─── */

export default function HomePage() {
  const latestGuides = getLatestGuides(3);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section — H1 */}
      <HeroSection
        headline="Trusted Clothing Manufacturer & Supplier in Bangladesh"
        subheadline="Premium garment manufacturing in Bangladesh from just 100 pieces per style. Custom clothing production, fabric sourcing, and end-to-end supply chain for brands worldwide."
        primaryCta={{ text: "Get a Quote", href: "/quote" }}
        secondaryCta={{ text: "View Products", href: "/products" }}
      />

      {/* 1b. Definition / Summary Box — citable by AI search engines */}
      <section className="bg-[#08CCD4]/5 border-y border-[#08CCD4]/10">
        <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
          <p className="text-center text-base font-medium leading-relaxed text-[#1B2A4A] sm:text-lg">
            <strong>TexVenture</strong> is a Bangladesh-based clothing manufacturer
            and supplier connecting global brands with 20+ certified garment
            factories, offering low MOQ production from 100 pieces, end-to-end
            logistics, and quality control to 30+ countries worldwide.
          </p>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <TrustStrip items={trustStats} />

      {/* 3. About TexVenture — H2 (no longer duplicate of H1) */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Badge variant="brand">About TexVenture</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
                Best Garment Manufacturer in Bangladesh for Global Brands
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                TexVenture is a leading clothing manufacturer and supplier in
                Bangladesh that connects global brands with vetted garment
                factories. We handle everything from fabric sourcing and sampling
                to production, quality control, and logistics — so you can focus
                on building your brand.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                With over 10 years of experience and a network of 20+ certified
                garment factories, we deliver quality clothing at competitive
                prices with low MOQs starting from just 100 pieces.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-[#08CCD4] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#08CCD4]/25 transition hover:bg-[#07b8be]"
                >
                  Learn More About Us
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/about-texventure.webp"
                  alt="TexVenture team at garment factory in Dhaka, Bangladesh — clothing manufacturer and supplier"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-start justify-center pt-6">
                  <span className="rounded-full bg-white/90 backdrop-blur px-5 py-2 text-sm font-bold text-[#1B2A4A] shadow-lg">About TexVenture</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#1B2A4A] p-6 text-white shadow-xl">
                <div className="text-3xl font-bold text-[#08CCD4]">10+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Category Grid */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">our Products</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Clothing Manufacturers & Suppliers — What We Produce
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              Seven product categories covering the full spectrum of apparel
              manufacturing — from everyday basics to technical performance
              wear.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {homeProducts.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`}>
                <Card hover className="group h-full overflow-hidden border border-gray-200 transition-all duration-300 hover:border-[#08CCD4] hover:border-2">
                  <div className="h-40 overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#1B2A4A] sm:text-xl">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#08CCD4]">
                    Learn more
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}

            {/* 8th card - CTA Contact */}
            <Link href="/contact">
              <Card hover className="flex h-full flex-col items-center justify-center !bg-[#01A1AD] text-center text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-2xl text-white">
                  ✉️
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  Get a Free Quote
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Ready to start your next collection? Contact us today.
                </p>
                <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-white px-5 py-2 text-sm font-semibold text-[#01A1AD]">
                  Contact Us
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 4b. 7 Manufacturing Categories */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">our all product categories</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              7 Manufacturing Categories
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Knit Wear", desc: "T-shirts, polos, and tank tops crafted from premium cotton and cotton-blend fabrics", href: "/products/knit-wear" },
              { name: "Wovens", desc: "Shirts, blouses, and dresses tailored from premium woven fabrics for everyday wear", href: "/products/wovens" },
              { name: "Circular Knit", desc: "Jerseys and leggings engineered for a form-fitting stretch with lasting recovery", href: "/products/circular-knit" },
              { name: "Denim", desc: "Jeans, jackets, and shorts finished with custom washes, fades, and denim treatments", href: "/products/denim" },
              { name: "Sweaters", desc: "Pullovers and cardigans crafted from knit and fleece constructions for cozy layering", href: "/products/sweaters" },
              { name: "Work Wear", desc: "Uniforms and hi-vis garments engineered for durability, safety, and all-day comfort", href: "/products/work-wear" },
              { name: "Active Wear", desc: "Gym wear and athleisure crafted for performance, breathability, and daily comfort", href: "/products/active-wear" },
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

            {/* 8th card - CTA Contact */}
            <Link href="/contact" className="group">
              <Card className="flex h-full flex-col items-center justify-center p-6 text-center !bg-[#01A1AD] text-white transition-all hover:shadow-lg">
                <h3 className="text-lg font-bold text-white">
                  Get a Free Quote
                </h3>
                <p className="mt-2 text-sm text-white/80">
                  Ready to start your next collection?
                </p>
                <span className="mt-3 inline-flex items-center text-sm font-medium text-white">
                  Contact Us →
                </span>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Why TexVenture */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">Why Us</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Why {company.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              We make clothing manufacturing in Bangladesh simple, transparent, and
              reliable — for brands of every size.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyItems.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08CCD4]/10 text-3xl">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <HowItWorks />

      {/* 7. Testimonials + Client Logos */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">Trusted By Brands</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Clothing Suppliers in Bangladesh — Trusted by 8+ Global Brands
            </h2>
          </div>

          {/* Client logos strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 opacity-60">
            {["StreetVault", "Nordic Basics", "Ironwork Denim", "MoveFit Athletics", "Union Workwear", "Loop Knit Studio"].map((brand) => (
              <div key={brand} className="rounded-lg bg-white px-6 py-3 shadow-sm">
                <span className="text-sm font-semibold text-[#1B2A4A]">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials
        headline="What Our Clients Say About Our Clothing Manufacturing"
        testimonials={testimonials.slice(0, 3).map((t) => ({
          name: t.clientName,
          role: t.clientRole,
          company: t.clientCompany,
          quote: t.quote,
          rating: t.rating,
        }))}
      />

      {/* 7b. Certifications — Verifiable */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">Quality Certifications</Badge>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
              Verified Factory Certifications
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {[
              { name: "ISO 9001:2015", desc: "Quality Management System", url: "https://www.iso.org/standard/62085.html" },
              { name: "BSCI", desc: "Business Social Compliance", url: "https://www.amfori.org/our-solutions/bsci" },
              { name: "OEKO-TEX® Std 100", desc: "Product Safety Certified", url: "https://www.oeko-tex.com/en/our-standards/oeko-tex-standard-100" },
              { name: "SGS Certified", desc: "Global Inspection & Certification", url: "https://www.sgs.com/en/services/sgs-certification" },
              { name: "Sedex Member", desc: "Ethical Trade Auditing", url: "https://www.sedex.com/" },
            ].map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 transition hover:border-[#08CCD4] hover:shadow-md"
              >
                <svg className="h-5 w-5 flex-shrink-0 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <div>
                  <div className="text-sm font-semibold text-[#1B2A4A] group-hover:text-[#08CCD4]">{cert.name}</div>
                  <div className="text-xs text-gray-400">{cert.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Blog / Guides Preview */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <Badge variant="brand">Sourcing Guides</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
                From the Journal
              </h2>
              <p className="mt-2 text-gray-500">
                Practical guides to help you navigate apparel sourcing with
                confidence.
              </p>
            </div>
            <Link
              href="/guides"
              className="text-sm font-semibold text-[#08CCD4] transition hover:text-[#07b8be]"
            >
              View all guides →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestGuides.map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                <Card hover className="h-full">
                  <div className="flex h-40 items-center justify-center rounded-xl bg-gray-100">
                    <span className="text-4xl">📄</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <Badge variant="outline">{guide.category}</Badge>
                    <span className="text-xs text-gray-400">
                      {guide.readTimeMinutes} min read
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-[#1B2A4A] line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                    {guide.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                    <span>{guide.author.name}</span>
                    <span>·</span>
                    <span>
                      {new Date(guide.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">FAQ</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Frequently Asked Questions About Clothing Manufacturing in Bangladesh
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-[#1B2A4A]">
                  {item.question}
                  <svg className="h-5 w-5 flex-shrink-0 text-[#08CCD4] transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-gray-500">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Band */}
      <CTABand />
    </>
  );
}
