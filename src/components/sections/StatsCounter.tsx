'use client';

import { useEffect, useRef, useState } from 'react';

interface Stat {
  number: number;
  suffix?: string;
  label: string;
}

interface StatsCounterProps {
  headline?: string;
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { number: 10, suffix: '+', label: 'Years in Business' },
  { number: 500, suffix: '+', label: 'Global Clients' },
  { number: 1, suffix: 'M+', label: 'Pieces / Year' },
  { number: 30, suffix: '+', label: 'Countries Served' },
  { number: 50, suffix: '', label: 'Piece Minimum MOQ' },
  { number: 98, suffix: '%', label: 'On-Time Delivery' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl font-bold text-[#08CCD4] sm:text-5xl">
      {count}
      {suffix}
    </div>
  );
}

export default function StatsCounter({
  headline = 'Numbers That Speak',
  stats = defaultStats,
}: StatsCounterProps) {
  return (
    <section className="bg-[#1B2A4A]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        {headline && (
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {headline}
            </h2>
          </div>
        )}

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter target={stat.number} suffix={stat.suffix} />
              <div className="mt-2 text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
