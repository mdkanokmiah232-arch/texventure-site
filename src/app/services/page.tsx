import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMeta } from '@/lib/metadata';
import InternalLinks from '@/components/sections/InternalLinks';
import { services } from '@/data/services';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CTABand from '@/components/sections/CTABand';
import FAQ from '@/components/sections/FAQ';

/* ─── SEO Metadata ─── */
export const metadata: Metadata = generatePageMeta({
  title: 'Our Services — Apparel Manufacturing and Sourcing',
  description:
    "Explore TexVenture's apparel manufacturing services: custom clothing, low MOQ production, private label/OEM, and streetwear manufacturing from Bangladesh.",
  path: '/services',
});

/* ─── FAQ Data ─── */
const faqItems = [
  {
    question: 'Which service is right for my brand?',
    answer:
      'It depends on your stage and needs. Custom Manufacturing is best if you have your own designs and tech packs. Low MOQ is ideal for startups testing designs with small batches. Private Label is perfect for brands wanting to launch their own label. Streetwear is for brands producing hoodies, tees, and cargo pants with premium fabrics and bold graphics.',
  },
  {
    question: 'Can I use multiple services at once?',
    answer:
      'Absolutely. Many of our clients combine services — for example, custom manufacturing with private label branding, or low MOQ production with streetwear specifications. We tailor our approach to your specific needs.',
  },
  {
    question: 'What is the minimum order quantity for your services?',
    answer:
      'Our standard MOQ starts from 100 pieces per style for most product categories. Some categories like denim and work wear may have slightly higher minimums of 150-200 pieces.',
  },
  {
    question: 'Do you handle quality control across all services?',
    answer:
      'Yes. Quality control is included in every service we offer. Every order goes through AQL 2.5 inspection standards with in-line and end-line checks, regardless of which service you choose.',
  },
  {
    question: 'How do I get started?',
    answer:
      'The easiest way is to use our instant quote calculator for a quick estimate, or fill out our quote form with your requirements. We\'ll review your needs and recommend the best service approach.',
  },
];

/* ─── Page Component ─── */
export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#08CCD4] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#08CCD4] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            End-to-end apparel manufacturing solutions — from custom production to private label branding. Find the right service for your brand.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Breadcrumbs light items={[{ name: 'Services', href: '/services' }]} />
      </div>

      {/* Services Grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.slug} id={service.slug}>
                <div className={`grid gap-12 lg:grid-cols-2 lg:items-center ${index % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <div className="text-5xl">{service.icon}</div>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A]">
                      {service.name}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-[#08CCD4]">{service.tagline}</p>
                    <p className="mt-4 text-gray-500 leading-relaxed">{service.description}</p>

                    <div className="mt-8 space-y-4">
                      {service.details.map((detail) => (
                        <div key={detail.title} className="rounded-xl border border-gray-100 p-4">
                          <h3 className="font-semibold text-[#1B2A4A]">{detail.title}</h3>
                          <p className="mt-1 text-sm text-gray-500">{detail.description}</p>
                          <ul className="mt-2 space-y-1">
                            {detail.highlights.map((h) => (
                              <li key={h} className="flex items-center gap-2 text-xs text-gray-600">
                                <svg className="h-3 w-3 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link
                        href={service.cta.href}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#08CCD4] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#07b8be]"
                      >
                        {service.cta.text}
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Visual placeholder */}
                  <div className={`${index % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                    <div className="rounded-2xl bg-gray-50 p-12 text-center">
                      <div className="text-8xl">{service.icon}</div>
                      <p className="mt-4 text-sm text-gray-400">{service.imageAlt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        headline="Services — Frequently Asked Questions"
        items={faqItems}
      />

      {/* CTA */}
      <InternalLinks currentPage="/services" />
      <CTABand
        headline="Not Sure Which Service You Need?"
        description="Tell us about your brand and what you're looking for. We'll recommend the right service approach and provide a free quote."
        buttonText="Get a Free Quote"
        buttonHref="/get-a-quote"
      />
    </main>
  );
}
