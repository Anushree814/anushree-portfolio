import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { PiBuildingOfficeBold, PiOfficeChairBold } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import { FaLaptop } from "react-icons/fa";
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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experienceData = [
  {
    title: "Software Engineer - Frontend",
    location: "GFK - NielsenIQ (NIQ), Pune",
    description:
      "Currently, I'm working as a mid-senior Frontend Developer, contributing to a large-scale analytics platform by building reusable UI components, driving design system adoption, and improving code quality, testing, and deployment reliability. The tech stack includes React, Typescript, and GraphQL",
    icon: React.createElement(FaLaptop),
    date: "2024 - Present",
  },
  {
    title: "Senior Software Developer - Frontend",
    location: "Rayden Interactive, Pune",
    description:
      "Built and scaled frontend architecture for a real-time healthcare platform, delivering reusable, accessible UI components and optimizing performance for data-intensive workflows using React, TypeScript, and GraphQL.",
    icon: React.createElement(PiOfficeChairBold),
    date: "2024 - Present",
  },
  {
    title: "Experience Engineer L2 - Frontend",
    location: "Publicis Sapient, Pune",
    description:
      "Worked as a Frontend Developer on a resource management application build using Next.js, Material UI, GraphQL",
    icon: React.createElement(PiBuildingOfficeBold),
    date: "2022 - 2024",
  },
  {
    title: "Application Development Analyst - Frontend",
    location: "Accenture, Pune / Remote",
    description:
      "On joining the organisation, I got trained to work as a Full Stack developer and eventually got into a Frontend Developer role, that focused mainly on React.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Computer Science and Engineering - Graduate",
    location: "Shri Ramdeobaba College of Engineering and Management, Nagpur",
    description:
      "By graduating as a Computer Science Engineer, I gained a solid foundation in computer science and was ready to march ahead in my career. Through campus placements, got a job in Accenture.",
    icon: React.createElement(LuGraduationCap),
    date: "2015-2019",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    skills: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    skills: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  },
] as const;

export const skillsData = [
  "React",
  "TypeScript",
  "Next.js",
  "HTML5",
  "CSS3",
  "JavaScript",
  "AWS",
  "Material UI",
  "Git",
  "Redux",
  "Redux Toolkit",
  "GraphQL",
  "Jest",
  "Playwright",
  "Bootstrap",
  "Python",
  "Java",
  "Angular",
  "Node.js",
  "MongoDB",
  "MERN",
  "MEAN",
] as const;
