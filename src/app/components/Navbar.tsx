'use client';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Code, User, Briefcase, Mail, Home, Terminal, Menu, X } from 'lucide-react';

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
  const [isClient, setIsClient] = useState(false);

  // mark client to safely use document
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle scroll effect and active section detection
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight || 1;
      const currentProgress = window.scrollY / maxScroll;
      setScrollProgress(Math.min(currentProgress, 1));

      // Detect active section
      const sections = NAV_ITEMS.map(item => {
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
      }).filter(Boolean);

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section) continue;
        if (scrollPosition >= section.offsetTop) {
          setActiveSection(section.name);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === 'undefined') return;
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (sectionName: string, href: string) => {
    setActiveSection(sectionName.toLowerCase());
    setIsOpen(false);

    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 64; // adjust if your navbar height differs
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Mobile menu JSX (rendered via portal)
  const mobileMenu = (
    <div
      // full-screen overlay
      className={`fixed inset-0 bg-slate-950/98 backdrop-blur-xl transition-all duration-200 ${
        isOpen ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'
      }`}
      style={{ zIndex: 99999 }}
      aria-hidden={!isOpen}
    >
      <div className="h-full flex flex-col px-4 py-6 overflow-y-auto pt-20">
        <div className="space-y-2">
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
                className={`flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? 'bg-blue-500/10 border border-blue-500/30 text-white'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50 border border-transparent'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                }}
              >
                <Icon className="w-6 h-6 flex-shrink-0" />
                <span className="font-semibold text-lg">{item.name}</span>

                {activeSection === item.name.toLowerCase() && (
                  <div className="ml-auto w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0" />
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* local style for animation */}
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-950/95 backdrop-blur-xl border-b border-blue-500/20 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Mobile First */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home', '#home');
              }}
              className="flex items-center gap-2"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-lg flex items-center justify-center hover:rotate-3 transition-transform duration-300">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-white/40" />
                    <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-white/40" />
                    <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-white/40" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-white/40" />
                  </div>
                  <Terminal className="text-white relative z-10 w-5 h-5" />
                </div>
              </div>

              <span className="text-xl font-bold text-white tracking-tight sm:text-2xl">Aman</span>
            </a>

            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-1">
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
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeSection === item.name.toLowerCase()
                        ? 'text-white bg-blue-500/10 border border-blue-500/30'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{item.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen((s) => !s)}
              className="md:hidden w-10 h-10 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 active:scale-95"
              aria-label="Toggle menu"
              style={{ zIndex: 100000 }} // keep button above everything while toggling
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Desktop Floating Dots Navigation */}
      <div className="hidden lg:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="flex flex-col gap-3 bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-3">
          {NAV_ITEMS.map(item => (
            <div key={item.name} className="group relative">
              <button
                onClick={() => handleNavClick(item.name, item.href)}
                className={`block w-3 h-3 rounded-full transition-all duration-300 border hover:scale-125 ${
                  activeSection === item.name.toLowerCase()
                    ? 'bg-cyan-400 border-cyan-400 shadow-lg shadow-cyan-400/50'
                    : 'bg-slate-600 border-slate-500 hover:bg-blue-400 hover:border-blue-400'
                }`}
                aria-label={`Navigate to ${item.name}`}
              />
              <div className="absolute right-6 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-slate-700 pointer-events-none">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 origin-left z-[60]"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Render mobile menu portal only on client */}
      {isClient && createPortal(mobileMenu, document.body)}
    </>
  );
}
