 'use client';
import React, { useState, useEffect } from 'react';
import { Code, User, Briefcase, Mail, Home, Terminal, Cpu, Menu, X } from 'lucide-react';

// Navigation items declared at module scope so they are stable and not re-created on every render
const NAV_ITEMS = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Contact', href: '#contact', icon: Mail }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Navigation items (declare before effects that reference them)
  

  // Handle scroll effect and active section detection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1;
      const currentProgress = window.scrollY / maxScroll;
      setScrollProgress(Math.min(currentProgress, 1));

      // Detect active section based on scroll position
  type SectionInfo = { name: string; offsetTop: number; offsetBottom: number } | null;
  const sections: SectionInfo[] = NAV_ITEMS.map(item => {
        const element = document.querySelector(item.href);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offsetTop = window.scrollY + rect.top;
          return {
            name: item.name.toLowerCase(),
            offsetTop,
            offsetBottom: offsetTop + (element as HTMLElement).offsetHeight
          };
        }
        return null;
  }).filter((s): s is { name: string; offsetTop: number; offsetBottom: number } => Boolean(s));

      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section) continue;
        if (scrollPosition >= section.offsetTop) {
          setActiveSection(section.name);
          break;
        }
      }
    };

    handleScroll(); // Call once on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // NAV_ITEMS is module-level static

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  

  const handleNavClick = (sectionName: string, href: string): void => {
    setActiveSection(sectionName.toLowerCase());
    setIsOpen(false);

    // Smooth scroll to section with offset for fixed navbar
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80; // Adjust based on your navbar height
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-blue-500/20 shadow-xl shadow-blue-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
            
            {/* Logo Section - Responsive sizing */}
            <div className="flex-shrink-0">
              <a href="#home" className="group relative flex items-center gap-2 sm:gap-3 lg:gap-4">
                {/* Logo Icon */}
                <div className="relative">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden group-hover:rotate-3 transition-transform duration-300">
                    {/* Circuit pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-l border-white/40" />
                      <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-r border-white/40" />
                      <div className="absolute bottom-0.5 left-0.5 sm:bottom-1 sm:left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-l border-white/40" />
                      <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-r border-white/40" />
                    </div>
                    <Terminal className="text-white relative z-10 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                </div>
                
                {/* Name Section */}
                <div className="flex flex-col min-w-0">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight whitespace-nowrap">
                    Aman
                  </span>
                </div>
              </a>
            </div>

            {/* TABLET & DESKTOP Navigation - Shows from md (768px) and up */}
            <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.name, item.href);
                    }}
                    className={`group relative flex items-center gap-1.5 lg:gap-2 px-2 lg:px-3 xl:px-4 py-2 rounded-lg lg:rounded-xl transition-all duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-white bg-blue-500/10 border border-blue-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className="opacity-70 group-hover:opacity-100 transition-opacity w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="font-medium text-sm lg:text-base">{item.name}</span>
                    
                    {activeSection === item.name.toLowerCase() && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                    )}
                  </a>
                );
              })}

              {/* CTA Button for Tablet & Desktop */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact', '#contact');
                }}
                className="relative ml-2 lg:ml-4 px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white rounded-lg lg:rounded-xl font-semibold overflow-hidden group shadow-lg shadow-blue-500/25 border border-blue-400/20 hover:scale-105 transition-transform duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm lg:text-base">
                  <Cpu className="text-cyan-300 w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Hire Me</span>
                </span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* MOBILE Menu Button - Only shows below md (768px) */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="md:hidden relative w-10 h-10 sm:w-11 sm:h-11 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg sm:rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                {isOpen ? (
                  <X className="absolute inset-0 w-full h-full" />
                ) : (
                  <Menu className="absolute inset-0 w-full h-full" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE Menu Overlay - Only shows below md (768px) */}
        <div 
          className={`md:hidden fixed inset-0 top-16 sm:top-18 bg-slate-950/98 backdrop-blur-xl z-40 transition-all duration-300 ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="flex flex-col h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Navigation Items */}
            <div className="flex-1 px-4 sm:px-6 py-6 sm:py-8 overflow-y-auto">
              <div className="space-y-2 sm:space-y-3">
                {NAV_ITEMS.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.name, item.href);
                      }}
                      className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl transition-all duration-300 ${
                        activeSection === item.name.toLowerCase()
                          ? 'bg-blue-500/10 border border-blue-500/30 text-white'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50'
                      }`}
                      style={{ 
                        animationDelay: `${index * 50}ms`,
                        animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                      }}
                    >
                      <Icon className="opacity-70 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                      <span className="font-semibold text-base sm:text-lg">{item.name}</span>
                      
                      {activeSection === item.name.toLowerCase() && (
                        <div className="ml-auto w-2.5 h-2.5 bg-cyan-400 rounded-full flex-shrink-0" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile CTA Section */}
            <div className="px-4 sm:px-6 py-4 sm:py-6 border-t border-slate-700/50 bg-slate-950/50">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact', '#contact');
                }}
                className="w-full flex items-center justify-center gap-2 sm:gap-3 px-5 py-3.5 sm:py-4 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white rounded-xl font-bold text-base sm:text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 active:scale-95"
              >
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                Let&apos;s Work Together
              </a>
              
              {/* Mobile Social Links */}
              <div className="mt-4 sm:mt-6 text-center text-slate-400 text-xs sm:text-sm">
                <p>Ready to build something amazing?</p>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Floating Dots Navigation - Only on large desktop screens */}
      <div className="hidden xl:block fixed right-6 2xl:right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col gap-4 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-3">
          {NAV_ITEMS.slice(1).map(item => (
            <div key={item.name} className="group relative">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.name, item.href);
                }}
                className={`block w-3 h-3 rounded-full transition-all duration-300 border hover:scale-125 ${
                  activeSection === item.name.toLowerCase()
                    ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50'
                    : 'bg-slate-600 border-slate-500 hover:bg-blue-400 hover:border-blue-400'
                }`}
              />
              
              {/* Tooltip */}
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-slate-800/90 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-slate-700/50 pointer-events-none">
                {item.name}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 border-l border-b border-slate-700/50 rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 origin-left z-[60] transform" 
           style={{
             transform: `scaleX(${scrollProgress})`,
             transition: 'transform 0.1s ease-out'
           }} />

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgb(30 41 59);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgb(59 130 246);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgb(37 99 235);
        }
      `}</style>
    </>
  );
}