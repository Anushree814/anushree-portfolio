"use client";
import Image from "next/image";
import React from "react";
import pic from "@/public/picme.jpeg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
 const {ref} = useSectionInView('Home')
 const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext()
  return (
    <section
      className="mb-28 mt-[8.5rem] max-w-[50rem] text-center sm:mb-0 scroll-mt-28 z-50"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.4,
            }}
          >
            <Image
              src={pic}
              width={192}
              height={192}
              quality={95}
              className="h-24 w-24 rounded-full object-cover object-top border-[0.35rem] border-white shadow-xl"
              alt="my photo"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: 0.5,
              duration: 0.6,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl dark:bg-gray-950 dark:bg-opacity-75 dark:border-black/40 dark:rounded-lg dark:py-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{`Hey, I'm Anushree.`}</span> {`I'm a `}
        <span className="font-bold">frontend developer</span> with{" "}
        <span className="font-bold">5 years</span> of experience. I enjoy
        building <span className="italic">websites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
          className="group bg-sky-950 dark:bg-gray-950 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-sky-900 hover:opacity-99 active:bg-sky-900 focus:text-sky-600 hover:scale-110"
        >
          Contact me{" "}
          <BsArrowRight className="group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/Anushree-Sathe-Resume.pdf"
          download
          className="group bg-white text-sky-950 px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-100 hover:opacity-99   hover:scale-110 cursor-pointer dark:bg-opacity-30 dark:text-white"
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/anushreesathe"
          target="_blank"
          className="bg-sky-950 dark:bg-gray-950 text-white p-4 flex items-center gap-2 rounded-full hover:scale-110 cursor-pointer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Anushree814"
          target="_blank"
          className="bg-sky-950 dark:bg-gray-950 text-white p-4 flex items-center gap-2 rounded-full text-[1.25rem] hover:scale-110 cursor-pointer"
        >
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
