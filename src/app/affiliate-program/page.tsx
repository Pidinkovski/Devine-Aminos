import Link from "next/link";
import { CircleCheck, Link2, ShoppingBag, User, Wallet } from "lucide-react";
import { Bottle } from "@/components/bottle";
import { products } from "@/data/products";

const journeySteps = [
  {
    icon: User,
    label: "Join",
    position: "left-[7%] top-[58%]",
  },
  {
    icon: Link2,
    label: "Share",
    position: "left-[26%] top-[36%]",
  },
  {
    icon: ShoppingBag,
    label: "Customer\nPurchase",
    position: "right-[21%] top-[36%]",
  },
  {
    icon: Wallet,
    label: "Earn",
    position: "right-[7%] top-[59%]",
  },
];

const heroProducts = [
  products.find((product) => product.slug === "bpc-157")!,
  products.find((product) => product.slug === "tb-500")!,
  products.find((product) => product.slug === "ghk-cu")!,
  products.find((product) => product.slug === "cjc-1295")!,
];

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
      <section className="relative isolate min-h-[1096px] overflow-hidden bg-[linear-gradient(180deg,#BED0E1_0%,#E2F1FB_100%)] px-8 pb-[72px] pt-[70px] font-[family-name:var(--font-plus-jakarta-sans)]">
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
                href="#affiliate-flow"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div
            className="pointer-events-none absolute left-1/2 top-[310px] z-10 h-[700px] w-[calc(100%-64px)] max-w-[1215px] -translate-x-1/2 max-lg:top-[360px] max-lg:h-[620px] max-lg:w-[1280px] max-lg:max-w-none max-lg:origin-top max-lg:scale-[0.72]"
            id="affiliate-flow"
          >
            <svg
              className="absolute inset-x-[9%] top-[12%] h-[44%] w-[82%] overflow-visible opacity-80"
              fill="none"
              viewBox="0 0 1000 420"
              aria-hidden="true"
            >
              <path
                d="M70 325 C160 170 275 105 430 130 C535 146 594 202 664 231"
                stroke="url(#affiliateArc)"
                strokeLinecap="round"
                strokeWidth="7"
              />
              <path
                d="M694 244 C788 290 873 328 943 300"
                stroke="url(#affiliateArc)"
                strokeLinecap="round"
                strokeWidth="7"
              />
              <path d="M423 106 L463 129 L422 150" fill="#6FA8DF" opacity="0.95" />
              <path d="M938 275 L973 301 L932 318" fill="#6FA8DF" opacity="0.95" />
              <defs>
                <linearGradient id="affiliateArc" x1="70" x2="950" y1="300" y2="250">
                  <stop stopColor="#E2F0F6" />
                  <stop offset="1" stopColor="#6FA8DF" />
                </linearGradient>
              </defs>
            </svg>

            {journeySteps.map(({ icon: Icon, label, position }) => (
              <div
                className={`absolute z-20 flex -translate-x-1/2 flex-col items-center gap-5 whitespace-pre-line text-center text-2xl font-semibold leading-[147%] text-[#0B1022] ${position}`}
                key={label}
              >
                <div className="grid h-[155px] w-[155px] place-items-center rounded-full border-[3px] border-white/20 bg-[linear-gradient(180deg,rgba(247,249,251,0.2)_0%,rgba(237,243,246,0.2)_100%)] shadow-[inset_0_0_34px_rgba(255,255,255,0.4),0_20px_60px_rgba(27,37,55,0.08)] backdrop-blur-sm max-md:h-[112px] max-md:w-[112px]">
                  <div className="grid h-[64px] w-[64px] place-items-center rounded-full bg-[linear-gradient(180deg,#575757_0%,#151515_100%)] text-white shadow-[0_10px_24px_rgba(11,16,34,0.2)] max-md:h-12 max-md:w-12">
                    <Icon size={30} strokeWidth={2.2} />
                  </div>
                </div>
                <span className="max-md:text-lg">{label}</span>
              </div>
            ))}

            <div className="absolute inset-x-0 bottom-[-115px] z-10 flex justify-center overflow-hidden">
              <div className="flex h-[470px] items-end justify-center gap-0">
                {heroProducts.map((product, index) => (
                  <Bottle
                    className={[
                      "h-[460px] w-[196px] scale-[1.38]",
                      index === 0 ? "translate-y-28 rotate-[-2deg]" : "",
                      index === 1 ? "translate-y-36 rotate-[10deg]" : "",
                      index === 2 ? "translate-y-28 rotate-[-1deg]" : "",
                      index === 3 ? "translate-y-24 rotate-[2deg]" : "",
                    ].join(" ")}
                    key={product.slug}
                    product={product}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center bg-white px-8 py-[72px] font-[family-name:var(--font-plus-jakarta-sans)]">
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
    </>
  );
}
