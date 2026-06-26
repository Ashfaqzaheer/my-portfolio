"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import { ExternalLink, Github, ArrowUpRight, Sparkles } from "lucide-react";

interface Project {
  title: string;
  category: string;
  status: string;
  description: string;
  techStack: string[];
  features: string[];
  coverImage: string;
  gallery: string[];
  liveUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "CharacterForge AI",
    category: "AI SaaS Platform",
    status: "In Development",
    description:
      "An AI-powered character generation platform with authentication, prompt history, AI image generation, and a modern SaaS architecture.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Railway", "GitHub"],
    features: [
      "AI Character Generation",
      "Authentication",
      "Dashboard",
      "Image History",
      "Responsive UI",
      "Cloud Deployment",
    ],
    coverImage: "/projects/characterforge-hero.png",
    gallery: [
      "/projects/characterforge-dashboard.png",
      "/projects/characterforge-create.png",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Ashfaqzaheer-",
  },
  {
    title: "Viraly AI",
    category: "AI Marketing SaaS",
    status: "In Development",
    description:
      "An AI-powered marketing platform helping creators generate viral content and streamline social media workflows.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Railway", "GitHub"],
    features: [
      "AI Content Generation",
      "Dashboard",
      "Analytics",
      "Authentication",
      "Responsive Design",
      "SaaS Architecture",
    ],
    coverImage: "/projects/viraly-hero.png",
    gallery: ["/projects/viraly-features.png"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ashfaqzaheer-",
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: Project;
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const targetScale = 1 - (totalCards - index) * 0.05;
  const range: [number, number] = [index * (1 / totalCards), 1];
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[100vh] sticky"
      style={{ top: `${40 + index * 25}px` }}
    >
      <motion.div
        className="w-full h-[80vh] max-h-[720px] rounded-3xl overflow-hidden relative group border border-white/[0.06] bg-[#111113]"
        style={{ scale, transformOrigin: "top center" }}
      >
        {/* Cover Image - Large */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.img
            src={project.coverImage}
            alt={`${project.title} cover`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            loading="lazy"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/70 to-transparent" />
          {/* Hover glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[#6366f1]/5 to-transparent" />
        </div>

        {/* Gallery thumbnails - floating on the right */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 flex flex-col gap-3 z-10">
          {project.gallery.map((img, i) => (
            <motion.div
              key={i}
              className="w-[140px] md:w-[180px] h-[90px] md:h-[110px] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={img}
                alt={`${project.title} gallery ${i + 1}`}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Content overlay - bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
          {/* Badges */}
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-medium text-[#a78bfa] bg-[#a78bfa]/10 rounded-full border border-[#a78bfa]/20 backdrop-blur-sm">
              {project.category}
            </span>
            <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-medium text-emerald-400 bg-emerald-400/10 rounded-full border border-emerald-400/20 backdrop-blur-sm">
              {project.status}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight mb-3">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[#9ca3af] text-sm md:text-base max-w-2xl leading-relaxed mb-4 hidden sm:block">
            {project.description}
          </p>

          {/* Features row */}
          <div className="flex flex-wrap gap-2 mb-4 hidden md:flex">
            {project.features.slice(0, 4).map((feature) => (
              <span
                key={feature}
                className="px-2.5 py-1 text-[10px] text-[#D7E2EA]/60 bg-white/[0.04] rounded-md border border-white/[0.06] uppercase tracking-wider"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Tech + Buttons row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-[11px] text-[#D7E2EA] bg-white/[0.06] rounded-lg border border-white/[0.1] uppercase tracking-wider font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 shrink-0">
              <Magnet padding={40} strength={8}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full gradient-btn text-white text-sm font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all duration-300"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </a>
              </Magnet>
              <Magnet padding={40} strength={8}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                >
                  <Github size={14} />
                  <span>GitHub</span>
                </a>
              </Magnet>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ComingSoonCard({ index, totalCards }: { index: number; totalCards: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const targetScale = 1 - (totalCards - index) * 0.05;
  const range: [number, number] = [index * (1 / totalCards), 1];
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[100vh] sticky"
      style={{ top: `${40 + index * 25}px` }}
    >
      <motion.div
        className="w-full h-[80vh] max-h-[720px] rounded-3xl overflow-hidden relative group border border-white/[0.06] bg-[#111113] flex items-center justify-center"
        style={{ scale, transformOrigin: "top center" }}
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[200px] h-[200px] bg-[#6366f1]/5 rounded-full blur-[80px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-[#a78bfa]/5 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/[0.04] border border-white/[0.1] flex items-center justify-center"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={28} className="text-[#a78bfa]" />
            </motion.div>

            <h3 className="text-white font-bold text-3xl md:text-5xl uppercase tracking-tight mb-4">
              More Projects
              <br />
              <span className="hero-heading">Coming Soon</span>
            </h3>

            <p className="text-[#9ca3af] text-sm md:text-base leading-relaxed max-w-md mx-auto">
              I&apos;m continuously building new AI applications, SaaS products,
              and business websites. Stay tuned for upcoming projects.
            </p>

            <motion.div
              className="mt-8 flex items-center justify-center gap-2 text-[#a78bfa] text-sm font-medium"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowUpRight size={16} />
              <span>New projects dropping soon</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const totalCards = projects.length + 1; // +1 for coming soon card

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[2rem] md:rounded-t-[3rem] relative z-20 pt-20 md:pt-32 px-6 md:px-10"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 md:mb-24"
          style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-7xl mx-auto pb-[10vh]">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={i}
            totalCards={totalCards}
          />
        ))}
        <ComingSoonCard index={projects.length} totalCards={totalCards} />
      </div>
    </section>
  );
}
