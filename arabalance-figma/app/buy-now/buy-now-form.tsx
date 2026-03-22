"use client";

import Image from "next/image";
import {
  Check,
  CreditCard,
  Lock,
  Minus,
  Plus,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";

const UNIT = 89.9;
const SHIPPING = 10;

const packs = {
  trial: { boxes: 1, discount: 0, label: "Trial Pack", short: "Trial" },
  value: {
    boxes: 3,
    discount: 0.15,
    label: "Value Pack",
    short: "Value",
    badge: "Best Seller",
  },
  family: { boxes: 6, discount: 0.25, label: "Family Pack", short: "Family" },
} as const;

type PackKey = keyof typeof packs;

function packPrice(key: PackKey) {
  const p = packs[key];
  return UNIT * p.boxes * (1 - p.discount);
}

export function BuyNowForm() {
  const [pack, setPack] = useState<PackKey>("value");
  const [qty, setQty] = useState(1);

  const selected = packs[pack];
  const lineTotal = packPrice(pack) * qty;
  const discountAmount =
    selected.discount > 0
      ? UNIT * selected.boxes * selected.discount * qty
      : 0;
  const total = lineTotal + SHIPPING;

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold text-gray-900">
          Complete Your Order
        </h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                Choose Your Pack
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <button
                  type="button"
                  onClick={() => setPack("trial")}
                  className={`relative cursor-pointer rounded-3xl border-2 p-6 text-left transition-all ${
                    pack === "trial"
                      ? "border-[#4CAF50] bg-[#4CAF50]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {packs.trial.short}
                  </h3>
                  <p className="mb-2 text-3xl font-bold text-[#1A504F]">
                    RM {UNIT.toFixed(2)}
                  </p>
                  <p className="mb-4 text-gray-600">1 Box</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4CAF50]" />
                      21 sachets
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4CAF50]" />
                      3 weeks supply
                    </li>
                  </ul>
                </button>

                <button
                  type="button"
                  onClick={() => setPack("value")}
                  className={`relative cursor-pointer rounded-3xl border-2 p-6 text-left transition-all ${
                    pack === "value"
                      ? "border-[#4CAF50] bg-[#4CAF50]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#4CAF50] px-4 py-1 text-sm font-semibold text-white">
                    Best Seller
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {packs.value.short}
                  </h3>
                  <p className="mb-1 text-3xl font-bold text-[#1A504F]">
                    RM {packPrice("value").toFixed(2)}
                  </p>
                  {pack === "value" && (
                    <p className="mb-2 text-sm text-gray-500 line-through">
                      RM {(UNIT * 3).toFixed(2)}
                    </p>
                  )}
                  <p className="mb-4 text-gray-600">3 Boxes · Save 15%</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4CAF50]" />
                      63 sachets
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4CAF50]" />
                      9 weeks supply
                    </li>
                  </ul>
                </button>

                <button
                  type="button"
                  onClick={() => setPack("family")}
                  className={`relative cursor-pointer rounded-3xl border-2 p-6 text-left transition-all ${
                    pack === "family"
                      ? "border-[#4CAF50] bg-[#4CAF50]/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {packs.family.short}
                  </h3>
                  <p className="mb-1 text-3xl font-bold text-[#1A504F]">
                    RM {packPrice("family").toFixed(2)}
                  </p>
                  {pack === "family" && (
                    <p className="mb-2 text-sm text-gray-500 line-through">
                      RM {(UNIT * 6).toFixed(2)}
                    </p>
                  )}
                  <p className="mb-4 text-gray-600">6 Boxes · Save 25%</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4CAF50]" />
                      126 sachets
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#4CAF50]" />
                      18 weeks supply
                    </li>
                  </ul>
                </button>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                Your Cart
              </h2>
              <div className="flex flex-col gap-6 border-b border-gray-200 pb-6 sm:flex-row sm:items-center">
                <Image
                  src="/images/product-box.jpg"
                  alt="AraBalance"
                  width={96}
                  height={96}
                  className="h-24 w-24 object-contain"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900">
                    AraBalance — {selected.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selected.boxes} Box(es)
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 transition-colors hover:border-[#1A504F]"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-semibold">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 transition-colors hover:border-[#1A504F]"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    RM {(packPrice(pack) * qty).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-[#1A504F] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+60 12 345 6789"
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-[#1A504F] focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-[#1A504F] focus:outline-none"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm text-gray-700">
                    Shipping Address
                  </label>
                  <textarea
                    placeholder="Enter your complete address"
                    rows={3}
                    className="w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-[#1A504F] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-3xl bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900">
                Order Summary
              </h2>
              <div className="space-y-4 border-b border-gray-200 pb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>RM {lineTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span>RM {SHIPPING.toFixed(2)}</span>
                </div>
                {selected.discount > 0 && (
                  <div className="flex justify-between text-[#4CAF50]">
                    <span>Discount ({(selected.discount * 100).toFixed(0)}%)</span>
                    <span>-RM {discountAmount.toFixed(2)}</span>
                  </div>
                )}
              </div>
              <div className="mt-6 mb-6 flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span>RM {total.toFixed(2)}</span>
              </div>
              <button
                type="button"
                className="mb-4 flex w-full items-center justify-center gap-2 rounded-3xl bg-[#1A504F] py-4 text-white transition-colors hover:bg-[#143d3c]"
              >
                <ShoppingCart className="h-5 w-5" />
                Complete Purchase
              </button>
              <div className="space-y-3 border-t border-gray-200 pt-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Lock className="h-4 w-4 text-[#4CAF50]" aria-hidden />
                  Secure 256-bit SSL encryption
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6 text-gray-400" aria-hidden />
                  <span className="text-sm text-gray-600">We accept:</span>
                </div>
                <div className="flex gap-3">
                  <div className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700">
                    VISA
                  </div>
                  <div className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-semibold text-gray-700">
                    MASTERCARD
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
