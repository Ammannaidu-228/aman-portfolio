'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Briefcase, Code2, ArrowRight, Download, Star, Zap, Globe, Coffee } from 'lucide-react';
import Image from 'next/image';
export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });
  
  const typewriterTexts = [
    "Building scalable web applications",
    "Architecting cloud-native solutions", 
    "Crafting exceptional user experiences",
    "Optimizing system performance"
  ];

  const techStack = [
    { name: "React / Next.js", desc: "Modern Frontend", icon: "⚛️", color: "from-blue-400 to-cyan-400" },
    { name: "System Design", desc: "Scalable Architecture", icon: "🏗️", color: "from-purple-400 to-pink-400" },
    { name: "Cloud Native", desc: "AWS / GCP / Azure", icon: "☁️", color: "from-green-400 to-blue-400" },
    { name: "Full Stack", desc: "End-to-End Solutions", icon: "🚀", color: "from-orange-400 to-red-400" },
  ];

  const achievements = [
    { number: "50+", label: "Projects Delivered" },
    { number: "3+", label: "Years Experience" },
    { number: "99%", label: "Client Satisfaction" },
  ];

  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentTech, setCurrentTech] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Mouse tracking for parallax effect (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      if (window.innerWidth >= 1024) { // Only on desktop
        const rect = heroRef.current?.getBoundingClientRect();
        if (rect) {
          mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.02);
          mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.02);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Enhanced typewriter effect
  useEffect(() => {
    let timeout;
    const currentText = typewriterTexts[currentTextIndex];

    if (isTyping && typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 80 + Math.random() * 40);
    } else if (isTyping && typedText.length === currentText.length) {
      timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
    } else if (!isTyping && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(typedText.slice(0, -1));
      }, 30);
    } else {
      timeout = setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        setIsTyping(true);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentTextIndex, isTyping]);

  // Rotate tech stack
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(6,182,212,0.1),transparent_70%)]" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600),
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 600)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 800)],
            }}
            transition={{ 
              duration: Math.random() * 20 + 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-0">
        {/* Mobile-first layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-screen lg:min-h-0">
          
          {/* MOBILE: Profile Card at top */}
          <motion.div 
            className="lg:hidden w-full max-w-sm mx-auto order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
              
              {/* Profile Picture */}
              <div className="relative inline-block mb-4">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-60"></div>
                <div className="relative w-24 h-28 mx-auto rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-2xl">
                    <Image
                      src="/images/profile1.jpeg"
                      alt="Profile"
                      width={96}
                      height={112}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                <motion.div 
                  className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-slate-900 flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              </div>

              <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-xs uppercase tracking-wider mb-2">
                <Zap size={14} />
                Software Development Engineer
              </span>
              
              <h1 className="text-2xl font-bold leading-tight mb-3">
                <span className="text-white block">Ammannaidu</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 block">
                  Gollapalli
                </span>
              </h1>

              {/* Mobile social links */}
              <div className="flex justify-center gap-3 mb-4">
                {[
                  { Icon: Github, href: "#", color: "hover:text-purple-400" },
                  { Icon: Linkedin, href: "#", color: "hover:text-blue-400" },
                  { Icon: Mail, href: "#", color: "hover:text-green-400" },
                  { Icon: Globe, href: "#", color: "hover:text-orange-400" }
                ].map(({ Icon, href, color }, index) => (
                  <motion.a 
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`p-3 rounded-lg bg-slate-800/60 border border-slate-700 transition-all duration-300 ${color}`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="text-slate-300" size={18} />
                  </motion.a>
                ))}
              </div>

              {/* Status badges */}
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm text-slate-300">
                  <MapPin size={14} className="text-blue-400" />
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300">Available for opportunities</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MAIN CONTENT */}
          <motion.div 
            className="w-full lg:col-span-7 order-3 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* DESKTOP: Header with profile */}
            <div className="hidden lg:block relative mb-8">
              <motion.div 
                className="flex items-start gap-6"
                style={{ x, y }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                                          <Image
                      src="/images/profile1.jpeg"
                      alt="Profile"
                      width={96}
                      height={112}
                      className="w-full h-full object-cover"
                      priority
                    />
                    </div>
                  </div>
                  <motion.div 
                    className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-slate-900 flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>
                </div>
                
                <div className="flex-1">
                  <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
                    <Zap size={16} />
                    Software Development Engineer
                  </span>
                  
                  <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                    <span className="text-white">Ammannaidu</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                      Gollapalli
                    </span>
                  </h1>
                </div>
              </motion.div>
            </div>

            {/* Typewriter section - responsive */}
            <motion.div 
              className="mb-6 lg:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
                <p className="text-lg sm:text-xl lg:text-2xl text-slate-200 font-medium flex items-center flex-wrap gap-2">
                  <Code2 className="text-blue-400 flex-shrink-0" size={20} />
                  <span className="min-h-[1.5em] flex items-center">
                    {typedText}
                    <motion.span 
                      className="text-blue-400 ml-1"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      |
                    </motion.span>
                  </span>
                </p>
              </div>
            </motion.div>

            {/* DESKTOP: Social links */}
            <motion.div 
              className="hidden lg:flex gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { Icon: Github, href: "#", label: "GitHub", color: "hover:text-purple-400" },
                { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
                { Icon: Mail, href: "#", label: "Email", color: "hover:text-green-400" },
                { Icon: Globe, href: "#", label: "Portfolio", color: "hover:text-orange-400" }
              ].map(({ Icon, href, label, color }, index) => (
                <motion.a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative p-4 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-opacity-100 transition-all duration-300 ${color}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="text-slate-300 group-hover:text-current transition-colors" size={20} />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white bg-slate-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* DESKTOP: Status badges */}
            <motion.div 
              className="hidden lg:flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-slate-300">Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-900/20 border border-emerald-700/50">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300">Available for opportunities</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-orange-900/20 border border-orange-700/50">
                <Coffee size={18} className="text-orange-400" />
                <span className="text-orange-300">Coffee enthusiast</span>
              </div>
            </motion.div>

            {/* CTA Buttons - responsive */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.button
                className="group relative px-6 sm:px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl text-white font-semibold flex items-center justify-center gap-3 overflow-hidden flex-1 sm:flex-initial"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Star size={20} className="relative z-10" />
                <span className="relative z-10">View My Work</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                className="px-6 sm:px-8 py-4 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-xl text-white font-semibold flex items-center justify-center gap-3 hover:bg-slate-700/80 hover:border-slate-500 transition-all"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={20} />
                <span>Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Tech Stack & Achievements */}
          <motion.div 
            className="w-full lg:col-span-5 space-y-4 lg:space-y-6 order-2 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Tech Focus Card */}
            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 sm:p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Code2 className="text-blue-400" size={20} />
                  </div>
                  <h3 className="text-white font-bold text-base sm:text-lg">Tech Focus</h3>
                </div>
                <motion.div
                  key={currentTech}
                  initial={{ opacity: 0, x: 20, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="text-2xl sm:text-3xl">{techStack[currentTech].icon}</div>
                  <div className="min-w-0 flex-1">
                    <p className={`text-lg sm:text-2xl font-bold bg-gradient-to-r ${techStack[currentTech].color} bg-clip-text text-transparent leading-tight`}>
                      {techStack[currentTech].name}
                    </p>
                    <p className="text-slate-400 text-sm">{techStack[currentTech].desc}</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Stats - responsive grid */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  className="bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-xl p-3 sm:p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{achievement.number}</div>
                  <div className="text-xs text-slate-400 uppercase leading-tight">{achievement.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Code Preview - responsive */}
            <motion.div
              className="bg-slate-950/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 sm:p-6 font-mono text-xs sm:text-sm relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0 }}
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-1 text-slate-300">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                <p className="ml-4"><span className="text-cyan-400">name</span>: <span className="text-green-400">Ammannaidu</span>,</p>
                <p className="ml-4"><span className="text-cyan-400">role</span>: <span className="text-orange-400">Full Stack Engineer</span>,</p>
                <p className="ml-4"><span className="text-cyan-400">location</span>: <span className="text-yellow-400">Hyderabad, IN</span>,</p>
                <p className="ml-4"><span className="text-cyan-400">passion</span>: <span className="text-pink-400">Building awesome apps</span></p>
                <p>&#125;;</p>
                <p className="mt-2 text-slate-500 text-xs">Ready to create something amazing?</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}