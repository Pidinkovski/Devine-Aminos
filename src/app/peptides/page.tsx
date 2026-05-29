import { Filter, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export default function PeptidesPage() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="section-shell">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600">
              Peptide catalog
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950">
              Research compounds
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Compare product intent, research tags, pricing, and CoA routes from one clean grid.
            </p>
          </div>
          <div className="flex gap-2">
            <button className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">
              <Filter size={17} /> Filter
            </button>
            <button className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-slate-700">
              <SlidersHorizontal size={17} /> Sort
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
