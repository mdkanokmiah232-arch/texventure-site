'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const productCategories = [
  { name: 'Knit Wear', href: '/products/knit-wear' },
  { name: 'Wovens', href: '/products/wovens' },
  { name: 'Circular Knit', href: '/products/circular-knit' },
  { name: 'Denim', href: '/products/denim' },
  { name: 'Sweaters', href: '/products/sweaters' },
  { name: 'Work Wear', href: '/products/work-wear' },
  { name: 'Active Wear', href: '/products/active-wear' },
];

const navLinks = [
  { name: 'Custom Manufacturing', href: '/custom-manufacturing' },
  { name: 'Low MOQ', href: '/low-moq-clothing-manufacturer-bangladesh' },
  { name: 'Guides', href: '/guides' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="TexVenture — Apparel Sourcing and Buying House in Bangladesh"
            className="h-10 w-auto md:h-12"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/custom-manufacturing"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-[#08CCD4]"
          >
            Custom Manufacturing
          </Link>

          {/* Products Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-[#08CCD4]"
            >
              Products
              <svg
                className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {productsOpen && (
              <div className="absolute left-0 top-full z-50 mt-1 w-56 rounded-xl border border-gray-100 bg-white py-2 shadow-lg">
                {productCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="block px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 hover:text-[#08CCD4]"
                    onClick={() => setProductsOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks
            .filter((l) => l.name !== 'Custom Manufacturing')
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 hover:text-[#08CCD4]"
              >
                {link.name}
              </Link>
            ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#08CCD4] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#07b8be] hover:shadow-md sm:inline-block"
          >
            Get a Quote
          </Link>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 pt-2 lg:hidden">
          <Link
            href="/custom-manufacturing"
            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#08CCD4]"
          >
            Custom Manufacturing
          </Link>

          <button
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#08CCD4]"
          >
            Products
            <svg
              className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {mobileProductsOpen && (
            <div className="ml-4 border-l-2 border-[#08CCD4] pl-3">
              {productCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#08CCD4]"
                  onClick={() => setMobileOpen(false)}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}

          {navLinks
            .filter((l) => l.name !== 'Custom Manufacturing')
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#08CCD4]"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}

          <div className="mt-3">
            <Link
              href="/contact"
              className="block w-full rounded-full bg-[#08CCD4] px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-[#07b8be]"
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
