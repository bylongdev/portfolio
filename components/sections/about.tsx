import React from "react";
import Image from "next/image";
import portrait from "@/resources/imgs/portrait.png";

import { Card, CardContent } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function AboutSection() {
  return (
    <Card className="border-0 shadow-none">
      <CardContent className="flex flex-col gap-6 md:flex-row">
        <div className="flex h-100 grow justify-center self-center md:order-2 md:h-full">
          <Image
            src={portrait}
            alt="Portrait"
            width={400}
            className="rounded-2xl object-cover"
          />
        </div>
        <Accordion
          type="multiple"
          // defaultValue={["who", "what", "goal", "learning", "how"]}
          className="mx-auto w-full max-w-xl gap-4"
        >
          <AccordionItem value="who">
            <AccordionTrigger>Who am I?</AccordionTrigger>
            <AccordionContent>
              I&apos;m a Melbourne-based Software Engineer with experience
              building full-stack web applications across backend systems and
              user interfaces.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="what">
            <AccordionTrigger>What do I do?</AccordionTrigger>
            <AccordionContent>
              Developing backend-driven applications, including designing
              database schemas, building RESTful APIs, and delivering
              user-facing features with long-term maintainability in mind.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="how">
            <AccordionTrigger>How do I work?</AccordionTrigger>
            <AccordionContent>
              Breaking down problems into small deliverables, build working
              solutions early, and refine them through iterative development
              with proper logging and error handling.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="learning">
            <AccordionTrigger>What am I learning right now?</AccordionTrigger>
            <AccordionContent>
              Backend system design, PostgreSQL performance optimisation, and
              caching strategies using Redis through hands-on project
              development.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="goal">
            <AccordionTrigger>What is my goal?</AccordionTrigger>
            <AccordionContent>
              To grow into a strong backend engineer who can take ownership of
              features end-to-end and contribute to well-structured,
              product-focused teams.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

export default AboutSection;
