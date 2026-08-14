// =============================================================================
// TexVenture Services Data
// =============================================================================

export interface ServiceDetail {
  title: string;
  description: string;
  highlights: string[];
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
  details: ServiceDetail[];
  cta: {
    text: string;
    href: string;
  };
}

// ---------------------------------------------------------------------------
// Exported Data
// ---------------------------------------------------------------------------

export const services: Service[] = [
  {
    slug: "custom-manufacturing",
    name: "Custom Clothing Manufacturing",
    tagline: "Custom apparel from concept to delivery, built to your brand specs",
    description:
      "From tech pack to finished garment — we manage the entire production cycle. Share your specs, we source the factory, handle sampling, and deliver retail-ready products straight to your door.",
    icon: "🏭",
    image: "/images/services/custom-manufacturing.jpg",
    imageAlt: "Factory production line sewing garments",
    details: [
      {
        title: "Tech Pack & Sampling",
        description:
          "Submit your tech pack or let our design team help build one. We produce a pre-production sample for your approval before mass production begins.",
        highlights: [
          "Tech pack review & cost analysis",
          "1–2 rounds of sampling",
          "Photo & video approval process",
        ],
      },
      {
        title: "Fabric & Trim Sourcing",
        description:
          "We source the right fabric, buttons, zippers, labels, and trims from our vetted supplier network — ensuring quality and cost-effectiveness.",
        highlights: [
          "Fabric lab-dip & strike-off approval",
          "Trim & accessory matching",
          "Sustainable fabric options",
        ],
      },
      {
        title: "Production & QC",
        description:
          "Factory production is monitored with in-line and end-line quality checks. We conduct final inspections before shipping.",
        highlights: [
          "In-line & end-line QC",
          "AQL 2.5 inspection standard",
          "Photo & video progress updates",
        ],
      },
      {
        title: "Logistics & Shipping",
        description:
          "We handle export documentation, freight forwarding, and door-to-door delivery to your warehouse or fulfillment center.",
        highlights: [
          "FOB, CIF & DDP terms available",
          "Air, sea & express freight options",
          "Customs & export paperwork managed",
        ],
      },
    ],
    cta: {
      text: "Start Your Custom Order",
      href: "/quote",
    },
  },
  {
    slug: "low-moq",
    name: "Low MOQ Manufacturing",
    tagline: "Start at 100 pieces, test designs, and scale when ready to grow",
    description:
      "No factory wants 5,000 pieces on day one. We specialise in connecting brands with factories that accept orders as low as 100 pieces per style — perfect for startups, capsule collections, and limited drops.",
    icon: "📉",
    image: "/images/services/low-moq.jpg",
    imageAlt: "Small batch of garments being inspected",
    details: [
      {
        title: "100 Pieces Per Style",
        description:
          "Our factory partners accept minimum orders from just 100 pieces per style, making it affordable to test new designs and collections.",
        highlights: [
          "From 100 pcs per style",
          "Mix colours & sizes in one order",
          "No excessive fabric minimums",
        ],
      },
      {
        title: "Startup-Friendly Process",
        description:
          "We guide first-time brands through every step — from tech pack creation to final delivery — so you can focus on building your brand.",
        highlights: [
          "Step-by-step guidance for new brands",
          "Flexible payment terms",
          "Small-batch sampling available",
        ],
      },
      {
        title: "Quality at Every Scale",
        description:
          "Low MOQ doesn't mean low quality. Every order goes through the same rigorous QC process regardless of size.",
        highlights: [
          "Same QC standards as large orders",
          "AQL inspection on every batch",
          "Photo/video approval before shipping",
        ],
      },
      {
        title: "Scale When Ready",
        description:
          "Start with 100 pieces and scale to thousands as demand grows — we'll match you with the right factory at each stage.",
        highlights: [
          "Seamless transition to larger factories",
          "Volume pricing as you grow",
          "Long-term partnership approach",
        ],
      },
    ],
    cta: {
      text: "Get a Low MOQ Quote",
      href: "/quote",
    },
  },
  {
    slug: "private-label",
    name: "Private Label Manufacturing",
    tagline: "Launch your clothing brand with custom labels, tags, and packaging",
    description:
      "Launch or expand your own label with our end-to-end private label service. We handle everything from label design and hang-tags to custom packaging — so every piece hits the market as your brand.",
    icon: "🏷️",
    image: "/images/services/private-label.jpg",
    imageAlt: "Branded garment labels and hang-tags",
    details: [
      {
        title: "Label & Branding Design",
        description:
          "We help you create woven labels, printed labels, hang-tags, and packaging that match your brand identity.",
        highlights: [
          "Custom woven & printed labels",
          "Hang-tags & stickers",
          "Poly-bags, boxes & tissue paper",
        ],
      },
      {
        title: "White-Label & OEM Production",
        description:
          "Choose from our curated selection of proven blanks or bring your own designs — we'll manufacture with your branding throughout.",
        highlights: [
          "Proven blank styles available",
          "Full OEM production from your specs",
          "Mix-and-match label options",
        ],
      },
      {
        title: "Packaging & Presentation",
        description:
          "From retail-ready hang to e-commerce-ready poly-bags, we ensure your product looks professional the moment it arrives.",
        highlights: [
          "Custom tissue paper & stickers",
          "Branded mailer bags",
          "Gift-ready packaging options",
        ],
      },
      {
        title: "Brand Consultation",
        description:
          "Not sure where to start? Our team provides guidance on fabric choices, trims, and packaging to build a cohesive brand experience.",
        highlights: [
          "Fabric & colour recommendations",
          "Trim & packaging consultation",
          "Trend & market insights",
        ],
      },
    ],
    cta: {
      text: "Start Private Labeling",
      href: "/quote",
    },
  },
  {
    slug: "streetwear",
    name: "Streetwear Manufacturing",
    tagline: "Premium heavyweight fabrics, bold graphics, and drop-ready production",
    description:
      "Streetwear demands premium fabrics, bold graphics, and quality construction. We work with factories that specialise in hoodies, oversized tees, cargo pants, and statement pieces that move fast in the market.",
    icon: "🔥",
    image: "/images/services/streetwear.jpg",
    imageAlt: "Streetwear hoodies and graphic tees on display",
    details: [
      {
        title: "Premium Fabrics & Construction",
        description:
          "Heavyweight 400gsm French terry, 240gsm heavyweight cotton, fleece-lined hoodies — we source the premium fabrics streetwear demands.",
        highlights: [
          "400gsm+ heavyweight fleece & terry",
          "Oversized & boxy fits",
          "Reinforced seams & premium trims",
        ],
      },
      {
        title: "Graphics & Print Techniques",
        description:
          "From puff print and discharge to screen print and DTG, we offer every print technique to bring your designs to life.",
        highlights: [
          "Screen print & puff print",
          "DTG & sublimation",
          "Heat transfer & embroidery",
        ],
      },
      {
        title: "Drop-Ready Production",
        description:
          "Streetwear moves fast. We schedule production around your drop dates to ensure inventory arrives when you need it.",
        highlights: [
          "Flexible production scheduling",
          "Rush options available",
          "Quality-assured before every drop",
        ],
      },
      {
        title: "Full Collection Support",
        description:
          "From hoodies and tees to cargo pants and accessories, we help you build complete collections — not just single pieces.",
        highlights: [
          "Hoodies, tees, cargos & accessories",
          "Coordinated colourways",
          "Collection-wide quality consistency",
        ],
      },
    ],
    cta: {
      text: "Manufacture Streetwear",
      href: "/quote",
    },
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
