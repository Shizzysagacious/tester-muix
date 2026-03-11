import React from 'react';
import { Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-white/10 bg-white dark:bg-black pt-20 pb-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
             {/* Logo Placeholder */}
            <img 
              src="https://placehold.co/100x100/2563eb/ffffff?text=L" 
              alt="LASU SmartApp Logo" 
              className="w-10 h-10 rounded-lg shadow-sm"
            />
            <span className="font-bold text-xl text-gray-900 dark:text-white">LASU SmartApp</span>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
            The ultimate companion for LASU students. Bridging the gap between academic requirements and digital convenience. v1.0
          </p>
          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-brand-600 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-brand-600 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-brand-600 transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-6">Product</h4>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#features" className="hover:text-brand-600 transition-colors">Features</a></li>
            <li><a href="#pricing" className="hover:text-brand-600 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-brand-600 transition-colors">Download App</a></li>
            <li><a href="#" className="hover:text-brand-600 transition-colors">Student Portal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-6">Support</h4>
          <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
            <li><a href="#faq" className="hover:text-brand-600 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-brand-600 transition-colors">Report an Issue</a></li>
            <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-600 transition-colors">Terms of Use</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 dark:text-white mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-600" />
              <span>support@lasusmartapp.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-600" />
              <span>+234 800 SMART APP</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-brand-600 mt-0.5" />
              <span>Lagos State University,<br/>Ojo, Lagos.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs md:text-sm">
          © {new Date().getFullYear()} LASU SmartApp. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs md:text-sm flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          System Status: Operational
        </p>
      </div>
    </footer>
  );
};

export default Footer;