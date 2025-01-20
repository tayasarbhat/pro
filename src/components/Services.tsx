import React from 'react';
import { Home, Building2, Factory, Wrench, Lightbulb, Shield } from 'lucide-react';

const services = [
  {
    title: 'Residential Services',
    description: 'Complete home electrical solutions including repairs, installations, and upgrades.',
    icon: Home,
  },
  {
    title: 'Commercial Services',
    description: 'Professional electrical services for offices, retail spaces, and commercial buildings.',
    icon: Building2,
  },
  {
    title: 'Industrial Solutions',
    description: 'Specialized electrical services for manufacturing and industrial facilities.',
    icon: Factory,
  },
  {
    title: 'Maintenance',
    description: 'Regular maintenance and inspection services to prevent electrical issues.',
    icon: Wrench,
  },
  {
    title: 'Energy Efficiency',
    description: 'Smart solutions to reduce energy consumption and lower electricity bills.',
    icon: Lightbulb,
  },
  {
    title: 'Safety Inspections',
    description: 'Comprehensive electrical safety audits and compliance checks.',
    icon: Shield,
  },
];

export default function Services() {
  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive electrical solutions for all your needs
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}