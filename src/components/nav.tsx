import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/peptides", label: "Peptides" },
  { href: "/research", label: "Research" },
  { href: "/affiliate-program", label: "Affiliate Program" },
  { href: "/contact", label: "Contact Us" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-[#f7fbff]">
      <div className="mx-auto flex h-[58px] w-full max-w-[1440px] items-center justify-between px-[30px]">
        <Link href="/" className="flex items-center gap-[5px]" aria-label="Divine Aminos home">
          <span className="relative h-[18px] w-[24px] text-[#071326]">
            <span className="absolute left-0 top-[4px] h-[10px] w-[10px] rounded-[2px] bg-current" />
            <span className="absolute left-[9px] top-[2px] h-[14px] w-[14px] rounded-full border-[5px] border-current" />
          </span>
          <span className="leading-[0.78] text-[#071326]">
            <span className="block text-[28px] font-black tracking-[-0.04em]">divine</span>
            <span className="ml-[42px] block text-[10px] font-semibold tracking-[-0.02em]">
              aminos
            </span>
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[20px] text-[10px] font-medium text-[#071326] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:opacity-60">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-[22px] text-[#071326]">
          <button className="focus-ring hidden items-center gap-[6px] text-[10px] font-medium md:inline-flex">
            <Search size={14} strokeWidth={2.4} />
            Search
          </button>
          <Link
            href="/peptides"
            className="focus-ring inline-flex items-center justify-center"
            aria-label="Cart"
          >
            <ShoppingCart size={14} strokeWidth={2.8} />
          </Link>
          <Link href="/login" className="focus-ring inline-flex items-center justify-center" aria-label="Account">
            <User size={14} strokeWidth={3} />
          </Link>
        </div>
      </div>
    </header>
  );
}
