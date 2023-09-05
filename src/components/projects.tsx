"use client";

// **** Library Imports ****
import React from "react";

// **** Local Imports ****
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/hooks/useSectionInView";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => {
          const evenOrOdd = (index + 1) % 2 === 0 ? "even" : "odd";
          return (
            <React.Fragment key={index}>
              <Project {...project} side={evenOrOdd} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
