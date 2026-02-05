/* import bg from "@/resources/imgs/city-landscape.png";
import Image from "next/image";
 */
import job_tracker from "@/resources/imgs/job-tracker.png";

import portrait from "@/resources/imgs/portrait.png";

import NavBar from "@/components/navBar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="relative min-h-screen max-w-dvw">
      <main className="m-auto flex min-h-360 w-full max-w-360 flex-col items-center px-10">
        {/* Navbar */}
        <NavBar />

        {/* Hero Section */}
        <div className="flex h-screen flex-col">
          <div className="flex grow flex-col items-center justify-center gap-2">
            <h1 className="text-5xl font-semibold capitalize">Long Nguyen</h1>
            <h2 className="font-mono text-2xl tracking-wider">
              Software Engineer
            </h2>
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
        </div>

        {/* About Section */}
        <div className="relative flex h-screen w-full flex-col gap-10 pt-10">
          <Card className="h-fit">
            <CardHeader className="relative">
              <Separator className="absolute top-0 left-0 translate-y-4" />
              <CardTitle className="text-foreground/50 bg-background z-10 w-fit px-4 text-2xl font-semibold tracking-widest uppercase">
                about me
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-around gap-8">
              <div className="flex grow flex-col gap-4 px-4">
                <Accordion
                  type="multiple"
                  defaultValue={["who", "what", "goal", "learning", "how"]}
                >
                  <AccordionItem value="who">
                    <AccordionTrigger>Who am I?</AccordionTrigger>
                    <AccordionContent>
                      I&apos;m a Software Engineer based in Melbourne who enjoys
                      building practical systems and understanding how things
                      work under the hood. I&apos;m naturally curious and like
                      digging into problems until I understand both the “how”
                      and the “why”.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="what">
                    <AccordionTrigger>What do I do?</AccordionTrigger>
                    <AccordionContent>
                      I focus on backend development, API design, and
                      database-driven applications. I enjoy designing clear
                      structures, keeping systems maintainable, and making sure
                      features are built with long-term stability in mind.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="how">
                    <AccordionTrigger>How do I work?</AccordionTrigger>
                    <AccordionContent>
                      I prefer a step-by-step approach: break problems down,
                      design a simple solution, build a working version, and
                      refine it over time. I value clarity, consistency, and
                      thoughtful trade-offs over unnecessary complexity.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="learning">
                    <AccordionTrigger>
                      What am I learning right now?
                    </AccordionTrigger>
                    <AccordionContent>
                      I’m continuously improving my understanding of backend
                      architecture, system design, and performance. I like
                      learning by building real projects and iterating on them.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="goal">
                    <AccordionTrigger>What is my goal?</AccordionTrigger>
                    <AccordionContent>
                      To grow into a strong backend engineer and contribute to
                      teams that value clean architecture, good engineering
                      practices, and real-world impact.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                {/* <CardTitle className="text-lg">Who am I?</CardTitle>
                <Separator />
                <p>
                  I&apos;m Long Nguyen, a Software Engineer based in Melbourne.
                </p>
                <p>
                  I focus on backend development and building practical
                  applications that solve real problems. I&apos;m particularly
                  interested in API design, database structure, and creating
                  systems that are simple, reliable, and easy to maintain.
                </p>
                <p>
                  I enjoy learning by building, refining systems step by step,
                  and improving both performance and user experience over time.
                </p>
                <p>
                  My goal is to grow into a strong backend engineer and
                  contribute to teams that value clean architecture and
                  thoughtful engineering.
                </p> */}
              </div>

              <Image
                src={portrait}
                alt="Portrait"
                width={400}
                className="rounded-2xl object-cover"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="relative">
              <Separator className="absolute top-0 left-0 translate-y-4" />
              <CardTitle className="text-foreground/50 bg-background z-10 w-fit px-4 text-2xl font-semibold tracking-widest uppercase">
                projects
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {/* <CardTitle className="px-4">Recent</CardTitle> */}

              {/* Add Card into this part */}
              <div className="flex w-full gap-6">
                <Image
                  src={job_tracker}
                  alt="Job Tracker Thumbnail"
                  className="w-200"
                />
                <div className="flex flex-col gap-4">
                  <CardTitle className="text-2xl">Job Tracker</CardTitle>
                  <p>
                    A job application tracking platform designed to organise
                    applications, manage timelines, and keep all related
                    information in one place.
                  </p>

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
                  <div className="flex gap-2">
                    <Button
                      variant={"outline"}
                      className="hover:cursor-pointer"
                    >
                      View code
                    </Button>
                    <Button
                      variant={"outline"}
                      className="hover:cursor-pointer"
                    >
                      Live demo
                    </Button>
                  </div>
                </div>
              </div>
              <CardTitle>Featured Projects</CardTitle>
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardContent>
                    <Image
                      src={job_tracker}
                      alt="Job Tracker Thumbnail"
                      className="w-200"
                    />
                  </CardContent>
                  <CardFooter className="flex grow flex-col items-start justify-between gap-8">
                    <div className="flex flex-col items-start gap-2">
                      <CardTitle className="text-2xl">Weather App</CardTitle>
                      <CardDescription>
                        A modern weather app showing real-time forecasts using
                        the OpenWeather API. Built with Next.js, Tailwind CSS,
                        and Recharts, it displays temperature, humidity, and
                        trends in a sleek dark UI with smooth animations and
                        responsive design for all devices.
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
                      <Button
                        variant={"outline"}
                        className="hover:cursor-pointer"
                      >
                        View code
                      </Button>
                      <Button
                        variant={"outline"}
                        className="hover:cursor-pointer"
                      >
                        Live demo
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardContent>
                    <Image
                      src={job_tracker}
                      alt="Job Tracker Thumbnail"
                      className="w-200"
                    />
                  </CardContent>

                  <CardFooter className="flex grow flex-col items-start justify-between gap-8">
                    <div className="flex flex-col items-start gap-2">
                      <CardTitle className="text-2xl">Weather App</CardTitle>
                      <CardDescription>
                        A modern weather app showing real-time forecasts using
                        the OpenWeather API. Built with Next.js, Tailwind CSS,
                        and Recharts, it displays temperature, humidity, and
                        trends in a sleek dark UI with smooth animations and
                        responsive design for all devices.
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "TypeScript",
                          "JavaScript",
                          "PostgreSQL",
                          "Prisma",
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
                      <Button
                        variant={"outline"}
                        className="hover:cursor-pointer"
                      >
                        View code
                      </Button>
                      <Button
                        variant={"outline"}
                        className="hover:cursor-pointer"
                      >
                        Live demo
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
                <Card>
                  <CardContent>
                    <Image
                      src={job_tracker}
                      alt="Job Tracker Thumbnail"
                      className="w-200"
                    />
                  </CardContent>
                  <CardFooter className="flex grow flex-col items-start justify-between gap-8">
                    <div className="flex flex-col items-start gap-2">
                      <CardTitle className="text-2xl">Weather App</CardTitle>
                      <CardDescription>
                        A modern weather app showing real-time forecasts using
                        the OpenWeather API. Built with Next.js, Tailwind CSS,
                        and Recharts, it displays temperature, humidity, and
                        trends in a sleek dark UI with smooth animations and
                        responsive design for all devices.
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "TypeScript",
                          "JavaScript",
                          "PostgreSQL",
                          "Prisma",
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
                      <Button
                        variant={"outline"}
                        className="hover:cursor-pointer"
                      >
                        View code
                      </Button>
                      <Button
                        variant={"outline"}
                        className="hover:cursor-pointer"
                      >
                        Live demo
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Features Section */}
        {/* Projects Section */}
      </main>
    </div>
  );
}
