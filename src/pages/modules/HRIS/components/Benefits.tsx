import React from 'react';
import { TrendingUp, Clock, DollarSign, Shield } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Productivity',
    description: 'Automate routine tasks and streamline workflows to boost HR team productivity by up to 40%.'
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Reduce administrative work by 60% with automated processes and self-service portals.'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Cut HR operational costs by 35% through process automation and improved efficiency.'
  },
  {
    icon: Shield,
    title: 'Better Compliance',
    description: 'Ensure 100% compliance with labor laws and regulations through automated tracking.'
  }
];

export default function Benefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Key Benefits
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