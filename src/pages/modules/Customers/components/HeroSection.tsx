import { User, Layers, DollarSign, Phone } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Manage Customer Data Seamlessly
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Our Customers module helps you store, organize, and access detailed information about your customers. 
              Track memberships, spending patterns, and contact details effortlessly in one centralized system.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: User, text: '50,000+ Customers Managed' },
                { icon: Layers, text: 'Membership Tiers Organized' },
                { icon: DollarSign, text: 'Track Spending Easily' },
                { icon: Phone, text: 'Centralized Contact Info' },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <item.icon className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Explore Now
            </button>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.ctfassets.net/aguk64kkrmhj/7mPTzoQ7AhkSrObnIRjunq/cdd39e47606612ae83baf9a679141de8/Customers-image-LR.jpg?fm=webp&q=75"
              alt="Customer Management Dashboard"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
