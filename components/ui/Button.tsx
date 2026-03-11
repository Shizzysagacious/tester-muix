import React from 'react';
import { BaseProps } from '../../types';

interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  onClick,
  icon
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm tracking-wide active:scale-95";
  
  const variants = {
    primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.6)] border border-transparent",
    secondary: "bg-white text-black hover:bg-gray-100 border border-gray-200 dark:bg-white dark:text-black dark:hover:bg-gray-200",
    outline: "bg-transparent border border-gray-200 text-gray-900 hover:border-gray-900 dark:border-white/20 dark:text-white dark:hover:border-white",
    ghost: "bg-transparent text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </button>
  );
};

export default Button;