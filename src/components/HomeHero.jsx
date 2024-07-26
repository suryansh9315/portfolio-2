"use client";
import useStore from "@/stores/GlobalStore";
import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeHero = () => {
  const { setContactOpen } = useStore();

  return (
    <>
      <div className="w-screen h-[50vh] flex items-end justify-center pb-10 bg-white">
        <div className="flex flex-col gap-6 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1, ease: [0.76, 0, 0.24, 1] }}
            className="text-5xl leading-tight tracking-tight text-center font-quick w-[70%]"
          >
            Transforming Ideas into Powerful Software Driving Your Success
            Forward
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.1, ease: [0.76, 0, 0.24, 1] }}
            className="text-center w-1/2 font-poppins text-gray-400"
          >
            Welcome to De.Qube, where creativity meets code. Our passionate team
            of developers, designers, and strategists collaborates seamlessly to
            turn visionary concepts into robust software solutions
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
            onClick={setContactOpen}
            className="hover:bg-[#00249C] transition-colors duration-300 z-10 font-poppins px-10 py-4 text-white font-semibold bg-black rounded-lg cursor-pointer text-base flex gap-3 items-center justify-center"
          >
            Book a demo
            <span>
              <FaArrowRightLong />
            </span>
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen py-10 flex items-center justify-center">
        <motion.video
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1.3, ease: [0.76, 0, 0.24, 1] }}
          src="/deqube.mp4"
          height="100%"
          width="95%"
          className="object-cover rounded-lg"
          autoPlay
          loop
          muted
        ></motion.video>
      </div>
    </>
  );
};

export default HomeHero;
