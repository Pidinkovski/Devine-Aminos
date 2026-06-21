"use client";

import Link from "next/link";
import { useState } from "react";
import { Bottle } from "@/components/bottle";
import type { Product } from "@/data/products";

type CartItem = {
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

type ProductDetailViewProps = {
  product: Product;
  relatedProducts: Product[];
};

function displayPrice(product: Product) {
  if (product.slug === "bpc-157") return 45;
  if (product.slug === "ghk-cu") return 55;
  if (product.slug === "glutathione") return 35;
  return product.price;
}

function displayMeta(product: Product) {
  if (product.slug === "bpc-157") return "Purity: >99% | 5mg Vial";
  if (product.slug === "ghk-cu") return "Purity: >99% | 10mg Vial";
  if (product.slug === "glutathione") return "Purity: >99% | 200mg Vial";
  return `Purity: >99% | ${product.dosage[0] ?? "Research vial"}`;
}

function displayTitle(product: Product) {
  return product.slug === "bpc-157" ? "BPC-157 5MG" : product.name;
}

function panelGradient(product: Product) {
  if (product.slug === "ghk-cu") return "linear-gradient(180deg, #D7FFF9 0%, #FFFFFF 100%)";
  if (product.slug === "glutathione") {
    return "linear-gradient(180deg, #FFE7C8 0%, #FFFFFF 100%), #F2F4F6";
  }
  if (product.slug === "tb-500") return "linear-gradient(180deg, #E6DCF6 0%, #FFFFFF 100%)";
  return "linear-gradient(180deg, #D3E5FF 0%, #FFFFFF 100%), #F2F4F6";
}

function badgeStyle(product: Product) {
  if (product.slug === "glutathione") {
    return {
      background: "rgba(243, 138, 93, 0.2)",
      color: "#F38A5D",
      label: "Repair",
    };
  }

  if (product.slug === "ghk-cu") {
    return {
      background: "rgba(112, 211, 182, 0.3)",
      color: "#64B19A",
      label: "Repair",
    };
  }

  return {
    background: "rgba(111, 168, 223, 0.3)",
    color: "#6FA8DF",
    label: "Repair",
  };
}

function cartId(product: Product) {
  return `${product.slug}-${displayTitle(product).toLowerCase().replace(/\s+/g, "-")}`;
}

export function ProductDetailView({ product, relatedProducts }: ProductDetailViewProps) {
  const title = displayTitle(product);
  const price = displayPrice(product);
  const meta = displayMeta(product);
  const badge = badgeStyle(product);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("");

  function updateQuantity(nextQuantity: number) {
    setCartMessage("");
    setQuantity(Math.max(1, nextQuantity));
  }

  function addToCart() {
    const savedCart = JSON.parse(
      window.localStorage.getItem("divineAminosCart") ?? "[]",
    ) as CartItem[];
    const id = cartId(product);
    const existingIndex = savedCart.findIndex((item) => item.id === id);
    const nextCart = [...savedCart];

    if (existingIndex >= 0) {
      nextCart[existingIndex] = {
        ...nextCart[existingIndex],
        quantity: nextCart[existingIndex].quantity + quantity,
        addedAt: new Date().toISOString(),
      };
    } else {
      nextCart.push({
        id,
        slug: product.slug,
        name: title,
        price,
        quantity,
        meta,
        detailHref: `/peptides/${product.slug}`,
        gradient: panelGradient(product),
        addedAt: new Date().toISOString(),
      });
    }

    window.localStorage.setItem("divineAminosCart", JSON.stringify(nextCart));
    window.dispatchEvent(new CustomEvent("divine-cart-updated", { detail: nextCart }));
    setCartMessage(`${quantity} ${quantity === 1 ? "item" : "items"} added to cart`);
  }

  return (
    <section className="flex min-h-[2076.62px] flex-col items-center bg-white px-8 py-[72px] font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="flex min-h-[1932.62px] w-full max-w-[1280px] flex-col items-center gap-10 px-0 lg:px-[100px]">
        <div className="flex min-h-[663.91px] w-full max-w-[1080px] flex-col items-start gap-6">
          <div className="flex h-[27px] w-full items-center justify-between gap-8 pl-2">
            <div className="flex items-center gap-2 text-sm font-medium leading-[14px] text-[#45474C]">
              <Link href="/">Home</Link>
              <ChevronRightIcon />
              <Link href="/peptides">Shop</Link>
              <ChevronRightIcon />
              <span className="rounded bg-[#F6F8FB] px-2 py-1.5 text-[#999999]">
                {title}
              </span>
            </div>

            <span className="rounded-lg bg-[rgba(243,138,93,0.3)] px-3 py-1 text-xs font-semibold leading-[140%] tracking-[-0.01em] text-[#F38A5D]">
              *Research use only disclaimer
            </span>
          </div>

          <div className="grid w-full gap-[96px] lg:h-[612.91px] lg:grid-cols-[508px_475px] lg:items-center">
            <div className="flex w-full flex-col gap-5">
              <ProductImagePanel
                product={product}
                className="h-[502px] rounded-[32px] border"
                large
                variantIndex={selectedImageIndex}
              />
              <div className="flex h-[90.91px] gap-2.5">
                {[0, 1, 2].map((index) => (
                  <button
                    key={index}
                    aria-label={`Show ${title} image ${index + 1}`}
                    aria-pressed={selectedImageIndex === index}
                    className={`grid h-[90.91px] w-[92px] place-items-center overflow-hidden rounded-xl border transition ${
                      selectedImageIndex === index
                        ? "border-[#6FA8DF] ring-2 ring-[#E6F3FF]"
                        : "border-[#E2E8F0] hover:border-[#6FA8DF]/70"
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                    style={{ background: panelGradient(product) }}
                    type="button"
                  >
                    <Bottle
                      product={product}
                      active={false}
                      className={getBottleVariantClass(index, true)}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex min-h-[612.91px] w-full flex-col justify-center gap-12">
              <div className="flex flex-col gap-2">
                <span
                  className="flex h-[25px] w-fit items-center rounded-lg px-3 py-1 text-xs font-semibold leading-[140%] tracking-[-0.01em]"
                  style={{ background: badge.background, color: badge.color }}
                >
                  {badge.label}
                </span>
                <h1 className="text-5xl font-semibold leading-[125%] tracking-[-0.03em] text-[#1B2537]">
                  {title}
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <StarIcon key={star} filled={star < 4} />
                    ))}
                  </div>
                  <span className="text-xs font-medium leading-[14px] text-[#45474C]">
                    (12 reviews)
                  </span>
                </div>
                <p className="text-2xl font-bold leading-[31px] text-[#1B2537]">
                  ${price.toFixed(2)}
                </p>
              </div>

              <div className="flex flex-col gap-[23px]">
                <div className="flex flex-col gap-1">
                  <Label>Vial Type</Label>
                  <button
                    className="flex h-12 w-[295px] items-center gap-4 rounded-xl bg-[rgba(226,232,240,0.3)] px-4 pb-3.5 pt-3 text-base font-semibold leading-5 text-[#999999]"
                    type="button"
                  >
                    Research Grade (Lyophilized)
                    <CircleChevronDownIcon size="large" />
                  </button>
                </div>

                <div className="flex flex-col gap-1">
                  <Label>Quantity</Label>
                  <div className="flex h-[46px] w-32 items-center justify-between rounded-xl bg-[rgba(226,232,240,0.3)] px-4 pb-3.5 pt-3 text-base font-semibold leading-5 text-[#999999]">
                    <button
                      aria-label="Decrease quantity"
                      className="grid size-5 place-items-center transition hover:text-[#1B2537] disabled:opacity-40"
                      disabled={quantity === 1}
                      onClick={() => updateQuantity(quantity - 1)}
                      type="button"
                    >
                      <MinusIcon />
                    </button>
                    <span aria-live="polite">{quantity}</span>
                    <button
                      aria-label="Increase quantity"
                      className="grid size-5 place-items-center transition hover:text-[#1B2537]"
                      onClick={() => updateQuantity(quantity + 1)}
                      type="button"
                    >
                      <PlusIcon />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  className="h-[46px] w-full rounded-xl bg-[#1B2537] px-6 py-3 text-base font-semibold leading-[140%] tracking-[-0.01em] text-white"
                  onClick={addToCart}
                  type="button"
                >
                  Add to Cart
                </button>
                {cartMessage ? (
                  <p className="text-center text-sm font-semibold text-[#64B19A]">
                    {cartMessage}
                  </p>
                ) : null}
                <a
                  className="flex h-5 items-center justify-center gap-2 text-sm font-bold leading-[17px] tracking-[0.7px] text-[#6FA8DF]"
                  href={product.coaUrl}
                >
                  <PdfIcon />
                  Download CoA PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-[565.01px] w-full max-w-[1080px] flex-col items-start gap-11 border-t border-[#E2E8F0] pt-11">
          <div className="flex w-full flex-col items-start gap-6">
            <div className="flex gap-6 pb-2">
              {["Description", "Research Info", "Shipping Details"].map((tab, index) => (
                <button
                  key={tab}
                  className={`px-2 pb-2 text-sm font-bold leading-[17px] tracking-[0.7px] ${
                    index === 0
                      ? "border-b-2 border-[#0B1220] text-[#0B1220]"
                      : "text-[#45474C]"
                  }`}
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex max-w-[768px] flex-col gap-4 text-lg font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
              <p>
                BPC-157 (Body Protection Compound-157) is a pentadecapeptide composed of
                15 amino acids. It is a partial sequence of body protection compound
                (BPC) that is discovered in and isolated from human gastric juice.
              </p>
              <p>
                In laboratory studies, BPC-157 has demonstrated significant potential in
                promoting tissue repair, particularly in tendons, ligaments, and the
                gastrointestinal tract. Research models indicate it may accelerate
                angiogenesis and modulate the inflammatory response.
              </p>
            </div>
          </div>

          <div className="relative flex min-h-[239.01px] w-full flex-col gap-8 overflow-hidden rounded-2xl bg-[#0B1220] p-12 text-white md:flex-row md:items-center md:justify-between">
            <div className="absolute inset-0 bg-[linear-gradient(270deg,#DCE2F6_0%,#006BB2_100%)] opacity-10" />
            <div className="relative z-10 max-w-[672px]">
              <h2 className="text-[32px] font-semibold leading-[120%] tracking-[-0.32px]">
                Regulatory Compliance
              </h2>
              <p className="mt-2 text-[13.8399px] font-medium leading-[150%] text-[rgba(226,232,240,0.8)]">
                All compounds synthesized and distributed by Divine Atmos are strictly
                for in-vitro and laboratory research purposes. They are not approved
                for human or animal diagnostic, therapeutic, or clinical use.
                Researchers must operate within established safety guidelines and
                institutional compliance protocols.
              </p>
            </div>
            <button
              className="relative z-10 h-[50px] w-[233px] rounded-2xl bg-white px-6 py-3 text-base font-medium leading-6 text-[#0B1220] shadow-[0_4px_12px_rgba(11,18,32,0.15)]"
              type="button"
            >
              Review Terms of Service
            </button>
          </div>
        </div>

        <div className="flex min-h-[623.7px] w-full max-w-[1080px] flex-col items-start gap-10 border-t border-[#E2E8F0] pt-11">
          <h2 className="w-full text-center text-5xl font-semibold leading-[125%] tracking-[-0.03em] text-[#1B2537]">
            You may also like
          </h2>
          <div className="grid w-full gap-6 lg:grid-cols-[repeat(3,344px)]">
            {relatedProducts.map((related) => (
              <RelatedProductCard key={related.slug} product={related} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductImagePanel({
  product,
  className,
  large = false,
  variantIndex = 0,
}: {
  product: Product;
  className: string;
  large?: boolean;
  variantIndex?: number;
}) {
  return (
    <div
      className={`relative grid w-full flex-none place-items-center overflow-hidden border-[#E2E8F0] ${className}`}
      style={{ background: panelGradient(product) }}
    >
      <Bottle
        product={product}
        active={false}
        imageFit={large ? "detail" : "figma-card"}
        className={large ? getBottleVariantClass(variantIndex) : ""}
      />
    </div>
  );
}

function RelatedProductCard({ product }: { product: Product }) {
  const price = displayPrice(product);

  return (
    <article className="isolate flex h-[478.7px] min-w-0 flex-col items-start overflow-hidden rounded-[32px] border border-[#E2E8F0] bg-white">
      <ProductImagePanel product={product} className="h-[294.5px]" />
      <div className="flex h-[182.19px] w-full flex-col items-start p-6">
        <div className="relative h-[39.19px] w-full">
          <div className="absolute inset-x-0 top-[-1px] flex h-8 items-start justify-between gap-6">
            <h3 className="flex min-w-0 flex-1 items-center text-2xl font-semibold leading-[31px] text-[#1B2537]">
              {product.name}
            </h3>
            <p className="flex w-[88.5px] items-center justify-end text-2xl font-semibold leading-[31px] text-[#1B2537]">
              ${price.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex h-[51px] w-full flex-col items-start pb-6">
          <p className="h-[27px] w-full text-lg font-normal leading-[150%] text-[rgba(27,37,55,0.45)]">
            {displayMeta(product)}
          </p>
        </div>
        <Link
          className="flex h-11 w-full items-center justify-center rounded-xl bg-[#E6F3FF] px-6 pb-3 pt-2.5 text-base font-semibold leading-[140%] tracking-[-0.01em] text-[#0B1022]"
          href={`/peptides/${product.slug}`}
        >
          View Details
        </Link>
      </div>
    </article>
  );
}

function getBottleVariantClass(index: number, thumbnail = false) {
  if (thumbnail) {
    return [
      "h-[108px] w-[46px] translate-y-8 rotate-0 scale-[0.9]",
      "h-[92px] w-[40px] translate-y-4 rotate-0 scale-[0.86]",
      "h-[88px] w-[38px] translate-x-1 translate-y-3 rotate-[44deg] scale-[0.82]",
    ][index] ?? "h-[108px] w-[46px] translate-y-8 rotate-0 scale-[0.9]";
  }

  return [
    "h-[420px] w-[180px] translate-y-16 rotate-0 scale-[1.2]",
    "h-[330px] w-[142px] translate-y-8 rotate-0 scale-[1.04]",
    "h-[300px] w-[130px] translate-x-4 translate-y-5 rotate-[44deg] scale-[0.98]",
  ][index] ?? "h-[420px] w-[180px] translate-y-16 rotate-0 scale-[1.2]";
}

function Label({ children }: { children: string }) {
  return (
    <span className="text-xs font-semibold uppercase leading-[14px] tracking-[0.1px] text-[rgba(69,71,76,0.7)]">
      {children}
    </span>
  );
}

function ChevronRightIcon() {
  return (
    <svg aria-hidden="true" className="h-2 w-[4.93px]" fill="none" viewBox="0 0 5 8">
      <path d="m.7.7 3.1 3.3L.7 7.3" stroke="#45474C" strokeWidth="1.2" />
    </svg>
  );
}

function CircleChevronDownIcon({ size = "small" }: { size?: "small" | "large" }) {
  return (
    <svg
      aria-hidden="true"
      className={`${size === "large" ? "size-[22px]" : "size-4"} shrink-0`}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 1.6a6.4 6.4 0 1 0 0 12.8A6.4 6.4 0 0 0 8 1.6Zm0 8.6L4.9 7.1l.9-.9L8 8.4l2.2-2.2.9.9L8 10.2Z"
        fill="#999999"
      />
    </svg>
  );
}

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path
        d="m10 2.4 2.3 4.7 5.2.8-3.8 3.7.9 5.2-4.6-2.4-4.6 2.4.9-5.2-3.8-3.7 5.2-.8L10 2.4Z"
        fill={filled ? "#F9D94A" : "#C6C6CC"}
      />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path d="M6 10h8" stroke="#999999" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path d="M10 5v10M5 10h10" stroke="#999999" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path
        d="M6 3h6l3 3v11H6V3Zm6 0v4h3M8 12h4M8 15h3"
        stroke="#6FA8DF"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
