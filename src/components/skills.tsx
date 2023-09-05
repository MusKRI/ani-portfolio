"use client";

// **** Library Imports ****
import { Variants, motion } from "framer-motion";

// **** Local Imports ****
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/hooks/useSectionInView";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => {
          return (
            <motion.li
              variants={fadeInAnimationVariants}
              initial="hidden"
              whileInView="visible"
              key={index}
              className="bg-white borderBlack rounded-xl px-5 py-3"
              custom={index}
            >
              {/* add dark:bg-white/10 dark:text-white/80 in above li tag */}
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
