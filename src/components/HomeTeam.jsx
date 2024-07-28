"use client";
import { Team } from "@/utils/data";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import useMeasure from "react-use-measure";

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

const HomeTeam = () => {
  let [ref, { width }] = useMeasure();
  const xTranslate = useMotionValue(0);

  useEffect(() => {
    let finalPosition = -4600;
    let controls = animate(xTranslate, [0, finalPosition], {
      ease: "linear",
      duration: 50,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslate, width]);

  return (
    <div className="my-20" id="team">
      <div className="px-10">
        <motion.div className="font-suiss text-2xl">04</motion.div>
        <motion.div
          initial={variants.initial}
          whileInView={variants.screen}
          transition={variants.transition}
          viewport={{ once: true }}
          className="text-3xl xs:text-4xl lg:text-5xl  leading-tight tracking-tight font-quick"
        >
          Meet our team
        </motion.div>
      </div>
      <motion.div
        style={{ x: xTranslate }}
        initial={variants.initial}
        whileInView={variants.screen}
        transition={variants.transition}
        viewport={{ once: true }}
        className="flex gap-[10px] flex-nowrap my-5 md:my-10"
        ref={ref}
      >
        {[...Team, ...Team].map((member, index) => (
          <div key={index} className="">
            <motion.div>
              <Image
                src={member.image}
                className="min-w-[450px] h-[500px] rounded-md shadow object-cover mb-5"
                width={100}
                height={100}
                alt="Image"
                unoptimized
              />
            </motion.div>
            <div className="text-2xl font-quick">{member.name}</div>
            <div className="text-xl font-poppins text-gray-500">
              {member.role}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomeTeam;
