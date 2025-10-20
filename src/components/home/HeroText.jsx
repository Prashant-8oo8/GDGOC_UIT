import React from "react";
import Video from "./Video";
import { motion } from "framer-motion";

function HeroText() {
  const floatAnimation = {
    animate: {
      y: [0, -10, 0, 10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="font-serif text-center text-white px-4 sm:px-6 max-w-[1200px] mx-auto">
      {/* Flex container: Arms + Text */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
        {/* Left Arm */}
        <motion.div
          className="flex-shrink-0 w-[30vw] max-w-[120px] sm:w-[12vw] md:w-[10vw] lg:w-[8vw] h-auto"
          {...floatAnimation}
        >
          <svg viewBox="0 0 250 800" className="w-full h-auto">
            <g transform="translate(-40, -30)">
              <path
                d="M130 256 L250 380"
                stroke="#4285F4"
                strokeWidth="80"
                strokeLinecap="round"
              />
              <path
                d="M130 256 L250 132"
                stroke="#EA4335"
                strokeWidth="80"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </motion.div>

        {/* Center Text */}
        <div
          className="leading-tight uppercase space-y-2 flex flex-col items-center whitespace-nowrap text-black"
          style={{ fontSize: "clamp(1.5rem, 5vw, 3.5rem)" }}
        >
          <div>GDG</div>
          <div className="flex items-center justify-center flex-wrap gap-3 max-w-[320px] sm:max-w-none">
            On{" "}
            <span className="h-[9vw] w-[18vw] sm:h-[7vw] sm:w-[14vw] md:h-[6vw] md:w-[12vw] rounded-full overflow-hidden shadow-xl border-4 border-white">
              <Video />
            </span>{" "}
            Campus
          </div>
          <div>UIT</div>
        </div>

        {/* Right Arm */}
        <motion.div
          className="flex-shrink-0 w-[30vw] max-w-[120px] sm:w-[12vw] md:w-[10vw] lg:w-[8vw] h-auto"
          {...floatAnimation}
        >
          <svg viewBox="0 0 250 800" className="w-full h-auto">
            <g transform="translate(-220, 320)">
              <path
                d="M382 256 L262 132"
                stroke="#34A853"
                strokeWidth="80"
                strokeLinecap="round"
              />
              <path
                d="M382 256 L262 380"
                stroke="#FBBC05"
                strokeWidth="80"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroText;
