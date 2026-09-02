"use client";

import { useEffect, useState, useRef } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

interface TextScrambleProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function TextScramble({
  text,
  className,
  speed = 30,
  delay = 0,
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const frames = text.length;
    let frame = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        frame++;
        const completed = Math.floor((frame / frames) * text.length);

        let result = "";
        for (let i = 0; i < text.length; i++) {
          if (text[i] === " ") {
            result += " ";
          } else if (i < completed) {
            result += text[i];
          } else {
            result += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          }
        }

        setDisplayText(result);

        if (frame >= frames * 2) {
          setDisplayText(text);
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay + 500);

    return () => clearTimeout(timeout);
  }, [isVisible, text, speed, delay]);

  return (
    <span ref={containerRef} className={className}>
      {displayText}
    </span>
  );
}
