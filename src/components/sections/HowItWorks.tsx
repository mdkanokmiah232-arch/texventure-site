import Link from 'next/link';

interface Step {
  number: string;
  title: string;
  description: string;
}

interface HowItWorksProps {
  headline?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    number: '01',
    title: 'Share Your Design',
    description: 'Upload your tech packs, sketches, or reference samples. Tell us your target fabric, fit, and quantity.',
  },
  {
    number: '02',
    title: 'Sampling and Approval',
    description: 'We produce pre-production samples within 5-7 days. You review and approve before mass production.',
  },
  {
    number: '03',
    title: 'Production and QC',
    description: 'Our team manages full production with inline quality control, color accuracy, and sizing checks.',
  },
  {
    number: '04',
    title: 'Delivery to Door',
    description: 'Finished goods are packed, shipped via air or sea, and delivered to your warehouse worldwide.',
  },
];

export default function HowItWorks({
  headline = 'How It Works',
  steps = defaultSteps,
}: HowItWorksProps) {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            {headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            From concept to delivery, we make sourcing simple and transparent.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-10 hidden h-px w-full bg-gray-200 lg:block" />
              )}

              <div className="relative rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#08CCD4]/10 text-xl font-bold text-[#08CCD4]">
                  {step.number}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#1B2A4A]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/custom-manufacturing"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#08CCD4] transition hover:text-[#07b8be]"
          >
            Learn more about our process
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
