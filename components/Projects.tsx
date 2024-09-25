"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";
import {motion} from 'framer-motion'

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);
  return (
    <section
      id="projects"
      className="scroll-mt-28 mb-28"
      ref={ref}
    >
      <SectionHeading>My Projects 📂</SectionHeading>
      <div className="block text-center">
        {/* {projectsData.map((p, i) => (
          <React.Fragment key={i}>
            <Project {...p} />
          </React.Fragment>
        ))} */}
        <motion.p
          className="text-center align-middle self-center font-light"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{delay: 1, type:'spring'}}
        >
          Stay tuned! adding soon...
        </motion.p>
      </div>
    </section>
  );
}
