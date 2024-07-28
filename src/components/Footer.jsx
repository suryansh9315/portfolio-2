"use client";
import useStore from "@/stores/GlobalStore";
import { Links, Socials } from "@/utils/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const { setContactOpen } = useStore();

  return (
    <div
      className="relative h-[340px]"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div className="flex xs:flex-row flex-col gap-10 xs:gap-0 items-center justify-evenly lg:justify-between px-0 lg:px-10 xl:px-20 py-20 bg-[#f5f5f5] fixed h-[340px] w-full bottom-0 border-t border-gray-300">
        <motion.div className="">
          <Image
            src={{ src: "/logo_black.png", height: 63, width: 250 }}
            alt="logo"
            unoptimized
            className="w-[150px] h-[38px] sm:w-[200px] sm:h-[50px] md:w-[250px] md:h-[63px] "
          />
        </motion.div>
        <div className="flex gap-7 xl:gap-14">
          <motion.div>
            {Links.map((link, index) => (
              <motion.div
                key={index}
                className="text-xl sm:text-2xl md:text-3xl cursor-pointer font-poppins opacity-50 hover:opacity-100 transition-all duration-200"
              >
                <Link
                  href={link.id}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.name === "contact") {
                      setContactOpen();
                      return;
                    }
                    document
                      .getElementById(link.id.substring(1))
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div>
            {Socials.map((social, index) => (
              <motion.div
                key={index}
                className="text-xl sm:text-2xl md:text-3xl cursor-pointer font-poppins opacity-50 hover:opacity-100 transition-all duration-200"
              >
                <a href={social.link} target="_blank">{social.name}</a>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <motion.div className="text-xl font-quick cursor-pointer lg:flex flex-col hidden">
          <div>suryansh.sharma9315@gmail.com</div>
          <div>+91 9315566594</div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
