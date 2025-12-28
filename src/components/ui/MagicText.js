import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  
  return (
    <span className="relative mt-3 mr-1 inline-block">
      <span className="absolute opacity-20">{children}</span>
      <motion.span style={{ opacity: opacity }} className="relative">
        {children}
      </motion.span>
    </span>
  );
};

export const MagicText = ({ text, className = "" }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={container}
      className={`flex flex-wrap leading-relaxed ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};
