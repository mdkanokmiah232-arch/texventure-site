import Link from 'next/link';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

interface Step {
  icon: string;
  title: string;
  description: string;
  href?: string;
  ctaText?: string;
}

interface HowItWorksProps {
  headline?: string;
  steps?: Step[];
}

const defaultSteps: Step[] = [
  {
    icon: '📋',
    title: 'Share Your Design',
    description: 'Upload your tech packs, sketches, or reference samples. Tell us your target fabric, fit, and quantity.',
    href: '/get-a-quote',
    ctaText: 'Get a Free Quote',
  },
  {
    icon: '🧵',
    title: 'Sampling & Approval',
    description: 'We produce pre-production samples within 5–7 days. You review and approve before mass production begins.',
    href: '/custom-clothing-manufacturer-bangladesh',
    ctaText: 'Request a Sample',
  },
  {
    icon: '🏭',
    title: 'Production & Quality Control',
    description: 'Our team manages full production with inline quality control, color accuracy, and AQL 2.5 sizing checks.',
    href: '/get-a-quote',
    ctaText: 'Learn About Our QC Process',
  },
  {
    icon: '🚚',
    title: 'Global Delivery',
    description: 'Finished goods are packed, shipped via air or sea, and delivered to your warehouse in 30+ countries worldwide.',
    href: '/get-a-quote',
    ctaText: 'Get Shipping Quote',
  },
];

export default function HowItWorks({
  headline = 'How Our Manufacturing Process Works',
  steps = defaultSteps,
}: HowItWorksProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="text-center">
          <Badge variant="brand">Our Process</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            {headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            From concept to delivery — our end-to-end process covers design, sampling, production, and global logistics for your brand.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {steps.map((step) => (
            <Link key={step.title} href={step.href || '#'}>
              <Card hover className="group h-full border border-gray-200 p-4 transition-all duration-300 hover:border-[#08CCD4] hover:border-2 sm:p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#08CCD4]/10 text-2xl">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight text-[#1B2A4A] sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {step.description}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#08CCD4] sm:text-sm">
                      {step.ctaText || 'Learn more'}
                      <svg
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
