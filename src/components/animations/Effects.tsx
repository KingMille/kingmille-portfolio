"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}

export function TiltCard({ children, className, maxTilt = 10 }: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      className={cn("relative", className)}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x: y * -maxTilt, y: x * maxTilt });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
}

// Custom cursor
export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [data-hover]") ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      ) {
        setHovering(true);
      } else {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (typeof window === "undefined") return null;
  if (window.matchMedia("(pointer: coarse)").matches) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] hidden md:block"
      style={{ left: -20, top: -20 }}
      animate={{
        x: position.x + 20,
        y: position.y + 20,
        scale: hovering ? 1.5 : 1,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.5 }}
    >
      <div
        className={cn(
          "h-10 w-10 rounded-full border-2 border-primary transition-colors duration-200",
          hovering && "bg-primary/20"
        )}
      />
    </motion.div>
  );
}
