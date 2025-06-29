import React from 'react';
import { Users, Award, Clock, BarChart, CheckCircle, ArrowRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="section-hero">
      <div className="container-enterprise">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
              <CheckCircle className="h-4 w-4 mr-2" />
              Trusted by 10,000+ HR Professionals
            </div>
            
            <h1 className="text-enterprise-primary">
              Modern HR Management for 
              <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent"> Enterprise Success</span>
            </h1>
            
            <p className="text-xl text-enterprise-secondary max-w-2xl">
              Transform your HR operations with our comprehensive HRIS solution. Streamline recruitment, manage employee data, and automate HR processes with enterprise-grade security and scalability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group">
                <Play className="mr-2 h-5 w-5" />
                Watch Overview
              </button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-enterprise-muted">Active Users</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-emerald-600">99.9%</div>
                <div className="text-sm text-enterprise-muted">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-600">15hrs</div>
                <div className="text-sm text-enterprise-muted">Saved/Week</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <BarChart className="h-6 w-6 text-orange-600" />
                </div>
                <div className="text-2xl font-bold text-orange-600">35%</div>
                <div className="text-sm text-enterprise-muted">Cost Reduction</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-700/20 rounded-3xl transform rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800"
              alt="HRIS Dashboard Interface"
              className="relative rounded-3xl shadow-enterprise-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-enterprise">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-enterprise-primary">Productivity Boost</div>
                  <div className="text-2xl font-bold text-green-600">+40%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}