// =============================================================================
// TexVenture Instant Quote Pricing Configuration
// Used by the /quote calculator tool
// =============================================================================

export interface QuantityTier {
  min: number;
  max: number;
  label: string;
  priceMultiplier: number; // 1.0 = base, < 1.0 = discount
}

export interface ProductPricingConfig {
  slug: string;
  name: string;
  basePriceUSD: number;
  moq: number;
  maxQuantity: number;
  quantityTiers: QuantityTier[];
  description: string;
}

export interface ShippingOption {
  method: string;
  label: string;
  estimatedDays: { min: number; max: number };
  pricePerPieceUSD: number;
}

export interface PricingConfig {
  currency: string;
  lastUpdated: string;
  disclaimer: string;
  productTypes: ProductPricingConfig[];
  shippingOptions: ShippingOption[];
  additionalOptions: {
    customLabel: { available: boolean; pricePerPieceUSD: number };
    hangTag: { available: boolean; pricePerPieceUSD: number };
    polyBag: { available: boolean; pricePerPieceUSD: number };
    giftBox: { available: boolean; pricePerPieceUSD: number };
  };
}

// ---------------------------------------------------------------------------
// Exported Data
// ---------------------------------------------------------------------------

export const pricingConfig: PricingConfig = {
  currency: "USD",
  lastUpdated: "2025-01-01",
  disclaimer:
    "Prices are estimates based on standard specifications. Actual pricing may vary based on fabric choice, print techniques, trims, and order complexity. Contact us for an accurate quote.",
  productTypes: [
    {
      slug: "t-shirt",
      name: "T-Shirt (Jersey)",
      basePriceUSD: 4.50,
      moq: 100,
      maxQuantity: 10000,
      quantityTiers: [
        { min: 100, max: 299, label: "100–299 pcs", priceMultiplier: 1.25 },
        { min: 300, max: 499, label: "300–499 pcs", priceMultiplier: 1.1 },
        { min: 500, max: 999, label: "500–999 pcs", priceMultiplier: 1.0 },
        { min: 1000, max: 2999, label: "1,000–2,999 pcs", priceMultiplier: 0.9 },
        { min: 3000, max: 10000, label: "3,000+ pcs", priceMultiplier: 0.82 },
      ],
      description: "Classic cotton jersey t-shirt, 160–180 GSM, crew neck, short sleeve",
    },
    {
      slug: "polo-shirt",
      name: "Polo Shirt",
      basePriceUSD: 6.50,
      moq: 100,
      maxQuantity: 10000,
      quantityTiers: [
        { min: 100, max: 299, label: "100–299 pcs", priceMultiplier: 1.25 },
        { min: 300, max: 499, label: "300–499 pcs", priceMultiplier: 1.1 },
        { min: 500, max: 999, label: "500–999 pcs", priceMultiplier: 1.0 },
        { min: 1000, max: 2999, label: "1,000–2,999 pcs", priceMultiplier: 0.9 },
        { min: 3000, max: 10000, label: "3,000+ pcs", priceMultiplier: 0.82 },
      ],
      description: "Piqué polo shirt, 220–240 GSM, 2–3 button placket",
    },
    {
      slug: "hoodie",
      name: "Hoodie (Fleece)",
      basePriceUSD: 9.50,
      moq: 100,
      maxQuantity: 5000,
      quantityTiers: [
        { min: 100, max: 249, label: "100–249 pcs", priceMultiplier: 1.3 },
        { min: 250, max: 499, label: "250–499 pcs", priceMultiplier: 1.15 },
        { min: 500, max: 999, label: "500–999 pcs", priceMultiplier: 1.0 },
        { min: 1000, max: 2999, label: "1,000–2,999 pcs", priceMultiplier: 0.88 },
        { min: 3000, max: 5000, label: "3,000+ pcs", priceMultiplier: 0.78 },
      ],
      description: "Heavyweight fleece hoodie, 350–400 GSM, kangaroo pocket, drawstring hood",
    },
    {
      slug: "sweatshirt",
      name: "Sweatshirt (Fleece)",
      basePriceUSD: 7.50,
      moq: 100,
      maxQuantity: 5000,
      quantityTiers: [
        { min: 100, max: 249, label: "100–249 pcs", priceMultiplier: 1.3 },
        { min: 250, max: 499, label: "250–499 pcs", priceMultiplier: 1.15 },
        { min: 500, max: 999, label: "500–999 pcs", priceMultiplier: 1.0 },
        { min: 1000, max: 2999, label: "1,000–2,999 pcs", priceMultiplier: 0.88 },
        { min: 3000, max: 5000, label: "3,000+ pcs", priceMultiplier: 0.78 },
      ],
      description: "Crew neck sweatshirt, 320–350 GSM fleece",
    },
    {
      slug: "joggers",
      name: "Joggers",
      basePriceUSD: 8.00,
      moq: 100,
      maxQuantity: 5000,
      quantityTiers: [
        { min: 100, max: 249, label: "100–249 pcs", priceMultiplier: 1.3 },
        { min: 250, max: 499, label: "250–499 pcs", priceMultiplier: 1.15 },
        { min: 500, max: 999, label: "500–999 pcs", priceMultiplier: 1.0 },
        { min: 1000, max: 2999, label: "1,000–2,999 pcs", priceMultiplier: 0.88 },
        { min: 3000, max: 5000, label: "3,000+ pcs", priceMultiplier: 0.78 },
      ],
      description: "Jogger pants with elastic waist, cuffs, and side pockets",
    },
    {
      slug: "jeans",
      name: "Denim Jeans",
      basePriceUSD: 8.50,
      moq: 200,
      maxQuantity: 5000,
      quantityTiers: [
        { min: 200, max: 499, label: "200–499 pcs", priceMultiplier: 1.3 },
        { min: 500, max: 999, label: "500–999 pcs", priceMultiplier: 1.1 },
        { min: 1000, max: 2999, label: "1,000–2,999 pcs", priceMultiplier: 1.0 },
        { min: 3000, max: 5000, label: "3,000+ pcs", priceMultiplier: 0.88 },
      ],
      description: "Standard denim jeans, 11–12 oz, with custom wash options",
    },
    {
      slug: "sweater",
      name: "Knit Sweater",
      basePriceUSD: 11.00,
      moq: 150,
      maxQuantity: 3000,
      quantityTiers: [
        { min: 150, max: 299, label: "150–299 pcs", priceMultiplier: 1.35 },
        { min: 300, max: 499, label: "300–499 pcs", priceMultiplier: 1.2 },
        { min: 500, max: 999, label: "500–999 pcs", priceMultiplier: 1.0 },
        { min: 1000, max: 2999, label: "1,000–2,999 pcs", priceMultiplier: 0.9 },
        { min: 3000, max: 3000, label: "3,000 pcs", priceMultiplier: 0.82 },
      ],
      description: "Full-fashion knit sweater, cotton or acrylic yarn",
    },
    {
      slug: "activewear-leggings",
      name: "Activewear Leggings",
      basePriceUSD: 6.00,
      moq: 100,
      maxQuantity: 5000,
      quantityTiers: [
        { min: 100, max: 249, label: "100–249 pcs", priceMultiplier: 1.3 },
        { min: 250, max: 499, label: "250–499 pcs", priceMultiplier: 1.15 },
        { min: 500, max: 999, label: "500–999 pcs", priceMultiplier: 1.0 },
        { min: 1000, max: 2999, label: "1,000–2,999 pcs", priceMultiplier: 0.88 },
        { min: 3000, max: 5000, label: "3,000+ pcs", priceMultiplier: 0.78 },
      ],
      description: "Performance compression leggings, 4-way stretch, moisture-wicking",
    },
    {
      slug: "sports-bra",
      name: "Sports Bra",
      basePriceUSD: 5.00,
      moq: 100,
      maxQuantity: 5000,
      quantityTiers: [
        { min: 100, max: 249, label: "100–249 pcs", priceMultiplier: 1.3 },
        { min: 250, max: 499, label: "250–499 pcs", priceMultiplier: 1.15 },
        { min: 500, max: 999, label: "500–999 pcs", priceMultiplier: 1.0 },
        { min: 1000, max: 2999, label: "1,000–2,999 pcs", priceMultiplier: 0.88 },
        { min: 3000, max: 5000, label: "3,000+ pcs", priceMultiplier: 0.78 },
      ],
      description: "High-support sports bra, moisture-wicking, seamless or seamed options",
    },
    {
      slug: "cargo-pants",
      name: "Cargo Pants",
      basePriceUSD: 9.00,
      moq: 150,
      maxQuantity: 5000,
      quantityTiers: [
        { min: 150, max: 299, label: "150–299 pcs", priceMultiplier: 1.3 },
        { min: 300, max: 499, label: "300–499 pcs", priceMultiplier: 1.15 },
        { min: 500, max: 999, label: "500–999 pcs", priceMultiplier: 1.0 },
        { min: 1000, max: 2999, label: "1,000–2,999 pcs", priceMultiplier: 0.88 },
        { min: 3000, max: 5000, label: "3,000+ pcs", priceMultiplier: 0.78 },
      ],
      description: "Cargo-style pants with side pockets, cotton twill or ripstop",
    },
  ],
  shippingOptions: [
    {
      method: "sea",
      label: "Sea Freight",
      estimatedDays: { min: 20, max: 35 },
      pricePerPieceUSD: 0.50,
    },
    {
      method: "air",
      label: "Air Freight",
      estimatedDays: { min: 5, max: 10 },
      pricePerPieceUSD: 2.50,
    },
    {
      method: "express",
      label: "Express Courier (DHL/FedEx)",
      estimatedDays: { min: 3, max: 5 },
      pricePerPieceUSD: 5.00,
    },
  ],
  additionalOptions: {
    customLabel: {
      available: true,
      pricePerPieceUSD: 0.15,
    },
    hangTag: {
      available: true,
      pricePerPieceUSD: 0.10,
    },
    polyBag: {
      available: true,
      pricePerPieceUSD: 0.05,
    },
    giftBox: {
      available: true,
      pricePerPieceUSD: 0.80,
    },
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function calculatePrice(
  productSlug: string,
  quantity: number,
  shippingMethod: "sea" | "air" | "express"
): { unitPrice: number; totalCost: number; breakdown: Record<string, number> } | null {
  const product = pricingConfig.productTypes.find((p) => p.slug === productSlug);
  if (!product) return null;
  if (quantity < product.moq) return null;

  const tier = product.quantityTiers.find(
    (t) => quantity >= t.min && quantity <= t.max
  );
  if (!tier) return null;

  const unitPrice = +(product.basePriceUSD * tier.priceMultiplier).toFixed(2);
  const shipping = pricingConfig.shippingOptions.find((s) => s.method === shippingMethod);
  const shippingCost = shipping ? shipping.pricePerPieceUSD : 0;

  const totalCost = +((unitPrice + shippingCost) * quantity).toFixed(2);

  return {
    unitPrice,
    totalCost,
    breakdown: {
      "Manufacturing (per unit)": unitPrice,
      "Shipping (per unit)": shippingCost,
      "Quantity": quantity,
      "Subtotal (manufacturing)": +(unitPrice * quantity).toFixed(2),
      "Subtotal (shipping)": +(shippingCost * quantity).toFixed(2),
      "Total": totalCost,
    },
  };
}
