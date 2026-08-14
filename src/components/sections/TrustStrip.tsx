interface TrustItem {
  number: string;
  label: string;
}

interface TrustStripProps {
  items?: TrustItem[];
}

const defaultItems: TrustItem[] = [
  { number: '500+', label: 'Global Clients' },
  { number: 'ISO 9001', label: 'Certified Quality' },
  { number: '7–14', label: 'Day Sampling' },
];

export default function TrustStrip({ items = defaultItems }: TrustStripProps) {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 lg:grid-cols-7">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-3xl font-bold text-[#08CCD4] sm:text-4xl">
                {item.number}
              </div>
              <div className="mt-1 text-sm font-medium text-gray-500">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
