// =============================================================================
// TexVenture Product Categories — Manufacturing Categories
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
  specs?: {
    fabricWeight?: string;
    construction?: string;
    sizing?: string;
    finishing?: string[];
  };
  faqs?: { question: string; answer: string }[];
  subCategories?: {
    name: string;
    images: { src: string; alt: string }[];
  }[];
}

// ---------------------------------------------------------------------------
// Exported Data
// ---------------------------------------------------------------------------

export const products: ProductCategory[] = [
  // ---------------------------------------------------------------------------
  // 1. KNIT WEAR
  // ---------------------------------------------------------------------------
  {
    slug: "knit-wear",
    name: "Knit Wear",
    shortName: "Knit Wear",
    description:
      "Custom knit wear manufacturer in Bangladesh — t-shirts, polos, hoodies, joggers, and knit garments from 100 pieces MOQ.",
    longDescription:
      "TexVenture is a trusted knit wear manufacturer and supplier in Bangladesh, producing high-quality knitted garments for fashion brands across the USA, UK, Canada, Australia, Germany, France, and Japan. We specialize in manufacturing t-shirts, polo shirts, hoodies, sweatshirts, joggers, leggings, and knit dresses — all produced in our vetted network of 20+ factories across Dhaka, Chittagong, and Gazipur.\n\nBangladesh is one of the world's largest producers of knitwear, with deep expertise in circular and flat-knit construction. Our factory partners use imported circular knitting machines (Mayer & Cie, Terrot) capable of producing single jersey, interlock, rib, pique, fleece, and French terry fabrics. We source cotton, cotton-polyester blends, organic cotton, and recycled polyester — typically in the 120–280 GSM range depending on the garment type.\n\nOur knit wear production process includes CAD pattern-making, auto-spread cutting, overlock and coverstitch sewing, and industrial finishing. Every garment goes through in-line and final AQL 2.5 quality inspection before export. We offer Pantone-matched dyeing, screen printing, embroidery, DTG printing, heat transfer, and sublimation — giving you full creative control over your collection.\n\nWith a low MOQ of just 100 pieces per style and sampling turnaround of 5–7 days, TexVenture is ideal for startups, DTC brands, and established retailers looking to source quality knit wear from Bangladesh at competitive prices.",
    features: [
      { text: "T-shirts, polos, hoodies, joggers, and knit dresses" },
      { text: "Circular knitting: single jersey, interlock, rib, pique, fleece" },
      { text: "GSM range: 120–280 depending on garment type" },
      { text: "Pantone-matched dyeing and custom prints" },
      { text: "Overlock and coverstitch sewing for clean finishing" },
      { text: "AQL 2.5 multi-point quality inspection" },
    ],
    image: "/images/products/knit-wear.jpg",
    imageAlt: "Custom knit wear manufactured by TexVenture in Bangladesh — t-shirts, polos, and hoodies",
    popularItems: [
      "Crew Neck T-Shirts",
      "V-Neck T-Shirts",
      "Polo Shirts",
      "Hoodies & Sweatshirts",
      "Jogger Pants",
      "Knit Dresses",
      "Leggings",
      "Tank Tops",
    ],
    leadTime: "45–60 days",
    moq: "100 pcs / style",
    targetAudience: "Fashion brands, DTC brands, e-commerce retailers, private label startups",
    fabricOptions: [
      "100% Cotton",
      "Cotton-Polyester Blend",
      "Organic Cotton (GOTS certified)",
      "Recycled Polyester",
      "Bamboo Cotton",
      "Cotton-Spandex",
    ],
    certifications: ["BSCI", "OEKO-TEX® Standard 100", "SEDEX", "WRAP", "GOTS"],
    specs: {
      fabricWeight: "120–280 GSM (typical range — confirm with sourcing team)",
      construction: "Single Jersey, Interlock, Rib, Pique, Fleece, French Terry",
      sizing: "XS–3XL (custom grading available)",
      finishing: [
        "Pantone-matched dyeing",
        "Enzyme wash",
        "Silicone softener",
        "Peach finish",
        "Brushing",
      ],
    },
    faqs: [
      {
        question: "What is the minimum order quantity for knit wear?",
        answer: "Our standard MOQ for knit wear is 100 pieces per style. This applies across t-shirts, polos, hoodies, joggers, and other knitted garments. We cater to both startups and established brands.",
      },
      {
        question: "What fabrics do you use for knit wear production?",
        answer: "We source 100% cotton, cotton-polyester blends, organic cotton (GOTS certified), recycled polyester, and cotton-spandex fabrics. GSM ranges from 120 GSM (lightweight tees) to 280 GSM (fleece hoodies).",
      },
      {
        question: "How long does knit wear sampling and production take?",
        answer: "Sampling takes 5–7 days. Bulk production lead time is 45–60 days after sample approval, including fabric sourcing, cutting, sewing, finishing, AQL 2.5 QC inspection, and export documentation.",
      },
      {
        question: "Can TexVenture handle private label knit wear orders?",
        answer: "Yes. We offer full private label services including custom woven labels, printed labels, hang tags, poly-bagging, and retail-ready packaging. Your branding specifications are applied throughout production.",
      },
      {
        question: "Which certifications apply to knit wear production?",
        answer: "Our factory partners hold BSCI, OEKO-TEX® Standard 100, SEDEX, WRAP, and GOTS certifications. Every knit wear order undergoes in-line and final AQL 2.5 quality inspection.",
      },
      {
        question: "What finishing options are available for knit garments?",
        answer: "We offer Pantone-matched dyeing, enzyme wash, silicone softener, peach finish, brushing, and anti-pilling treatment. Decoration options include screen printing, embroidery, DTG, heat transfer, and sublimation.",
      },
    ],
    subCategories: [
      {
        name: "Men's Knitwear",
        images: [
          { src: "https://i.postimg.cc/CLrNb1Mq/Men-s-Knitwear.webp", alt: "Men's Knitwear - T-shirts and Polos" },
          { src: "https://i.postimg.cc/CLrNb1MK/Men-s-Knitwear-(2).webp", alt: "Men's Knitwear - Casual Collection" },
          { src: "https://i.postimg.cc/gktD3JcJ/Men-s-Knitwear-(3).webp", alt: "Men's Knitwear - Premium Quality" },
          { src: "https://i.postimg.cc/xTpRLCj8/Men-s-Knitwear-(4).webp", alt: "Men's Knitwear - Hoodies and Sweatshirts" },
          { src: "https://i.postimg.cc/yYpP0d6W/Men-s-Knitwear-(5).webp", alt: "Men's Knitwear - Jogger Pants" },
          { src: "https://i.postimg.cc/7YtVS6Pf/Men-s-Knitwear-(6).webp", alt: "Men's Knitwear - Formal Knit" },
          { src: "https://i.postimg.cc/wT4VDvx1/Men-s-Knitwear-(7).webp", alt: "Men's Knitwear - Sportswear" },
          { src: "https://i.postimg.cc/gktD3JcL/Men-s-Knitwear-(8).webp", alt: "Men's Knitwear - Summer Collection" },
          { src: "https://i.postimg.cc/02Xf7Q5J/Men-s-Knitwear-(9).webp", alt: "Men's Knitwear - Winter Collection" },
        ],
      },
      {
        name: "Women's Knitwear",
        images: [
          { src: "https://i.postimg.cc/s1C3Lys7/Womens-Knit-Wear.webp", alt: "Women's Knitwear - Dresses and Tops" },
          { src: "https://i.postimg.cc/4y9Jwnkc/Womens-Knit-Wear-(2).webp", alt: "Women's Knitwear - Casual Collection" },
          { src: "https://i.postimg.cc/kGbnwD3W/Womens-Knit-Wear-(3).webp", alt: "Women's Knitwear - Premium Quality" },
          { src: "https://i.postimg.cc/VvCY45Qn/Womens-Knit-Wear-(4).webp", alt: "Women's Knitwear - Activewear" },
          { src: "https://i.postimg.cc/fkQMPZDy/Womens-Knit-Wear-(5).webp", alt: "Women's Knitwear - Lounge Collection" },
          { src: "https://i.postimg.cc/hhRKYgcX/Womens-Knit-Wear-(6).webp", alt: "Women's Knitwear - Formal Knit" },
          { src: "https://i.postimg.cc/Dm37NFn4/Womens-Knit-Wear-(7).webp", alt: "Women's Knitwear - Summer Collection" },
          { src: "https://i.postimg.cc/6TxBPwtG/Womens-Knit-Wear-(8).webp", alt: "Women's Knitwear - Winter Collection" },
          { src: "https://i.postimg.cc/RqxvY94t/Womens-Knit-Wear-(9).webp", alt: "Women's Knitwear - Trending Styles" },
        ],
      },
      {
        name: "Kids Knitwear",
        images: [
          { src: "https://i.postimg.cc/DyQWKpHV/Kids-Knit-Wear.webp", alt: "Kids Knitwear - T-shirts and Tops" },
          { src: "https://i.postimg.cc/vHw1kwPp/Kids-Knit-Wear-(2).webp", alt: "Kids Knitwear - Casual Collection" },
          { src: "https://i.postimg.cc/RVx3yxsz/Kids-Knit-Wear-(3).webp", alt: "Kids Knitwear - Playwear" },
          { src: "https://i.postimg.cc/vHw1kwqF/Kids-Knit-Wear-(4).webp", alt: "Kids Knitwear - School Wear" },
          { src: "https://i.postimg.cc/RVx3yxP2/Kids-Knit-Wear-(5).webp", alt: "Kids Knitwear - Baby Collection" },
          { src: "https://i.postimg.cc/pXM94MGP/Kids-Knit-Wear-(6).webp", alt: "Kids Knitwear - Comfortable Fabrics" },
          { src: "https://i.postimg.cc/tCG1wGSX/Kids-Knit-Wear-(7).webp", alt: "Kids Knitwear - Fun Prints" },
          { src: "https://i.postimg.cc/SNLXp15H/Kids-Knit-Wear-(8).webp", alt: "Kids Knitwear - Summer Collection" },
          { src: "https://i.postimg.cc/TYjyXNSF/Kids-Knit-Wear-(9).webp", alt: "Kids Knitwear - Winter Collection" },
          { src: "https://i.postimg.cc/rFGdLZbB/Kids-Knit-Wear-(10).webp", alt: "Kids Knitwear - Complete Range" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 2. WOVENS
  // ---------------------------------------------------------------------------
  {
    slug: "wovens",
    name: "Wovens",
    shortName: "Wovens",
    description:
      "Custom woven garment manufacturer in Bangladesh — shirts, blouses, dresses, trousers, and woven apparel from 100 pieces MOQ.",
    longDescription:
      "TexVenture is a specialized woven garment manufacturer and supplier in Bangladesh, producing high-quality woven apparel for global brands. We manufacture button-down shirts, blouses, dresses, skirts, trousers, chinos, jackets, and blazers — all sourced from our vetted factory network across Dhaka, Chittagong, and Gazipur.\n\nWoven garment manufacturing requires precision in fabric handling, pattern making, and construction. Our factories use auto-spreaders, computerized cutting machines, and industrial pressing systems to deliver clean, consistent results. We work with a wide range of woven fabrics including cotton poplin, oxford, twill, chambray, linen, rayon, viscose, and polyester blends — typically in fabric weights ranging from 80 GSM (lightweight blouses) to 280 GSM (heavy trousers and jackets).\n\nWoven garments demand specific construction techniques: lockstitch sewing, buttonhole making, collar and cuff fusing, and precise pressing. Our production teams are trained in these specialized processes, ensuring garments meet the quality standards expected by international retail chains and premium brands.\n\nTexVenture's woven manufacturing covers the full spectrum from casual shirting to formal blazers. We offer custom washes, embroidery, screen printing, and a complete range of trims and accessories. Every order goes through AQL 2.5 quality inspection with documented reports shared before shipment.",
    features: [
      { text: "Shirts, blouses, dresses, skirts, trousers, and blazers" },
      { text: "Lockstitch sewing with precision collar and cuff construction" },
      { text: "Auto-spreading and computerized cutting" },
      { text: "Fabric weight range: 80–280 GSM" },
      { text: "Custom washes, embroidery, and screen printing" },
      { text: "AQL 2.5 multi-point quality inspection" },
    ],
    image: "https://i.postimg.cc/qvQ3jn6k/Wovens.webp",
    imageAlt: "Custom woven garments manufactured by TexVenture in Bangladesh — shirts, blouses, and trousers",
    subCategories: [
      {
        name: "Wovens Collection",
        images: [
          { src: "https://i.postimg.cc/qvQ3jn6k/Wovens.webp", alt: "Wovens Collection" },
          { src: "https://i.postimg.cc/g24ZNRX1/Wovens-(2).webp", alt: "Wovens Collection" },
          { src: "https://i.postimg.cc/L8v1NfYr/Wovens-(3).webp", alt: "Wovens Collection" },
          { src: "https://i.postimg.cc/QdST05KZ/Wovens-(4).webp", alt: "Wovens Collection" },
          { src: "https://i.postimg.cc/bwLt3bSc/Wovens-(5).webp", alt: "Wovens Collection" },
          { src: "https://i.postimg.cc/7ZX2m7Jq/Wovens-(6).webp", alt: "Wovens Collection" },
        ],
      },
    ],
    popularItems: [
      "Oxford Button-Down Shirts",
      "Poplin Blouses",
      "Chambray Shirts",
      "Twill Trousers",
      "Chino Pants",
      "Linen Dresses",
      "Casual Blazers",
      "Work Shirts",
    ],
    leadTime: "50–70 days",
    moq: "100 pcs / style",
    targetAudience: "Fashion brands, retail chains, corporate uniform buyers, premium labels",
    fabricOptions: [
      "Cotton Poplin",
      "Oxford Cloth",
      "Twill",
      "Chambray",
      "Linen",
      "Rayon",
      "Viscose",
      "Polyester Blends",
      "Cotton-Spandex",
    ],
    certifications: ["BSCI", "OEKO-TEX® Standard 100", "SEDEX", "WRAP"],
    specs: {
      fabricWeight: "80–280 GSM (typical range — confirm with sourcing team)",
      construction: "Plain weave, Twill, Satin, Oxford, Chambray",
      sizing: "XS–3XL (custom grading available)",
      finishing: [
        "Mercerization",
        "Sanforizing (pre-shrink)",
        "Brushing",
        "Calendering",
        "Anti-wrinkle treatment",
      ],
    },
    faqs: [
      {
        question: "What is the minimum order quantity for woven garments?",
        answer: "Our standard MOQ for woven garments is 100 pieces per style. This applies to shirts, blouses, trousers, dresses, and other woven apparel.",
      },
      {
        question: "What woven fabrics do you work with?",
        answer: "We work with cotton poplin, oxford cloth, twill, chambray, linen, rayon, viscose, polyester blends, and cotton-spandex. Fabric weights range from 80 GSM (lightweight blouses) to 280 GSM (heavy trousers).",
      },
      {
        question: "How long does woven garment production take?",
        answer: "Sampling takes 5–7 days. Bulk production lead time is 50–70 days after sample approval, which is slightly longer than knit wear due to the construction complexity of woven garments.",
      },
      {
        question: "Can you produce formal wear and corporate uniforms?",
        answer: "Yes. Our woven manufacturing covers formal shirts, blazers, trousers, and corporate uniforms. We have experience producing for retail chains and corporate clients with strict quality requirements.",
      },
      {
        question: "What quality standards apply to woven garments?",
        answer: "All woven garments undergo AQL 2.5 quality inspection covering stitching, measurements, fabric quality, and finishing. Our factories hold BSCI, OEKO-TEX®, SEDEX, and WRAP certifications.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 3. CIRCULAR KNIT
  // ---------------------------------------------------------------------------
  {
    slug: "circular-knit",
    name: "Circular Knit",
    shortName: "Circular Knit",
    description:
      "Custom circular knit manufacturer in Bangladesh — t-shirts, tanks, thermals, and tubular knit garments from 100 pieces MOQ.",
    longDescription:
      "TexVenture is a specialized circular knit manufacturer in Bangladesh, producing tubular and seamless-style knitted garments using imported circular knitting machinery. We manufacture t-shirts, tank tops, thermal wear, undershirts, seamless knit garments, and tubular body products — all produced in our vetted factory network across Dhaka, Chittagong, and Gazipur.\n\nCircular knitting is a specialized process where fabric is knitted in a continuous tube on circular knitting machines. This produces garments with minimal seams, better drape, and higher production efficiency compared to flat-bed knitting. Our factory partners operate machines from Mayer & Cie and Terrot (Germany), capable of producing single jersey, rib, interlock, pique, and jacquard patterns.\n\nWe source yarn and fabric from Bangladesh's deep textile ecosystem, with options including 100% combed cotton, carded cotton, cotton-polyester blends, and modal. Typical fabric weights range from 120 GSM (lightweight tees) to 220 GSM (thermal and fleece). The circular knit process is particularly efficient for high-volume basics — t-shirts, tank tops, and body-con garments.\n\nTexVenture's circular knit production emphasizes consistency in gauge, color matching, and fabric hand-feel. Every production run goes through AQL 2.5 quality inspection, with documented reports on fabric weight, shrinkage, colorfastness, and pilling resistance.",
    features: [
      { text: "T-shirts, tanks, thermals, and tubular garments" },
      { text: "Mayer & Cie and Terrot circular knitting machines" },
      { text: "Single jersey, rib, interlock, pique, jacquard" },
      { text: "GSM range: 120–220 for standard circular knit" },
      { text: "Combed cotton, carded cotton, and cotton-poly blends" },
      { text: "AQL 2.5 quality inspection with fabric testing" },
    ],
    image: "/images/products/circular-knit.jpg",
    imageAlt: "Custom circular knit garments manufactured by TexVenture in Bangladesh — t-shirts and tank tops",
    popularItems: [
      "Basic Crew Neck T-Shirts",
      "Tank Tops & Singlets",
      "Thermal Wear",
      "Undershirts",
      "Body-Con Dresses",
      "Ribbed Tanks",
      "Seamless-Style Tops",
      "Tubular T-Shirts",
    ],
    leadTime: "40–55 days",
    moq: "100 pcs / style",
    targetAudience: "Basics brands, private label startups, underwear/innerwear brands, high-volume retailers",
    fabricOptions: [
      "100% Combed Cotton",
      "Carded Cotton",
      "Cotton-Polyester Blend",
      "Modal",
      "Cotton-Spandex",
      "Organic Cotton",
    ],
    certifications: ["BSCI", "OEKO-TEX® Standard 100", "SEDEX", "WRAP"],
    specs: {
      fabricWeight: "120–220 GSM (typical range — confirm with sourcing team)",
      construction: "Single Jersey, Rib 1x1/2x2, Interlock, Pique, Jacquard",
      sizing: "XS–3XL (custom grading available)",
      finishing: [
        "Peach finish",
        "Silicone softener",
        "Anti-pilling treatment",
        "Compressive wash",
        "Pantone dyeing",
      ],
    },
    faqs: [
      {
        question: "What is circular knit and how is it different from regular knitting?",
        answer: "Circular knitting produces fabric in a continuous tube on circular machines, creating garments with minimal seams and better drape. It is more efficient for high-volume basics like t-shirts and tanks compared to flat-bed knitting.",
      },
      {
        question: "What is the MOQ for circular knit orders?",
        answer: "Our standard MOQ for circular knit is 100 pieces per style. This applies to t-shirts, tank tops, thermals, and other tubular knit garments.",
      },
      {
        question: "What GSM range do you produce for circular knit?",
        answer: "We produce circular knit fabrics from 120 GSM (lightweight tees) to 220 GSM (thermal and fleece). The most common range is 140–180 GSM for standard t-shirts.",
      },
      {
        question: "What machines do you use for circular knitting?",
        answer: "Our factory partners operate German-made Mayer & Cie and Terrot circular knitting machines, capable of producing single jersey, rib, interlock, pique, and jacquard patterns.",
      },
      {
        question: "How do you ensure quality in circular knit production?",
        answer: "Every production run undergoes AQL 2.5 quality inspection including fabric weight testing, shrinkage measurement, colorfastness checks, and pilling resistance tests. Documented reports are shared before shipment.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 4. DENIM
  // ---------------------------------------------------------------------------
  {
    slug: "denim",
    name: "Denim",
    shortName: "Denim",
    description:
      "Custom denim manufacturer in Bangladesh — jeans, denim jackets, skirts, and denim garments from 100 pieces MOQ.",
    longDescription:
      "TexVenture is a specialized denim manufacturer in Bangladesh, producing premium denim garments for global brands. We manufacture jeans, denim jackets, skirts, shirts, shorts, and denim dresses — all produced in our vetted factory network with dedicated denim washing and finishing facilities across Dhaka, Chittagong, and Gazipur.\n\nBangladesh is one of the world's top denim manufacturing hubs, with deep expertise in denim fabric weaving, dyeing, washing, and finishing. Our factory partners use imported looms (Toyota, Dornier) to produce denim fabrics in weights ranging from 6 oz (lightweight chambray) to 14 oz (rigid selvedge). We work with 3x1 and 2x1 twill constructions, rope dyeing and piece dyeing techniques, and a full range of indigo shades.\n\nDenim washing is where garments gain their character. Our factories operate full-service denim laundry facilities with capabilities including: stone wash, enzyme wash, bleach wash, tinting, overdyeing, laser fading, whiskering, grinding, and resin finishing. We also offer sustainable washing techniques using ozone and e-flow technology to reduce water and chemical consumption.\n\nEvery denim garment goes through AQL 2.5 quality inspection with specific attention to wash consistency, seam strength, hardware quality (rivets, buttons, zippers), and colorfastness. Our denim production covers men's, women's, and kids' styles.",
    features: [
      { text: "Jeans, denim jackets, skirts, shorts, and dresses" },
      { text: "Fabric weight: 6–14 oz (200–470 GSM)" },
      { text: "3x1 and 2x1 twill construction" },
      { text: "Full denim laundry: stone, enzyme, bleach, tint, laser" },
      { text: "Sustainable washing: ozone and e-flow technology" },
      { text: "AQL 2.5 inspection with wash consistency checks" },
    ],
    image: "/images/products/denim.jpg",
    imageAlt: "Custom denim garments manufactured by TexVenture in Bangladesh — jeans, jackets, and skirts",
    popularItems: [
      "Slim Fit Jeans",
      "Straight Leg Jeans",
      "Skinny Jeans",
      "Boyfriend Jeans",
      "Denim Jackets",
      "Denim Skirts",
      "Denim Shorts",
      "Denim Shirts",
    ],
    leadTime: "55–75 days",
    moq: "200 pcs / style",
    targetAudience: "Denim brands, fashion retailers, streetwear labels, workwear companies",
    fabricOptions: [
      "100% Cotton Denim",
      "Cotton-Stretch Denim (2% Elastane)",
      "Cotton-Polyester Denim",
      "Organic Denim",
      "Recycled Cotton Denim",
      "Chambray",
    ],
    certifications: ["BSCI", "OEKO-TEX® Standard 100", "SEDEX", "WRAP", "GOTS"],
    specs: {
      fabricWeight: "6–14 oz (200–470 GSM) — lightweight chambray to heavy rigid",
      construction: "3x1 Twill, 2x1 Twill, Right Hand Twill, Left Hand Twill",
      sizing: "26–40 waist (custom grading available)",
      finishing: [
        "Stone wash",
        "Enzyme wash",
        "Bleach wash",
        "Laser fading",
        "Whiskering & grinding",
        "Resin finishing",
        "Ozone washing",
      ],
    },
    faqs: [
      {
        question: "What is the MOQ for denim garments?",
        answer: "Our standard MOQ for denim garments is 200 pieces per style. Denim has a higher MOQ than knit wear due to the washing and finishing process, which requires minimum volume for consistency.",
      },
      {
        question: "What denim fabric weights do you offer?",
        answer: "We produce denim from 6 oz (200 GSM, lightweight chambray) to 14 oz (470 GSM, heavy rigid). The most common weights are 10–12 oz for everyday jeans.",
      },
      {
        question: "What washing techniques are available for denim?",
        answer: "We offer stone wash, enzyme wash, bleach wash, tinting, overdyeing, laser fading, whiskering, grinding, and resin finishing. We also provide sustainable options using ozone and e-flow technology.",
      },
      {
        question: "How long does denim production take?",
        answer: "Sampling takes 7–10 days (including wash sampling). Bulk production is 55–75 days after wash approval. Denim lead times are longer due to the washing and finishing process.",
      },
      {
        question: "Can you produce sustainable denim?",
        answer: "Yes. We offer organic cotton denim, recycled cotton denim, and sustainable washing techniques (ozone, e-flow) that reduce water and chemical usage by up to 50% compared to conventional washing.",
      },
      {
        question: "What hardware options are available for denim?",
        answer: "We source rivets, buttons, zippers (YKK and equivalent), leather patches, and woven labels. Custom embossed buttons and branded hardware are available for larger orders.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 5. SWEATERS
  // ---------------------------------------------------------------------------
  {
    slug: "sweaters",
    name: "Sweaters",
    shortName: "Sweaters",
    description:
      "Custom sweater manufacturer in Bangladesh — knitted sweaters, cardigans, pullovers, and knitwear from 100 pieces MOQ.",
    longDescription:
      "TexVenture is a specialized sweater manufacturer in Bangladesh, producing premium knitted sweater garments for global brands. We manufacture pullovers, cardigans, crew neck sweaters, V-neck sweaters, turtlenecks, knit vests, and sweater dresses — all produced in our vetted factory network across Dhaka, Chittagong, and Gazipur.\n\nBangladesh has a strong sweater manufacturing sector with expertise in both fully-fashioned and cut-and-sew knitwear. Our factory partners operate flat-bed knitting machines (Stoll, Shima Seiki) and hand-knitting units capable of producing complex patterns including cable knit, argyle, rib knit, and jacquard. We work with wool, acrylic, cotton, cashmere blends, and synthetic yarns.\n\nSweater manufacturing requires specialized construction techniques: linking (seaming knitted panels), full-fashioned shaping, and hand-finishing. Our production teams are skilled in these processes, producing sweaters that meet the quality standards of premium European and North American brands.\n\nWe offer yarn dyeing (package dyeing), garment dyeing, and a full range of finishing options including brushing, steaming, and anti-pilling treatment. Every sweater order goes through AQL 2.5 quality inspection with specific attention to stitch density, seam strength, and dimensional stability after washing.",
    features: [
      { text: "Pullovers, cardigans, turtlenecks, vests, and sweater dresses" },
      { text: "Flat-bed knitting: Stoll and Shima Seiki machines" },
      { text: "Cable knit, argyle, rib, and jacquard patterns" },
      { text: "Wool, acrylic, cotton, cashmere blends" },
      { text: "Fully-fashioned and cut-and-sew construction" },
      { text: "AQL 2.5 quality inspection with wash testing" },
    ],
    image: "/images/products/sweaters.jpg",
    imageAlt: "Custom sweaters manufactured by TexVenture in Bangladesh — pullovers, cardigans, and knitwear",
    popularItems: [
      "Crew Neck Pullovers",
      "V-Neck Sweaters",
      "Cardigans",
      "Turtleneck Sweaters",
      "Cable Knit Sweaters",
      "Knit Vests",
      "Sweater Dresses",
      "Argyle Sweaters",
    ],
    leadTime: "50–70 days",
    moq: "100 pcs / style",
    targetAudience: "Winter wear brands, knitwear labels, fashion retailers, private label startups",
    fabricOptions: [
      "100% Acrylic",
      "Wool-Acrylic Blend",
      "Cotton Knit",
      "Cashmere Blend",
      "Merino Wool",
      "Alpaca Blend",
      "Recycled Acrylic",
    ],
    certifications: ["BSCI", "OEKO-TEX® Standard 100", "SEDEX", "WRAP"],
    specs: {
      fabricWeight: "200–400 GSM (typical range — confirm with sourcing team)",
      construction: "Fully-fashioned, Cut-and-sew, Hand-linked, Hand-knit",
      sizing: "XS–3XL (custom grading available)",
      finishing: [
        "Steaming",
        "Brushing",
        "Anti-pilling treatment",
        "Garment dyeing",
        "Yarn dyeing (package dyeing)",
      ],
    },
    faqs: [
      {
        question: "What is the MOQ for sweater production?",
        answer: "Our standard MOQ for sweaters is 100 pieces per style. This applies to pullovers, cardigans, turtlenecks, and other knitted sweater garments.",
      },
      {
        question: "What yarn types do you use for sweaters?",
        answer: "We work with 100% acrylic, wool-acrylic blends, cotton knit, cashmere blends, merino wool, and alpaca blends. Yarn selection depends on the desired weight, hand-feel, and price point.",
      },
      {
        question: "What knitting techniques do you offer?",
        answer: "We offer flat-bed knitting (Stoll, Shima Seiki) for machine-knitted sweaters and hand-knitting units for artisanal pieces. Patterns include cable knit, argyle, rib, and jacquard.",
      },
      {
        question: "How long does sweater production take?",
        answer: "Sampling takes 7–10 days. Bulk production is 50–70 days after sample approval, depending on the complexity of the knit pattern and finishing requirements.",
      },
      {
        question: "Can you produce fully-fashioned sweaters?",
        answer: "Yes. We offer fully-fashioned construction where each panel is knitted to shape on the machine, reducing waste and producing cleaner seams compared to cut-and-sew methods.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 6. WORK WEAR
  // ---------------------------------------------------------------------------
  {
    slug: "work-wear",
    name: "Work Wear",
    shortName: "Work Wear",
    description:
      "Custom workwear manufacturer in Bangladesh — uniforms, safety wear, industrial clothing, and corporate workwear from 100 pieces MOQ.",
    longDescription:
      "TexVenture is a specialized workwear manufacturer in Bangladesh, producing durable, functional, and compliance-ready work garments for global brands. We manufacture uniforms, safety vests, industrial coveralls, cargo pants, hi-vis clothing, corporate workwear, and medical scrubs — all produced in our vetted factory network across Dhaka, Chittagong, and Gazipur.\n\nWorkwear manufacturing demands specific expertise in durable fabrics, reinforced construction, and compliance with international safety standards. Our factories use heavy-duty fabrics including cotton drill, cotton-polyester twill, ripstop, and FR (flame-resistant) materials. We produce garments that meet EN ISO standards for hi-vis clothing and industrial safety.\n\nConstruction techniques for workwear include double-needle stitching, bartack reinforcement at stress points, triple-needle felled seams, and heavy-duty zippers and hardware. Our production teams are trained in these industrial sewing methods, ensuring garments withstand demanding work environments.\n\nTexVenture's workwear production covers a wide range of applications: construction and mining safety wear, hospitality uniforms, medical scrubs, corporate uniforms, and industrial protective clothing. We offer custom embroidery, screen printing, reflective tape application, and ID badge attachment.",
    features: [
      { text: "Uniforms, safety vests, coveralls, cargo pants, hi-vis wear" },
      { text: "Cotton drill, twill, ripstop, and FR fabrics" },
      { text: "Double-needle and triple-needle felled seam construction" },
      { text: "Reflective tape and hi-vis compliance (EN ISO 20471)" },
      { text: "Custom embroidery and branding" },
      { text: "AQL 2.5 quality inspection with durability testing" },
    ],
    image: "/images/products/work-wear.jpg",
    imageAlt: "Custom workwear manufactured by TexVenture in Bangladesh — uniforms, safety wear, and industrial clothing",
    popularItems: [
      "Safety Vests & Hi-Vis Wear",
      "Industrial Coveralls",
      "Cargo Work Pants",
      "Corporate Uniforms",
      "Medical Scrubs",
      "Hospitality Uniforms",
      "Chef Coats",
      "Lab Coats",
    ],
    leadTime: "45–65 days",
    moq: "100 pcs / style",
    targetAudience: "Workwear distributors, safety equipment companies, corporate clients, hospitality chains",
    fabricOptions: [
      "Cotton Drill (200–300 GSM)",
      "Cotton-Polyester Twill",
      "Ripstop",
      "FR (Flame-Resistant) Fabric",
      "Cotton Canvas",
      "Polyester Mesh (for hi-vis)",
    ],
    certifications: ["BSCI", "OEKO-TEX® Standard 100", "SEDEX", "WRAP"],
    specs: {
      fabricWeight: "200–350 GSM (typical range — confirm with sourcing team)",
      construction: "Plain weave, Twill, Ripstop, Canvas",
      sizing: "XS–5XL (extended size range available)",
      finishing: [
        "Anti-pilling treatment",
        "Water-repellent coating",
        "FR treatment",
        "Reflective tape application",
        "Pre-shrink sanforizing",
      ],
    },
    faqs: [
      {
        question: "What is the MOQ for workwear orders?",
        answer: "Our standard MOQ for workwear is 100 pieces per style. This applies to uniforms, safety vests, coveralls, cargo pants, and other industrial work garments.",
      },
      {
        question: "Can you produce hi-vis safety clothing?",
        answer: "Yes. We manufacture hi-vests, jackets, and trousers with reflective tape that meets EN ISO 20471 visibility standards. We source from certified fabric suppliers for safety compliance.",
      },
      {
        question: "What fabrics do you use for workwear?",
        answer: "We work with cotton drill (200–300 GSM), cotton-polyester twill, ripstop, FR (flame-resistant) fabric, and cotton canvas. Fabric selection depends on the specific work environment and safety requirements.",
      },
      {
        question: "Do you offer flame-resistant (FR) workwear?",
        answer: "Yes. We produce FR coveralls, shirts, and trousers using inherently FR fabrics or FR-treated cotton. Our FR garments comply with international safety standards for industrial workwear.",
      },
      {
        question: "Can you handle large corporate uniform orders?",
        answer: "Yes. We have experience producing corporate uniforms for hospitality chains, medical facilities, and industrial companies. Our team manages bulk orders with consistent quality across sizes and colors.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // 7. ACTIVE WEAR
  // ---------------------------------------------------------------------------
  {
    slug: "active-wear",
    name: "Active Wear",
    shortName: "Active Wear",
    description:
      "Custom activewear manufacturer in Bangladesh — leggings, sports bras, shorts, tracksuits, and performance garments from 100 pieces MOQ.",
    longDescription:
      "TexVenture is a specialized activewear manufacturer in Bangladesh, producing high-performance athletic garments for global fitness and fashion brands. We manufacture leggings, sports bras, shorts, tracksuits, joggers, yoga pants, gym tops, and compression wear — all produced in our vetted factory network across Dhaka, Chittagong, and Gazipur.\n\nActivewear manufacturing requires specific expertise in performance fabrics, moisture-wicking technology, and four-way stretch construction. Our factory partners source fabrics from specialized mills producing polyester-spandex, nylon-spandex, and recycled polyester blends with moisture-wicking, quick-dry, and anti-odor properties. Typical fabric weights range from 150 GSM (lightweight tops) to 320 GSM (compression leggings).\n\nConstruction techniques for activewear include flatlock seaming (to prevent chafing), bonded seams, laser cutting, and heat-sealed pockets. Our production teams are trained in these specialized processes, ensuring garments meet the performance standards expected by fitness brands and athletes.\n\nTexVenture's activewear production covers yoga, gym, running, and athleisure categories. We offer sublimation printing, screen printing, embroidery, and custom labeling. Every order goes through AQL 2.5 quality inspection with specific attention to stretch recovery, seam strength, and colorfastness after washing.",
    features: [
      { text: "Leggings, sports bras, shorts, tracksuits, and compression wear" },
      { text: "Moisture-wicking, quick-dry, and anti-odor fabrics" },
      { text: "Four-way stretch with flatlock seaming" },
      { text: "Fabric weight: 150–320 GSM for performance garments" },
      { text: "Sublimation printing and heat-sealed details" },
      { text: "AQL 2.5 inspection with stretch recovery testing" },
    ],
    image: "/images/products/active-wear.jpg",
    imageAlt: "Custom activewear manufactured by TexVenture in Bangladesh — leggings, sports bras, and performance garments",
    popularItems: [
      "High-Waist Leggings",
      "Sports Bras",
      "Gym Shorts",
      "Tracksuits",
      "Yoga Pants",
      "Compression Wear",
      "Running Tops",
      "Athleisure Sets",
    ],
    leadTime: "45–60 days",
    moq: "100 pcs / style",
    targetAudience: "Fitness brands, athleisure labels, yoga brands, sports retailers, DTC activewear brands",
    fabricOptions: [
      "Polyester-Spandex (4-way stretch)",
      "Nylon-Spandex",
      "Recycled Polyester-Spandex",
      "Cotton-Modal-Spandex",
      "Mesh Panels",
      "Power Mesh",
    ],
    certifications: ["BSCI", "OEKO-TEX® Standard 100", "SEDEX", "WRAP", "GRS"],
    specs: {
      fabricWeight: "150–320 GSM (typical range — confirm with sourcing team)",
      construction: "4-way stretch, Flatlock seaming, Bonded seams, Laser cut",
      sizing: "XS–3XL (custom grading available)",
      finishing: [
        "Sublimation printing",
        "Moisture-wicking treatment",
        "Anti-odor treatment",
        "Brushed inner finish",
        "Heat-sealed pockets",
      ],
    },
    faqs: [
      {
        question: "What is the MOQ for activewear production?",
        answer: "Our standard MOQ for activewear is 100 pieces per style. This applies to leggings, sports bras, shorts, tracksuits, and other performance garments.",
      },
      {
        question: "What performance features do your activewear fabrics offer?",
        answer: "Our activewear fabrics offer moisture-wicking, quick-dry, anti-odor, and UV protection properties. We source polyester-spandex and nylon-spandex blends with four-way stretch for maximum comfort and performance.",
      },
      {
        question: "Can you produce recycled polyester activewear?",
        answer: "Yes. We offer recycled polyester-spandex blends with GRS (Global Recycled Standard) certification. This is ideal for brands focused on sustainability without compromising performance.",
      },
      {
        question: "What construction techniques do you use for activewear?",
        answer: "We use flatlock seaming (to prevent chafing), bonded seams, laser cutting, and heat-sealed pockets. These techniques ensure clean finishes and maximum comfort during physical activity.",
      },
      {
        question: "How do you ensure quality in activewear production?",
        answer: "Every activewear order undergoes AQL 2.5 quality inspection including stretch recovery testing, seam strength testing, and colorfastness after washing. We also test moisture-wicking and quick-dry performance.",
      },
    ],
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
