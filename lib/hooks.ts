import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionName } from "./types";
export function useSectionInView(section:SectionName, threshold=0.5) {
  const { ref, inView } = useInView({threshold});
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return {
    ref
  }
}
