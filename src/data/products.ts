// =============================================================================
// TexVenture Product Categories
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
}

// ---------------------------------------------------------------------------
// Exported Data
// ---------------------------------------------------------------------------

export const products: ProductCategory[] = [
  {
    slug: "knit-wear",
    name: "Knit Wear",
    shortName: "Knitwear",
    description:
      "High-quality jersey, interlock, and piqué knit garments for t-shirts, polo shirts, hoodies, and joggers.",
    longDescription:
      "Our knit wear category covers the full spectrum of circular-knit jersey products. From lightweight single-jersey tees to heavyweight fleece hoodies, we source from factories equipped with modern knitting, dyeing, and finishing lines. Ideal for basics, streetwear, and athleisure brands.",
    features: [
      { icon: "🧶", text: "Jersey, interlock, piqué, and fleece fabrics" },
      { icon: "🎨", text: "Pantone-matched dyeing and custom washes" },
      { icon: "🏷️", text: "Woven labels, screen print, embroidery, DTG" },
      { icon: "📦", text: "Retail-ready packaging and poly-bagging" },
    ],
    image: "/images/products/knit-wear.jpg",
    imageAlt: "Folded knit t-shirts and hoodies in multiple colors",
    popularItems: ["T-Shirts", "Polo Shirts", "Hoodies", "Sweatshirts", "Joggers"],
    leadTime: "45–60 days",
    moq: "100 pcs / style",
  },
  {
    slug: "wovens",
    name: "Wovens",
    shortName: "Wovens",
    description:
      "Button-down shirts, blouses, dresses, and structured garments made from woven fabrics.",
    longDescription:
      "Woven garments demand precision in cutting, stitching, and finishing. We partner with factories that specialise in poplin, twill, chambray, and linen-blend fabrics to deliver crisp, well-constructed shirts, dresses, and outerwear for casual and formal markets.",
    features: [
      { icon: "👔", text: "Poplin, twill, chambray, linen and cotton blends" },
      { icon: "✂️", text: "Precision cutting and pattern grading" },
      { icon: "🧵", text: "French seams, flat-felled, and overlocked finishes" },
      { icon: "📦", text: "Hang-tagging and custom packaging" },
    ],
    image: "/images/products/wovens.jpg",
    imageAlt: "Assortment of woven shirts and blouses on hangers",
    popularItems: ["Button-Down Shirts", "Blouses", "Shirt Dresses", "Trousers"],
    leadTime: "50–70 days",
    moq: "150 pcs / style",
  },
  {
    slug: "circular-knit",
    name: "Circular Knit",
    shortName: "Circular Knit",
    description:
      "Seamless and tubular knit products including underwear, basics, and performance innerwear.",
    longDescription:
      "Circular-knit garments are produced on seamless knitting machines, eliminating side seams for superior comfort. Perfect for underwear, leggings, base layers, and performance sportswear where stretch, fit, and breathability matter most.",
    features: [
      { icon: "🔄", text: "Seamless and tubular construction" },
      { icon: "💨", text: "Moisture-wicking and 4-way stretch" },
      { icon: "🩱", text: "Ideal for underwear, leggings and base layers" },
      { icon: "🌿", text: "Organic and recycled yarn options" },
    ],
    image: "/images/products/circular-knit.jpg",
    imageAlt: "Seamless leggings and underwear in various colors",
    popularItems: ["Seamless Leggings", "Underwear", "Sports Bras", "Base Layers"],
    leadTime: "40–55 days",
    moq: "100 pcs / style",
  },
  {
    slug: "denim",
    name: "Denim",
    shortName: "Denim",
    description:
      "Raw, washed, and distressed denim jeans, jackets, and shorts manufactured to your spec.",
    longDescription:
      "Bangladesh is one of the world's largest denim producers. We connect you with mills and garment units that handle everything from raw selvedge to enzyme washes, sandblasting, and laser finishing — delivering on-trend denim at competitive prices.",
    features: [
      { icon: "👖", text: "Raw, stone-washed, acid-washed and distressed" },
      { icon: "🔬", text: "Laser finishing and sustainable wash techniques" },
      { icon: "📐", text: "Custom fits: slim, straight, relaxed, tapered" },
      { icon: "♻️", text: "Water-saving laundry and eco-dyeing" },
    ],
    image: "/images/products/denim.jpg",
    imageAlt: "Stack of denim jeans in various washes",
    popularItems: ["Slim Jeans", "Straight-Leg Jeans", "Denim Jackets", "Denim Shorts"],
    leadTime: "55–75 days",
    moq: "200 pcs / style",
  },
  {
    slug: "sweaters",
    name: "Sweaters",
    shortName: "Sweaters",
    description:
      "Full-fashion knit sweaters, cardigans, and knitwear in wool, cotton, and acrylic yarns.",
    longDescription:
      "Our sweater partners use V-bed flat-knit machines and whole-garment technology to produce fully fashioned knitwear. From chunky cable-knit sweaters to fine-gauge merino cardigans, we handle yarn sourcing, knitting, linking, and finishing.",
    features: [
      { icon: "🧣", text: "Full-fashion and whole-garment knitting" },
      { icon: "🐑", text: "Wool, cotton, acrylic and blended yarns" },
      { icon: "🎨", text: "Jacquard, intarsia and cable patterns" },
      { icon: "📦", text: "Neat folding and gift-ready packaging" },
    ],
    image: "/images/products/sweaters.jpg",
    imageAlt: "Assortment of knit sweaters on wooden hangers",
    popularItems: ["Crew Neck Sweaters", "Cardigans", "V-Neck Pullovers", "Knit Vests"],
    leadTime: "50–70 days",
    moq: "150 pcs / style",
  },
  {
    slug: "work-wear",
    name: "Work Wear",
    shortName: "Work Wear",
    description:
      "Durable uniforms, safety vests, cargo pants, and industrial garments built to last.",
    longDescription:
      "Work wear demands durability, functionality, and compliance with safety standards. We source heavy-duty twill, ripstop, and canvas garments for construction, logistics, hospitality, and healthcare sectors — with custom branding and reflective trims.",
    features: [
      { icon: "🦺", text: "High-visibility and reflective options" },
      { icon: "🧵", text: "Ripstop, canvas and heavy-duty twill" },
      { icon: "🦓", text: "Custom embroidery and heat-transfer logos" },
      { icon: "✅", text: "ISO / EN compliance available" },
    ],
    image: "/images/products/work-wear.jpg",
    imageAlt: "Work wear uniforms including jackets and cargo pants",
    popularItems: ["Cargo Pants", "Hi-Vis Vests", "Uniform Shirts", "Coveralls"],
    leadTime: "40–60 days",
    moq: "200 pcs / style",
  },
  {
    slug: "active-wear",
    name: "Active Wear",
    shortName: "Activewear",
    description:
      "Performance sportswear, gym clothes, yoga sets, and moisture-wicking athletic garments.",
    longDescription:
      "Activewear requires technical fabrics with stretch, compression, and moisture management. We work with factories that specialise in sublimation printing, heat-sealed seams, and performance trims — delivering gym-ready, yoga-ready, and run-ready apparel.",
    features: [
      { icon: "🏋️", text: "Compression, stretch and moisture-wicking" },
      { icon: "🎨", text: "Sublimation printing and all-over prints" },
      { icon: "🪡", text: "Flatlock seams and bonded hems" },
      { icon: "♻️", text: "Recycled polyester and sustainable options" },
    ],
    image: "/images/products/active-wear.jpg",
    imageAlt: "Activewear set including sports bra and leggings",
    popularItems: ["Leggings", "Sports Bras", "Tank Tops", "Shorts", "Zip Hoodies"],
    leadTime: "40–55 days",
    moq: "100 pcs / style",
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
