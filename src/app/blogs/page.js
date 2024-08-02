"use client";
import { Blogs } from "@/utils/data";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

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

const BlogsPage = () => {
  const [tags, setTags] = useState([
    { name: "All", active: true },
    { name: "System Design", active: false },
    { name: "React", active: false },
    { name: "Next.js", active: false },
    { name: "Javascript", active: false },
    { name: "Web Development", active: false },
    { name: "HTML/CSS", active: false },
    { name: "Java", active: false },
    { name: "App Development", active: false },
    { name: "Python", active: false },
    { name: "AL/ML", active: false },
    { name: "UI/UX Design", active: false },
    { name: "DBMS", active: false },
    { name: "Networking", active: false },
    { name: "C++", active: false },
    { name: "Framer Motion", active: false },
    { name: "GSAP", active: false },
  ]);

  const handleUpdate = (tag) => {
    const updatedTags = tags.map(item => {
      return item.name === tag.name ? { name: item.name, active: !item.active } : item
    })
    setTags(updatedTags)
  }

  return (
    <div className="flex flex-col items-center">
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
      <motion.div
        initial={variants.initial}
        whileInView={variants.screen}
        transition={variants.transition}
        viewport={{ once: true }}
        className="w-screen max-w-[1600px] px-10 flex flex-wrap gap-1 xs:gap-3 mt-10"
      >
        {tags.map((tag, i) => (
          <div
            key={i}
            className={`px-3 py-1 xs:px-5 xs:py-2 rounded-full border-[2px] border-black cursor-pointer font-quick ${tag.active ? "bg-black text-white" : "bg-white text-black"
              } hover:bg-black hover:text-white transition-all duration-300`}
            onClick={() => handleUpdate(tag)}
          >
            {tag.name}
          </div>
        ))}
      </motion.div>
      <div className="px-10 w-screen max-w-[1600px] flex flex-wrap my-10 justify-between gap-1 md:gap-3">
        {[...Blogs, ...Blogs].map((blog, i) => (
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            key={i}
            className="group w-full sm:w-[48%] xl:w-[32%] mb-8 sm:mb-14 flex flex-col gap-3 xs:gap-5 cursor-pointer"
          >
            <div className="w-full object-cover h-[250px] xs:h-[300px] md:h-[350px] rounded-md overflow-hidden">
              <Image
                src={{ src: blog.image, height: 200, width: 200 }}
                alt="logo"
                unoptimized
                className="w-full object-cover h-[250px] xs:h-[300px] md:h-[350px] rounded-md hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col gap-1 xs:gap-3">
              <div className="flex gap-2 md:gap-5 items-center justify-between sm:justify-start">
                <div className="bg-[#f2f2f2] px-2 md:px-5 py-2 rounded-md font-poppins">
                  {blog.date}
                </div>
                <div className="font-quickLight text-base">
                  Written By <span className="font-quick">{blog.author}</span>
                </div>
              </div>
              <div className="text-xl xs:text-2xl md:text-4xl font-quickLight group-hover:text-[#00249C] transition-all duration-200">
                {blog.title}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-screen mb-20 flex justify-center bg-white">
        <motion.div
          initial={variants.initial}
          whileInView={variants.screen}
          transition={variants.transition}
          viewport={{ once: true }}
          className="text-2xl leading-tight tracking-tight text-center font-quickLight cursor-pointer"
        >
          Show More
        </motion.div>
      </div>
    </div>
  );
};

export default BlogsPage;
