import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-white dark:bg-black transition-colors duration-500">
      {/* Moving Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-500/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob dark:bg-brand-500/20 dark:mix-blend-screen"></div>
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-500/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-2000 dark:bg-purple-900/20 dark:mix-blend-screen" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-pink-500/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob animation-delay-4000 dark:bg-blue-900/20 dark:mix-blend-screen" style={{ animationDelay: '4s' }}></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      
      <div 
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px), linear-gradient(to bottom, #8882 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;