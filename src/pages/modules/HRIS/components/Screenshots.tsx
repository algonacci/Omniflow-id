import React from 'react';

const screenshots = [
  {
    title: 'Employee Dashboard',
    description: 'Intuitive dashboard showing employee information and quick actions.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80'
  },
  {
    title: 'Performance Analytics',
    description: 'Detailed performance metrics and analytics visualization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
  {
    title: 'Leave Management',
    description: 'Streamlined leave request and approval process.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80'
  }
];

export default function Screenshots() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          See HRIS in Action
        </h2>
        <div className="space-y-12">
          {screenshots.map((screenshot, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
              <div className="md:w-1/2">
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{screenshot.title}</h3>
                <p className="text-gray-600 text-lg">{screenshot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}