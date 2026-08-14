import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products/t-shirts' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Guides', href: '/guides' },
  { name: 'Contact', href: '/contact' },
  { name: 'Get a Quote', href: '/get-a-quote' },
];

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
      {/* 404 */}
      <div className="mb-8">
        <span className="block text-8xl font-bold tracking-tighter text-[#08CCD4]">404</span>
        <span className="mt-2 block text-sm font-medium uppercase tracking-widest text-gray-400">
          Page Not Found
        </span>
      </div>

      <h1 className="text-3xl font-bold text-[#1B2A4A] sm:text-4xl">
        Oops! This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-lg text-gray-500">
        The page you&apos;re looking for may have been moved, removed, or is temporarily
        unavailable.
      </p>

      {/* Quick Links */}
      <nav className="mt-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">
          Quick Links
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-[#1B2A4A] shadow-sm transition hover:border-[#08CCD4] hover:text-[#08CCD4]"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Back Home CTA */}
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#08CCD4] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#08CCD4]/25 transition hover:bg-[#07b8be]"
      >
        ← Back to Home
      </Link>
    </div>
  );
}
