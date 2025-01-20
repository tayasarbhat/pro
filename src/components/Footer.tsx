import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">PowerPro Electric</span>
            </div>
            <p className="mt-4 text-gray-400">
              Professional electrical services for residential, commercial, and industrial clients.
              Available 24/7 for all your electrical needs.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Services
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">
                  Residential
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">
                  Commercial
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">
                  Industrial
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white">
                  Emergency Services
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-400">
              Kupwara<br />
               Jammu and Kashmir
              </li>
              <li>
                <a href="tel:+917006592044" className="text-base text-gray-400 hover:text-white">
                  +91 7006592044
                </a>
              </li>
              <li>
                <a href="mailto:Tayasarbhat@gmail.com" className="text-base text-gray-400 hover:text-white">
                  tayasarbhat@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} PowerPro Electric. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
