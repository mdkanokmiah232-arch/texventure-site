import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import InternalLinks from '@/components/sections/InternalLinks';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import CTABand from '@/components/sections/CTABand';
import TrustBlock from '@/components/sections/TrustBlock';
import { certifications } from '@/data/site';
import { generatePageMeta } from '@/lib/metadata';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = generatePageMeta({
  title: 'Certifications — BSCI, OEKO-TEX, SEDEX, WRAP, GOTS',
  description:
    'Wondering what BSCI, OEKO-TEX, SEDEX, WRAP and GOTS certifications mean? TexVenture factory partners hold all five — learn what each means for your brand.',
  path: '/certifications',
});

// ---------------------------------------------------------------------------
// Detailed Certification Data
// ---------------------------------------------------------------------------

const certDetails = [
  {
    name: 'BSCI',
    fullName: 'Business Social Compliance Initiative',
    description:
      'BSCI is a leading supply chain management system that supports companies in promoting social compliance and improving working conditions in their global supply chains. It provides a systematic approach to implementing ethical trade standards.',
    whatItMeans:
      'When you source from our BSCI-certified factories, you can be confident that workers are treated fairly, with safe working conditions, reasonable working hours, and fair wages. BSCI audits cover all aspects of social compliance.',
    keyRequirements: [
      'No child labour or forced labour',
      'Fair remuneration for workers',
      'Occupational health and safety standards',
      'Freedom of association and collective bargaining',
      'No discrimination in employment',
      'Reasonable working hours',
    ],
    icon: '🤝',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    name: 'OEKO-TEX® Standard 100',
    fullName: 'Product Safety Certification',
    description:
      'OEKO-TEX® Standard 100 is one of the world\'s best-known labels for textiles tested for harmful substances. It stands for customer confidence and high product safety.',
    whatItMeans:
      'Every component of your garment — fabric, thread, buttons, labels, and even packaging — is tested for over 100 harmful substances. This certification is especially important for products that come into direct contact with skin, such as underwear, activewear, and children\'s clothing.',
    keyRequirements: [
      'Testing for harmful substances (pesticides, heavy metals, formaldehyde)',
      'pH value testing for skin compatibility',
      'Colour fastness and shrinkage testing',
      'Carcinogenic dye testing',
      'Pesticide and chlorinated phenol testing',
      'Annual re-certification required',
    ],
    icon: '🔬',
    color: 'bg-green-50 text-green-700',
  },
  {
    name: 'SEDEX / SMETA',
    fullName: 'Ethical Trade Audit',
    description:
      'SEDEX (Supplier Ethical Data Exchange) is a membership organization dedicated to driving improvements in ethical and responsible business practices. SMETA is SEDEX\'s widely used social audit methodology.',
    whatItMeans:
      'SEDEX membership means our factories participate in a platform that enables ethical supply chain management. SMETA audits provide a rigorous assessment of labour standards, health and safety, environment, and business ethics — giving you full transparency into factory practices.',
    keyRequirements: [
      'Labour standards assessment',
      'Health and safety evaluation',
      'Environmental impact review',
      'Business ethics assessment',
      'Transparent data sharing with buyers',
      'Continuous improvement action plans',
    ],
    icon: '📋',
    color: 'bg-purple-50 text-purple-700',
  },
  {
    name: 'WRAP',
    fullName: 'Worldwide Responsible Accredited Production',
    description:
      'WRAP is an independent certification organization focused on the sewn goods sector. It certifies facilities that demonstrate compliance with 12 Principles covering lawful employment, humane treatment, and environmental practices.',
    whatItMeans:
      'WRAP certification is a globally recognized standard that assures buyers the factory operates with full legal compliance, respects workers\' rights, and maintains safe, clean facilities. It\'s particularly valued by major US and European retailers.',
    keyRequirements: [
      'Lawful employment practices (no forced or child labour)',
      'Humane treatment of workers',
      'No harassment or abuse',
      'Association rights and collective bargaining',
      'Safe and healthy working conditions',
      'Environmental management compliance',
    ],
    icon: '🌍',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    name: 'GOTS',
    fullName: 'Global Organic Textile Standard',
    description:
      'GOTS is the worldwide leading textile processing standard for organic fibers. It defines high-level environmental criteria along the entire organic textiles supply chain and requires compliance with social criteria as well.',
    whatItMeans:
      'When you choose GOTS-certified production, your organic cotton or sustainable fiber garments are verified from field to finished product. This certification ensures environmental responsibility at every stage — from harvesting raw materials through environmentally and socially responsible manufacturing.',
    keyRequirements: [
      'Minimum 70% organic fibers for certified products',
      'No GMO ingredients in organic materials',
      'Restrictions on chemical inputs (dyes, auxiliaries)',
      'Wastewater treatment requirements',
      'Social criteria based on ILO conventions',
      'Traceability and segregation of organic materials',
    ],
    icon: '🌿',
    color: 'bg-emerald-50 text-emerald-700',
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#08CCD4] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#08CCD4] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
          <Breadcrumbs light items={[{ name: 'Certifications', href: '/certifications' }]} />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Badge variant="brand" light className="mb-4">
              Quality and Compliance
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Our Certifications
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              Our factory partners hold internationally recognized certifications that
              ensure quality, safety, ethical practices, and environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Why Certifications Matter
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              In today&apos;s global market, certifications aren&apos;t just badges — they&apos;re
              your assurance that the factories producing your garments meet rigorous
              international standards for quality, safety, and ethical practices. For
              buyers, certifications mean:
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#08CCD4]/10">
                <svg className="h-8 w-8 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">Risk Mitigation</h3>
              <p className="mt-2 text-sm text-gray-500">
                Certified factories have been independently audited, reducing the risk of supply chain disruptions, quality issues, and reputational damage.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#08CCD4]/10">
                <svg className="h-8 w-8 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">Brand Reputation</h3>
              <p className="mt-2 text-sm text-gray-500">
                Certified sourcing protects your brand image. Consumers and retailers increasingly demand transparency and ethical production practices.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#08CCD4]/10">
                <svg className="h-8 w-8 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">Market Access</h3>
              <p className="mt-2 text-sm text-gray-500">
                Many major retailers and brands require certified suppliers. Having the right certifications opens doors to premium markets and partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Details */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            Certification Details
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            In-depth look at each certification and what it means for your sourcing.
          </p>
        </div>
        <div className="mt-12 space-y-12">
          {certDetails.map((cert) => (
            <Card key={cert.name} className="overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-3">
                {/* Left: Overview */}
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cert.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold text-[#1B2A4A]">{cert.name}</h3>
                      <div className="text-sm font-medium text-gray-500">{cert.fullName}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-600">{cert.description}</p>

                  <div className="mt-6 rounded-xl bg-gray-50 p-5">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#08CCD4]">
                      What This Means for You
                    </h4>
                    <p className="mt-2 text-sm text-gray-600">{cert.whatItMeans}</p>
                  </div>
                </div>

                {/* Right: Key Requirements */}
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1B2A4A]">
                    Key Requirements
                  </h4>
                  <ul className="mt-4 space-y-2">
                    {cert.keyRequirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Reference */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Quick Reference
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              A summary of all certifications at a glance.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-5"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#08CCD4]/10">
                  <svg className="h-6 w-6 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-[#1B2A4A]">{cert.name}</div>
                  <div className="text-xs text-gray-500">{cert.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust TexVenture */}
      <TrustBlock />

      {/* CTA */}
      <InternalLinks currentPage="/certifications" />
      <CTABand
        headline="Need Certified Manufacturing?"
        description="All our factory partners hold internationally recognized certifications. Talk to us about your quality and compliance requirements."
        buttonText="Discuss Requirements"
        buttonHref="/contact"
      />
    </div>
  );
}
