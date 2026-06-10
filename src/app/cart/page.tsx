"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  CreditCard,
  Mail,
  Minus,
  PackageCheck,
  Plus,
  ShieldCheck,
  Trash2,
  WalletCards,
} from "lucide-react";
import { Bottle } from "@/components/bottle";
import { products, type Product } from "@/data/products";

type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  meta: string;
  detailHref?: string;
  gradient?: string;
  addedAt?: string;
};

type PaymentMethod = "card" | "invoice" | "crypto";

const paymentMethods: Array<{
  id: PaymentMethod;
  title: string;
  detail: string;
}> = [
  {
    id: "card",
    title: "Card",
    detail: "Visa, Mastercard, Amex",
  },
  {
    id: "invoice",
    title: "Invoice",
    detail: "Lab purchasing approval",
  },
  {
    id: "crypto",
    title: "Crypto",
    detail: "USDC and selected assets",
  },
];

const shipping = 0;
const estimatedTaxRate = 0.0825;

function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function getStoredCart() {
  try {
    const cart = JSON.parse(
      window.localStorage.getItem("divineAminosCart") ?? "[]",
    ) as CartItem[];

    return mergeCartItems(
      cart.map(normalizeCartItem).filter((item) => item.id && Number(item.quantity) > 0),
    );
  } catch {
    return [];
  }
}

function mergeCartItems(cart: CartItem[]) {
  const merged = new Map<string, CartItem>();

  cart.forEach((item) => {
    const existing = merged.get(item.id);

    if (existing) {
      merged.set(item.id, {
        ...item,
        quantity: existing.quantity + item.quantity,
      });
    } else {
      merged.set(item.id, item);
    }
  });

  return Array.from(merged.values());
}

function normalizeCartItem(item: CartItem): CartItem {
  if (/glutathione/i.test(item.name)) {
    return {
      ...item,
      id: "glutathione-glutathione",
      slug: "glutathione",
      detailHref: "/peptides/glutathione",
      gradient: item.gradient ?? "linear-gradient(180deg, #FFE7C8 0%, #FFFFFF 100%), #F2F4F6",
    };
  }

  return {
    ...item,
    detailHref: item.detailHref ?? `/peptides/${item.slug}`,
  };
}

function getProductForItem(item: CartItem) {
  return products.find((product) => product.slug === item.slug) ?? products[0];
}

function getPanelGradient(product: Product, override?: string) {
  if (override) {
    return override;
  }

  if (product.slug === "ghk-cu") {
    return "linear-gradient(180deg, #D7FFF9 0%, #FFFFFF 100%)";
  }

  if (product.slug === "bpc-157") {
    return "linear-gradient(180deg, #D3E5FF 0%, #FFFFFF 100%)";
  }

  if (product.slug === "tb-500") {
    return "linear-gradient(180deg, #E6DCF6 0%, #FFFFFF 100%)";
  }

  return "linear-gradient(180deg, #FFE7C8 0%, #FFFFFF 100%)";
}

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>(() =>
    typeof window === "undefined" ? [] : getStoredCart(),
  );
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0,
      ),
    [cart],
  );
  const estimatedTax = subtotal * estimatedTaxRate;
  const total = subtotal + shipping + estimatedTax;
  const itemCount = cart.reduce((totalItems, item) => totalItems + item.quantity, 0);

  function persistCart(nextCart: CartItem[]) {
    setCart(nextCart);
    window.localStorage.setItem("divineAminosCart", JSON.stringify(nextCart));
    window.dispatchEvent(
      new CustomEvent("divine-cart-updated", { detail: nextCart }),
    );
  }

  function updateQuantity(itemId: string, nextQuantity: number) {
    const nextCart = cart
      .map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, nextQuantity) }
          : item,
      )
      .filter((item) => item.quantity > 0);

    persistCart(nextCart);
  }

  function removeItem(itemId: string) {
    persistCart(cart.filter((item) => item.id !== itemId));
  }

  return (
    <section className="bg-white px-8 py-[72px] font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[620px]">
            <p className="text-sm font-medium leading-[130%] tracking-[-0.01em] text-[#777C83]">
              Cart
            </p>
            <h1 className="mt-2 text-5xl font-semibold leading-[125%] tracking-[-0.03em] text-[#1B2537]">
              Research Order
            </h1>
            <p className="mt-2 text-lg font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
              Review quantities, confirm compliance details, and choose a payment
              method before checkout.
            </p>
          </div>

          <Link
            className="flex h-[46px] w-fit items-center justify-center rounded-xl bg-[#E6F3FF] px-6 text-base font-semibold leading-[140%] tracking-[-0.01em] text-[#0B1022]"
            href="/peptides"
          >
            Continue Shopping
          </Link>
        </div>

        {cart.length ? (
          <div className="grid gap-6 lg:grid-cols-[1fr_408px]">
            <div className="flex flex-col gap-4">
              <div className="grid rounded-[32px] border border-[#E2E8F0] bg-white">
                <div className="flex items-center justify-between border-b border-[#E2E8F0] px-6 py-5">
                  <h2 className="text-2xl font-semibold leading-[130%] text-[#1B2537]">
                    Products
                  </h2>
                  <span className="rounded-lg bg-[#F6F8FB] px-3 py-1 text-xs font-semibold leading-[140%] tracking-[-0.01em] text-[#777C83]">
                    {itemCount} {itemCount === 1 ? "item" : "items"}
                  </span>
                </div>

                <div className="divide-y divide-[#E2E8F0]">
                  {cart.map((item) => (
                    <CartLineItem
                      key={item.id}
                      item={item}
      product={getProductForItem(item)}
                      onDecrement={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      onIncrement={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      onRemove={() => removeItem(item.id)}
                    />
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <TrustCard
                  icon={<ShieldCheck size={22} />}
                  title="Verified CoA"
                  text="Every batch keeps its certificate route attached."
                />
                <TrustCard
                  icon={<PackageCheck size={22} />}
                  title="Cold Chain Ready"
                  text="Packaging notes remain visible before checkout."
                />
                <TrustCard
                  icon={<WalletCards size={22} />}
                  title="Flexible Payment"
                  text="Choose card, invoice request, or crypto."
                />
              </div>
            </div>

            <aside className="flex flex-col gap-4">
              <div className="rounded-[32px] border border-[#E2E8F0] bg-[#F6F8FB] p-6">
                <h2 className="text-2xl font-semibold leading-[130%] text-[#1B2537]">
                  Order Summary
                </h2>

                <div className="mt-6 grid gap-3 text-sm font-medium leading-[150%] text-[#777C83]">
                  <SummaryRow label="Subtotal" value={money(subtotal)} />
                  <SummaryRow
                    label="Shipping"
                    value={shipping === 0 ? "Free" : money(shipping)}
                  />
                  <SummaryRow
                    label="Estimated Tax"
                    value={money(estimatedTax)}
                  />
                  <div className="mt-3 flex items-center justify-between border-t border-[#E2E8F0] pt-5 text-2xl font-semibold leading-[130%] text-[#1B2537]">
                    <span>Total</span>
                    <span>{money(total)}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Label>Payment Method</Label>
                  <div className="mt-2 grid gap-2">
                    {paymentMethods.map((method) => (
                      <button
                        key={method.id}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3 text-left transition ${
                          paymentMethod === method.id
                            ? "border-[#6FA8DF] bg-[#E6F3FF]"
                            : "border-transparent bg-white hover:border-[#E2E8F0]"
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                        type="button"
                      >
                        <span>
                          <span className="block text-sm font-semibold text-[#1B2537]">
                            {method.title}
                          </span>
                          <span className="block text-xs font-medium text-[#777C83]">
                            {method.detail}
                          </span>
                        </span>
                        <span
                          className={`grid size-5 place-items-center rounded-full border ${
                            paymentMethod === method.id
                              ? "border-[#6FA8DF]"
                              : "border-[#C6C6CC]"
                          }`}
                        >
                          {paymentMethod === method.id ? (
                            <span className="size-2.5 rounded-full bg-[#6FA8DF]" />
                          ) : null}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 grid gap-3">
                  <Label>Contact Email</Label>
                  <label className="flex h-[46px] items-center gap-2 rounded-xl bg-white px-4">
                    <Mail aria-hidden="true" className="size-5 text-[#999999]" />
                    <input
                      className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#1B2537] outline-none placeholder:text-[#999999]"
                      placeholder="researcher@lab.com"
                      type="email"
                    />
                  </label>
                </div>

                <button
                  className="mt-6 flex h-[46px] w-full items-center justify-center rounded-xl bg-[#1B2537] px-6 text-base font-semibold leading-[140%] tracking-[-0.01em] text-white transition hover:bg-[#253148]"
                  type="button"
                >
                  Review Checkout
                </button>

                <p className="mt-4 rounded-lg bg-[rgba(243,138,93,0.16)] px-3 py-2 text-xs font-semibold leading-[140%] tracking-[-0.01em] text-[#F38A5D]">
                  *Research use only. Checkout must confirm laboratory compliance
                  before payment.
                </p>
              </div>

              <div className="rounded-[24px] bg-[#0B1220] p-6 text-white">
                <div className="flex items-center gap-3">
                  <CreditCard className="size-5 text-[#E6F3FF]" />
                  <h3 className="text-lg font-semibold leading-[140%]">
                    Payment Review
                  </h3>
                </div>
                <p className="mt-3 text-sm font-medium leading-[150%] text-[rgba(226,232,240,0.72)]">
                  This screen prepares the order details. Final processor routing
                  can connect here once the payment provider is selected.
                </p>
              </div>
            </aside>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </section>
  );
}

function CartLineItem({
  item,
  product,
  onDecrement,
  onIncrement,
  onRemove,
}: {
  item: CartItem;
  product: Product;
  onDecrement: () => void;
  onIncrement: () => void;
  onRemove: () => void;
}) {
  return (
    <article className="grid gap-5 p-6 md:grid-cols-[120px_1fr_auto] md:items-center">
      <Link
        aria-label={`View ${item.name} details`}
        className="focus-ring relative grid h-[120px] w-[120px] place-items-center overflow-hidden rounded-2xl border border-[#E2E8F0] transition hover:-translate-y-0.5 hover:border-[#6FA8DF]"
        href={item.detailHref ?? `/peptides/${item.slug}`}
        style={{ background: getPanelGradient(product, item.gradient) }}
      >
        <Bottle
          product={product}
          active={false}
          className="h-[135px] w-[58px] translate-y-5 scale-[1.12]"
        />
      </Link>

      <div className="min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <Link
              className="focus-ring rounded-md text-2xl font-semibold leading-[130%] text-[#1B2537] transition hover:text-[#6FA8DF]"
              href={item.detailHref ?? `/peptides/${item.slug}`}
            >
              {item.name}
            </Link>
            <p className="mt-1 text-sm font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
              {item.meta}
            </p>
            <Link
              className="mt-2 inline-flex text-xs font-bold leading-[140%] tracking-[0.5px] text-[#6FA8DF]"
              href={item.detailHref ?? `/peptides/${item.slug}`}
            >
              View product details
            </Link>
          </div>
          <p className="text-2xl font-semibold leading-[130%] text-[#1B2537] md:hidden">
            {money(item.price * item.quantity)}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-4">
          <div className="flex h-[46px] w-32 items-center justify-between rounded-xl bg-[rgba(226,232,240,0.3)] px-4 text-base font-semibold leading-5 text-[#999999]">
            <button
              aria-label={`Decrease ${item.name} quantity`}
              className="grid size-5 place-items-center transition hover:text-[#1B2537]"
              onClick={onDecrement}
              type="button"
            >
              <Minus size={18} />
            </button>
            <span aria-live="polite">{item.quantity}</span>
            <button
              aria-label={`Increase ${item.name} quantity`}
              className="grid size-5 place-items-center transition hover:text-[#1B2537]"
              onClick={onIncrement}
              type="button"
            >
              <Plus size={18} />
            </button>
          </div>

          <button
            className="flex h-[46px] items-center gap-2 rounded-xl px-3 text-sm font-semibold text-[#777C83] transition hover:bg-[#F6F8FB] hover:text-[#1B2537]"
            onClick={onRemove}
            type="button"
          >
            <Trash2 size={16} />
            Remove
          </button>
        </div>
      </div>

      <div className="hidden min-w-[120px] text-right md:block">
        <p className="text-sm font-medium leading-[150%] text-[#777C83]">
          {money(item.price)} each
        </p>
        <p className="mt-1 text-2xl font-semibold leading-[130%] text-[#1B2537]">
          {money(item.price * item.quantity)}
        </p>
      </div>
    </article>
  );
}

function EmptyCart() {
  return (
    <div className="grid min-h-[420px] place-items-center rounded-[32px] border border-[#E2E8F0] bg-[#F6F8FB] p-8 text-center">
      <div className="max-w-[480px]">
        <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-[#E6F3FF] text-[#1B2537]">
          <PackageCheck size={28} />
        </div>
        <h2 className="mt-6 text-[32px] font-semibold leading-[120%] tracking-[-0.02em] text-[#1B2537]">
          Your cart is empty
        </h2>
        <p className="mt-3 text-lg font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
          Add verified research peptides to prepare an order summary here.
        </p>
        <Link
          className="mt-6 inline-flex h-[46px] items-center justify-center rounded-xl bg-[#1B2537] px-6 text-base font-semibold leading-[140%] tracking-[-0.01em] text-white"
          href="/peptides"
        >
          Browse Peptides
        </Link>
      </div>
    </div>
  );
}

function TrustCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5">
      <div className="text-[#6FA8DF]">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold leading-[140%] text-[#1B2537]">
        {title}
      </h3>
      <p className="mt-1 text-sm font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
        {text}
      </p>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <span>{label}</span>
      <span className="text-[#1B2537]">{value}</span>
    </div>
  );
}

function Label({ children }: { children: string }) {
  return (
    <span className="text-xs font-semibold uppercase leading-[14px] tracking-[0.1px] text-[rgba(69,71,76,0.7)]">
      {children}
    </span>
  );
}
