"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Work Together"
          description="Have a project in mind? Let's create something amazing. I'm always open to discussing new ideas and opportunities."
        />

        <Reveal>
          <div className="rounded-3xl border border-border bg-background/50 p-8 shadow-card backdrop-blur md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <MagneticButton className="w-full">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="relative flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-primary to-secondary py-4 font-semibold text-white shadow-glow transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle2 size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </MagneticButton>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Mail size={16} className="text-primary" />
              <span>Or email me directly at</span>
              <a
                href="mailto:hello@kingmille.dev"
                className="font-medium text-primary hover:underline"
              >
                hello@kingmille.dev
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
