import React from 'react';
import Section from './ui/Section';
import { Check, BookOpen, Clock, Users, Database } from 'lucide-react';

const StackingCard = ({ title, description, items, icon: Icon, colorClass, index, total }: any) => {
  // Calculate a slight scale down for cards as they go back, or keep them same size.
  // Standard "stacking" usually just means they stick on top of each other.
  // We use top-32 for all, so they pile up at the same visual vertical position.
  
  return (
    <div 
      className="sticky top-28 md:top-36 w-full" 
      style={{ 
        zIndex: index + 10,
        // Add a margin bottom to allow scrolling past each card to reveal the next one properly
        marginBottom: `${(total - index) * 20}px` 
      }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 shadow-2xl transition-all duration-500 min-h-[500px] flex flex-col md:flex-row gap-8">
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorClass}`} />
        
        {/* Content Side */}
        <div className="flex-1 flex flex-col justify-center p-8 md:p-12 space-y-6">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colorClass.replace('from-', 'bg-').replace('to-', 'text-white ')} bg-opacity-10 text-brand-500 dark:text-white`}>
               <Icon size={28} />
            </div>
            
            <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              {title}
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              {description}
            </p>
            
            <ul className="space-y-4 pt-4">
              {items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 font-medium">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
        </div>

        {/* Visual Side */}
        <div className="flex-1 relative bg-gray-50 dark:bg-white/5 border-l border-gray-100 dark:border-white/5 overflow-hidden flex items-center justify-center group min-h-[300px] md:min-h-auto">
             {/* Dynamic background glow */}
             <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5 dark:opacity-10 group-hover:opacity-10 transition-opacity duration-500`} />
             
             {/* Abstract Interface Mockup */}
             <div className="relative w-4/5 h-4/5 bg-white dark:bg-black rounded-xl border border-gray-200 dark:border-white/10 shadow-xl p-4 md:p-6 flex flex-col gap-4 transform group-hover:scale-105 transition-transform duration-700 ease-out">
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-4">
                  <div className="w-1/3 h-6 bg-gray-100 dark:bg-white/10 rounded-md" />
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/10" />
                </div>
                <div className="space-y-3 flex-1">
                   <div className="w-full h-24 bg-gray-50 dark:bg-white/5 rounded-lg border border-dashed border-gray-200 dark:border-white/10" />
                   <div className="w-full h-4 bg-gray-100 dark:bg-white/10 rounded" />
                   <div className="w-3/4 h-4 bg-gray-100 dark:bg-white/10 rounded" />
                </div>
                <div className="mt-auto pt-4 flex gap-2">
                   <div className={`h-10 rounded-lg flex-1 ${colorClass.split(' ')[0]} opacity-80`} />
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};

const FeatureShowcase = () => {
  const features = [
    {
      title: "Digital Classroom",
      description: "Join live sessions from anywhere. Submit assignments, track attendance, and participate in discussions seamlessly.",
      items: ["Live lecture streaming", "Assignment submissions", "Attendance tracking"],
      icon: BookOpen,
      colorClass: "from-blue-500 to-indigo-600"
    },
    {
      title: "Smart Scheduling",
      description: "Never miss a class again. Our intelligent calendar adapts to changes instantly and sends you timely reminders.",
      items: ["Real-time timetable sync", "Exam countdowns", "Custom reminders"],
      icon: Clock,
      colorClass: "from-purple-500 to-pink-600"
    },
    {
      title: "Campus Community",
      description: "Connect with peers, form study groups, and share resources securely within your department or faculty.",
      items: ["Secure peer messaging", "Study group finder", "Resource sharing"],
      icon: Users,
      colorClass: "from-orange-500 to-red-600"
    },
    {
      title: "Academic Vault",
      description: "Unlimited storage for your handouts, past questions, and personal notes. Accessible offline.",
      items: ["Offline material access", "Cloud backup", "Smart search"],
      icon: Database,
      colorClass: "from-teal-500 to-emerald-600"
    }
  ];

  return (
    <Section id="academics" className="relative">
       <div className="mb-24 text-center">
         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
           Packed with Power.
         </h2>
         <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
           A suite of tools designed to handle every aspect of your academic life.
         </p>
       </div>

       {/* Container for stacking cards */}
       <div className="relative max-w-6xl mx-auto pb-24">
         {features.map((feature, index) => (
           <StackingCard key={index} {...feature} index={index} total={features.length} />
         ))}
       </div>
    </Section>
  );
};

export default FeatureShowcase;