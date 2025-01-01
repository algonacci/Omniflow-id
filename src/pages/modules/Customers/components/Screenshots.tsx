import React from "react";

const screenshots = [
  {
    title: "Customer Dashboard",
    description:
      "Overview of customer information, activity, and insights in a single view.",
    image:
      "https://images.unsplash.com/photo-1597931091076-0c16f69cbd30?auto=format&fit=crop&q=80",
  },
  {
    title: "Membership Management",
    description:
      "Organize customers into tiers and track membership details with ease.",
    image:
      "https://images.unsplash.com/photo-1560298808-e7063d2c42c9?auto=format&fit=crop&q=80",
  },
  {
    title: "Spending Insights",
    description:
      "Analyze customer spending patterns and trends for better engagement strategies.",
    image:
      "https://images.unsplash.com/photo-1586281380414-b4a60d0f1db5?auto=format&fit=crop&q=80",
  },
];

export default function Screenshots() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          See Customers Module in Action
        </h2>
        <div className="space-y-12">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              <div className="md:w-1/2">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{screenshot.title}</h3>
                <p className="text-gray-600 text-lg">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
