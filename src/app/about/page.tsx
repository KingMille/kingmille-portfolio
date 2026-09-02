import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="relative mx-auto w-full max-w-md">
                <div className="animate-float relative overflow-hidden rounded-3xl">
                  <Image
                    src="/images/me.png"
                    alt="KingMille"
                    width={1177}
                    height={1337}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                </div>
              </div>
              <div>
                <h1 className="mb-6 font-display text-4xl font-bold leading-tight md:text-5xl">
                  The Story Behind <span className="text-gradient">KingMille</span>
                </h1>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Hey there! I&apos;m KingMille, a graphic designer and
                    developer who believes great technology should be both
                    functional and beautiful.
                  </p>
                  <p>
                    My creative journey started with graphic design - mastering
                    the art of visual storytelling through flyers, posters, and
                    branding. This foundation in design naturally evolved into
                    UI/UX, where I discovered my passion for creating digital
                    experiences that people love to use.
                  </p>
                  <p>
                    On the technical side, I dove deep into Python and Django,
                    learning to build the robust systems that power modern web
                    applications. My curiosity then led me to AI automation and
                    data analytics, where I explore how intelligent systems can
                    enhance our work.
                  </p>
                  <p>
                    And then there&apos;s robotics - my true passion project.
                    There&apos;s something magical about bringing hardware and
                    software together to create machines that interact with the
                    physical world. It&apos;s where all my skills converge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
