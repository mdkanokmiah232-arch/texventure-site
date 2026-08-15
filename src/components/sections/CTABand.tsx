import Link from 'next/link';

interface CTABandProps {
  headline?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTABand({
  headline = "Ready to Source Your Next Collection?",
  description = "Partner with a trusted Bangladesh buying house. Low MOQ, fast turnaround, and quality you can count on.",
  buttonText = "Get a Quote",
  buttonHref = "/get-a-quote",
}: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-white border-y border-gray-100">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#08CCD4]/5 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#08CCD4]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#1B2A4A] px-5 py-2 text-sm font-semibold text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-[#08CCD4]" />
          Free Consultation Available
        </div>

        <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl lg:text-5xl">
          {headline}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-500 sm:text-xl">
          {description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 rounded-full bg-[#08CCD4] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#08CCD4]/25 transition-all hover:bg-[#07b8be] hover:shadow-xl hover:shadow-[#08CCD4]/30 hover:-translate-y-0.5"
          >
            {buttonText}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link
            href="/custom-clothing-manufacturer-bangladesh"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#1B2A4A]/20 px-8 py-4 text-sm font-semibold text-[#1B2A4A] transition-all hover:border-[#1B2A4A]/40 hover:bg-[#1B2A4A]/5 hover:-translate-y-0.5"
          >
            Explore Our Process
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          ✦ No minimum commitment &nbsp;·&nbsp; ✦ Response within 24 hours &nbsp;·&nbsp; ✦ BSCI and OEKO-TEX® Certified
        </p>
      </div>
    </section>
  );
}
