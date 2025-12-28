"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, icon: Icon, name, role }, i) => (
                <div
                  className="p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 backdrop-blur-md shadow-lg shadow-cyan-500/10 max-w-xs w-full"
                  key={i}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-lg text-cyan-400 mb-2">{name}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
                  {role && (
                    <div className="mt-4 pt-4 border-t border-cyan-500/10">
                      <p className="text-xs text-gray-400 uppercase tracking-wide">{role}</p>
                    </div>
                  )}
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
