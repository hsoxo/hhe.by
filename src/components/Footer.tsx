"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center text-gray-400 text-sm mt-10">
      © 2025, Built with{" "}
      <a
        className="text-[#4b9da9] font-medium"
        href="https://nextjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Next.js
      </a>{" "}
      & ❤️
    </footer>
  );
};

export default Footer;
