import React from "react";
import { Button } from "../ui/button";

function HeroSection() {
  return (
    // <div className="flex h-screen snap-center flex-col">
    <>
      <div className="flex grow flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-semibold capitalize">Long Nguyen</h1>
        <h2 className="font-mono text-2xl tracking-wider">Software Engineer</h2>
        <p className="pt-4 pb-2">Building tools that solve real problems</p>
        <div className="flex gap-2">
          <Button className="hover:cursor-pointer">View projects</Button>
          <Button variant={"outline"} className="hover:cursor-pointer">
            Get in touch
          </Button>
        </div>
      </div>
      {/* footer image */}
      <div className=""></div>
    </>
    // </div>
  );
}

export default HeroSection;
