"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  console.log("🚀 ~ ThemeSwitch ~ theme:", theme)

  return (
    <button
      // className="flex gap-0.5 fixed top-7 right-[22rem] bg-white w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-md rounded-full items-center justify-center hover:bg-sky-100 active:scale-105 transition-all text-center  dark:bg-gray-950 dark:border-black/40 dark:hover:text-yellow-100 dark:hover:scale-110 dark:hover:bg-opacity-30"
      className="flex gap-0.5 fixed bottom-5 right-5 bg-white w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-md rounded-full items-center justify-center hover:bg-sky-100 active:scale-105 transition-all text-center  dark:bg-gray-950 dark:border-black/40 dark:hover:text-yellow-100 dark:hover:scale-110 dark:hover:bg-opacity-30"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <HiSparkles className="text-xs align-sub bottom-0" />
      ) : (
        ""
      )}
      {theme === "light" ? (
        <BsMoon className="font-extrabold text-lg align-sup " />
      ) : (
        <BsSun className="font-extrabold text-lg align-sup" />
      )}
    </button>
  );
}
