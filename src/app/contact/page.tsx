import Link from "next/link";
import Image from "next/image";
import { AtSign, Globe2, MessageCircle, Send } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { HomeFaq } from "@/components/home-faq";

const contactLinks = [
  { icon: AtSign, label: "Email" },
  { icon: Globe2, label: "Website" },
  { icon: MessageCircle, label: "Chat" },
  { icon: Send, label: "Telegram" },
];

export default function ContactPage() {
  return (
    <>
      <section className="flex w-full flex-col items-center bg-white px-8 py-[72px] font-[family-name:var(--font-plus-jakarta-sans)]">
        <div className="flex w-full max-w-[1280px] flex-col justify-center gap-10 md:min-h-[621px]">
          <div className="grid w-full gap-12 md:grid-cols-[minmax(0,1fr)_minmax(360px,480px)] md:items-start md:gap-10 xl:grid-cols-[minmax(0,680px)_480px] xl:gap-[120px]">
            <div className="flex w-full flex-col items-start gap-[30px]">
              <div className="flex w-full max-w-[680px] flex-col items-start gap-1">
                <h1 className="max-w-[680px] text-[40px] font-semibold leading-[110%] tracking-[-1px] text-[#191C1E]">
                  We are always ready
                  <br />
                  to answer your questions
                </h1>
                <p className="max-w-[448px] pt-4 text-lg font-medium leading-[150%] text-[rgba(27,37,55,0.45)]">
                  For precise assistance regarding laboratory formulations,
                  Certificate of Analysis (COA) verification, or wholesale distribution.
                </p>
              </div>

              <div className="flex h-8 items-start gap-3">
                {contactLinks.map(({ icon: Icon, label }) => (
                  <Link
                    aria-label={label}
                    className="grid h-8 w-8 place-items-center rounded-full bg-[#E6F3FF] text-[#0B1022] transition hover:-translate-y-0.5"
                    href="#"
                    key={label}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2.2} />
                  </Link>
                ))}
              </div>

              <div className="flex w-full max-w-[680px] flex-col items-start gap-6">
                <div className="grid w-full gap-6 sm:grid-cols-2 sm:gap-x-8">
                  <div className="flex flex-col items-start gap-2">
                    <h2 className="text-lg font-semibold leading-7 text-[#0B1022]">
                      Email
                    </h2>
                    <a
                      className="text-sm font-normal leading-5 text-[#45474C]"
                      href="mailto:support@divineatmos.com"
                    >
                      support@divineatmos.com
                    </a>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <h2 className="text-lg font-semibold leading-7 text-[#0B1022]">
                      Our Location
                    </h2>
                    <p className="text-sm font-normal leading-5 text-[#45474C]">
                      Str. First Avenue 1, USA, New York - 1060
                    </p>
                  </div>
                </div>

                <ContactMap />
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <ContactCta />
      <HomeFaq id="contact-faqs" topPadding />
    </>
  );
}

function ContactMap() {
  return (
    <div
      aria-label="Map preview for Divine Aminos location"
      className="relative h-[260px] w-full overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[#12365A]"
      role="img"
    >
      <Image
        alt=""
        className="object-cover"
        fill
        priority
        sizes="(min-width: 1280px) 680px, (min-width: 768px) calc((100vw - 104px) / 2), calc(100vw - 64px)"
        src="/contact-map.png"
      />
    </div>
  );
}

function ContactCta() {
  return (
    <section className="flex min-h-[450px] w-full flex-col items-center justify-center bg-[#0B1222] px-8 py-[72px] font-[family-name:var(--font-plus-jakarta-sans)] text-white">
      <div className="flex w-full max-w-[750px] flex-col items-center text-center">
        <h2 className="max-w-[750px] text-5xl font-semibold leading-[115%] tracking-[-0.03em] sm:text-[60px] lg:text-[72px]">
          Precision Peptides for
          <br />
          Next-Level Research
        </h2>
        <p className="mt-4 max-w-[560px] text-lg font-medium leading-[150%] text-[rgba(226,232,240,0.7)]">
          Divine Aminos provides amino and peptide compounds produced under
          rigorous standards to support breakthrough discoveries.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-[6px] pt-3">
          <Link
            className="flex h-[42px] items-center justify-center rounded-xl bg-white px-6 text-base font-semibold leading-[140%] tracking-[-0.01em] text-[#0B1022] transition hover:-translate-y-0.5"
            href="/peptides"
          >
            Browse All Peptides
          </Link>
          <Link
            className="flex h-[42px] items-center justify-center rounded-xl px-6 text-base font-medium leading-[140%] tracking-[-0.01em] text-white transition hover:bg-white/10"
            href="/research"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
