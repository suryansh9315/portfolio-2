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
      className="px-10 my-20 mb-10 min-h-screen pt-10 bg-[#fff5e3] flex flex-col"
      ref={textRef}
    >
      <div>
        <motion.div className="font-suiss text-2xl">02</motion.div>
        <motion.div
          initial={variants.initial}
          whileInView={variants.screen}
          transition={variants.transition}
          viewport={{ once: true }}
          className="text-5xl leading-tight tracking-tight font-quick"
        >
          Our Products
        </motion.div>
      </div>
      <div className="w-full flex my-28">
        <div className="w-1/2 flex items-center justify-center h-full relative">
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <Image
              src={"/images/project_1.webp"}
              className="w-[80%] rounded-md shadow-sm"
              width={100}
              height={100}
              unoptimized
              alt="Image"
            />
          </motion.div>
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            className="absolute -left-5 -top-10 shadow-md"
          >
            <Image
              src={"/images/project_2.webp"}
              className=""
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
            className="shadow-md absolute -right-10 -bottom-10 "
          >
            <Image
              src={"/images/project_3.webp"}
              className=""
              width={300}
              height={250}
              unoptimized
              alt="Image"
            />
          </motion.div>
        </div>
        <div className="w-1/2 flex flex-col items-center gap-10">
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-6xl font-corir"
          >
            Review Reward
          </motion.div>
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-xl text-gray-400 font-poppins w-[60%] text-center"
          >
            Discover the Ultimate Review Reward Hub: Your go-to destination for
            insightful product reviews and rewarding experiences! At our
            innovative platform, users explore a diverse range of reviews
            spanning electronics, fashion, home goods, and more.
          </motion.div>
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="font-poppins bg-[#FBC200] hover:bg-[#FFD957] transition-colors duration-300 text-black w-[140px] h-[40px] rounded-lg flex items-center justify-center cursor-pointer text-sm"
          >
            learn more
            <span className="ml-3">
              <FaArrowRightLong color="#000" />
            </span>
          </motion.div>
        </div>
      </div>
      <div className="w-full flex my-28">
        <div className="w-[40%] flex flex-col items-center gap-10">
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-6xl font-corir"
          >
            Autoflow
          </motion.div>
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-xl text-gray-400 font-poppins w-[70%] text-center"
          >
            Revolutionize Your Automotive Business with Cutting-Edge Auto SaaS
            Solutions. Our platform offers comprehensive software as a service
            designed specifically for the automotive industry.Seamlessly manage
            inventory, streamline sales processes, and enhance customer
            relationships with our intuitive tools.
          </motion.div>
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="font-poppins bg-[#00249C] hover:bg-[#0030CF] transition-colors duration-300 text-white w-[140px] h-[40px] rounded-lg flex items-center justify-center cursor-pointer text-sm"
          >
            learn more
            <span className="ml-3">
              <FaArrowRightLong />
            </span>
          </motion.div>
        </div>
        <div className="w-[60%] flex items-center justify-center h-full relative">
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <Image
              src={"/images/project_4.webp"}
              className="w-[80%] rounded-md shadow-sm"
              width={100}
              height={100}
              unoptimized
              alt="Image"
            />
          </motion.div>
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            className="absolute -right-5 -top-20 shadow-md"
          >
            <Image
              src={"/images/project_4.webp"}
              className=""
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
            className="shadow-md absolute -left-10 -bottom-10 "
          >
            <Image
              src={"/images/project_6.webp"}
              className=""
              width={300}
              height={250}
              unoptimized
              alt="Image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
