"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import clsx from "clsx";
import { ProfileData } from "@/types";
import CoreStack from "./CoreStack";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay } as const,
  }),
};

const Profile = ({ data }: { data: ProfileData }) => {
  const isEn = true;

  return (
    <motion.div
      className="bg-white shadow-md rounded-2xl p-8 md:p-10 space-y-6 border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ===== Header ===== */}
      <motion.header
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="space-y-3"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug"
          variants={fadeUp}
          custom={0}
        >
          {data.hello}
        </motion.h2>

        <motion.p
          className="text-gray-600 leading-relaxed text-[15px] md:text-base max-w-4xl"
          variants={fadeUp}
          custom={0.1}
        >
          {data.description}
        </motion.p>
      </motion.header>

      <motion.hr
        className="border-gray-100"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{
          width: "100%",
          opacity: 1,
          transition: { duration: 0.6, delay: 0.2 },
        }}
        viewport={{ once: true }}
      />

      {/* ===== Personal Info & Language ===== */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Info */}
        <motion.div variants={fadeUp} custom={0.1}>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            {isEn ? "Personal Information" : "个人信息"}
          </h3>
          <dl className="space-y-2">
            {data.personalInformation.map((e) => (
              <motion.div
                key={e.label}
                className="flex"
                variants={fadeUp}
                custom={0.15}
              >
                <dt className="w-28 text-gray-500">{e.label}</dt>
                <dd className="text-gray-900">{e.value}</dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>

        {/* Languages */}
        <motion.div custom={0.2}>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            {isEn ? "Language" : "语言能力"}
          </h3>
          <div className="space-y-4">
            {data.language.map((e, idx) => (
              <motion.div
                variants={fadeUp}
                custom={0.25 + idx * 0.05}
                key={e.label}
              >
                <div className="flex items-center justify-between mb-1">
                  <strong className="text-gray-800">{e.label}</strong>
                  <span className="text-sm text-gray-500">{e.value}</span>
                </div>

                {/* 圆点容器 */}
                <motion.div
                  className="flex items-center"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.05, // 控制单个圆点的延迟间隔
                      },
                    },
                  }}
                  initial="hidden"
                  whileInView="show"
                >
                  {[...Array(10).keys()].map((i) => (
                    <motion.span
                      key={`${e.label}-${i}`}
                      variants={{
                        hidden: { opacity: 0, scale: 0.6 },
                        show: {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.25, ease: "easeOut" },
                        },
                      }}
                      className={clsx(
                        "inline-block mr-[0.28em] w-[0.8em] h-[0.8em] rounded-full border border-[#c0e3e7]",
                        e.score > i && "bg-[#c0e3e7]"
                      )}
                    />
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <hr className="border-gray-100" />

      {/* ===== Core Stack (自带动效) ===== */}
      <CoreStack stack={data.professionalSkills} />

      <hr className="border-gray-100" />

      {/* ===== Styled List ===== */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-lg font-semibold mb-4 text-gray-800"
          variants={fadeUp}
          custom={0}
        >
          {isEn ? "Styled List" : "特长能力"}
        </motion.h3>

        <motion.ul
          className="space-y-2"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
        >
          {data.styledList.map((item) => (
            <motion.li
              key={item}
              className="flex items-center text-gray-700 leading-relaxed"
              variants={fadeUp}
            >
              <Check className="w-5 h-5 text-[#c0e3e7] mr-2 shrink-0" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </motion.div>
  );
};

export default Profile;
