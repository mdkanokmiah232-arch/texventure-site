import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMeta } from '@/lib/metadata';
import { FAQPageSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import HeroSection from '@/components/sections/HeroSection';
import TrustStrip from '@/components/sections/TrustStrip';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';
import Testimonials from '@/components/sections/Testimonials';

/* ─── SEO Metadata ─── */
export const metadata: Metadata = generatePageMeta({
  title: 'Private Label Clothing Manufacturer Bangladesh — OEM',
  description:
    'Launch your own clothing brand with TexVenture — a private label clothing manufacturer in Bangladesh. Full OEM service with custom labels, hang tags, packaging, and branding from 100 pieces.',
  path: '/private-label-clothing-manufacturer-bangladesh',
  image: 'https://texventure.com/og-private-label.jpg',
});

/* ─── FAQ Data ─── */
const faqItems = [
  {
    question: 'What is private label clothing manufacturing?',
    answer:
      'Private label manufacturing means we produce garments under your brand name and labels. You can either provide your own designs (OEM) or choose from our curated blank styles that you customise with your branding, labels, and packaging.',
  },
  {
    question: 'What is the difference between OEM and white label?',
    answer:
      'OEM (Original Equipment Manufacturing) means we produce garments from your designs and tech packs. White label means we provide proven blank styles that you brand as your own. Both options include custom labels, hang tags, and packaging.',
  },
  {
    question: 'What branding elements can you include?',
    answer:
      'We can add custom woven labels, printed labels, hang tags, poly bags, branded boxes, tissue paper, stickers, and any other packaging elements to match your brand identity. We also handle care labels and size tags.',
  },
  {
    question: 'Do I need to provide my own designs?',
    answer:
      'Not necessarily. For OEM production, we work from your tech packs and designs. For white label, we offer a selection of proven blank styles — t-shirts, hoodies, joggers, and more — that you can customise with your branding.',
  },
  {
    question: 'What is the minimum order for private label?',
    answer:
      'Our standard MOQ for private label orders is 100 pieces per style. This includes full branding — custom labels, hang tags, and branded packaging. Some premium packaging options may have higher minimums.',
  },
  {
    question: 'Can you help with label and packaging design?',
    answer:
      'Yes. While we primarily handle manufacturing, our team can provide guidance on label placement, packaging specifications, and help you create print-ready artwork files for your labels and tags.',
  },
  {
    question: 'How long does private label production take?',
    answer:
      'Including sampling and approval, private label orders typically take 6-10 weeks from tech pack approval to delivery. Initial sampling takes 5-7 days, and mass production takes 40-60 days depending on volume and complexity.',
  },
];

/* ─── Page Component ─── */
export default function PrivateLabelPage() {
  const faqSchema = FAQPageSchema({ mainEntity: faqItems });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main>
        {/* Hero */}
        <HeroSection
          headline="Private Label Clothing Manufacturer in Bangladesh"
          subheadline="Launch or expand your own clothing brand with full private label manufacturing. Custom labels, hang tags, packaging, and branding — produced from just 100 pieces per style."
          primaryCta={{ text: 'Start Private Labeling', href: '/get-a-quote' }}
          secondaryCta={{ text: 'See Our Services', href: '/services' }}
        />

        {/* Trust Strip */}
        <TrustStrip
          items={[
            { number: '100', label: 'Piece Minimum MOQ' },
            { number: '50+', label: 'Vetted Factory Partners' },
            { number: '500+', label: 'Global Clients' },
            { number: '5+', label: 'Certifications Held' },
            { number: '10+', label: 'Years Experience' },
          ]}
        />

        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs
            items={[{ name: 'Private Label Manufacturing', href: '/private-label-clothing-manufacturer-bangladesh' }]}
          />
        </div>

        {/* What We Offer */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
                Your Brand, Our Expertise
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-500">
                From label design to final delivery, we handle every aspect of private label manufacturing. Build your brand with professional-quality garments that carry your name and identity.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: '🏷️',
                  title: 'Custom Labels & Tags',
                  description: 'Woven labels, printed labels, care labels, size tags, and hang tags — all customised with your brand identity.',
                },
                {
                  icon: '📦',
                  title: 'Branded Packaging',
                  description: 'Custom poly bags, branded boxes, tissue paper, stickers, and retail-ready packaging that matches your brand aesthetic.',
                },
                {
                  icon: '🔧',
                  title: 'Full OEM Production',
                  description: 'We produce garments from your tech packs and specifications. Your designs, your branding, manufactured to your quality standards.',
                },
                {
                  icon: '🎨',
                  title: 'White Label Blanks',
                  description: 'Choose from our curated selection of proven blank styles — t-shirts, hoodies, joggers — customised with your branding.',
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
                  <div className="text-4xl">{item.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Branding Elements */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
                  Complete Branding Solutions
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Every garment we produce can be fully customised with your brand identity. Here&apos;s what we can include:
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {[
                    'Woven Labels',
                    'Printed Labels',
                    'Care Labels',
                    'Size Tags',
                    'Hang Tags',
                    'Woven Patches',
                    'Poly Bags',
                    'Branded Boxes',
                    'Tissue Paper',
                    'Stickers',
                    'Mailer Bags',
                    'Gift Packaging',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Overview */}
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1B2A4A]">Private Label Process</h3>
                <div className="mt-6 space-y-4">
                  {[
                    { step: '1', title: 'Share Your Brand Vision', desc: 'Tell us about your brand, target market, and design requirements.' },
                    { step: '2', title: 'Select Products & Blanks', desc: 'Choose from our product range or provide your own designs.' },
                    { step: '3', title: 'Design Branding Elements', desc: 'We help you create labels, tags, and packaging specifications.' },
                    { step: '4', title: 'Sample & Approve', desc: 'Review pre-production samples with your branding applied.' },
                    { step: '5', title: 'Full Production', desc: 'Manufacturing with quality control at every stage.' },
                    { step: '6', title: 'Delivered to You', desc: 'Retail-ready branded products shipped to your door.' },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#08CCD4] text-sm font-bold text-white">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-medium text-[#1B2A4A]">{item.title}</h4>
                        <p className="mt-0.5 text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks headline="How Private Label Manufacturing Works" />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ
          headline="Private Label Manufacturing — Frequently Asked Questions"
          items={faqItems}
        />

        {/* CTA */}
        <CTABand
          headline="Ready to Launch Your Own Label?"
          description="From blank styles to fully branded products — we handle everything. Get a free quote and start building your brand today."
          buttonText="Start Private Labeling"
          buttonHref="/get-a-quote"
        />

        {/* Internal Links */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
            <h2 className="text-xl font-bold text-[#1B2A4A]">Related Services</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Custom Clothing Manufacturing', desc: 'Your design, built to spec', href: '/custom-clothing-manufacturer-bangladesh' },
                { title: 'Low MOQ Manufacturing', desc: 'From 100 pieces per style', href: '/low-moq-clothing-manufacturer-bangladesh' },
                { title: 'Instant Quote Calculator', desc: 'Get pricing estimates in seconds', href: '/instant-quote' },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="rounded-xl border border-gray-100 bg-white p-4 transition hover:shadow-md"
                >
                  <h3 className="text-sm font-semibold text-[#1B2A4A]">{item.title}</h3>
                  <p className="mt-1 text-xs text-gray-500">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
