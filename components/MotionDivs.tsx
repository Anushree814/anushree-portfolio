"use client"
import React from 'react'
import {motion} from 'framer-motion'
export default function MotionDivs() {
  return (
    <div className="z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.05,
        }}
        className="absolute w-[2rem] h-[2rem] bg-[#bface8]  translate-x-9 translate-y-9 -rotate-12 top-3 left-10 rounded-full bg-opacity-60"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
        className="absolute w-[6rem] h-[6rem] bg-[#bface8]  translate-x-9 translate-y-9  -rotate-12 top-[15rem] left-[13rem] rounded-full bg-opacity-50"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.15,
        }}
        className="absolute w-[4rem] h-[4rem] bg-[#bface8]  translate-x-9 translate-y-9  -rotate-12 top-[20rem] left-[13rem] rounded-full bg-opacity-50"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
        className="absolute w-[9rem] h-[9rem] bg-[#bface8]  translate-x-9 translate-y-9  -rotate-12 top-[3rem] left-[13rem] rounded-full bg-opacity-30"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.25,
        }}
        className="absolute w-[9rem] h-[9rem] bg-[#bface8]  translate-x-9 translate-y-9  -rotate-12 top-[10rem] left-[7rem] rounded-full bg-opacity-40"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.3,
        }}
        className="absolute w-[16rem] h-[16rem] bg-[#bface8]  translate-x-9 translate-y-9  -rotate-12 top-[6rem] -left-[10rem] rounded-full bg-opacity-35"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.35,
        }}
        className="absolute w-[9rem] h-[9rem] bg-[#bface8]  translate-x-9 translate-y-9  -rotate-12 -top-[2rem] left-[7rem] rounded-full bg-opacity-45"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.05,
        }}
        className="absolute w-[6rem] h-[6rem] bg-[#e8b5ac]  translate-x-9 translate-y-9  -rotate-12 top-[15rem] right-[13rem] rounded-full bg-opacity-50"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
        className="absolute w-[4rem] h-[4rem] bg-[#e8b5ac]  translate-x-9 translate-y-9  -rotate-12 top-[20rem] right-[13rem] rounded-full bg-opacity-65"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.15,
        }}
        className="absolute w-[9rem] h-[9rem] bg-[#e8b5ac]  translate-x-9 translate-y-9  -rotate-12 top-[10rem] right-[9.5rem] rounded-full bg-opacity-35"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.15,
        }}
        className="absolute w-[9rem] h-[9rem] bg-[#e8b5ac]  translate-x-9 translate-y-9  -rotate-12 top-[3rem] right-[13rem] rounded-full bg-opacity-50"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.2,
        }}
        className="absolute hidden md:block w-[16rem] h-[16rem] bg-[#e8b5ac]  translate-x-9 translate-y-9  -rotate-12 top-[6rem] lg:-right-[8rem] rounded-full bg-opacity-40"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.25,
        }}
        className="absolute w-[9rem] h-[9rem] bg-[#e8b5ac]  translate-x-9 translate-y-9  -rotate-12 -top-[2rem] right-[9rem] rounded-full bg-opacity-30"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.3,
        }}
        className="absolute w-[2rem] h-[2rem] bg-[#e8b5ac]  translate-x-9 translate-y-9 -rotate-12 top-3 right-[22rem] rounded-full bg-opacity-60"
      ></motion.div>
    </div>
  );
}
