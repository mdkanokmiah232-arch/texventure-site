import Link from 'next/link';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
}

export default function HeroSection({
  headline = 'Your Trusted Apparel Sourcing Partner in Bangladesh',
  subheadline = 'We deliver custom manufacturing, low MOQ production, and end-to-end supply chain solutions for brands worldwide. From design to delivery.',
  primaryCta = { text: 'Get a Quote', href: '/contact' },
  secondaryCta = { text: 'View Our Process', href: '/custom-clothing-manufacturer-bangladesh' },
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#1B2A4A]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.webp')" }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-[#1B2A4A]/60" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#08CCD4]/20 bg-[#08CCD4]/10 px-4 py-1.5 text-sm font-medium text-[#08CCD4]">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Trusted by 500+ Global Brands
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#08CCD4] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#08CCD4]/25 transition hover:bg-[#07b8be] hover:shadow-xl hover:shadow-[#08CCD4]/30"
            >
              {primaryCta.text}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
            >
              {secondaryCta.text}
            </Link>
          </div>


        </div>
      </div>
    </section>
  );
}
