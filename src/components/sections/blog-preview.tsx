"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Bot } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const posts = [
  {
    title: "Getting Started with Robotics Programming",
    excerpt:
      "A beginner's guide to entering the world of robotics - from choosing your first microcontroller to writing basic control logic.",
    date: "2026-08-15",
    readTime: "8 min read",
    tag: "Robotics",
  },
  {
    title: "AI Automation in Everyday Life",
    excerpt:
      "How intelligent automation is reshaping the way we work, create, and interact with technology around us.",
    date: "2026-07-30",
    readTime: "6 min read",
    tag: "AI",
  },
  {
    title: "Designing for Robotics: UX Meets Hardware",
    excerpt:
      "Exploring the unique challenges and opportunities when designing user interfaces for robotic systems.",
    date: "2026-07-12",
    readTime: "10 min read",
    tag: "Design & Robotics",
  },
];

export function BlogPreview({ homepage = true }: { homepage?: boolean }) {
  const displayPosts = homepage ? posts.slice(0, 3) : posts;

  return (
    <section id="blog" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Blog"
          title="Latest from the Lab"
          description="Insights, tutorials, and thoughts on robotics, AI, and design."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayPosts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.1}>
              <Link
                href="/blog"
                className="group block h-full"
              >
                <article className="flex h-full flex-col rounded-2xl border border-border bg-background/50 p-6 shadow-card backdrop-blur transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-card-hover">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/20">
                      <Bot className="h-5 w-5 text-secondary" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                        {post.tag}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {post.date}
                        <span>·</span>
                        {post.readTime}
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-3 font-display text-xl font-semibold transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all group-hover:gap-3">
                    Read More
                    <ArrowRight size={16} />
                  </span>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
