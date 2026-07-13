'use client';
import React, { useEffect, useRef } from 'react';
import {
  Brain, Code2, Database, Cloud, Workflow
} from 'lucide-react';

const SI_BASE = "https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/";

interface Skill {
  name: string;
  slug?: string;   // omit for concepts/practices with no brand logo (e.g. "RAG Pipelines", "SOLID")
  color?: string;  // brand hex color, required if slug is present
}

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: Skill[];
}

function ColoredLogo({ slug, name, color }: { slug: string; name: string; color: string }) {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const colorize = (src: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 64; canvas.height = 64;
      const ctx = canvas.getContext('2d')!;
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.onload = () => {
        ctx.drawImage(image, 0, 0, 64, 64);
        const data = ctx.getImageData(0, 0, 64, 64);
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        for (let p = 0; p < data.data.length; p += 4) {
          if (data.data[p + 3] > 0) {
            data.data[p] = r;
            data.data[p + 1] = g;
            data.data[p + 2] = b;
          }
        }
        ctx.putImageData(data, 0, 0);
        if (img) img.src = canvas.toDataURL();
      };
      image.src = src;
    };

    const src = `${SI_BASE}${slug}.svg`;
    colorize(src);
  }, [slug, color]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={`${SI_BASE}${slug}.svg`}
      alt={name}
      width={16}
      height={16}
      loading="lazy"
      className="flex-shrink-0"
      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
    />
  );
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "AI/ML & Agentic Systems",
      icon: Brain,
      skills: [
        { name: "LLMs" },
        { name: "RAG Pipelines" },
        { name: "LangChain", slug: "langchain", color: "#1C3C3C" },
        { name: "LangGraph" },
        { name: "Agentic AI (ReAct)" },
        { name: "Prompt & Context Engineering" },
        { name: "OpenAI APIs", slug: "openai", color: "#412991" },
        { name: "Hugging Face", slug: "huggingface", color: "#FFD21E" },
        { name: "PyTorch", slug: "pytorch", color: "#EE4C2C" },
        { name: "Vector Search & Embeddings" },
        { name: "Fine-Tuning (LoRA/QLoRA)" },
      ]
    },
    {
      title: "Languages & Frameworks",
      icon: Code2,
      skills: [
        { name: "Java", slug: "openjdk", color: "#ED8B00" },
        { name: "Python", slug: "python", color: "#3776AB" },
        { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
        { name: "TypeScript", slug: "typescript", color: "#3178C6" },
        { name: "Spring Boot / WebFlux / Cloud", slug: "springboot", color: "#6DB33F" },
        { name: "Hibernate", slug: "hibernate", color: "#59666C" },
        { name: "FastAPI", slug: "fastapi", color: "#009688" },
        { name: "React.js", slug: "react", color: "#61DAFB" },
        { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
      ]
    },
    {
      title: "Databases, Vector Stores & Messaging",
      icon: Database,
      skills: [
        { name: "MySQL", slug: "mysql", color: "#4479A1" },
        { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
        { name: "MongoDB", slug: "mongodb", color: "#47A248" },
        { name: "Redis", slug: "redis", color: "#FF4438" },
        { name: "Chroma (Vector DB)" },
        { name: "Qdrant (Vector DB)" },
        { name: "Kafka", slug: "apachekafka", color: "#ffffff" },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS (EC2, S3, Lambda, RDS)", slug: "amazonwebservices", color: "#FF9900" },
        { name: "Azure", slug: "microsoftazure", color: "#0078D4" },
        { name: "Docker", slug: "docker", color: "#2496ED" },
        { name: "Kubernetes", slug: "kubernetes", color: "#326CE5" },
        { name: "CI/CD", slug: "jenkins", color: "#D24939" },
        { name: "Distributed Tracing" },
        { name: "Observability" },
      ]
    },
    {
      title: "System Design & Engineering Practice",
      icon: Workflow,
      skills: [
        { name: "HLD" },
        { name: "LLD" },
        { name: "Design Patterns" },
        { name: "SOLID" },
        { name: "Data Structures & Algorithms" },
        { name: "Multithreading" },
        { name: "Scalability" },
        { name: "Fault Tolerance" },
      ]
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 bg-gradient-to-b from-black to-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Stack
          </h2>
          <p className="text-gray-400">Technologies & Tools</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="group bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-slate-700/50 hover:border-slate-600/80 rounded-xl p-5 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/50"
              >
                <div className="flex items-center gap-2 mb-4">
                  <IconComponent size={20} className="text-slate-400" />
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      title={skill.name}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/60 transition-colors cursor-default border border-slate-600/50 hover:border-slate-500 group/item"
                    >
                      {skill.slug && skill.color && (
                        <ColoredLogo slug={skill.slug} name={skill.name} color={skill.color} />
                      )}
                      <span className="text-xs font-medium text-gray-400 group-hover/item:text-white transition-colors whitespace-nowrap">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}