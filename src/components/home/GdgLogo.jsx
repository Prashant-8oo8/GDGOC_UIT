import React from "react";
import { motion } from "framer-motion";
import Video from "./Video";

const GdgLogo = () => {
  // Animation variant for up and down float
  const floatAnimation = {
    animate: {
      y: [0, -10, 0, 10, 0], // up, center, down, center
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-[6vw] sm:gap-[3vw] mt-[4vw]">
      {/* Left GDG Part - Animated */}
      <motion.div
        className="w-[40vw] sm:w-[24vw] md:w-[18vw] lg:w-[16vw] h-auto"
        {...floatAnimation}
      >
        <svg viewBox="0 0 300 700" className="w-full h-auto">
          <g transform="translate(80, -30)">
            <path
              d="M130 256 L250 380"
              stroke="#4285F4"
              strokeWidth="180"
              strokeLinecap="round"
            />
            <path
              d="M130 256 L250 132"
              stroke="#EA4335"
              strokeWidth="180"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </motion.div>

      {/* Center Video */}
     

      {/* Right GDG Part - Animated */}
      <motion.div
        className="w-[40vw] sm:w-[24vw] md:w-[18vw] lg:w-[16vw] h-auto"
        {...floatAnimation}
      >
        <svg viewBox="0 0 300 700" className="w-full h-auto">
          <g transform="translate(-300, 200)">
            <path
              d="M382 256 L262 132"
              stroke="#34A853"
              strokeWidth="180"
              strokeLinecap="round"
            />
            <path
              d="M382 256 L262 380"
              stroke="#FBBC05"
              strokeWidth="180"
              strokeLinecap="round"
            />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default GdgLogo;
