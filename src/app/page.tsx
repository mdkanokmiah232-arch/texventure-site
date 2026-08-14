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
import { services } from "@/data/services";
import { products } from "@/data/products";
import { testimonials } from "@/data/testimonials";
import { guides } from "@/data/guides";

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  title: "TexVenture — Apparel Sourcing Partner for Growing Brands",
  description:
    "Bangladesh apparel sourcing & buying house. Custom manufacturing, private label, low MOQ from 100 pieces. Knitwear, wovens, denim, sweaters, active wear & work wear for brands worldwide.",
  openGraph: {
    title: "TexVenture — Apparel Sourcing Partner for Growing Brands",
    description:
      "Bangladesh apparel sourcing & buying house. Custom manufacturing, private label, low MOQ from 100 pieces. Knitwear, wovens, denim, sweaters, active wear & work wear.",
    url: "https://texventure.com",
  },
  alternates: {
    canonical: "https://texventure.com",
  },
};

/* ─── Static Data ─── */

const trustStats = [
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Vetted Factories" },
  { number: "5", label: "Quality Certifications" },
  { number: "100", label: "Piece MOQ" },
  { number: "500+", label: "Global Clients" },
  { number: "7–14", label: "Day Sampling" },
];

const whyItems = [
  {
    icon: "🏭",
    title: "Direct Factory Access",
    description:
      "We maintain relationships with 50+ vetted factories across Bangladesh — giving you direct access to manufacturing capacity without the middleman.",
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
      "In-line and end-line inspections, AQL 2.5 standards, photo & video approvals — we ensure every piece meets your quality bar before shipping.",
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

const categoryIcons: Record<string, string> = {
  "knit-wear": "👕",
  wovens: "👔",
  "circular-knit": "🔄",
  denim: "👖",
  sweaters: "🧣",
  "work-wear": "🦺",
  "active-wear": "🏋️",
};

/* ─── Page Component ─── */

export default function HomePage() {
  const latestGuides = getLatestGuides(3);

  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection
        headline="Apparel Sourcing Partner for Growing Brands"
        subheadline="Premium Bangladesh manufacturing from just 100 pieces per style. From design to delivery, we handle custom production, fabric sourcing, and global logistics — so you can focus on building your brand."
        primaryCta={{ text: "Get a Quote", href: "/quote" }}
        secondaryCta={{ text: "View Products", href: "/products" }}

      />

      {/* 2. Trust Strip */}
      <TrustStrip items={trustStats} />

      {/* 3. About TexVenture */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge variant="brand">About TexVenture</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
                Your Trusted Partner in Apparel Sourcing
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                TexVenture is a Bangladesh-based apparel sourcing company that
                connects global brands with vetted manufacturers. We handle
                everything from fabric sourcing and sampling to production, quality
                control, and logistics — so you can focus on building your brand.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                With over 15 years of experience and a network of 50+ certified
                factories, we deliver quality garments at competitive prices with
                low MOQs starting from just 100 pieces.
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
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/about-texventure.webp"
                  alt="TexVenture Team"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#1B2A4A] p-6 text-white shadow-xl">
                <div className="text-3xl font-bold text-[#08CCD4]">15+</div>
                <div className="text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Services Overview */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">Our Services</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              How We Help Brands Source Apparel
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              Whether you need full custom manufacturing or a simple private
              label run, we have a service tailored for your stage of growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card hover className="h-full">
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {service.tagline}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#08CCD4]">
                    Learn more
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Product Category Grid */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <Badge variant="brand">Product Categories</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              What We Manufacture
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              Seven product categories covering the full spectrum of apparel
              manufacturing — from everyday basics to technical performance
              wear.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`}>
                <Card hover className="h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#08CCD4]/10 text-2xl">
                    {categoryIcons[product.slug] ?? "📦"}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                    <span>MOQ: {product.moq}</span>
                    <span>Lead: {product.leadTime}</span>
                  </div>
                </Card>
              </Link>
            ))}

            {/* CTA Card */}
            <Link href="/products">
              <Card
                hover
                className="flex h-full flex-col items-center justify-center border-dashed border-2 border-gray-200 bg-white/60 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#08CCD4]/10 text-2xl">
                  +
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">
                  View All Categories
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Explore our full product range and find the right category for
                  your brand.
                </p>
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
              We make apparel sourcing from Bangladesh simple, transparent, and
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

      {/* 7. Testimonials */}
      <Testimonials
        headline="What Our Clients Say"
        testimonials={testimonials.slice(0, 3).map((t) => ({
          name: t.clientName,
          role: t.clientRole,
          company: t.clientCompany,
          quote: t.quote,
          rating: t.rating,
        }))}
      />

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

      {/* 9. CTA Band */}
      <CTABand />
    </>
  );
}
