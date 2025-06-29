import React from 'react';
import { CheckCircle } from 'lucide-react';

const advantages = [
  {
    title: 'All-in-One Solution',
    description: 'Integrate all business processes in a single platform, eliminating the need for multiple software solutions.'
  },
  {
    title: 'Real-time Analytics',
    description: 'Access comprehensive business insights and reports in real-time for better decision-making.'
  },
  {
    title: 'Scalable Architecture',
    description: 'Grow your business without worrying about system limitations. Our platform scales with you.'
  },
  {
    title: 'Cost-Effective',
    description: 'Reduce operational costs by streamlining processes and eliminating redundant systems.'
  },
  {
    title: 'Enhanced Productivity',
    description: 'Automate routine tasks and improve team collaboration across departments.'
  },
  {
    title: 'Security First',
    description: 'Enterprise-grade security measures to protect your sensitive business data.'
  }
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Omniflow.id?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage) => (
            <div key={advantage.title} className="flex space-x-4">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}