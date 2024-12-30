import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between bg-[#171a29] text-white p-4 mt-5 ">
      <p className="text-sm">Built with 🧡 by Shahnawaz Alam</p>
      <div className="flex gap-5 ">
        <a
          className="hover:underline  transition-all duration-200 text-sm"
          href="https://github.com/shahnawazAlam3641/monkey-delivers"
          target="_blank"
        >
          Github
        </a>
        <a
          className="hover:underline  transition-all duration-200 text-sm"
          href="https://www.linkedin.com/in/alam-shahnawaz/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Footer;
