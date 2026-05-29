"use client";

import Link from "next/link";
import { useState } from "react";
import { Bottle } from "@/components/bottle";
import { products } from "@/data/products";

const heroBottles = [
  { product: products[0], className: "z-20 rotate-0 scale-[1.04]" },
  { product: products[1], className: "z-10 -ml-4 -rotate-[10deg] translate-y-7 scale-[0.98] sm:-ml-7" },
  { product: products[2], className: "z-20 -ml-3 rotate-0 translate-y-4 scale-[0.98] sm:-ml-6" },
  { product: products[3], className: "z-10 -ml-3 rotate-0 translate-y-1 scale-[0.98] sm:-ml-6" },
];

const defaultHeroBackground =
  "linear-gradient(175.57deg, #F4F6FF 3.42%, #DCE2F6 80.15%), #FFFFFF";

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
      className="relative isolate overflow-hidden transition-colors duration-700"
      style={{ background: heroBackground }}
    >
      <div className="section-shell relative flex min-h-[560px] flex-col items-center justify-center px-2 py-9 sm:min-h-[610px]">
        <div className="mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
          <h1 className="max-w-[560px] text-[34px] font-black leading-[1.02] tracking-tight text-[#1b2638] sm:text-[44px] lg:text-[48px]">
            Precision Peptides for
            <br />
            Next-Level Research
          </h1>
          <p className="mt-3 max-w-[410px] text-[11px] leading-5 text-[#75879a] sm:text-[12px]">
            Divine Aminos provides amino and peptide compounds produced under
            rigorous standards to support breakthrough discoveries.
          </p>

          <div className="mt-4 flex items-center justify-center gap-5">
            <Link
              href="/peptides"
              className="focus-ring inline-flex h-8 items-center justify-center rounded-md bg-white px-6 text-[12px] font-black text-[#1b2638] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Browse All Peptides
            </Link>
            <Link
              href="/research"
              className="focus-ring inline-flex h-8 items-center justify-center rounded-md px-2 text-[12px] font-bold text-[#1b2638] transition hover:bg-white/40"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="relative mt-8 flex w-full max-w-[860px] items-end justify-center pb-7 sm:mt-10">
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
                  className={`${className} h-[210px] w-[90px] sm:h-[270px] sm:w-[116px] ${
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
