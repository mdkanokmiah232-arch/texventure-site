'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

function CheckoutForm() {
  const searchParams = useSearchParams();
  const product = searchParams.get('product') || '';
  const image = searchParams.get('image') || '';

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '100',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Order Inquiry — ${product}`);
    const body = encodeURIComponent(
      `Hello TexVenture,\n\n` +
      `I would like to place an order for: ${product}\n\n` +
      `Details:\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone}\n` +
      `Company: ${form.company}\n` +
      `Quantity: ${form.quantity} pcs\n\n` +
      `Message:\n${form.message}\n\n` +
      `Thank you.`
    );

    window.location.href = `mailto:info@texventure.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Products', href: '/products' },
              { name: 'Checkout', href: '/checkout' },
            ]}
          />
          <div className="mx-auto mt-6 max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Checkout
            </h1>
            <p className="mt-3 text-gray-300">Complete your order inquiry below.</p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
        {submitted ? (
          /* Success Message */
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="mt-4 text-2xl font-bold text-green-800">Order Inquiry Sent!</h2>
            <p className="mt-2 text-green-600">
              Your email client has opened with the order details. Please send the email to complete your inquiry.
            </p>
            <p className="mt-1 text-sm text-green-500">We&apos;ll respond within 24 hours.</p>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#08CCD4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#07b8be]"
            >
              ← Back to Products
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Product Summary */}
            {product && (
              <div className="lg:col-span-2">
                <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-[#1B2A4A]">Order Summary</h3>
                  {image && (
                    <div className="mt-4 overflow-hidden rounded-xl">
                      <img src={image} alt={product} className="h-48 w-full object-cover" />
                    </div>
                  )}
                  <div className="mt-4">
                    <p className="font-semibold text-[#1B2A4A]">{product}</p>
                    <p className="mt-1 text-sm text-gray-500">Custom manufacturing available</p>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>MOQ</span>
                      <span className="font-medium text-[#1B2A4A]">100 pcs / style</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lead Time</span>
                      <span className="font-medium text-[#1B2A4A]">45–60 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Quality</span>
                      <span className="font-medium text-[#1B2A4A]">AQL 2.5</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Checkout Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                <h3 className="text-lg font-bold text-[#1B2A4A]">Your Details</h3>
                <p className="mt-1 text-sm text-gray-500">Fill in your information and we&apos;ll get back to you with a quote.</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                      placeholder="john@brand.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                      placeholder="Your Brand Name"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Quantity (pcs) *</label>
                  <select
                    name="quantity"
                    required
                    value={form.quantity}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                  >
                    <option value="100">100 pcs (MOQ)</option>
                    <option value="200">200 pcs</option>
                    <option value="500">500 pcs</option>
                    <option value="1000">1,000 pcs</option>
                    <option value="2000">2,000 pcs</option>
                    <option value="5000">5,000+ pcs</option>
                  </select>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
                    placeholder="Tell us about your requirements — colors, sizes, custom labels, etc."
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#08CCD4] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#08CCD4]/25 transition hover:bg-[#07b8be]"
                >
                  Submit Order Inquiry
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <p className="mt-3 text-center text-xs text-gray-400">
                  Your inquiry will be sent to <strong>info@texventure.com</strong>. We respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#08CCD4] border-t-transparent mx-auto" />
          <p className="mt-4 text-gray-500">Loading checkout...</p>
        </div>
      </div>
    }>
      <CheckoutForm />
    </Suspense>
  );
}
