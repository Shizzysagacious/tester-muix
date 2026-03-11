import React, { useState } from 'react';
import Section from './ui/Section';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border-b border-gray-200 dark:border-white/10 last:border-0">
      <button 
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-900 dark:text-white pr-8 group-hover:text-brand-600 transition-colors">
          {question}
        </span>
        <span className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="text-gray-500 group-hover:text-brand-600 transition-colors" />
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is the app free for all students?",
      answer: "While essential features like the digital ID, timetable sync, and campus news are completely free for all verified students, we offer a Premium subscription for power users. For ₦3,000 per semester or ₦5,000 per session, you unlock unlimited past questions, offline mode for all materials, CBT practice tests, and an ad-free experience."
    },
    {
      question: "Does it work offline?",
      answer: "Absolutely. We understand internet connectivity can be an issue. Timetables, downloaded handouts, and maps are all accessible without an active internet connection. Premium users can also access the entire question bank offline."
    },
    {
      question: "Is my data secure?",
      answer: "We take privacy seriously. All academic records and personal messages are encrypted end-to-end. We do not sell student data to third parties."
    },
    {
      question: "How do I verify my student status?",
      answer: "Simply sign up with your university email address (.edu.ng) or enter your matriculation number. We'll send a verification code to your student portal."
    },
    {
      question: "Can I use it on multiple devices?",
      answer: "Yes, your account syncs across all your devices. Start reading a PDF on your tablet and finish it on your phone seamlessly."
    }
  ];

  return (
    <Section id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Have questions? We're here to help.
          </p>
        </div>
        
        <div className="bg-white/50 dark:bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-gray-200 dark:border-white/10">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              {...faq} 
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FAQ;