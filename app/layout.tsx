import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import {Toaster} from 'react-hot-toast';

import ThemeContextProvider from "@/context/theme-context";
import MotionDivs from "@/components/MotionDivs";
export const metadata: Metadata = {
  title: "Anushree Sathe | Portfolio",
  description: "Anushree is a creative Frontend Developer with 5+ yoe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={` bg-slate-50 text-slate-950 relative  dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 !overflow-x-hidden sm:overflow-x-hidden`}
      >
        <MotionDivs />
        <div className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[-1rem] left-[-33rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28-rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-center" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
