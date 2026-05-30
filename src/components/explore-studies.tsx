import Link from "next/link";
import { ExternalLink } from "lucide-react";

const studies = Array.from({ length: 4 }, (_, index) => ({
  id: index + 1,
  category: "CJC-1295 RESEARCH",
  title:
    "Pentadecapeptide BPC-157: Modulatory effect on angiomodulatory pathways and wound healing",
  summary:
    "A comprehensive study analyzing the regenerative properties of BPC-157 on soft tissue injuries and its role in stimulating VEGF expression.",
}));

export function ExploreStudies() {
  return (
    <section className="flex w-full flex-col items-center gap-2.5 bg-white px-8 pb-[72px]">
      <div className="flex w-full max-w-[1280px] flex-col items-start gap-10">
        <div className="flex h-[105px] w-full flex-col items-center gap-[23.99px] border-t border-[#E2E8F0] pt-11">
          <h2 className="w-full text-center font-[family-name:var(--font-plus-jakarta-sans)] text-5xl font-semibold leading-[125%] tracking-[-0.03em] text-[#1B2537]">
            Explore Studies
          </h2>
        </div>

        <div className="grid w-full gap-4 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-4">
          {studies.map((study) => (
            <StudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StudyCard({ study }: { study: (typeof studies)[number] }) {
  return (
    <article className="flex min-h-[318px] flex-col items-start rounded-[32px] border border-[#E2E8F0] bg-white">
      <div className="flex h-full w-full flex-col items-start gap-5 p-6">
        <div className="flex h-5 w-full items-center justify-between gap-8">
          <p className="font-[family-name:var(--font-plus-jakarta-sans)] text-sm font-semibold uppercase leading-4 tracking-[1.2px] text-[#999999]">
            {study.category}
          </p>
          <ExternalLink className="h-5 w-5 text-[#999999] opacity-90" strokeWidth={2} />
        </div>

        <h3 className="flex min-h-[63px] w-full items-center font-[family-name:var(--font-plus-jakarta-sans)] text-2xl font-semibold leading-[130%] text-[#1B2537]">
          {study.title}
        </h3>

        <div className="flex h-[81px] w-full flex-col items-start">
          <p className="max-w-[480px] font-[family-name:var(--font-plus-jakarta-sans)] text-lg font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
            {study.summary}
          </p>
        </div>

        <Link
          href="#"
          className="mt-auto flex h-11 w-full items-center justify-center rounded-xl bg-[#E6F3FF] px-6 pb-3 pt-2.5 font-[family-name:var(--font-plus-jakarta-sans)] text-base font-semibold leading-[140%] tracking-[-0.01em] text-[#0B1022]"
        >
          Read Publication
        </Link>
      </div>
    </article>
  );
}
