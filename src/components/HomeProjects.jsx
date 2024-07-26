"use client";
import { Projects } from "@/utils/data";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

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
    delay: 0.3,
  },
};

const HomeProjects = () => {
  return (
    <div className="px-10 min-h-screen pt-20">
      <div>
        <motion.div
          className="font-suiss text-2xl"
        >
          01
        </motion.div>
        <motion.div
          initial={variants.initial}
          whileInView={variants.screen}
          transition={variants.transition}
          viewport={{ once: true }}
          className="text-5xl leading-tight tracking-tight font-quick"
        >
          Featured Projects
        </motion.div>
      </div>
      <div className="flex flex-wrap py-10 items-center justify-center gap-2">
        {Projects.map((project, index) => (
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            className="w-[49%] px-10 py-10 bg-[#f0f0f0] rounded-lg shadow-sm border border-gray-200"
            key={index}
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 1.5 }}
              transition={{ duration: 0.25 }}
              className=""
            >
              <Image
                src={project.image}
                className="w-full h-full rounded-lg shadow-md"
                width={100}
                height={100}
                unoptimized
                alt="Image"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeProjects;
