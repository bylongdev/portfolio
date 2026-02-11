import NavBar from "@/components/sections/navBar";
import HeroSection from "@/components/sections/hero";
import ProjectSection from "@/components/sections/project";
import AboutSection from "@/components/sections/about";
import ExperienceSection from "@/components/sections/experience";
import ContactSection from "@/components/sections/contact";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import footer_bg from "@/resources/imgs/city-landscape.png";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <main className="m-auto flex max-w-360 flex-col items-center md:w-9/10">
        {/* Navbar */}
        <NavBar />

        {/* Hero Section */}
        <section
          id="hero"
          className="flex min-h-screen items-center justify-center px-10"
        >
          <HeroSection />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="relative flex w-full flex-col justify-between gap-10 py-10 md:my-20"
        >
          <div className="relative">
            <Separator className="absolute top-0 left-0 -z-10 translate-y-4" />

            <div className="text-foreground/50 bg-background absolute left-10 z-10 w-fit px-4 text-2xl font-semibold tracking-widest uppercase">
              about me
            </div>
          </div>
          <div className="flex grow flex-col pt-10">
            <AboutSection />
          </div>
        </section>

        {/* Project Section */}
        <section
          id="project"
          className="relative flex w-full flex-col justify-center gap-10 py-10 md:my-20"
        >
          <div className="relative">
            <Separator className="absolute top-0 left-0 -z-10 translate-y-4" />

            <div className="text-foreground/50 bg-background absolute left-10 z-10 w-fit px-4 text-2xl font-semibold tracking-widest uppercase">
              projects
            </div>
          </div>
          <div className="flex grow flex-col pt-10">
            <ProjectSection />
          </div>
        </section>

        {/* Experiences */}
        <section
          id="experience"
          className="relative flex w-full flex-col justify-center gap-10 py-10 md:my-20"
        >
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
        <section
          id="contact"
          className="relative flex w-full flex-col justify-center gap-10 py-10 md:my-20"
        >
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
      {/* <div className="absolute bottom-0 -z-10 w-full md:h-200">
        <div className="relative h-full w-full">
          <Image
            src={footer_bg}
            alt="Footer Background"
            className="absolute w-full object-cover object-top"
          />
        </div>
      </div> */}
      <Image
        src={footer_bg}
        alt="Footer Background"
        className="absolute bottom-0 -z-20 w-full object-cover object-top lg:max-h-200"
      />
    </div>
  );
}
