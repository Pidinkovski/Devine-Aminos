"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type HeroBottleKey = "orange" | "purple" | "green" | "blue";

const defaultHeroBackground =
  "linear-gradient(180deg, #BED0E1 0%, #E2F1FB 100%)";

const heroStates: Array<{
  key: HeroBottleKey | "default";
  src: string;
  alt: string;
}> = [
  {
    key: "default",
    src: "/hero/whole.png",
    alt: "Divine Aminos peptide bottles",
  },
  {
    key: "orange",
    src: "/hero/orange-opened.png",
    alt: "Glutathione bottle opened",
  },
  {
    key: "purple",
    src: "/hero/purple-opened-v2-bgcut.png",
    alt: "NAD+ bottle opened",
  },
  {
    key: "green",
    src: "/hero/green-opened-v2-bgcut.png",
    alt: "GHK-CU bottle opened",
  },
  {
    key: "blue",
    src: "/hero/blue-opened-v2-bgcut.png",
    alt: "BPC-157 bottle opened",
  },
];

const bottleTriggers: Array<{
  key: HeroBottleKey;
  label: string;
  className: string;
}> = [
  {
    key: "orange",
    label: "Open Glutathione bottle",
    className: "left-[7%] top-[10%] h-[78%] w-[22%]",
  },
  {
    key: "purple",
    label: "Open NAD+ bottle",
    className: "left-[28%] top-[12%] h-[78%] w-[21%]",
  },
  {
    key: "green",
    label: "Open GHK-CU bottle",
    className: "left-[50%] top-[9%] h-[80%] w-[21%]",
  },
  {
    key: "blue",
    label: "Open BPC-157 bottle",
    className: "left-[73%] top-[7%] h-[82%] w-[22%]",
  },
];

const activeHeroContent: Record<
  HeroBottleKey,
  { background: string; cta: string }
> = {
  orange: {
    background: "linear-gradient(180deg, #FFE7C8 0%, #FFFFFF 100%)",
    cta: "Browse Glutathione Peptides",
  },
  purple: {
    background: "linear-gradient(180deg, #E6DCF6 0%, #FFFFFF 100%)",
    cta: "Browse NAD+ Peptides",
  },
  green: {
    background: "linear-gradient(180deg, #D7FFF9 0%, #FFFFFF 100%)",
    cta: "Browse GHK-CU Peptides",
  },
  blue: {
    background: "linear-gradient(180deg, #D3E5FF 0%, #FFFFFF 100%)",
    cta: "Browse BPC-157 Peptides",
  },
};

export function Hero() {
  const [activeBottle, setActiveBottle] = useState<HeroBottleKey | null>(null);
  const heroBackground = activeBottle
    ? activeHeroContent[activeBottle].background
    : defaultHeroBackground;
  const primaryCta = activeBottle
    ? activeHeroContent[activeBottle].cta
    : "Browse All Peptides";

  useEffect(() => {
    heroStates.forEach((state) => {
      const image = new window.Image();
      image.src = state.src;
    });
  }, []);

  return (
    <section
      className="relative isolate h-[1040px] overflow-hidden transition-colors duration-500"
      style={{ background: heroBackground }}
    >
      <div className="section-shell relative flex h-full flex-col items-center px-2 py-[72px]">
        <div className="mx-auto flex h-[306px] w-full max-w-[750px] flex-col items-center text-center">
          <h1 className="max-w-[750px] font-[family-name:var(--font-plus-jakarta-sans)] text-[48px] font-semibold leading-[115%] tracking-[-0.03em] text-[#1B2537] sm:text-[60px] lg:text-[72px]">
            Precision Peptides for
            <br />
            Next-Level Research
          </h1>
          <p className="mt-4 max-w-[560px] font-[family-name:var(--font-plus-jakarta-sans)] text-base font-medium leading-[150%] text-[rgba(27,37,55,0.45)] sm:text-lg">
            Divine Aminos provides amino and peptide compounds produced under
            rigorous standards to support breakthrough discoveries.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-[6px] pt-3">
            <Link
              href="/peptides"
              className="focus-ring inline-flex h-[42px] items-center justify-center rounded-xl bg-[#1B2537] px-6 font-[family-name:var(--font-plus-jakarta-sans)] text-base font-semibold leading-[140%] tracking-[-0.01em] text-white transition hover:-translate-y-0.5 hover:bg-[#253148]"
            >
              {primaryCta}
            </Link>
            <Link
              href="/research"
              className="focus-ring inline-flex h-[42px] items-center justify-center rounded-xl px-6 font-[family-name:var(--font-plus-jakarta-sans)] text-base font-medium leading-[140%] tracking-[-0.01em] text-[#0B1022] transition hover:bg-white/30"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="absolute left-1/2 top-[417px] z-10 aspect-[974/551] w-[min(974px,calc(100%-64px))] -translate-x-1/2 overflow-visible">
          {heroStates.map((state) => {
            const isVisible =
              state.key === (activeBottle ?? "default");

            return (
              <Image
                key={state.key}
                src={state.src}
                alt={state.alt}
                aria-hidden={!isVisible}
                fill
                priority
                sizes="974px"
                className={`object-contain object-center ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                draggable={false}
              />
            );
          })}

          <div className="absolute inset-0 z-20">
            {bottleTriggers.map((trigger) => (
              <button
                key={trigger.key}
                aria-label={trigger.label}
                aria-pressed={activeBottle === trigger.key}
                className={`absolute rounded-3xl outline-none ${trigger.className}`}
                onClick={() =>
                  setActiveBottle((current) =>
                    current === trigger.key ? null : trigger.key,
                  )
                }
                type="button"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
