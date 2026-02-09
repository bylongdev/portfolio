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

function ProjectSection() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="relative">
        <Separator className="absolute top-0 left-0 translate-y-4" />
        <CardTitle className="text-foreground/50 bg-background z-10 w-fit px-4 text-2xl font-semibold tracking-widest uppercase">
          projects
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <Card className="w-full flex-row gap-6 p-0">
          <CardContent className="w-fit border-r py-6">
            <Image
              src={job_tracker}
              alt="Job Tracker Thumbnail"
              className="w-200"
            />
          </CardContent>

          <CardContent className="flex grow flex-col items-end justify-between gap-8 p-6">
            <div className="flex flex-col items-start gap-2">
              <CardTitle className="text-2xl">Job Tracker</CardTitle>
              <CardDescription>
                A job application tracking platform designed to organise
                applications, manage timelines, and keep all related information
                in one place.
              </CardDescription>

              <div className="flex flex-wrap gap-2">
                {[
                  "TypeScript",
                  "JavaScript",
                  "PostgreSQL",
                  "Prisma",
                  "Node.js",
                  "Tailwindcss",
                ].map((tag, index) => (
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
              <Button variant={"outline"} className="hover:cursor-pointer">
                View code
              </Button>
              <Button variant={"outline"} className="hover:cursor-pointer">
                Live demo
              </Button>
            </div>
          </CardContent>
        </Card>
        <CardTitle>Featured Projects</CardTitle>
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="border-b p-2">
              <Image
                src={job_tracker}
                alt="Job Tracker Thumbnail"
                className="w-200"
              />
            </CardContent>
            <CardFooter className="flex grow flex-col items-end justify-between gap-8">
              <div className="flex flex-col items-start gap-2">
                <CardTitle className="text-2xl">Weather App</CardTitle>
                <CardDescription>
                  A modern weather app showing real-time forecasts using the
                  OpenWeather API. Built with Next.js, Tailwind CSS, and
                  Recharts, it displays temperature, humidity, and trends in a
                  sleek dark UI with smooth animations and responsive design for
                  all devices.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "JavaScript",
                    "PostgreSQL",
                    "Prisma",
                    "Node.js",
                    "Tailwindcss",
                  ].map((tag, index) => (
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
                <Button variant={"outline"} className="hover:cursor-pointer">
                  View code
                </Button>
                <Button variant={"outline"} className="hover:cursor-pointer">
                  Live demo
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="border-b p-2">
              <Image
                src={job_tracker}
                alt="Job Tracker Thumbnail"
                className="w-200"
              />
            </CardContent>

            <CardFooter className="flex grow flex-col items-end justify-between gap-8">
              <div className="flex flex-col items-start gap-2">
                <CardTitle className="text-2xl">Weather App</CardTitle>
                <CardDescription>
                  A modern weather app showing real-time forecasts using the
                  OpenWeather API. Built with Next.js, Tailwind CSS, and
                  Recharts, it displays temperature, humidity, and trends in a
                  sleek dark UI with smooth animations and responsive design for
                  all devices.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "JavaScript", "PostgreSQL", "Prisma"].map(
                    (tag, index) => (
                      <Badge
                        key={index}
                        variant={"secondary"}
                        className="rounded-md text-base font-normal"
                      >
                        {tag}
                      </Badge>
                    ),
                  )}
                </div>
              </div>

              <div className="flex gap-2 justify-self-end">
                <Button variant={"outline"} className="hover:cursor-pointer">
                  View code
                </Button>
                <Button variant={"outline"} className="hover:cursor-pointer">
                  Live demo
                </Button>
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardContent className="border-b p-2">
              <Image
                src={job_tracker}
                alt="Job Tracker Thumbnail"
                className="w-200"
              />
            </CardContent>
            <CardFooter className="flex grow flex-col items-end justify-between gap-8">
              <div className="flex flex-col items-start gap-2">
                <CardTitle className="text-2xl">Weather App</CardTitle>
                <CardDescription>
                  A modern weather app showing real-time forecasts using the
                  OpenWeather API. Built with Next.js, Tailwind CSS, and
                  Recharts, it displays temperature, humidity, and trends in a
                  sleek dark UI with smooth animations and responsive design for
                  all devices.
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "JavaScript", "PostgreSQL", "Prisma"].map(
                    (tag, index) => (
                      <Badge
                        key={index}
                        variant={"secondary"}
                        className="rounded-md text-base font-normal"
                      >
                        {tag}
                      </Badge>
                    ),
                  )}
                </div>
              </div>

              <div className="flex gap-2 justify-self-end">
                <Button variant={"outline"} className="hover:cursor-pointer">
                  View code
                </Button>
                <Button variant={"outline"} className="hover:cursor-pointer">
                  Live demo
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectSection;
