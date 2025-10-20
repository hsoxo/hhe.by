"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CVItem {
  start: string;
  end: string;
  company: string;
  city: string;
  title: string;
  highlight?: string;
  responsibility: string[];
}

interface CVTimelineProps {
  title: string;
  data: CVItem[];
}

// 动画定义
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay } as const,
  }),
};

const CVTimeline: React.FC<CVTimelineProps> = ({ title, data }) => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.15 } },
      }}
      className="relative"
    >
      {/* 标题淡入 */}
      <motion.h2
        className="text-2xl font-bold mb-8 text-gray-900"
        variants={fadeUp}
        custom={0}
      >
        {title}
      </motion.h2>

      <div className="space-y-12 relative">
        {data.map((item, idx) => (
          <motion.div
            key={`${item.company}-${idx}`}
            className="relative grid grid-cols-[160px_1fr] gap-6 md:gap-8"
            variants={fadeUp}
            custom={0.1 + idx * 0.1}
          >
            {/* ===== 左列（时间 + 圆点 + 竖线） ===== */}
            <div className="relative flex justify-end pr-4">
              {/* 时间标签淡入 */}
              <motion.div
                className="bg-[#c0e3e7]/40 text-gray-800 mt-4 text-sm font-medium px-3 py-1 rounded-md w-fit h-fit whitespace-nowrap shadow-sm cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3, delay: 0.1 + idx * 0.05 },
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.01,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
                }}
              >
                {item.start} - {item.end}
              </motion.div>

              {/* 动态圆点 */}
              <motion.div
                className="absolute top-[24px] -right-[7px] w-3 h-3 bg-gray-700 rounded-full z-10"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{
                  scale: 1,
                  opacity: 1,
                  transition: { delay: 0.15 + idx * 0.1 },
                }}
                viewport={{ once: true }}
              ></motion.div>

              {/* 动态竖线 */}
              {idx !== data.length - 1 && (
                <motion.div
                  className="absolute left-[calc(100%)] top-[32px] w-[2px] bg-gray-200 origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{
                    scaleY: 1,
                    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
                  }}
                  viewport={{ once: true }}
                  style={{ height: "calc(100% + 2.5rem)" }}
                />
              )}
            </div>

            {/* ===== 右列（内容卡片） ===== */}
            <motion.div
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow duration-300"
              variants={fadeUp}
              custom={0.15 + idx * 0.1}
            >
              <div className="font-semibold text-gray-900 text-base">
                {item.company} ·{" "}
                <span className="text-gray-600">{item.city}</span>
              </div>
              <div className="text-gray-700 font-medium mt-1">{item.title}</div>

              {item.highlight && (
                <motion.div
                  className="text-gray-500 text-sm italic mb-2 mt-1"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.3, delay: 0.25 + idx * 0.1 },
                  }}
                  viewport={{ once: true }}
                >
                  {item.highlight}
                </motion.div>
              )}

              {/* 职责列表 */}
              <motion.ul
                className="mt-2 space-y-1 text-sm text-gray-600"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
                  },
                }}
              >
                {item.responsibility.map((r, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2"
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      show: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3, ease: "easeOut" },
                      },
                    }}
                  >
                    <ArrowRight className="w-4 h-4 text-[#c0e3e7] mt-[2px] shrink-0" />
                    <span>{r}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CVTimeline;
