import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#1A504F] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="AraBalance Logo"
              width={493}
              height={125}
              className="h-10 w-auto brightness-0 invert"
            />
          </Link>
        </div>
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 shrink-0" aria-hidden />
            <p className="text-sm leading-relaxed">
              Kuala Lumpur,
              <br />
              Malaysia
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="mt-1 h-5 w-5 shrink-0" aria-hidden />
            <p className="text-sm">info@arabalance.com</p>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="mt-1 h-5 w-5 shrink-0" aria-hidden />
            <p className="text-sm">+(60) 011-2857 3384</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 md:flex-row">
          <p className="text-sm">© AraBalance. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="transition-colors hover:text-[#4CAF50]"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="transition-colors hover:text-[#4CAF50]"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
