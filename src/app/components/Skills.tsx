'use client';
import React, { useState, useEffect } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Zap, 
  Star,
  TrendingUp,
  Award,
  Terminal,
  Wrench,
  Cpu
} from 'lucide-react';

export default function SDE2Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      id: "languages",
      title: "Programming Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Java", level: "Expert", years: "5+", color: "text-orange-600" },
        { name: "Python", level: "Advanced", years: "3+", color: "text-blue-500" },
        { name: "JavaScript", level: "Expert", years: "4+", color: "text-yellow-400" },
        { name: "Go", level: "Intermediate", years: "1+", color: "text-cyan-400" }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Development", 
      icon: Code,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: "Expert", years: "4+", color: "text-cyan-400" },
        { name: "Redux", level: "Advanced", years: "3+", color: "text-purple-500" },
        { name: "Axios", level: "Advanced", years: "3+", color: "text-purple-600" },
        { name: "HTML5/CSS3", level: "Expert", years: "5+", color: "text-orange-500" }
      ]
    },
    {
      id: "backend",
      title: "Backend & Frameworks",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Spring Boot", level: "Expert", years: "5+", color: "text-green-500" },
        { name: "Spring MVC", level: "Advanced", years: "4+", color: "text-green-400" },
        { name: "Hibernate/JPA", level: "Expert", years: "5+", color: "text-gray-600" },
        { name: "Flask", level: "Advanced", years: "2+", color: "text-gray-900" },
        { name: "REST APIs", level: "Expert", years: "5+", color: "text-blue-500" },
        { name: "Microservices", level: "Advanced", years: "3+", color: "text-blue-400" }
      ]
    },
    {
      id: "database",
      title: "Databases",
      icon: Database,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "MySQL", level: "Expert", years: "5+", color: "text-blue-600" },
        { name: "MongoDB", level: "Advanced", years: "2+", color: "text-green-500" }
      ]
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS (EC2, S3, Lambda)", level: "Advanced", years: "3+", color: "text-orange-500" },
        { name: "Azure", level: "Basic", years: "1+", color: "text-blue-500" },
        { name: "Docker", level: "Advanced", years: "3+", color: "text-blue-500" },
        { name: "Kubernetes", level: "Basic", years: "1+", color: "text-blue-600" },
        { name: "Jenkins (CI/CD)", level: "Advanced", years: "3+", color: "text-red-500" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Technologies",
      icon: Wrench,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Git/GitHub", level: "Expert", years: "5+", color: "text-gray-800" },
        { name: "Postman", level: "Expert", years: "5+", color: "text-orange-500" },
        { name: "Swagger", level: "Advanced", years: "4+", color: "text-green-500" },
        { name: "JIRA", level: "Advanced", years: "4+", color: "text-blue-600" },
        { name: "IntelliJ IDEA", level: "Expert", years: "5+", color: "text-purple-600" },
        { name: "VS Code", level: "Expert", years: "4+", color: "text-blue-500" },
        { name: "Resilience4j", level: "Advanced", years: "2+", color: "text-teal-500" },
        { name: "JWT", level: "Expert", years: "3+", color: "text-purple-500" },
        { name: "Razorpay", level: "Advanced", years: "1+", color: "text-blue-600" }
      ]
    },
    {
      id: "ml",
      title: "Data Science & ML",
      icon: Cpu,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Scikit-learn", level: "Advanced", years: "2+", color: "text-orange-500" },
        { name: "Pandas", level: "Advanced", years: "2+", color: "text-blue-700" },
        { name: "NumPy", level: "Advanced", years: "2+", color: "text-blue-500" }
      ]
    }
  ];

  const achievements = [
    { icon: Code, label: "Projects", value: "5+", color: "text-blue-400" },
    { icon: Star, label: "Tech Stack", value: "30+", color: "text-cyan-400" },
    { icon: TrendingUp, label: "Experience", value: "3+ Years", color: "text-teal-400" }
  ];

  const certifications = [
    { name: "AWS Certified Cloud Practitioner", icon: Cloud, color: "text-orange-500" },
    { name: "Azure Certified Developer Associate", icon: Cloud, color: "text-blue-500" },
    { name: "Infosys Certified Big Data Developer", icon: Database, color: "text-green-500" }
  ];

  // Auto-rotate categories
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % skillCategories.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

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
            {achievements.map((achievement) => {
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
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
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
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-sm min-h-[500px]">
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
                <div className="space-y-4">
                  {currentCategory.skills.map((skill, index) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-all group hover:scale-105 cursor-pointer"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="flex items-center gap-4">
                        {/* Skill Icon */}
                        <div className={`w-10 h-10 rounded-lg ${skill.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <div className={`w-2 h-2 rounded-full ${skill.color.replace('text-', 'bg-')}`}></div>
                        </div>
                        
                        {/* Skill Info */}
                        <div>
                          <h4 className="font-bold text-white text-lg group-hover:text-cyan-400 transition-colors">
                            {skill.name}
                          </h4>
                          <p className="text-sm text-slate-400">
                            {skill.level} • {skill.years} experience
                          </p>
                        </div>
                      </div>
                      
                      {/* Proficiency Indicator */}
                      <div className="flex gap-1">
                        {[...Array(skill.level === 'Expert' ? 5 : skill.level === 'Advanced' ? 4 : 3)].map((_, i) => (
                          <div key={i} className={`w-1.5 h-6 rounded-full ${skill.color.replace('text-', 'bg-')} opacity-80`}></div>
                        ))}
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

        {/* Certifications Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Professional Certifications
            </h3>
            <p className="text-slate-400">Validated expertise from industry leaders</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => {
              const Icon = cert.icon;
              return (
                <div
                  key={cert.name}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/30 transition-all group hover:scale-105"
                >
                  <div className={`p-3 rounded-lg bg-slate-700/50 inline-block mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className={cert.color} />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{cert.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Award size={14} className="text-cyan-400" />
                    <span>Certified</span>
                  </div>
                </div>
              );
            })}
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