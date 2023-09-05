import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSection } from "./useActiveSection";

export const useSectionInView = (sectionName: string, threshold = 0.75) => {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
};
