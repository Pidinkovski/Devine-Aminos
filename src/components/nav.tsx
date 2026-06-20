"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { DivineLogo } from "@/components/divine-logo";
import { products } from "@/data/products";

const links = [
  { href: "/", label: "Home" },
  { href: "/peptides", label: "Peptides" },
  { href: "/research", label: "Research" },
  { href: "/affiliate-program", label: "Affiliate Program" },
  { href: "/contact", label: "Contact Us" },
];

type CartItem = {
  quantity?: number;
};

export function Nav() {
  const router = useRouter();
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return products.slice(0, 4);
    }

    return products
      .filter((product) =>
        [
          product.name,
          product.shortName,
          product.tag,
          product.description,
          product.benefits.join(" "),
          product.dosage.join(" "),
        ]
          .join(" ")
          .toLowerCase()
          .includes(query),
      )
      .slice(0, 5);
  }, [searchQuery]);

  useEffect(() => {
    function syncCartCount() {
      setCartCount(getStoredCartCount());
    }

    syncCartCount();
    window.addEventListener("storage", syncCartCount);
    window.addEventListener("divine-cart-updated", syncCartCount);

    return () => {
      window.removeEventListener("storage", syncCartCount);
      window.removeEventListener("divine-cart-updated", syncCartCount);
    };
  }, []);

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    const focusFrame = window.requestAnimationFrame(() => {
      searchInputRef.current?.focus();
    });

    return () => window.cancelAnimationFrame(focusFrame);
  }, [searchOpen]);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const query = searchQuery.trim();
    router.push(query ? `/peptides?search=${encodeURIComponent(query)}` : "/peptides");
    window.dispatchEvent(
      new CustomEvent("divine-product-search", { detail: query }),
    );
    setSearchOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-[#F7FBFF]">
      <div className="mx-auto flex h-[83px] w-full max-w-[1440px] items-center justify-between gap-2.5 px-8 py-6">
        <Link
          href="/"
          aria-label="Divine Aminos home"
          className="flex w-[189px] items-center"
        >
          <DivineLogo color="dark" size="nav" />
        </Link>

        <nav className="absolute left-1/2 hidden h-[22px] w-[474px] -translate-x-1/2 items-center gap-[19px] font-[family-name:var(--font-plus-jakarta-sans)] text-base font-medium leading-[140%] tracking-[-0.01em] text-[#0B1022] md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:opacity-60">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="relative flex h-6 w-[189px] items-center justify-end gap-8 text-[#0B1022]">
          <button
            aria-expanded={searchOpen}
            className="focus-ring hidden h-6 items-center gap-1.5 rounded-[3px] font-[family-name:var(--font-plus-jakarta-sans)] text-sm font-medium leading-[140%] tracking-[-0.01em] md:inline-flex"
            onClick={() => setSearchOpen((open) => !open)}
            type="button"
          >
            <Search size={24} strokeWidth={2} />
            Search
          </button>

          {searchOpen ? (
            <form
              className="absolute right-20 top-10 z-50 w-[340px] overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-2 font-[family-name:var(--font-plus-jakarta-sans)] shadow-[0_20px_60px_rgba(11,18,32,0.16)]"
              onSubmit={submitSearch}
            >
              <label className="flex h-11 items-center gap-2 rounded-xl bg-[#F6F8FB] px-3 text-[#0B1022]">
                <Search size={18} strokeWidth={2} />
                <input
                  ref={searchInputRef}
                  className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-[#999999]"
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search peptides..."
                  type="search"
                  value={searchQuery}
                />
              </label>

              <div className="mt-2 max-h-[280px] overflow-y-auto">
                {searchResults.length ? (
                  searchResults.map((product) => (
                    <Link
                      className="flex items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-sm transition hover:bg-[#F6F8FB]"
                      href={`/peptides/${product.slug}`}
                      key={product.slug}
                      onClick={() => setSearchOpen(false)}
                    >
                      <span>
                        <span className="block font-semibold text-[#1B2537]">
                          {product.name}
                        </span>
                        <span className="block text-xs font-medium text-[#777C83]">
                          {product.tag}
                        </span>
                      </span>
                      <span className="shrink-0 text-xs font-bold text-[#6FA8DF]">
                        View
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="px-3 py-4 text-sm font-medium text-[#777C83]">
                    No matching peptides found.
                  </p>
                )}
              </div>

              <button
                className="mt-2 flex h-10 w-full items-center justify-center rounded-xl bg-[#1B2537] text-sm font-semibold text-white transition hover:bg-[#253148]"
                type="submit"
              >
                Search Products
              </button>
            </form>
          ) : null}

          <Link
            href="/cart"
            className="focus-ring relative inline-flex items-center justify-center"
            aria-label={`Cart${cartCount ? `, ${cartCount} items` : ""}`}
          >
            <CartFilledIcon />
            {cartCount > 0 ? (
              <span className="absolute -right-2 -top-2 grid min-h-4 min-w-4 place-items-center rounded-full bg-[#6FA8DF] px-1 text-[10px] font-bold leading-none text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            ) : null}
          </Link>
          <Link href="/login" className="focus-ring inline-flex items-center justify-center" aria-label="Account">
            <UserFilledIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}

function getStoredCartCount() {
  try {
    const cart = JSON.parse(
      window.localStorage.getItem("divineAminosCart") ?? "[]",
    ) as CartItem[];

    return cart.reduce((total, item) => total + (Number(item.quantity) || 0), 0);
  } catch {
    return 0;
  }
}

function CartFilledIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M2.4 2.4H5.1L7.2 14.1H18.3L20.27 6.37C20.43 5.74 19.95 5.13 19.3 5.13H7.02L6.66 3.14C6.57 2.71 6.2 2.4 5.76 2.4H2.4Z"
        fill="currentColor"
      />
      <path
        d="M8.3 21.6C9.29 21.6 10.1 20.79 10.1 19.8C10.1 18.81 9.29 18 8.3 18C7.31 18 6.5 18.81 6.5 19.8C6.5 20.79 7.31 21.6 8.3 21.6Z"
        fill="currentColor"
      />
      <path
        d="M17.4 21.6C18.39 21.6 19.2 20.79 19.2 19.8C19.2 18.81 18.39 18 17.4 18C16.41 18 15.6 18.81 15.6 19.8C15.6 20.79 16.41 21.6 17.4 21.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function UserFilledIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12 11.2C14.15 11.2 15.9 9.45 15.9 7.3C15.9 5.15 14.15 3.4 12 3.4C9.85 3.4 8.1 5.15 8.1 7.3C8.1 9.45 9.85 11.2 12 11.2Z"
        fill="currentColor"
      />
      <path
        d="M4.95 20.6C5.72 16.7 8.34 14.3 12 14.3C15.66 14.3 18.28 16.7 19.05 20.6C19.16 21.14 18.74 21.6 18.19 21.6H5.81C5.26 21.6 4.84 21.14 4.95 20.6Z"
        fill="currentColor"
      />
    </svg>
  );
}
