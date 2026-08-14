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
  { number: 'ISO 9001', label: 'Certified Quality' },
  { number: '7–14', label: 'Day Sampling' },
]

export default function TrustStrip({ items = defaultItems }: TrustStripProps) {
  const doubled = [...items, ...items]

  return (
    <section className="bg-white overflow-hidden">
      <div className="relative py-12">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />

        {/* Scrolling track */}
        <div className="flex animate-marquee gap-6">
          {doubled.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="flex-shrink-0 w-[calc(25%-18px)]"
            >
              <div className="rounded-2xl bg-[#E8F4F5] px-6 py-5 text-center shadow-sm">
                <div className="text-3xl font-bold text-[#08CCD4] sm:text-4xl">
                  {item.number}
                </div>
                <div className="mt-2 text-sm font-medium text-[#1B2A4A]">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
