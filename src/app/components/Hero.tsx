'use client';

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Code2, ArrowRight, Star, Zap, Download, MessageCircle } from 'lucide-react';

export default function Hero() {
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
    { number: "5+", label: "Certifications" },
    { number: "3+", label: "Years Experience" },
  ];

  const [typedText, setTypedText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentTech, setCurrentTech] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Optimized typewriter effect
  useEffect(() => {
    let timeout;
    const currentText = typewriterTexts[currentTextIndex];

    if (isTyping && typedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 50);
    } else if (isTyping && typedText.length === currentText.length) {
      timeout = setTimeout(() => setIsTyping(false), 2000);
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
      id='home'
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(6,182,212,0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-screen lg:min-h-0">
          
          {/* MOBILE OPTIMIZED LAYOUT */}
          <div className="lg:hidden w-full space-y-6">
            {/* Profile Card - Compact & Modern */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 overflow-hidden">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
                
                <div className="flex items-start gap-4 mb-6">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-75"></div>
                    <div className="relative w-20 h-24 rounded-xl overflow-hidden border-2 border-slate-700 bg-slate-800">
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                        <img src="/images/profile-light.jpg" alt="Ammannaidu Gollapalli" className="w-full h-full object-cover"/>
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse"></div>
                  </div>

                  {/* Name & Title */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={14} className="text-blue-400 flex-shrink-0" />
                      <span className="text-blue-400 font-semibold text-xs uppercase tracking-wider">Software Engineer</span>
                    </div>
                    <h1 className="text-2xl font-bold leading-tight mb-1">
                      <span className="text-white block">Ammannaidu</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                        Gollapalli
                      </span>
                    </h1>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <MapPin size={12} className="text-blue-400 flex-shrink-0" />
                      <span className="truncate">Visakhapatnam, IN</span>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 mb-4">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-300 text-sm font-medium">Available for opportunities</span>
                </div>

                {/* Social Links - Horizontal */}
                <div className="flex gap-2">
                  {[
                    { Icon: Github, href: "https://github.com/Ammannaidu-228", label: "GitHub" },
                    { Icon: Linkedin, href: "#", label: "LinkedIn" },
                    { Icon: Mail, href: "#", label: "Email" },
                  ].map(({ Icon, href, label }) => (
                    <a 
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 active:scale-95"
                    >
                      <Icon size={18} className="text-slate-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Typewriter Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
                <div className="flex items-start gap-3">
                  <Code2 className="text-blue-400 flex-shrink-0 mt-1" size={20} />
                  <p className="text-base text-slate-200 font-medium leading-relaxed">
                    {typedText}
                    <span className="text-blue-400 ml-1 animate-pulse">|</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement) => (
                <div
                  key={achievement.label}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-slate-900/70 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 text-center hover:border-blue-500/50 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-xs text-slate-400 uppercase tracking-wide">{achievement.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Focus - Compact */}
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 overflow-hidden">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Code2 className="text-blue-400" size={18} />
                  </div>
                  <h3 className="text-white font-bold text-sm">Current Focus</h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{techStack[currentTech].icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xl font-bold bg-gradient-to-r ${techStack[currentTech].color} bg-clip-text text-transparent leading-tight`}>
                      {techStack[currentTech].name}
                    </p>
                    <p className="text-slate-400 text-xs">{techStack[currentTech].desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Stacked */}
            <div className="space-y-3">
              <button className="w-full group relative px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl text-white font-semibold flex items-center justify-center gap-3 overflow-hidden shadow-lg shadow-blue-500/25 active:scale-98 transition-transform">
                <Star size={20} />
                <span>View My Work</span>
                <ArrowRight size={18} className="group-active:translate-x-1 transition-transform" />
              </button>
              
            </div>

            {/* Code Preview - Compact */}
            <div className="bg-slate-950/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 font-mono text-xs overflow-hidden">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-1 text-slate-300">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">dev</span> = &#123;</p>
                <p className="ml-3"><span className="text-cyan-400">name</span>: <span className="text-green-400">&quot;Ammannaidu&quot;</span>,</p>
                <p className="ml-3"><span className="text-cyan-400">role</span>: <span className="text-orange-400">&quot;Engineer&quot;</span>,</p>
                <p className="ml-3"><span className="text-cyan-400">passion</span>: <span className="text-pink-400">&quot;Build & Design&quot;</span></p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>

          {/* DESKTOP LAYOUT - Original Design */}
          <div className="hidden lg:block lg:col-span-7">
            <div className="relative mb-8">
              <div className="flex items-start gap-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                                              <img src="/images/profile-light.jpg" alt="Ammannaidu Gollapalli" className="w-full h-full object-cover"/>

                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm uppercase tracking-wider mb-2">
                    <Zap size={16} />
                    Software Engineer
                  </span>
                  
                  <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                    <span className="text-white">Ammannaidu</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                      Gollapalli
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>
                <p className="text-2xl text-slate-200 font-medium flex items-center flex-wrap gap-2">
                  <Code2 className="text-blue-400 flex-shrink-0" size={24} />
                  <span className="min-h-[1.5em] flex items-center">
                    {typedText}
                    <span className="text-blue-400 ml-1 animate-pulse">|</span>
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              {[
                { Icon: Github, href: "https://github.com/Ammannaidu-228", label: "GitHub", color: "hover:text-purple-400" },
                { Icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
                { Icon: Mail, href: "#", label: "Email", color: "hover:text-green-400" },
              ].map(({ Icon, href, label, color }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative p-4 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-opacity-100 transition-all duration-300 ${color}`}
                >
                  <Icon className="text-slate-300 group-hover:text-current transition-colors" size={20} />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white bg-slate-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-slate-300">Visakhapatnam, India</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-900/20 border border-emerald-700/50">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-300">Available for opportunities</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl text-white font-semibold flex items-center gap-3 overflow-hidden hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                <Star size={20} />
                <span>View My Work</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 space-y-6">
            <div className="bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Code2 className="text-blue-400" size={20} />
                  </div>
                  <h3 className="text-white font-bold text-lg">Tech Focus</h3>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{techStack[currentTech].icon}</div>
                  <div className="min-w-0 flex-1">
                    <p className={`text-2xl font-bold bg-gradient-to-r ${techStack[currentTech].color} bg-clip-text text-transparent leading-tight`}>
                      {techStack[currentTech].name}
                    </p>
                    <p className="text-slate-400 text-sm">{techStack[currentTech].desc}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.label}
                  className="bg-slate-900/70 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 text-center hover:border-blue-500/50 transition-colors duration-300"
                >
                  <div className="text-2xl font-bold text-white mb-1">{achievement.number}</div>
                  <div className="text-xs text-slate-400 uppercase leading-tight">{achievement.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-slate-950/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 font-mono text-sm relative overflow-hidden">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-1 text-slate-300">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                <p className="ml-4"><span className="text-cyan-400">name</span>: <span className="text-green-400">&quot;Ammannaidu&quot;</span>,</p>
                <p className="ml-4"><span className="text-cyan-400">role</span>: <span className="text-orange-400">&quot;Software Engineer&quot;</span>,</p>
                <p className="ml-4"><span className="text-cyan-400">location</span>: <span className="text-yellow-400">&quot;Visakhapatnam, IN&quot;</span>,</p>
                <p className="ml-4"><span className="text-cyan-400">passion</span>: <span className="text-pink-400">&quot;Design & Develop software&quot;</span></p>
                <p>&#125;;</p>
                <p className="mt-2 text-slate-500 text-xs">Ready to create something amazing?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}