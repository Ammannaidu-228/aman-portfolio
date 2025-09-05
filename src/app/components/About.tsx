'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2,
  Lightbulb,
  Target,
  Users,
  Award,
  BookOpen,
  Coffee,
  Heart,
  Rocket,
  Brain,
  Zap,
  Globe,
  Calendar
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const tabs = [
    { 
      id: 'story', 
      label: 'My Story', 
      icon: BookOpen,
      content: {
        title: "From Curiosity to Code",
        description: "My journey in software engineering began with a simple fascination for how things work. What started as tinkering with HTML pages has evolved into architecting complex distributed systems at Infosys, where I've spent 3+ years building scalable solutions that impact thousands of users.",
        highlights: [
          { icon: Lightbulb, text: "Started coding during college with web development" },
          { icon: Rocket, text: "Transitioned to enterprise systems at Infosys" },
          { icon: Target, text: "Specialized in microservices and cloud architecture" },
          { icon: Users, text: "Led teams and mentored junior developers" }
        ]
      }
    },
    {
      id: 'philosophy',
      label: 'Philosophy',
      icon: Brain,
      content: {
        title: "Building Beyond Code",
        description: "I believe great software isn't just about clean code—it's about solving real problems for real people. My approach combines technical excellence with user empathy, always asking 'How can this make someone's life better?' Whether it's optimizing a database query or designing a user interface, every decision matters.",
        highlights: [
          { icon: Heart, text: "User-first mindset in every technical decision" },
          { icon: Zap, text: "Performance and scalability as core principles" },
          { icon: Globe, text: "Collaborative approach to complex challenges" },
          { icon: Coffee, text: "Continuous learning and knowledge sharing" }
        ]
      }
    },
    {
      id: 'expertise',
      label: 'Expertise',
      icon: Award,
      content: {
        title: "Technical Excellence",
        description: "With a strong foundation in full-stack development and systems design, I specialize in building robust, scalable applications. My experience spans from frontend React applications to backend microservices, with a particular focus on cloud-native architectures and DevOps practices.",
        highlights: [
          { icon: Code2, text: "Full-stack development with React, Node.js, and Java" },
          { icon: Globe, text: "Cloud architecture on AWS, Azure, and GCP" },
          { icon: Zap, text: "Microservices design and distributed systems" },
          { icon: Target, text: "DevOps, CI/CD, and infrastructure automation" }
        ]
      }
    }
  ];

  const stats = [
    { number: "15+", label: "Projects Delivered", icon: Rocket },
    { number: "3+", label: "Years Experience", icon: Calendar },
    { number: "8+", label: "Developers Mentored", icon: Users },
    { number: "5", label: "Tech Certifications", icon: Award }
  ];

  const currentTab = tabs[activeTab];
  const TabIcon = currentTab.icon;

  return (
    <section 
      ref={sectionRef}
      id='about'
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.p 
            className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Passionate about creating impactful solutions through clean, efficient code and innovative thinking
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 sm:p-6 text-center backdrop-blur-sm hover:border-blue-500/30 transition-all group"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                    <StatIcon className="text-blue-400 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-slate-400 text-sm sm:text-base font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tabbed Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="bg-slate-800/40 border border-slate-700/50 rounded-2xl backdrop-blur-sm overflow-hidden"
        >
          
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row border-b border-slate-700/50">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 font-semibold transition-all relative group flex-1 justify-center sm:justify-start ${
                    activeTab === index
                      ? 'text-blue-400 bg-slate-700/50'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
                  }`}
                >
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">{tab.label}</span>
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 sm:space-y-8"
            >
              
              {/* Content Header */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="p-3 sm:p-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl mx-auto sm:mx-0">
                  <TabIcon className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
                    {currentTab.content.title}
                  </h3>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
                    {currentTab.content.description}
                  </p>
                </div>
              </div>

              {/* Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {currentTab.content.highlights.map((highlight, index) => {
                  const HighlightIcon = highlight.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-slate-700/30 border border-slate-600/30 rounded-xl hover:border-blue-500/40 transition-all group"
                    >
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all flex-shrink-0">
                        <HighlightIcon className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {highlight.text}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/60 to-slate-700/60 border border-slate-600/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
              I&apos;m always excited to collaborate on innovative projects and discuss new opportunities. 
              Whether you&apos;re looking to build a new product or optimize existing systems, let&apos;s connect!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-center gap-2">
                <Heart size={18} className="sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Get In Touch</span>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}