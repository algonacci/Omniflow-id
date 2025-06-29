import React from 'react';
import { ArrowRight, CheckCircle, Users, Award, Shield } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="section-enterprise gradient-dark text-white">
      <div className="container-enterprise">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-800 text-blue-100 rounded-full text-sm font-semibold mb-6">
              <CheckCircle className="h-4 w-4 mr-2" />
              Ready to Get Started?
            </div>
            <h2 className="text-white mb-6">
              Transform Your HR Operations Today
            </h2>
            <p className="text-blue-100 mb-8 text-xl leading-relaxed">
              Join thousands of companies that have modernized their HR processes with Omniflow HRIS. Experience the power of automation, compliance, and data-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="btn-primary bg-white text-blue-700 hover:bg-blue-50 group">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-blue-700">
                Contact Sales
              </button>
            </div>
            <div className="flex items-center space-x-6 text-blue-100">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="text-sm">Free 30-day trial</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="text-sm">No setup fees</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                <span className="text-sm">24/7 support</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="card-enterprise p-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">10,000+</div>
                  <div className="text-blue-100">Active Users</div>
                </div>
              </div>
            </div>
            
            <div className="card-enterprise p-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-blue-100">Uptime SLA</div>
                </div>
              </div>
            </div>
            
            <div className="card-enterprise p-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">ISO 27001</div>
                  <div className="text-blue-100">Certified Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}