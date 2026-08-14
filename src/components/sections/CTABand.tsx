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
  buttonHref = "/contact",
}: CTABandProps) {
  return (
    <section className="bg-[#1B2A4A]">
      <div className="mx-auto max-w-7xl px-4 py-16 text-center lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          {description}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center rounded-full bg-[#08CCD4] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#07b8be] hover:shadow-md"
          >
            {buttonText}
          </Link>
          <Link
            href="/custom-manufacturing"
            className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
          >
            Explore Our Process
          </Link>
        </div>
      </div>
    </section>
  );
}
