'use client';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, Code, Database, Cloud, Zap } from 'lucide-react';

export default function Experience() {

  const roles = [
    {
      company: 'Infosys',
      title: 'Senior Systems Engineer',
      period: '2023 - Present',
      duration: '2+ years',
      location: 'Vizag',
      type: 'Full-time',
      companyUrl: 'https://www.infosys.com',
      description: 'Leading enterprise-scale mainframe modernization and microservices architecture for BNSF Railways, one of North America\'s largest freight railroad networks.',
      bullets: [
        'Engineered migration of 25+ legacy mainframe modules to Java-based microservices, improving scalability and reducing maintenance overhead by 30%',
        'Architected and developed 40+ REST APIs using Spring Boot, JPA, Hibernate, and optimized MySQL queries, resulting in 20-25% faster response times',
        'Performed in-depth analysis of legacy workflows with SMEs and defined end-to-end migration strategies, reducing technical risks and rework by 15%',
        'Collaborated cross-functionally with architects, QA, and product teams to maintain code quality and achieve 95% on-time delivery for major releases',
        'Led code reviews and enforced SOLID principles, improving code consistency and maintainability; implemented JUnit test cases achieving 80%+ coverage'
      ],
      skills: ['Java', 'Spring Boot', 'Microservices', 'MySQL', 'JPA/Hibernate', 'REST APIs', 'JUnit', 'SOLID Principles'],
      achievements: [
        { icon: Code, text: '40+ REST APIs developed' },
        { icon: Zap, text: '25% faster response times' },
        { icon: Database, text: '25+ modules migrated' }
      ]
    },
    {
      company: 'Infosys',
      title: 'System Engineer',
      period: '2022 - 2023',
      duration: '1 year',
      location: 'Hyderabad',
      type: 'Full-time',
      companyUrl: 'https://www.infosys.com',
      description: 'Developed high-availability backend services and automated data workflows for Mercedes-Benz dealer management systems.',
      bullets: [
        'Developed high-availability backend services using Java, Spring Boot, and MySQL, improving system uptime to 99.9%',
        'Designed and implemented RESTful APIs for dealer information retrieval, enabling seamless integration with React front-end applications',
        'Automated daily ETL workflows and data ingestion using scheduled jobs, reducing manual effort by 90% and improving data reliability',
        'Worked in Agile Scrum teams, contributing to sprint planning, peer reviews, and achieving consistent sprint velocity',
        'Utilized Jenkins for CI/CD pipelines, JIRA for tracking, Postman for API testing, Git for version control, and JUnit for automated testing'
      ],
      skills: ['Java', 'Spring Boot', 'MySQL', 'React', 'Jenkins', 'Git', 'Postman', 'JIRA', 'Agile/Scrum'],
      achievements: [
        { icon: Cloud, text: '99.9% system uptime' },
        { icon: Database, text: '90% reduction in manual effort' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Building scalable applications and delivering exceptional user experiences across diverse industries
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="experience-timeline"
        >
          {roles.map((role, index) => (
            <motion.div
              key={index}
              className="experience-item group"
            >
              <span className="experience-dot"></span>
              
              <div className="experience-card">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-[var(--text)]">
                        {role.title}
                      </h3>
                      <span className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                        {role.type}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="experience-company text-lg font-semibold">
                        @{role.company}
                      </span>
                      {role.companyUrl && (
                        <ExternalLink className="w-4 h-4 text-muted hover:text-accent cursor-pointer transition-colors" />
                      )}
                    </div>
                    
                    <p className="text-muted text-sm leading-relaxed mb-4">
                      {role.description}
                    </p>
                  </div>
                  
                  <div className="lg:text-right space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted lg:justify-end">
                      <Calendar className="w-4 h-4" />
                      <span>{role.period}</span>
                      <span className="px-2 py-1 text-xs bg-muted/10 rounded">
                        {role.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted lg:justify-end">
                      <MapPin className="w-4 h-4" />
                      <span>{role.location}</span>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                {role.achievements && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {role.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-3 py-2 bg-accent/5 border border-accent/10 rounded-lg"
                      >
                        <achievement.icon className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-[var(--text)]">
                          {achievement.text}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="font-semibold text-[var(--text)] mb-3">Key Responsibilities & Achievements:</h4>
                  <ul className="experience-bullets space-y-3">
                    {role.bullets.map((bullet, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.4 }}
                        className="relative pl-6 text-sm leading-relaxed"
                      >
                        <span className="absolute left-0 top-2 w-2 h-2 bg-accent rounded-full"></span>
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-[var(--text)] mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05, duration: 0.3 }}
                        className="px-3 py-1 text-xs font-medium bg-muted/10 hover:bg-accent/10 text-[var(--text)] hover:text-accent rounded-full border border-transparent hover:border-accent/20 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 border border-accent/20 rounded-full text-sm text-accent">
            <Zap className="w-4 h-4" />
            <span>Open to new opportunities and exciting projects</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}