import Card from "@/components/ui/Card";
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
    icon: '1',
    title: 'Share Your Requirements',
    description: 'Tell us your product, quantity, fabric, and target price. We respond within 24 hours.',
    href: '/contact',

  },
  {
    icon: '2',
    title: 'Factory Matching',
    description: 'We match your order to the right certified factory from our network of 20+ partners, based on your category and quantity.',
    href: '/contact',

  },
  {
    icon: '3',
    title: 'Sampling',
    description: 'We produce a sample for your approval, typically within 5–7 days.',
    href: '/contact',

  },
  {
    icon: '4',
    title: 'Production',
    description: 'Once you approve the sample, full production begins, with regular updates from our team.',
    href: '/contact',

  },
  {
    icon: '5',
    title: 'Quality Inspection',
    description: 'Every order is inspected at AQL 2.5 standard before packing, with a documented report sent to you.',
    href: '/contact',

  },
  {
    icon: '6',
    title: 'Shipping',
    description: 'We handle logistics to your destination, by sea, air, or express courier, across 30+ countries.',
    href: '/contact',

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
            From your first message to your goods arriving at your warehouse, here is exactly what happens.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {steps.map((step) => (
            <div key={step.title}>
              <Card hover className="group h-full border border-gray-200 p-4 transition-all duration-300 hover:border-[#08CCD4] hover:border-2 sm:p-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#08CCD4] text-xl font-bold text-white">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold leading-tight text-[#1B2A4A] sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
