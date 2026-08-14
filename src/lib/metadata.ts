import type { Metadata } from "next";

const SITE_URL = "https://texventure.com";
const SITE_NAME = "TexVenture";
const SITE_DESCRIPTION =
  "TexVenture — Bangladesh apparel sourcing, buying house & garment manufacturing partner. Quality knitwear, wovens, denim, sweaters, active wear & work wear with MOQ from 100 pcs/style.";

/* ─── Default Metadata Fields ─── */
const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Apparel Sourcing & Buying House in Bangladesh`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "apparel sourcing",
    "garment manufacturing",
    "buying house Bangladesh",
    "knitwear",
    "wovens",
    "denim",
    "sweaters",
    "active wear",
    "work wear",
    "circular knit",
    "MOQ 100 pcs",
    "Bangladesh garment exporter",
    "private label apparel",
    "apparel sourcing agent",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Apparel Sourcing & Buying House in Bangladesh`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-default.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Apparel Sourcing & Buying House`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Apparel Sourcing & Buying House in Bangladesh`,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}/og-default.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

/* ─── Helper: Generate page-level metadata ─── */
interface PageMetaOptions {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article" | "product";
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Generates a `Metadata` object for a specific page,
 * merging with site-wide defaults.
 *
 * @example
 * export const metadata = generatePageMeta({
 *   title: "Knit Wear",
 *   description: "Premium knitwear sourced from Bangladesh",
 *   path: "/products/knit-wear",
 * });
 */
export function generatePageMeta(options: PageMetaOptions = {}): Metadata {
  const {
    title,
    description = SITE_DESCRIPTION,
    path = "",
    image,
    noIndex = false,
    type = "website",
    publishedTime,
    modifiedTime,
  } = options;

  const url = `${SITE_URL}${path}`;
  const fullTitle = title
    ? { default: title, template: `%s | ${SITE_NAME}` }
    : defaultMetadata.title;

  const ogImage = image || `${SITE_URL}/og-default.png`;

  const ogType = type === "product" ? "website" : type;

  const meta: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: ogType as "website" | "article",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: title || SITE_NAME,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || SITE_NAME,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: title || SITE_NAME,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };

  return meta;
}

/* ─── Helper: generateMetadata async wrapper ─── */
interface GenerateMetadataProps {
  params?: Promise<Record<string, string>>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

/**
 * Async metadata generator for dynamic pages.
 * Use this in `generateMetadata()` exports for dynamic routes.
 *
 * @example
 * export async function generateMetadata({ params }: Props) {
 *   const { slug } = await params;
 *   return generateMetadataFromProps({ title: `Product ${slug}`, path: `/products/${slug}` });
 * }
 */
export async function generateMetadataFromProps(
  props: GenerateMetadataProps & PageMetaOptions,
): Promise<Metadata> {
  return generatePageMeta({
    title: props.title,
    description: props.description,
    path: props.path,
    image: props.image,
    noIndex: props.noIndex,
    type: props.type,
    publishedTime: props.publishedTime,
    modifiedTime: props.modifiedTime,
  });
}

export { SITE_URL, SITE_NAME, SITE_DESCRIPTION };
