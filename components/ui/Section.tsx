import React from 'react';
import { BaseProps } from '../../types';

interface SectionProps extends BaseProps {
  id?: string;
  background?: 'default' | 'contrast';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  background = 'default' 
}) => {
  const bgStyles = background === 'contrast' 
    ? 'bg-gray-50 dark:bg-neutral-900/30' 
    : 'bg-transparent';

  return (
    <section 
      id={id} 
      className={`relative w-full py-20 md:py-32 px-6 md:px-12 lg:px-24 overflow-hidden ${bgStyles} ${className}`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;