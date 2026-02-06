import NavBar from "@/components/sections/navBar";
import HeroSection from "@/components/sections/hero";
import ProjectSection from "@/components/sections/project";
import AboutSection from "@/components/sections/about";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <main className="m-auto flex max-w-360 flex-col items-center">
        {/* Navbar */}
        <NavBar />

        {/* Hero Section */}
        <section className="flex h-screen items-center justify-center px-10">
          <HeroSection />
        </section>

        {/* About Section */}
        <section className="relative flex h-screen w-full flex-col justify-center gap-10">
          <AboutSection />
        </section>

        {/* Project Section */}
        <section className="relative flex h-screen w-full flex-col justify-center gap-10">
          <ProjectSection />
        </section>

        {/* Features Section */}
        {/* Projects Section */}
      </main>
    </div>
  );
}
