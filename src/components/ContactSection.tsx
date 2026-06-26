"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import { Mail, Linkedin, Github, MessageCircle, Send, CheckCircle } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "Ashfaqzaheer18@gmail.com",
    icon: Mail,
    href: "mailto:Ashfaqzaheer18@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "Ashfaq Zaheer",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ashfaq-zaheer-b6b64831a/",
  },
  {
    label: "GitHub",
    value: "Ashfaqzaheer-",
    icon: Github,
    href: "https://github.com/Ashfaqzaheer-",
  },
  {
    label: "WhatsApp",
    value: "+91 9347232843",
    icon: MessageCircle,
    href: "https://wa.me/919347232843?text=Let's%20discuss%20your%20project",
  },
];

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] py-24 md:py-32 px-6 md:px-10 relative z-20"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase text-center mb-16 md:mb-24"
          style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
        >
          Get in Touch
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Cards + Socials */}
          <div>
            {/* Contact link cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 mb-10">
              {contactLinks.map((link, i) => (
                <FadeIn key={link.label} delay={i * 0.1} y={20}>
                  <Magnet padding={60} strength={8}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Contact via ${link.label}`}
                      className="group flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.08)] transition-all duration-300"
                    >
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors duration-300"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <link.icon size={18} className="text-[#D7E2EA] group-hover:text-[#a78bfa] transition-colors duration-300" />
                      </motion.div>
                      <div>
                        <p className="text-[#646973] text-xs uppercase tracking-wider">
                          {link.label}
                        </p>
                        <p className="text-[#D7E2EA] text-sm font-medium">
                          {link.value}
                        </p>
                      </div>
                    </a>
                  </Magnet>
                </FadeIn>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <FadeIn delay={0.5} y={20}>
              <Magnet padding={80} strength={6}>
                <a
                  href="https://wa.me/919347232843?text=Let's%20discuss%20your%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl gradient-btn hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] hover:scale-[1.02] transition-all duration-300"
                >
                  <MessageCircle size={20} className="text-white" />
                  <span className="text-white font-medium text-sm uppercase tracking-wider">
                    Chat on WhatsApp
                  </span>
                </a>
              </Magnet>
            </FadeIn>
          </div>

          {/* Right - Contact Form */}
          <FadeIn delay={0.3} y={30}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name *"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#646973] text-sm focus:outline-none focus:border-white/30 transition-colors duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#646973] text-sm focus:outline-none focus:border-white/30 transition-colors duration-300"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Company (optional)"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#646973] text-sm focus:outline-none focus:border-white/30 transition-colors duration-300"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-[#646973] text-sm focus:outline-none focus:border-white/30 transition-colors duration-300 appearance-none"
                  >
                    <option value="">Project Type</option>
                    <option value="website">Website Development</option>
                    <option value="landing">Landing Page</option>
                    <option value="ai">AI Integration</option>
                    <option value="cloud">Cloud Deployment</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-[#646973] text-sm focus:outline-none focus:border-white/30 transition-colors duration-300 appearance-none"
                  >
                    <option value="">Budget</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-3000">$1,000 - $3,000</option>
                    <option value="3000-5000">$3,000 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>
                <textarea
                  placeholder="Tell me about your project... *"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-[#646973] text-sm focus:outline-none focus:border-white/30 transition-colors duration-300 resize-none"
                />
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 py-4 rounded-xl gradient-btn text-white font-medium text-sm uppercase tracking-wider"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(99,102,241,0.25)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <Send size={16} />
                  Let&apos;s Build Something Amazing
                </motion.button>
              </form>
            ) : (
              <motion.div
                className="flex flex-col items-center justify-center h-full min-h-[300px] text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                >
                  <CheckCircle size={64} className="text-green-400 mb-6" />
                </motion.div>
                <motion.h3
                  className="text-[#D7E2EA] text-2xl font-bold mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Thanks for reaching out!
                </motion.h3>
                <motion.p
                  className="text-[#646973] text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  I&apos;ll get back to you within 24 hours.
                </motion.p>
              </motion.div>
            )}
          </FadeIn>
        </div>

        {/* Footer */}
        <FadeIn delay={0.6} y={10} className="mt-20 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-[#D7E2EA] font-semibold text-sm">Ashfaq Zaheer</p>
              <p className="text-[#646973] text-xs mt-1">
                AI-Powered Web Developer & Cloud Solutions Builder
              </p>
            </div>

            {/* Footer Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: Mail, href: "mailto:Ashfaqzaheer18@gmail.com", label: "Email" },
                { icon: Github, href: "https://github.com/Ashfaqzaheer-", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ashfaq-zaheer-b6b64831a/", label: "LinkedIn" },
                { icon: MessageCircle, href: "https://wa.me/919347232843", label: "WhatsApp" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#646973] hover:text-[#D7E2EA] hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon size={15} />
                </motion.a>
              ))}
            </div>

            <p className="text-[#646973] text-xs">
              © 2026 Ashfaq Zaheer. All Rights Reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
