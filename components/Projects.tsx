"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My Projects 📂</SectionHeading>
      <div className="block text-center">
        <motion.p
          className="text-center align-middle self-center  text-indigo-800  bg-indigo-50 py-2 px-4 rounded-full dark:bg-none dark:bg-gray-50 dark:bg-opacity-20 dark:text-indigo-400 font-semibold"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.25,
            type: "keyframes",
          }}
        >
          {`Stay tuned! working on'em, adding soon...`}
        </motion.p>
      </div>
    </section>
  );
}
