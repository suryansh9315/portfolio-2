"use client";
import { Blogs } from "@/utils/data";
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
    delay: 1,
  },
};

const Hero = () => {
  return (
    <>
      <div className="w-screen mt-[60px] flex pb-10 justify-center bg-white">
        <div className="flex flex-col gap-6 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl leading-tight tracking-tight text-center font-quick w-[70%]"
          >
            Welcome to our Blogs
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="text-center w-1/2 font-poppins text-gray-400"
          >
            Browse our articles and newsworthy content to gain insights into our
            work and industry expertise.
          </motion.div>
        </div>
      </div>
      <div className="w-screen max-w-[1600px] px-10 my-0 xs:my-10">
        <motion.div
          initial={variants.initial}
          whileInView={variants.screen}
          transition={variants.transition}
          viewport={{ once: true }}
          className="group flex cursor-pointer flex-col sm:flex-row gap-3"
        >
          <div className="w-full lg:w-1/2 object-cover h-[250px] xs:h-[300px] sm:h-[500px] rounded-md overflow-hidden">
            <Image
              src={{ src: Blogs[1].image, height: 200, width: 200 }}
              alt="logo"
              unoptimized
              className="w-full object-cover h-[250px] xs:h-[300px] sm:h-[500px] rounded-md group-hover:scale-110 transition-all duration-300"
            />
          </div>
          <div className="w-full sm:w-0 overflow-hidden lg:w-1/2 flex flex-col sm:h-[500px] justify-between pl-0 lg:pl-10 gap-5 sm:gap-0">
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 items-center justify-between sm:justify-start">
                <div className="bg-[#f2f2f2] px-5 py-2 rounded-md font-poppins">
                  {Blogs[4].date}
                </div>
                <div className="font-quickLight text-base">
                  Written By{" "}
                  <span className="font-quick">{Blogs[4].author}</span>
                </div>
              </div>
              <div className="text-xl xs:text-2xl md:text-4xl font-quickLight group-hover:text-[#00249C] transition-all duration-200">
                {Blogs[4].title}
              </div>
              <div className="hidden xs:flex font-sans text-base sm:text-lg font-light">
                {Blogs[4].description}
              </div>
            </div>
            <div className="hidden xs:flex gap-3 flex-wrap">
              {["Tech", "Javascript", "React"].map((tag, i) => (
                <div
                  className="px-3 py-2 rounded-md border border-gray-300 font-quick"
                  key={i}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
