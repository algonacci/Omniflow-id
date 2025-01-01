import { Heart, BarChart, DollarSign, Layers } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Improved Loyalty",
    description:
      "Foster stronger customer relationships and enhance loyalty with personalized engagement.",
  },
  {
    icon: BarChart,
    title: "Actionable Insights",
    description:
      "Gain deeper insights into customer behavior and spending patterns for better decision-making.",
  },
  {
    icon: DollarSign,
    title: "Increased Revenue",
    description:
      "Boost revenue through targeted offers, membership programs, and optimized engagement strategies.",
  },
  {
    icon: Layers,
    title: "Streamlined Management",
    description:
      "Easily organize customer data, membership tiers, and contact details in a centralized platform.",
  },
];

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Key Benefits of Customer Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <benefit.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
