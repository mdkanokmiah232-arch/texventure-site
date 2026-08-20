import Link from 'next/link';

interface InternalLinksProps {
  currentPage?: string;
}

export default function InternalLinks({ currentPage }: InternalLinksProps) {
  const links = [
    {
      keyword: 'Clothing Manufacturer in Bangladesh',
      href: '/',
      description: 'Trusted clothing manufacturer & supplier in Bangladesh with 20+ certified factories',
    },
    {
      keyword: 'TexVenture',
      href: '/about',
      description: 'Learn about our 10+ years of experience in apparel sourcing and manufacturing',
    },
    {
      keyword: 'Custom Clothing Manufacturer',
      href: '/custom-clothing-manufacturer-bangladesh',
      description: 'End-to-end custom garment manufacturing with low MOQ from 100 pieces',
    },
    {
      keyword: 'Low MOQ Manufacturer',
      href: '/low-moq-clothing-manufacturer-bangladesh',
      description: 'Start with just 100 pieces per style - perfect for startups and small brands',
    },
  ];

  const filteredLinks = links.filter(link => link.href !== currentPage);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <h2 className="text-xl font-bold text-[#1B2A4A]">Explore Our Services</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filteredLinks.map((link) => (
            <Link
              key={link.keyword}
              href={link.href}
              className="rounded-xl border border-gray-100 bg-white p-4 transition hover:shadow-md"
            >
              <h3 className="text-sm font-semibold text-[#1B2A4A]">{link.keyword}</h3>
              <p className="mt-1 text-xs text-gray-500">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
