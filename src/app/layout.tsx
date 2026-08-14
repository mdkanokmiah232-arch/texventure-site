import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { OrganizationSchema } from "@/lib/schema";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

/* ─── Fonts ─── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

/* ─── Site Metadata ─── */
const SITE_URL = "https://texventure.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TexVenture — Apparel Sourcing & Buying House in Bangladesh",
    template: "%s | TexVenture",
  },
  description:
    "TexVenture — Premium apparel sourcing & buying house in Bangladesh. Knitwear, wovens, denim, sweaters, active wear & work wear with MOQ from 100 pcs/style.",
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
  ],
  authors: [{ name: "TexVenture", url: SITE_URL }],
  creator: "TexVenture",
  publisher: "TexVenture",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "TexVenture",
    title: "TexVenture — Apparel Sourcing & Buying House in Bangladesh",
    description:
      "Premium apparel sourcing & buying house in Bangladesh. Knitwear, wovens, denim, sweaters, active wear & work wear.",
    images: [
      {
        url: `${SITE_URL}/og-default.png`,
        width: 1200,
        height: 630,
        alt: "TexVenture — Apparel Sourcing & Buying House",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TexVenture — Apparel Sourcing & Buying House in Bangladesh",
    description:
      "Premium apparel sourcing & buying house in Bangladesh.",
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

/* ─── Root Layout ─── */
export default function RootLayout({ children }: LayoutProps<"/">) {
  const organizationSchema = OrganizationSchema();

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
