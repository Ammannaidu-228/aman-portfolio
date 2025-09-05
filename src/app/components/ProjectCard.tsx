'use client';

import React, { useState } from 'react';
import { motion, Variant } from 'framer-motion';
import { Github, ExternalLink, Calendar, Tag, Star } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    desc: string;
    img: string;
    repo: string;
    demo: string;
    tech: string[];
    category: string;
    status: string;
    featured: boolean;
    year: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const cardVariants: {
    hidden: Variant;
    visible: Variant;
  } = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants: {
    hidden: Variant;
    visible: Variant;
  } = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const overlayVariants: {
    hidden: Variant;
    visible: Variant;
  } = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.article 
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Star size={12} />
            Featured
          </div>
        </div>
      )}

      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-20">
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
          project.status === 'Live' 
            ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
            : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
        }`}>
          {project.status}
        </div>
      </div>

      {/* Image Container */}
      <div className="relative h-48 bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <motion.img 
          variants={imageVariants}
          initial="hidden"
          animate={imageLoaded ? "visible" : "hidden"}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          src={project.img} 
          alt={project.title}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Hover Overlay */}
        <motion.div 
          variants={overlayVariants}
          initial="hidden"
          whileHover="visible"
          className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
        >
          <motion.a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
          >
            <Github size={16} />
            Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center gap-2"
          >
            <ExternalLink size={16} />
            Demo
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
            {project.title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={14} className="mr-1" />
            {project.year}
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {project.desc}
        </p>

        {/* Category */}
        <div className="flex items-center gap-2 mb-4">
          <Tag size={14} className="text-gray-400" />
          <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
            {project.category}
          </span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}