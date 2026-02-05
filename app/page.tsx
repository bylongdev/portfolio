import bg from "@/resources/imgs/city-landscape.jpg";
import Image from "next/image";

import NavBar from "@/components/navBar";

export default function Home() {
  return (
    <div className="relative min-h-screen max-w-dvw">
      <main className="relative flex h-screen max-h-300 w-full flex-col items-center">
        {/* Navbar */}
        <NavBar />

        {/* Hero Section */}
        <div className="bg-accent flex h-3/5 flex-col items-center justify-center">
          <h1>Long Nguyen</h1>
          <h2>Software Engineer</h2>
        </div>

        <Image src={bg} alt="Background Image" />
      </main>
    </div>
  );
}
