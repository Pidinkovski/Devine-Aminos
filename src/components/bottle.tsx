import { clsx } from "clsx";
import type { Product } from "@/data/products";

type BottleProps = {
  product: Product;
  active?: boolean;
  className?: string;
};

export function Bottle({ product, active = false, className }: BottleProps) {
  return (
    <div
      className={clsx(
        "relative mx-auto h-56 w-24 transition duration-500 sm:h-72 sm:w-32",
        active ? "-translate-y-3 rotate-[-4deg] scale-105" : "rotate-3",
        className,
      )}
      aria-label={`${product.name} vial`}
    >
      <div
        className="absolute left-1/2 top-0 h-9 w-12 -translate-x-1/2 rounded-t-md border border-black/10 shadow-sm"
        style={{ background: product.color }}
      />
      <div className="absolute left-1/2 top-8 h-4 w-16 -translate-x-1/2 rounded-sm bg-slate-200 shadow-inner" />
      <div className="absolute inset-x-2 top-11 bottom-0 overflow-hidden rounded-[18px] border border-slate-200 bg-white shadow-2xl">
        <div className="absolute inset-x-0 top-0 h-9 bg-gradient-to-b from-white to-slate-100" />
        <div
          className="absolute inset-x-0 top-16 h-24"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,.85), rgba(255,255,255,.25), rgba(255,255,255,.85))",
          }}
        />
        <div className="absolute inset-x-3 top-20 rounded-md border border-slate-200 bg-white px-2 py-3 text-center shadow-sm">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            Divine
          </p>
          <p className="mt-2 text-xl font-black text-slate-950">{product.shortName}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase text-slate-500">
            Research peptide
          </p>
        </div>
        <div
          className="absolute inset-x-0 bottom-0 h-14"
          style={{ background: product.color }}
        />
      </div>
      <div
        className="absolute -bottom-6 left-1/2 h-7 w-28 -translate-x-1/2 rounded-full blur-xl"
        style={{ background: product.color, opacity: active ? 0.35 : 0.18 }}
      />
    </div>
  );
}
