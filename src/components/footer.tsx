import Link from "next/link";
import { DivineLogo } from "@/components/divine-logo";

type FooterLink = [label: string, href: string];

export function Footer() {
  const informationLinks: FooterLink[] = [
    ["Peptides listing", "/peptides"],
    ["Research", "/research"],
    ["FAQ", "/#faq"],
    ["Testimonials", "/#testimonials"],
  ];
  const helpfulLinks: FooterLink[] = [
    ["Supports", "/contact"],
    ["Terms & Condition", "/terms"],
    ["Privacy Policy", "/privacy"],
  ];
  const serviceLinks: FooterLink[] = [
    ["Brands list", "/peptides"],
    ["Order", "/login"],
    ["Return & Exchange", "/contact"],
  ];

  return (
    <footer className="mt-auto bg-[#0B1222] px-8 py-[52px] font-[family-name:var(--font-plus-jakarta-sans)] text-white">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 lg:min-h-[211px] lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        <div className="flex w-full max-w-[304px] flex-col items-start gap-8 lg:min-h-[211px]">
          <div className="flex flex-col items-start gap-6">
            <Link href="/" aria-label="Divine Aminos home">
              <DivineLogo color="light" size="footer" />
            </Link>
            <div className="flex h-8 items-start gap-3">
              {["o", "G", "f", "tg"].map((label) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={`${label} social link`}
                  className="grid size-8 place-items-center rounded-full bg-[#E6F3FF] text-[12px] font-bold leading-none text-[#0B1022]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-2">
            <h2 className="text-[18px] font-semibold leading-[28px] text-white">
              Affiliate Program
            </h2>
            <form className="flex h-[35px] w-full gap-2" action="#">
              <label className="flex h-[35px] flex-1 items-center gap-2 rounded-[12px] bg-[rgba(226,232,240,0.25)] px-4 text-[#C6C6CC]">
                <MailIcon />
                <span className="sr-only">Email</span>
                <input
                  className="min-w-0 flex-1 bg-transparent text-[12px] font-normal leading-[15px] text-[#C6C6CC] outline-none placeholder:text-[#C6C6CC]"
                  placeholder="Enter your Email"
                  type="email"
                />
              </label>
              <button
                className="h-[35px] w-[92px] rounded-[12px] bg-[#E6F3FF] px-4 text-[12px] font-bold leading-[15px] text-[#0B1022]"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex w-full max-w-[742px] flex-col items-start gap-6 lg:items-end">
          <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-[180.67px_180.67px_180.67px_200px] lg:gap-0">
            <FooterColumn title="Information" links={informationLinks} />
            <FooterColumn title="Helpful Links" links={helpfulLinks} />
            <FooterColumn title="Our Services" links={serviceLinks} />
            <div className="flex min-w-[200px] flex-col items-start gap-3">
              <h3 className="text-[18px] font-semibold leading-[28px] text-white">
                Contact Us
              </h3>
              <div className="flex flex-col items-start gap-3 text-[14px] font-medium leading-[18px] text-[#C6C6CC]">
                <Link className="flex items-center gap-3 transition hover:text-white" href="tel:+919999999999">
                  <PhoneIcon />
                  <span>+91 9999 999 999</span>
                </Link>
                <Link className="flex items-center gap-3 transition hover:text-white" href="mailto:youremailid.com">
                  <MailIcon large />
                  <span>youremailid.com</span>
                </Link>
              </div>
            </div>
          </div>
          <p className="rounded-[8px] bg-[rgba(243,138,93,0.3)] px-3 py-1 text-[12px] font-semibold leading-[17px] tracking-[-0.01em] text-[#F38A5D]">
            *Research use only disclaimer
          </p>
        </div>
      </div>

      <div className="mt-[52px] border-t border-[rgba(226,232,240,0.25)] pt-4">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 font-[family-name:var(--font-inter)] text-[12px] font-normal leading-4 text-[rgba(226,232,240,0.5)] sm:flex-row sm:items-center sm:justify-between">
          <p>2018 © company.Ltd. | All Right reserved</p>
          <div className="flex gap-4">
            <Link className="transition hover:text-white" href="/#faq">
              FAQ
            </Link>
            <Link className="transition hover:text-white" href="/privacy">
              Privacy
            </Link>
            <Link className="transition hover:text-white" href="/terms">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: {
  title: string;
  links: FooterLink[];
}) {
  return (
    <div className="flex min-w-[150px] flex-col items-start gap-3">
      <h3 className="text-[18px] font-semibold leading-[28px] text-white">{title}</h3>
      <div className="grid gap-3 text-[14px] font-medium leading-[18px] text-[#C6C6CC]">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="transition hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" className="size-5 shrink-0" fill="none" viewBox="0 0 20 20">
      <path
        d="M7.1 3.5 8.4 6.4c.2.5.1 1-.3 1.4l-1 1a10.3 10.3 0 0 0 4.1 4.1l1-1c.4-.4 1-.5 1.4-.3l2.9 1.3c.5.2.8.7.8 1.2v2.1c0 .7-.6 1.3-1.3 1.3A13.5 13.5 0 0 1 2.5 4c0-.7.6-1.3 1.3-1.3h2.1c.5 0 1 .3 1.2.8Z"
        stroke="#C6C6CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.67"
      />
    </svg>
  );
}

function MailIcon({ large = false }: { large?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className={`${large ? "size-5" : "h-3.5 w-3.5"} shrink-0`}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        d="M3 5.5h14v9H3v-9Z"
        stroke="#C6C6CC"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m3.5 6 6.5 5 6.5-5"
        stroke="#C6C6CC"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
