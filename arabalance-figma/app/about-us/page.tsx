import Link from "next/link";
import {
  Award,
  FlaskConical,
  Globe,
  Leaf,
  Sparkles,
} from "lucide-react";

const authorities = [
  {
    authority: "Japan MHLW",
    title: "Ministry of Health, Labour and Welfare",
    description:
      "Listed as a special health food for blood glucose regulation",
    badge: "JP",
  },
  {
    authority: "US FDA",
    title: "Food and Drug Administration",
    description: "Approved as a safe food additive",
    badge: "US",
  },
  {
    authority: "US AACE",
    title: "American Association of Clinical Endocrinologists",
    description: "Approved for anti-obesity treatment use",
    badge: "US",
  },
  {
    authority: "China FDA",
    title: "National Medical Products Administration",
    description: "Approved as a health product",
    badge: "CN",
  },
];

const pillars = [
  {
    icon: Award,
    title: "Safety",
    description: "Naturally existing in plants",
    detail:
      "Arabalance is a natural component found in various plants, ensuring biological compatibility and safety for human consumption.",
  },
  {
    icon: FlaskConical,
    title: "Scientific",
    description: "Proven by human and animal experiments",
    detail:
      "Extensively validated through rigorous clinical trials and laboratory research, demonstrating consistent efficacy and safety.",
  },
  {
    icon: Sparkles,
    title: "Functional",
    description: "Acting as a powerful bifidus growth factor",
    detail:
      "Promotes the growth of beneficial Bifidobacterium in the gut, supporting digestive health and overall wellness.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="pt-20">
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1A504F] via-[#1A504F]/95 to-[#143d3c]">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%234CAF50' fill-opacity='0.4'%3E%3Ccircle cx='25' cy='25' r='2'/%3E%3Ccircle cx='75' cy='75' r='2'/%3E%3Ccircle cx='50' cy='50' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "100px 100px",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/20 bg-white/95 p-10 shadow-2xl backdrop-blur-lg md:p-12">
            <div className="mb-6 flex items-center justify-center">
              <Leaf className="mr-4 h-12 w-12 text-[#4CAF50]" aria-hidden />
              <h1 className="text-center text-4xl font-bold text-gray-900 md:text-5xl">
                Leading the New Healthy Era
              </h1>
            </div>
            <div className="mx-auto mb-8 h-1 w-24 bg-[#4CAF50]" />
            <p className="mb-6 text-center text-xl leading-relaxed text-gray-700">
              AraBalance harnesses the power of nature&apos;s innovation through{" "}
              <span className="font-bold text-[#1A504F]">Arabalance Pectin Sugar</span>, a
              naturally occurring sugar derived from sustainable agricultural sources.
            </p>
            <div className="mb-6 rounded-3xl border-2 border-[#4CAF50] bg-[#4CAF50]/10 p-8">
              <h3 className="mb-4 text-center text-2xl font-bold text-[#1A504F]">
                Natural Source
              </h3>
              <p className="text-center text-lg leading-relaxed text-gray-700">
                Arabalance Pectin Sugar is a monosaccharide widely existing in
                plantsIt is a safety sugar and exists in nature. Now the
                Arabalance is produced from corn cob and bagasse by hydrolysis,
                separation and purification. Arabalance can block the metabolism
                and transformation of sucrose, and it can be used as an inhibitor
                of sucrose enzyme, thus enable it has many advantages, such as
                inhibiting glucose metabolism, lowering blood sugar, improving
                fasting blood sugar, regulating blood lipids, improving insulin
                resistance, assisting weight loss and regulating intestinal flora
                etc., and it has a promising application prospect.
              </p>
            </div>
            <p className="text-center text-lg italic leading-relaxed text-gray-600">
              &quot;By combining traditional wisdom with modern biotechnology,
              we&apos;re creating a healthier future for everyone.&quot;
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Globe className="mx-auto mb-4 h-16 w-16 text-[#4CAF50]" aria-hidden />
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Global Trust & Recognition
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Recognized and approved by leading health authorities worldwide
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {authorities.map((a) => (
              <div
                key={a.authority}
                className="rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white p-6 transition-all hover:border-[#4CAF50] hover:shadow-xl"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1A504F]">
                    <span className="text-lg font-bold text-white">
                      {a.badge}
                    </span>
                  </div>
                </div>
                <h3 className="mb-2 text-center text-lg font-bold text-[#1A504F]">
                  {a.authority}
                </h3>
                <p className="mb-3 text-center text-xs text-gray-500">
                  {a.title}
                </p>
                <div className="mx-auto mb-3 h-0.5 w-12 bg-[#4CAF50]" />
                <p className="text-center text-sm leading-relaxed text-gray-700">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Our 3-Pillar Philosophy
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              The foundation of AraBalance&apos;s approach to health innovation
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, description, detail }) => (
              <div
                key={title}
                className="rounded-3xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-[#4CAF50] hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#1A504F]">
                  <Icon className="h-12 w-12 text-white" aria-hidden />
                </div>
                <h3 className="mb-3 text-center text-2xl font-bold text-gray-900">
                  {title}
                </h3>
                <p className="mb-4 text-center text-lg font-semibold text-[#4CAF50]">
                  {description}
                </p>
                <div className="mx-auto mb-4 h-1 w-16 bg-[#4CAF50]" />
                <p className="text-center leading-relaxed text-gray-600">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#1A504F] to-[#143d3c] px-6 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Join the Healthy Sugar Revolution
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Experience the benefits of scientifically proven, globally trusted
            Arabalance technology
          </p>
          <Link
            href="/buy-now"
            className="inline-block rounded-3xl bg-[#4CAF50] px-10 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#45a049]"
          >
            Discover AraBalance Products
          </Link>
        </div>
      </section>
    </div>
  );
}
