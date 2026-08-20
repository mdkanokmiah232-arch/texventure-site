import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products, getProductBySlug, getAllProductSlugs } from '@/data/products';
import { certifications, contact } from '@/data/site';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import FAQ from '@/components/sections/FAQ';
import CTABand from '@/components/sections/CTABand';
import InternalLinks from '@/components/sections/InternalLinks';

// ---------------------------------------------------------------------------
// Static Params — all categories
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return getAllProductSlugs().map((category) => ({ category }));
}

// ---------------------------------------------------------------------------
// Dynamic Metadata
// ---------------------------------------------------------------------------

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const product = getProductBySlug(category);
  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} Manufacturer in Bangladesh | TexVenture`,
    description: `${product.name} manufacturer and supplier in Bangladesh. ${product.description} Low MOQ 100 pcs, AQL 2.5 quality. BSCI & OEKO-TEX® certified factories.`,
    alternates: {
      canonical: `https://texventure.com/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} Manufacturer & Supplier in Bangladesh | TexVenture`,
      description: `Custom ${product.name.toLowerCase()} manufacturing in Bangladesh. Low MOQ, fast turnaround, certified factories.`,
      url: `https://texventure.com/products/${product.slug}`,
      siteName: 'TexVenture',
      type: 'website',
      images: [{ url: product.image, width: 1200, height: 630, alt: product.imageAlt }],
    },
  };
}

// ---------------------------------------------------------------------------
// Page Component
// ---------------------------------------------------------------------------

export default async function ProductCategoryPage({ params }: Props) {
  const { category } = await params;
  const product = getProductBySlug(category);

  if (!product) notFound();

  // Related products = every other category
  const relatedProducts = products.filter((p) => p.slug !== product.slug);

  // Product-specific FAQ items — SEO/AEO optimized
  const productFaqs = [
    {
      question: `What is the MOQ for ${product.shortName}?`,
      answer: `Our standard MOQ for ${product.shortName} is ${product.moq}. We cater to both small startups and large-scale brands — reach out to discuss volume pricing and custom requirements.`,
    },
    {
      question: `How long does ${product.shortName} production take?`,
      answer: `Lead time for ${product.shortName} is typically ${product.leadTime} after sample approval. This includes fabric sourcing, cutting, sewing, finishing, QC inspection, and export documentation.`,
    },
    {
      question: `Can I order samples before bulk ${product.shortName} production?`,
      answer: `Absolutely. We produce pre-production samples so you can evaluate fit, fabric, and quality before committing to bulk. Sample costs are credited toward your bulk order once production begins.`,
    },
    {
      question: 'What quality certifications do your factories hold?',
      answer: `Our factory partners hold BSCI, OEKO-TEX® Standard 100, SEDEX, WRAP, and GOTS certifications. Every ${product.shortName.toLowerCase()} order goes through our multi-point AQL 2.5 quality inspection process.`,
    },
    {
      question: `Why should I choose Bangladesh for ${product.shortName} manufacturing?`,
      answer: `Bangladesh is the world's second-largest garment exporter, offering competitive pricing, skilled labor, and deep expertise in apparel production. TexVenture's vetted factory network ensures you get international quality at competitive costs with full supply chain transparency.`,
    },
  ];

  // Structured data for this product category
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${product.name} — Manufacturing in Bangladesh`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "TexVenture"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "TexVenture",
      "url": "https://texventure.com"
    },
    "category": product.name,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "TexVenture"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1B2A4A] via-[#1e3357] to-[#0f2240]">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-[#08CCD4] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#08CCD4] blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
          <Breadcrumbs
            items={[
              { name: 'Products', href: '/products' },
              { name: product.name, href: `/products/${product.slug}` },
            ]}
          />
          <div className="mx-auto mt-8 max-w-3xl text-center">
            <Badge variant="brand" className="mb-4">
              {product.name} — Bangladesh
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {product.name} <span className="text-[#08CCD4]">Manufacturer</span> in Bangladesh
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 rounded-full bg-[#08CCD4] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#08CCD4]/25 transition hover:bg-[#07b8be]"
              >
                Get a Free Quote
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/instant-quote"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Instant Pricing Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Citation Box — for AEO/GEO */}
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="rounded-2xl border border-[#08CCD4]/20 bg-[#08CCD4]/5 p-6">
          <h2 className="text-lg font-bold text-[#1B2A4A]">Quick Answer</h2>
          <p className="mt-2 text-gray-600">
            <strong>TexVenture</strong> is a {product.name.toLowerCase()} manufacturer and supplier based in{' '}
            <strong>Dhaka, Bangladesh</strong>. Founded in <strong>2016</strong>, we produce {product.name.toLowerCase()} for
            brands across <strong>30+ countries</strong> with a low MOQ of <strong>{product.moq}</strong>, lead time of{' '}
            <strong>{product.leadTime}</strong>, and AQL 2.5 quality standards. Our factory partners hold{' '}
            <strong>BSCI, OEKO-TEX®, SEDEX, WRAP</strong> certifications.
          </p>
        </div>
      </section>

      {/* Main Content: Two-column layout */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About This Category */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                About Our {product.name} Manufacturing
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-gray-600">
                {product.longDescription.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* Target Audience */}
            {product.targetAudience && (
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                  Who We Serve
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  Our {product.name.toLowerCase()} manufacturing services are trusted by:
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.targetAudience.split(', ').map((audience) => (
                    <Badge key={audience} variant="outline">{audience}</Badge>
                  ))}
                </div>
              </section>
            )}

            {/* Fabric Options */}
            {product.fabricOptions && (
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                  Available Fabrics
                </h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {product.fabricOptions.map((fabric) => (
                    <Badge key={fabric} variant="outline">{fabric}</Badge>
                  ))}
                </div>
              </section>
            )}

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                Why Choose TexVenture for {product.name}
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <Card key={feature.text} hover>
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{feature.icon}</span>
                      <p className="text-sm font-medium text-[#1B2A4A]">{feature.text}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

            {/* Popular Items */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                Popular {product.name} We Manufacture
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {product.popularItems.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </section>

            {/* Capabilities */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                Manufacturing Capabilities
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-[#08CCD4]">{product.leadTime}</div>
                  <div className="mt-1 text-sm font-medium text-gray-500">Lead Time</div>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-[#08CCD4]">{product.moq}</div>
                  <div className="mt-1 text-sm font-medium text-gray-500">Minimum Order</div>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-[#08CCD4]">AQL 2.5</div>
                  <div className="mt-1 text-sm font-medium text-gray-500">Quality Standard</div>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <FAQ
              headline={`${product.shortName} — Frequently Asked Questions`}
              items={productFaqs}
            />
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-8">
            {/* Quick Info Card */}
            <Card>
              <h3 className="text-lg font-bold text-[#1B2A4A]">Quick Info</h3>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-500">Category</dt>
                  <dd className="font-medium text-[#1B2A4A]">{product.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Lead Time</dt>
                  <dd className="font-medium text-[#1B2A4A]">{product.leadTime}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">MOQ</dt>
                  <dd className="font-medium text-[#1B2A4A]">{product.moq}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Quality Standard</dt>
                  <dd className="font-medium text-[#1B2A4A]">AQL 2.5</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-500">Location</dt>
                  <dd className="font-medium text-[#1B2A4A]">Dhaka, Bangladesh</dd>
                </div>
              </dl>
              <Link
                href="/get-a-quote"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#08CCD4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#07b8be]"
              >
                Request a Free Quote
              </Link>
            </Card>

            {/* Related Products */}
            <Card>
              <h3 className="text-lg font-bold text-[#1B2A4A]">Other Categories</h3>
              <ul className="mt-4 space-y-2">
                {relatedProducts.map((rp) => (
                  <li key={rp.slug}>
                    <Link
                      href={`/products/${rp.slug}`}
                      className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-[#08CCD4]"
                    >
                      <span>{rp.name}</span>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Certifications */}
            <Card>
              <h3 className="text-lg font-bold text-[#1B2A4A]">Our Certifications</h3>
              <div className="mt-4 space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="text-sm">
                    <div className="font-medium text-[#1B2A4A]">{cert.name}</div>
                    <div className="text-gray-500">{cert.description}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/certifications"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#08CCD4] hover:underline"
              >
                View all certifications
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Card>

            {/* Contact Card */}
            <Card className="bg-[#1B2A4A]">
              <h3 className="text-lg font-bold text-white">Need Help?</h3>
              <p className="mt-2 text-sm text-gray-300">
                Talk to our sourcing experts about your {product.shortName.toLowerCase()} requirements.
              </p>
              <div className="mt-4 space-y-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{contact.email}</span>
                </div>
              </div>
              <Link
                href="https://wa.me/8801354316246"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#20ba5a]"
              >
                Chat on WhatsApp
              </Link>
            </Card>
          </aside>
        </div>
      </div>

      {/* Internal Links */}
      <InternalLinks currentPage={`/products/${product.slug}`} />

      {/* CTA Band */}
      <CTABand
        headline={`Ready to Source ${product.shortName}?`}
        description={`Partner with TexVenture for reliable ${product.shortName.toLowerCase()} manufacturing in Bangladesh. Low MOQ, fast turnaround, and quality you can count on.`}
        buttonText="Get a Free Quote"
        buttonHref="/get-a-quote"
      />

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </div>
  );
}
