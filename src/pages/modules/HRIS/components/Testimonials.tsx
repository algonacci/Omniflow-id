import React from 'react';

const testimonials = [
  {
    quote: "Implementing Omniflow's HRIS has transformed our HR operations. The automation and efficiency gains are remarkable.",
    author: "Sarah Johnson",
    position: "HR Director",
    company: "Tech Solutions Inc."
  },
  {
    quote: "The employee self-service features have reduced our HR team's workload significantly. Our employees love the intuitive interface.",
    author: "Michael Chen",
    position: "Head of People",
    company: "Global Innovations"
  },
  {
    quote: "The reporting and analytics capabilities have given us valuable insights into our workforce management.",
    author: "Emma Rodriguez",
    position: "HR Manager",
    company: "Future Corp"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
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