import bg from "@/resources/imgs/city-landscape.png";
import Image from "next/image";

import NavBar from "@/components/navBar";

export default function Home() {
  return (
    <div className="relative min-h-screen max-w-dvw">
      <main className="flex h-screen min-h-dvh w-full flex-col items-center">
        {/* Navbar */}
        <NavBar />

        {/* Hero Section */}
        <div className="flex h-full w-full flex-col">
          <div className="flex grow flex-col items-center justify-center gap-2">
            <h1 className="text-5xl font-semibold capitalize">Long Nguyen</h1>
            <h2 className="font-mono text-2xl tracking-wider">
              Software Engineer
            </h2>
          </div>
          {/* footer image */}
          <div className=""></div>
        </div>

        {/* About Section */}
        {/* Features Section */}
        {/* Projects Section */}
      </main>
    </div>
  );
}
