"use client";
import { Reviews } from "@/utils/data";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import useMeasure from "react-use-measure";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const variants = {
  initial: {
    opacity: 0,
  },
  screen: {
    opacity: 1,
  },
  transition: {
    duration: 0.3,
    ease: "easeIn",
    delay: 0.3,
  },
};

const HomeReviews = () => {
  let [ref, { width }] = useMeasure();
  const x = useMotionValue(0);
  const [index, setIndex] = useState(0);
  const [animationState, setAnimationState] = useState(false);

  return (
    <div className="py-20 bg-[#f2f2f2] flex flex-col items-center" id="reviews">
      <div className="px-10 w-screen max-w-[1600px]">
        <motion.div className="font-suiss text-2xl">04</motion.div>
        <motion.div
          initial={variants.initial}
          whileInView={variants.screen}
          transition={variants.transition}
          viewport={{ once: true }}
          className="text-3xl xs:text-4xl lg:text-5xl  leading-tight tracking-tight font-quick"
        >
          What my clients say
        </motion.div>
      </div>
      <div className="my-10 flex flex-col items-center justify-center overflow-x-hidden w-screen">
        <div ref={ref} className="w-[98%] max-w-[1600px] overflow-x-hidden">
          <motion.div style={{ x }} className="flex gap-0 md:gap-[1%]">
            {Reviews.map((review, i) => (
              <motion.div
                className={`min-w-[100%] md:min-w-[49%] min-h-[400px] md:min-h-[500px] bg-white rounded p-6 flex flex-col justify-between gap-5`}
                key={i}
              >
                <div className="text-xl lg:text-2xl font-quickLight">
                  {review.review}
                </div>
                <div className="flex gap-5 items-center">
                  <Image
                    src={{ src: review.image, height: 100, width: 100 }}
                    alt="logo"
                    unoptimized
                    className="h-[80px] w-[80px] rounded-[40px] object-cover"
                  />
                  <div>
                    <div className="font-quick text-xl leading-5">
                      {review.name}
                    </div>
                    <div className="font-sans font-normal">
                      {review.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={variants.initial}
          whileInView={variants.screen}
          transition={variants.transition}
          // viewport={{ once: true }}
          className="flex w-screen max-w-[1600px] px-10 justify-center xs:justify-end mt-5 gap-3"
        >
          <div
            onClick={() => {
              const value = width > 768 ? width / 2 : width;
              if (index != 0 && !animationState) {
                setAnimationState(true);
                setIndex(index - 1);
                const animation = animate(x, x.get() + value, {
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                });
                animation.then(() => {
                  setAnimationState(false);
                });
              }
            }}
            className="px-12 py-3 rounded-full border-2 border-black bg-[#f2f2f2] cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
          >
            <FaArrowLeftLong className="" size={24} />
          </div>
          <div
            onClick={() => {
              const max_index = width > 768 ? 2 : 3;
              const value = width > 768 ? width / 2 : width;
              if (index != max_index && !animationState) {
                setAnimationState(true);
                setIndex(index + 1);
                const animation = animate(x, x.get() - value, {
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                });
                animation.then(() => {
                  setAnimationState(false);
                });
              }
            }}
            className="px-12 py-3 rounded-full border-2 border-black bg-[#f2f2f2] cursor-pointer hover:bg-black hover:text-white transition-all duration-300"
          >
            <FaArrowRightLong className="" size={24} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeReviews;
