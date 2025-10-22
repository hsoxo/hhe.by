"use client";

import { motion } from "framer-motion";
import React from "react";
import { Skill } from "@/types";

// 动效设定
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  } as const,
};

const CoreStack = ({ stack }: { stack: Skill[] }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <h3 className="text-lg font-semibold mb-4 text-gray-800">Core Stack</h3>

      <div className="space-y-5">
        {stack.map((skill) => (
          <motion.div
            key={skill.label}
            variants={itemVariants}
            className="relative"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-gray-800 font-medium">{skill.label}</span>
              <span className="text-xs text-gray-400">{skill.score}%</span>
            </div>

            <motion.div
              className="relative w-full h-[8px] bg-gray-100 rounded-full mb-2 overflow-hidden"
              initial={{ width: 0 }}
              whileInView={{
                width: "100%",
                transition: { duration: 0.6, ease: "easeOut" },
              }}
              viewport={{ once: true }}
            >
              <motion.div
                className="absolute h-full bg-[#b8e0e4] rounded-full"
                initial={{ width: 0 }}
                whileInView={{
                  width: `${skill.score}%`,
                  transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
                }}
              />
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-1.5 mt-1"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.05, delayChildren: 0.4 },
                },
              }}
            >
              {skill.tags.map((tag) => (
                <motion.span
                  key={tag}
                  className="px-2 py-[1px] bg-[#f8f9fa] text-gray-700 border border-gray-200 text-[13px] rounded-full hover:bg-[#c0e3e7]/30 transition cursor-default"
                  variants={{
                    hidden: { opacity: 0, y: 8 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CoreStack;
