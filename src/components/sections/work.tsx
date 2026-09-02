"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TiltCard } from "@/components/animations/Effects";
import { urlFor } from "@/sanity/lib/client";

const categories = [
  { id: "all", label: "All Work" },
  { id: "ui-ux", label: "UI/UX Design" },
  { id: "python-django", label: "Python & Django" },
  { id: "ai-automation", label: "AI Automation" },
  { id: "robotics", label: "Robotics" },
  { id: "print-design", label: "Flyers, Posters & Ads" },
];

const placeholderGradients: Record<string, string> = {
  "ui-ux": "from-primary to-secondary",
  "python-django": "from-secondary to-accent",
  "ai-automation": "from-accent to-purple-500",
  robotics: "from-purple-500 to-pink-500",
  "print-design": "from-primary via-accent to-secondary",
};

const placeholderProjects = [
  {
    _id: "placeholder-1",
    title: "UI/UX Project Placeholder",
    category: "ui-ux",
    description:
      "A stunning UI/UX project showcasing my design process from wireframes to interactive prototypes.",
    tags: ["UI/UX", "Figma", "Prototyping"],
  },
  {
    _id: "placeholder-2",
    title: "Django App Placeholder",
    category: "python-django",
    description:
      "A full-stack web application built with Python and Django demonstrating robust backend architecture.",
    tags: ["Python", "Django", "PostgreSQL"],
  },
  {
    _id: "placeholder-3",
    title: "AI Automation Placeholder",
    category: "ai-automation",
    description:
      "An intelligent automation pipeline leveraging AI to streamline workflows and boost productivity.",
    tags: ["AI", "Automation", "Python"],
  },
  {
    _id: "placeholder-4",
    title: "Robotics Project Placeholder",
    category: "robotics",
    description:
      "A hands-on robotics project combining hardware engineering with intelligent software control.",
    tags: ["Robotics", "Arduino", "IoT"],
  },
  {
    _id: "placeholder-5",
    title: "Poster Design Placeholder",
    category: "print-design",
    description:
      "Eye-catching print designs including flyers, posters, and ads that command attention.",
    tags: ["Print", "Branding", "Adobe Suite"],
  },
  {
    _id: "placeholder-6",
    title: "Ad Campaign Placeholder",
    category: "print-design",
    description:
      "Compelling advertising creatives crafted to drive engagement and conversions.",
    tags: ["Ads", "Marketing", "Design"],
  },
];

export function Work() {
  const [active, setActive] = useState("all");
  const [projects, setProjects] = useState(placeholderProjects);
  const [usingSanity, setUsingSanity] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        if (data.projects && data.projects.length > 0) {
          setProjects(data.projects);
          setUsingSanity(true);
        }
      } catch {
        // Keep placeholder projects
      }
    };
    fetchProjects();
  }, []);

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
            {filtered.map((project) => (
              <motion.div
                key={project._id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <TiltCard className="group h-full">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background/50 shadow-card backdrop-blur transition-all duration-300 group-hover:shadow-card-hover">
                    {/* Project image or gradient */}
                    <div className="relative h-56 overflow-hidden">
                      {"coverImage" in project && project.coverImage ? (
                        <Image
                          src={urlFor(project.coverImage).url()}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div
                          className={`h-full bg-gradient-to-br ${
                            placeholderGradients[project.category] || "from-primary to-secondary"
                          }`}
                        >
                          <div className="bg-grid absolute inset-0 opacity-20" />
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-white/80">
                            <span className="font-display text-lg font-semibold drop-shadow">
                              {project.title}
                            </span>
                            {!usingSanity && (
                              <span className="mt-1 text-sm opacity-70">
                                Demo coming soon
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        style={{ transform: "translateZ(40px)" }}
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <span className="mb-3 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {categories.find((c) => c.id === project.category)
                          ?.label || project.category}
                      </span>
                      <h3 className="mb-2 font-display text-xl font-semibold">
                        {project.title}
                      </h3>
                      <p className="mb-4 flex-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                      {"tags" in project && project.tags && (
                        <div className="mb-5 flex flex-wrap gap-2">
                          {project.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="rounded-full bg-border/50 px-2.5 py-0.5 text-xs text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex items-center gap-4 border-t border-border pt-4">
                        {"liveUrl" in project && project.liveUrl ? (
                          <a
                            href={project.liveUrl as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
                          >
                            View Live
                            <ArrowUpRight size={16} />
                          </a>
                        ) : (
                          <button className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5">
                            View Case Study
                            <ArrowUpRight size={16} />
                          </button>
                        )}
                        {"githubUrl" in project && project.githubUrl ? (
                          <a
                            href={project.githubUrl as string}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto text-muted-foreground transition-colors hover:text-primary"
                            aria-label="View code"
                          >
                            <GithubIcon />
                          </a>
                        ) : (
                          <button
                            className="ml-auto text-muted-foreground transition-colors hover:text-primary"
                            aria-label="View code"
                          >
                            <GithubIcon />
                          </button>
                        )}
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
