import { CheckCircle2, Microscope, ShieldCheck } from "lucide-react";
import { FeaturedCompounds } from "@/components/featured-compounds";
import { Hero } from "@/components/hero";
import { TrustStrip } from "@/components/trust-strip";
import { faqs } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedCompounds />

      <section className="bg-slate-950 py-20 text-white">
        <div className="section-shell grid gap-8 md:grid-cols-3">
          {[
            [
              ShieldCheck,
              "Compliance-first storefront",
              "Research-only language, stable disclaimer placement, and content blocks ready for processor review.",
            ],
            [
              CheckCircle2,
              "QR-ready CoA routing",
              "Each vial label can point to a product route now while the final PDF certificate is updated later.",
            ],
            [
              Microscope,
              "Research education",
              "Benefits, storage, regulatory notes, and study links are separated from product claims.",
            ],
          ].map(([Icon, title, copy]) => (
            <div key={title as string} className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
              <Icon className="text-cyan-300" size={28} />
              <h3 className="mt-5 text-xl font-black">{title as string}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{copy as string}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600">FAQ</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
              Handoff questions answered before development gets expensive
            </h2>
          </div>
          <div className="grid gap-3">
            {faqs.map((item) => (
              <details key={item.question} className="rounded-lg border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer text-lg font-black text-slate-950">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
