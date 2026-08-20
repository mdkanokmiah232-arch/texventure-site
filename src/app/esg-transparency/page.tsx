import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import InternalLinks from '@/components/sections/InternalLinks';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import CTABand from '@/components/sections/CTABand';
import { generatePageMeta } from '@/lib/metadata';

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = generatePageMeta({
  title: 'ESG Transparency — Environmental, Social and Governance',
  description:
    'TexVenture is committed to ESG transparency in Bangladesh apparel manufacturing — environmental practices, social responsibility, and governance standards.',
  path: '/esg-transparency',
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const environmentalPractices = [
  {
    title: 'Water Conservation',
    description:
      'Our factory partners employ water-saving laundry techniques, closed-loop water systems, and eco-dyeing processes that reduce water consumption by up to 40% compared to conventional methods.',
    icon: '💧',
    metric: '40% reduction',
  },
  {
    title: 'Energy Efficiency',
    description:
      'Factories in our network are transitioning to solar energy, LED lighting, and energy-efficient machinery. Many have achieved significant reductions in carbon emissions per garment produced.',
    icon: '⚡',
    metric: '30% energy savings',
  },
  {
    title: 'Waste Reduction',
    description:
      'We prioritize zero-waste cutting techniques, fabric recycling programs, and minimal packaging. Scraps and off-cuts are repurposed into smaller products or recycled into new yarn.',
    icon: '♻️',
    metric: 'Zero-waste cutting',
  },
  {
    title: 'Sustainable Materials',
    description:
      'We offer organic cotton (GOTS-certified), recycled polyester, Tencel™, and other sustainable fiber options. Our factories are equipped to handle eco-friendly dyes and finishes.',
    icon: '🌿',
    metric: 'GOTS certified',
  },
];

const socialResponsibility = [
  {
    title: 'Fair Wages and Working Conditions',
    description:
      'All factories in our network pay above minimum wage, provide safe working environments, and comply with ILO conventions. Regular audits ensure ongoing compliance.',
    icon: '💰',
  },
  {
    title: 'Worker Welfare Programs',
    description:
      'Factories offer healthcare facilities, daycare services, skills training programs, and employee welfare funds. Happy workers produce better quality garments.',
    icon: '🏥',
  },
  {
    title: 'No Child Labour',
    description:
      'We have a zero-tolerance policy for child labour. Every factory undergoes strict age verification and compliance checks to protect young workers.',
    icon: '🛡️',
  },
  {
    title: 'Community Development',
    description:
      'Our operations support local communities through education initiatives, healthcare programs, and infrastructure development in the areas surrounding our factory partners.',
    icon: '🏘️',
  },
];

const governanceStandards = [
  {
    title: 'Transparent Supply Chain',
    description:
      'We provide full visibility into our supply chain — from raw material sourcing to finished product. Buyers can trace every step of production.',
    icon: '🔗',
  },
  {
    title: 'Ethical Business Practices',
    description:
      'Zero tolerance for corruption, bribery, and unethical business conduct. All transactions are documented with proper invoicing and receipts.',
    icon: '⚖️',
  },
  {
    title: 'Regular Auditing',
    description:
      'Our factories undergo annual third-party audits (BSCI, SEDEX, WRAP) plus our own internal QC inspections at every production stage.',
    icon: '📊',
  },
  {
    title: 'Compliance Documentation',
    description:
      'Complete documentation of all certifications, audit reports, and compliance records are available for buyer review upon request.',
    icon: '📁',
  },
];

const transparencyCommitments = [
  {
    title: 'Open Factory Access',
    description:
      'Buyers are welcome to visit factories at any time. We arrange factory tours, provide real-time production updates, and share photos/videos throughout the manufacturing process.',
  },
  {
    title: 'Certification Transparency',
    description:
      'All certifications (BSCI, OEKO-TEX, SEDEX, WRAP, GOTS) are maintained and up-to-date. We share certification documents and audit reports with buyers proactively.',
  },
  {
    title: 'Pricing Transparency',
    description:
      'Our quotes include a detailed breakdown of manufacturing costs, QC fees, and export documentation. No hidden charges — ever.',
  },
  {
    title: 'Sustainability Reporting',
    description:
      'We publish annual sustainability reports covering our environmental impact, social initiatives, and governance practices. Full transparency for all stakeholders.',
  },
];

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default function ESGTransparencyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#08CCD4] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#08CCD4] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
          <Breadcrumbs items={[{ name: 'ESG Transparency', href: '/esg-transparency' }]} />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Badge variant="brand" className="mb-4">
              Environmental, Social and Governance
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              ESG Transparency
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              We believe in complete transparency about our environmental impact,
              social responsibility practices, and governance standards. This is our
              commitment to ethical, sustainable apparel manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* ESG Overview */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Our ESG Commitment
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              As a Bangladesh-based apparel sourcing partner, we recognize our responsibility
              to ensure that the garments we help produce are made ethically, sustainably,
              and with full accountability. Our ESG framework covers three pillars:
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-gray-100 bg-green-50 p-6 text-center">
              <div className="text-4xl">🌍</div>
              <h3 className="mt-3 text-lg font-bold text-[#1B2A4A]">Environmental</h3>
              <p className="mt-2 text-sm text-gray-600">
                Reducing our ecological footprint through sustainable materials,
                water conservation, and energy efficiency.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-blue-50 p-6 text-center">
              <div className="text-4xl">👥</div>
              <h3 className="mt-3 text-lg font-bold text-[#1B2A4A]">Social</h3>
              <p className="mt-2 text-sm text-gray-600">
                Ensuring fair treatment, safe conditions, and community
                development for all workers in our supply chain.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-100 bg-purple-50 p-6 text-center">
              <div className="text-4xl">🏛️</div>
              <h3 className="mt-3 text-lg font-bold text-[#1B2A4A]">Governance</h3>
              <p className="mt-2 text-sm text-gray-600">
                Maintaining transparent, ethical business practices with full
                accountability and compliance documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Practices */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            🌍 Environmental Practices
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our commitment to minimizing environmental impact across the supply chain.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {environmentalPractices.map((practice) => (
            <Card key={practice.title} hover>
              <div className="flex items-start gap-4">
                <span className="text-3xl">{practice.icon}</span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-[#1B2A4A]">{practice.title}</h3>
                    <Badge variant="success">{practice.metric}</Badge>
                  </div>
                  <p className="mt-2 text-sm text-gray-600">{practice.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Responsibility */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              👥 Social Responsibility
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Ensuring every worker in our supply chain is treated with dignity and respect.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {socialResponsibility.map((item) => (
              <Card key={item.title} hover>
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B2A4A]">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            🏛️ Governance Standards
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The frameworks and policies that guide our business conduct.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {governanceStandards.map((item) => (
            <Card key={item.title} hover>
              <div className="flex items-start gap-4">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-semibold text-[#1B2A4A]">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Transparency Commitments */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              🔍 Transparency Commitments
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Our specific promises to buyers and stakeholders.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {transparencyCommitments.map((commitment, index) => (
              <Card key={commitment.title} hover>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#08CCD4]/10 text-lg font-bold text-[#08CCD4]">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1B2A4A]">{commitment.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{commitment.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Metrics */}
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="rounded-2xl bg-[#1B2A4A] p-8 sm:p-12">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Our ESG Impact at a Glance
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white/5 p-5 text-center">
              <div className="text-3xl font-bold text-[#08CCD4]">40%</div>
              <div className="mt-1 text-sm text-gray-300">Water usage reduction</div>
            </div>
            <div className="rounded-xl bg-white/5 p-5 text-center">
              <div className="text-3xl font-bold text-[#08CCD4]">100%</div>
              <div className="mt-1 text-sm text-gray-300">Fair wage compliance</div>
            </div>
            <div className="rounded-xl bg-white/5 p-5 text-center">
              <div className="text-3xl font-bold text-[#08CCD4]">5</div>
              <div className="mt-1 text-sm text-gray-300">Active certifications</div>
            </div>
            <div className="rounded-xl bg-white/5 p-5 text-center">
              <div className="text-3xl font-bold text-[#08CCD4]">0</div>
              <div className="mt-1 text-sm text-gray-300">Child labour incidents</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <InternalLinks currentPage="/esg-transparency" />
      <CTABand
        headline="Sustainable Sourcing Starts Here"
        description="Partner with TexVenture for ethically produced, environmentally responsible apparel. We're committed to transparency at every step."
        buttonText="Discuss ESG Requirements"
        buttonHref="/contact"
      />
    </div>
  );
}
