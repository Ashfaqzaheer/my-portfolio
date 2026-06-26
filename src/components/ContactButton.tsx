"use client";

interface ContactButtonProps {
  className?: string;
}

export default function ContactButton({ className = "" }: ContactButtonProps) {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const rect = contactSection.getBoundingClientRect();
      // If already in view of contact section, open WhatsApp
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        window.open("https://wa.me/919347232843?text=Let's%20discuss%20your%20project", "_blank", "noopener,noreferrer");
      } else {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`gradient-btn px-6 py-3 rounded-full text-white font-medium text-sm uppercase tracking-wider hover:opacity-90 hover:scale-105 transition-all duration-300 ${className}`}
    >
      Contact me
    </button>
  );
}
