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
        As a CSE grad 💻, I dove head-first into{" "}
        <span className="italic">coding and web development</span> ⚛️, fueled by
        the thrill of solving complex problems. With each project, my passion
        grew 📈, {`there's`} nothing quite like the rush of cracking a tough
        challenge ✅ and watching my solutions come to life 👩🏻‍💻. <br /> My core
        stack is{" "}
        <span className="font-medium">
          React, Next.js, JavaScript, TypeScript, Material UI, HTML, and CSS
        </span>
        . I am always keen to learn new technologies. I am currently looking for
        a <span className="font-medium">full-time position</span> as a Frontend 
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
        love spending time with my succulents.
      </p>
    </motion.section>
  );
}
