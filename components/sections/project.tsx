import React from "react";
import Image from "next/image";

import job_tracker from "@/resources/imgs/job-tracker.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const PROJECTS = [
  {
    name: "Job Tracker",
    img_url: job_tracker,
    description:
      "A job application tracking platform designed to organise applications, manage timelines, and keep all related information in one place.",
    tech_stack: [
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "Prisma",
      "Node.js",
      "Tailwindcss",
    ],
    github: "https://github.com/bylongdev/job-tracker",
    demo: "",
  },
  {
    name: "Weather App",
    img_url: job_tracker,
    description:
      "A modern weather app showing real-time forecasts using the OpenWeather API. Built with Next.js, Tailwind CSS, and Recharts, it displays temperature, humidity, and trends in a sleek dark UI with smooth animations and responsive design for all devices.",
    tech_stack: [
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Recharts",
      "OpenWeatherAPI",
      "Tailwindcss",
    ],
    github: "https://github.com/bylongdev/weather-app",
    demo: "https://weather-app-flame-two-18.vercel.app/",
  },
  {
    name: "Manga Lib",
    img_url: job_tracker,
    description:
      "A modern manga library platform that fetches and syncs real-time manga updates from external APIs. Built with Next.js, TypeScript, Docker, and MongoDB, it features cached endpoints, automated background workers, and a clean, anime-inspired UI designed for fast, responsive browsing.",
    tech_stack: [
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "Redis",
      "Node.js",
      "Tailwindcss",
      "Docker",
      "Nginx",
      "MangaDexAPI",
    ],
    github: "https://github.com/bylongdev/manga-lib",
    demo: "https://manga-lib.vercel.app/",
  },
  {
    name: "Job Tracker",
    img_url: job_tracker,
    description:
      "A job application tracking platform designed to organise applications, manage timelines, and keep all related information in one place.",
    tech_stack: [
      "TypeScript",
      "JavaScript",
      "PostgreSQL",
      "Prisma",
      "Node.js",
      "Tailwindcss",
    ],
    github: "https://github.com/bylongdev/job-tracker",
    demo: "",
  },
];

function ProjectSection() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="relative">
        {/* <Separator className="absolute top-0 left-0 translate-y-4" />
        <CardTitle className="text-foreground/50 bg-background z-10 w-fit px-4 text-2xl font-semibold tracking-widest uppercase">
          projects
        </CardTitle> */}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Card className="h-100 w-full flex-row gap-6 p-0">
          <CardContent className="flex w-fit items-center py-6">
            <Image
              src={PROJECTS[0].img_url}
              alt="Job Tracker Thumbnail"
              className="w-full object-cover"
            />
          </CardContent>

          <CardContent className="flex grow flex-col items-end justify-between gap-8 p-6">
            <div className="flex flex-col items-start gap-2">
              <CardTitle className="text-2xl">{PROJECTS[0].name}</CardTitle>
              <CardDescription>{PROJECTS[0].description}</CardDescription>

              <div className="flex flex-wrap gap-2">
                {PROJECTS[0].tech_stack.map((tag, index) => (
                  <Badge
                    key={index}
                    variant={"secondary"}
                    className="rounded-md text-base font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex gap-2 justify-self-end">
              <Button
                variant={"default"}
                className="hover:cursor-pointer"
                disabled={!PROJECTS[0].github}
              >
                <Link href={PROJECTS[0].github} target="_blank">
                  View code
                </Link>
              </Button>
              <Button
                variant={"outline"}
                className="hover:cursor-pointer"
                disabled={!PROJECTS[0].demo}
              >
                <Link href={PROJECTS[0].demo} target="_blank">
                  Live demo
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <CardTitle className="pt-10 text-lg">Featured Projects</CardTitle>
        <div className="grid grid-cols-3 gap-4">
          {PROJECTS.slice(1).map((item, index) => (
            <Card key={index}>
              <CardContent className="border-b p-2">
                <Image
                  src={item.img_url}
                  alt="Job Tracker Thumbnail"
                  className="w-200"
                />
              </CardContent>
              <CardFooter className="flex grow flex-col items-end justify-between gap-8">
                <div className="flex flex-col items-start gap-2">
                  <CardTitle className="text-2xl">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {item.tech_stack.map((tag, index) => (
                      <Badge
                        key={index}
                        variant={"secondary"}
                        className="rounded-md text-base font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 justify-self-end">
                  <Button
                    variant={"default"}
                    className="hover:cursor-pointer"
                    disabled={!item.github}
                  >
                    <Link href={item.github} target="_blank">
                      View code
                    </Link>
                  </Button>
                  <Button
                    variant={"outline"}
                    className="hover:cursor-pointer"
                    disabled={!item.demo}
                  >
                    <Link href={item.demo} target="_blank">
                      Live demo
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectSection;
