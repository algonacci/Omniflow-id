import React from 'react';
import { TrendingUp, Clock, DollarSign, Shield, Users, Award } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increased Productivity',
    description: 'Automate routine tasks and streamline workflows to boost HR team productivity by up to 40%.',
    stat: '+40%',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Reduce administrative work by 60% with automated processes and self-service portals.',
    stat: '15hrs/week',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: DollarSign,
    title: 'Cost Reduction',
    description: 'Cut HR operational costs by 35% through process automation and improved efficiency.',
    stat: '35% savings',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Shield,
    title: 'Better Compliance',
    description: 'Ensure 100% compliance with labor laws and regulations through automated tracking.',
    stat: '100% compliant',
    color: 'from-orange-500 to-orange-600'
  }
];

export default function Benefits() {
  return (
    <section className="section-enterprise gradient-secondary">
      <div className="container-enterprise">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <Award className="h-4 w-4 mr-2" />
            Proven Results
          </div>
          <h2 className="text-enterprise-primary mb-6">
            Measurable Impact on Your Business
          </h2>
          <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
            Join thousands of companies that have transformed their HR operations and achieved remarkable results with our HRIS platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="card-enterprise p-8 text-center group">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                <h3 className="text-xl font-bold text-enterprise-primary mb-3">{benefit.title}</h3>
                <p className="text-enterprise-secondary leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="card-enterprise p-12 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                <p className="text-enterprise-muted">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">99.9%</div>
                <p className="text-enterprise-muted">Uptime Guarantee</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <p className="text-enterprise-muted">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}