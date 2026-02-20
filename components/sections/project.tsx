import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import job_tracker from "@/resources/imgs/job-tracker.png";
import weather_app from "@/resources/imgs/weather-app.png";
import manga_app from "@/resources/imgs/manga-lib.png";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type Project = {
  name: string;
  img_url: StaticImageData;
  description: string;
  highlight: string;
  tech_stack: string[];
  github?: string;
  demo?: string;
};

const PROJECTS: Project[] = [
  {
    name: "Job Tracker",
    img_url: job_tracker,
    description:
      "A job tracking platform to organise applications, manage timelines, and keep recruiter details and files in one place.",
    highlight:
      "Designed relational data models and APIs to support end-to-end application workflows.",
    tech_stack: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Node.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/bylongdev/job-tracker",
    demo: "",
  },
  {
    name: "Weather App",
    img_url: weather_app,
    description:
      "A real-time weather dashboard powered by OpenWeather API with responsive UI and data visualisations.",
    highlight:
      "Implemented caching to reduce redundant API requests and improve response performance.",
    tech_stack: [
      "TypeScript",
      "Next.js",
      "Redis",
      "Recharts",
      "OpenWeather API",
      "Tailwind CSS",
    ],
    github: "https://github.com/bylongdev/weather-app",
    demo: "https://weather-app-flame-two-18.vercel.app/",
  },
  {
    name: "Manga Lib",
    img_url: manga_app,
    description:
      "A manga library platform that syncs updates from external APIs with cached endpoints and background workers.",
    highlight:
      "Built background sync workers and cached endpoints to keep browsing fast and data fresh.",
    tech_stack: [
      "TypeScript",
      "Next.js",
      "MongoDB",
      "Redis",
      "Docker",
      "Nginx",
      "MangaDex API",
      "Tailwind CSS",
    ],
    github: "https://github.com/bylongdev/manga-lib",
    demo: "https://manga-lib.vercel.app/",
  },
];

function ProjectSection() {
  const main = PROJECTS[0];
  const featured = PROJECTS.slice(1);

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="flex flex-col gap-4">
        {/* Main Project */}
        <Card className="w-full gap-0 p-0 md:flex-row md:gap-6">
          <CardContent className="w-full border-b p-0 md:w-105 md:border-r md:border-b-0">
            <div className="relative h-64 w-full md:h-full md:min-h-90">
              <Image
                src={main.img_url}
                alt={`${main.name} thumbnail`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </CardContent>

          <CardContent className="flex grow flex-col justify-between gap-8 py-6 md:p-6">
            <div className="flex flex-col gap-3">
              <CardTitle className="text-2xl">{main.name}</CardTitle>

              <div className="space-y-2">
                <CardDescription>{main.description}</CardDescription>
                <p className="text-muted-foreground text-sm">
                  <span className="text-foreground font-medium">
                    Highlight:
                  </span>{" "}
                  {main.highlight}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {main.tech_stack.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="rounded-md text-base font-normal"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <Button asChild disabled={!main.github}>
                <Link
                  href={main.github || "#"}
                  target="_blank"
                  rel="noreferrer"
                >
                  View code
                </Link>
              </Button>

              <Button asChild variant="outline" disabled={!main.demo}>
                <Link href={main.demo || "#"} target="_blank" rel="noreferrer">
                  Live demo
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <CardTitle className="pt-10 text-lg">Featured Projects</CardTitle>

        {/* Side Projects */}
        <div className="relative">
          <Carousel className="w-full" opts={{ align: "start" }}>
            <CarouselContent>
              {featured.map((item) => (
                <CarouselItem
                  key={item.name}
                  className="basis-full lg:basis-1/3"
                >
                  <Card className="h-full pt-0">
                    <CardContent className="border-b p-0">
                      <div className="relative h-80 w-full overflow-hidden rounded-t-xl">
                        <Image
                          src={item.img_url}
                          alt={`${item.name} thumbnail`}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                    </CardContent>

                    <CardFooter className="flex grow flex-col items-end justify-between gap-6">
                      <div className="flex grow flex-col items-start gap-4">
                        <CardTitle className="text-2xl">{item.name}</CardTitle>

                        <div className="space-y-2">
                          <CardDescription>
                            <span className="text-foreground font-medium">
                              Description:
                            </span>{" "}
                            {item.description}
                          </CardDescription>
                          <CardDescription>
                            <span className="text-foreground font-medium">
                              Highlight:
                            </span>{" "}
                            {item.highlight}
                          </CardDescription>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {item.tech_stack.map((tag) => (
                            <Badge
                              key={tag}
                              variant="secondary"
                              className="rounded-md text-base font-normal"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button asChild disabled={!item.github}>
                          <Link
                            href={item.github || "#"}
                            target="_blank"
                            rel="noreferrer"
                          >
                            View code
                          </Link>
                        </Button>

                        <Button asChild variant="outline" disabled={!item.demo}>
                          <Link
                            href={item.demo || "#"}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live demo
                          </Link>
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectSection;
