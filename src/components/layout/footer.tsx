import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <span className="text-xl font-bold text-gradient font-display">
              KingMille
            </span>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Crafting digital experiences where creativity meets technology -
              from pixels to robots.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="GitHub"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="mailto:hello@kingmille.dev"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Email"
              >
                <Mail size={20} />
              </Link>
            </div>
            <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
              © {new Date().getFullYear()} KingMille. Built with{" "}
              <Heart size={14} className="fill-primary text-primary" /> and lots
              of code.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
