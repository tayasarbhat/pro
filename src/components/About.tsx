import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose PowerPro Electric?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              With over 20 years of experience in the electrical industry, we've built our reputation
              on quality workmanship, reliability, and exceptional customer service.
            </p>
            
            <div className="mt-8 space-y-4">
              {[
                'Licensed and certified electricians',
                'Available 24/7 for emergency services',
                'Upfront pricing with no hidden fees',
                'Fully insured and bonded',
                'Latest tools and technology',
                'Satisfaction guaranteed',
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span className="ml-3 text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3"
                alt="Electrician team"
                className="rounded-lg shadow-lg object-cover h-96 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}