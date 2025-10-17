'use client';
import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  MapPin,
  Phone,
  Send,
  Heart,
  ArrowUp,
  Code2,
  Zap,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub', 
      href: '#', 
      color: 'hover:text-white',
      bg: 'hover:bg-slate-700'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: '#', 
      color: 'hover:text-blue-400',
      bg: 'hover:bg-blue-500/20'
    }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleSubmit = () => {
    // Handle form submission here
    console.log('Form submitted:', { email, message });
    setEmail('');
    setMessage('');
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/3 rounded-full blur-3xl" />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.4) 1px, transparent 0)',
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column - Branding & Contact */}
            <div className="space-y-8">
              {/* Logo/Brand */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                    <Code2 size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Ammannaidu Gollapalli</h3>
                    <p className="text-cyan-400 font-semibold">Software Engineer</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Passionate about creating scalable applications and innovative solutions. 
                  Always learning, always building.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group">
                  <MapPin size={18} className="group-hover:scale-110 transition-transform" />
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group">
                  <Phone size={18} className="group-hover:scale-110 transition-transform" />
                  <span>+91 8978239237</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group">
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  <span>n160228@rguktn.ac.in</span>
                </div>
              </div>

              {/* Current Time */}
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm text-slate-400">Local Time</p>
                    <p className="text-white font-semibold">
                      {currentTime.toLocaleTimeString('en-US', { 
                        timeZone: 'Asia/Kolkata',
                        hour: '2-digit', 
                        minute: '2-digit'
                      })} IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column - Quick Links & Tech Stack */}
            <div className="space-y-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Zap size={20} className="text-cyan-400" />
                  Quick Links
                </h4>
                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-all group py-1"
                    >
                      <div className="w-1 h-1 bg-slate-500 rounded-full group-hover:w-2 group-hover:bg-cyan-400 transition-all"></div>
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Tech Highlight */}
              <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 border border-slate-600/50 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-lg font-bold text-white mb-4">Currently Working With</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full border border-slate-600/50 hover:border-cyan-400/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center gap-2">
                <Send size={20} className="text-cyan-400" />
                Let&apos;s Connect
              </h4>
              


              {/* Social Links */}
              <div className="pt-4">
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`p-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-slate-400 transition-all hover:scale-110 transform ${social.color} ${social.bg} group`}
                        title={social.label}
                      >
                        <Icon size={20} className="group-hover:rotate-12 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              
              <div className="flex items-center gap-6 text-slate-400 text-sm">
                <span>© 2025 Ammannaidu. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-110 active:scale-95 z-50 group"
          title="Back to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </footer>
  );
}