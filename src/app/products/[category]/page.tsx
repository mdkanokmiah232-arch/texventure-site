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
    description: `${product.name} manufacturer and supplier in Bangladesh. ${product.description} Low MOQ ${product.moq}, AQL 2.5 quality. BSCI & OEKO-TEX certified factories.`,
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
  const productFaqs = product.faqs || [
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
      answer: `Our factory partners hold BSCI, OEKO-TEX Standard 100, SEDEX, WRAP, and GOTS certifications. Every ${product.shortName.toLowerCase()} order goes through our multi-point AQL 2.5 quality inspection process.`,
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

      {/* Product Categories with Images — moved above Quick Answer */}
      {/* AI Citation Box — for AEO/GEO */}
      <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="rounded-2xl border border-[#08CCD4]/20 bg-[#08CCD4]/5 p-6">
          <h2 className="text-lg font-bold text-[#1B2A4A]">Quick Answer</h2>
          <p className="mt-2 text-gray-600">
            <strong>TexVenture</strong> is a {product.name.toLowerCase()} manufacturer and supplier based in{' '}
            <strong>Dhaka, Bangladesh</strong>. Founded in <strong>2016</strong>, we produce {product.name.toLowerCase()} for
            brands across <strong>30+ countries</strong> with a low MOQ of <strong>{product.moq}</strong>, lead time of{' '}
            <strong>{product.leadTime}</strong>, and AQL 2.5 quality standards. Our factory partners hold{' '}
            <strong>BSCI, OEKO-TEX, SEDEX, WRAP</strong> certifications.
          </p>
        </div>
      </section>

      {/* Product Collection Images */}
      {product.subCategories && product.subCategories.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
            Our {product.name} Collection
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.subCategories.map((subCat) =>
              subCat.images.map((img, idx) => (
                <div key={idx} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:shadow-lg">
                  <div className="relative w-full overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 rounded-full bg-[#08CCD4] px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#07b8be] group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                      Add to Cart
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-semibold text-[#1B2A4A] line-clamp-1">{img.alt.split(' — ')[1] || img.alt}</p>
                    <p className="mt-1 text-xs text-gray-400">Custom manufacturing available</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      )}

      {/* Main Content: Two-column layout */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Left Column: Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About This Category — AEO-style direct answer */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                Why Source {product.name} from TexVenture
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

            {/* Specifications */}
            {product.specs && (
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                  {product.name} Specifications We Offer
                </h2>
                <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <dl className="grid gap-4 sm:grid-cols-2">
                    {product.specs.fabricWeight && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Fabric Weight</dt>
                        <dd className="mt-1 text-sm font-semibold text-[#1B2A4A]">{product.specs.fabricWeight}</dd>
                      </div>
                    )}
                    {product.specs.construction && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Construction</dt>
                        <dd className="mt-1 text-sm font-semibold text-[#1B2A4A]">{product.specs.construction}</dd>
                      </div>
                    )}
                    {product.specs.sizing && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500">Sizing</dt>
                        <dd className="mt-1 text-sm font-semibold text-[#1B2A4A]">{product.specs.sizing}</dd>
                      </div>
                    )}
                    {product.specs.finishing && (
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">Finishing Options</dt>
                        <dd className="mt-2 flex flex-wrap gap-2">
                          {product.specs.finishing.map((finish) => (
                            <Badge key={finish} variant="outline">{finish}</Badge>
                          ))}
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>
              </section>
            )}

            {/* MOQ, Sampling & Lead Time */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                MOQ, Sampling & Lead Time
              </h2>
              <div className="mt-6 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <dl className="grid gap-4 sm:grid-cols-3">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#08CCD4]">{product.moq}</div>
                    <div className="mt-1 text-sm font-medium text-gray-500">Minimum Order</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#08CCD4]">5–7 days</div>
                    <div className="mt-1 text-sm font-medium text-gray-500">Sampling Turnaround</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#08CCD4]">{product.leadTime}</div>
                    <div className="mt-1 text-sm font-medium text-gray-500">Production Lead Time</div>
                  </div>
                </dl>
                <div className="mt-6 rounded-lg bg-gray-50 p-4">
                  <h3 className="text-sm font-semibold text-[#1B2A4A]">Ordering Process</h3>
                  <ol className="mt-2 space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#08CCD4] text-xs font-bold text-white">1</span>
                      Submit your design specifications and tech pack
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#08CCD4] text-xs font-bold text-white">2</span>
                      Pre-production sample in 5–7 days for approval
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#08CCD4] text-xs font-bold text-white">3</span>
                      Bulk production with AQL 2.5 quality inspection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#08CCD4] text-xs font-bold text-white">4</span>
                      Export to 30+ countries with full documentation
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            {/* Quality & Compliance */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                Quality & Compliance
              </h2>
              <div className="mt-4 text-lg leading-relaxed text-gray-600">
                <p>
                  Every {product.name.toLowerCase()} order goes through our rigorous quality control process.
                  Our factories hold the following certifications, ensuring ethical production, safe working
                  conditions, and environmentally responsible manufacturing:
                </p>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {(product.certifications || ['BSCI', 'OEKO-TEX Standard 100', 'SEDEX', 'WRAP']).map((cert) => (
                  <div key={cert} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#08CCD4]/10">
                      <svg className="h-5 w-5 text-[#08CCD4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#1B2A4A]">{cert}</div>
                      <div className="text-xs text-gray-500">Certified factory partner</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
                <strong>QC Process:</strong> In-line inspection during production + final AQL 2.5 randomized
                inspection before shipment. Documented reports shared with every order.
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-[#1B2A4A] sm:text-3xl">
                Manufacturing Capabilities
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <Card key={feature.text} hover>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#08CCD4]" />
                      <p className="text-sm font-medium text-[#1B2A4A]">{feature.text}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>

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

            {/* FAQ */}
            <FAQ
              headline={`${product.shortName} — Frequently Asked Questions`}
              items={productFaqs}
              className=""
            />

            {/* Trust Line */}
            <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-sm text-gray-500">
                Written and reviewed by <strong className="text-[#1B2A4A]">TexVenture&apos;s sourcing team</strong> —
                with 10+ years of combined experience in Bangladesh&apos;s garment manufacturing industry.
                All specifications and processes described reflect our actual production capabilities.
              </p>
            </section>
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
                  <dt className="text-gray-500">Sampling</dt>
                  <dd className="font-medium text-[#1B2A4A]">5–7 days</dd>
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
            <Card className="!bg-[#08CCD4]">
              <h3 className="text-lg font-bold text-white">Need Help?</h3>
              <p className="mt-2 text-sm text-white/90">
                Talk to our sourcing experts about your {product.shortName.toLowerCase()} requirements.
              </p>
              <div className="mt-4 space-y-2 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{contact.email}</span>
                </div>
              </div>
              <Link
                href="https://wa.me/8801354316246"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-[#25D366] bg-white px-6 py-3 text-sm font-semibold text-[#25D366] transition hover:bg-[#25D366]/10"
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
