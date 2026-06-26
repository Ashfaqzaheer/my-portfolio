"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GitHub",
  "Vercel",
  "AWS",
  "Docker",
  "Terraform",
  "Kubernetes",
];

export default function TechStackSection() {
  return (
    <section
      id="tech"
      className="bg-[#0C0C0C] py-24 md:py-32 px-6 md:px-10 overflow-hidden relative z-20"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 md:mb-24"
          style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
        >
          Tech Stack
        </h2>
      </FadeIn>

      {/* Floating physics-style grid */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4 md:gap-6">
        {techStack.map((tech, i) => (
          <motion.div
            key={tech}
            className="px-6 py-4 md:px-8 md:py-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm cursor-pointer"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: i * 0.06,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
              scale: 1.05,
              borderColor: "rgba(187, 204, 215, 0.3)",
              boxShadow: "0 10px 40px rgba(187, 204, 215, 0.08)",
              transition: { duration: 0.3 },
            }}
          >
            <span className="text-[#D7E2EA] font-medium text-sm md:text-base uppercase tracking-wider">
              {tech}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Marquee text row */}
      <div className="mt-20 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-8 animate-marquee">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <span
              key={`m-${i}`}
              className="text-white/[0.06] font-black uppercase text-5xl md:text-7xl whitespace-nowrap tracking-tight"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
