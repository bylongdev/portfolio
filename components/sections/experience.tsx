import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const EXPERIENCES = [
  {
    title: "Junior Software Engineer",
    company: "BusinessLocal",
    from: "November 2024",
    to: " June 2025",
    location: "Melbourne, Victoria, Australia",
    description: (
      <>
        <p>
          <strong>Key Responsibilities:</strong>
        </p>
        <ul className="list-disc px-5">
          <li>
            Developing and maintaining responsive websites tailored to client
            business goals, including custom UI elements and dynamic features
            using PHP, HTML, and CSS.
          </li>
          <li>
            Optimising front-end performance by minifying CSS/PHP and
            implementing lazy loading to ensure seamless user experience across
            devices.
          </li>
          <li>
            Implementing SEO best practices with semantic HTML structure, meta
            tags, and schema markup to boost visibility and rankings.
          </li>
          <li>
            Collaborating with design, marketing, and content teams to align
            websites with branding and campaign objectives.
          </li>
          <li>
            Providing technical support, regular updates, and created
            documentation to standardise workflows and support new developers.
          </li>
          <li>
            Assisting in QA testing to resolve cross-browser compatibility
            issues prior to deployment.
          </li>
          <li>
            Investigated and fixed server-side issues, including data handling
            bugs and production errors, improving system reliability.
          </li>
        </ul>

        <p>
          <strong>Key Highlights:</strong>
        </p>
        <ul className="list-disc px-5">
          <li>
            <strong>Website Development:</strong> Migrated legacy client sites
            to mobile-first architecture, reducing maintenance overhead by 25%.
          </li>
          <li>
            <strong>Development Efficiency:</strong> Introduced a reusable
            component library, cutting new page build time by 40%.
          </li>
          <li>
            <strong>Conversion Optimisation:</strong> Piloted A/B testing on
            landing pages, increasing lead conversion rates by up to 18%.
          </li>
          <li>
            <strong>Uptime Reliability:</strong> Achieved 99.9% uptime by
            resolving hosting misconfigurations and database errors.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Junior Software Engineer",
    company: "AusWISE",
    from: "May 2024",
    to: " April 2025",
    location: "Melbourne, Victoria, Australia",
    description: (
      <>
        <p>
          <strong>Key Responsibilities:</strong>
        </p>
        <ul className="list-disc px-5">
          <li>
            Building user-friendly web applications with Wix Studio, designing
            responsive layouts, intuitive navigation, and interactive features.
          </li>
          <li>
            Managing automated email workflows, troubleshooting delivery issues
            and extracting performance data for reporting.
          </li>
          <li>
            Coordinating project tasks, timelines, and stakeholder communication
            to keep deliverables on track.
          </li>
          <li>
            Monitoring website performance, conducting speed audits, and
            applying optimisations to improve user experience.
          </li>
          <li>
            Collaborating in agile sprints, daily stand-ups, and code reviews to
            accelerate delivery.
          </li>
        </ul>

        <p>
          <strong>Key Highlights:</strong>
        </p>
        <ul className="list-disc px-5">
          <li>
            <strong>Web Application Development:</strong> Delivered
            mobile-responsive applications with search functionality and
            consistent branding.
          </li>
          <li>
            <strong>Process Automation:</strong> Reduced manual workload by 30%
            through automated email workflows and streamlined data extraction.
          </li>
          <li>
            <strong>Team Collaboration:</strong> Improved delivery speed by 20%
            through active participation in sprints and daily stand-ups.
          </li>
          <li>
            <strong>Performance Monitoring:</strong> Boosted engagement metrics
            by optimising site speed via image compression and code cleanup.
          </li>
          <li>
            <strong>Issue Resolution:</strong> Prevented delays by resolving
            technical issues such as broken links, email failures, and
            integration errors.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Front Developer",
    company: "GovernSafe",
    from: "August 2024",
    to: " June 2025",
    location: "Melbourne, Victoria, Australia",
    description: (
      <>
        <p>
          <strong>Key Responsibilities:</strong>
        </p>
        <ul className="list-disc px-5">
          <li>
            Assisting in developing user-friendly web interfaces using React,
            JavaScript, HTML, and CSS.
          </li>
          <li>
            Implementing responsive layouts and UI components to improve
            usability across desktop and mobile devices.
          </li>
          <li>
            Collaborating with senior developers and designers to translate
            wireframes and mock-ups into functional features.
          </li>
          <li>
            Contributing to code reviews, debugging, and front-end optimisation
            to enhance performance and maintainability.
          </li>
          <li>
            Participating in daily stand-ups and agile sprints, learning best
            practices in version control with Git and collaborative workflows.
          </li>
          <li>
            Providing documentation and notes for implemented features to
            support future development and team knowledge-sharing.
          </li>
        </ul>

        <p>
          <strong>Key Highlights:</strong>
        </p>
        <ul className="list-disc px-5">
          <li>
            <strong>UI/UX Contribution:</strong> Supported the design and build
            of intuitive, responsive interfaces, improving overall user
            experience.
          </li>
          <li>
            <strong>Front-End Skill Growth:</strong> Gained hands-on experience
            with React and JavaScript by contributing to real client features.
          </li>
          <li>
            <strong>Collaboration:</strong> Worked closely with cross-functional
            teams, gaining exposure to agile delivery and team-based
            development.
          </li>
          <li>
            <strong>Performance Enhancement:</strong> Assisted in debugging and
            optimising UI components, helping reduce load times and improve
            responsiveness.
          </li>
          <li>
            <strong>Learning Milestone:</strong> Applied academic knowledge in a
            live project environment, building confidence in frontend
            engineering.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Team Lead | Software Engineer | Web Development",
    company: "La Trobe University",
    from: "March 2023",
    to: " June 2023",
    location: "Melbourne, Victoria, Australia",
    description: (
      <>
        <p>
          <strong>Key Responsibilities:</strong>
        </p>
        <ul className="list-disc px-5">
          <li>
            Leading front-end development of a React-based web application to
            streamline product mock-up workflows.
          </li>
          <li>
            Integrating the Cloudinary API for real-time image handling,
            improving UI responsiveness and interactivity.
          </li>
          <li>
            Coordinating task distribution, sprint planning, and progress
            tracking to maintain steady delivery momentum.
          </li>
          <li>
            Ensuring smooth knowledge transfer during handovers, supporting team
            continuity across sprints.
          </li>
          <li>
            Utilising Jira for agile project management, GitHub for version
            control, and VSCode for efficient coding workflows.
          </li>
        </ul>

        <p>
          <strong>Key Highlights:</strong>
        </p>
        <ul className="list-disc px-5">
          <li>
            <strong>Leadership:</strong> Directed a small team of developers,
            fostering collaboration and guiding feature implementation.
          </li>
          <li>
            <strong>Front-End Innovation:</strong> Enhanced mock-up workflow
            efficiency through React components and Cloudinary integration.
          </li>
          <li>
            <strong>Performance Gain:</strong> Achieved a 65% improvement in
            project delivery speed within the internship period.
          </li>
          <li>
            <strong>Delivery Impact:</strong> Contributed to completing 80% of
            the web application by the end of the placement.
          </li>
          <li>
            <strong>Agile Methodologies:</strong> Applied agile practices with
            Jira, daily stand-ups, and sprint planning to ensure steady
            progress.
          </li>
        </ul>
      </>
    ),
  },
];

function ExperienceSection() {
  return (
    <Card className="border-0 shadow-none">
      <CardContent>
        <div className="relative border-l md:m-6">
          <Accordion
            className="flex flex-col gap-2"
            type="single"
            collapsible
            defaultValue={EXPERIENCES[0].company}
          >
            {EXPERIENCES.map((exp, index) => (
              <Card
                key={index}
                className="rounded-none border-0 shadow-none not-last:border-b first:pt-0 last:pb-0 md:mx-6"
              >
                <CardContent className="flex flex-col gap-4 px-6">
                  <AccordionItem value={exp.company}>
                    <AccordionTrigger>
                      <div className="flex w-full flex-col gap-2">
                        <div className="flex w-full flex-col justify-between md:flex-row">
                          <div className="bg-muted-foreground absolute left-0 h-4 w-4 -translate-x-1/2 rounded-full" />
                          <CardTitle className="text-base md:text-lg">
                            {exp.title} @ {exp.company}
                          </CardTitle>
                          <CardDescription>
                            {exp.from} - {exp.to}
                          </CardDescription>
                        </div>
                        <CardDescription>{exp.location}</CardDescription>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="space-y-2">
                      {exp.description}
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
