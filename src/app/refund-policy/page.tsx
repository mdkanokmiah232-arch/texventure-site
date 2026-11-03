import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    'TEXVENTURE Refund Policy — when sampling fees, deposits, and production payments for apparel sourcing and garment manufacturing orders are refundable, and how to request a refund.',
  alternates: { canonical: 'https://texventure.com/refund-policy' },
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
  const lastUpdated = 'November 3, 2026';

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
          <Breadcrumbs items={[{ name: 'Refund Policy', href: '/refund-policy' }]} />
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#1B2A4A] sm:text-4xl">
            Refund Policy
          </h1>
          <p className="mt-2 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
        <div className="prose prose-slate max-w-none space-y-8 text-gray-600">
          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">1. Overview</h2>
            <p className="mt-3 leading-relaxed">
              This Refund Policy explains when TEXVENTURE (&quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) issues refunds for sampling fees, deposits, and production payments
              made through texventure.com or directly with our sourcing team.
            </p>
            <p className="mt-3 leading-relaxed">
              TEXVENTURE is a Bangladesh-based apparel manufacturer with a liaison office in the
              USA and a registered company in the USA. Everything we produce is
              custom-manufactured to your specification, so the stage your order has reached
              determines whether a refund is available.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">2. Payment Stages</h2>
            <p className="mt-3 leading-relaxed">A typical order moves through these stages:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Sampling fee</strong> — paid when you request a development sample,
                including the courier fee.
              </li>
              <li>
                <strong>Production deposit</strong> — paid to confirm the order and release fabric
                and trims for cutting.
              </li>
              <li>
                <strong>Balance payment</strong> — due before shipment, once the goods pass final
                inspection.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              Refund eligibility depends on which of these stages has been completed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">3. When a Refund Is Available</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Before production starts.</strong> If you cancel before fabric has been
                cut and production has begun, amounts paid are refundable, less any
                non-recoverable costs already incurred on your behalf (sourcing, third-party
                testing, and administrative work).
              </li>
              <li>
                <strong>Sampling fee.</strong> If the sample deviates from the major agreed
                specification and we cannot correct it, the sampling fee is refunded in full. When
                you place the bulk order for a particular style based on the design, the sample
                fee is also refundable, except the courier charges.
              </li>
              <li>
                <strong>Non-conforming goods.</strong> If delivered units do not match the
                approved specification or fail the agreed quality standard, and we cannot repair
                or remake them in a reasonable time, we refund the proportion of the order value
                covering the affected units, and you need to return those goods to us.
              </li>
              <li>
                <strong>Duplicate or incorrect charges.</strong> Any amount charged in error is
                refunded in full.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">4. When a Refund Is Not Available</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                Once fabric has been cut and production has begun, orders are custom goods and
                cannot be cancelled or refunded.
              </li>
              <li>
                Minor variations in colour, shade, texture, or measurement that fall within normal
                industry tolerance are not defects and are not refundable. We follow the AQL 2.5
                method.
              </li>
              <li>
                A sample that was produced, approved, and signed off by you defines the
                production standard. A production run matching an approved sample is not
                eligible for a refund.
              </li>
              <li>
                Delays caused by late approvals, specification changes, missing information, or
                late balance payment on your side.
              </li>
              <li>
                Costs arising after delivery, including import duties, customs clearance, and
                local delivery at the destination.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">5. Quality Claims</h2>
            <p className="mt-3 leading-relaxed">
              Inspect your order before ex-factory. To raise a quality claim, contact us within{' '}
              <strong>2 days</strong> of receiving the goods and include your order reference,
              unboxing video, photographs, videos of the issue, and the quantity affected.
            </p>
            <p className="mt-3 leading-relaxed">
              An unboxing video is mandatory to claim any refund.
            </p>
            <p className="mt-3 leading-relaxed">
              Claims are assessed against the approved sample and the agreed inspection
              standard. Where a claim is accepted, we will repair, remake, issue a credit, or
              refund the affected units — the remedy is agreed with you based on lead time and
              urgency.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">6. Shipping Damage or Loss</h2>
            <p className="mt-3 leading-relaxed">
              Report visible damage or a shortfall in shipment within{' '}
              <strong>48 hours</strong> of delivery, with an unboxing video and photographs of the
              packaging and the goods. We will support you in filing a claim with the carrier or
              its insurer.
            </p>
            <p className="mt-3 leading-relaxed">
              Claims for concealed damage or total loss must be raised as soon as the issue is
              discovered and no later than <strong>7 days</strong> after delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">7. How to Request a Refund</h2>
            <p className="mt-3 leading-relaxed">
              Email{' '}
              <a href="mailto:zakir@texventure.com" className="text-[#08CCD4] hover:underline">
                zakir@texventure.com
              </a>{' '}
              with the subject line &quot;Refund Request&quot; and include:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Your order or invoice reference.</li>
              <li>The payment date, amount, and method used.</li>
              <li>
                The reason for the request, with supporting videos and photographs where relevant.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed">
              We acknowledge every request within <strong>3 business days</strong> and confirm
              the decision within <strong>15 business days</strong> of receiving the required
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">8. How Refunds Are Paid</h2>
            <p className="mt-3 leading-relaxed">
              Approved refunds are issued to the original payment method within{' '}
              <strong>30 business days</strong> of approval. Where a refund must be sent by
              international bank transfer, intermediary and transfer fees are deducted from the
              refund amount.
            </p>
            <p className="mt-3 leading-relaxed">
              If the original payment method is no longer available, we will agree an
              alternative method with you in writing before processing the refund.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">9. Changes to This Policy</h2>
            <p className="mt-3 leading-relaxed">
              We may update this Refund Policy from time to time. The latest version is always
              published on this page, and the &quot;Last updated&quot; date above shows when it
              last changed. Orders already confirmed are governed by the policy in effect on the
              date the order was placed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B2A4A]">10. Contact Us</h2>
            <p className="mt-3 leading-relaxed">
              Questions about this Refund Policy? Email{' '}
              <a href="mailto:zakir@texventure.com" className="text-[#08CCD4] hover:underline">
                zakir@texventure.com
              </a>
              , or use the{' '}
              <Link href="https://quote.texventure.com/" className="text-[#08CCD4] hover:underline">
                quote form
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
