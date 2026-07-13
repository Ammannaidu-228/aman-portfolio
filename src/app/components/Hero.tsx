"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";

export default function Hero() {
  const typewriterTexts = [
    "Engineering microservices at scale",
    "Building agentic AI & RAG pipelines",
    "Migrating legacy systems to modern architectures",
    "Shipping production LLM applications",
  ];

  const techStack = [
    {
      name: "Spring Boot",
      desc: "Microservices & REST APIs",
      icon: "🍃",
      color: "from-white to-gray-300",
    },
    {
      name: "LangChain & RAG",
      desc: "Agentic AI Systems",
      icon: "🤖",
      color: "from-gray-200 to-gray-400",
    },
    {
      name: "AWS & Azure",
      desc: "Cloud Infrastructure",
      icon: "☁️",
      color: "from-gray-300 to-gray-500",
    },
    {
      name: "Vector Search",
      desc: "Chroma & Qdrant",
      icon: "🔎",
      color: "from-gray-400 to-gray-600",
    },
  ];

  const achievements = [
    { number: "4+", label: "Years Experience" },
    { number: "4+", label: "AWS & Azure Certs" },
  ];

  const [typedText, setTypedText] = useState("");
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

  const socials = [
    {
      Icon: Github,
      href: "https://github.com/Ammannaidu-228",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      Icon: Linkedin,
      href: "https://www.linkedin.com/in/ammannaidu-gollapalli-4591a639b/",
      label: "LinkedIn",
      color: "hover:text-white",
    },
    {
      Icon: Mail,
      href: "mailto:ammannaidu.dev@gmail.com",
      label: "Email",
      color: "hover:text-gray-300",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black"
    >
      {/* Background Effects - Black & White Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(200,200,200,0.03),transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-screen lg:min-h-0">
          {/* MOBILE OPTIMIZED LAYOUT */}
          <div className="lg:hidden w-full space-y-6">
            {/* Profile Card - Compact & Modern */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-gray-400/10 to-gray-300/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-slate-950/95 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-6 overflow-hidden">
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-400 to-gray-600"></div>

                <div className="flex items-start gap-4 mb-6">
                  {/* Profile Image */}
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-400 to-gray-600 rounded-2xl blur opacity-60"></div>
                    <div className="relative w-20 h-24 rounded-xl overflow-hidden border-2 border-gray-600 bg-slate-800">
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-700 flex items-center justify-center text-white text-2xl font-bold">
                        <img
                          src="/images/profile-light.jpg"
                          alt="Ammannaidu Gollapalli"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full border-2 border-slate-900 animate-pulse"></div>
                  </div>

                  {/* Name & Title */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={14} className="text-gray-300 flex-shrink-0" />
                      <span className="text-gray-300 font-semibold text-xs uppercase tracking-wider">
                        Senior Software Engineer
                      </span>
                    </div>
                    <h1 className="text-2xl font-bold leading-tight mb-1">
                      <span className="text-white block">Ammannaidu</span>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-white">
                        Gollapalli
                      </span>
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin
                        size={12}
                        className="text-gray-300 flex-shrink-0"
                      />
                      <span className="truncate">Vizag, India</span>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/20 mb-4">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-gray-200 text-sm font-medium">
                    Available for opportunities
                  </span>
                </div>

                {/* Social Links - Horizontal */}
                <div className="flex gap-2">
                  {socials.map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800/40 border border-gray-700/60 hover:border-white/40 hover:bg-slate-700/40 transition-all duration-300 active:scale-95"
                    >
                      <Icon size={18} className="text-gray-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Typewriter Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-4 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white via-gray-400 to-gray-700"></div>
                <div className="flex items-start gap-3">
                  <Code2
                    className="text-gray-300 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <p className="text-base text-gray-200 font-medium leading-relaxed">
                    {typedText}
                    <span className="text-gray-400 ml-1 animate-pulse">|</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement) => (
                <div key={achievement.label} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-400/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative bg-slate-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center hover:border-gray-400/50 transition-all duration-300">
                    <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">
                      {achievement.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Focus - Compact */}
            <div className="relative">
              <div className="absolute inset-0 bg-gray-500/5 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-4 overflow-hidden">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Code2 className="text-gray-300" size={18} />
                  </div>
                  <h3 className="text-white font-bold text-sm">
                    Current Focus
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{techStack[currentTech].icon}</div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-xl font-bold bg-gradient-to-r ${techStack[currentTech].color} bg-clip-text text-transparent leading-tight`}
                    >
                      {techStack[currentTech].name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {techStack[currentTech].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons - Stacked */}
            <div className="space-y-3">
              <Link href="#experience">
                <button className="w-full group relative px-6 py-4 bg-gradient-to-r from-white via-gray-300 to-gray-400 rounded-xl text-black font-semibold flex items-center justify-center gap-3 overflow-hidden shadow-lg shadow-gray-400/30 active:scale-95 transition-transform">
                  <Star size={20} />
                  <span>View My Work</span>
                  <ArrowRight
                    size={18}
                    className="group-active:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
            </div>

            {/* Code Preview - Compact */}
            <div className="bg-slate-950/95 backdrop-blur-md border border-gray-700/50 rounded-2xl p-4 font-mono text-xs overflow-hidden">
              <div className="flex gap-1.5 mb-3">
                <div className="w-2.5 h-2.5 bg-gray-400 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-gray-600 rounded-full"></div>
              </div>
              <div className="space-y-1 text-gray-400">
                <p>
                  <span className="text-gray-200">const</span>{" "}
                  <span className="text-gray-300">dev</span> = &#123;
                </p>
                <p className="ml-3">
                  <span className="text-gray-300">name</span>:{" "}
                  <span className="text-gray-400">&quot;Ammannaidu&quot;</span>
                  ,
                </p>
                <p className="ml-3">
                  <span className="text-gray-300">role</span>:{" "}
                  <span className="text-gray-400">
                    &quot;Backend + AI Engineer&quot;
                  </span>
                  ,
                </p>
                <p className="ml-3">
                  <span className="text-gray-300">stack</span>:{" "}
                  <span className="text-gray-400">
                    &quot;Java · Python · LangChain&quot;
                  </span>
                </p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>

          {/* DESKTOP LAYOUT - Original Design */}
          <div className="hidden lg:block lg:col-span-7">
            <div className="relative mb-8">
              <div className="flex items-start gap-6">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-400 to-gray-600 rounded-2xl blur opacity-50 group-hover:opacity-80 transition duration-500"></div>
                  <div className="relative w-20 h-24 rounded-xl overflow-hidden border border-gray-600 bg-slate-800">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-700 flex items-center justify-center text-white text-2xl font-bold">
                      <img
                        src="/images/profile-light.jpg"
                        alt="Ammannaidu Gollapalli"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-black rounded-full"></div>
                  </div>
                </div>

                <div className="flex-1">
                  <span className="inline-flex items-center gap-2 text-gray-300 font-semibold text-sm uppercase tracking-wider mb-2">
                    <Zap size={16} />
                    Senior Software Engineer
                  </span>

                  <h1 className="text-4xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                    <span className="text-white">Ammannaidu</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-400 to-white">
                      Gollapalli
                    </span>
                  </h1>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-gray-400 to-gray-700"></div>
                <p className="text-2xl text-gray-200 font-medium flex items-center flex-wrap gap-2">
                  <Code2 className="text-gray-300 flex-shrink-0" size={24} />
                  <span className="min-h-[1.5em] flex items-center">
                    {typedText}
                    <span className="text-gray-400 ml-1 animate-pulse">|</span>
                  </span>
                </p>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              {socials.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative p-4 rounded-xl bg-slate-800/40 border border-gray-700/60 hover:border-gray-400/50 hover:bg-slate-700/50 transition-all duration-300 ${color}`}
                >
                  <Icon
                    className="text-gray-300 group-hover:text-current transition-colors"
                    size={20}
                  />
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-white bg-slate-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/30 border border-gray-700/60">
                <MapPin size={18} className="text-gray-300" />
                <span className="text-gray-300">Vizag, India</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/20">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-gray-200">
                  Available for opportunities
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="#experience">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-white via-gray-300 to-gray-400 rounded-xl text-black font-semibold flex items-center gap-3 overflow-hidden hover:shadow-lg hover:shadow-gray-400/50 transition-all duration-300">
                  <Star size={20} />
                  <span>View My Work</span>
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 space-y-6">
            <div className="bg-slate-900/50 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-gray-400/5 rounded-full -translate-y-8 translate-x-8"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/10">
                    <Code2 className="text-gray-300" size={20} />
                  </div>
                  <h3 className="text-white font-bold text-lg">Tech Focus</h3>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{techStack[currentTech].icon}</div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`text-2xl font-bold bg-gradient-to-r ${techStack[currentTech].color} bg-clip-text text-transparent leading-tight`}
                    >
                      {techStack[currentTech].name}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {techStack[currentTech].desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.label}
                  className="bg-slate-900/50 backdrop-blur-md border border-gray-700/50 rounded-xl p-4 text-center hover:border-gray-400/50 transition-colors duration-300"
                >
                  <div className="text-2xl font-bold text-white mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-xs text-gray-400 uppercase leading-tight">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-950/80 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 font-mono text-sm relative overflow-hidden">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
              </div>
              <div className="space-y-1 text-gray-400">
                <p>
                  <span className="text-gray-200">const</span>{" "}
                  <span className="text-gray-300">developer</span> = &#123;
                </p>
                <p className="ml-4">
                  <span className="text-gray-300">name</span>:{" "}
                  <span className="text-gray-400">&quot;Ammannaidu&quot;</span>
                  ,
                </p>
                <p className="ml-4">
                  <span className="text-gray-300">role</span>:{" "}
                  <span className="text-gray-400">
                    &quot;Senior Software Engineer&quot;
                  </span>
                  ,
                </p>
                <p className="ml-4">
                  <span className="text-gray-300">location</span>:{" "}
                  <span className="text-gray-400">
                    &quot;Visakhapatnam, IN&quot;
                  </span>
                  ,
                </p>
                <p className="ml-4">
                  <span className="text-gray-300">focus</span>:{" "}
                  <span className="text-gray-400">
                    &quot;Backend systems + Agentic AI&quot;
                  </span>
                </p>
                <p>&#125;;</p>
                <p className="mt-2 text-gray-600 text-xs">
                  Ready to create something amazing?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}