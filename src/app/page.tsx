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
import { testimonials } from "@/data/testimonials";
import { guides } from "@/data/guides";

/* ─── Home Page Product Categories (matches nav menu) ─── */
const homeProducts = [
  { slug: "t-shirts", name: "T-Shirts", description: "Premium cotton and blended t-shirts, polos, and tees for everyday wear and branding", image: "https://i.postimg.cc/RZ2q0vBC/t-shart.webp" },
  { slug: "hoodies", name: "Hoodies", description: "Heavyweight fleece and French terry hoodies, perfect for streetwear and casual brands", image: "https://i.postimg.cc/FHY7m725/hoodies.webp" },
  { slug: "pants-joggers", name: "Pants & Joggers", description: "Comfortable joggers, chinos, cargo pants, and casual trousers in various fabrics", image: "https://i.postimg.cc/Dzs0JRvq/Pants-Joggers.webp" },
  { slug: "jackets", name: "Jackets", description: "Bomber, varsity, windbreaker, and outerwear jackets for all-season fashion brands", image: "https://i.postimg.cc/6qHpxXcW/Jackets.webp" },
  { slug: "activewear", name: "Activewear", description: "Performance sportswear, gym sets, yoga wear, and moisture-wicking athletic garments", image: "https://i.postimg.cc/3JRwCkrG/Activewear.webp" },
  { slug: "kids-wear", name: "Kids Wear", description: "Soft, durable, and colourful children's clothing from newborn to junior sizes", image: "https://i.postimg.cc/nVwxx0ZH/Kids.jpg" },
  { slug: "accessories", name: "Accessories", description: "Hats, caps, bags, socks, and branded merchandise to complete your product line", image: "https://i.postimg.cc/NFNjvc4P/Accessories.webp" },
];

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  title: "Clothing Manufacturer in Bangladesh — TexVenture | Custom Garment Production",
  description:
    "Leading clothing manufacturer in Bangladesh. Custom garment production from 100 pcs MOQ. Knitwear, wovens, denim, sweaters & active wear. ISO 9001 certified, global shipping.",
  openGraph: {
    title: "Clothing Manufacturer in Bangladesh — TexVenture",
    description:
      "Leading clothing manufacturer in Bangladesh. Custom garment production from 100 pcs. ISO 9001 certified, global shipping.",
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

/* ─── Page Component ─── */

export default function HomePage() {
  const latestGuides = getLatestGuides(3);

  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection
        headline="Clothing Manufacturer in Bangladesh"
        subheadline="Premium garment manufacturing in Bangladesh from just 100 pieces per style. Custom clothing production, fabric sourcing, and end-to-end supply chain for brands worldwide."
        primaryCta={{ text: "Get a Quote", href: "/quote" }}
        secondaryCta={{ text: "View Products", href: "/products" }}

      />

      {/* 2. Trust Strip */}
      <TrustStrip items={trustStats} />

      {/* 3. About TexVenture */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Badge variant="brand">About TexVenture</Badge>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
                Your Trusted Clothing Manufacturer in Bangladesh
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                TexVenture is a leading clothing manufacturer in Bangladesh that
                connects global brands with vetted garment factories. We handle
                everything from fabric sourcing and sampling to production, quality
                control, and logistics — so you can focus on building your brand.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-500">
                With over 15 years of experience and a network of 50+ certified
                garment factories, we deliver quality clothing at competitive prices with
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
            <div className="order-1 lg:order-2 relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/about-texventure.webp"
                  alt="TexVenture Team"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-start justify-center pt-6">
                  <span className="rounded-full bg-white/90 backdrop-blur px-5 py-2 text-sm font-bold text-[#1B2A4A] shadow-lg">About TexVenture</span>
                </div>
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
            <Badge variant="brand">Our Process</Badge>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              How We Help Brands Manufacture Clothing in Bangladesh
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              From concept to delivery — our end-to-end process covers design, sampling, production, and global logistics for your brand.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <Card hover className="group h-full border border-gray-200 p-4 transition-all duration-300 hover:border-[#08CCD4] hover:border-2 sm:p-5">
                  <h3 className="text-lg font-bold leading-tight text-[#1B2A4A] sm:text-xl">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {service.tagline}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#08CCD4] sm:text-sm">
                    Learn more
                    <svg
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4"
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
            {homeProducts.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`}>
                <Card hover className="group h-full overflow-hidden border border-gray-200 transition-all duration-300 hover:border-[#08CCD4] hover:border-2">
                  <div className="h-40 overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
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
            <Badge variant="brand">Product Categories</Badge>
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

      {/* 7. Testimonials */}
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
