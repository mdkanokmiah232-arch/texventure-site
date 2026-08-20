'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  headline?: string;
  items?: FAQItem[];
  className?: string;
}

const defaultItems: FAQItem[] = [
  {
    question: 'What is your minimum order quantity (MOQ)?',
    answer: 'We offer a low MOQ starting from just 50 pieces per style. This makes us ideal for startups and small brands who want to test the market without committing to large volumes.',
  },
  {
    question: 'How long does production take?',
    answer: 'Sampling takes 5-7 business days. Once approved, mass production typically takes 7-14 business days depending on the order volume and complexity. Rush orders are available.',
  },
  {
    question: 'Do you provide fabric sourcing?',
    answer: 'Yes, we source fabrics from certified mills both locally and internationally. We can work with your specified fabrics or recommend options based on your design requirements.',
  },
  {
    question: 'What quality certifications do you hold?',
    answer: 'We are ISO 9001:2015 certified, BSCI compliant, OEKO-TEX Standard 100 certified, SGS verified, and Sedex members. Our multi-point QC process ensures consistent quality.',
  },
  {
    question: 'Can I get a sample before placing a bulk order?',
    answer: 'Absolutely. We offer pre-production samples for review and approval. Sample costs are deducted from your bulk order once production begins.',
  },
  {
    question: 'What countries do you ship to?',
    answer: 'We ship globally to over 30 countries including the USA, UK, Canada, Australia, Germany, France, and Japan. We handle all export documentation and customs.',
  },
  {
    question: 'Do you offer private label / white label services?',
    answer: 'Yes, we provide full private label services including custom labeling, hang tags, poly bags, and branded packaging to match your brand identity.',
  },
];

function FAQAccordion({ question, answer }: FAQItem) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left transition hover:text-[#08CCD4]"
      >
        <span className="text-base font-medium text-[#1B2A4A]">{question}</span>
        <svg
          className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5 text-sm leading-relaxed text-gray-500">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ({
  headline = 'Frequently Asked Questions',
  items = defaultItems,
  className = '',
}: FAQProps) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className={className || 'bg-white'}>
        <div className="mx-auto px-4 py-16 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
              {headline}
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to know about working with TexVenture.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl divide-y divide-gray-100">
            {items.map((item) => (
              <FAQAccordion key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
