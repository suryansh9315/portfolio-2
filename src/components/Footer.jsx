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
      className="relative h-[650px] sm:h-[600px]"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div className="px-10 py-10 bg-[#f2f2f2] fixed h-[650px] sm:h-[600px] w-full bottom-0 border-t border-gray-300">
        <div className="flex h-full justify-between flex-col pt-5">
          <div className="flex w-full justify-between px-0 lg:px-20">
            <div className="flex gap-10 md:gap-20 flex-col sm:flex-row">
              <motion.div className="flex flex-col gap-2">
                <div className="text-xl sm:text-2xl font-poppins opacity-50">
                  Sitemap
                </div>
                {Links.map((link, index) => (
                  <motion.div
                    key={index}
                    className="text-xl sm:text-2xl cursor-pointer font-poppins"
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
              <motion.div className="flex flex-col gap-2">
                <div className="text-xl sm:text-2xl font-poppins opacity-50">
                  Follow us
                </div>
                {Socials.map((social, index) => (
                  <motion.div
                    key={index}
                    className="text-xl sm:text-2xl cursor-pointer font-poppins"
                  >
                    <a href={social.link} target="_blank">
                      {social.name}
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-xl sm:text-2xl font-poppins opacity-50">
                Company
              </div>
              <div className="text-xl sm:text-2xl cursor-pointer font-poppins">
                Dilshad Garden
              </div>
              <div className="text-xl sm:text-2xl cursor-pointer font-poppins">
                Delhi, 201004
              </div>
              <div className="text-xl sm:text-2xl cursor-pointer font-poppins">
                +91 9315566594
              </div>
              <div className="text-xl sm:text-2xl cursor-pointer font-poppins">
                info@deqube.co.in
              </div>
            </div>
          </div>
          <div>
            <div className="w-full bg-gray-300 h-[1px] mb-10" />
            <div className="flex items-end justify-center w-full xs:justify-between">
              <div className="font-quick text-lg sm:text-2xl xs:flex hidden">@ Deqube 2024</div>
              <div>
                <Image
                  src={{ src: "/logo_black.png", height: 114, width: 470 }}
                  alt="logo"
                  unoptimized
                  className="h-[65px] w-[270px] md:h-[90px] md:w-[370px] lg:h-[114px] lg:w-[470px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
