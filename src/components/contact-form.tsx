"use client";

import { Building2, Mail, MessageSquare, User } from "lucide-react";
import { useState } from "react";

type ContactFormState = {
  fullName: string;
  email: string;
  platform: string;
  message: string;
};

const initialContactForm: ContactFormState = {
  fullName: "",
  email: "",
  platform: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormState>(initialContactForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField<K extends keyof ContactFormState>(
    field: K,
    value: ContactFormState[K],
  ) {
    setSubmitted(false);
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const savedMessages = JSON.parse(
      window.localStorage.getItem("contactMessages") ?? "[]",
    );

    window.localStorage.setItem(
      "contactMessages",
      JSON.stringify([
        ...savedMessages,
        {
          ...form,
          submittedAt: new Date().toISOString(),
        },
      ]),
    );

    setSubmitted(true);
    setForm(initialContactForm);
  }

  return (
    <form
      aria-label="Contact Divine Aminos"
      className="flex min-h-[541px] w-full max-w-[480px] flex-col rounded-3xl border border-[#E2E8F0] bg-white px-5 pb-6 pt-[23px] font-[family-name:var(--font-plus-jakarta-sans)]"
      onSubmit={handleSubmit}
    >
      <Field label="Full Name">
        <User className="h-5 w-5 shrink-0 text-[#999999]" strokeWidth={2} />
        <input
          className="min-w-0 flex-1 bg-transparent text-sm font-medium leading-[121%] text-[#0B1022] outline-none placeholder:text-[#999999]"
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
          className="min-w-0 flex-1 bg-transparent text-sm font-medium leading-[121%] text-[#0B1022] outline-none placeholder:text-[#999999]"
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="researcher@lab.com"
          required
          type="email"
          value={form.email}
        />
      </Field>

      <Field label="Platform URL">
        <Building2 className="h-5 w-5 shrink-0 text-[#999999]" strokeWidth={2} />
        <input
          className="min-w-0 flex-1 bg-transparent text-sm font-medium leading-[121%] text-[#0B1022] outline-none placeholder:text-[#999999]"
          onChange={(event) => updateField("platform", event.target.value)}
          placeholder="https://platform.com"
          type="url"
          value={form.platform}
        />
      </Field>

      <label className="mb-6 flex flex-col gap-2">
        <span className="text-xs font-medium leading-[120%] text-[#0B1022]">
          Research Focus / Notes
        </span>
        <span className="flex h-[120px] items-start gap-[9px] rounded-xl bg-[rgba(226,232,240,0.3)] px-4 py-3">
          <MessageSquare
            className="mt-0.5 h-5 w-5 shrink-0 text-[#999999]"
            strokeWidth={2}
          />
          <textarea
            className="min-h-full min-w-0 flex-1 resize-none bg-transparent text-sm font-medium leading-[150%] text-[#0B1022] outline-none placeholder:text-[#999999]"
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us how we can help..."
            required
            value={form.message}
          />
        </span>
      </label>

      <button
        className="mt-auto flex h-[46px] items-center justify-center rounded-xl bg-[#1B2537] px-6 text-base font-semibold leading-[140%] tracking-[-0.01em] text-white transition hover:bg-[#253148]"
        type="submit"
      >
        Submit
      </button>

      {submitted ? (
        <p className="mt-3 text-center text-sm font-semibold text-[#64B19A]">
          Message saved. We can connect this to email or CRM next.
        </p>
      ) : null}
    </form>
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
