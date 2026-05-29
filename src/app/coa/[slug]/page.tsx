import Link from "next/link";
import { notFound } from "next/navigation";
import { Download, FileCheck2, QrCode } from "lucide-react";
import { getProduct, products } from "@/data/products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function CoaPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="bg-slate-50 py-16">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600">
            Certificate route
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950">
            {product.name} CoA
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This is the stable public URL that can be encoded into vial labels now.
            When the final certificate PDF is ready, this page can show the PDF and
            preserve the same QR destination.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white">
              <Download size={17} /> PDF pending
            </button>
            <Link href={`/peptides/${product.slug}`} className="focus-ring inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-950">
              Product page
            </Link>
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid place-items-center rounded-lg border border-dashed border-slate-300 bg-slate-50 p-12">
            <QrCode size={150} className="text-slate-950" />
            <p className="mt-6 text-center text-sm font-bold text-slate-500">
              QR placeholder for /coa/{product.slug}
            </p>
          </div>
          <div className="mt-6 grid gap-3">
            <div className="flex gap-3 rounded-md bg-slate-50 p-4">
              <FileCheck2 className="text-cyan-600" size={22} />
              <div>
                <p className="font-black text-slate-950">Lot certificate pending</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Add lot number, purity, assay date, and PDF URL when the lab document arrives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
