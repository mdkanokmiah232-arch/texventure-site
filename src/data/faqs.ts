// =============================================================================
// TexVenture FAQ Data
// =============================================================================

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQGroup {
  pageType: "general" | "product" | "service" | "pricing";
  title: string;
  description?: string;
  items: FAQItem[];
}

// ---------------------------------------------------------------------------
// Exported Data
// ---------------------------------------------------------------------------

export const faqs: FAQGroup[] = [
  {
    pageType: "general",
    title: "General Questions",
    description: "Everything you need to know about working with TexVenture.",
    items: [
      {
        question: "What is TexVenture?",
        answer:
          "TexVenture is a Bangladesh-based apparel sourcing and buying house. We connect international brands — especially small and growing ones — with vetted garment factories in Bangladesh. We handle sourcing, sampling, production, quality control, and shipping.",
      },
      {
        question: "Why source from Bangladesh?",
        answer:
          "Bangladesh is the world's second-largest garment exporter after China. It offers highly competitive pricing, skilled labour, large-scale production capacity, and increasingly modern infrastructure. The country has deep expertise in knitwear, denim, and woven garments.",
      },
      {
        question: "What is the minimum order quantity (MOQ)?",
        answer:
          "Our standard MOQ starts from just 100 pieces per style. This makes us ideal for startups, small brands, and capsule collections that don't need thousands of units to get started.",
      },
      {
        question: "How do I get started?",
        answer:
          "Simply fill out our instant quote form or send us a message on WhatsApp. We'll discuss your requirements, recommend factories, and begin the sampling process. There are no upfront fees to get a quote.",
      },
      {
        question: "Do I need to visit Bangladesh?",
        answer:
          "No. We act as your on-the-ground representative. We handle factory visits, inspections, and logistics on your behalf. However, you're always welcome to visit — and we'll arrange factory tours if you do.",
      },
      {
        question: "What payment terms do you offer?",
        answer:
          "We typically work with a 30% deposit upon order confirmation and 70% balance before shipping. For returning clients, we can discuss more flexible terms. All payments are documented with invoices and receipts.",
      },
      {
        question: "How long does production take?",
        answer:
          "Lead times vary by product type but typically range from 40 to 75 days after sample approval. This includes fabric procurement, cutting, sewing, finishing, and quality inspection.",
      },
      {
        question: "Can you help with product design?",
        answer:
          "Yes. While we're primarily a sourcing and manufacturing partner, our team can help with tech pack creation, fabric recommendations, and design consultation to bring your vision to life.",
      },
    ],
  },
  {
    pageType: "product",
    title: "Product Questions",
    description: "Learn more about our product categories and manufacturing capabilities.",
    items: [
      {
        question: "What product categories do you offer?",
        answer:
          "We cover 7 main categories: Knit Wear (t-shirts, hoodies, joggers), Wovens (shirts, blouses, dresses), Circular Knit (seamless, underwear, base layers), Denim (jeans, jackets, shorts), Sweaters (pullovers, cardigans), Work Wear (uniforms, hi-vis), and Activewear (leggings, sports bras, gym wear).",
      },
      {
        question: "Can I order samples before committing?",
        answer:
          "Absolutely. We produce pre-production samples (prototypes) so you can evaluate fit, fabric, and quality before approving mass production. Typically 1–2 rounds of sampling are included.",
      },
      {
        question: "What fabrics do you work with?",
        answer:
          "We source a wide range of fabrics including cotton jersey, French terry, fleece, poplin, twill, denim, linen, organic cotton, recycled polyester, and performance synthetics. We can match specific fabric weights and compositions.",
      },
      {
        question: "Can you do custom prints and embroidery?",
        answer:
          "Yes. We offer screen printing, puff print, discharge print, DTG (direct-to-garment), sublimation, heat transfer, woven labels, woven patches, and embroidery — all customised to your brand.",
      },
      {
        question: "Do you offer sustainable or organic options?",
        answer:
          "Yes. Many of our factory partners are GOTS-certified for organic cotton and offer recycled polyester, organic dyes, and water-saving wash techniques. We can match your sustainability requirements.",
      },
      {
        question: "What sizes can you produce?",
        answer:
          "We can produce in any size range — from XS to 5XL and beyond. We work with your size spec or help develop one. Custom grading is available for all categories.",
      },
    ],
  },
  {
    pageType: "service",
    title: "Service Questions",
    description: "Understand how our manufacturing services work end-to-end.",
    items: [
      {
        question: "What does 'custom manufacturing' mean?",
        answer:
          "Custom manufacturing means we produce garments exactly to your specifications — your tech pack, your fabric choices, your branding. You own the designs and we bring them to life in Bangladesh factories.",
      },
      {
        question: "What is private label manufacturing?",
        answer:
          "Private label means we produce garments under your brand name and labels. We can either work from your designs or offer proven blank styles that you customise with your branding, labels, and packaging.",
      },
      {
        question: "How does the low MOQ service work?",
        answer:
          "We partner with factories that specialise in small-batch production. Our standard MOQ starts from 100 pieces per style, with the ability to mix colours and sizes. This is ideal for startups testing new designs.",
      },
      {
        question: "What is streetwear manufacturing?",
        answer:
          "Streetwear manufacturing focuses on premium fabrics (heavyweight fleece, oversized fits), bold graphics (puff print, screen print), and drop-ready production schedules. We specialise in hoodies, oversized tees, and cargo pants for streetwear brands.",
      },
      {
        question: "Do you handle quality control?",
        answer:
          "Yes. Quality control is included in every order. We conduct in-line inspections during production, end-line checks, and a final AQL 2.5 inspection before shipping. We share photos and videos throughout.",
      },
      {
        question: "Can you handle international shipping?",
        answer:
          "Yes. We manage export documentation, customs clearance, and freight forwarding. We offer FOB, CIF, and DDP shipping terms with options for sea freight, air freight, and express courier.",
      },
    ],
  },
  {
    pageType: "pricing",
    title: "Pricing and Quote Questions",
    description: "Questions about pricing, quotes, and payment.",
    items: [
      {
        question: "How do I get a price quote?",
        answer:
          "Use our instant quote calculator for a quick estimate, or send us your tech pack via WhatsApp or email for a detailed breakdown. Quotes are free and come with no obligation.",
      },
      {
        question: "What affects the price per piece?",
        answer:
          "Price depends on fabric type, garment complexity, order quantity, print/embroidery techniques, and packaging requirements. Higher quantities typically bring the per-unit cost down.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No. Our quotes include manufacturing, quality control, and export documentation. Shipping costs are quoted separately based on your preferred method (sea, air, or express).",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers (wire), PayPal, and Western Union. For orders above $5,000, we offer letter of credit (LC) options. All payments come with proper invoicing.",
      },
      {
        question: "Can I get a sample before paying the full order?",
        answer:
          "Yes. Sample costs are quoted separately and must be paid before sampling begins. Sample fees are often credited toward your first bulk order.",
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getFAQsByPageType(pageType: FAQGroup["pageType"]): FAQGroup | undefined {
  return faqs.find((f) => f.pageType === pageType);
}
