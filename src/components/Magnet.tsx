"use client";

import { ReactNode, useRef, useState, useEffect, useCallback } from "react";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      const expandedLeft = rect.left - padding;
      const expandedRight = rect.right + padding;
      const expandedTop = rect.top - padding;
      const expandedBottom = rect.bottom + padding;

      if (
        e.clientX >= expandedLeft &&
        e.clientX <= expandedRight &&
        e.clientY >= expandedTop &&
        e.clientY <= expandedBottom
      ) {
        setTranslate({ x: deltaX / strength, y: deltaY / strength });
        setIsActive(true);
      } else {
        setTranslate({ x: 0, y: 0 });
        setIsActive(false);
      }
    },
    [padding, strength]
  );

  const handleMouseLeave = useCallback(() => {
    setTranslate({ x: 0, y: 0 });
    setIsActive(false);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={ref}
      className={className}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${translate.x}px, ${translate.y}px)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
}
