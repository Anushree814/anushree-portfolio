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
    title: "Experience Engineer L2 - Frontend",
    location: "Publicis Sapient, Pune",
    description:
      "Currently, I'm working as a mid-senior Frontend developer. My stack includes React, Next.js, TypeScript, Material UI, and Apollo Client. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
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
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    skills: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "React",
  "TypeScript",
  "Next.js",
  "HTML5",
  "CSS3",
  "JavaScript",
  "Material UI",
  "Git",
  "Redux",
  "Redux Toolkit",
  "Apollo client",
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
