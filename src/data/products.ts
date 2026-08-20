// =============================================================================
// TexVenture Product Categories — Women's Wear, Men's Wear, Kid's Wear
// =============================================================================

export interface ProductFeature {
  icon?: string;
  text: string;
}

export interface ProductCategory {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  features: ProductFeature[];
  image: string;
  imageAlt: string;
  popularItems: string[];
  leadTime: string;
  moq: string;
  targetAudience?: string;
  fabricOptions?: string[];
  certifications?: string[];
}

// ---------------------------------------------------------------------------
// Exported Data
// ---------------------------------------------------------------------------

export const products: ProductCategory[] = [
  {
    slug: "womens-wear",
    name: "Women's Wear",
    shortName: "Women's Wear",
    description:
      "Custom women's clothing manufacturer in Bangladesh — dresses, blouses, tops, skirts, activewear, and formal wear from 100 pieces MOQ.",
    longDescription:
      "TexVenture is a trusted women's wear clothing manufacturer and supplier in Bangladesh, producing high-quality garments for fashion brands across the USA, UK, Canada, Australia, Germany, France, and Japan. We specialize in manufacturing women's dresses, blouses, tops, skirts, trousers, activewear, and formal wear — all produced in our vetted network of 20+ factories across Dhaka, Chittagong, and Gazipur.\n\nAs a women's clothing sourcing partner with 10+ years of experience in Bangladesh's garment industry, we understand the nuances of women's fashion — from fabric drape and fit precision to seasonal trend responsiveness. Our factories use advanced CAD pattern-making, laser cutting, and multi-needle embroidery to deliver garments that match international quality standards.\n\nWhether you're a startup launching your first collection or an established brand scaling production, our low MOQ of just 100 pieces per style means you can test new designs without heavy inventory risk. Every order goes through our rigorous AQL 2.5 quality inspection before shipment.\n\nWomen's wear is Bangladesh's largest garment export category, and TexVenture sits at the heart of this ecosystem. We source from factories certified with BSCI, OEKO-TEX® Standard 100, SEDEX, WRAP, and GOTS — ensuring ethical production, safe working conditions, and environmentally responsible manufacturing.",
    features: [
      { text: "Dresses, blouses, tops, skirts, and trousers" },
      { text: "CAD pattern-making and precision laser cutting" },
      { text: "Pantone-matched dyeing and custom prints" },
      { text: "Woven labels, screen print, embroidery, DTG, and heat transfer" },
      { text: "Retail-ready packaging with poly-bagging and hang-tags" },
      { text: "AQL 2.5 multi-point quality inspection" },
    ],
    image: "/images/products/womens-wear.jpg",
    imageAlt: "Custom women's clothing manufactured by TexVenture in Bangladesh — dresses, blouses, and activewear",
    popularItems: [
      "Maxi Dresses",
      "A-Line Dresses",
      "Blouses & Peplum Tops",
      "Crop Tops",
      "Midi Skirts",
      "Palazzo Pants",
      "Blazers",
      "Activewear Sets",
    ],
    leadTime: "45–60 days",
    moq: "100 pcs / style",
    targetAudience: "Fashion brands, boutiques, e-commerce retailers, DTC brands",
    fabricOptions: [
      "Cotton",
      "Polyester",
      "Viscose",
      "Rayon",
      "Chiffon",
      "Georgette",
      "Linen",
      "Silk blends",
      "Recycled polyester",
    ],
    certifications: ["BSCI", "OEKO-TEX® Standard 100", "SEDEX", "WRAP", "GOTS"],
  },
  {
    slug: "mens-wear",
    name: "Men's Wear",
    shortName: "Men's Wear",
    description:
      "Custom men's clothing manufacturer in Bangladesh — t-shirts, polos, shirts, jeans, trousers, blazers, and formal wear from 100 pieces MOQ.",
    longDescription:
      "TexVenture is a leading men's wear clothing manufacturer and supplier in Bangladesh, producing premium-quality garments for global brands. We manufacture men's t-shirts, polo shirts, button-down shirts, jeans, chinos, trousers, blazers, jackets, and formal wear — all sourced from our vetted network of 20+ factories across Dhaka, Chittagong, and Gazipur.\n\nWith 10+ years of deep expertise in Bangladesh's garment industry, we understand that men's wear demands durability, consistent fit, and clean finishing. Our factory partners use automatic spreading machines, multi-needle quilting, and industrial pressing to deliver garments that meet the quality expectations of international retail chains and premium brands.\n\nFrom basic crew-neck tees to tailored formal shirts, our production capabilities cover the full spectrum of men's fashion. We work with cotton, polyester blends, denim, twill, flannel, chambray, and technical fabrics — offering Pantone-matched colors, custom washes, and a full range of embellishment options.\n\nBangladesh is the world's second-largest garment exporter, and men's wear constitutes a significant share of our factory output. TexVenture leverages this deep manufacturing ecosystem to offer competitive pricing without compromising on quality, compliance, or delivery timelines.",
    features: [
      { text: "T-shirts, polos, shirts, jeans, trousers, and blazers" },
      { text: "Automatic spreading and precision cutting" },
      { text: "Industrial pressing and clean finishing" },
      { text: "Custom washes, enzyme treatment, and stone wash" },
      { text: "Woven labels, screen print, embroidery, and DTG" },
      { text: "AQL 2.5 multi-point quality inspection" },
    ],
    image: "/images/products/mens-wear.jpg",
    imageAlt: "Custom men's clothing manufactured by TexVenture in Bangladesh — shirts, jeans, and formal wear",
    popularItems: [
      "Crew Neck T-Shirts",
      "Polo Shirts",
      "Oxford Button-Downs",
      "Slim Fit Jeans",
      "Chino Pants",
      "Casual Blazers",
      "Denim Jackets",
      "Formal Trousers",
    ],
    leadTime: "45–65 days",
    moq: "100 pcs / style",
    targetAudience: "Fashion brands, retail chains, corporate uniform buyers, e-commerce brands",
    fabricOptions: [
      "Cotton",
      "Cotton-polyester blends",
      "Denim",
      "Twill",
      "Flannel",
      "Chambray",
      "Linen",
      "Technical fabrics",
    ],
    certifications: ["BSCI", "OEKO-TEX® Standard 100", "SEDEX", "WRAP"],
  },
  {
    slug: "kids-wear",
    name: "Kid's Wear",
    shortName: "Kid's Wear",
    description:
      "Custom children's clothing manufacturer in Bangladesh — baby clothes, kids' t-shirts, dresses, school uniforms, and playwear from 100 pieces MOQ.",
    longDescription:
      "TexVenture is a specialized kid's wear clothing manufacturer and supplier in Bangladesh, producing safe, comfortable, and durable children's clothing for global brands. We manufacture baby clothes, kids' t-shirts, dresses, rompers, shorts, school uniforms, playwear, and sleepwear — all produced in our BSCI and OEKO-TEX® certified factory network across Dhaka, Chittagong, and Gazipur.\n\nChildren's clothing demands the highest safety and quality standards. Every fabric we source is tested for harmful substances per OEKO-TEX® Standard 100, ensuring they're safe for sensitive skin. Our factories follow strict compliance protocols — no harmful dyes, no sharp embellishments, and reinforced stitching for active play.\n\nWith 10+ years of experience serving international kids' wear brands, we understand the unique requirements of children's garment manufacturing: soft hand-feel fabrics, flatlock seams to prevent irritation, adjustable waistbands for growing kids, and snap buttons for easy dressing. Our production covers sizes from newborn to12 years.\n\nTexVenture's low MOQ of just 100 pieces per style makes us ideal for boutique kids' brands, startup labels, and established retailers looking to source high-quality children's wear from Bangladesh at competitive prices.",
    features: [
      { text: "Newborn to12 years — full size range coverage" },
      { text: "OEKO-TEX® certified fabrics — safe for sensitive skin" },
      { text: "Flatlock seams and reinforced stitching for durability" },
      { text: "Fun prints, embroidery, and custom characters" },
      { text: "Individual poly-bagging with retail-ready packaging" },
      { text: "AQL 2.5 quality inspection with safety compliance" },
    ],
    image: "/images/products/kids-wear.jpg",
    imageAlt: "Custom children's clothing manufactured by TexVenture in Bangladesh — baby clothes, kids' t-shirts, and school uniforms",
    popularItems: [
      "Baby Rompers",
      "Kids' T-Shirts",
      "Girls' Dresses",
      "Boys' Shorts",
      "School Uniforms",
      "Playwear Sets",
      "Kids' Hoodies",
      "Sleepwear",
    ],
    leadTime: "40–55 days",
    moq: "100 pcs / style",
    targetAudience: "Kids' fashion brands, school uniform suppliers, baby clothing labels, retail chains",
    fabricOptions: [
      "100% Organic Cotton",
      "Cotton jersey",
      "Fleece",
      "French terry",
      "Poplin",
      "Muslin",
      "Interlock",
      "Recycled polyester",
    ],
    certifications: ["BSCI", "OEKO-TEX® Standard 100", "SEDEX", "WRAP", "GOTS"],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getProductBySlug(slug: string): ProductCategory | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
