import React from 'react';
import { UserPlus, FileText, Calendar, BarChart, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: UserPlus,
    title: 'Recruitment Management',
    description: 'Streamline your hiring process with automated job postings, applicant tracking, and interview scheduling.'
  },
  {
    icon: FileText,
    title: 'Employee Records',
    description: 'Centralized database for employee information, documents, and history with easy access and updates.'
  },
  {
    icon: Calendar,
    title: 'Leave Management',
    description: 'Automated leave requests, approvals, and balance tracking with calendar integration.'
  },
  {
    icon: BarChart,
    title: 'Performance Management',
    description: 'Set and track KPIs, conduct reviews, and manage employee development plans.'
  },
  {
    icon: Clock,
    title: 'Time & Attendance',
    description: 'Track working hours, shifts, and overtime with automated attendance monitoring.'
  },
  {
    icon: Shield,
    title: 'Compliance Management',
    description: 'Stay compliant with labor laws and regulations with built-in compliance tools.'
  }
];

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Comprehensive HR Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
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