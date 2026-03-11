import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { Check, Star } from 'lucide-react';

const PricingCard = ({ title, price, period, features, recommended = false, savings = "" }: any) => {
  return (
    <div className={`relative flex flex-col p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-2 ${
      recommended 
        ? 'bg-brand-600 text-white shadow-2xl shadow-brand-500/30 border-transparent z-10 md:scale-105' 
        : 'bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white hover:border-brand-500/50'
    }`}>
      {recommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-lg flex items-center gap-1">
          <Star size={12} fill="currentColor" /> Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-2 ${recommended ? 'text-white' : 'text-gray-900 dark:text-white'}`}>{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold">{price}</span>
          <span className={`text-sm ${recommended ? 'text-blue-100' : 'text-gray-500'}`}>/{period}</span>
        </div>
        {savings && (
           <p className={`text-xs mt-2 font-medium ${recommended ? 'text-green-200' : 'text-green-600'}`}>
             {savings}
           </p>
        )}
      </div>

      <div className={`h-px w-full mb-6 ${recommended ? 'bg-white/20' : 'bg-gray-100 dark:bg-white/10'}`}></div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-start gap-3 text-sm">
            <Check size={18} className={`flex-shrink-0 mt-0.5 ${recommended ? 'text-blue-200' : 'text-brand-500'}`} />
            <span className={recommended ? 'text-blue-50' : 'text-gray-600 dark:text-gray-300'}>{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        variant={recommended ? 'secondary' : 'primary'} 
        className="w-full"
      >
        Subscribe Now
      </Button>
    </div>
  );
};

const Pricing = () => {
  return (
    <Section id="pricing">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Invest in Your Grades
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Premium tools for serious students. Cancel anytime.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start justify-center">
        {/* Empty placeholder to center the 2 cards on desktop if we had 3 cols, or just use grid logic. 
            For 2 cards, centering is better.
        */}
        
        <div className="hidden lg:block">
            {/* Informational Side Card */}
            <div className="h-full flex flex-col justify-center p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Go Premium?</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Unlock the full potential of your academic journey with unlimited access to past questions, offline materials, and priority features.
                </p>
                <div className="flex gap-4">
                    <div className="text-center">
                        <div className="font-bold text-2xl text-brand-600">24/7</div>
                        <div className="text-xs text-gray-500">Support</div>
                    </div>
                    <div className="w-px bg-gray-200 dark:bg-white/10"></div>
                    <div className="text-center">
                        <div className="font-bold text-2xl text-brand-600">100%</div>
                        <div className="text-xs text-gray-500">Uptime</div>
                    </div>
                </div>
            </div>
        </div>

        <PricingCard 
          title="Semester Plan" 
          price="₦3,000" 
          period="semester"
          features={[
            "Full Academic Calendar Access",
            "Unlimited Past Questions",
            "Course Material Downloads",
            "CBT Practice Tests",
            "Exam Result Notifications"
          ]}
        />
        
        <PricingCard 
          title="Session Bundle" 
          price="₦5,000" 
          period="session"
          recommended={true}
          savings="Save ₦1,000 yearly"
          features={[
            "Everything in Semester Plan",
            "Offline Mode for All Materials",
            "Ad-free Experience",
            "Priority Study Group Matching",
            "Exclusive Scholarship Alerts",
            "Valid for 2 Semesters"
          ]}
        />
      </div>
    </Section>
  );
};

export default Pricing;