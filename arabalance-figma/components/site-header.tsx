"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "HOME" },
  { href: "/product", label: "PRODUCT" },
  { href: "/about-us", label: "ABOUT US" },
  { href: "/certifications", label: "CERTIFICATIONS" },
] as const;

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="AraBalance Logo"
            width={493}
            height={125}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>
        <nav className="flex max-w-[calc(100%-8rem)] flex-wrap items-center justify-end gap-3 overflow-x-auto text-sm sm:gap-6 md:max-w-none md:gap-8 md:text-base">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                isActive(pathname, href)
                  ? "font-semibold text-[#1A504F]"
                  : "text-gray-700 hover:text-[#1A504F]"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/buy-now"
            className="rounded-3xl bg-[#1A504F] px-6 py-2.5 text-white transition-colors hover:bg-[#143d3c]"
          >
            BUY NOW
          </Link>
        </nav>
      </div>
    </header>
  );
}
