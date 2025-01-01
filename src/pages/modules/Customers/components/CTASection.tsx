import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to Revolutionize Your Customer Management?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Join successful businesses that have streamlined customer data
          management and improved loyalty with Omniflow.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
          <button className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
