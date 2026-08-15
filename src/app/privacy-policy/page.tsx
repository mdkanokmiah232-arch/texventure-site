import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'TexVenture Privacy Policy — how we collect, use, and protect your personal information when you use our website or engage our apparel sourcing services.',
  alternates: { canonical: 'https://texventure.com/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 1, 2026';

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
          <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy-policy' }]} />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
        <div className="prose prose-slate max-w-none space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">1. Introduction</h2>
            <p className="mt-3 leading-relaxed">
              TexVenture (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is a Bangladesh-based apparel sourcing and
              buying house. This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website texventure.com or engage our
              manufacturing and sourcing services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">2. Information We Collect</h2>
            <p className="mt-3 leading-relaxed">
              We may collect the following categories of information:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Contact details you provide via our quote request or contact forms (name, email, phone, company name).</li>
              <li>Business information relevant to sourcing requests (product specifications, order quantities, target pricing).</li>
              <li>Usage data collected automatically (IP address, browser type, pages visited) via standard web analytics.</li>
              <li>Communication records from WhatsApp, email, or phone correspondence related to your inquiry.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">3. How We Use Your Information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>To respond to quote requests and provide manufacturing proposals.</li>
              <li>To communicate with you about your order, sampling, or production status.</li>
              <li>To improve our website and services based on usage patterns.</li>
              <li>To comply with legal obligations and protect against fraudulent activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">4. Data Sharing</h2>
            <p className="mt-3 leading-relaxed">
              We do not sell your personal information. We may share information with vetted
              factory partners solely to fulfil production requests, and with service providers
              (e.g. email/CRM platforms) who assist in operating our business under confidentiality
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">5. Data Security</h2>
            <p className="mt-3 leading-relaxed">
              We implement reasonable technical and organisational measures to protect your
              information from unauthorised access, alteration, or disclosure. However, no method
              of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">6. Your Rights</h2>
            <p className="mt-3 leading-relaxed">
              You may request access to, correction of, or deletion of your personal data by
              contacting us at{' '}
              <a href="mailto:info@texventure.com" className="text-[#08CCD4] hover:underline">
                info@texventure.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">7. Contact Us</h2>
            <p className="mt-3 leading-relaxed">
              If you have questions about this Privacy Policy, contact TexVenture at 35
              Gareeb-E-Newaz Avenue, Sector 13, Uttara, Dhaka 1230, Bangladesh, or via email at
              info@texventure.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
