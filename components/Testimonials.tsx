import React from 'react';
import Section from './ui/Section';

const TestimonialCard = ({ quote, author, role }: { quote: string, author: string, role: string }) => (
  <div className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 shadow-sm flex flex-col justify-between h-full">
    <div className="mb-6">
       <div className="flex gap-1 mb-4">
         {[1, 2, 3, 4, 5].map(star => (
           <svg key={star} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
           </svg>
         ))}
       </div>
       <p className="text-gray-700 dark:text-gray-300 italic">"{quote}"</p>
    </div>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-400 to-blue-600"></div>
      <div>
        <div className="font-bold text-gray-900 dark:text-white text-sm">{author}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{role}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <Section background="contrast" id="community">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Trusted by the Student Body</h2>
        <p className="text-gray-500 dark:text-gray-400">Join thousands of students who have upgraded their campus experience.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TestimonialCard 
          quote="The notification system for class changes is a lifesaver. I never walk to an empty hall anymore."
          author="Sarah J."
          role="Computer Science, Year 3"
        />
        <TestimonialCard 
          quote="Having all my handouts and past questions in one app makes studying for exams so much less stressful."
          author="Michael O."
          role="Law, Year 2"
        />
        <TestimonialCard 
          quote="The campus map is surprisingly detailed. Found my way to the new engineering block without asking anyone."
          author="David K."
          role="Engineering, Year 1"
        />
      </div>
    </Section>
  );
};

export default Testimonials;