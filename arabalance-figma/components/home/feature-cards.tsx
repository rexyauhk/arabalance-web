import { Award, FlaskConical, Leaf } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Stabilize Glucose",
    description:
      "Naturally balance blood sugar levels with our scientifically formulated blend",
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "Pure botanical ingredients with no artificial additives or preservatives",
  },
  {
    icon: FlaskConical,
    title: "Scientific Formula",
    description:
      "Research-backed formulation developed by leading nutritional scientists",
  },
];

export function FeatureCards() {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#4CAF50]/10">
                <Icon className="h-8 w-8 text-[#4CAF50]" aria-hidden />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
