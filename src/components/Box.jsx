import React from "react";
import { motion } from "framer-motion";

const Box = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      scrollToTop();
    }
  };

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      className="fixed top-16 right-8 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-blue-600 rounded-lg shadow-lg cursor-pointer z-[100]"
      style={{ transformOrigin: "center center" }}
      initial={{ scale: 1, rotate: 0, borderRadius: "1rem" }}
      animate={{
        rotate: [0, 15, -15, 0],
        scale: [1, 1.1, 1],
        boxShadow: [
          "0px 0px 10px rgba(0, 0, 0, 0.1)",
          "0px 0px 20px rgba(33, 150, 243, 0.5)",
          "0px 0px 10px rgba(0, 0, 0, 0.1)",
        ],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      whileHover={{
        scale: 1.2,
        borderRadius: "50%",
        boxShadow: "0px 0px 30px rgba(33, 150, 243, 0.8)",
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      aria-label="Scroll to top button"
      title="Scroll to top"
    />
  );
};

export default Box;
