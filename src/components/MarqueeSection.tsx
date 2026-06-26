"use client";

import { useEffect, useRef, useState } from "react";

const row1Count = 11;
const row2Count = 10;

function PlaceholderTile({ index, row }: { index: number; row: number }) {
  const hue = (index * 25 + row * 120) % 360;
  return (
    <div
      className="w-[420px] h-[270px] rounded-2xl flex-shrink-0 overflow-hidden relative"
      style={{
        background: `linear-gradient(135deg, hsl(${hue}, 20%, 14%) 0%, hsl(${hue + 40}, 15%, 7%) 100%)`,
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/20 text-xs font-light uppercase tracking-[0.3em]">
          Work {row === 1 ? index + 1 : index + 12}
        </span>
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      rafId = requestAnimationFrame(() => {
        if (!sectionRef.current) return;
        const sectionTop = sectionRef.current.offsetTop;
        const newOffset =
          (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        setOffset(newOffset);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const row1Items = Array.from({ length: row1Count * 3 }, (_, i) => i % row1Count);
  const row2Items = Array.from({ length: row2Count * 3 }, (_, i) => i % row2Count);

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden relative z-20"
    >
      {/* Row 1 - moves RIGHT */}
      <div className="mb-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: "transform",
          }}
        >
          {row1Items.map((imgIdx, i) => (
            <PlaceholderTile key={`r1-${i}`} index={imgIdx} row={1} />
          ))}
        </div>
      </div>

      {/* Row 2 - moves LEFT */}
      <div>
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: "transform",
          }}
        >
          {row2Items.map((imgIdx, i) => (
            <PlaceholderTile key={`r2-${i}`} index={imgIdx} row={2} />
          ))}
        </div>
      </div>
    </section>
  );
}
