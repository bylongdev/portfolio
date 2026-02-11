import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-2">
      <h1 className="text-5xl font-semibold capitalize">Long Nguyen</h1>
      <h2 className="font-mono text-2xl tracking-wider">Software Engineer</h2>
      <p className="pt-4 pb-2">Building tools that solve real problems</p>
      <div className="flex gap-2">
        <Button className="hover:cursor-pointer">
          <Link href={"#project"}>View projects</Link>
        </Button>
        <Button variant={"outline"} className="hover:cursor-pointer">
          <Link href={"#contact"}>Get in touch</Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
