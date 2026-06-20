import Link from "next/link";
import {
  Atom,
  ArrowUpRight,
  Microscope,
  SprayCan,
} from "lucide-react";

const mechanisms = [
  {
    icon: SprayCan,
    title: "BPC-157",
    accent: "#64B19A",
    badgeBackground: "rgba(100, 177, 154, 0.3)",
    copy:
      "Investigated for its potential role in modulating angiomodulatory pathways and accelerating localized tissue repair mechanisms in vitro.",
  },
  {
    icon: Atom,
    title: "TB-500",
    accent: "#F38A5D",
    badgeBackground: "rgba(243, 138, 93, 0.3)",
    copy:
      "Evaluated for actin-binding properties, potentially influencing cellular migration and regenerative signaling cascades during controlled assays.",
  },
  {
    icon: Microscope,
    title: "CJC-1295",
    accent: "#6FA8DF",
    badgeBackground: "rgba(111, 168, 223, 0.3)",
    copy:
      "Studied for its capacity to extend half-life and stimulate somatotropic pathways, modifying endocrine response models in lab settings.",
  },
];

const protocolRows = [
  {
    state: "Lyophilized Powder",
    temperature: "-20 C",
    stability: "Up to 36 months",
  },
  {
    state: "Reconstituted Solution",
    temperature: "2 C to 8 C",
    stability: "14 to 20 Days",
  },
  {
    state: "Reconstitution Solvent",
    temperature: "Room Temp (20 C)",
    stability: "Standard Shelf Life",
  },
];

const studies = Array.from({ length: 4 }, () => ({
  category: "CJC-1295 RESEARCH",
  title:
    "Pentadecapeptide BPC-157: Modulatory effect on angiomodulatory pathways and wound healing",
  copy:
    "A comprehensive study analyzing the regenerative properties of BPC-157 on soft tissue injuries and its role in stimulating VEGF expression.",
}));

export default function ResearchPage() {
  return (
    <main className="flex flex-col items-center bg-white px-8 py-[72px] font-[family-name:var(--font-plus-jakarta-sans)]">
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-[86px]">
        <section className="grid min-h-[461px] w-full items-center gap-12 md:grid-cols-[minmax(320px,0.85fr)_minmax(0,1.15fr)] xl:grid-cols-[minmax(0,591.97px)_minmax(520px,660px)]">
          <div className="flex max-w-[380px] flex-col items-start gap-2 xl:max-w-[591.97px]">
            <h1 className="text-[40px] font-semibold leading-[110%] tracking-[-1px] text-[#0B1220] xl:text-5xl">
              Scientific Methodology
            </h1>
            <p className="max-w-[360px] text-lg font-medium leading-[150%] text-[rgba(27,37,55,0.45)] xl:max-w-[512px]">
              Uncompromising standards in peptide synthesis, utilizing advanced
              solid-phase methodologies to guarantee &gt;99% purity for rigorous
              research applications.
            </p>
            <div className="flex flex-wrap items-start gap-4 pt-5">
              <Link
                className="flex h-[42.8px] items-center justify-center rounded-lg bg-black px-8 text-sm font-bold leading-[17px] tracking-[0.7px] text-white shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                href="#studies"
              >
                Apply Now
              </Link>
              <Link
                className="flex h-[43px] items-center justify-center rounded-lg border border-[#76777D] px-8 text-sm font-bold leading-[17px] tracking-[0.7px] text-[#191C1E]"
                href="/peptides"
              >
                View Tiers
              </Link>
            </div>
          </div>

          <div
            className="h-[461px] rounded-3xl border border-[#E2E8F0] bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(11, 18, 32, 0.04), rgba(11, 18, 32, 0.04)), url(https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1320)",
            }}
            aria-label="Scientist working in a laboratory"
          />
        </section>

        <ResearchSection title="Compound Mechanisms">
          <div className="grid w-full gap-6 md:grid-cols-3">
            {mechanisms.map(({ icon: Icon, title, accent, badgeBackground, copy }) => (
              <article
                className="flex h-auto min-h-[232px] flex-col items-start gap-2 rounded-[32px] border border-[#E2E8F0] bg-white p-6"
                key={title}
              >
                <div className="flex h-[33px] w-full items-start justify-between pb-2">
                  <Icon className="h-[25px] w-[25px]" color={accent} strokeWidth={2} />
                  <span
                    className="flex h-[25px] w-[105px] items-center justify-center rounded-lg px-3 py-1 text-xs font-semibold leading-[140%] tracking-[-0.01em]"
                    style={{ background: badgeBackground, color: accent }}
                  >
                    PURITY: &gt;99%
                  </span>
                </div>
                <h3 className="flex h-8 items-center text-2xl font-bold leading-[130%] text-[#1B2537]">
                  {title}
                </h3>
                <p className="flex min-h-[72px] items-center text-base font-normal leading-6 text-[#45474C]">
                  {copy}
                </p>
              </article>
            ))}
          </div>
        </ResearchSection>

        <ResearchSection title="Storage & Handling Protocol">
          <div className="w-full overflow-hidden rounded-lg border border-[#E2E8F0] bg-white">
            <table className="w-full table-fixed border-collapse">
              <thead className="bg-[#F8FAFC]">
                <tr className="border-b border-[#E2E8F0]">
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase leading-[14px] tracking-[0.6px] text-[#0B1220]">
                    State
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase leading-[14px] tracking-[0.6px] text-[#0B1220]">
                    Temperature
                  </th>
                  <th className="px-4 py-4 text-left text-xs font-semibold uppercase leading-[14px] tracking-[0.6px] text-[#0B1220]">
                    Duration Stability
                  </th>
                </tr>
              </thead>
              <tbody>
                {protocolRows.map((row, index) => (
                  <tr
                    className={index < protocolRows.length - 1 ? "border-b border-[#E2E8F0]" : ""}
                    key={row.state}
                  >
                    <td className="px-4 py-4 text-base font-medium leading-6 text-[#0B1220]">
                      {row.state}
                    </td>
                    <td className="px-4 py-4 text-base font-normal leading-6 text-[#45474C]">
                      {row.temperature}
                    </td>
                    <td className="px-4 py-4 text-base font-normal leading-6 text-[#45474C]">
                      {row.stability}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ResearchSection>

        <section className="relative flex min-h-[239.01px] w-full flex-col gap-8 overflow-hidden rounded-2xl bg-[#0B1220] p-12 text-white md:flex-row md:items-center md:justify-between">
          <div className="absolute inset-0 bg-[linear-gradient(270deg,#DCE2F6_0%,#006BB2_100%)] opacity-10" />
          <div className="relative z-10 max-w-[672px]">
            <h2 className="text-[32px] font-semibold leading-[120%] tracking-[-0.32px]">
              Regulatory Compliance
            </h2>
            <p className="mt-2 text-[13.8399px] font-medium leading-[150%] text-[rgba(226,232,240,0.8)]">
              All compounds synthesized and distributed by Divine Atmos are strictly
              for in-vitro and laboratory research purposes. They are not approved
              for human or animal diagnostic, therapeutic, or clinical use.
              Researchers must operate within established safety guidelines and
              institutional compliance protocols.
            </p>
          </div>
          <button
            className="relative z-10 h-[50px] w-[233px] rounded-2xl bg-white px-6 py-3 text-base font-medium leading-6 text-[#0B1220] shadow-[0_4px_12px_rgba(11,18,32,0.15)]"
            type="button"
          >
            Review Terms of Service
          </button>
        </section>

        <ResearchSection id="studies" title="Clinical Studies & Peer-Reviewed Research">
          <div className="grid w-full gap-2.5 lg:grid-cols-2">
            {studies.map((study, index) => (
              <StudyCard key={`${study.category}-${index}`} {...study} />
            ))}
          </div>
        </ResearchSection>
      </div>
    </main>
  );
}

function ResearchSection({
  children,
  id,
  title,
}: {
  children: React.ReactNode;
  id?: string;
  title: string;
}) {
  return (
    <section className="flex w-full flex-col items-start gap-6" id={id}>
      <div className="flex h-[57px] w-full items-start border-t border-[#E2E8F0] pt-6">
        <h2 className="text-2xl font-semibold leading-[130%] text-[#0B1220]">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function StudyCard({
  category,
  copy,
  title,
}: {
  category: string;
  copy: string;
  title: string;
}) {
  return (
    <article className="flex min-h-[318px] flex-col items-start rounded-[32px] border border-[#E2E8F0] bg-white">
      <div className="flex h-full w-full flex-col items-start gap-5 p-6">
        <div className="flex h-5 w-full items-center justify-between">
          <p className="text-sm font-semibold uppercase leading-4 tracking-[1.2px] text-[#999999]">
            {category}
          </p>
          <ArrowUpRight className="h-5 w-5 text-[#999999]" strokeWidth={2} />
        </div>
        <h3 className="text-2xl font-semibold leading-[130%] text-[#1B2537]">{title}</h3>
        <p className="max-w-[480px] text-lg font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
          {copy}
        </p>
        <button
          className="mt-auto flex h-11 w-full items-center justify-center rounded-xl bg-[#E6F3FF] px-6 pb-3 pt-2.5 text-base font-semibold leading-[140%] tracking-[-0.01em] text-[#0B1022]"
          type="button"
        >
          Read Publication
        </button>
      </div>
    </article>
  );
}
