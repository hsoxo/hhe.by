"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Rss } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay } as const,
  }),
};

const Sider = () => {
  return (
    <motion.div
      className="w-full max-w-sm bg-white shadow-md rounded-2xl p-6 text-center border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div className="flex flex-col items-center" variants={fadeUp}>
        <div className="relative w-[160px] h-[160px] mb-4 border-[3px] border-[#c0e3e7] rounded-full overflow-hidden shadow-sm">
          <Image
            src="/avatar.jpg"
            alt="Herbert He"
            fill
            className="rounded-full object-cover shadow-sm"
            priority
          />
        </div>

        <motion.h2
          className="text-2xl font-bold text-gray-900 mb-1"
          variants={fadeUp}
          custom={0.1}
        >
          Herbert He
        </motion.h2>

        <motion.p
          className="text-gray-500 mb-4"
          variants={fadeUp}
          custom={0.15}
        >
          Full-Stack Engineer
        </motion.p>

        <motion.div
          className="flex justify-center space-x-6 mb-6"
          variants={fadeUp}
          custom={0.2}
        >
          <a
            href="https://github.com/hsoxo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#4b9da9] transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/bolong-he-513835342/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#4b9da9] transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="http://blog.hsoxo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#4b9da9] transition"
          >
            <Rss className="w-6 h-6" />
          </a>
        </motion.div>
      </motion.div>

      <motion.button
        onClick={() => window.open("/CV - Bolong He.pdf", "_blank")}
        className="w-full bg-[#c0e3e7] text-gray-900 font-medium py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-[#a8d7dc] cursor-pointer"
        variants={fadeUp}
        custom={0.3}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
      >
        <Download className="w-5 h-5" />
        <span>Download CV</span>
      </motion.button>
    </motion.div>
  );
};

export default Sider;
