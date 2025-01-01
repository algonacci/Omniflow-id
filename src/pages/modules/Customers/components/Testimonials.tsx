import React from "react";

const testimonials = [
  {
    quote:
      "The Customers module has completely streamlined our customer data management. We can now track spending and memberships effortlessly.",
    author: "James Peterson",
    position: "Customer Relations Manager",
    company: "RetailX",
  },
  {
    quote:
      "Omniflow's CRM features have boosted our customer engagement. The insights we gain have made our loyalty programs much more effective.",
    author: "Lisa Wong",
    position: "Director of Marketing",
    company: "UrbanStyle",
  },
  {
    quote:
      "Managing customer contact details and memberships has never been easier. It's a must-have for any business that values its customers.",
    author: "Ahmed Khan",
    position: "Operations Manager",
    company: "ShopEase",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="text-gray-600 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
