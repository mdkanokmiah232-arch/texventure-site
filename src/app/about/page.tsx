import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import TrustBlock from '@/components/sections/TrustBlock';
import { company, certifications, contact } from '@/data/site';
import { generatePageMeta } from '@/lib/metadata';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = generatePageMeta({
  title: 'About TexVenture — Your Trusted Apparel Sourcing Partner',
  description:
    'Learn about TexVenture, a Bangladesh-based apparel sourcing and buying house connecting global brands with 20+ vetted garment factories since day one.',
  path: '/about',
});

// ---------------------------------------------------------------------------
// Timeline Data
// ---------------------------------------------------------------------------

const timeline = [
  {
    year: '2016',
    title: 'TexVenture Founded',
    description:
      'Started as a sourcing consultancy in Uttara, Dhaka with a mission to make apparel sourcing accessible for growing brands worldwide.',
  },
  {
    year: '2018',
    title: 'First International Client',
    description:
      'Expanded to serve brands in Europe and North America, building trust through transparent sourcing and quality assurance.',
  },
  {
    year: '2020',
    title: 'Digital Platform Launch',
    description:
      'Launched our tech-enabled sourcing platform with instant quote calculator for seamless brand-factory connectivity.',
  },
  {
    year: '2022',
    title: 'Factory Network Established',
    description:
      'Connected with 20+ vetted factory partners across Dhaka, Chittagong, and Gazipur covering knitwear, wovens, denim, sweaters, activewear, and work wear.',
  },
  {
    year: '2024',
    title: 'Global Reach',
    description:
      'Now serving 8+ international brands across 30+ countries including USA, UK, Canada, Australia, Germany, France, and Japan.',
  },
];

// ---------------------------------------------------------------------------
// Team Data (Placeholder)
// ---------------------------------------------------------------------------

const teamMembers = [
  {
    name: 'Leadership Team',
    role: 'Executive Leadership',
    description: 'Experienced professionals with 10+ years combined expertise in Bangladesh garment manufacturing and global supply chain management, having overseen production for brands across the US, UK, and EU.',
  },
  {
    name: 'Sourcing Specialists',
    role: 'Factory Relations',
    description: 'On-the-ground experts who personally visit and maintain relationships with 20+ vetted factories across Dhaka, Chittagong, and Gazipur, ensuring quality and compliance at every step.',
  },
  {
    name: 'Quality Assurance',
    role: 'QC and Compliance',
    description: 'Dedicated quality control team conducting in-line, end-line, and final AQL 2.5 inspections across all production lines, with documented reports shared for every shipment.',
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#08CCD4] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#08CCD4] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
          <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Badge variant="brand" className="mb-4">
              Our Story
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About {company.name}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              {company.description}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Our Story
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              {company.name} was founded with a clear mission: to bridge the gap between
              global fashion brands and Bangladesh&apos;s world-class garment manufacturing
              industry. Based in {company.headquarters}, we saw an opportunity to make
              high-quality apparel sourcing accessible to brands of all sizes.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Bangladesh is the world&apos;s second-largest garment exporter, known for
              its skilled workforce, competitive pricing, and deep expertise in knitwear,
              denim, and woven garments. Our role is to be your trusted partner on the
              ground — vetting factories, managing production, ensuring quality, and
              handling logistics so you can focus on building your brand.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              From a single order of 100 pieces to full-container loads, we treat every
              client with the same dedication and attention to detail. Our low MOQ
              approach means startups and small brands can access the same world-class
              manufacturing as global giants.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Every factory in our network goes through an on-site audit before we place
              a single order with them — checking machinery capacity, compliance
              documentation, and working conditions firsthand. Our team maintains
              relationships across Dhaka&apos;s Uttara, Ashulia, and Gazipur
              manufacturing belts, giving us direct visibility into cutting, sewing, and
              finishing lines rather than relying on third-party reports.
            </p>
          </div>
          <div className="rounded-2xl bg-[#1B2A4A] p-8 text-white">
            <h3 className="text-xl font-bold">{company.tagline}</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#08CCD4]/20">
                  <svg className="h-5 w-5 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-300">Headquarters</div>
                  <div className="font-medium">{company.headquarters}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#08CCD4]/20">
                  <svg className="h-5 w-5 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-300">Founded</div>
                  <div className="font-medium">{company.foundedYear}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#08CCD4]/20">
                  <svg className="h-5 w-5 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-300">Industry</div>
                  <div className="font-medium">{company.industry}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              To make world-class apparel manufacturing in Bangladesh accessible to
              brands of every size. We believe great clothing shouldn&apos;t require
              millions in orders — and we prove it with our low MOQ, transparent
              process, and unwavering commitment to quality.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#08CCD4]/10">
                <svg className="h-8 w-8 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">Quality First</h3>
              <p className="mt-2 text-sm text-gray-500">
                Multi-point QC process with AQL 2.5 standards across every production run.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#08CCD4]/10">
                <svg className="h-8 w-8 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">Low MOQ</h3>
              <p className="mt-2 text-sm text-gray-500">
                Start with just 100 pieces per style. Access world-class manufacturing without massive commitments.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#08CCD4]/10">
                <svg className="h-8 w-8 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">Global Reach</h3>
              <p className="mt-2 text-sm text-gray-500">
                Shipping to 30+ countries with full export documentation and customs handling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The people behind TexVenture&apos;s sourcing excellence.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} hover className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#08CCD4]/10">
                <svg className="h-8 w-8 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">{member.name}</h3>
              <div className="mt-1 text-sm font-medium text-[#08CCD4]">{member.role}</div>
              <p className="mt-3 text-sm text-gray-500">{member.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Our Certifications
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our factory partners hold internationally recognized certifications for quality, safety, and ethical manufacturing.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { image: "/images/cert-13.png", alt: "TexVenture Quality Certification" },
              { image: "/images/cert-14.png", alt: "TexVenture Safety Certification" },
              { image: "/images/cert-5.png", alt: "TexVenture Compliance Certification" },
              { image: "/images/cert-6.png", alt: "TexVenture Standards Certification" },
            ].map((cert) => (
              <div key={cert.alt} className="flex items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-all hover:shadow-lg hover:border-[#08CCD4]/30">
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="h-32 w-auto object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            Our Journey
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Key milestones in the {company.name} story.
          </p>
        </div>
        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 sm:left-1/2 sm:-translate-x-1/2" />
          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div
                key={`${event.year}-${event.title}`}
                className={`relative flex items-start gap-8 sm:gap-0 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#08CCD4] bg-white sm:left-1/2" />
                {/* Content */}
                <div className={`ml-10 sm:ml-0 sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                  <Badge variant="brand">{event.year}</Badge>
                  <h3 className="mt-2 text-lg font-semibold text-[#1B2A4A]">{event.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust TexVenture */}
      <TrustBlock />

      {/* CTA */}
      <section className="bg-[#1B2A4A]">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Partner With {company.name}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Ready to source your next collection from Bangladesh? Let&apos;s talk about your
            requirements and find the perfect factory match.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#08CCD4] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#07b8be]"
            >
              Get in Touch
            </Link>
            <Link
              href="https://wa.me/8801354316246"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Chat on WhatsApp
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
