import { User, Layers, DollarSign, Phone, BarChart, Award } from "lucide-react";

const features = [
  {
    icon: User,
    title: "Customer Information",
    description:
      "Store and manage detailed customer profiles, including personal information and contact details.",
  },
  {
    icon: Layers,
    title: "Membership Management",
    description:
      "Categorize customers into membership tiers and track their benefits seamlessly.",
  },
  {
    icon: DollarSign,
    title: "Spending Tracking",
    description:
      "Monitor customer spending patterns and generate insights for better engagement.",
  },
  {
    icon: Phone,
    title: "Centralized Contact",
    description:
      "Keep all customer contact information in one place for quick and easy access.",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description:
      "Generate reports on customer behavior, spending trends, and membership performance.",
  },
  {
    icon: Award,
    title: "Loyalty Programs",
    description:
      "Create and manage loyalty programs to reward your most valuable customers.",
  },
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Advanced Customer Management Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <feature.icon className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
