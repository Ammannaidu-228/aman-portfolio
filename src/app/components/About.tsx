'use client';
import Link from "next/link";
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2,
  Compass,
  Wrench,
  Sparkles,
  Users,
  Award,
  Layers,
  Heart,
  Rocket,
  Bot,
  Zap,
  ShieldCheck,
  Calendar
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const tabs = [
    { 
      id: 'journey', 
      label: 'The Journey', 
      icon: Compass,
      content: {
        title: "Four Years in the Machine Room",
        description: "I started out where most of the internet's boring-but-critical work happens: enterprise backend systems nobody sees until they break. At Infosys, I spent four years as the engineer companies like BNSF Railways and Mercedes-Benz called in to modernize what legacy code had left behind — pulling 25+ mainframe modules into 40+ independently deployable microservices, one careful migration at a time.",
        highlights: [
          { icon: Rocket, text: "Owned end-to-end migration of 25+ legacy modules into 40+ production REST APIs" },
          { icon: Zap, text: "Cut p99 latency 20% on services handling 5M+ daily requests" },
          { icon: ShieldCheck, text: "Shipped 99.9%-uptime services for a Fortune 500 automotive OEM" },
          { icon: Users, text: "Sat as the direct client point of contact, not just a ticket-taker" }
        ]
      }
    },
    {
      id: 'craft',
      label: 'How I Build',
      icon: Wrench,
      content: {
        title: "Boring Code, Exciting Systems",
        description: "My philosophy hasn't changed even as my stack has: the flashiest part of a system should never be the part that keeps you up at night. That means SOLID design in every review, test coverage that's actually trustworthy, and instrumentation that tells you what broke before a customer does. It's the same discipline whether I'm tuning a Hibernate connection pool or debugging a vector index that crashed a container on deploy.",
        highlights: [
          { icon: Code2, text: "Enforced SOLID design in reviews, drove test coverage past 80%" },
          { icon: Layers, text: "Read-replica routing & connection pooling to shave latency at scale" },
          { icon: Bot, text: "Debugged a production RAG crash-loop down to a missing HNSW index" },
          { icon: Award, text: "AWS, Azure & Big Data certified — theory backed by shipped systems" }
        ]
      }
    },
    {
      id: 'next',
      label: "What's Next",
      icon: Sparkles,
      content: {
        title: "Pointing the Same Skills at AI",
        description: "The systems-thinking that migrated mainframes is the same muscle that ships agentic AI: both are about turning ambiguous requirements into something that runs reliably in production. I've been deliberately extending that backend foundation into RAG pipelines, vector search, and multi-step agents with LangChain and LangGraph — not as a pivot away from engineering rigor, but as the next place it's needed most.",
        highlights: [
          { icon: Bot, text: "Built production RAG pipelines with LangChain, Chroma & OpenAI embeddings" },
          { icon: Layers, text: "Comfortable across the stack: FastAPI services to Hugging Face fine-tuning" },
          { icon: Heart, text: "Looking for teams solving the model-to-product gap, not just the model" },
          { icon: Rocket, text: "Targeting AI Engineer & Founding Engineer roles where both muscles matter" }
        ]
      }
    }
  ];

  const stats = [
    { number: "40+", label: "REST APIs Built", icon: Rocket },
    { number: "4+", label: "Years Experience", icon: Calendar },
    { number: "25+", label: "Systems Migrated", icon: Users },
    { number: "4+", label: "Cloud Certifications", icon: Award }
  ];

  const currentTab = tabs[activeTab];
  const TabIcon = currentTab.icon;

  return (
    <section 
      ref={sectionRef}
      id='about'
      className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-black to-slate-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-400/5 rounded-full blur-3xl" />
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
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            Backend engineer by training, AI engineer by direction — I build the unglamorous parts that keep systems (and now, agents) running
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
                className="bg-gray-900/40 border border-gray-700/50 rounded-xl p-4 sm:p-6 text-center backdrop-blur-sm hover:border-gray-400/30 transition-all group"
              >
                <div className="flex justify-center mb-3">
                  <div className="p-2 sm:p-3 bg-gradient-to-r from-white/20 to-gray-400/20 rounded-lg group-hover:from-white/30 group-hover:to-gray-400/30 transition-all">
                    <StatIcon className="text-gray-300 w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm sm:text-base font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Tabbed Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="bg-gray-900/30 border border-gray-700/40 rounded-2xl backdrop-blur-sm overflow-hidden"
        >
          
          {/* Tab Navigation */}
          <div className="flex flex-col sm:flex-row border-b border-gray-700/40">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 font-semibold transition-all relative group flex-1 justify-center sm:justify-start ${
                    activeTab === index
                      ? 'text-white bg-gray-800/50'
                      : 'text-gray-400 hover:text-white hover:bg-gray-900/30'
                  }`}
                >
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">{tab.label}</span>
                  {activeTab === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-gray-400"
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
                <div className="p-3 sm:p-4 bg-gradient-to-r from-white/20 to-gray-400/20 rounded-xl mx-auto sm:mx-0">
                  <TabIcon className="text-gray-300 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">
                    {currentTab.content.title}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl">
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
                      className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gray-900/30 border border-gray-700/30 rounded-xl hover:border-gray-400/40 transition-all group"
                    >
                      <div className="p-2 bg-gradient-to-r from-white/20 to-gray-400/20 rounded-lg group-hover:from-white/30 group-hover:to-gray-400/30 transition-all flex-shrink-0">
                        <HighlightIcon className="text-gray-300 w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
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
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700/40 rounded-2xl p-6 sm:p-8 backdrop-blur-sm max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Let&apos;s Build Something Amazing Together
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              I&apos;m always excited to collaborate on innovative projects and discuss new opportunities. 
              Whether you&apos;re looking to build a new product or optimize existing systems, let&apos;s connect!
            </p>
<Link href="#contact" scroll={true}>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-white to-gray-400 text-black font-semibold rounded-xl shadow-lg shadow-gray-400/20 hover:shadow-gray-400/30 transition-all overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative flex items-center justify-center gap-2">
      <Heart size={18} className="sm:w-5 sm:h-5" />
      <span className="text-sm sm:text-base">Get In Touch</span>
    </div>
  </motion.button>
</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}