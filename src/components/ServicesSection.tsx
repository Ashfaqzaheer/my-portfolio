"use client";

import FadeIn from "./FadeIn";

const services = [
  { number: "01", title: "Website Development" },
  { number: "02", title: "Landing Pages" },
  { number: "03", title: "AI Integrations" },
  { number: "04", title: "Cloud Deployment" },
  { number: "05", title: "Maintenance & Support" },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[2rem] md:rounded-t-[3rem] relative z-20 py-20 md:py-32 px-6 md:px-10"
    >
      <FadeIn delay={0} y={30}>
        <h2
          className="font-black uppercase text-[#0C0C0C] text-center mb-16 md:mb-24"
          style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
        >
          What I Do
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.08} y={15}>
            <div className="flex items-center gap-8 md:gap-12 py-8 md:py-10 border-b border-[#e0e0e0] last:border-b-0 group cursor-pointer hover:pl-3 transition-all duration-300">
              <span className="text-[#bbb] font-extralight text-2xl md:text-4xl lg:text-5xl min-w-[3rem] md:min-w-[5rem]">
                {service.number}
              </span>
              <h3 className="text-[#0C0C0C] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight group-hover:text-[#646973] transition-colors duration-300">
                {service.title}
              </h3>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
