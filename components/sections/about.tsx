import React from "react";
import Image from "next/image";
import portrait from "@/resources/imgs/portrait.png";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function AboutSection() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="relative">
        {/* <Separator className="absolute top-0 left-0 translate-y-4" />
        <CardTitle className="text-foreground/50 bg-background z-10 w-fit px-4 text-2xl font-semibold tracking-widest uppercase">
          about me
        </CardTitle> */}
      </CardHeader>
      <CardContent className="grid grid-cols-2">
        <Accordion
          type="multiple"
          defaultValue={["who", "what", "goal", "learning", "how"]}
          className="mx-auto w-full max-w-xl gap-4"
        >
          <AccordionItem value="who">
            <AccordionTrigger>Who am I?</AccordionTrigger>
            <AccordionContent>
              I&apos;m a Software Engineer based in Melbourne who enjoys
              building practical systems and understanding how things work under
              the hood. I&apos;m naturally curious and like digging into
              problems until I understand both the “how” and the “why”.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="what">
            <AccordionTrigger>What do I do?</AccordionTrigger>
            <AccordionContent>
              I focus on backend development, API design, and database-driven
              applications. I enjoy designing clear structures, keeping systems
              maintainable, and making sure features are built with long-term
              stability in mind.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="how">
            <AccordionTrigger>How do I work?</AccordionTrigger>
            <AccordionContent>
              I prefer a step-by-step approach: break problems down, design a
              simple solution, build a working version, and refine it over time.
              I value clarity, consistency, and thoughtful trade-offs over
              unnecessary complexity.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="learning">
            <AccordionTrigger>What am I learning right now?</AccordionTrigger>
            <AccordionContent>
              I’m continuously improving my understanding of backend
              architecture, system design, and performance. I like learning by
              building real projects and iterating on them.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="goal">
            <AccordionTrigger>What is my goal?</AccordionTrigger>
            <AccordionContent>
              To grow into a strong backend engineer and contribute to teams
              that value clean architecture, good engineering practices, and
              real-world impact.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex grow justify-center">
          <Image
            src={portrait}
            alt="Portrait"
            width={400}
            className="rounded-2xl object-cover"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default AboutSection;
