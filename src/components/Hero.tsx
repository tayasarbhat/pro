import React from 'react';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="pt-16">
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3"
            alt="Electrician working"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Professional Electrical Services
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Your trusted partner for all electrical needs. From residential repairs to commercial installations,
            we deliver excellence with safety and reliability.
          </p>
          <div className="mt-10 flex space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Features */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Licensed & Insured</h3>
                <p className="mt-1 text-gray-500">Fully certified professionals</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Clock className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">24/7 Service</h3>
                <p className="mt-1 text-gray-500">Emergency support available</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-medium text-gray-900">Satisfaction Guaranteed</h3>
                <p className="mt-1 text-gray-500">100% customer satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}