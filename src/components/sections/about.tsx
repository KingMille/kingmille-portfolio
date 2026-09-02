"use client";

import { motion } from "framer-motion";
import { Palette, Code2, Bot, Brain } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const pillars = [
  {
    title: "Design",
    icon: Palette,
    description:
      "Creating stunning visual identities, branding, and UI/UX that connect with audiences.",
    color: "from-primary/20 to-primary/5",
    iconColor: "text-primary",
  },
  {
    title: "Develop",
    icon: Code2,
    description:
      "Building robust applications with Python, Django, and modern web technologies.",
    color: "from-secondary/20 to-secondary/5",
    iconColor: "text-secondary",
  },
  {
    title: "Automate",
    icon: Brain,
    description:
      "Leveraging AI and automation to streamline processes and solve complex problems.",
    color: "from-accent/20 to-accent/5",
    iconColor: "text-accent",
  },
  {
    title: "Innovate",
    icon: Bot,
    description:
      "Pushing boundaries in robotics, where hardware meets intelligent software.",
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Creativity Meets Technology"
          description="A multidisciplinary creator passionate about the intersection of design and engineering."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal type="slideLeft">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a graphic designer who loves building things that live at
              the intersection of creativity and technology. My journey spans
              UI/UX design, where I craft intuitive interfaces, to Python and
              Django development, where I bring those designs to life with
              robust backend solutions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Beyond the screen, I&apos;m fascinated by robotics and AI
              automation - building machines and systems that can think, learn,
              and create. Whether it&apos;s designing a brand identity, coding a
              web app, or wiring up a robot, I approach every project with
              curiosity and a dedication to quality.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              When I&apos;m not designing or coding, you&apos;ll find me
              exploring data-driven insights, experimenting with AI tools, or
              tinkering with hardware in my workshop.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.1} type="fadeUp">
                <motion.div
                  whileHover={{ y: -5 }}
                  className={`rounded-2xl bg-gradient-to-b ${pillar.color} p-6 backdrop-blur transition-all`}
                >
                  <div className="mb-4 inline-flex rounded-xl bg-white/20 p-3">
                    <pillar.icon className={`h-6 w-6 ${pillar.iconColor}`} />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {pillar.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
