/* 

Note: Add accordion for each entry to open more detail each time clicked

*/

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Separator } from "../ui/separator";

const EXPERIENCES = [
  {
    title: "Software Engineer",
    company: "BusinessLocal",
    from: "August 2024",
    to: " June 2025",
    description: "Text here",
  },
  {
    title: "Software Engineer",
    company: "BusinessLocal",
    from: "August 2024",
    to: " June 2025",
    description: "Text here",
  },
  {
    title: "Software Engineer",
    company: "BusinessLocal",
    from: "August 2024",
    to: " June 2025",
    description: "Text here",
  },
  {
    title: "Software Engineer",
    company: "BusinessLocal",
    from: "August 2024",
    to: " June 2025",
    description: "Text here",
  },
];

function ExperienceSection() {
  return (
    <Card>
      <CardHeader className="relative">
        <Separator className="absolute top-0 left-0 translate-y-4" />
        <CardTitle className="text-foreground/50 bg-background z-10 w-fit px-4 text-2xl font-semibold tracking-widest uppercase">
          experiences
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative m-6 border-l">
          {EXPERIENCES.map((exp, index) => (
            <Card
              key={index}
              className="mx-6 rounded-none border-0 shadow-none not-last:border-b first:pt-0 last:pb-0"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex justify-between">
                  <div className="bg-muted-foreground absolute left-0 h-4 w-4 -translate-x-1/2 rounded-full" />
                  <CardTitle>
                    {exp.title} - {exp.company}
                  </CardTitle>
                  <CardDescription>
                    {exp.from} - {exp.to}
                  </CardDescription>
                </div>
                <CardDescription>{exp.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ExperienceSection;
