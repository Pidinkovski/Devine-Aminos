import Image from "next/image";
import { clsx } from "clsx";
import type { Product } from "@/data/products";

type BottleProps = {
  product: Product;
  active?: boolean;
  className?: string;
  imageFit?: "compact" | "figma-card" | "detail";
};

export function Bottle({
  product,
  active = false,
  className,
  imageFit = "compact",
}: BottleProps) {
  if (product.imageSrc) {
    if (imageFit !== "compact") {
      const cardImage = product.cardImage ?? {
        width: 241,
        height: 268,
        left: 76.67,
        top: 27,
      };
      const rootClass =
        imageFit === "detail"
          ? "absolute left-[89px] top-[37px] h-[628px] w-[330px]"
          : "absolute";
      const rootStyle =
        imageFit === "detail"
          ? undefined
          : {
              left: `${cardImage.left}px`,
              top: `${cardImage.top}px`,
              width: `${cardImage.width}px`,
              height: `${cardImage.height}px`,
            };

      return (
        <div
          className={clsx(
            "pointer-events-none transition duration-500",
            rootClass,
          )}
          style={rootStyle}
          aria-label={`${product.name} vial`}
        >
          <Image
            src={product.imageSrc}
            alt={`${product.name} vial`}
            fill
            sizes={imageFit === "detail" ? "330px" : "241px"}
            className={clsx(
              imageFit === "detail" ? "object-contain object-top" : "object-fill",
              "drop-shadow-2xl",
            )}
            priority={active}
          />
          <div
            className="absolute -bottom-6 left-1/2 h-7 w-28 -translate-x-1/2 rounded-full blur-xl"
            style={{ background: product.color, opacity: active ? 0.35 : 0.18 }}
          />
        </div>
      );
    }

    return (
      <div
        className={clsx(
          "relative mx-auto h-56 w-24 transition duration-500 sm:h-72 sm:w-32",
          active ? "-translate-y-3 rotate-[-4deg] scale-105" : "rotate-3",
          className,
        )}
        aria-label={`${product.name} vial`}
      >
        <Image
          src={product.imageSrc}
          alt={`${product.name} vial`}
          fill
          sizes="(min-width: 640px) 128px, 96px"
          className="object-contain object-bottom drop-shadow-2xl"
          priority={active}
        />
        <div
          className="absolute -bottom-6 left-1/2 h-7 w-28 -translate-x-1/2 rounded-full blur-xl"
          style={{ background: product.color, opacity: active ? 0.35 : 0.18 }}
        />
      </div>
    );
  }

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
