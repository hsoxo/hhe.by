"use client";

import { motion } from "framer-motion";
import CVTimeline from "./Timeline";
import { ProfileData } from "@/types";

const Experiences = ({
  state,
  isEn,
}: {
  state: ProfileData;
  isEn: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-md rounded-2xl p-8"
    >
      <CVTimeline
        title={isEn ? "Work Experience" : "工作经历"}
        data={state.workExperience}
      />
      <hr className="my-6 border-gray-200" />
      <CVTimeline
        title={isEn ? "Education" : "教育经历"}
        data={state.education}
      />
    </motion.div>
  );
};

export default Experiences;
