"use client";
import { FAQs } from "@/utils/contact";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowDownLong } from "react-icons/fa6";

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

const HomeFAQs = () => {
  return (
    <div className="px-10 mt-20">
      <div>
        <motion.div className="font-suiss text-2xl">05</motion.div>
        <motion.div
          initial={variants.initial}
          whileInView={variants.screen}
          transition={variants.transition}
          viewport={{ once: true }}
          className="text-5xl leading-tight tracking-tight font-quick"
        >
          Frequently asked questions
        </motion.div>
      </div>
      <div className="my-14">
        {FAQs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

const FAQ = ({ faq, index }) => {
  const [answer, setAnswer] = useState(false);

  return (
    <motion.div
      className={`w-full flex justify-between pb-8 pt-12 gap-20 border-t border-gray-200 transition-all ${
        index == 6 ? "" : ""
      }`}
    >
      <div className="flex gap-20 ">
        <div className="text-2xl font-oswald text-gray-300">0{index + 1}</div>
        <div className="gap-5 flex flex-col">
          <div className="text-2xl font-sans font-normal">{faq.question}</div>
          <AnimatePresence>
            {answer && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-lg font-poppins text-gray-400"
              >
                {faq.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <motion.div
        onClick={() => setAnswer(!answer)}
        className="h-[50px] min-w-[50px] rounded-full flex items-center justify-center bg-[#f5f5f5]"
        animate={{ rotateX: answer ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowDownLong />
      </motion.div>
    </motion.div>
  );
};

export default HomeFAQs;
