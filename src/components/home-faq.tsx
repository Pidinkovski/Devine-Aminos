"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What is Divine Aminos?",
    answer:
      "Divine Aminos provides research-grade amino acid and peptide compounds developed with strict standards of purity, transparency, and consistency. Our products are intended exclusively for laboratory research.",
  },
  {
    question: "How does your testing process work?",
    answer:
      "Every batch is reviewed for analytical quality and documented with lab information before being made available for research use.",
  },
  {
    question: "Are your products verified?",
    answer:
      "Products are organized around batch documentation, purity data, and certificate routes so researchers can review supporting records.",
  },
  {
    question: "Do I need any special license to purchase?",
    answer:
      "Requirements can vary by location and intended use. Divine Aminos products are for qualified research use only.",
  },
  {
    question: "How should peptides be stored?",
    answer:
      "Storage guidance should follow the lot-specific certificate and supplier documentation attached to each product batch.",
  },
  {
    question: "Do you offer refunds or replacements?",
    answer:
      "Support requests are reviewed case by case. Contact the team with order details and batch information for assistance.",
  },
];

export function HomeFaq({
  id = "faq",
  topPadding = false,
}: {
  id?: string;
  topPadding?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className={[
        "flex w-full flex-col items-center gap-2.5 bg-white px-8 pb-[72px]",
        topPadding ? "pt-[72px]" : "",
      ].join(" ")}
      id={id}
    >
      <div className="flex min-h-[666px] w-full max-w-[1280px] flex-col justify-between gap-10 rounded-[32px] bg-[#F4F8FB] px-8 py-14 lg:flex-row lg:items-start lg:px-14 lg:py-[86px]">
        <div className="mx-auto flex w-full max-w-[450px] flex-col items-start gap-6 lg:mx-0">
          <div className="flex w-full flex-col items-start justify-center gap-6">
            <div className="flex w-full flex-col items-start justify-center gap-3">
              <div className="flex h-[18px] items-center gap-2 px-0.5">
                <p className="font-[family-name:var(--font-plus-jakarta-sans)] text-sm font-medium leading-[130%] tracking-[-0.01em] text-[#777C83]">
                  FAQs
                </p>
              </div>
              <h2 className="font-[family-name:var(--font-plus-jakarta-sans)] text-[40px] font-semibold leading-[125%] tracking-[-0.03em] text-[#1B2537] sm:text-5xl">
                Have any questions?
                <br />
                We&apos;re here to assist.
              </h2>
            </div>
          </div>
          <button className="flex h-[46px] items-center justify-center rounded-xl bg-[rgba(13,13,12,0.05)] px-6 py-3 backdrop-blur-sm">
            <span className="font-[family-name:var(--font-plus-jakarta-sans)] text-base font-medium leading-[140%] tracking-[-0.02em] text-[#0C0C0D]">
              View all FAQs
            </span>
          </button>
        </div>

        <div className="mx-auto flex w-full max-w-[636px] flex-col items-start gap-3 lg:mx-0">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className={`flex w-full flex-col items-start gap-6 rounded-xl bg-white p-4 text-left transition ${
                  isOpen ? "min-h-[159px]" : "min-h-[55px]"
                }`}
              >
                <span className="flex h-[23px] w-full items-center justify-between gap-8">
                  <span className="font-[family-name:var(--font-plus-jakarta-sans)] text-xl font-medium leading-[115%] tracking-[-0.03em] text-[#0C0C0D]">
                    {item.question}
                  </span>
                  <AccordionIcon open={isOpen} />
                </span>

                {isOpen ? (
                  <span className="flex w-full flex-col items-start justify-center gap-2">
                    <span className="max-w-[640px] font-[family-name:var(--font-plus-jakarta-sans)] text-sm font-medium leading-[130%] tracking-[-0.01em] text-[#777C83]">
                      {item.answer}
                    </span>
                    <span className="h-[18px] w-full" />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AccordionIcon({ open }: { open: boolean }) {
  return (
    <span className="relative h-5 w-5 flex-none" aria-hidden="true">
      <span className="absolute left-[15.62%] right-[15.62%] top-1/2 border-t-[1.5px] border-[#6397D6]" />
      <span
        className={`absolute bottom-[15.62%] top-[15.62%] left-1/2 border-l-[1.5px] border-[#6397D6] transition ${
          open ? "rotate-90 opacity-100" : "opacity-100"
        }`}
      />
    </span>
  );
}
