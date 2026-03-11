import React, { useRef, useState } from 'react';
import Section from './ui/Section';
import { BookOpen, Users, Bell, MapPin, Zap, Shield } from 'lucide-react';

const Card = ({ title, description, icon: Icon, className = "", large = false }: any) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-white/10 p-6 md:p-8 hover:border-brand-500/30 dark:hover:border-brand-500/50 transition-colors duration-500 ${className}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(59, 130, 246, 0.4), transparent 40%)`,
          maskImage: 'linear-gradient(to bottom right, black, black)', // Ensure border effect
          WebkitMaskImage: 'linear-gradient(to bottom right, black, black)',
          zIndex: 1, // behind content but above background
        }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 shadow-inner">
          <Icon size={28} />
        </div>
        <h3 className={`font-bold text-gray-900 dark:text-white mb-3 ${large ? 'text-2xl' : 'text-xl'}`}>
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
};

const BentoGrid = () => {
  return (
    <Section id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Everything you need. <br />
          <span className="text-gray-400 dark:text-gray-600">All in one place.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
        {/* Large Item 1 */}
        <Card 
          title="Seamless Academics" 
          description="Access your timetable, lecture notes, and grades instantly. Integration with the university portal ensures you never miss a beat."
          icon={BookOpen}
          className="md:col-span-2 md:row-span-1"
          large={true}
        />
        
        {/* Item 2 */}
        <Card 
          title="Smart Community" 
          description="Connect with peers in your department. Create study groups and share resources."
          icon={Users}
        />

        {/* Item 3 */}
        <Card 
          title="Instant Alerts" 
          description="Push notifications for class changes, exam schedules, and campus news."
          icon={Bell}
        />

        {/* Large Item 4 */}
        <Card 
          title="Campus Navigation" 
          description="Get turn-by-turn directions to lecture halls, administrative blocks, and cafeterias with our integrated detailed campus maps."
          icon={MapPin}
          className="md:col-span-2 md:row-span-1"
          large={true}
        />

         {/* Item 5 */}
         <Card 
          title="Lightning Fast" 
          description="Optimized for performance on all devices. Works offline for cached materials."
          icon={Zap}
        />

        {/* Item 6 */}
        <Card 
          title="Secure Data" 
          description="Enterprise-grade encryption keeps your academic records and personal chats safe."
          icon={Shield}
        />
      </div>
    </Section>
  );
};

export default BentoGrid;