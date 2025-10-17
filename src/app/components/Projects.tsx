'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variant } from 'framer-motion';
import { Code2, ExternalLink, Github, Star, Calendar, Zap, ArrowUpRight, Sparkles } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projects = [
  { 
    title: 'Threadora- E-commerce Platform', 
    desc: 'Full-stack MERN e-commerce with secure payments, advanced search, Redis caching, and real-time inventory management',
    img: '/images/threadora-logo.png', 
    repo: '#', 
    demo: '#',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    category: 'Full Stack',
    status: 'Live',
    featured: true,
    year: '2024'
  },
  { 
    title: 'Milo - Real time Chat Application', 
    desc: 'Chat app with instant messaging, typing indicators, and online presence.',
    img: '/images/milo-logo.png', 
    repo: '#', 
    demo: '#',
    tech: ['React', 'Socket.io', 'Node.js', 'Redis', 'DynamoDb', 'S3'],
    category: 'Real-time',
    status: 'Live',
    featured: false,
    year: '2024'
  },
  { 
    title: 'LitPick - Book Recommender', 
    desc: 'Recommendation engine using collaborative filtering and content-based algorithms to suggest personalized books for book enthusiasts.',
    img: '/images/lit-pick-logo.png', 
    repo: '#', 
    demo: 'https://lit-pick.vercel.app/',
    tech: ['Flask', 'skikit-learn', 'Numpy', 'Pandas'],
    category: 'AI/ML',
    status: 'Live',
    featured: false,
    year: '2024'
  }
];

const categories = ['All', 'Full Stack', 'Real-time', 'AI/ML'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  const containerVariants: {
    hidden: Variant;
    visible: Variant;
  } = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants: {
    hidden: Variant;
    visible: Variant;
  } = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="projects" 
      className="relative py-12 sm:py-16 lg:py-20 overflow-hidden
        /* LIGHT THEME - Minimalist, clean, professional */
        bg-gradient-to-b from-white via-gray-50/50 to-white
        /* DARK THEME - Bold, electric, futuristic */
        dark:bg-gradient-to-b dark:from-gray-950 dark:via-purple-950/30 dark:to-gray-950
      "
    >
      {/* BACKGROUND ELEMENTS - Completely different for each theme */}
      
      {/* LIGHT THEME Background - Subtle and clean */}
      <div className="absolute inset-0 dark:hidden">
        {/* Subtle geometric patterns */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-200 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-indigo-200 rounded-full opacity-50"></div>
        {/* Clean grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* DARK THEME Background - Dramatic and electric */}
      <div className="absolute inset-0 hidden dark:block">
        {/* Electric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-72 lg:w-80 h-56 sm:h-72 lg:h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 lg:w-64 h-48 sm:h-56 lg:h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse animation-delay-4000"></div>
        
        {/* Electric sparks */}
        <div className="absolute top-32 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-40 w-0.5 h-0.5 bg-pink-400 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-2/3 right-1/3 w-0.5 h-0.5 bg-cyan-400 rounded-full animate-ping animation-delay-3000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER - Dramatically different styling */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* LIGHT THEME Header */}
          <div className="dark:hidden">
            <motion.div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-2 rounded-full bg-gray-100 border border-gray-200">
              <Code2 className="w-4 h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-gray-600">My Work</span>
            </motion.div>

            <motion.h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
              Featured
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </span>
            </motion.h2>
          </div>

          {/* DARK THEME Header */}
          <div className="hidden dark:block">
            <motion.div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-purple-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-purple-300 tracking-wider">PORTFOLIO</span>
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-pink-400 animate-pulse animation-delay-500" />
            </motion.div>

            <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 leading-none">
              <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                FEATURED
              </span>
              <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                PROJECTS
              </span>
            </motion.h2>
          </div>

          {/* Common subtitle with theme-specific styling */}
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4
            text-gray-600 
            dark:text-gray-300 dark:font-medium
          ">
            <span className="dark:hidden">Showcasing innovative solutions built with cutting-edge technologies</span>
            <span className="hidden dark:inline">🚀 Next-generation applications pushing the boundaries of what&apos;s possible</span>
          </p>
        </motion.div>

        {/* CATEGORY FILTER - Completely different designs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12 sm:mb-16 px-4"
        >
          {/* LIGHT THEME Filter */}
          <div className="dark:hidden flex flex-wrap justify-center gap-2 p-1 rounded-xl bg-white border border-gray-200 shadow-sm max-w-full">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* DARK THEME Filter */}
          <div className="hidden dark:flex flex-wrap justify-center gap-2 sm:gap-3 p-2 rounded-2xl bg-gray-900/50 border border-purple-500/30 backdrop-blur-md max-w-full">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 sm:px-8 py-2 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 whitespace-nowrap ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 border border-purple-400'
                    : 'text-gray-300 bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 border border-gray-700 hover:border-purple-500/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* PROJECTS GRID - Theme-specific card designs with responsive grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${activeCategory}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex"
              >
                {/* LIGHT THEME Card */}
                <div className="dark:hidden relative flex flex-col w-full rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 border border-amber-200">
                      <Star className="w-3 h-3" />
                      <span className="hidden sm:inline">Featured</span>
                      <span className="sm:hidden">★</span>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
                    {project.status}
                  </div>

                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>

                  {/* Content - Using flex-1 to fill remaining space and flex column */}
                  <div className="flex flex-col flex-1 p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Calendar className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400" />
                      <span className="text-xs sm:text-sm text-gray-500">{project.year}</span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 line-clamp-2">{project.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed flex-1">{project.desc}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons - Pushed to bottom with mt-auto */}
                    <div className="flex gap-2 sm:gap-3 mt-auto">
                      <a 
                        href={project.demo} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span className="hidden sm:inline">Demo</span>
                        <span className="sm:hidden">Demo</span>
                      </a>
                      <a 
                        href={project.repo} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 px-3 sm:px-4 rounded-lg font-medium text-sm sm:text-base bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors border border-gray-200"
                      >
                        <Github className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span className="hidden sm:inline">Code</span>
                        <span className="sm:hidden">Code</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* DARK THEME Card */}
                <div className="hidden dark:flex flex-col w-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900/90 to-purple-900/20 border border-purple-500/30 shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 backdrop-blur-sm">
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-yellow-900 shadow-lg animate-pulse">
                      <Star className="w-3 h-3" />
                      <span className="hidden sm:inline">⭐ FEATURED</span>
                      <span className="sm:hidden">⭐</span>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-bold bg-gradient-to-r from-green-400 to-emerald-400 text-green-900 shadow-lg">
                    <span className="hidden sm:inline">🔥 {project.status.toUpperCase()}</span>
                    <span className="sm:hidden">🔥</span>
                  </div>

                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent"></div>
                    {/* Glowing overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4 sm:p-6 relative z-10">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <Calendar className="w-3 sm:w-4 h-3 sm:h-4 text-purple-400" />
                      <span className="text-xs sm:text-sm text-purple-300 font-semibold">{project.year}</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-black mb-2 sm:mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 leading-relaxed font-medium flex-1">{project.desc}</p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {project.tech.map(tech => (
                        <span key={tech} className="px-2 sm:px-3 py-1 rounded-full text-xs font-bold bg-purple-900/50 text-purple-200 border border-purple-500/50 backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 sm:gap-3 mt-auto">
                      <a 
                        href={project.demo} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                      >
                        <ArrowUpRight className="w-3 sm:w-4 h-3 sm:h-4" />
                        DEMO
                      </a>
                      <a 
                        href={project.repo} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-bold text-sm sm:text-base bg-gray-800/50 text-purple-200 hover:bg-gray-700/50 transition-all border border-purple-500/30 hover:border-purple-400 backdrop-blur-sm"
                      >
                        <Github className="w-3 sm:w-4 h-3 sm:h-4" />
                        CODE
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA SECTION - Dramatically different designs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 sm:mt-20 px-4"
        >
          {/* LIGHT THEME CTA */}
          <div className="dark:hidden p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Explore More Projects</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md mx-auto">
              Visit my GitHub to see more projects, contributions, and open-source work.
            </p>
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transition-all"
            >
              <Code2 size={16} className="sm:w-5 sm:h-5" />
              View GitHub
            </motion.a>
          </div>

          {/* DARK THEME CTA */}
          <div className="hidden dark:block p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 backdrop-blur-md relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                🚀 WANT MORE?
              </h3>
              <p className="text-purple-200 mb-6 sm:mb-8 max-w-md mx-auto font-semibold text-base sm:text-lg">
                Dive deeper into my digital universe. More projects, experiments, and innovations await!
              </p>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-8 sm:px-12 py-3 sm:py-4 rounded-2xl font-black text-base sm:text-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all transform hover:rotate-1 shadow-lg hover:shadow-purple-500/50 border border-purple-400"
              >
                <Code2 size={20} className="sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">EXPLORE GITHUB</span>
                <span className="sm:hidden">GITHUB</span>
                <ArrowUpRight size={20} className="sm:w-6 sm:h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}