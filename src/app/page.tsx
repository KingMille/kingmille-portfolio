import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";
import { BlogPreview } from "@/components/sections/blog-preview";
import { Contact } from "@/components/sections/contact";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
