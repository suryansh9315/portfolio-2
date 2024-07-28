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
      className="px-10 my-20 py-10 bg-[#fff5e3] flex flex-col lg:gap-10"
      ref={textRef}
      id="products"
    >
      <div className="max-w-7xl">
        <motion.div className="font-suiss text-2xl">02</motion.div>
        <motion.div
          initial={variants.initial}
          whileInView={variants.screen}
          transition={variants.transition}
          viewport={{ once: true }}
          className="text-3xl xs:text-4xl lg:text-5xl leading-tight tracking-tight font-quick"
        >
          Our Products
        </motion.div>
      </div>
      <div className="w-full flex my-20 flex-col lg:flex-row gap-20 xl:gap-0 items-center justify-center">
        <div className="w-full xl:w-1/2 2xl:w-[900px] flex items-center justify-center h-full">
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="flex items-center justify-center relative"
          >
            <Image
              src={"/images/project_1.webp"}
              className="w-[500px] md:w-[600px] xl:w-[800px] lg:h-[400px] xl:h-[500px] rounded-md shadow-sm object-cover"
              width={100}
              height={100}
              unoptimized
              alt="Image"
            />

            <motion.div
              initial={variants.initial}
              whileInView={variants.screen}
              transition={variants.transition}
              className="absolute -left-[20px] -top-[40px] shadow-md"
            >
              <Image
                src={"/images/project_2.webp"}
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
                src={"/images/project_3.webp"}
                className="w-[200px] h-[150px] xl:h-[250px] xl:w-[300px] object-cover"
                width={300}
                height={250}
                unoptimized
                alt="Image"
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="w-full xl:w-1/2 2xl:w-[900px] flex flex-col items-center gap-5 md:gap-10">
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-corir"
          >
            Review Reward
          </motion.div>
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-xl text-gray-400 font-poppins w-[90%] text-center"
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
            className="z-10 font-poppins bg-[#FBC200] hover:bg-[#FFD957] transition-colors duration-300 text-black w-[140px] h-[40px] rounded-lg flex items-center justify-center cursor-pointer text-sm"
          >
            learn more
            <span className="ml-3">
              <FaArrowRightLong color="#000" />
            </span>
          </motion.div>
        </div>
      </div>
      <div className="w-full flex my-20 flex-col lg:flex-row gap-20 xl:gap-0 items-center justify-center">
        <div className="w-full xl:w-1/2 2xl:w-[900px] flex flex-col items-center gap-5 md:gap-10">
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-corir"
          >
            Autoflow
          </motion.div>
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            className="text-xl text-gray-400 font-poppins w-[90%] text-center"
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
            className="z-10 font-poppins bg-[#00249C] hover:bg-[#0030CF] transition-colors duration-300 text-white w-[140px] h-[40px] rounded-lg flex items-center justify-center cursor-pointer text-sm"
          >
            learn more
            <span className="ml-3">
              <FaArrowRightLong />
            </span>
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
              src={"/images/project_4.webp"}
              className="w-[500px] md:w-[600px] xl:w-[800px] lg:h-[400px] xl:h-[500px] rounded-md shadow-sm object-cover"
              width={100}
              height={100}
              unoptimized
              alt="Image"
            />

            <motion.div
              initial={variants.initial}
              whileInView={variants.screen}
              transition={variants.transition}
              className="absolute -right-[20px] -top-[80px] shadow-md"
            >
              <Image
                src={"/images/project_4.webp"}
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
              className="shadow-md absolute -left-[40px] -bottom-[40px] "
            >
              <Image
                src={"/images/project_6.webp"}
                className="w-[200px] h-[150px] xl:h-[250px] xl:w-[300px] object-cover"
                width={300}
                height={250}
                unoptimized
                alt="Image"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
