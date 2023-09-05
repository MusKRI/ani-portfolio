"use client";

// **** Library Imports ****
import { motion, Variants } from "framer-motion";

// **** Local Imports ****
import { links } from "@/lib/data";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { useActiveSection } from "@/hooks/useActiveSection";

const headerVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
    x: "-50%",
  },
  visible: {
    y: 0,
    opacity: 1,
    x: "-50%",
  },
};

const listItemVariants: Variants = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSection();

  return (
    <header className="z-[99] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex items-center w-[22rem] flex-wrap justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => {
            return (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center"
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  className={cn(
                    "flex items-center justify-center w-full px-3 py-3 hover:text-gray-950 transition-colors relative",
                    activeSection === link.name && "text-gray-950"
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="bg-gray-100 rounded-full absolute inset-x-0 inset-y-1 -z-10"
                    >
                      {/* add dark:bg-gray-800 in above span tag */}
                    </motion.span>
                  )}
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
