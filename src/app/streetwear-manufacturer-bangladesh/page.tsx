import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMeta } from '@/lib/metadata';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import HeroSection from '@/components/sections/HeroSection';
import TrustStrip from '@/components/sections/TrustStrip';
import HowItWorks from '@/components/sections/HowItWorks';
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';
import Testimonials from '@/components/sections/Testimonials';

/* ─── SEO Metadata ─── */
export const metadata: Metadata = generatePageMeta({
  title: 'Streetwear Manufacturer Bangladesh — Hoodies, Tees and Cargos',
  description:
    'TexVenture is a streetwear manufacturer in Bangladesh specialising in heavyweight hoodies, oversized tees, cargo pants, and bold graphic apparel. Premium fabrics, custom prints, drop-ready production.',
  path: '/streetwear-manufacturer-bangladesh',
  image: 'https://texventure.com/og-streetwear.jpg',
});

/* ─── FAQ Data ─── */
const faqItems = [
  {
    question: 'What types of streetwear do you manufacture?',
    answer:
      'We specialise in hoodies, oversized t-shirts, sweatshirts, cargo pants, joggers, and statement pieces. Our factory partners work with heavyweight fabrics (350-400gsm) and offer all major print techniques including puff print, screen print, DTG, and discharge.',
  },
  {
    question: 'What fabric weights do you use for streetwear?',
    answer:
      'We work with heavyweight fabrics that define quality streetwear: 400gsm+ French terry for hoodies, 240gsm+ heavyweight cotton for tees, 350gsm+ fleece for joggers, and premium twill/ripstop for cargo pants. We can match specific fabric weights per your spec.',
  },
  {
    question: 'Can you do puff print and speciality prints?',
    answer:
      'Yes. We offer screen print, puff print, discharge print, DTG (direct-to-garment), sublimation, heat transfer, and embroidery. Our factory partners have dedicated print departments equipped for all these techniques.',
  },
  {
    question: 'What is your MOQ for streetwear?',
    answer:
      'Our standard MOQ starts from 100 pieces per style. This works well for streetwear brands doing limited drops and capsule collections. You can mix colours and sizes within your order.',
  },
  {
    question: 'Can you match specific fits like oversized or boxy?',
    answer:
      'Absolutely. Streetwear is defined by its silhouettes. We work with your fit specifications — oversized, boxy, dropped shoulder, cropped — and produce to your exact sizing requirements.',
  },
  {
    question: 'How do you handle drop-ready production schedules?',
    answer:
      'We schedule production around your drop dates. Once you share your timeline, we work backwards from your target delivery date to ensure inventory arrives when you need it. Rush options are available for tight deadlines.',
  },
  {
    question: 'Do you offer collection-wide production?',
    answer:
      'Yes. We can produce complete collections — hoodies, tees, cargos, and accessories — with coordinated colourways and consistent quality. This is ideal for streetwear brands launching seasonal drops.',
  },
];

/* ─── Page Component ─── */
export default function StreetwearPage() {
  return (
    <>
      <main>
        {/* Hero */}
        <HeroSection
          headline="Streetwear Manufacturer in Bangladesh"
          subheadline="Premium heavyweight fabrics, bold graphics, and drop-ready production. We manufacture hoodies, oversized tees, cargo pants, and statement pieces for streetwear brands worldwide."
          primaryCta={{ text: 'Manufacture Streetwear', href: '/get-a-quote' }}
          secondaryCta={{ text: 'See Pricing Estimates', href: '/instant-quote' }}
        />

        {/* Trust Strip */}
        <TrustStrip
          items={[
            { number: '400gsm', label: 'Max Fabric Weight' },
            { number: '100', label: 'Piece Minimum MOQ' },
            { number: '7+', label: 'Print Techniques' },
            { number: '50+', label: 'Vetted Factory Partners' },
            { number: '500+', label: 'Global Clients' },
          ]}
        />

        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <Breadcrumbs
            items={[{ name: 'Streetwear Manufacturing', href: '/streetwear-manufacturer-bangladesh' }]}
          />
        </div>

        {/* What Makes Streetwear Different */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
                Built for the Culture
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-500">
                Streetwear demands more than standard manufacturing. It requires heavyweight fabrics, precise silhouettes, bold graphics, and production schedules that match the pace of drops and collections.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: '🧵',
                  title: 'Premium Fabrics',
                  description: '400gsm+ heavyweight fleece, French terry, and premium cotton. Reinforced seams, ribbed cuffs, and quality trims that define premium streetwear.',
                },
                {
                  icon: '🎨',
                  title: 'Bold Graphics and Prints',
                  description: 'Screen print, puff print, discharge, DTG, sublimation, heat transfer, and embroidery. Every technique to bring your designs to life.',
                },
                {
                  icon: '📐',
                  title: 'Streetwear Silhouettes',
                  description: 'Oversized, boxy, dropped shoulder, cropped, and relaxed fits. We produce to your exact fit specifications.',
                },
                {
                  icon: '🔥',
                  title: 'Drop-Ready Production',
                  description: 'We schedule production around your drop dates. Rush options available for tight deadlines.',
                },
                {
                  icon: '📦',
                  title: 'Full Collection Support',
                  description: 'Hoodies, tees, cargos, joggers, and accessories — complete collections with coordinated colourways.',
                },
                {
                  icon: '🏷️',
                  title: 'Custom Branding',
                  description: 'Woven labels, printed labels, hang tags, branded packaging — everything to make your streetwear brand stand out.',
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

        {/* Streetwear Products */}
        <section className="bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              Streetwear Products We Manufacture
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-500">
              From heavyweight hoodies to cargo pants — we produce the core streetwear staples that move fast in the market.
            </p>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { product: 'Hoodies', weight: '350-400gsm fleece', moq: '100 pcs', price: 'From $9.50', features: ['Kangaroo pocket', 'Drawstring hood', 'Ribbed cuffs'] },
                { product: 'Oversized Tees', weight: '220-260gsm cotton', moq: '100 pcs', price: 'From $5.50', features: ['Boxy fit', 'Dropped shoulder', 'Premium cotton'] },
                { product: 'Cargo Pants', weight: '280-320gsm twill', moq: '150 pcs', price: 'From $9.00', features: ['Side pockets', 'Elastic cuffs', 'Relaxed fit'] },
                { product: 'Sweatshirts', weight: '320-350gsm fleece', moq: '100 pcs', price: 'From $7.50', features: ['Crew neck', 'Ribbed hem', 'Heavyweight'] },
              ].map((item) => (
                <div key={item.product} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#1B2A4A]">{item.product}</h3>
                  <p className="mt-1 text-sm text-[#08CCD4]">{item.weight}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="rounded-full bg-[#08CCD4]/10 px-3 py-1 text-xs font-medium text-[#08CCD4]">
                      MOQ: {item.moq}
                    </span>
                    <span className="text-sm font-medium text-gray-500">{item.price}</span>
                  </div>
                  <ul className="mt-4 space-y-1">
                    {item.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                        <svg className="h-3 w-3 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks
          headline="Streetwear Production Process"
          steps={[
            {
              number: '01',
              title: 'Share Your Designs',
              description: 'Upload your tech packs, mood boards, or reference samples. Tell us your target fabric weight, fit, and graphics.',
            },
            {
              number: '02',
              title: 'Fabric and Print Sampling',
              description: 'We source heavyweight fabrics and produce samples with your chosen print technique. Review and approve.',
            },
            {
              number: '03',
              title: 'Production and QC',
              description: 'Full production with quality checks at every stage. We ensure construction quality, print accuracy, and consistency.',
            },
            {
              number: '04',
              title: 'Drop-Ready Delivery',
              description: 'Finished goods packed and shipped to arrive before your drop date. Air, sea, or express courier options.',
            },
          ]}
        />

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ */}
        <FAQ
          headline="Streetwear Manufacturing — Frequently Asked Questions"
          items={faqItems}
        />

        {/* CTA */}
        <CTABand
          headline="Ready to Manufacture Your Next Drop?"
          description="Premium streetwear manufacturing from Bangladesh. Heavyweight fabrics, bold graphics, and production schedules that match your drop timeline."
          buttonText="Manufacture Streetwear"
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
                { title: 'Private Label Manufacturing', desc: 'Your brand, our expertise', href: '/private-label-clothing-manufacturer-bangladesh' },
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
