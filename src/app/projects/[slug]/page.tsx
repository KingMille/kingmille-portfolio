import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/social-icons";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getProjectBySlug } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";

const categoryLabels: Record<string, string> = {
  "ui-ux": "UI/UX Design",
  "python-django": "Python & Django",
  "ai-automation": "AI Automation",
  robotics: "Robotics",
  "print-design": "Flyers, Posters & Ads",
};

export const dynamic = "force-dynamic";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <Link
            href="/#work"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <div className="mb-4 inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {categoryLabels[project.category] || project.category}
          </div>
          <h1 className="mb-6 font-display text-4xl font-semibold sm:text-5xl">
            {project.title}
          </h1>

          {project.description && (
            <p className="mb-8 max-w-3xl text-lg text-muted-foreground">
              {project.description}
            </p>
          )}

          {(project.liveUrl || project.githubUrl) && (
            <div className="mb-10 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-medium text-white transition-all hover:gap-3"
                >
                  View Live
                  <ArrowUpRight size={16} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <GithubIcon />
                  View Code
                </a>
              )}
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="mb-10 flex flex-wrap gap-2">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-full bg-border/50 px-3 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {project.coverImage && (
            <div className="relative mb-12 h-80 overflow-hidden rounded-2xl border border-border shadow-card sm:h-96">
              <Image
                src={urlFor(project.coverImage).url()}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {project.content && project.content.length > 0 && (
            <div className="prose prose-invert max-w-none">
              {renderContent(project.content)}
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-6 font-display text-2xl font-semibold">
                Gallery
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {project.gallery.map((image: unknown, i: number) => (
                  <div
                    key={i}
                    className="relative h-64 overflow-hidden rounded-2xl border border-border"
                  >
                    <Image
                      src={urlFor(image as Parameters<typeof urlFor>[0]).url()}
                      alt={`${project.title} image ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

function renderContent(blocks: unknown) {
  const items = blocks as {
    _type?: string;
    style?: string;
    children?: { text?: string }[];
  }[];

  return items.map((block, i) => {
    const text = block?.children?.map((c) => c.text).join(" ") ?? "";
    if (block._type === "block") {
      switch (block.style) {
        case "h2":
          return <h2 key={i} className="text-2xl font-semibold">{text}</h2>;
        case "h3":
          return <h3 key={i} className="text-xl font-semibold">{text}</h3>;
        default:
          return <p key={i} className="mb-4 leading-relaxed text-muted-foreground">{text}</p>;
      }
    }
    return null;
  });
}
