import React from 'react';
import Section from './ui/Section';

const PhoneFrame = () => (
  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
    <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
    <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-black relative">
       {/* Mock Screen Content */}
       <div className="p-4 pt-12 h-full flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-black dark:text-white">Home</h2>
            <div className="w-8 h-8 bg-brand-500 rounded-full"></div>
          </div>
          
          <div className="p-4 bg-brand-600 rounded-xl text-white shadow-lg shadow-brand-500/30">
             <div className="text-xs opacity-80 mb-1">Next Class</div>
             <div className="font-bold text-lg">CSC 302: Algorithms</div>
             <div className="text-sm opacity-80 mt-2">10:00 AM • Hall B2</div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="aspect-square bg-gray-100 dark:bg-gray-900 rounded-xl p-3 flex flex-col justify-between">
               <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg"></div>
               <span className="font-medium text-sm text-black dark:text-white">Timetable</span>
            </div>
            <div className="aspect-square bg-gray-100 dark:bg-gray-900 rounded-xl p-3 flex flex-col justify-between">
               <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-lg"></div>
               <span className="font-medium text-sm text-black dark:text-white">Results</span>
            </div>
          </div>

          <div className="mt-2">
            <h3 className="font-bold text-sm mb-3 text-black dark:text-white">Community</h3>
            <div className="space-y-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-white/5">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  <div>
                    <div className="w-24 h-3 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
                    <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
       </div>
    </div>
  </div>
);

const AppMockupSection = () => {
  return (
    <Section id="showcase" className="overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Designed for <br />
            <span className="text-brand-600">Daily Campus Life</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
            A user interface that feels familiar yet futuristic. Dark mode by default, accessible by design, and optimized for one-handed use while you're on the go.
          </p>
          <div className="grid grid-cols-2 gap-8 text-left max-w-sm mx-auto lg:mx-0">
            <div>
               <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">50k+</div>
               <div className="text-sm text-gray-500">Students Active</div>
            </div>
            <div>
               <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">4.8</div>
               <div className="text-sm text-gray-500">App Store Rating</div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end z-10">
           {/* Phone mocks */}
           <div className="relative">
             <div className="absolute -left-12 top-12 scale-90 opacity-60 blur-[1px]">
               <PhoneFrame />
             </div>
             <div className="relative z-10">
               <PhoneFrame />
             </div>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default AppMockupSection;