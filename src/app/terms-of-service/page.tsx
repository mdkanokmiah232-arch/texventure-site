import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'TexVenture Terms of Service — the terms and conditions governing use of our website and our apparel manufacturing and sourcing services.',
  alternates: { canonical: 'https://texventure.com/terms-of-service' },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  const lastUpdated = 'January 1, 2026';

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
          <Breadcrumbs items={[{ name: 'Terms of Service', href: '/terms-of-service' }]} />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
        <div className="prose prose-slate max-w-none space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">1. Acceptance of Terms</h2>
            <p className="mt-3 leading-relaxed">
              By accessing texventure.com or engaging TexVenture&apos;s apparel sourcing and
              manufacturing services, you agree to be bound by these Terms of Service. If you do
              not agree, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">2. Our Services</h2>
            <p className="mt-3 leading-relaxed">
              TexVenture acts as an apparel sourcing and buying house, connecting brands with
              vetted garment factories in Bangladesh for custom clothing manufacturing. Minimum
              order quantities, lead times, and pricing vary by product category and are confirmed
              in writing before production begins.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">3. Quotes and Orders</h2>
            <p className="mt-3 leading-relaxed">
              Quotes provided via our website, WhatsApp, or email are estimates and subject to
              change based on final specifications, fabric availability, and order volume. A
              formal order is confirmed only after both parties agree to written terms, pricing,
              and a production timeline.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">4. Payment Terms</h2>
            <p className="mt-3 leading-relaxed">
              Standard payment terms are agreed on a per-order basis and typically involve a
              deposit prior to production and balance payment prior to shipment. Specific terms
              will be detailed in your order confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">5. Quality and Compliance</h2>
            <p className="mt-3 leading-relaxed">
              Our factory partners hold certifications including BSCI, OEKO-TEX® Standard 100,
              SEDEX/SMETA, WRAP, and GOTS. Products are inspected using AQL 2.5 sampling standards
              prior to shipment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">6. Intellectual Property</h2>
            <p className="mt-3 leading-relaxed">
              All content on texventure.com — including text, images, and branding — is the
              property of TexVenture unless otherwise noted, and may not be reproduced without
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">7. Limitation of Liability</h2>
            <p className="mt-3 leading-relaxed">
              TexVenture acts as a sourcing intermediary. While we vet and monitor our factory
              partners closely, liability for production delays or defects is addressed on a
              per-order basis in line with agreed contractual terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">8. Contact Us</h2>
            <p className="mt-3 leading-relaxed">
              For questions about these Terms of Service, contact TexVenture at House: 2, Road: 3/A
              Avenue, Sector 13, Uttara, Dhaka 1230, Bangladesh, or via email at info@texventure.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
