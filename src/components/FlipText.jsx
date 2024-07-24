"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const FlipText = ({ children, classes, duration, stagger }) => {
  const [hover, setHover] = useState(false);
  return (
    <motion.div
      className={[classes, "relative overflow-hidden"]}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-center w-full h-full">
        {children.split("").map((char, index) => (
          <motion.span
            key={index}
            className="h-full flex items-center justify-center"
            initial={{ y: 0 }}
            animate={{ y: hover ? "-100%" : 0 }}
            transition={{
              delay: stagger * index,
              duration,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
      <div className="flex items-center w-full h-full">
        {children.split("").map((char, index) => (
          <motion.span
            key={index}
            className="h-full flex items-center justify-center"
            initial={{ y: 0 }}
            animate={{ y: hover ? "-100%" : 0 }}
            transition={{
              delay: stagger * index,
              duration,
              ease: "easeInOut",
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default FlipText;
