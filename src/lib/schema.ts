/**
 * JSON-LD structured data helpers for TexVenture.
 * Each function returns a plain object to embed in <script type="application/ld+json">.
 */

/* ─── Organization ─── */
interface OrganizationOptions {
  name?: string;
  url?: string;
  logo?: string;
  email?: string;
  telephone?: string;
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    addressRegion?: string;
    postalCode?: string;
    addressCountry?: string;
  };
  sameAs?: string[];
  description?: string;
}

const SITE_URL = "https://texventure.com";

/**
 * Default Organization schema for TexVenture.
 */
export function OrganizationSchema(
  overrides: OrganizationOptions = {},
): Record<string, unknown> {
  const defaults: OrganizationOptions = {
    name: "TexVenture",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    email: "info@texventure.com",
    telephone: "+8801805121295",
    address: {
      streetAddress: "35 Gareeb-E-Newaz Avenue, Sector 13",
      addressLocality: "Uttara, Dhaka",
      addressRegion: "Dhaka",
      postalCode: "1230",
      addressCountry: "BD",
    },
    sameAs: [
      "https://www.facebook.com/texventure",
      "https://www.linkedin.com/company/texventure",
    ],
    description:
      "TexVenture — Bangladesh-based apparel sourcing, buying house and garment manufacturing partner serving global brands since inception.",
  };

  const config = { ...defaults, ...overrides };

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: config.name,
    url: config.url,
    logo: config.logo,
    email: config.email,
    telephone: config.telephone,
    address: config.address,
    sameAs: config.sameAs,
    description: config.description,
  };
}

/* ─── FAQPage ─── */
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQPageOptions {
  mainEntity: FAQItem[];
  pageUrl?: string;
}

/**
 * FAQPage schema — use on FAQ or knowledge-base pages.
 */
export function FAQPageSchema(options: FAQPageOptions): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: options.mainEntity.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    ...(options.pageUrl && { url: options.pageUrl }),
  };
}

/* ─── Product ─── */
interface ProductSchemaOptions {
  name: string;
  description: string;
  image?: string;
  url?: string;
  brand?: string;
  category?: string;
  offers?: {
    price?: string;
    priceCurrency?: string;
    availability?: string;
    url?: string;
  };
}

/**
 * Product schema — use on product/service detail pages.
 */
export function ProductSchema(options: ProductSchemaOptions): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: options.name,
    description: options.description,
    ...(options.image && { image: options.image }),
    ...(options.url && { url: options.url }),
    brand: {
      "@type": "Brand",
      name: options.brand || "TexVenture",
    },
    ...(options.category && { category: options.category }),
    ...(options.offers && {
      offers: {
        "@type": "Offer",
        ...(options.offers.price && { price: options.offers.price }),
        ...(options.offers.priceCurrency && { priceCurrency: options.offers.priceCurrency }),
        ...(options.offers.availability && { availability: options.offers.availability }),
        ...(options.offers.url && { url: options.offers.url }),
        seller: {
          "@type": "Organization",
          name: "TexVenture",
        },
      },
    }),
  };
}

/* ─── Service ─── */
interface ServiceSchemaOptions {
  name: string;
  description: string;
  url?: string;
  image?: string;
  areaServed?: string | string[];
  serviceType?: string;
}

/**
 * Service schema — use on service/manufacturing capability pages.
 */
export function ServiceSchema(options: ServiceSchemaOptions): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    ...(options.image && { image: options.image }),
    ...(options.url && { url: options.url }),
    serviceType: options.serviceType || options.name,
    provider: {
      "@type": "Organization",
      name: "TexVenture",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
    },
    areaServed: options.areaServed || "Worldwide",
  };
}

/* ─── BreadcrumbList ─── */
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaOptions {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbList schema — use on all pages for navigation breadcrumbs.
 */
export function BreadcrumbListSchema(
  options: BreadcrumbSchemaOptions,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: options.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/* ─── Article ─── */
interface ArticleSchemaOptions {
  headline: string;
  description: string;
  image?: string;
  url?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  publisher?: string;
  publisherLogo?: string;
}

/**
 * Article / BlogPosting schema — use on blog posts and guides.
 */
export function ArticleSchema(options: ArticleSchemaOptions): Record<string, unknown> {
  const baseUrl = SITE_URL;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.headline,
    description: options.description,
    ...(options.image && { image: options.image }),
    ...(options.url && { url: options.url }),
    datePublished: options.datePublished,
    ...(options.dateModified && { dateModified: options.dateModified }),
    author: {
      "@type": "Organization",
      name: options.author || "TexVenture",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: options.publisher || "TexVenture",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: options.publisherLogo || `${baseUrl}/logo.png`,
      },
    },
  };
}
