"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.3);
  const fadeInStaggeredAnimation = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills 🪄</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-md text-gray-700">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-slate-50 border rounded-md border-black/[0.1] px-5 py-1 dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInStaggeredAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
