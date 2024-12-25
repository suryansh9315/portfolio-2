"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

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

// const Word = ({ children, range, progress }) => {
//   const opacity = useTransform(progress, range, [0, 1]);

//   return (
//     <span className="relative mr-3 mt-3 text-xl font-poppins">
//       <span className="absolute opacity-10">{children}</span>
//       <motion.span style={{ opacity }}>{children}</motion.span>
//     </span>
//   );
// };

const HomeProducts = () => {
  const textRef = useRef();
  //   const { scrollYProgress } = useScroll({
  //     target: textRef,
  //     offset: ["start 0.8", "start 0.1"],
  //   });

  return (
    <div
      className="px-10 my-20 py-10 bg-[#f2f2f2] flex flex-col lg:gap-5"
      ref={textRef}
      id="products"
    >
      <div className="max-w-7xl">
        <motion.div className="font-suiss text-2xl">01</motion.div>
        <motion.div
          initial={variants.initial}
          whileInView={variants.screen}
          transition={variants.transition}
          viewport={{ once: true }}
          className="text-3xl xs:text-4xl lg:text-5xl leading-tight tracking-tight font-quick"
        >
          Past Experience
        </motion.div>
      </div>
      <div className="w-full flex my-10 flex-col lg:flex-row gap-20 xl:gap-0 items-center justify-center">
        <div className="w-full xl:w-1/2 2xl:w-[900px] flex items-center justify-center h-full">
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="flex items-center justify-center relative"
          >
            <Image
              src={"/images/FH.png"}
              className="w-[500px] md:w-[600px] xl:w-[800px] lg:h-[400px] xl:h-[500px] rounded-md shadow-sm object-cover object-left"
              width={100}
              height={100}
              unoptimized
              alt="Image"
            />
            {/* <motion.div
              initial={variants.initial}
              whileInView={variants.screen}
              transition={variants.transition}
              className="absolute -left-[20px] -top-[40px] shadow-md"
            >
              <Image
                src={"/images/review2.png"}
                className="w-[200px] h-[150px] xl:h-[250px] xl:w-[300px] object-cover"
                width={200}
                height={200}
                unoptimized
                alt="Image"
              />
            </motion.div>
            <motion.div
              initial={variants.initial}
              whileInView={variants.screen}
              transition={variants.transition}
              className="shadow-md absolute -right-[20px] -bottom-[40px] "
            >
              <Image
                src={"/images/review.png"}
                className="w-[200px] h-[150px] xl:h-[250px] xl:w-[300px] object-cover"
                width={300}
                height={250}
                unoptimized
                alt="Image"
              />
            </motion.div> */}
          </motion.div>
        </div>
        <div className="w-full xl:w-1/2 2xl:w-[900px] flex flex-col px-3 items-center gap-3">
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-poppins text-center"
          >
            FixHealth
          </motion.div>
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-xl text-gray-500 font-poppins text-center"
          >
            Frontend Developer (2024 - Present)
          </motion.div>
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-xl text-gray-400 font-poppins w-[90%] text-center"
          >
            Developed and implemented interactive video features using 100ms API
            for seamless real-time video conferencing and communication between
            therapists and patients. Integrated React components to build
            dynamic, responsive user interfaces, enhancing user experience and
            engagement on the platform.
          </motion.div>
        </div>
      </div>
      <div className="w-full flex my-20 flex-col lg:flex-row gap-20 xl:gap-0 items-center justify-center">
        <div className="w-full xl:w-1/2 2xl:w-[900px] flex flex-col items-center gap-3 px-3">
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-poppins text-center"
          >
            ONEV
          </motion.div>
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-xl text-gray-500 font-poppins text-center"
          >
            Software Developer Intern (2023 - 2024)
          </motion.div>
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-xl text-gray-400 font-poppins w-[90%] text-center"
          >
            Implemented an OTP architecture for secure and efficient driver
            authentication during onboarding and login processes. Integrated
            Razorpay payment gateway to facilitate daily payments for drivers.
            Incorporated Firebase push notifications to keep drivers informed
            about important updates, payment confirmations, and attendance
            records.
          </motion.div>
        </div>
        <div className="w-full xl:w-1/2 2xl:w-[900px] flex items-center justify-center h-full">
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="flex items-center justify-center relative"
          >
            <Image
              src={"/images/2.png"}
              className="w-[500px] md:w-[600px] xl:w-[800px] lg:h-[400px] xl:h-[500px] rounded-md shadow-sm object-cover object-left"
              width={100}
              height={100}
              unoptimized
              alt="Image"
            />

            {/* <motion.div
              initial={variants.initial}
              whileInView={variants.screen}
              transition={variants.transition}
              className="absolute -right-[20px] -top-[80px] shadow-md"
            >
              <Image
                src={"/images/auto2.png"}
                className="w-[200px] h-[150px] xl:h-[250px] xl:w-[300px] object-cover object-left"
                width={200}
                height={200}
                unoptimized
                alt="Image"
              />
            </motion.div>
            <motion.div
              initial={variants.initial}
              whileInView={variants.screen}
              transition={variants.transition}
              className="shadow-md absolute -left-[40px] -bottom-[40px] "
            >
              <Image
                src={"/images/auto3.png"}
                className="w-[200px] h-[150px] xl:h-[250px] xl:w-[300px] object-cover object-left"
                width={300}
                height={250}
                unoptimized
                alt="Image"
              />
            </motion.div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
