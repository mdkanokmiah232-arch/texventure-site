interface TrustItem {
  number: string
  label: string
}

interface TrustStripProps {
  items?: TrustItem[]
}

const defaultItems: TrustItem[] = [
  { number: '15+', label: 'Years Experience' },
  { number: '50+', label: 'Vetted Factories' },
  { number: '5', label: 'Quality Certifications' },
  { number: '100', label: 'Piece MOQ' },
  { number: '500+', label: 'Global Clients' },
  { number: 'ISO 9001', label: 'Certified' },
  { number: '7–14', label: 'Day Sampling' },
]

export default function TrustStrip({ items = defaultItems }: TrustStripProps) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items]

  return (
    <section className="overflow-hidden bg-[#1B2A4A]">
      <div className="relative py-10">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#1B2A4A] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#1B2A4A] to-transparent" />

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {doubled.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="flex-shrink-0 px-8 text-center"
            >
              <div className="text-3xl font-bold text-[#08CCD4] sm:text-4xl">
                {item.number}
              </div>
              <div className="mt-1 text-sm font-medium text-gray-300">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
