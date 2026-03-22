import { Award, Download } from "lucide-react";

const certifications = [
  {
    title: "KKM Food Grade Approved",
    subtitle: "KEMENTERIAN KESIHATAN MALAYSIA (KKM)",
    description:
      "AraBalance has received full approval from Malaysia's Ministry of Health for food-grade safety. This certification confirms that our product meets all national health and safety requirements for consumer supplements and is safe for daily consumption.",
  },
  {
    title: "Halal Certified",
    subtitle: "DISAHKAN HALAL",
    description:
      "Our product is certified Halal by recognized Islamic authorities, ensuring that all ingredients and manufacturing processes comply with Islamic dietary laws. This certification guarantees that AraBalance is permissible for Muslim consumers worldwide.",
  },
  {
    title: "Kosher Label Certified",
    subtitle: "DIPERAKUI KOSHER",
    description:
      "AraBalance carries official Kosher certification, verifying that our ingredients and production methods adhere to strict Jewish dietary laws. This certification ensures the highest standards of cleanliness and ingredient sourcing.",
  },
  {
    title: "ISO 22000:2018",
    subtitle: "PENGURUSAN KESELAMATAN MAKANAN",
    description:
      "Our facilities operate under ISO 22000:2018 standards, the international benchmark for food safety management systems. This certification demonstrates our commitment to identifying and controlling food safety hazards throughout the entire production chain.",
  },
  {
    title: "FDA Registered",
    subtitle: "BERDAFTAR FDA",
    description:
      "AraBalance is registered with the U.S. Food and Drug Administration (FDA), meeting stringent American regulatory requirements. This registration confirms our adherence to Good Manufacturing Practices and our commitment to product safety and quality control.",
  },
  {
    title: "ISO 9001:2015",
    subtitle: "PENGURUSAN KUALITI BHALTI",
    description:
      "We maintain ISO 9001:2015 certification for our quality management systems. This internationally recognized standard ensures consistent product quality, continuous improvement processes, and customer satisfaction at every stage of production and distribution.",
  },
];

const downloads = [
  "Download KKM Certificate (PDF)",
  "Download Halal Certificate (PDF)",
  "Download ISO Certificates (PDF)",
  "Download All Certificates (ZIP)",
];

export default function CertificationsPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-[#1A504F] to-[#143d3c] px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <Award className="mx-auto mb-6 h-20 w-20 text-[#4CAF50]" aria-hidden />
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">
            Global Safety Standards
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-white/90">
            AraBalance meets and exceeds international quality certifications.
            Your safety and trust are our highest priorities.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border-2 border-gray-200 bg-white p-8 transition-all hover:border-[#4CAF50] hover:shadow-lg"
              >
                <div className="mb-6 flex justify-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#1A504F]/10">
                    <Award className="h-12 w-12 text-[#4CAF50]" aria-hidden />
                  </div>
                </div>
                <h3 className="mb-2 text-center text-xl font-bold text-gray-900">
                  {c.title}
                </h3>
                <p className="mb-4 text-center text-sm font-semibold text-[#4CAF50]">
                  {c.subtitle}
                </p>
                <p className="text-center leading-relaxed text-gray-600">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Certificate Download Center
          </h2>
          <p className="mb-8 text-gray-600">
            Download official certification documents for complete transparency
            and verification
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {downloads.map((label) => (
              <button
                key={label}
                type="button"
                className="flex items-center justify-center gap-3 rounded-3xl border-2 border-[#1A504F] bg-white px-8 py-4 text-[#1A504F] transition-all hover:bg-[#1A504F] hover:text-white"
              >
                <Download className="h-5 w-5 shrink-0" aria-hidden />
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
