"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

const variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  screen: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.3,
    ease: "easeIn",
    delay: 0.5,
  },
};

const Tags = ({ tags }) => {
  const [tagsList, setTags] = useState(tags);

  const handleUpdate = (tag) => {
    const updatedTags = tagsList.map((item) => {
      return item.name === tag.name
        ? { name: item.name, active: !item.active }
        : item;
    });
    setTags(updatedTags);
  };

  return (
    <motion.div
      initial={variants.initial}
      whileInView={variants.screen}
      transition={variants.transition}
      viewport={{ once: true }}
      className="w-screen max-w-[1600px] px-10 flex flex-wrap gap-1 xs:gap-3 mt-10"
    >
      {tagsList.map((tag, i) => (
        <div
          key={i}
          className={`px-3 py-1 xs:px-5 xs:py-2 rounded-full border-[2px] border-black cursor-pointer font-quick ${
            tag.active ? "bg-black text-white" : "bg-white text-black"
          } hover:bg-black hover:text-white transition-all duration-300`}
          onClick={() => handleUpdate(tag)}
        >
          {tag.name}
        </div>
      ))}
    </motion.div>
  );
};

export default Tags;
