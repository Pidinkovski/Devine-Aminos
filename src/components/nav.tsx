import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";
import { DivineLogo } from "@/components/divine-logo";

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
        <Link href="/" aria-label="Divine Aminos home">
          <DivineLogo color="dark" size="nav" />
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
