import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export function AnimatedProjectTitle({ title, isActive }) {
  if (!isActive) {
    return (
      <span className="relative inline-block rounded-lg px-4 py-2 text-center text-lg font-bold text-white bg-gradient-to-b from-gray-700 to-gray-800 shadow-[inset_0_-1px_#1a1a1a,inset_0_0_0_1px_rgba(6,182,212,0.24),_0_4px_8px_rgba(0,0,0,0.3)]">
        {title}
      </span>
    );
  }

  return (
    <motion.div
      className={cn(
        "relative inline-block rounded-lg px-4 py-2 text-center text-lg font-bold text-white",
        "bg-gradient-to-b from-gray-700 to-gray-800",
        "shadow-[inset_0_-1px_#1a1a1a,inset_0_0_0_1px_rgba(6,182,212,0.24),_0_4px_8px_rgba(0,0,0,0.3)]"
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div className="inline-block">
        {title.split("").map((letter, index) => (
          <motion.span
            key={`${title}-${index}`}
            initial={{
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              delay: index * 0.02,
              duration: 0.4,
              ease: "easeOut",
            }}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
