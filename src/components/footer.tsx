import Link from "next/link";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto bg-slate-950 text-white">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <p className="text-xl font-black">divine aminos</p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
            Precision peptides for next-level research. Products are for laboratory
            research use only.
          </p>
          <div className="mt-6 flex gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-white/10">
              <MessageCircle size={18} />
            </span>
            <span className="grid size-10 place-items-center rounded-full bg-white/10">
              <Mail size={18} />
            </span>
            <span className="grid size-10 place-items-center rounded-full bg-white/10">
              <MapPin size={18} />
            </span>
          </div>
        </div>
        <FooterColumn title="Shop" links={[["Peptides", "/peptides"], ["CoA lookup", "/coa/bpc-157"]]} />
        <FooterColumn title="Company" links={[["Research", "/research"], ["Affiliate", "/affiliate-program"], ["Contact", "/contact"]]} />
        <FooterColumn title="Account" links={[["Login", "/login"], ["Sign up", "/signup"]]} />
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="section-shell flex flex-col gap-2 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Divine Aminos.</p>
          <p>Not for human or veterinary use.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<[string, string]>;
}) {
  return (
    <div>
      <p className="font-bold">{title}</p>
      <div className="mt-4 grid gap-3 text-sm text-slate-400">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="transition hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
