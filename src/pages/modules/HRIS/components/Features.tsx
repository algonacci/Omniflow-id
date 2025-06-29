import React from 'react';
import { 
  UserPlus, FileText, Calendar, BarChart, Clock, Shield, 
  Users, Award, Brain, Settings, TrendingUp, CheckCircle 
} from 'lucide-react';

const features = [
  {
    icon: UserPlus,
    title: 'Recruitment Management',
    description: 'Streamline your hiring process with automated job postings, applicant tracking, and interview scheduling.',
    color: 'from-blue-500 to-blue-600',
    benefits: ['Automated job posting', 'Candidate tracking', 'Interview scheduling']
  },
  {
    icon: FileText,
    title: 'Employee Records',
    description: 'Centralized database for employee information, documents, and history with easy access and updates.',
    color: 'from-emerald-500 to-emerald-600',
    benefits: ['Digital document storage', 'Employee profiles', 'History tracking']
  },
  {
    icon: Calendar,
    title: 'Leave Management',
    description: 'Automated leave requests, approvals, and balance tracking with calendar integration.',
    color: 'from-purple-500 to-purple-600',
    benefits: ['Leave request workflow', 'Balance tracking', 'Calendar sync']
  },
  {
    icon: BarChart,
    title: 'Performance Management',
    description: 'Set and track KPIs, conduct reviews, and manage employee development plans.',
    color: 'from-orange-500 to-orange-600',
    benefits: ['KPI tracking', 'Performance reviews', 'Development plans']
  },
  {
    icon: Clock,
    title: 'Time & Attendance',
    description: 'Track working hours, shifts, and overtime with automated attendance monitoring.',
    color: 'from-pink-500 to-pink-600',
    benefits: ['Time tracking', 'Shift management', 'Overtime calculation']
  },
  {
    icon: Shield,
    title: 'Compliance Management',
    description: 'Stay compliant with labor laws and regulations with built-in compliance tools.',
    color: 'from-indigo-500 to-indigo-600',
    benefits: ['Regulatory compliance', 'Audit trails', 'Policy management']
  }
];

export default function Features() {
  return (
    <section className="section-enterprise bg-white">
      <div className="container-enterprise">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
            <Users className="h-4 w-4 mr-2" />
            Comprehensive HR Features
          </div>
          <h2 className="text-enterprise-primary mb-6">
            Everything You Need for Modern HR Management
          </h2>
          <p className="text-xl text-enterprise-secondary max-w-3xl mx-auto">
            Our HRIS platform provides all the tools your HR team needs to manage employees efficiently, ensure compliance, and drive organizational success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="card-feature group">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-enterprise-primary mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-enterprise-secondary leading-relaxed mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-enterprise-muted">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More →
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}