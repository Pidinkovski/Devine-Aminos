"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { Product } from "@/data/products";

type StoredCartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  meta: string;
  detailHref: string;
  gradient: string;
  addedAt: string;
};

function optionId(option: string) {
  return option.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function ProductDetailCartActions({ product }: { product: Product }) {
  const [selectedOption, setSelectedOption] = useState(product.dosage[0] ?? "Research vial");
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  function addToCart() {
    const savedCart = JSON.parse(
      window.localStorage.getItem("divineAminosCart") ?? "[]",
    ) as StoredCartItem[];
    const cartId = `${product.slug}-${optionId(selectedOption)}`;
    const existingIndex = savedCart.findIndex((item) => item.id === cartId);
    const nextCart = [...savedCart];

    if (existingIndex >= 0) {
      nextCart[existingIndex] = {
        ...nextCart[existingIndex],
        quantity: nextCart[existingIndex].quantity + quantity,
        addedAt: new Date().toISOString(),
      };
    } else {
      nextCart.push({
        id: cartId,
        slug: product.slug,
        name: `${product.name} ${selectedOption}`,
        price: product.price,
        quantity,
        meta: `Purity: >99% | ${selectedOption}`,
        detailHref: `/peptides/${product.slug}`,
        gradient: product.bg,
        addedAt: new Date().toISOString(),
      });
    }

    window.localStorage.setItem("divineAminosCart", JSON.stringify(nextCart));
    window.dispatchEvent(new CustomEvent("divine-cart-updated", { detail: nextCart }));
    setMessage(`${quantity} ${quantity === 1 ? "item" : "items"} added to cart`);
  }

  return (
    <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
        Vial Type
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {product.dosage.map((option) => (
          <button
            key={option}
            aria-pressed={selectedOption === option}
            className={`focus-ring rounded-md border px-4 py-3 text-sm font-bold transition ${
              selectedOption === option
                ? "border-slate-950 bg-white text-slate-950"
                : "border-slate-200 bg-white text-slate-700 hover:border-slate-950"
            }`}
            onClick={() => {
              setSelectedOption(option);
              setMessage("");
            }}
            type="button"
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-3xl font-black text-slate-950">${product.price}</p>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            {selectedOption}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
              Quantity
            </p>
            <div className="flex h-[46px] w-32 items-center justify-between rounded-xl bg-white px-4 text-base font-semibold leading-5 text-slate-500">
              <button
                aria-label="Decrease quantity"
                className="grid size-5 place-items-center transition hover:text-slate-950 disabled:opacity-40"
                disabled={quantity === 1}
                onClick={() => {
                  setQuantity((current) => Math.max(1, current - 1));
                  setMessage("");
                }}
                type="button"
              >
                <Minus size={18} />
              </button>
              <span aria-live="polite">{quantity}</span>
              <button
                aria-label="Increase quantity"
                className="grid size-5 place-items-center transition hover:text-slate-950"
                onClick={() => {
                  setQuantity((current) => current + 1);
                  setMessage("");
                }}
                type="button"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          <button
            className="focus-ring h-[46px] rounded-xl bg-slate-950 px-6 text-sm font-bold text-white transition hover:bg-slate-800"
            onClick={addToCart}
            type="button"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {message ? (
        <p className="mt-4 text-sm font-bold text-emerald-600">{message}</p>
      ) : null}
    </div>
  );
}
