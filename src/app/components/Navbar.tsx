'use client';
import React, { useState, useEffect } from 'react';
import { Code, User, Briefcase, Mail, Home, Terminal, Cpu, Menu, X } from 'lucide-react';

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

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

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: Code },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  interface NavItem {
    name: string;
    href: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  }

  type SectionName = 'home' | 'about' | 'experience' | 'projects' | 'contact';

  const handleNavClick = (sectionName: string, href: string): void => {
    setActiveSection(sectionName.toLowerCase());
    setIsOpen(false);

    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              <a href="#home" className="group relative flex items-center gap-3 sm:gap-4 lg:gap-5">
                {/* Logo Icon */}
                <div className="relative">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden group-hover:rotate-3 transition-transform duration-300">
                    {/* Circuit pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-l border-white/40" />
                      <div className="absolute top-0.5 right-0.5 sm:top-1 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 border-t border-r border-white/40" />
                      <div className="absolute bottom-0.5 left-0.5 sm:bottom-1 sm:left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-l border-white/40" />
                      <div className="absolute bottom-0.5 right-0.5 sm:bottom-1 sm:right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 border-b border-r border-white/40" />
                    </div>
                    <Terminal size={16} className="text-white relative z-10 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                </div>
                
                {/* Name Section - Always Visible */}
                <div className="flex flex-col min-w-0">
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white tracking-tight whitespace-nowrap">
                    Aman
                  </span>
                </div>
              </a>
            </div>

            {/* TABLET & DESKTOP Navigation - Shows from md (768px) and up */}
            <div className="hidden md:flex items-center gap-3 md:gap-4 lg:gap-6 xl:gap-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.name, item.href);
                    }}
                    className={`group relative flex items-center gap-1.5 md:gap-2 px-2 md:px-3 lg:px-4 py-2 rounded-lg md:rounded-xl transition-all duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-white bg-blue-500/10 border border-blue-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon size={14} className="opacity-70 group-hover:opacity-100 transition-opacity md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    <span className="font-medium text-xs md:text-sm lg:text-base">{item.name}</span>
                    
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
                className="relative ml-2 lg:ml-4 px-3 md:px-4 lg:px-6 xl:px-8 py-2 lg:py-2.5 xl:py-3 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 text-white rounded-lg md:rounded-xl font-semibold overflow-hidden group shadow-lg shadow-blue-500/25 border border-blue-400/20 hover:scale-105 transition-transform duration-300"
              >
                <span className="relative z-10 flex items-center gap-1.5 md:gap-2 text-xs md:text-sm lg:text-base">
                  <Cpu size={14} className="text-cyan-300 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                  <span className="hidden md:inline lg:inline">Hire Me</span>
                  <span className="md:hidden">Hire</span>
                </span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* MOBILE Menu Button - Only shows below md (768px) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden mobile-menu-container relative w-10 h-10 sm:w-12 sm:h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                {isOpen ? (
                  <X className="absolute inset-0 w-full h-full transform rotate-0 transition-transform duration-300" />
                ) : (
                  <Menu className="absolute inset-0 w-full h-full transform rotate-0 transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE Menu Overlay - Only shows below md (768px) */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 sm:top-18 bg-slate-950/98 backdrop-blur-xl z-40 mobile-menu-container">
            <div className="flex flex-col h-full">
              {/* Mobile Navigation Items */}
              <div className="flex-1 px-4 sm:px-6 py-6 sm:py-8 overflow-y-auto">
                <div className="space-y-3 sm:space-y-4">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.name, item.href);
                        }}
                        className={`flex items-center gap-4 px-4 sm:px-6 py-4 sm:py-5 rounded-xl transition-all duration-300 text-lg sm:text-xl ${
                          activeSection === item.name.toLowerCase()
                            ? 'bg-blue-500/10 border border-blue-500/30 text-white'
                            : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50'
                        }`}
                        style={{ 
                          animationDelay: `${index * 100}ms`,
                          animation: isOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                        }}
                      >
                        <Icon size={24} className="opacity-70" />
                        <span className="font-semibold">{item.name}</span>
                        
                        {activeSection === item.name.toLowerCase() && (
                          <div className="ml-auto w-3 h-3 bg-cyan-400 rounded-full" />
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Mobile CTA Section */}
              <div className="px-4 sm:px-6 py-6 sm:py-8 border-t border-slate-700/50">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('contact', '#contact');
                  }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 sm:py-5 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 text-white rounded-xl font-bold text-lg sm:text-xl hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Cpu size={24} />
                  Let's Work Together
                </a>
                
                {/* Mobile Social Links */}
                <div className="mt-6 text-center text-slate-400 text-sm">
                  <p>Ready to build something amazing?</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Dots Navigation - Only on large desktop screens */}
      <div className="hidden xl:block fixed right-6 2xl:right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col gap-4 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-3">
          {navItems.slice(1).map(item => (
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
      <div className="fixed top-0 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 origin-left z-50 transform scale-x-0" 
           style={{
             transform: `scaleX(${Math.min(window.scrollY / 2000, 1)})`,
             transition: 'transform 0.1s ease-out'
           }} />

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* Custom breakpoint for extra small screens */
        @media (min-width: 475px) {
          .xs\\:flex {
            display: flex;
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