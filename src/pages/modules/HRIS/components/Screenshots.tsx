import React from 'react';
import { Monitor, Smartphone, Tablet } from 'lucide-react';

const screenshots = [
  {
    title: 'Employee Dashboard',
    description: 'Intuitive dashboard providing employees with quick access to personal information, leave balances, and important announcements.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    features: ['Personal information', 'Leave management', 'Company announcements', 'Quick actions']
  },
  {
    title: 'Performance Analytics',
    description: 'Comprehensive performance metrics and analytics visualization to track employee progress and organizational KPIs.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    features: ['Performance tracking', 'Goal management', 'Analytics dashboard', 'Progress reports']
  },
  {
    title: 'Leave Management',
    description: 'Streamlined leave request and approval process with calendar integration and automated balance calculations.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800',
    features: ['Leave requests', 'Approval workflow', 'Calendar integration', 'Balance tracking']
  }
];

export default function Screenshots() {
  return (
    <section className="section-enterprise bg-white">
      <div className="container-enterprise">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <Monitor className="h-4 w-4 mr-2" />
            Platform Overview
          </div>
          <h2 className="text-enterprise-primary mb-6">
            See HRIS in Action
          </h2>
          <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
            Experience the power of our intuitive interface designed for both HR professionals and employees across all devices.
          </p>
        </div>
        
        <div className="space-y-20">
          {screenshots.map((screenshot, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-700/10 rounded-3xl transform rotate-2"></div>
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="relative rounded-3xl shadow-enterprise-lg w-full"
                  />
                  <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-enterprise">
                    <div className="flex space-x-2">
                      <Monitor className="h-5 w-5 text-blue-600" />
                      <Tablet className="h-5 w-5 text-emerald-600" />
                      <Smartphone className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                <div>
                  <h3 className="text-3xl font-bold text-enterprise-primary mb-4">{screenshot.title}</h3>
                  <p className="text-xl text-enterprise-secondary leading-relaxed">{screenshot.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {screenshot.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-enterprise-muted font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="btn-primary">
                  Explore Feature
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}