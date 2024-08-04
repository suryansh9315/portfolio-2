"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DateOptions } from "@/utils/data";

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
    delay: 0.5,
  },
};

const BlogList = ({ blogs }) => {
  const router = useRouter();

  return (
    <>
      <div className="px-10 w-screen max-w-[1600px] flex flex-wrap my-10 justify-between gap-1 md:gap-3">
        {blogs.slice(1).map((blog, i) => (
          <motion.div
            initial={variants.initial}
            whileInView={variants.screen}
            transition={variants.transition}
            viewport={{ once: true }}
            key={i}
            onClick={() =>
              router.push(
                "/blogs/" + blog.properties.Slug.rich_text[0].plain_text
              )
            }
            className="group w-full sm:w-[48%] xl:w-[32%] mb-8 sm:mb-14 flex flex-col gap-3 xs:gap-5 cursor-pointer"
          >
            <div className="w-full object-cover h-[250px] xs:h-[300px] md:h-[350px] rounded-md overflow-hidden">
              <Image
                src={{
                  src: blog.properties.BannerImage.url,
                  height: 200,
                  width: 200,
                }}
                alt="logo"
                unoptimized
                className="w-full object-cover h-[250px] xs:h-[300px] md:h-[350px] rounded-md hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="flex flex-col gap-1 xs:gap-3">
              <div className="flex gap-2 md:gap-5 items-center justify-between sm:justify-start">
                <div className="bg-[#f2f2f2] px-2 md:px-5 py-2 rounded-md font-poppins">
                  {new Date(blog.created_time).toLocaleDateString('en-US', DateOptions)}
                </div>
                <div className="font-quickLight text-base">
                  Written By{" "}
                  <span className="font-quick">
                    {blog.properties.Author.rich_text[0].plain_text}
                  </span>
                </div>
              </div>
              <div className="text-xl xs:text-2xl md:text-4xl font-quickLight group-hover:text-[#00249C] transition-all duration-200">
                {blog.properties.Title.title[0].plain_text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {/* <div className="w-screen mb-20 flex justify-center bg-white">
        <motion.div
          initial={variants.initial}
          whileInView={variants.screen}
          transition={variants.transition}
          viewport={{ once: true }}
          className="text-2xl leading-tight tracking-tight text-center font-quickLight cursor-pointer"
        >
          Show More
        </motion.div>
      </div> */}
    </>
  );
};

export default BlogList;
