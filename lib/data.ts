import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Methodologies",
    hash: "#methodology",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const locales = [
  "en","fr"
] as const;

export const experiencesData = [
  {
    title: "IPREC Training Program",
    location: "Paris, France",
    description:
      "I graduated after 8 months of studying computer maintenance and networks. I found immediately a job in a row with an Managed Services Provider for a french national customer Carglass France.",
    icon: React.createElement(LuGraduationCap),
    date: "2005",
  },
  {
    title: "Aprile for Carglass France",
    location: "ESN Aprile, France",
    description:
      "I worked as a technicien support for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2006 - 2008",
  },
  {
    title: "Webitech Paris",
    location: "Paris, France",
    description:
      "I graduated after 6 months of studying as Professionnal Software Developer. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Paris, France",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Paris, France",
    description:
      "I'm working now as a freelancer developer. My stack includes React, Next.js, TypeScript, Node.js, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS / Tailwind",
  "JavaScript / TypeScript",
  "React / Next",
  "Node.js / Express / Nest.js",
  "Git / Gitlab",
  "Prisma",
  "MongoDB",
  "Redux / Zustand",
  "Apollo / GraphQL",
  "Docker / Kubernetes",
  "Framer Motion",
] as const;

export const methodologyData = [
  "SOLID Principles",
  "Clean code",
  "Clean Architecture",
  "TDD",
] as const;
