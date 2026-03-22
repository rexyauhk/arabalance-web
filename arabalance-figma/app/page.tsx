import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";
import { FeatureCards } from "@/components/home/feature-cards";

const certifications = [
  "KKM Food Grade",
  "Halal Certified",
  "Kosher Label",
  "ISO 22000:2018",
  "FDA Registered",
  "ISO 9001:2015",
];

export default function HomePage() {
  return (
    <div className="relative pt-20">
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <pattern
            id="botanical"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="50" cy="50" r="2" fill="#1A504F" />
            <circle cx="150" cy="100" r="2" fill="#1A504F" />
            <circle cx="100" cy="150" r="2" fill="#1A504F" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#botanical)" />
        </svg>
      </div>

      <section className="relative overflow-hidden px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative z-10">
            <Image
              src="/images/product-box.jpg"
              alt="AraBalance product box — Your Natural Sugar Blocker, 21 sachets"
              width={600}
              height={600}
              className="mx-auto w-full max-w-lg"
              priority
            />
          </div>
          <div className="relative z-10">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              YOUR NATURAL
              <br />
              SUGAR BLOCKER
            </h1>
            <p className="mb-3 text-xl text-gray-600">
              PENGHALANG GULA SEMULAJADI ANDA
            </p>
            <p className="mb-8 leading-relaxed text-gray-600">
              AraBalance helps support healthy glucose balance with a
              scientifically formulated blend—your natural companion for
              everyday sugar management.
            </p>
            <Link
              href="/product"
              className="inline-block rounded-3xl bg-[#1A504F] px-8 py-3 text-white transition-colors hover:bg-[#143d3c]"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      <FeatureCards />

      <section className="border-y border-gray-200 bg-white py-10 md:py-12">
        <div className="mx-auto flex max-w-7xl flex-nowrap items-center justify-center gap-2 overflow-x-auto px-4 sm:gap-3 md:gap-5 lg:gap-6 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
          {certifications.map((label) => (
            <div key={label} className="flex shrink-0 items-center">
              <div className="mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1A504F]/10 sm:mr-3 sm:h-10 sm:w-10 md:h-12 md:w-12">
                <Award className="h-4 w-4 text-[#1A504F] sm:h-5 sm:w-5 md:h-6 md:w-6" aria-hidden />
              </div>
              <span className="whitespace-nowrap text-sm font-medium text-gray-700 sm:text-base md:text-lg">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
