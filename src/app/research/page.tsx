import { BookOpen, FileText, Snowflake, Scale } from "lucide-react";

const sections = [
  {
    icon: BookOpen,
    title: "Peptide benefits",
    copy: "Research pages separate mechanism summaries from product cards, keeping educational content organized and citation-ready.",
  },
  {
    icon: Scale,
    title: "Regulatory status",
    copy: "Clear research-use positioning and disclaimers help keep the brand aligned before checkout and processor integration.",
  },
  {
    icon: Snowflake,
    title: "Storage information",
    copy: "Storage and handling blocks are designed for batch-specific replacement once final supplier documents are provided.",
  },
  {
    icon: FileText,
    title: "Study links",
    copy: "Each compound can receive PubMed, DOI, or PDF links without changing the page layout.",
  },
];

export default function ResearchPage() {
  return (
    <section className="bg-white py-16">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-600">
            Scientific methodology
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-slate-950">
            Research information without medical-claim drift
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            This section is built to host peptide education, regulatory notes, storage information,
            and external study links in a developer-friendly structure.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
              <Icon className="text-cyan-600" size={28} />
              <h2 className="mt-5 text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
