import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BlogPreview } from "@/components/sections/blog-preview";
import { SectionHeading } from "@/components/ui/section-heading";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <SectionHeading
            eyebrow="All Posts"
            title="Blog & Insights"
            description="Exploring robotics, AI automation, design, and everything in between."
          />
          <BlogPreview homepage={false} />
        </div>
      </main>
      <Footer />
    </>
  );
}
