// =============================================================================
// TexVenture Guides / Blog Article Metadata
// =============================================================================

export interface GuideAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface GuideArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "manufacturing" | "sourcing" | "industry" | "pricing";
  tags: string[];
  author: GuideAuthor;
  publishedAt: string;
  updatedAt?: string;
  readTimeMinutes: number;
  featuredImage: string;
  imageAlt: string;
  metaDescription: string;
}

// ---------------------------------------------------------------------------
// Exported Data
// ---------------------------------------------------------------------------

export const guides: GuideArticle[] = [
  {
    slug: "what-is-moq",
    title: "What is MOQ? A Complete Guide for Fashion Brands",
    excerpt:
      "MOQ stands for Minimum Order Quantity — the smallest number of units a factory will produce per style. Learn how MOQs work, why they exist, and how to navigate them as a growing brand.",
    content: `## What is MOQ?

MOQ stands for **Minimum Order Quantity** — the minimum number of units a factory is willing to produce for a single style in a single order.

### Why Do Factories Have MOQs?

Factories set MOQs because every production run involves fixed setup costs:
- **Fabric dyeing** — dye lots have minimum yardage requirements
- **Pattern and cutting** — setting up cutting patterns takes time regardless of quantity
- **Machine setup** — calibrating sewing lines for a new style has a fixed cost
- **Label and trim orders** — custom labels and trims often have their own minimums

### Typical MOQs in Bangladesh

| Category | Typical MOQ |
|----------|-------------|
| Knit Wear | 100–300 pcs |
| Wovens | 150–500 pcs |
| Denim | 200–500 pcs |
| Sweaters | 150–300 pcs |
| Activewear | 100–300 pcs |

### How to Negotiate MOQs

1. **Mix colours and sizes** — ordering multiple colourways in one style can help meet MOQs
2. **Choose simpler designs** — fewer trims and details reduce setup costs
3. **Build a relationship** — repeat orders give you leverage for lower MOQs
4. **Work with a buying house** — we aggregate orders across brands to meet factory minimums

### TexVenture's Low MOQ Advantage

At TexVenture, our standard MOQ starts from just **100 pieces per style** — making us one of the most accessible sourcing partners for small and growing brands.`,
    category: "manufacturing",
    tags: ["MOQ", "minimum order quantity", "manufacturing", "startups", "small brands"],
    author: {
      name: "TexVenture Team",
      role: "Content",
    },
    publishedAt: "2024-12-01",
    readTimeMinutes: 5,
    featuredImage: "/images/guides/what-is-moq.jpg",
    imageAlt: "Stack of garment samples representing minimum order quantities",
    metaDescription:
      "Learn what MOQ (Minimum Order Quantity) means in garment manufacturing, why factories set them, and how to navigate MOQs as a growing fashion brand.",
  },
  {
    slug: "how-to-find-a-clothing-manufacturer",
    title: "How to Find a Clothing Manufacturer in 2025",
    excerpt:
      "A step-by-step guide to finding, vetting, and working with garment manufacturers — whether you're in Bangladesh, China, Vietnam, or sourcing remotely.",
    content: `## How to Find a Clothing Manufacturer

Finding the right manufacturer is one of the most critical steps in launching or scaling a fashion brand. Here's how to do it right.

### Step 1: Define Your Requirements

Before reaching out to factories, know exactly what you need:
- **Product type** — t-shirts, hoodies, denim, activewear, etc.
- **Fabric** — cotton, polyester, blends, organic, recycled
- **Quantity** — your expected order volume per style
- **Budget** — target cost per piece

### Step 2: Research Manufacturing Hubs

The main garment manufacturing countries are:
- **Bangladesh** — best for knitwear, denim, and competitive pricing
- **China** — best for complex garments, quick turnarounds, and established supply chains
- **Vietnam** — best for activewear and sportswear
- **India** — best for cotton, linen, and handcrafted items

### Step 3: Vet Potential Manufacturers

Always verify:
- **Factory certifications** — BSCI, SEDEX, OEKO-TEX, WRAP
- **Production capacity** — can they scale with your brand?
- **Communication** — do they respond promptly and clearly?
- **References** — ask for client testimonials or case studies

### Step 4: Start with Samples

Never commit to bulk production without first ordering samples. Evaluate:
- Fabric quality and hand-feel
- Stitching and construction
- Fit and sizing accuracy
- Print or embroidery quality

### Step 5: Work with a Sourcing Partner

If you're new to manufacturing, a buying house like **TexVenture** can save you months of trial and error. We've already vetted factories, negotiated MOQs, and handled the logistics — so you can focus on building your brand.`,
    category: "sourcing",
    tags: ["manufacturer", "sourcing", "factory", "how to", "guide", "2025"],
    author: {
      name: "TexVenture Team",
      role: "Content",
    },
    publishedAt: "2024-12-10",
    readTimeMinutes: 7,
    featuredImage: "/images/guides/find-manufacturer.jpg",
    imageAlt: "Garment factory floor with sewing machines and workers",
    metaDescription:
      "Step-by-step guide to finding and vetting clothing manufacturers in Bangladesh, China, and Vietnam — plus tips for working with a sourcing partner.",
  },
  {
    slug: "cost-to-manufacture-a-hoodie",
    title: "How Much Does It Cost to Manufacture a Hoodie?",
    excerpt:
      "A detailed breakdown of hoodie manufacturing costs — from fabric and labour to trims, printing, and shipping. Know what to budget before you place your first order.",
    content: `## How Much Does It Cost to Manufacture a Hoodie?

The cost to manufacture a hoodie varies based on fabric weight, construction, order quantity, and customisation. Here's a realistic breakdown.

### Cost Breakdown (Per Unit)

| Component | Budget Range | Premium Range |
|-----------|-------------|---------------|
| Fabric (350–400gsm fleece) | $3.50 – $5.00 | $5.50 – $8.00 |
| Trims (zipper, drawcord, labels) | $0.80 – $1.50 | $1.50 – $3.00 |
| Cut and Sew Labour | $1.50 – $2.50 | $2.50 – $4.00 |
| Print / Embroidery | $0.50 – $2.00 | $2.00 – $5.00 |
| QC and Finishing | $0.30 – $0.50 | $0.50 – $0.80 |
| **Total (Ex-Factory)** | **$6.60 – $11.50** | **$12.00 – $20.80** |

### What Affects the Price?

1. **Fabric weight** — 400gsm heavyweight fleece costs more than 350gsm
2. **Print technique** — puff print and all-over print cost more than basic screen print
3. **Order quantity** — 100 pieces will cost more per unit than 1,000
4. **Zipper type** — YKK zippers cost more than generic alternatives
5. **Custom labels** — woven labels, hang-tags, and custom packaging add cost

### Shipping Costs

- **Sea freight** (20–30 days): $0.30 – $0.80 per piece
- **Air freight** (5–7 days): $1.50 – $3.50 per piece
- **Express courier** (3–5 days): $3.00 – $6.00 per piece

### TexVenture Pricing

With TexVenture, you get transparent pricing with no hidden fees. Our hoodie manufacturing starts from approximately **$7–$12 per unit** depending on specifications and quantity.`,
    category: "pricing",
    tags: ["hoodie", "cost", "pricing", "manufacturing", "budget", "cost breakdown"],
    author: {
      name: "TexVenture Team",
      role: "Content",
    },
    publishedAt: "2024-12-15",
    readTimeMinutes: 6,
    featuredImage: "/images/guides/hoodie-cost.jpg",
    imageAlt: "Premium hoodie with cost breakdown infographic overlay",
    metaDescription:
      "Detailed breakdown of hoodie manufacturing costs including fabric, labour, trims, printing, and shipping. Budget guide for fashion brands.",
  },
  {
    slug: "best-manufacturers-in-bangladesh",
    title: "Best Garment Manufacturers in Bangladesh (2025 Guide)",
    excerpt:
      "Discover the top garment manufacturers and sourcing partners in Bangladesh — the world's second-largest apparel exporter and a hub for knitwear and denim.",
    content: `## Best Garment Manufacturers in Bangladesh

Bangladesh is a powerhouse in global garment manufacturing, exporting over $45 billion in apparel annually. Here's what makes it a top sourcing destination and how to find the right manufacturing partner.

### Why Bangladesh?

- **Competitive pricing** — among the lowest production costs globally
- **Massive capacity** — over 4,500 garment factories
- **Deep expertise** — specialisation in knitwear, denim, and wovens
- **Improving standards** — increasing adoption of international certifications
- **Growing infrastructure** — new industrial zones and improved logistics

### Key Manufacturing Areas

- **Dhaka / Gazipur** — largest concentration of garment factories
- **Narayanganj** — historic textile and dyeing hub
- **Chittagong** — port city with export-focused factories
- **Mymensingh** — emerging manufacturing zone

### How to Choose a Manufacturer

1. **Check certifications** — BSCI, SEDEX, OEKO-TEX, GOTS, WRAP
2. **Verify production capacity** — ensure they can handle your volume
3. **Request references** — speak with existing clients if possible
4. **Visit the factory** — or work with a buying house that does
5. **Start small** — test with a sample order before committing to bulk

### Working with TexVenture

TexVenture maintains relationships with **20+ vetted factories** across Bangladesh. We handle factory selection, quality control, and logistics — giving you direct access to Bangladesh's manufacturing ecosystem without the complexity.`,
    category: "industry",
    tags: ["Bangladesh", "manufacturers", "factory", "sourcing", "guide", "2025"],
    author: {
      name: "TexVenture Team",
      role: "Content",
    },
    publishedAt: "2025-01-05",
    readTimeMinutes: 8,
    featuredImage: "/images/guides/bangladesh-manufacturers.jpg",
    imageAlt: "Bangladesh garment factory exterior with workers",
    metaDescription:
      "Guide to the best garment manufacturers in Bangladesh — why it's a top sourcing destination, key manufacturing areas, and how to choose the right partner.",
  },
  {
    slug: "bangladesh-vs-china-vs-vietnam",
    title: "Bangladesh vs China vs Vietnam: Which Country to Manufacture In?",
    excerpt:
      "A side-by-side comparison of the world's three biggest garment manufacturing countries — pricing, MOQs, lead times, quality, and sustainability.",
    content: `## Bangladesh vs China vs Vietnam: Manufacturing Comparison

Choosing where to manufacture your garments depends on your budget, timeline, product type, and brand values. Here's how the three major hubs compare.

### Pricing Comparison

| Factor | Bangladesh | China | Vietnam |
|--------|-----------|-------|---------|
| Labour cost | ⭐ Lowest | Moderate | Moderate |
| Fabric cost | Competitive | Wide range | Competitive |
| Per-unit cost | $4 – $15 | $6 – $25 | $5 – $18 |
| Shipping (to US/EU) | Moderate | Low-Moderate | Moderate |

### MOQ and Flexibility

| Factor | Bangladesh | China | Vietnam |
|--------|-----------|-------|---------|
| Typical MOQ | 100–300 pcs | 300–1,000 pcs | 200–500 pcs |
| Small-batch friendly | ⭐ Yes | Limited | Moderate |
| Customisation | High | ⭐ Very High | High |

### Lead Times

| Factor | Bangladesh | China | Vietnam |
|--------|-----------|-------|---------|
| Sampling | 7–14 days | 5–10 days | 7–14 days |
| Production | 40–75 days | 30–60 days | 35–65 days |
| Shipping to US | 20–35 days (sea) | 12–20 days (sea) | 18–28 days (sea) |

### Strengths by Category

- **Bangladesh** → Knitwear, denim, basics, budget-friendly
- **China** → Complex garments, quick turnarounds, wide material sourcing
- **Vietnam** → Activewear, sportswear, mid-range pricing

### Sustainability

Bangladesh is rapidly improving its sustainability profile with increasing GOTS, OEKO-TEX, and BSCI certifications. China leads in scale of sustainable fabric production, while Vietnam is investing heavily in green manufacturing.

### The Bottom Line

There's no single "best" country — it depends on your specific needs. For **small and growing brands** seeking low MOQs and competitive pricing, **Bangladesh** is often the best starting point.

**TexVenture** is based in Bangladesh and specialises in connecting growing brands with the right factories — whether you're producing 100 hoodies or 10,000 t-shirts.`,
    category: "industry",
    tags: ["Bangladesh", "China", "Vietnam", "comparison", "manufacturing", "sourcing"],
    author: {
      name: "TexVenture Team",
      role: "Content",
    },
    publishedAt: "2025-01-15",
    readTimeMinutes: 9,
    featuredImage: "/images/guides/bangladesh-china-vietnam.jpg",
    imageAlt: "Map showing Bangladesh, China, and Vietnam garment manufacturing hubs",
    metaDescription:
      "Detailed comparison of garment manufacturing in Bangladesh, China, and Vietnam — pricing, MOQs, lead times, quality, and sustainability.",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map((g) => g.slug);
}

export function getGuidesByCategory(category: GuideArticle["category"]): GuideArticle[] {
  return guides.filter((g) => g.category === category);
}
