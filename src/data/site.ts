// =============================================================================
// TexVenture Site-wide Data
// =============================================================================

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  logoUrl: string;
  foundedYear: number;
  industry: string;
  headquarters: string;
}

export interface ContactDetails {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  };
  businessHours: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Certification {
  name: string;
  description: string;
  icon?: string;
}

export interface SiteStat {
  value: string;
  label: string;
}

export interface SiteData {
  company: CompanyInfo;
  contact: ContactDetails;
  social: SocialLink[];
  navigation: NavItem[];
  certifications: Certification[];
  stats: SiteStat[];
  legal: {
    privacyPolicyUrl: string;
    termsUrl: string;
    cookiePolicyUrl: string;
  };
}

// ---------------------------------------------------------------------------
// Exported Data
// ---------------------------------------------------------------------------

export const company: CompanyInfo = {
  name: "TexVenture",
  tagline: "Your Gateway to Bangladesh Apparel Manufacturing",
  description:
    "TexVenture is a trusted apparel sourcing and buying house based in Dhaka, Bangladesh. We connect growing brands worldwide with vetted factories for knitwear, wovens, denim, sweaters, and activewear — starting from just 100 pieces per style.",
  logoUrl:
    "https://texventure.com/wp-content/uploads/2024/06/46f49d3a6517646824216463e65518bca411f2ea.png",
  foundedYear: 2024,
  industry: "Apparel Sourcing and Manufacturing",
  headquarters: "Dhaka, Bangladesh",
};

export const contact: ContactDetails = {
  phone: "+8801805121295",
  email: "info@texventure.com",
  address: {
    street: "35 Gareeb-E-Newaz Avenue, Sector 13",
    city: "Uttara, Dhaka 1230",
    country: "Bangladesh",
    postalCode: "1230",
  },
  businessHours: "Sun – Thu, 9:00 AM – 6:00 PM (BST)",
};

export const social: SocialLink[] = [
  { platform: "Facebook", url: "https://www.facebook.com/texventure", label: "Facebook" },
  { platform: "Instagram", url: "https://www.instagram.com/texventure", label: "Instagram" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/company/texventure", label: "LinkedIn" },
  { platform: "WhatsApp", url: "https://wa.me/8801805121295", label: "WhatsApp" },
];

export const navigation: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Knit Wear", href: "/products/knit-wear" },
      { label: "Wovens", href: "/products/wovens" },
      { label: "Circular Knit", href: "/products/circular-knit" },
      { label: "Denim", href: "/products/denim" },
      { label: "Sweaters", href: "/products/sweaters" },
      { label: "Work Wear", href: "/products/work-wear" },
      { label: "Active Wear", href: "/products/active-wear" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Custom Manufacturing", href: "/custom-clothing-manufacturer-bangladesh" },
      { label: "Low MOQ", href: "/low-moq-clothing-manufacturer-bangladesh" },
      { label: "Private Label", href: "/private-label-clothing-manufacturer-bangladesh" },
      { label: "Streetwear", href: "/streetwear-manufacturer-bangladesh" },
    ],
  },
  { label: "Instant Quote", href: "/instant-quote" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const certifications: Certification[] = [
  {
    name: "BSCI",
    description: "Business Social Compliance Initiative — ensuring fair working conditions across the supply chain.",
  },
  {
    name: "OEKO-TEX® Standard 100",
    description: "Product safety certification testing for harmful substances in textiles.",
  },
  {
    name: "SEDEX / SMETA",
    description: "Ethical trade audit covering labour standards, health and safety, environment, and business ethics.",
  },
  {
    name: "WRAP",
    description: "Worldwide Responsible Accredited Production — compliance with international labour standards.",
  },
  {
    name: "GOTS",
    description: "Global Organic Textile Standard — certification for organic fibers and sustainable manufacturing.",
  },
];

export const stats: SiteStat[] = [
  { value: "100+", label: "MOQ (pieces per style)" },
  { value: "7", label: "Product categories" },
  { value: "50+", label: "Vetted factory partners" },
  { value: "24/7", label: "Support via WhatsApp" },
];

export const legal = {
  privacyPolicyUrl: "/privacy-policy",
  termsUrl: "/terms-of-service",
  cookiePolicyUrl: "/privacy-policy",
};

// ---------------------------------------------------------------------------
// Default combined export
// ---------------------------------------------------------------------------

export const siteData: SiteData = {
  company,
  contact,
  social,
  navigation,
  certifications,
  stats,
  legal,
};
