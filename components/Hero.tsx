import React from 'react';
import Button from './ui/Button';
import Section from './ui/Section';
import { ArrowRight, Download, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <Section className="pt-32 pb-20 md:pt-48 md:pb-32 text-center overflow-visible">
      <div className="flex flex-col items-center max-w-5xl mx-auto space-y-10 relative z-10">
        
        {/* Pill Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider dark:bg-brand-900/30 dark:border-brand-500/30 dark:text-brand-300 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          v1.0 Now Available
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] text-gray-900 dark:text-white animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          The Smartest Way <br />
          To <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">Campus</span>.
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          Join the student-centric ecosystem. Manage classes, connect with peers, and navigate your academic journey with the LASU SmartApp.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          <Button icon={<Download size={18} />}>
            Download for iOS
          </Button>
          <Button variant="outline" icon={<PlayCircle size={18} />}>
            Watch Demo
          </Button>
        </div>

        {/* Hero Image/Mockup Hint with Floating Animation */}
        <div className="relative mt-20 w-full max-w-6xl mx-auto animate-fade-in-up" style={{animationDelay: '0.5s'}}>
           <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl transition-all duration-700 hover:shadow-brand-500/20 bg-white dark:bg-neutral-900">
             
             {/* Abstract Dashboard UI Representation */}
             <div className="absolute inset-0 flex items-center justify-center group cursor-default">
               <div className="relative w-full h-full bg-white dark:bg-[#050505] p-6 flex gap-6 overflow-hidden">
                  
                  {/* Top Bar Decoration */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500"></div>

                  {/* Sidebar */}
                  <div className="hidden md:flex flex-col w-64 h-full bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-100 dark:border-white/5 p-4 space-y-4">
                     <div className="w-full h-8 bg-gray-200 dark:bg-white/10 rounded-lg animate-pulse-slow"></div>
                     <div className="w-2/3 h-4 bg-gray-200 dark:bg-white/10 rounded-md mt-6"></div>
                     <div className="w-full h-4 bg-gray-200 dark:bg-white/10 rounded-md"></div>
                     <div className="w-4/5 h-4 bg-gray-200 dark:bg-white/10 rounded-md"></div>
                     
                     <div className="mt-auto p-4 rounded-xl bg-brand-50 dark:bg-brand-900/10 border border-brand-100 dark:border-brand-500/10">
                        <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-500/20 mb-2"></div>
                        <div className="w-full h-3 bg-brand-200 dark:bg-brand-500/20 rounded-full"></div>
                     </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 h-full flex flex-col gap-6">
                    <div className="flex justify-between items-center">
                      <div className="w-48 h-10 bg-gray-100 dark:bg-white/10 rounded-lg"></div>
                      <div className="flex gap-3">
                         <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-white/10"></div>
                         <div className="w-10 h-10 rounded-full bg-brand-600 shadow-lg shadow-brand-500/30"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                       {[1, 2, 3].map((i) => (
                         <div key={i} className="h-32 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 p-4 flex flex-col justify-between hover:border-brand-500/30 transition-colors">
                            <div className="w-8 h-8 rounded-lg bg-gray-200 dark:bg-white/10"></div>
                            <div className="w-2/3 h-4 bg-gray-200 dark:bg-white/10 rounded-md"></div>
                         </div>
                       ))}
                    </div>

                    <div className="flex-1 rounded-2xl bg-gray-50 dark:bg-white/5 border border-dashed border-gray-200 dark:border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                      <div className="text-center space-y-3 z-10">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center">
                          <PlayCircle className="text-gray-400" />
                        </div>
                        <span className="text-gray-400 text-sm font-medium">Interactive Class Feed</span>
                      </div>
                    </div>
                  </div>
               </div>
             </div>
             
             {/* Glow Overlay at bottom */}
             <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-black to-transparent z-10 pointer-events-none" />
           </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;