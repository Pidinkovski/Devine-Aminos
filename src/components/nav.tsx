import Link from "next/link";
import { FlaskConical, LogIn, Menu, Search, ShoppingBag } from "lucide-react";

const links = [
  { href: "/peptides", label: "Peptides" },
  { href: "/research", label: "Research" },
  { href: "/affiliate-program", label: "Affiliate" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="section-shell flex h-18 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-slate-950 text-white">
            <FlaskConical size={19} />
          </span>
          <span className="leading-none">
            <span className="block text-base font-black tracking-tight">divine</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
              aminos
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-950">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button className="focus-ring hidden size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-400 md:grid">
            <Search size={18} />
          </button>
          <Link
            href="/login"
            className="focus-ring hidden size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-400 sm:grid"
            aria-label="Login"
          >
            <LogIn size={18} />
          </Link>
          <button className="focus-ring grid size-10 place-items-center rounded-full bg-slate-950 text-white shadow-lg shadow-slate-950/15">
            <ShoppingBag size={18} />
          </button>
          <button className="focus-ring grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
