interface TrustItem {
  number: string
  label: string
}

interface TrustStripProps {
  items?: TrustItem[]
}

const defaultItems: TrustItem[] = [
  { number: '10+', label: 'Years Experience' },
  { number: '20+', label: 'Vetted Factories' },
  { number: '5', label: 'Quality Certifications' },
  { number: '100', label: 'Piece MOQ' },
  { number: '8+', label: 'Global Clients' },
  { number: 'ISO 9001', label: 'Certified Quality' },
  { number: '7–14', label: 'Day Sampling' },
]

export default function TrustStrip({ items = defaultItems }: TrustStripProps) {
  const doubled = [...items, ...items]

  return (
    <section className="bg-white overflow-hidden">
      <div className="relative py-10 sm:py-12">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

        {/* Scrolling track */}
        <div className="flex animate-marquee gap-3 sm:gap-5">
          {doubled.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="flex-shrink-0 whitespace-nowrap w-[45%] sm:w-[calc(25%-15px)]"
            >
              <div className="rounded-xl sm:rounded-2xl bg-[#E8F4F5] px-4 py-3 sm:px-6 sm:py-5 text-center shadow-sm">
                <div className="text-xl font-bold text-[#08CCD4] sm:text-3xl lg:text-4xl whitespace-nowrap">
                  {item.number}
                </div>
                <div className="mt-1 text-xs font-medium text-[#1B2A4A] sm:mt-2 sm:text-sm whitespace-nowrap">
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
