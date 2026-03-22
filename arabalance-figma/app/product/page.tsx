import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Cake,
  ShoppingCart,
  Sparkles,
  TrendingDown,
  UtensilsCrossed,
  Wine,
} from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Sugar Blocker",
    description:
      "Reduces sucrose side effects by inhibiting absorption through L-Arabinose enzyme blocking mechanism",
  },
  {
    icon: Sparkles,
    title: "Prebiotic Effect",
    description:
      "Unabsorbed sugar feeds beneficial gut probiotics like Bifidobacterium, promoting digestive health",
  },
  {
    icon: TrendingDown,
    title: "Weight Support",
    description:
      "Helps inhibit fat accumulation by reducing the amount of sugar absorbed into the bloodstream",
  },
];

const applications = [
  { icon: UtensilsCrossed, label: "Cooking" },
  { icon: Cake, label: "Baking" },
  { icon: Wine, label: "Beverages" },
];

export default function ProductPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#1A504F]/5 to-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/images/product-box.jpg"
              alt="AraBalance Healthy Sugar"
              width={500}
              height={500}
              className="mx-auto w-full max-w-md"
            />
          </div>
          <div>
            <div className="mb-4 inline-block rounded-full bg-[#4CAF50] px-4 py-2 text-white">
              <span className="text-sm font-semibold">Healthy Sugar Innovation</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              AraBalance
              <br />
              Healthy Sugar
            </h1>
            <div className="mb-6 rounded-3xl border-2 border-[#1A504F] bg-white p-6">
              <p className="text-center text-2xl font-bold text-[#1A504F]">
                95-97% Sucrose + 3-5% L-Arabinose
              </p>
            </div>
            <p className="mb-8 leading-relaxed text-gray-600">
              Revolutionary sugar blend that maintains sweetness while reducing
              health impacts through natural enzyme inhibition technology.
            </p>
            <Link
              href="/buy-now"
              className="inline-flex items-center gap-2 rounded-3xl bg-[#1A504F] px-8 py-3 text-white transition-colors hover:bg-[#143d3c]"
            >
              <ShoppingCart className="h-5 w-5" aria-hidden />
              Order Now
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Key Health Benefits
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-3xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-[#4CAF50] hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#4CAF50]/10">
                  <Icon className="h-10 w-10 text-[#4CAF50]" aria-hidden />
                </div>
                <h3 className="mb-3 text-center text-xl font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="text-center leading-relaxed text-gray-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Scientific Mechanism
            </h2>
          </div>
          <div className="relative">
            <div className="absolute top-1/2 right-0 left-0 hidden h-1 -translate-y-1/2 bg-[#4CAF50] md:block" />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-stretch">
              <div className="relative z-10 flex-1 rounded-3xl border-2 border-[#1A504F] bg-white p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1A504F]">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="mb-3 text-center text-xl font-semibold text-gray-900">
                  Sucrose Intake
                </h3>
                <p className="text-center text-sm leading-relaxed text-gray-600">
                  Sugar consumption with L-Arabinose blend enters the digestive
                  system
                </p>
              </div>
              <div className="hidden shrink-0 items-center justify-center md:flex">
                <ArrowRight className="h-8 w-8 text-[#4CAF50]" aria-hidden />
              </div>
              <div className="relative z-10 flex-1 rounded-3xl border-2 border-[#1A504F] bg-white p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1A504F]">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="mb-3 text-center text-xl font-semibold text-gray-900">
                  L-Arabinose Inhibits Sucrase
                </h3>
                <p className="text-center text-sm leading-relaxed text-gray-600">
                  Natural enzyme blocking prevents sucrose breakdown in small
                  intestine
                </p>
              </div>
              <div className="hidden shrink-0 items-center justify-center md:flex">
                <ArrowRight className="h-8 w-8 text-[#4CAF50]" aria-hidden />
              </div>
              <div className="relative z-10 flex-1 rounded-3xl border-2 border-[#1A504F] bg-white p-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#1A504F]">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="mb-3 text-center text-xl font-semibold text-gray-900">
                  Moves to Large Intestine
                </h3>
                <p className="text-center text-sm leading-relaxed text-gray-600">
                  Unabsorbed sugar feeds beneficial gut bacteria as prebiotic
                  fiber
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Clinical Data Evidence
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-br from-[#1A504F] to-[#143d3c] p-8 text-white">
              <h3 className="mb-6 flex h-14 items-center justify-center text-center text-xl font-semibold">
                Sucrose Absorption Inhibition
              </h3>
              <div className="mb-6 flex h-80 items-end justify-center gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-32 w-24 origin-bottom items-end justify-center rounded-t-3xl bg-white/20 pb-4 animate-[slideUp_1s_ease-out]">
                    <span className="text-2xl font-bold">0%</span>
                  </div>
                  <p className="mt-3 w-24 text-sm">
                    Without
                    <br />
                    L-Arabinose
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-64 w-24 origin-bottom items-end justify-center rounded-t-3xl bg-[#4CAF50] pb-4 animate-[slideUp_1.5s_ease-out]">
                    <span className="text-2xl font-bold">60%</span>
                  </div>
                  <p className="mt-3 w-24 text-sm">
                    With 3%
                    <br />
                    L-Arabinose
                  </p>
                </div>
              </div>
              <p className="flex h-10 items-center justify-center text-center text-sm text-white/80">
                Adding 3% L-Arabinose inhibits up to 60% of sucrose absorption
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-[#1A504F] to-[#143d3c] p-8 text-white">
              <h3 className="mb-6 flex h-14 items-center justify-center text-center text-xl font-semibold">
                Blood Glucose Rise Reduction
              </h3>
              <div className="mb-6 flex h-80 items-end justify-center gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-48 w-24 origin-bottom items-end justify-center rounded-t-3xl bg-white/20 pb-4 animate-[slideUp_1s_ease-out]">
                    <span className="text-2xl font-bold">100%</span>
                  </div>
                  <p className="mt-3 w-24 text-sm">
                    Regular
                    <br />
                    Sugar
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-24 w-24 origin-bottom items-end justify-center rounded-t-3xl bg-[#4CAF50] pb-4 animate-[slideUp_1.5s_ease-out]">
                    <span className="text-2xl font-bold">50%</span>
                  </div>
                  <p className="mt-3 w-24 text-sm">
                    With
                    <br />
                    AraBalance
                  </p>
                </div>
              </div>
              <p className="flex h-10 items-center justify-center text-center text-sm text-white/80">
                Reduces post-meal blood glucose spike by 50%
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900">
            Versatile Market Applications
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Use AraBalance Healthy Sugar in all your favorite recipes without
            changing the formula. Perfect 1:1 replacement for regular sugar.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {applications.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-3xl bg-white p-8 text-center transition-all hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#4CAF50]/10">
                  <Icon className="h-12 w-12 text-[#4CAF50]" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{label}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block rounded-3xl border-2 border-[#4CAF50] bg-white px-8 py-4">
              <p className="font-semibold text-[#1A504F]">
                ✓ No formula changes needed • ✓ Same sweetness level • ✓ Perfect
                for all recipes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900">
            Ready to Make the Switch?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Experience the benefits of healthy sugar technology today
          </p>
          <Link
            href="/buy-now"
            className="inline-flex items-center gap-2 rounded-3xl bg-[#1A504F] px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#143d3c]"
          >
            <ShoppingCart className="h-6 w-6" aria-hidden />
            Shop AraBalance Now
          </Link>
        </div>
      </section>
    </div>
  );
}
