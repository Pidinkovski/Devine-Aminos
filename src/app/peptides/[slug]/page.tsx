import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, FileCheck2, PackageCheck, ShieldAlert, Truck } from "lucide-react";
import { Bottle } from "@/components/bottle";
import { ProductDetailCartActions } from "@/components/product-detail-cart-actions";
import { getProduct, products } from "@/data/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="bg-white">
      <div className="section-shell py-12">
        <Link href="/peptides" className="inline-flex items-center gap-2 text-sm font-bold text-slate-600">
          <ArrowLeft size={17} /> Back to catalog
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <div className="relative grid min-h-[560px] place-items-center overflow-hidden rounded-lg" style={{ background: product.bg }}>
            <div className="absolute inset-0 soft-grid opacity-70" />
            <Bottle product={product} active imageFit="detail" className="scale-125" />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600">
              {product.tag}
            </p>
            <h1 className="mt-3 text-6xl font-black tracking-tight text-slate-950">
              {product.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {product.benefits.map((benefit) => (
                <span key={benefit} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                  {benefit}
                </span>
              ))}
            </div>

            <ProductDetailCartActions product={product} />

            <div className="mt-6 grid gap-3">
              <Info icon={<FileCheck2 size={20} />} title="CoA PDF link" copy="Stable route for QR labels. Replace the placeholder with the final certificate PDF when ready." href={product.coaUrl} />
              <Info icon={<PackageCheck size={20} />} title="Storage" copy="Store according to supplier documentation. Keep lot-specific handling details with each certificate." />
              <Info icon={<Truck size={20} />} title="Shipping" copy="Domestic research orders ship with tracking after compliant payment approval." />
              <Info icon={<ShieldAlert size={20} />} title="Research use only" copy="Not for human consumption, veterinary use, clinical use, or medical claims." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  icon,
  title,
  copy,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  copy: string;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-slate-300">
      <span className="mt-1 text-cyan-600">{icon}</span>
      <span>
        <span className="block font-black text-slate-950">{title}</span>
        <span className="mt-1 block text-sm leading-6 text-slate-600">{copy}</span>
      </span>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
