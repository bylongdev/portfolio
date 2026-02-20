import React from "react";
import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type Experience = {
  id: string;
  title: string;
  company: string;
  from: string;
  to: string;
  location: string;
  whatIDid: string[];
  impact: string[];
};

const EXPERIENCES: Experience[] = [
  {
    id: "businesslocal",
    title: "Junior Software Engineer",
    company: "BusinessLocal",
    from: "November 2024",
    to: "June 2025",
    location: "Melbourne, Victoria, Australia",
    whatIDid: [
      "Built and maintained client websites end-to-end, delivering responsive pages, reusable UI components, and dynamic PHP features aligned to business goals.",
      "Improved performance and reliability by refactoring CSS/PHP, adding lazy-loading, and debugging production issues across hosting and data handling.",
      "Lifted search visibility by implementing semantic HTML, metadata, and schema in collaboration with marketing and content teams.",
    ],
    impact: [
      "Reduced maintenance overhead by 25% through mobile-first rebuilds and reusable components.",
      "Increased landing page conversions by up to 18% via A/B testing and iterative releases.",
    ],
  },
  {
    id: "auswise",
    title: "Junior Software Engineer",
    company: "AusWISE",
    from: "May 2024",
    to: "April 2025",
    location: "Melbourne, Victoria, Australia",
    whatIDid: [
      "Delivered responsive Wix Studio applications with consistent branding, navigation, and interactive components.",
      "Automated email workflows and reporting, troubleshooting delivery failures and reducing manual admin effort.",
      "Improved site performance through audits and optimisation (image compression, content cleanup).",
    ],
    impact: [
      "Reduced manual workload by 30% through automation and streamlined reporting.",
      "Improved delivery speed by 20% through consistent sprint execution and handoffs.",
    ],
  },
  {
    id: "governsafe",
    title: "Front-end Developer",
    company: "GovernSafe",
    from: "August 2024",
    to: "June 2025",
    location: "Melbourne, Victoria, Australia",
    whatIDid: [
      "Implemented React UI components and responsive layouts from wireframes.",
      "Improved UX and performance by debugging UI issues and reducing unnecessary re-renders.",
      "Contributed to delivery through Git workflows, code reviews, and documentation.",
    ],
    impact: [
      "Shipped UI improvements that reduced layout bugs across breakpoints.",
      "Improved front-end stability through targeted bug fixes and refactors.",
    ],
  },
  {
    id: "latrobe",
    title: "Team Lead | Software Engineer",
    company: "La Trobe University",
    from: "March 2023",
    to: "June 2023",
    location: "Melbourne, Victoria, Australia",
    whatIDid: [
      "Led front-end delivery of a React web application across sprint cycles.",
      "Integrated Cloudinary for real-time image upload and processing.",
      "Coordinated task planning and delivery using Jira and GitHub.",
    ],
    impact: [
      "Improved delivery speed by 65% through clearer task breakdown.",
      "Completed ~80% of application scope within placement period.",
    ],
  },
];

function ExperienceSection() {
  const defaultOpen = EXPERIENCES[0]?.id;

  return (
    <Card className="border-0 shadow-none">
      <CardContent>
        {/* timeline rail */}
        <div className="relative md:m-6">
          <div className="bg-border absolute top-0 left-3 h-full w-px md:left-6" />

          <Accordion
            className="flex flex-col gap-2"
            type="single"
            collapsible
            defaultValue={defaultOpen}
          >
            {EXPERIENCES.map((exp) => (
              <Card
                key={exp.id}
                className="rounded-none border-0 shadow-none md:mr-2 md:ml-6"
              >
                <CardContent className="relative flex flex-col gap-4 px-0">
                  {/* dot */}
                  <span className="bg-muted-foreground absolute top-7 left-3 h-3 w-3 -translate-x-1/2 rounded-full md:left-0" />

                  <AccordionItem
                    value={exp.id}
                    className="border-b last:border-b-0"
                  >
                    <AccordionTrigger className="px-6">
                      <div className="flex w-full flex-col gap-2 text-left">
                        <div className="flex w-full flex-col justify-between gap-1 md:flex-row md:items-center">
                          <CardTitle className="text-base md:text-lg">
                            {exp.title} @ {exp.company}
                          </CardTitle>
                          <CardDescription>
                            {exp.from} – {exp.to}
                          </CardDescription>
                        </div>
                        <CardDescription>{exp.location}</CardDescription>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="space-y-4 px-6 pb-6 text-sm">
                      <div>
                        <p className="mb-1 font-medium">What I did</p>
                        <ul className="list-disc space-y-1 pl-5">
                          {exp.whatIDid.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="mb-1 font-medium">Impact</p>
                        <ul className="list-disc space-y-1 pl-5">
                          {exp.impact.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </CardContent>
              </Card>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );
}

export default ExperienceSection;
