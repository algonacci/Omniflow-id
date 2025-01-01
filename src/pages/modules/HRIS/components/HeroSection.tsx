import React from 'react';
import { Users, Award, Clock, BarChart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Modern HR Management for Modern Business
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transform your HR operations with our comprehensive HRIS solution. Streamline recruitment, 
              manage employee data, and automate HR processes all in one place.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Users, text: '10,000+ Users' },
                { icon: Award, text: '99.9% Uptime' },
                { icon: Clock, text: 'Save 15hrs/week' },
                { icon: BarChart, text: '35% Cost Reduction' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <item.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Schedule Demo
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80"
              alt="HRIS Dashboard"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}