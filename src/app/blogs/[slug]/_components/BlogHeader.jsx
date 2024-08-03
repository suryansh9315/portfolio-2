"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import useMeasure from "react-use-measure";

const BlogHeader = ({
  title,
  descriptionArray,
  author,
  date,
  tags,
  bannerImage,
  bannerImageWidth,
  bannerImageHeight
}) => {
  const router = useRouter()
  const description = useMemo(() => {
    let temp = "";
    for (let i = 0; i < descriptionArray.length; i++) {
      temp += descriptionArray[i].plain_text;
    }
    return temp;
  }, [descriptionArray]);
  let [ref, { width }] = useMeasure();


  return (
    <div className="flex flex-col gap-10">
      <div className="w-full flex flex-col md:flex-row gap-5 md:gap-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="w-full md:w-1/4 flex gap-4 h-[50px] items-center cursor-pointer"
          onClick={() => router.push("/blogs")}
        >
          <FaArrowLeftLong size={20} />
          <span className="font-poppins text-xl">All Blogs</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 1, ease: [0.76, 0, 0.24, 1] }}
          className="w-full md:w-3/4 flex flex-col gap-5"
        >
          <div className="font-quickLight text-4xl sm:text-6xl">{title}</div>
          <div className="font-quickLight text-xl sm:text-2xl">
            Written by <span className="font-quick">{author}</span> on{" "}
            <span className="font-quick">{date}</span>
          </div>
          <div className="font-sans text-base mr-0 md:mr-20">{description}</div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
        className="w-full"
        ref={ref}
      >
        <Image
          unoptimized
          className={`w-full h-[${(width*bannerImageHeight)/bannerImageWidth}px] object-cover object-top rounded-2xl`}
          src={bannerImage}
          height={400}
          width={500}
          alt="Image"
        />
      </motion.div>
    </div>
  );
};

export default BlogHeader;
