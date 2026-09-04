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
  { slug: "knit-wear", name: "Knit Wear", description: "Premium jersey, interlock, and piqué knit garments — t-shirts, polos, and hoodies", image: "https://i.postimg.cc/52GmchMv/Knit-Wear.webp", alt: "Custom knit wear t-shirts manufactured in Bangladesh by TexVenture" },
  { slug: "wovens", name: "Woven", description: "Button-down shirts, blouses, and dresses tailored from premium woven fabrics", image: "https://i.postimg.cc/HkKtGqC4/Wovens.webp", alt: "Woven clothing manufacturer Bangladesh — shirts and blouses" },
  { slug: "circular-knit", name: "Circular Knit", description: "Seamless leggings, underwear, and performance base layers with 4-way stretch", image: "https://i.postimg.cc/BnyCWrGK/Circular-Knit.webp", alt: "Circular knit seamless leggings and joggers produced in Bangladesh" },
  { slug: "denim", name: "Denim", description: "Raw, washed, and distressed denim jeans, jackets, and shorts to your spec", image: "https://i.postimg.cc/Sx5G0BpC/Denim.webp", alt: "Custom denim jeans and jackets manufactured in Bangladesh" },
  { slug: "sweaters", name: "Sweaters", description: "Full-fashion knit sweaters and cardigans in wool, cotton, and acrylic yarns", image: "https://i.postimg.cc/nh518yt4/Sweaters.webp", alt: "Knit sweaters and cardigans produced in Bangladesh factories" },
  { slug: "work-wear", name: "Work Wear", description: "Durable uniforms, safety vests, and industrial garments built to last", image: "https://i.postimg.cc/Cxt4y3VC/Work-Wear.webp", alt: "Industrial work wear uniforms and safety vests manufactured in Bangladesh" },
  { slug: "active-wear", name: "Active Wear", description: "Performance sportswear, gym sets, yoga wear, and moisture-wicking athletic garments", image: "https://i.postimg.cc/QdPqL2r7/Active-Wear.webp", alt: "Activewear and sportswear manufacturer in Bangladesh" },
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
      "TexVenture specializes in three main categories: Women's Wear (dresses, blouses, tops, skirts, activewear), Men's Wear (t-shirts, polos, shirts, jeans, formal wear), and Kid's Wear (comfortable and durable children's clothing). We serve brands across all these categories with custom manufacturing solutions from 100 pieces MOQ.",
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


      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">Sourcing Guides</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              From the Journal
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-gray-500">
              Practical guides to help you navigate apparel sourcing with confidence.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {latestGuides.map((guide) => (
              <Link key={guide.slug} href={`/blog/${guide.slug}`}>
                <Card hover className="h-full">
                  {guide.featuredImage ? (
                    <img
                      src={guide.featuredImage}
                      alt={guide.imageAlt || guide.title}
                      className="w-full rounded-xl object-cover"
                    />
                  ) : (
                    <div className="flex h-40 items-center justify-center rounded-xl bg-gray-100">
                      <span className="text-4xl">📄</span>
                    </div>
                  )}
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
