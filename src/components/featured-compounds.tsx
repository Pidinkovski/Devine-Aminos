import Link from "next/link";
import { ArrowRight, FileText, Truck } from "lucide-react";
import { Bottle } from "@/components/bottle";
import { products, type Product } from "@/data/products";

const featuredProducts = [
  {
    product: products.find((product) => product.slug === "ghk-cu")!,
    name: "GHK-CU",
    price: "$55.00",
    meta: "Purity: >99% | 10mg Vial",
    gradient: "linear-gradient(180deg, #D7FFF9 0%, #FFFFFF 100%)",
  },
  {
    product: products.find((product) => product.slug === "bpc-157")!,
    name: "Glutathione",
    price: "$35.00",
    meta: "Purity: >99% | 200mg Vial",
    gradient: "linear-gradient(180deg, #FFE7C8 0%, #FFFFFF 100%), #F2F4F6",
  },
  {
    product: products.find((product) => product.slug === "cjc-1295")!,
    name: "BPC-157",
    price: "$45.00",
    meta: "Purity: >99% | 5mg Vial",
    gradient: "linear-gradient(180deg, #D3E5FF 0%, #FFFFFF 100%), #F2F4F6",
  },
];

const promoItems = [
  { icon: FileText, label: "Sign Up for a Special Discount", width: "w-[341px]" },
  { icon: Truck, label: "Free Shipping on Orders Over $150", width: "w-[388px]" },
  { icon: FileText, label: "Sign Up for a Special Discount", width: "w-[341px]" },
  { icon: Truck, label: "Free Shipping on Orders Over $150", width: "w-[388px]" },
];

export function FeaturedCompounds() {
  return (
    <section className="relative isolate flex flex-col items-center gap-10 overflow-hidden bg-white px-8 py-[72px]">
      <div className="pointer-events-none absolute left-0 top-[59px] z-20 h-[82px] w-full bg-[linear-gradient(90deg,#FFFFFF_0%,rgba(255,255,255,0)_30.77%,rgba(255,255,255,0)_74.52%,#FFFFFF_100%)]" />

      <div className="relative z-0 flex h-14 w-full max-w-[1376px] items-start gap-6 overflow-hidden bg-white">
        {promoItems.map(({ icon: Icon, label, width }, index) => (
          <div
            key={`${label}-${index}`}
            className={`${width} flex h-14 flex-none items-center justify-center gap-2.5 rounded-lg bg-[#F6F8FB] px-4 py-3`}
          >
            <Icon className="h-8 w-8 text-black" strokeWidth={2.2} />
            <p className="font-[family-name:var(--font-plus-jakarta-sans)] text-xl font-medium leading-[115%] tracking-[-0.03em] text-[#0C0C0D]">
              {label}
            </p>
          </div>
        ))}
      </div>

      <div className="relative z-10 flex w-full max-w-[1280px] flex-col items-center gap-10">
        <div className="flex h-auto w-full items-end justify-between gap-6">
          <div className="flex w-[492px] max-w-full flex-col items-start gap-1">
            <h2 className="font-[family-name:var(--font-plus-jakarta-sans)] text-5xl font-semibold leading-[125%] tracking-[-0.03em] text-[#1B2537]">
              Featured Compounds
            </h2>
            <p className="font-[family-name:var(--font-plus-jakarta-sans)] text-lg font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
              Selected for highest clinical demand and analytical purity.
            </p>
          </div>

          <Link
            href="/peptides"
            className="mb-1 flex h-[22px] items-center gap-1 border-b border-[#0B1220] pb-1 font-[family-name:var(--font-plus-jakarta-sans)] text-sm font-bold leading-[17px] tracking-[0.7px] text-[#0B1220]"
          >
            View All <ArrowRight className="h-2 w-[4.93px]" strokeWidth={3} />
          </Link>
        </div>

        <div className="grid w-full gap-6 lg:grid-cols-3">
          {featuredProducts.map((item) => (
            <FeaturedCard key={item.name} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({
  product,
  name,
  price,
  meta,
  gradient,
}: {
  product: Product;
  name: string;
  price: string;
  meta: string;
  gradient: string;
}) {
  return (
    <article className="isolate flex h-[478.7px] min-w-0 flex-col items-start overflow-hidden rounded-[32px] border border-[#E2E8F0] bg-white">
      <div className="relative grid h-[294.5px] w-full flex-none place-items-center overflow-hidden" style={{ background: gradient }}>
        <Bottle
          product={product}
          active={false}
          className="h-[250px] w-[108px] translate-y-7 rotate-0 scale-[1.12]"
        />
      </div>

      <div className="flex h-[182.19px] w-full flex-col items-start p-6">
        <div className="relative h-[39.19px] w-full">
          <div className="absolute inset-x-0 top-[-1px] flex h-8 items-start justify-between gap-6">
            <h3 className="flex min-w-0 flex-1 items-center font-[family-name:var(--font-plus-jakarta-sans)] text-2xl font-semibold leading-[31px] text-[#1B2537]">
              {name}
            </h3>
            <p className="flex w-[88.5px] items-center justify-end font-[family-name:var(--font-plus-jakarta-sans)] text-2xl font-semibold leading-[31px] text-[#1B2537]">
              {price}
            </p>
          </div>
        </div>

        <div className="flex h-[51px] w-full flex-col items-start pb-6">
          <p className="h-[27px] w-full font-[family-name:var(--font-plus-jakarta-sans)] text-lg font-normal leading-[150%] text-[rgba(27,37,55,0.45)]">
            {meta}
          </p>
        </div>

        <Link
          href={`/peptides/${product.slug}`}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#E6F3FF] px-6 pb-3 pt-2.5 font-[family-name:var(--font-plus-jakarta-sans)] text-base font-semibold leading-[140%] tracking-[-0.01em] text-[#0B1022]"
        >
          View Details
        </Link>
      </div>
    </article>
  );
}
