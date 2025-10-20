"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "sonner";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay } as const,
  }),
};

const Contact: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, ...formData }),
      });

      const data = await res.json();
      console.log("Server Response:", data);

      // ✅ reset 表单和 captcha
      setFormData({ name: "", email: "", message: "" });
      setToken(null);
      recaptchaRef.current?.reset();
      toast.success("Your message has been submitted!");
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      className="mx-auto bg-white shadow-md rounded-2xl p-8 md:p-10 border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* ===== Header ===== */}
      <motion.h3
        className="text-2xl font-bold mb-4 text-gray-900"
        variants={fadeUp}
        custom={0}
      >
        CONTACT ME
      </motion.h3>

      <motion.h4
        className="text-gray-600 mb-8 text-sm md:text-base"
        variants={fadeUp}
        custom={0.1}
      >
        Feel free to contact me in case of any question
      </motion.h4>

      {/* ===== Form ===== */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-5"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
        }}
      >
        {/* Name */}
        <motion.div variants={fadeUp} custom={0.15}>
          <label className="block text-gray-700 mb-1 text-sm font-medium">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-[#f3f3f3] border-0 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#c0e3e7] focus:outline-none"
            placeholder="Enter your name"
          />
        </motion.div>

        {/* Email */}
        <motion.div variants={fadeUp} custom={0.25}>
          <label className="block text-gray-700 mb-1 text-sm font-medium">
            Your Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-[#f3f3f3] border-0 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#c0e3e7] focus:outline-none"
            placeholder="Enter your email"
          />
        </motion.div>

        {/* Message */}
        <motion.div variants={fadeUp} custom={0.35}>
          <label className="block text-gray-700 mb-1 text-sm font-medium">
            Your Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-[#f3f3f3] border-0 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#c0e3e7] focus:outline-none resize-none"
            placeholder="Write your message..."
          />
        </motion.div>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          onChange={setToken}
        />

        {/* Submit Button */}
        <motion.div variants={fadeUp} custom={0.45}>
          <motion.button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center space-x-2 bg-[#c0e3e7] text-gray-900 px-5 py-2 rounded-full hover:shadow-md hover:bg-[#a8d7dc] transition cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-4 h-4" />
            <span>{loading ? "Sending..." : "Send"}</span>
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
