"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, FileCheck2 } from "lucide-react";
import { useState } from "react";
import { Bottle } from "@/components/bottle";
import { MoleculeField } from "@/components/molecule-field";
import { products } from "@/data/products";

export function Hero() {
  const [activeSlug, setActiveSlug] = useState(products[0].slug);
  const active = products.find((product) => product.slug === activeSlug) ?? products[0];

  return (
    <section
      className="relative isolate overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: active.bg }}
    >
      <MoleculeField color={active.color} />
      <div className="absolute inset-0 soft-grid opacity-70" />
      <div className="section-shell relative grid min-h-[calc(100svh-72px)] items-center gap-10 py-12 lg:grid-cols-[1fr_1.05fr]">
        <div className="max-w-2xl">
          <motion.p
            key={`${active.slug}-eyebrow`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex rounded-full border border-slate-950/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-700 shadow-sm backdrop-blur"
          >
            {active.tag}
          </motion.p>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
            >
              <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-7xl">
                Precision peptides for next-level research
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
                Divine Aminos pairs clean product discovery with stable CoA links,
                research-forward content, and a compliant storefront foundation.
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/peptides"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5"
            >
              Explore peptides <ArrowRight size={18} />
            </Link>
            <Link
              href={active.coaUrl}
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/75 px-6 py-3 text-sm font-bold text-slate-950 backdrop-blur transition hover:border-slate-500"
            >
              <FileCheck2 size={18} /> View CoA route
            </Link>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {["Third-party tested", "Stable QR links", "Research use only"].map((item) => (
              <div key={item} className="rounded-md border border-white/70 bg-white/60 p-3 text-sm font-bold text-slate-800 shadow-sm backdrop-blur">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex min-h-[520px] items-center justify-center">
          <div
            className="absolute h-80 w-80 rounded-full blur-3xl transition duration-700"
            style={{ background: active.color, opacity: 0.22 }}
          />
          <div className="relative grid grid-cols-4 items-end gap-1 sm:gap-3">
            {products.map((product) => (
              <button
                key={product.slug}
                onClick={() => setActiveSlug(product.slug)}
                className="focus-ring rounded-xl p-1"
                aria-label={`Show ${product.name}`}
              >
                <Bottle product={product} active={product.slug === active.slug} />
              </button>
            ))}
          </div>
          <div className="absolute bottom-6 flex gap-2">
            {products.map((product) => (
              <button
                key={product.slug}
                onClick={() => setActiveSlug(product.slug)}
                className="focus-ring h-3 w-10 rounded-full border border-white/80 transition"
                style={{
                  background: product.color,
                  opacity: product.slug === active.slug ? 1 : 0.35,
                }}
                aria-label={`Select ${product.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
