"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.4);
  return (
    <motion.section
      className="mb-28 text-center max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>✨ About Me ✨</SectionHeading>
      <p className="mb-2">
        I hold a degree in{" "}
        <span className="font-medium">
          Computer Science and Engineering 💻.
        </span>{" "}
        During my Engineering program, I developed interest in coding and web
        development. I started learning and eventually started building projects
        👩🏻‍💻.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Material UI, JavaScript, HTML, and CSS
        </span>
        . I am also familiar with TypeScript. I am always keen to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Frontend
        developer at a <span className="underline">mid-senior level</span>.
      </p>

      <p>
        <span className="italic">{`When I'm not coding`}</span>, I enjoy{" "}
        <span className="text-indigo-800 dark:text-indigo-400">
          {" "}
          gardening 👩🏻‍🌾, watching movies 🎥{" "}
        </span>
        ,and{" "}
        <span className="text-indigo-800 dark:text-indigo-400">
          {" "}
          singing 🎤
        </span>
        . I am trained in{" "}
        <span className="font-medium">
          Indian Classical Music and music is my passion 🎶♥️
        </span>{" "}
        I have recently discovered that {`I'm`} quite a greenie🪴 myself as I
        spending time with my succulents.
      </p>
    </motion.section>
  );
}
