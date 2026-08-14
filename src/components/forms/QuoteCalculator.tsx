'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { pricingConfig, type ProductPricingConfig } from '@/data/pricing';

type ShippingMethod = 'sea' | 'air' | 'express';

export default function QuoteCalculator() {
  const [selectedProduct, setSelectedProduct] = useState<string>(
    pricingConfig.productTypes[0]?.slug ?? ''
  );
  const [quantity, setQuantity] = useState<number>(
    pricingConfig.productTypes[0]?.moq ?? 100
  );
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('sea');

  const product: ProductPricingConfig | undefined = useMemo(
    () => pricingConfig.productTypes.find((p) => p.slug === selectedProduct),
    [selectedProduct]
  );

  const calculation = useMemo(() => {
    if (!product || quantity < product.moq) return null;

    const tier = product.quantityTiers.find(
      (t) => quantity >= t.min && quantity <= t.max
    );
    if (!tier) return null;

    const unitPrice = +(product.basePriceUSD * tier.priceMultiplier).toFixed(2);
    const shipping = pricingConfig.shippingOptions.find(
      (s) => s.method === shippingMethod
    );
    const shippingCost = shipping?.pricePerPieceUSD ?? 0;
    const totalPerUnit = +(unitPrice + shippingCost).toFixed(2);
    const totalCost = +(totalPerUnit * quantity).toFixed(2);

    return {
      unitPrice,
      shippingCost,
      totalPerUnit,
      totalCost,
      tierLabel: tier.label,
      shippingLabel: shipping?.label ?? '',
      shippingDays: shipping?.estimatedDays ?? { min: 0, max: 0 },
    };
  }, [product, quantity, shippingMethod]);

  const handleProductChange = (slug: string) => {
    setSelectedProduct(slug);
    const p = pricingConfig.productTypes.find((pr) => pr.slug === slug);
    if (p) setQuantity(p.moq);
  };

  return (
    <div className="space-y-8">
      {/* Product Selector */}
      <div>
        <label className="block text-sm font-semibold text-[#1B2A4A]">
          Product Type
        </label>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {pricingConfig.productTypes.map((p) => (
            <button
              key={p.slug}
              onClick={() => handleProductChange(p.slug)}
              className={`rounded-xl border-2 p-3 text-left transition ${
                selectedProduct === p.slug
                  ? 'border-[#08CCD4] bg-[#08CCD4]/5'
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <span className="text-sm font-medium text-[#1B2A4A]">{p.name}</span>
              <span className="mt-1 block text-xs text-gray-500">
                From ${p.basePriceUSD.toFixed(2)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity Slider */}
      {product && (
        <div>
          <div className="flex items-center justify-between">
            <label className="text-sm font-semibold text-[#1B2A4A]">
              Quantity
            </label>
            <span className="text-sm text-gray-500">
              MOQ: {product.moq} pcs
            </span>
          </div>
          <div className="mt-3">
            <input
              type="range"
              min={product.moq}
              max={product.maxQuantity}
              step={product.moq <= 100 ? 10 : 50}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full accent-[#08CCD4]"
            />
            <div className="mt-2 flex items-center gap-4">
              <input
                type="number"
                min={product.moq}
                max={product.maxQuantity}
                value={quantity}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  if (val >= product.moq && val <= product.maxQuantity) {
                    setQuantity(val);
                  }
                }}
                className="w-32 rounded-xl border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-[#1B2A4A] outline-none focus:border-[#08CCD4]"
              />
              <span className="text-sm text-gray-500">pieces</span>
            </div>
          </div>
        </div>
      )}

      {/* Shipping Method */}
      <div>
        <label className="block text-sm font-semibold text-[#1B2A4A]">
          Shipping Method
        </label>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {pricingConfig.shippingOptions.map((opt) => (
            <button
              key={opt.method}
              onClick={() => setShippingMethod(opt.method as ShippingMethod)}
              className={`rounded-xl border-2 p-4 text-left transition ${
                shippingMethod === opt.method
                  ? 'border-[#08CCD4] bg-[#08CCD4]/5'
                  : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <span className="text-sm font-medium text-[#1B2A4A]">
                {opt.label}
              </span>
              <span className="mt-1 block text-xs text-gray-500">
                {opt.estimatedDays.min}–{opt.estimatedDays.max} days
              </span>
              <span className="mt-1 block text-xs text-[#08CCD4]">
                +${opt.pricePerPieceUSD.toFixed(2)}/pc
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Product Description */}
      {product && (
        <div className="rounded-xl bg-gray-50 p-4">
          <p className="text-sm text-gray-600">{product.description}</p>
        </div>
      )}

      {/* Price Display */}
      {calculation ? (
        <div className="rounded-2xl border-2 border-[#08CCD4] bg-gradient-to-br from-[#08CCD4]/5 to-white p-6">
          <h3 className="text-lg font-bold text-[#1B2A4A]">Estimated Pricing</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500">Manufacturing / Unit</p>
              <p className="text-xl font-bold text-[#1B2A4A]">
                ${calculation.unitPrice.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Shipping / Unit</p>
              <p className="text-xl font-bold text-[#1B2A4A]">
                ${calculation.shippingCost.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Total Per Unit</p>
              <p className="text-2xl font-bold text-[#08CCD4]">
                ${calculation.totalPerUnit.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500">Total ({quantity.toLocaleString()} pcs)</p>
              <p className="text-2xl font-bold text-[#08CCD4]">
                ${calculation.totalCost.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="mt-4 rounded-lg bg-white p-3 text-xs text-gray-500">
            <p>📦 {calculation.tierLabel} • {calculation.shippingLabel} ({calculation.shippingDays.min}–{calculation.shippingDays.max} days)</p>
          </div>

          {/* CTA */}
          <div className="mt-6">
            <Link
              href="/get-a-quote"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#08CCD4] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#07b8be]"
            >
              Request Exact Quote
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      ) : product ? (
        <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center">
          <p className="text-sm text-gray-500">
            Minimum order is {product.moq} pieces. Please adjust your quantity.
          </p>
        </div>
      ) : null}

      {/* Disclaimer */}
      <p className="text-xs text-gray-400">
        {pricingConfig.disclaimer}
      </p>
    </div>
  );
}
