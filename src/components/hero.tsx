"use client";

import Link from "next/link";
import { useState } from "react";
import { Bottle } from "@/components/bottle";
import { products } from "@/data/products";

const heroBottles = [
  { product: products[0], className: "z-20 rotate-0 scale-[1.08]" },
  {
    product: products[1],
    className: "z-10 -ml-5 -rotate-[10deg] translate-y-10 scale-[1.02] sm:-ml-9",
  },
  {
    product: products[2],
    className: "z-20 -ml-4 rotate-0 translate-y-6 scale-[1.02] sm:-ml-8",
  },
  {
    product: products[3],
    className: "z-10 -ml-4 rotate-0 translate-y-2 scale-[1.02] sm:-ml-8",
  },
];

const defaultHeroBackground =
  "linear-gradient(180deg, #BED0E1 0%, #E2F1FB 100%)";

const productBackgrounds: Record<string, string> = {
  "bpc-157": "linear-gradient(180deg, #FFE7C8 0%, #FFFFFF 100%)",
  "tb-500": "linear-gradient(180deg, #E6DCF6 0%, #FFFFFF 100%)",
  "ghk-cu": "linear-gradient(180deg, #D7FFF9 0%, #FFFFFF 100%)",
  "cjc-1295": "linear-gradient(180deg, #D3E5FF 0%, #FFFFFF 100%)",
};

export function Hero() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const active = products.find((product) => product.slug === activeSlug);
  const heroBackground = activeSlug
    ? productBackgrounds[activeSlug] ?? active?.bg ?? defaultHeroBackground
    : defaultHeroBackground;

  return (
    <section
      className="relative isolate h-[clamp(760px,80.14vw,1096px)] overflow-hidden transition-colors duration-700"
      style={{ background: heroBackground }}
    >
      <div className="section-shell relative flex h-full flex-col items-center px-2 pb-[72px] pt-[70px]">
        <div className="mx-auto flex w-full max-w-[750px] flex-col items-center text-center">
          <h1 className="max-w-[750px] font-[family-name:var(--font-plus-jakarta-sans)] text-[48px] font-semibold leading-[115%] tracking-[-0.03em] text-[#1B2537] sm:text-[60px] lg:text-[72px]">
            Precision Peptides for
            <br />
            Next-Level Research
          </h1>
          <p className="mt-4 max-w-[560px] font-[family-name:var(--font-plus-jakarta-sans)] text-base font-medium leading-[150%] text-[rgba(27,37,55,0.45)] sm:text-lg">
            Divine Aminos provides amino and peptide compounds produced under
            rigorous standards to support breakthrough discoveries.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-[6px] pt-3">
            <Link
              href="/peptides"
              className="focus-ring inline-flex h-[42px] items-center justify-center rounded-xl bg-[#1B2537] px-6 font-[family-name:var(--font-plus-jakarta-sans)] text-base font-semibold leading-[140%] tracking-[-0.01em] text-white transition hover:-translate-y-0.5 hover:bg-[#253148]"
            >
              Browse All Peptides
            </Link>
            <Link
              href="/research"
              className="focus-ring inline-flex h-[42px] items-center justify-center rounded-xl px-6 font-[family-name:var(--font-plus-jakarta-sans)] text-base font-medium leading-[140%] tracking-[-0.01em] text-[#0B1022] transition hover:bg-white/30"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="absolute left-1/2 top-[420px] flex w-[min(974px,calc(100%-64px))] -translate-x-1/2 items-end justify-center pb-7 sm:top-[430px] lg:top-[429px]">
          {heroBottles.map(({ product, className }) => {
            const isActive = product.slug === activeSlug;

            return (
              <button
                key={product.slug}
                onClick={() => setActiveSlug(product.slug)}
                className="focus-ring shrink-0 rounded-xl p-0 transition duration-500 hover:-translate-y-2"
                aria-label={`Show ${product.name}`}
              >
                <Bottle
                  product={product}
                  active={false}
                  className={`${className} h-[260px] w-[112px] sm:h-[285px] sm:w-[122px] lg:h-[430px] lg:w-[184px] xl:h-[520px] xl:w-[223px] ${
                    isActive ? "brightness-105" : ""
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
