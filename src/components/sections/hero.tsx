"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Code2, Palette, Bot, Database } from "lucide-react";
import { TextScramble } from "@/components/animations/TextScramble";
import { MagneticButton } from "@/components/animations/MagneticButton";

const floatingIcons = [
  { Icon: Palette, position: "top-10 left-[5%]", delay: 0 },
  { Icon: Code2, position: "bottom-24 left-[10%]", delay: 0.5 },
  { Icon: Bot, position: "top-24 right-[10%]", delay: 1 },
  { Icon: Database, position: "bottom-40 right-[5%]", delay: 1.5 },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Animated background */}
      <div className="animated-gradient absolute inset-0 opacity-10" />
      <div className="bg-grid absolute inset-0" />

      {/* Floating gradient orbs */}
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-secondary/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Left: Text content */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            <Sparkles size={16} />
            Available for freelance projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl font-bold leading-tight text-foreground md:text-7xl font-display"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">KingMille</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-4 text-xl text-muted-foreground md:text-2xl"
          >
            <TextScramble
              text="Designer • Developer • Dreamer"
              className="font-semibold text-foreground"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-6 max-w-lg text-lg text-muted-foreground"
          >
            I craft beautiful digital experiences that blend creative design
            with cutting-edge technology - from UI/UX and branding to AI
            automation and robotics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <MagneticButton>
              <a
                href="#work"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-8 font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                View My Work
                <ArrowDown size={18} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-primary px-8 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
              >
                Get In Touch
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right: Image with animations */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Animated ring */}
          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Main image */}
          <div className="relative overflow-hidden rounded-3xl">
            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/me.png"
                alt="KingMille"
                width={1177}
                height={1337}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
            </motion.div>
          </div>

          {/* Floating skill badges */}
          <motion.div
            className="absolute -left-6 top-10 glass rounded-2xl px-4 py-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/20 p-2">
                <Palette className="h-full w-full text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">UI/UX Design</p>
                <p className="text-xs text-muted-foreground">5+ years</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -right-6 top-1/3 glass rounded-2xl px-4 py-3"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-secondary/20 p-2">
                <Bot className="h-full w-full text-secondary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Robotics</p>
                <p className="text-xs text-muted-foreground">Hands-on</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass rounded-2xl px-5 py-3"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-accent/20 p-2">
                <Code2 className="h-full w-full text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold">Python & Django</p>
                <p className="text-xs text-muted-foreground">Development</p>
              </div>
            </div>
          </motion.div>

          {floatingIcons.map(({ Icon, position, delay }) => (
            <motion.div
              key={position}
              className={`absolute ${position} hidden lg:block`}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut", delay }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background/80 shadow-lg backdrop-blur">
                <Icon className="text-primary" size={20} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-muted-foreground" />
      </motion.div>
    </section>
  );
}
