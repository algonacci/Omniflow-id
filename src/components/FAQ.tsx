import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What makes Omniflow.id different from other ERP solutions?',
    answer: 'Omniflow.id offers a unique combination of comprehensive modules, modern technology, and seamless integration capabilities. Our AI-powered features and user-friendly interface set us apart from traditional ERP systems.'
  },
  {
    question: 'How long does implementation typically take?',
    answer: 'Implementation time varies based on your business size and requirements. Typically, basic setup takes 2-4 weeks, while full implementation across all modules can take 2-3 months. We provide dedicated support throughout the process.'
  },
  {
    question: 'Can Omniflow.id be customized for my specific industry?',
    answer: 'Yes, Omniflow.id is highly customizable and can be tailored to meet the specific needs of your industry. Our modular architecture allows for flexible configuration and custom development when needed.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: '24/7 technical support, regular system updates, training sessions, and dedicated account managers are included in our service package. We ensure your team gets the most out of our platform.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}