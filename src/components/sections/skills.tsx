"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import site from "@/lib/site";

const categoryColors: Record<string, string> = {
  Design: "from-primary to-secondary",
  Development: "from-secondary to-accent",
  AI: "from-accent to-purple-500",
  Robotics: "from-purple-500 to-pink-500",
};

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="My Arsenal"
          description="A diverse toolkit spanning design, development, AI, and robotics."
        />

        <StaggerContainer className="space-y-8">
          {Object.entries(
            site.skills.reduce<Record<string, typeof site.skills[number][]>>(
              (acc, skill) => {
                const cat = skill.category;
                if (!acc[cat]) acc[cat] = [];
                acc[cat].push(skill);
                return acc;
              },
              {}
            )
          ).map(([category, skills]) => (
            <Reveal
              key={category}
              className="rounded-2xl border border-border bg-background/50 p-8 backdrop-blur"
            >
              <h3 className="mb-6 font-display text-lg font-semibold text-primary">
                {category}
              </h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm font-semibold text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-border">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${categoryColors[category]}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
