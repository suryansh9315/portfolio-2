"use client";
import { Services } from "@/utils/data";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

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

const HomeServices = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (activeIndex == 6) {
        setActiveIndex(1);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }, 2000);
    return () => clearInterval(intervalID);
  }, [activeIndex]);

  return (
    <div className="px-10" id="services">
      <div>
        <motion.div className="font-suiss text-2xl">03</motion.div>
        <motion.div
          initial={variants.initial}
          whileInView={variants.screen}
          transition={variants.transition}
          viewport={{ once: true }}
          className="text-3xl xs:text-4xl lg:text-5xl  leading-tight tracking-tight font-quick"
        >
          What I offer
        </motion.div>
      </div>
      <div className="flex my-6 sm:my-14 items-center h-full flex-col lg:flex-row gap-10 sm:gap-20 lg:gap-0">
        <div className="w-full lg:w-1/2 h-full overflow-hidden">
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="w-full h-[600px] overflow-hidden"
          >
            {Services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 0 }}
                animate={{ y: (activeIndex - 1) * -600 }}
                transition={{
                  duration: 0.4,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="w-full h-full rounded-md shadow-md"
              >
                <Image
                  src={service.image}
                  className="w-full h-full rounded-md shadow-md object-cover"
                  width={100}
                  height={100}
                  alt="Image"
                  unoptimized
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:items-start gap-6 lg:pl-28">
          {Services.map((service, index) => (
            <motion.div
              initial={variants.initial}
              whileInView={variants.screen}
              transition={{
                duration: 0.3,
                ease: "easeIn",
                delay: 0.2 + (0.02*index),
              }}
              className={`text-2xl xs:text-3xl sm:text-5xl lg:text-4xl font-poppins cursor-pointer ${
                activeIndex - 1 == index ? "text-[#FBC200]" : ""
              }`}
              key={index}
            >
              {service.name}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
