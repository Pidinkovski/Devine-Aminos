"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";
import { DivineLogo } from "@/components/divine-logo";

export function AuthPanel({ mode }: { mode: "login" | "signup" }) {
  const isSignup = mode === "signup";
  const [codeSent, setCodeSent] = useState(false);
  const codeRefs = useRef<Array<HTMLInputElement | null>>([]);
  const actionLabel = isSignup ? "Create Account" : "Send 2FA Code";
  const secondaryLabel = isSignup ? "Login" : "Sign Up";
  const secondaryHref = isSignup ? "/login" : "/signup";
  const showTwoFactor = !isSignup && codeSent;

  function handlePrimarySubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isSignup) {
      setCodeSent(true);
    }
  }

  function handleCodeChange(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) {
    const value = event.target.value.replace(/\D/g, "").slice(-1);
    event.target.value = value;

    if (value && index < codeRefs.current.length - 1) {
      codeRefs.current[index + 1]?.focus();
    }
  }

  function handleCodeKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) {
    if (event.key === "Backspace" && !event.currentTarget.value && index > 0) {
      codeRefs.current[index - 1]?.focus();
    }
  }

  return (
    <section className="fixed inset-0 z-50 grid min-h-screen place-items-center overflow-y-auto bg-[linear-gradient(180deg,#BED0E1_0%,#E2F1FB_100%)] px-4 py-10">
      <div
        className={`flex w-full max-w-[448px] flex-col items-center overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white pb-8 ${
          showTwoFactor ? "h-[353px]" : ""
        }`}
      >
        <div className="flex h-[103px] w-full items-center justify-center border-b border-[#E2E8F0] bg-[#F6F8FB] px-6 pb-[24.01px] pt-[27px]">
          <Link href="/" aria-label="Go to homepage">
            <DivineLogo color="dark" size="auth" />
          </Link>
        </div>

        {showTwoFactor ? (
          <form
            className="flex w-full max-w-[398px] flex-col items-start gap-4 pt-[18px]"
            onSubmit={(event) => event.preventDefault()}
          >
            <button
              className="focus-ring inline-flex h-[22px] items-center gap-1 rounded-md pr-2 font-[family-name:var(--font-plus-jakarta-sans)] text-xs font-medium leading-[120%] text-[#777C83] transition hover:text-[#0B1022]"
              onClick={() => setCodeSent(false)}
              type="button"
            >
              <ArrowLeft aria-hidden="true" className="size-3.5" />
              Back
            </button>

            <label className="flex h-[87px] w-full flex-col gap-2">
              <span className="font-[family-name:var(--font-plus-jakarta-sans)] text-xs font-medium leading-[120%] text-[#0B1022]">
                Enter Code
              </span>
              <span className="grid h-16 w-full grid-cols-6 gap-2">
                {Array.from({ length: 6 }, (_, index) => (
                  <input
                    key={index}
                    ref={(node) => {
                      codeRefs.current[index] = node;
                    }}
                    aria-label={`2FA digit ${index + 1}`}
                    className="focus-ring h-16 min-w-0 rounded-xl bg-[rgba(226,232,240,0.3)] px-3 text-center font-[family-name:var(--font-plus-jakarta-sans)] text-2xl font-semibold text-[#0B1022] outline-none"
                    inputMode="numeric"
                    maxLength={1}
                    name={`code-${index + 1}`}
                    onChange={(event) => handleCodeChange(event, index)}
                    onKeyDown={(event) => handleCodeKeyDown(event, index)}
                    type="text"
                  />
                ))}
              </span>
            </label>

            <button
              className="focus-ring flex h-[46px] w-full items-center justify-center rounded-xl bg-[#1B2537] px-6 font-[family-name:var(--font-plus-jakarta-sans)] text-base font-semibold leading-[140%] tracking-[-0.01em] text-white transition hover:bg-[#253148]"
              type="submit"
            >
              Verify
            </button>
          </form>
        ) : (
        <form
          className="flex w-full max-w-[398px] flex-col items-start gap-6 pt-[23px]"
          onSubmit={handlePrimarySubmit}
        >
          {isSignup ? (
            <TextField
              label="Full Name"
              name="name"
              placeholder="Jared Parks"
              type="text"
            />
          ) : null}

          <TextField
            label="Email Address"
            name="email"
            placeholder="researcher@lab.com"
            type="email"
          />

          <div className="flex w-full flex-col items-center gap-3">
            <div className="flex w-full flex-col items-start gap-2.5">
              <label className="flex h-6 w-full items-center gap-1.5 pt-2">
                <input
                  className="focus-ring size-4 rounded border border-[#E2E8F0] bg-[#F6F8FB] accent-[#1B2537]"
                  name="remember"
                  type="checkbox"
                />
                <span className="font-[family-name:var(--font-plus-jakarta-sans)] text-xs font-medium leading-[120%] text-[#999999]">
                  Remember Me
                </span>
            </label>

            <button
              className="focus-ring flex h-[46px] w-full items-center justify-center rounded-xl bg-[#1B2537] px-6 font-[family-name:var(--font-plus-jakarta-sans)] text-base font-semibold leading-[140%] tracking-[-0.01em] text-white transition hover:bg-[#253148]"
              type="submit"
              >
                {actionLabel}
              </button>
            </div>

            <Link
              className="focus-ring flex h-[46px] w-full items-center justify-center rounded-xl bg-[rgba(246,248,251,0.7)] px-6 font-[family-name:var(--font-plus-jakarta-sans)] text-base font-semibold leading-[140%] tracking-[-0.01em] text-[#0B1022] transition hover:bg-[#F6F8FB]"
              href={secondaryHref}
            >
              {secondaryLabel}
            </Link>
          </div>
        </form>
        )}
      </div>
    </section>
  );
}

function TextField({
  label,
  name,
  placeholder,
  type,
}: {
  label: string;
  name: string;
  placeholder: string;
  type: "email" | "text";
}) {
  return (
    <label className="flex w-full flex-col gap-2">
      <span className="font-[family-name:var(--font-plus-jakarta-sans)] text-xs font-medium leading-[120%] text-[#0B1022]">
        {label}
      </span>
      <span className="flex h-[46px] w-full items-center gap-[9px] rounded-xl bg-[rgba(226,232,240,0.3)] px-4 pb-3.5 pt-3">
        <Mail aria-hidden="true" className="size-5 shrink-0 text-[#999999]" />
        <input
          className="h-full min-w-0 flex-1 bg-transparent font-[family-name:var(--font-plus-jakarta-sans)] text-sm font-medium leading-[121%] text-[#0B1022] outline-none placeholder:text-[#999999]"
          name={name}
          placeholder={placeholder}
          type={type}
        />
      </span>
    </label>
  );
}
