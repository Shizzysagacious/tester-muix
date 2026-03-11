import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Academics', href: '#academics' },
    { name: 'Features', href: '#features' },
    { name: 'Community', href: '#community' },
    { name: 'Pricing', href: '#pricing' },
  ];

  // Base transition styles for the navbar container
  const navContainerClasses = scrolled
    ? 'top-0 w-full rounded-none border-b border-gray-200 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-xl py-3 px-6 md:px-12 shadow-sm'
    : 'top-8 w-[90%] max-w-5xl rounded-full border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-gray-900/60 backdrop-blur-lg shadow-lg py-4 px-8';

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <nav 
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center justify-between ${navContainerClasses}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img 
            src="https://placehold.co/100x100/2563eb/ffffff?text=L" 
            alt="LASU SmartApp Logo" 
            className={`rounded-lg object-cover shadow-brand-500/20 transition-all duration-300 ${scrolled ? 'w-8 h-8' : 'w-9 h-9'}`}
          />
          <span className={`font-bold tracking-tight text-gray-900 dark:text-white transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'}`}>
            SmartApp
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-600 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-white/10 transition-all"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button 
            variant="primary" 
            className={`!transition-all !duration-300 ${scrolled ? '!py-1.5 !px-4 !text-xs' : '!py-2 !px-5 !text-sm'}`} 
            icon={<ArrowRight size={scrolled ? 14 : 16} />}
          >
            Get App
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 dark:text-gray-400"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-900 dark:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-0 bg-white dark:bg-black z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-2xl font-semibold text-gray-900 dark:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="mt-8" icon={<ArrowRight size={18} />}>
            Download Now
          </Button>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2"
          >
             <X size={32} className="text-gray-500" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;