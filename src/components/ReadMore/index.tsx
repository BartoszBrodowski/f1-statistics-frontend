"use client";

import { FC, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDownIcon } from "@radix-ui/react-icons";
import clsx from "clsx";

interface ReadMoreProps {
  children: ReactNode;
}

const ReadMore: React.FC<ReadMoreProps> = ({ children }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <motion.div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.section
            className="dark:text-gray7"
            layout="position"
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
      <motion.header
        initial={false}
        className={clsx(
          "flex items-center gap-1 text-blue-500 hover:text-blue-700 transition duration-250 cursor-pointer",
          { "mt-4": expanded }
        )}
        onClick={() => setExpanded(!expanded)}
      >
        <motion.div
          className="inline-block"
          initial={{ rotate: 0 }}
          animate={expanded ? { rotate: 180 } : { rotate: 0 }}
        >
          <CaretDownIcon />
        </motion.div>
        {!expanded ? "Read More" : "Read Less"}
      </motion.header>
    </motion.div>
  );
};

export default ReadMore;
