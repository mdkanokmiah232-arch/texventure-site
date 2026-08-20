'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    category: '',
    quantity: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="mt-8 rounded-xl bg-green-50 p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold text-green-800">Message Sent!</h3>
        <p className="mt-2 text-sm text-green-700">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
          For urgent inquiries, please contact us via WhatsApp.
        </p>
        <Link
          href="https://wa.me/8801354316246?text=Hi!%20I%20just%20sent%20a%20message%20through%20your%20website."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20ba5a]"
        >
          Chat on WhatsApp
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#1B2A4A]">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#1B2A4A] placeholder-gray-400 transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#1B2A4A]">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#1B2A4A] placeholder-gray-400 transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
            placeholder="john@brand.com"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-[#1B2A4A]">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#1B2A4A] placeholder-gray-400 transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
            placeholder="Your Brand"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#1B2A4A]">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#1B2A4A] placeholder-gray-400 transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
            placeholder="+1 234 567 890"
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-[#1B2A4A]">
            Product Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#1B2A4A] transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
          >
            <option value="">Select a category</option>
            <option value="knit-wear">Knit Wear</option>
            <option value="wovens">Wovens</option>
            <option value="circular-knit">Circular Knit</option>
            <option value="denim">Denim</option>
            <option value="sweaters">Sweaters</option>
            <option value="work-wear">Work Wear</option>
            <option value="active-wear">Active Wear</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-[#1B2A4A]">
            Estimated Quantity
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#1B2A4A] placeholder-gray-400 transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
            placeholder="e.g. 500 pcs"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[#1B2A4A]">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-[#1B2A4A] placeholder-gray-400 transition focus:border-[#08CCD4] focus:outline-none focus:ring-2 focus:ring-[#08CCD4]/20"
          placeholder="Tell us about your sourcing requirements, design preferences, timeline, and any other details..."
        />
      </div>
      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
