"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import ContactButton from "./ContactButton";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scroll-based parallax for the heading (moves faster than portrait)
  const headingParallaxX = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const headingParallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex flex-col relative"
      style={{ overflowX: "clip" }}
    >
      {/* Navbar - z-50 */}
      <FadeIn delay={0} y={-20} className="relative z-50">
        <nav className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
          {["About", "Services", "Projects", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
            >
              {label}
            </a>
          ))}
        </nav>
      </FadeIn>

      {/* Hero Heading - z-5, behind portrait, animated */}
      <div className="relative z-[5] pointer-events-none overflow-visible">
        <FadeIn delay={0.15} y={40}>
          <motion.div
            className="overflow-visible min-w-[120vw] pr-[10vw]"
            style={{
              x: headingParallaxX,
              y: headingParallaxY,
              willChange: "transform",
            }}
          >
            <motion.h1
              className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 px-6 md:px-10"
              animate={{
                x: ["-8%", "8%", "-8%"],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              style={{ willChange: "transform" }}
            >
              Hi, i&apos;m ashfaq
            </motion.h1>
          </motion.div>
        </FadeIn>
      </div>

      {/* Portrait with Magnetic Effect - z-30, centered, floating */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-30 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <img
            src="/portrait.png"
            alt="Ashfaq Zaheer"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto object-contain pointer-events-none select-none"
            draggable={false}
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar - z-25, above content */}
      <div className="mt-auto flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-[25]">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            an ai-powered developer driven by crafting modern and scalable solutions
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
