interface TrustPoint {
  title: string;
  description: string;
}

interface TrustBlockProps {
  headline?: string;
  intro?: string;
  points?: TrustPoint[];
}

const defaultPoints: TrustPoint[] = [
  {
    title: 'Factory Audits Before Onboarding',
    description:
      'Every factory partner is inspected on-site for social compliance, machinery capacity, and safety standards before we accept a single order into their production line. Re-audits happen annually.',
  },
  {
    title: 'In-Line and Final AQL 2.5 Inspection',
    description:
      'Our QC team checks fabric on arrival, in-line during cutting and sewing, and performs a final randomized AQL 2.5 inspection before any shipment leaves Chittagong or Dhaka.',
  },
  {
    title: 'Documented Certifications, Not Claims',
    description:
      'BSCI, OEKO-TEX Standard 100, SEDEX/SMETA, WRAP, and GOTS certificates are verified and kept on file for every certified factory — available to buyers on request.',
  },
  {
    title: 'Direct, Traceable Communication',
    description:
      'One dedicated point of contact tracks your order from tech pack to delivery, with production updates and photos at every milestone — no lost-in-translation middlemen.',
  },
];

export default function TrustBlock({
  headline = 'Why Trust TexVenture',
  intro = 'Fifteen-plus years of combined manufacturing and sourcing experience across our leadership team, backed by a factory audit process and quality system built for accountability — not just marketing copy.',
  points = defaultPoints,
}: TrustBlockProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            {headline}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">{intro}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
            >
              <h3 className="text-lg font-semibold text-[#1B2A4A]">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
