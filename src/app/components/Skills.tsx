'use client';
import React, { useState, useEffect } from 'react';
// Using Lucide React icons which are supported
import { 
  Code, 
  Database, 
  Cloud, 
  Zap, 
  Star,
  TrendingUp,
  Award,
  Terminal
} from 'lucide-react';

export default function SDE2Skills() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { 
          name: "React", 
          logo: (
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.85-1.87 1.85-1.87-.82-1.87-1.85.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96"/>
            </svg>
          ),
          color: "text-cyan-400"
        },
        { 
          name: "Next.js", 
          logo: (
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          ),
          color: "text-white"
        },
        { 
          name: "TypeScript", 
          logo: (
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
              TS
            </div>
          ),
          color: "text-blue-500"
        }
      ]
    },
    {
      id: "backend",
      title: "Backend", 
      icon: Database,
      color: "from-green-500 to-teal-500",
      skills: [
        { 
          name: "Node.js", 
          logo: (
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          ),
          color: "text-green-500"
        },
        { 
          name: "Java", 
          logo: (
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white text-xs font-bold">
              J
            </div>
          ),
          color: "text-orange-500"
        },
        { 
          name: "Spring Boot", 
          logo: (
            <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          ),
          color: "text-green-400"
        }
      ]
    },
    {
      id: "database",
      title: "Database",
      icon: Terminal,
      color: "from-purple-500 to-pink-500",
      skills: [
        { 
          name: "MongoDB", 
          logo: (
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs font-bold">
              M
            </div>
          ),
          color: "text-green-500"
        },
        { 
          name: "PostgreSQL", 
          logo: (
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-xs font-bold">
              P
            </div>
          ),
          color: "text-blue-600"
        },
        { 
          name: "Python", 
          logo: (
            <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center text-white text-xs font-bold">
              Py
            </div>
          ),
          color: "text-yellow-500"
        }
      ]
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { 
          name: "AWS", 
          logo: (
            <div className="w-6 h-6 bg-orange-400 rounded flex items-center justify-center text-white text-xs font-bold">
              AWS
            </div>
          ),
          color: "text-orange-400"
        },
        { 
          name: "Docker", 
          logo: (
            <div className="w-6 h-6 bg-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
              D
            </div>
          ),
          color: "text-blue-400"
        },
        { 
          name: "Kubernetes", 
          logo: (
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs font-bold">
              K8s
            </div>
          ),
          color: "text-blue-500"
        }
      ]
    }
  ];

  const achievements = [
    { icon: Code, label: "Projects", value: "25+", color: "text-blue-400" },
    { icon: Star, label: "Tech Stack", value: "15+", color: "text-cyan-400" },
    { icon: TrendingUp, label: "Experience", value: "5+ Years", color: "text-teal-400" }
  ];

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % skillCategories.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [skillCategories.length]);

  const currentCategory = skillCategories[activeCategory];

  return (
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-cyan-500/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Zap size={16} />
            Technical Expertise
          </div>

          {/* Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Skills That Drive
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Mastering cutting-edge technologies to build scalable, high-performance applications
          </p>

          {/* Achievement Stats */}
          <div className="flex flex-wrap justify-center gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={achievement.label}
                  className="flex items-center gap-3 bg-slate-800/50 border border-slate-700/50 rounded-xl px-6 py-4 backdrop-blur-sm hover:border-blue-500/30 transition-all group"
                >
                  <div className="p-2 bg-slate-700/50 rounded-lg group-hover:scale-110 transition-transform">
                    <Icon size={20} className={achievement.color} />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{achievement.value}</div>
                    <div className="text-sm text-slate-400">{achievement.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Category Navigation */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white mb-8">Core Competencies</h3>
            
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === index;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group transform hover:scale-105 active:scale-95 ${
                    isActive 
                      ? 'bg-slate-800 border border-blue-500/30 shadow-lg shadow-blue-500/10' 
                      : 'bg-slate-800/30 border border-slate-700/50 hover:border-slate-600/50'
                  }`}
                >
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} ${isActive ? 'scale-110' : 'group-hover:scale-105'} transition-transform`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  
                  <div className="text-left flex-1">
                    <h4 className={`font-semibold transition-colors ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                      {category.title}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {category.skills.length} Technologies
                    </p>
                  </div>
                  
                  {isActive && (
                    <div className="w-1 h-12 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Side - Active Skills Display */}
          <div className="relative">
            {/* Background Card */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm">
              <div
                key={activeCategory}
                className="transition-all duration-500"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${currentCategory.color}`}>
                    <currentCategory.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{currentCategory.title}</h3>
                    <p className="text-slate-400">Professional Expertise</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {currentCategory.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all group hover:scale-105 cursor-pointer"
                    >
                      {/* Technology Logo */}
                      <div className="p-3 bg-slate-600/50 rounded-xl group-hover:scale-110 transition-transform">
                        <div className={`${skill.color}`}>
                          {skill.logo}
                        </div>
                      </div>
                      
                      {/* Technology Info */}
                      <div className="flex-1">
                        <h4 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                          Production Ready
                        </p>
                      </div>
                      
                      {/* Hover Effect Indicator */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Category Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {skillCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeCategory ? 'w-8 bg-cyan-400' : 'w-4 bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600/50 text-slate-300 px-6 py-3 rounded-full">
            <Award size={16} className="text-cyan-400" />
            <span className="font-semibold">Always Learning • Always Evolving</span>
          </div>
        </div>
      </div>
    </section>
  );
}