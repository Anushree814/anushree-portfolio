"use client";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
type ProjectProps = (typeof projectsData)[number];
export default function Project({
  title,
  description,
  skills,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const  scaleProgress  = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const  opacityProgress  = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className=" bg-gray-100 max-w-[42rem] rounded-lg border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  hover:bg-gray-200 transition group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className=" pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl text-gray-700 font-semibold dark:text-white">
            {title}
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/80">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {skills.map((skill, index) => (
              <li
                className="bg-sky-950/[0.8] dark:bg-gray-900  px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute top-8 -right-40 rounded-t-lg shadow-2xl width-[28.25rem] pt-4 pb-7 px-5 sm:pl-1 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[11rem] 
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2
        group-even:right-[initial] group-even:-left-80"
          src={''}
          alt={title}
          quality={95}
        />
      </section>
    </motion.div>
  );
}
