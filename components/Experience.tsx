"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.4);

  const { theme } = useTheme();
  return (
    <section ref={ref} id="experience" className="sm:mb-40 scroll-mt-28 mb-28">
      <SectionHeading>My Experience 👩🏻‍💼</SectionHeading>
      <VerticalTimeline lineColor="">
        {experienceData.map((e, i) => (
          <React.Fragment key={i}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                boxShadow: "unset",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                opacity: "0.8",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255, 255, 255, 0.5)",
              }}
              date={e.date}
              icon={e.icon}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize dark:text-white">
                {e.title}
              </h3>
              <p className="!font-thin !mt-1 dark:text-white">{e.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/80">
                {e.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
