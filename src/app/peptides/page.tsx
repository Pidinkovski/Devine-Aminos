"use client";

import { useState } from "react";
import { Bottle } from "@/components/bottle";
import { HomeFaq } from "@/components/home-faq";
import { products, type Product } from "@/data/products";

type ProductListingCard = {
  product: Product;
  name: string;
  price: string;
  meta: string;
  gradient: string;
  badge?: {
    label: string;
    background: string;
    color: string;
  };
  bottleClassName: string;
};

const ghk = products.find((product) => product.slug === "ghk-cu")!;
const orange = products.find((product) => product.slug === "bpc-157")!;
const blue = products.find((product) => product.slug === "cjc-1295")!;

const listingProducts: ProductListingCard[] = [
  {
    product: ghk,
    name: "GHK-CU",
    price: "$55.00",
    meta: "Purity: >99% | 10mg Vial",
    gradient: "linear-gradient(180deg, #D7FFF9 0%, #FFFFFF 100%)",
    badge: { label: "Repair", background: "rgba(112, 211, 182, 0.3)", color: "#64B19A" },
    bottleClassName: "h-[250px] w-[108px] translate-y-7 rotate-0 scale-[1.12]",
  },
  {
    product: orange,
    name: "Glutathione",
    price: "$35.00",
    meta: "Purity: >99% | 200mg Vial",
    gradient: "linear-gradient(180deg, #FFE7C8 0%, #FFFFFF 100%), #F2F4F6",
    badge: { label: "Repair", background: "rgba(243, 138, 93, 0.2)", color: "#F38A5D" },
    bottleClassName: "h-[244px] w-[104px] translate-y-8 rotate-0 scale-[1.08]",
  },
  ...Array.from({ length: 4 }, () => ({
    product: blue,
    name: "BPC-157",
    price: "$45.00",
    meta: "Purity: >99% | 5mg Vial",
    gradient: "linear-gradient(180deg, #D3E5FF 0%, #FFFFFF 100%), #F2F4F6",
    bottleClassName: "h-[254px] w-[110px] translate-y-7 rotate-0 scale-[1.16]",
  })),
];

const filters = ["All", "Repair", "Performance", "Longevity"];

export default function PeptidesPage() {
  const [selectedProduct, setSelectedProduct] = useState<ProductListingCard | null>(null);

  return (
    <>
      <section className="flex flex-col items-center bg-white px-8 py-[72px] font-[family-name:var(--font-plus-jakarta-sans)]">
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-10">
          <div className="flex w-full flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="flex w-[521px] max-w-full flex-col items-start">
              <h1 className="text-5xl font-semibold leading-[125%] tracking-[-0.03em] text-[#1B2537]">
                Peptides
              </h1>
              <p className="mt-1 max-w-[521px] text-lg font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
                Every peptide verified. Every batch recorded.
                <br />
                Select any vial to view purity data, batch details, and its COA.
              </p>
            </div>
          </div>

          <div className="flex h-auto w-full flex-col gap-4 md:h-[35px] md:flex-row md:items-end md:justify-between">
            <div className="flex flex-wrap items-start gap-2">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  className={`flex h-[35px] items-center justify-center rounded-xl px-4 py-2.5 text-xs font-semibold leading-[15px] ${
                    index === 0
                      ? "bg-[#E6F3FF] text-[#1B2537]"
                      : "bg-[rgba(226,232,240,0.3)] text-[#999999]"
                  }`}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>

            <button
              className="flex h-[35px] w-[129px] items-center justify-center gap-1 rounded-xl bg-[rgba(226,232,240,0.3)] px-4 py-2.5 text-xs font-semibold leading-[15px] text-[#999999]"
              type="button"
            >
              Most Popular
              <CircleChevronDownIcon />
            </button>
          </div>

          <div className="grid w-full gap-x-5 gap-y-[14px] md:grid-cols-2 xl:grid-cols-3">
            {listingProducts.map((item, index) => (
              <ProductListingCard
                key={`${item.name}-${index}`}
                item={item}
                onViewDetails={() => setSelectedProduct(item)}
              />
            ))}
          </div>
        </div>
      </section>

      <HomeFaq />

      {selectedProduct ? (
        <ProductDetailsModal
          item={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onSelectRelated={setSelectedProduct}
        />
      ) : null}
    </>
  );
}

function ProductListingCard({
  item,
  onViewDetails,
}: {
  item: ProductListingCard;
  onViewDetails: () => void;
}) {
  return (
    <article className="isolate flex h-[478.7px] min-w-0 flex-col items-start overflow-hidden rounded-[32px] border border-[#E2E8F0] bg-white">
      <ProductImagePanel item={item} className="h-[294.5px]" />

      <div className="flex h-[182.19px] w-full flex-col items-start p-6">
        <ProductTitleRow item={item} titleWidth="flex-1" />
        <div className="flex h-[51px] w-full flex-col items-start pb-6">
          <p className="h-[27px] w-full text-lg font-normal leading-[150%] text-[rgba(27,37,55,0.45)]">
            {item.meta}
          </p>
        </div>

        <button
          className="flex h-11 w-full items-center justify-center rounded-xl bg-[#E6F3FF] px-6 pb-3 pt-2.5 text-base font-semibold leading-[140%] tracking-[-0.01em] text-[#0B1022]"
          onClick={onViewDetails}
          type="button"
        >
          View Details
        </button>
      </div>
    </article>
  );
}

function ProductDetailsModal({
  item,
  onClose,
  onSelectRelated,
}: {
  item: ProductListingCard;
  onClose: () => void;
  onSelectRelated: (item: ProductListingCard) => void;
}) {
  const title = item.name === "BPC-157" ? "BPC-157 5MG" : item.name;

  return (
    <div
      className="fixed inset-0 z-[80] overflow-y-auto bg-[#0B1220]/55 px-5 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} details`}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col rounded-[32px] bg-white p-8 font-[family-name:var(--font-plus-jakarta-sans)] shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 pl-2 text-sm font-medium leading-[14px] text-[#45474C]">
            <span>Home</span>
            <ChevronRightIcon />
            <span>Shop</span>
            <ChevronRightIcon />
            <span className="rounded bg-[#F6F8FB] px-2 py-1.5 text-[#999999]">{title}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="rounded-lg bg-[rgba(243,138,93,0.3)] px-3 py-1 text-xs font-semibold leading-[140%] tracking-[-0.01em] text-[#F38A5D]">
              *Research use only disclaimer
            </span>
            <button
              className="grid size-9 place-items-center rounded-full bg-[#F6F8FB] text-[#1B2537]"
              onClick={onClose}
              type="button"
              aria-label="Close product details"
            >
              ×
            </button>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[508px_1fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <ProductImagePanel item={item} className="h-[502px] rounded-[32px] border" large />
            <div className="flex h-[90.91px] gap-2.5">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className="grid h-[90.91px] w-[92px] place-items-center overflow-hidden rounded-xl border border-[#E2E8F0]"
                  style={{ background: item.gradient }}
                >
                  <Bottle
                    product={item.product}
                    active={false}
                    className={`h-[92px] w-[40px] rotate-0 scale-[0.88] ${
                      index === 2 ? "rotate-[44deg]" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-h-[612px] flex-col justify-center gap-12">
            <div className="flex flex-col gap-2">
              <span className="flex h-[25px] w-fit items-center rounded-lg bg-[rgba(111,168,223,0.3)] px-3 py-1 text-xs font-semibold leading-[140%] tracking-[-0.01em] text-[#6FA8DF]">
                Repair
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
              <p className="text-2xl font-bold leading-[31px] text-[#1B2537]">$65.00</p>
            </div>

            <div className="flex flex-col gap-[23px]">
              <div className="flex flex-col gap-1">
                <Label>Vial Type</Label>
                <button className="flex h-12 w-[295px] items-center gap-4 rounded-xl bg-[rgba(226,232,240,0.3)] px-4 pb-3.5 pt-3 text-base font-semibold leading-5 text-[#999999]" type="button">
                  Research Grade (Lyophilized)
                  <CircleChevronDownIcon size="large" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                <Label>Quantity</Label>
                <div className="flex h-[46px] w-32 items-center justify-between rounded-xl bg-[rgba(226,232,240,0.3)] px-4 pb-3.5 pt-3 text-base font-semibold leading-5 text-[#999999]">
                  <MinusIcon />
                  <span>1</span>
                  <PlusIcon />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button className="h-[46px] w-full rounded-xl bg-[#1B2537] px-6 py-3 text-base font-semibold leading-[140%] tracking-[-0.01em] text-white" type="button">
                Add to Cart
              </button>
              <a className="flex h-5 items-center justify-center gap-2 text-sm font-bold leading-[17px] tracking-[0.7px] text-[#6FA8DF]" href={item.product.coaUrl}>
                <PdfIcon />
                Download CoA PDF
              </a>
            </div>
          </div>
        </div>

        <div className="mt-11 border-t border-[#E2E8F0] pt-11">
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

          <div className="mt-6 flex max-w-[768px] flex-col gap-4 text-lg font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
            <p>
              BPC-157 (Body Protection Compound-157) is a pentadecapeptide composed of
              15 amino acids. It is a partial sequence of body protection compound
              that is discovered in and isolated from human gastric juice.
            </p>
            <p>
              In laboratory studies, BPC-157 has demonstrated significant potential
              in promoting tissue repair, particularly in tendons, ligaments, and the
              gastrointestinal tract. Research models indicate it may accelerate
              angiogenesis and modulate the inflammatory response.
            </p>
          </div>
        </div>

        <div className="relative mt-11 flex flex-col gap-8 overflow-hidden rounded-2xl bg-[#0B1220] p-12 text-white md:flex-row md:items-center md:justify-between">
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
          <button className="relative z-10 h-[50px] w-[233px] rounded-2xl bg-white px-6 py-3 text-base font-medium leading-6 text-[#0B1220] shadow-[0_4px_12px_rgba(11,18,32,0.15)]" type="button">
            Review Terms of Service
          </button>
        </div>

        <div className="mt-11 border-t border-[#E2E8F0] pt-11">
          <h2 className="text-center text-5xl font-semibold leading-[125%] tracking-[-0.03em] text-[#1B2537]">
            You may also like
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {listingProducts.slice(0, 3).map((related, index) => (
              <RelatedCard
                key={`${related.name}-related-${index}`}
                item={related}
                onClick={() => onSelectRelated(related)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductImagePanel({
  item,
  className,
  large = false,
}: {
  item: ProductListingCard;
  className: string;
  large?: boolean;
}) {
  return (
    <div
      className={`relative grid w-full flex-none place-items-center overflow-hidden border-[#E2E8F0] ${className}`}
      style={{ background: item.gradient }}
    >
      {item.badge && !large ? (
        <span
          className="absolute left-[21.33px] top-[18px] z-20 flex h-[25px] items-center rounded-lg px-3 py-1 text-xs font-semibold leading-[140%] tracking-[-0.01em]"
          style={{ background: item.badge.background, color: item.badge.color }}
        >
          {item.badge.label}
        </span>
      ) : null}
      <Bottle
        product={item.product}
        active={false}
        className={
          large
            ? "h-[420px] w-[180px] translate-y-16 rotate-0 scale-[1.2]"
            : item.bottleClassName
        }
      />
    </div>
  );
}

function ProductTitleRow({
  item,
  titleWidth,
}: {
  item: ProductListingCard;
  titleWidth: string;
}) {
  return (
    <div className="relative h-[39.19px] w-full">
      <div className="absolute inset-x-0 top-[-1px] flex h-8 items-start justify-between gap-6">
        <h2 className={`flex min-w-0 ${titleWidth} items-center text-2xl font-semibold leading-[31px] text-[#1B2537]`}>
          {item.name}
        </h2>
        <p className="flex w-[88.5px] items-center justify-end text-2xl font-semibold leading-[31px] text-[#1B2537]">
          {item.price}
        </p>
      </div>
    </div>
  );
}

function RelatedCard({ item, onClick }: { item: ProductListingCard; onClick: () => void }) {
  return (
    <article className="isolate flex h-[478.7px] min-w-0 flex-col items-start overflow-hidden rounded-[32px] border border-[#E2E8F0] bg-white">
      <ProductImagePanel item={item} className="h-[294.5px]" />
      <div className="flex h-[182.19px] w-full flex-col items-start p-6">
        <ProductTitleRow item={item} titleWidth="flex-1" />
        <div className="flex h-[51px] w-full flex-col items-start pb-6">
          <p className="h-[27px] w-full text-lg font-normal leading-[150%] text-[rgba(27,37,55,0.45)]">
            {item.meta}
          </p>
        </div>
        <button
          className="flex h-11 w-full items-center justify-center rounded-xl bg-[#E6F3FF] px-6 pb-3 pt-2.5 text-base font-semibold leading-[140%] tracking-[-0.01em] text-[#0B1022]"
          onClick={onClick}
          type="button"
        >
          View Details
        </button>
      </div>
    </article>
  );
}

function Label({ children }: { children: string }) {
  return (
    <span className="text-xs font-semibold uppercase leading-[14px] tracking-[0.1px] text-[rgba(69,71,76,0.7)]">
      {children}
    </span>
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

function ChevronRightIcon() {
  return (
    <svg aria-hidden="true" className="h-2 w-[4.93px]" fill="none" viewBox="0 0 5 8">
      <path d="m.7.7 3.1 3.3L.7 7.3" stroke="#45474C" strokeWidth="1.2" />
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
      <path d="M10 4v12M4 10h12" stroke="#999999" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 20 20">
      <path d="M5 2.8h7l3 3v11.4H5V2.8Z" stroke="#6FA8DF" strokeWidth="1.5" />
      <path d="M12 2.8v3h3" stroke="#6FA8DF" strokeWidth="1.5" />
    </svg>
  );
}
