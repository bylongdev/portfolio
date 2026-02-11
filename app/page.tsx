import NavBar from "@/components/sections/navBar";
import HeroSection from "@/components/sections/hero";
import ProjectSection from "@/components/sections/project";
import AboutSection from "@/components/sections/about";
import ExperienceSection from "@/components/sections/experience";
import ContactSection from "@/components/sections/contact";
import { Separator } from "@/components/ui/separator";

import footer_bg from "@/resources/imgs/city-landscape.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <main className="m-auto flex w-9/10 max-w-360 flex-col items-center">
        {/* Navbar */}
        <NavBar />

        {/* Hero Section */}
        <section className="flex min-h-screen items-center justify-center px-10">
          <HeroSection />
        </section>

        {/* About Section */}
        <section className="relative my-20 flex w-full flex-col justify-between gap-10 py-10">
          <div className="relative">
            <Separator className="absolute top-0 left-0 -z-10 translate-y-4" />

            <div className="text-foreground/50 bg-background absolute left-10 z-10 w-fit px-4 text-2xl font-semibold tracking-widest uppercase">
              about me
            </div>
          </div>
          <div className="flex grow flex-col">
            <AboutSection />
          </div>
        </section>

        {/* Project Section */}
        <section className="relative my-20 flex w-full flex-col justify-center gap-10 py-10">
          <div className="relative">
            <Separator className="absolute top-0 left-0 -z-10 translate-y-4" />

            <div className="text-foreground/50 bg-background absolute left-10 z-10 w-fit px-4 text-2xl font-semibold tracking-widest uppercase">
              projects
            </div>
          </div>
          <div className="flex grow flex-col justify-center">
            <ProjectSection />
          </div>
        </section>

        {/* Experiences */}
        <section className="relative my-20 flex w-full flex-col justify-center gap-10 py-10">
          <div className="relative">
            <Separator className="absolute top-0 left-0 -z-10 translate-y-4" />

            <div className="text-foreground/50 bg-background absolute left-10 z-10 w-fit px-4 text-2xl font-semibold tracking-widest uppercase">
              Experiences
            </div>
          </div>
          <div className="flex grow flex-col justify-center">
            <ExperienceSection />
          </div>
        </section>

        {/* Features Section */}

        {/* Contacts Section */}
        <section className="relative my-20 flex w-full flex-col justify-center gap-10 py-10">
          <div className="relative">
            <Separator className="absolute top-0 left-0 -z-10 translate-y-4" />

            <div className="text-foreground/50 bg-background absolute left-10 z-10 w-fit px-4 text-2xl font-semibold tracking-widest uppercase">
              Contact
            </div>
          </div>
          <div className="flex grow flex-col justify-center">
            <ContactSection />
          </div>
        </section>
      </main>

      {/* <footer className="relative max-h-[60dvh] w-full overflow-hidden"></footer> */}
    </div>
  );
}
