"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/animations/Effects";

const categories = [
  { id: "all", label: "All Work" },
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "python-django", label: "Python & Django" },
  { id: "ai-automation", label: "AI Automation" },
  { id: "robotics", label: "Robotics" },
  { id: "print-design", label: "Flyers, Posters & Ads" },
];

const projects = [
  {
    title: "Project Placeholder",
    category: "ui-ux",
    description:
      "A stunning UI/UX project showcasing my design process from wireframes to interactive prototypes.",
    gradient: "from-primary to-secondary",
    tags: ["UI/UX", "Figma", "Prototyping"],
  },
  {
    title: "Project Placeholder",
    category: "python-django",
    description:
      "A full-stack web application built with Python and Django demonstrating robust backend architecture.",
    gradient: "from-secondary to-accent",
    tags: ["Python", "Django", "PostgreSQL"],
  },
  {
    title: "Project Placeholder",
    category: "ai-automation",
    description:
      "An intelligent automation pipeline leveraging AI to streamline workflows and boost productivity.",
    gradient: "from-accent to-purple-500",
    tags: ["AI", "Automation", "Python"],
  },
  {
    title: "Project Placeholder",
    category: "robotics",
    description:
      "A hands-on robotics project combining hardware engineering with intelligent software control.",
    gradient: "from-purple-500 to-pink-500",
    tags: ["Robotics", "Arduino", "IoT"],
  },
  {
    title: "Poster Design Placeholder",
    category: "print-design",
    description:
      "Eye-catching print designs including flyers, posters, and ads that command attention.",
    gradient: "from-primary via-accent to-secondary",
    tags: ["Print", "Branding", "Adobe Suite"],
  },
  {
    title: "Ad Campaign Placeholder",
    category: "print-design",
    description:
      "Compelling advertising creatives crafted to drive engagement and conversions.",
    gradient: "from-pink-500 to-secondary",
    tags: ["Ads", "Marketing", "Design"],
  },
];

export function Work() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured Work"
          description="A curated collection of my latest projects across design, development, AI, and robotics."
        />

        {/* Filter buttons */}
        <Reveal className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === cat.id
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-glow"
                  : "border border-border bg-background/50 text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        {/* Projects grid */}
        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.title + project.category + index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard className="group h-full">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background/50 shadow-card backdrop-blur transition-all duration-300 group-hover:shadow-card-hover">
                    {/* Project image placeholder */}
                    <div
                      className={`relative h-56 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                    >
                      <div className="bg-grid absolute inset-0 opacity-20" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80">
                        <span className="font-display text-lg font-semibold drop-shadow">
                          {project.title}
                        </span>
                        <span className="mt-1 text-sm opacity-70">
                          Demo coming soon
                        </span>
                      </div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ transform: "translateZ(40px)" }}
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <span className="mb-3 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {
                          categories.find(
                            (c) => c.id === project.category
                          )?.label
                        }
                      </span>
                      <h3 className="mb-2 font-display text-xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="mb-4 flex-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-border/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 border-t border-border pt-4">
                        <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5">
                          View Case Study
                          <ArrowUpRight size={16} />
                        </button>
                        <button
                          className="ml-auto text-muted-foreground transition-colors hover:text-primary"
                          aria-label="View code"
                        >
                          <GithubIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
