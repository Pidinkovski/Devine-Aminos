import Image from "next/image";
import Link from "next/link";
import { CircleCheck } from "lucide-react";
import { AffiliateApplication } from "@/components/affiliate-application";
import { HomeFaq } from "@/components/home-faq";

const programTiers = [
  {
    eyebrow: "Initiate",
    name: "Tier I",
    rate: "10%",
    caption: "Base Commission",
    features: [
      "Verified referral links",
      "Monthly performance reports",
      "Basic creator resources",
    ],
  },
  {
    eyebrow: "Associate",
    name: "Tier II",
    rate: "15%",
    caption: "Enhanced Commission",
    highlighted: true,
    badge: "Most Popular",
    features: [
      "Enhanced commission rate",
      "Priority affiliate review",
      "Research-safe campaign assets",
      "Dedicated program support",
    ],
  },
  {
    eyebrow: "Principal",
    name: "Tier III",
    rate: "20%",
    caption: "Maximum Commission",
    features: [
      "Maximum commission structure",
      "Priority compliance review",
      "Custom referral reporting",
      "Early product campaign access",
    ],
  },
];

export default function AffiliatePage() {
  return (
    <>
      <section className="relative z-10 isolate h-[clamp(840px,80.14vw,1154px)] overflow-hidden bg-[linear-gradient(180deg,#BED0E1_0%,#E2F1FB_100%)] px-8 pb-[72px] pt-[130px] font-[family-name:var(--font-plus-jakarta-sans)]">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
          <div className="z-20 flex max-w-[750px] flex-col items-center gap-4 text-center">
            <h1 className="max-w-[750px] text-[48px] font-semibold leading-[115%] tracking-[-0.03em] text-[#1B2537] sm:text-[60px] lg:text-[72px]">
              Precision Peptides for Next-Level Research
            </h1>
            <p className="max-w-[560px] text-lg font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
              Divine Aminos provides amino and peptide compounds produced under
              rigorous standards to support breakthrough discoveries.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-[6px] pt-3">
              <Link
                className="flex h-[42px] items-center justify-center rounded-xl bg-[#1B2537] px-6 text-base font-semibold leading-[140%] tracking-[-0.01em] text-white"
                href="/peptides"
              >
                Browse All Peptides
              </Link>
              <Link
                className="flex h-[42px] items-center justify-center rounded-xl px-6 text-base font-medium leading-[140%] tracking-[-0.01em] text-[#0B1022]"
                href="/research"
              >
                Learn More
              </Link>
            </div>
          </div>

          <Image
            alt="Affiliate program flow: join, share, customer purchase, and earn"
            className="pointer-events-none absolute left-1/2 top-[clamp(430px,34.93vw,503px)] z-10 h-auto w-[1215px] max-w-[calc(100%-64px)] -translate-x-1/2 select-none"
            draggable={false}
            height={768}
            id="affiliate-flow"
            src="/affiliate-group.svg"
            unoptimized
            width={1215}
          />
        </div>
      </section>

      <section className="relative z-0 flex flex-col items-center bg-white px-8 pb-[72px] pt-[72px] font-[family-name:var(--font-plus-jakarta-sans)]">
        <div className="flex w-full max-w-[1216px] flex-col items-center gap-[74px]">
          <div className="flex w-full flex-col items-center gap-2 text-center">
            <h2 className="w-full text-5xl font-semibold leading-[125%] tracking-[-0.03em] text-[#1B2537]">
              Program Tiers
            </h2>
            <p className="max-w-[672px] text-lg font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
              Structured compensation based on research volume and referral accuracy.
            </p>
          </div>

          <div className="grid w-full items-start gap-6 md:grid-cols-3">
            {programTiers.map((tier) => (
              <article
                className={[
                  "relative flex min-h-[395px] flex-col items-start gap-6 rounded-[32px] border p-8",
                  tier.highlighted
                    ? "-mt-4 min-h-[426px] border-[rgba(226,232,240,0.4)] bg-[#0B1022] text-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
                    : "border-[#E2E8F0] bg-[#F6F8FB] text-[#191C1E]",
                ].join(" ")}
                key={tier.name}
              >
                {tier.badge ? (
                  <span className="absolute right-[17px] top-[17px] rounded-full bg-[#6FA8DF] px-3 py-1 text-sm font-bold uppercase leading-[120%] tracking-[0.7px] text-white">
                    {tier.badge}
                  </span>
                ) : null}

                <div className="flex w-full flex-col items-start gap-2">
                  <p
                    className={[
                      "text-sm font-bold uppercase leading-[120%] tracking-[0.7px]",
                      tier.highlighted ? "text-[#DCE2F6]" : "text-[#45474C]",
                    ].join(" ")}
                  >
                    {tier.eyebrow}
                  </p>
                  <h3
                    className={[
                      "text-[32px] font-semibold leading-[120%] tracking-[-0.32px]",
                      tier.highlighted ? "text-white" : "text-[#191C1E]",
                    ].join(" ")}
                  >
                    {tier.name}
                  </h3>
                </div>

                <div
                  className={[
                    "flex w-full flex-col items-start pb-4",
                    tier.highlighted
                      ? "border-b border-[rgba(226,232,240,0.2)] pt-[15px]"
                      : "border-b border-[#C6C6CC]",
                  ].join(" ")}
                >
                  <p
                    className={[
                      "text-5xl font-bold leading-[110%] tracking-[-0.96px]",
                      tier.highlighted ? "text-white" : "text-black",
                    ].join(" ")}
                  >
                    {tier.rate}
                  </p>
                  <p
                    className={[
                      "mt-1 text-xs font-medium leading-[120%]",
                      tier.highlighted ? "text-[#DCE2F6]" : "text-[#45474C]",
                    ].join(" ")}
                  >
                    {tier.caption}
                  </p>
                </div>

                <ul
                  className={[
                    "flex w-full flex-col items-start gap-3",
                    tier.highlighted ? "pb-4" : "",
                  ].join(" ")}
                >
                  {tier.features.map((feature) => (
                    <li className="flex items-center gap-2 text-base leading-6" key={feature}>
                      <CircleCheck
                        className="h-5 w-5 shrink-0 fill-[#6FA8DF] text-[#6FA8DF]"
                        strokeWidth={2}
                      />
                      <span className={tier.highlighted ? "text-white" : "text-[#191C1E]"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AffiliateApplication />
      <HomeFaq id="affiliate-faqs" topPadding />
    </>
  );
}
