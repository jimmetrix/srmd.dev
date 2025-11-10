"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

// Blank gray placeholder image as data URI
// const PLACEHOLDER_IMAGE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='768' height='768'%3E%3Crect fill='%23e5e7eb' width='768' height='768'/%3E%3C/svg%3E";

const PROJECTS = [
  {
    img: "/logos/logo-alghassaq.svg",
    title: "Al-Ghassaq - Website & Branding",
    desc: "Logo and Branding, as well as website and E-mail service for Al-Ghassaq.",
    url: "https://alghassaq.com/",
  },
  {
    img: "/logos/logo-unitedspa.png",
    title: "United S.p.A - Brochure & Website",
    desc: "Designed brochure and deployed a website & Email service.",
    url: "https://unitedspairaq.com/"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Here&apos;s what I&apos;ve been working on
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
