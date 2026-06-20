"use client";

import Image from "next/image";
import { ChevronDown, Globe2, Mail, User } from "lucide-react";
import { useState } from "react";

const tierOptions = ["Tier I", "Tier II", "Tier III"];

type FormState = {
  fullName: string;
  email: string;
  platformUrl: string;
  tier: string;
  focus: string;
  confirmed: boolean;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  platformUrl: "",
  tier: "",
  focus: "",
  confirmed: false,
};

export function AffiliateApplication() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setSubmitted(false);
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const savedSubmissions = JSON.parse(
      window.localStorage.getItem("affiliateApplications") ?? "[]",
    );
    window.localStorage.setItem(
      "affiliateApplications",
      JSON.stringify([
        ...savedSubmissions,
        {
          ...form,
          submittedAt: new Date().toISOString(),
        },
      ]),
    );

    setSubmitted(true);
    setForm(initialFormState);
  }

  return (
    <section
      className="relative isolate h-[1018px] overflow-hidden bg-[#0B1222] font-[family-name:var(--font-plus-jakarta-sans)]"
      id="program-application"
    >
      <Image
        alt="Affiliate application background with bottles"
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-[1090px] w-[1440px] max-w-none -translate-x-1/2 select-none"
        draggable={false}
        height={1090}
        priority={false}
        src="/affiliate-application.svg"
        unoptimized
        width={1440}
      />

      <a
        aria-label="Read affiliate FAQs"
        className="absolute left-1/2 top-[246px] z-20 h-[46px] w-[228px] -translate-x-[229px] rounded-xl"
        href="#affiliate-faqs"
      />

      <form
        aria-label="Affiliate program application"
        className="absolute left-1/2 top-[344px] z-20 flex h-[674px] w-[min(480px,calc(100%-64px))] -translate-x-1/2 flex-col rounded-3xl border border-[#E2E8F0] bg-white px-5 pb-6 pt-[23px]"
        onSubmit={handleSubmit}
      >
        <Field label="Full Name">
          <User className="h-5 w-5 shrink-0 text-[#999999]" strokeWidth={2} />
          <input
            className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#0B1022] outline-none placeholder:text-[#999999]"
            onChange={(event) => updateField("fullName", event.target.value)}
            placeholder="Jared Parks"
            required
            type="text"
            value={form.fullName}
          />
        </Field>

        <Field label="Email Address">
          <Mail className="h-5 w-5 shrink-0 text-[#999999]" strokeWidth={2} />
          <input
            className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#0B1022] outline-none placeholder:text-[#999999]"
            onChange={(event) => updateField("email", event.target.value)}
            placeholder="researcher@lab.com"
            required
            type="email"
            value={form.email}
          />
        </Field>

        <Field label="Platform URL">
          <Globe2 className="h-5 w-5 shrink-0 text-[#999999]" strokeWidth={2} />
          <input
            className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[#0B1022] outline-none placeholder:text-[#999999]"
            onChange={(event) => updateField("platformUrl", event.target.value)}
            placeholder="https://platform.com"
            required
            type="url"
            value={form.platformUrl}
          />
        </Field>

        <label className="mb-6 flex flex-col gap-2">
          <span className="text-xs font-medium leading-[120%] text-[#0B1022]">
            Tier
          </span>
          <span className="relative flex h-12 items-center rounded-xl bg-[rgba(226,232,240,0.3)] px-4">
            <select
              className="h-full w-full appearance-none bg-transparent text-sm font-medium text-[#999999] outline-none"
              onChange={(event) => updateField("tier", event.target.value)}
              required
              value={form.tier}
            >
              <option value="">Select tier...</option>
              {tierOptions.map((tier) => (
                <option key={tier} value={tier}>
                  {tier}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-4 h-5 w-5 text-[#999999]"
              strokeWidth={2}
            />
          </span>
        </label>

        <label className="mb-[18px] flex flex-col gap-2">
          <span className="text-xs font-medium leading-[120%] text-[#0B1022]">
            Research Focus / Niche
          </span>
          <textarea
            className="h-[120px] resize-none rounded-xl bg-[rgba(226,232,240,0.3)] px-4 py-3 text-sm font-medium text-[#0B1022] outline-none placeholder:text-[#999999]"
            onChange={(event) => updateField("focus", event.target.value)}
            required
            value={form.focus}
          />
        </label>

        <label className="mb-2 flex items-center gap-1.5 text-xs font-medium leading-5 text-[#999999]">
          <input
            checked={form.confirmed}
            className="h-4 w-4 shrink-0 rounded border border-[#E2E8F0] accent-[#1B2537]"
            onChange={(event) => updateField("confirmed", event.target.checked)}
            required
            type="checkbox"
          />
          <span>
            I confirm that my platform strictly adheres to research-only guidelines
          </span>
        </label>

        <button
          className="flex h-[46px] items-center justify-center rounded-xl bg-[#1B2537] px-6 text-base font-semibold leading-[140%] tracking-[-0.01em] text-white transition hover:bg-[#253148]"
          type="submit"
        >
          Submit Application
        </button>

        {submitted ? (
          <p className="mt-3 text-center text-sm font-semibold text-[#64B19A]">
            Application saved. We can connect this to email or CRM next.
          </p>
        ) : null}
      </form>
    </section>
  );
}

function Field({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <label className="mb-6 flex flex-col gap-2">
      <span className="text-xs font-medium leading-[120%] text-[#0B1022]">
        {label}
      </span>
      <span className="flex h-[46px] items-center gap-[9px] rounded-xl bg-[rgba(226,232,240,0.3)] px-4 py-3">
        {children}
      </span>
    </label>
  );
}
