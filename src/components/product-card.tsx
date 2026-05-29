import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Bottle } from "@/components/bottle";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/peptides/${product.slug}`}
      className="group block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-950/10"
    >
      <div className="relative grid min-h-72 place-items-center overflow-hidden" style={{ background: product.bg }}>
        <div className="absolute inset-0 soft-grid opacity-60" />
        <Bottle product={product} className="scale-90" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
              {product.tag}
            </p>
            <h3 className="mt-2 text-2xl font-black text-slate-950">{product.name}</h3>
          </div>
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-700 transition group-hover:bg-slate-950 group-hover:text-white">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.benefits.slice(0, 2).map((benefit) => (
            <span key={benefit} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
              {benefit}
            </span>
          ))}
        </div>
        <p className="mt-5 text-lg font-black text-slate-950">${product.price}</p>
      </div>
    </Link>
  );
}
