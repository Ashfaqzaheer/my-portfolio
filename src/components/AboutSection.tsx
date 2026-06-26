"use client";

import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import ContactButton from "./ContactButton";

const aboutText =
  "With over 5 years of experience in web development, I specialize in building modern, performant applications powered by AI workflows. From concept to deployment, I deliver scalable cloud solutions that combine cutting-edge technology with clean architecture and exceptional user experiences.";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 z-20"
    >
      {/* Decorative corner elements - z-1, pointer-events-none */}
      <FadeIn delay={0.1} y={20} className="absolute top-20 left-8 w-16 h-16 md:w-24 md:h-24 z-[1] pointer-events-none">
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#2a2a3e]/40 to-transparent rotate-12" />
      </FadeIn>
      <FadeIn delay={0.2} y={-20} className="absolute top-32 right-10 w-14 h-14 md:w-20 md:h-20 z-[1] pointer-events-none">
        <div className="w-full h-full rounded-lg bg-gradient-to-tl from-[#1a1a2e]/30 to-transparent -rotate-6" />
      </FadeIn>
      <FadeIn delay={0.3} y={20} className="absolute bottom-32 left-12 w-12 h-12 md:w-20 md:h-20 z-[1] pointer-events-none">
        <div className="w-full h-full rounded-lg bg-gradient-to-tr from-[#2a2a3e]/35 to-transparent rotate-45" />
      </FadeIn>
      <FadeIn delay={0.15} y={-15} className="absolute bottom-20 right-8 w-16 h-16 md:w-24 md:h-24 z-[1] pointer-events-none">
        <div className="w-full h-full rounded-xl bg-gradient-to-bl from-[#1a1a2e]/25 to-transparent -rotate-12" />
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0} y={30} className="relative z-20">
        <h2
          className="hero-heading font-black uppercase text-center mb-12 md:mb-16"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          About me
        </h2>
      </FadeIn>

      {/* Animated Text */}
      <div className="max-w-4xl mx-auto relative z-20">
        <AnimatedText
          text={aboutText}
          className="text-[#D7E2EA] font-light text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-center tracking-wide"
        />
      </div>

      {/* Contact Button */}
      <FadeIn delay={0.3} y={20} className="mt-12 md:mt-16 relative z-20">
        <ContactButton />
      </FadeIn>
    </section>
  );
}
