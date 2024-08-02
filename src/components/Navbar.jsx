"use client";
import { Links, Socials } from "@/utils/data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import FlipText from "./FlipText";
import useStore from "@/stores/GlobalStore";
import { useRouter } from "next/navigation";

const variants = {
  open: {
    height: 650,
    width: 350,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    height: 40,
    width: 120,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const variants2 = {
  open: {
    opacity: 0,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    opacity: 1,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { setContactOpen } = useStore();
  const router = useRouter()

  return (
    <div className="w-screen bg-white" id="home">
      <div className=" px-10 py-6 flex items-center justify-between">
        <motion.div
          layoutId="loader_anim_1"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src={{ src: "/logo_black.png", height: 63, width: 250 }}
            alt="logo"
            unoptimized
            className="w-[150px] h-[38px] sm:w-[200px] sm:h-[50px] md:w-[250px] md:h-[63px] "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1, ease: [0.76, 0, 0.24, 1.4] }}
          className="text-white flex gap-4 items-center justify-center relative"
        >
          <motion.div
            onClick={setContactOpen}
            className="z-10 font-poppins bg-[#FBC200] hover:bg-[#FFD957] transition-colors duration-300 text-black w-[140px] h-[40px] rounded-lg hidden sm:flex items-center justify-center cursor-pointer text-sm"
          >
            contact now
          </motion.div>
          <motion.div
            variants={variants2}
            animate={isActive ? "open" : "closed"}
            initial="closed"
            onClick={() => setIsActive(!isActive)}
            className={`bg-[#00249C] hover:bg-[#0030CF] transition-colors duration-300 w-[120px] h-[40px] rounded-lg flex items-center justify-center text-sm cursor-pointer z-20 ${
              isActive && "pointer-events-none"
            } font-poppins`}
          >
            menu
            <span className="ml-3">
              <IoMenuOutline size={18} />
            </span>
          </motion.div>
          <motion.div
            variants={variants}
            animate={isActive ? "open" : "closed"}
            initial="closed"
            className="absolute w-[350px] h-[650px] rounded-lg bg-[#00249C] top-0 right-0 z-[15]"
          >
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  exit={{ opacity: 0, transition: { duration: 0.5 } }}
                  className=" bg-[#00249C] rounded-2xl h-full px-10 py-14 relative font-poppins"
                >
                  <motion.div className="absolute right-5 top-5 cursor-pointer">
                    <IoClose onClick={() => setIsActive(!isActive)} size={24} />
                  </motion.div>
                  <motion.div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-3">
                      {Links.map((link, index) => (
                        <div
                          key={index}
                          className="text-white text-3xl cursor-pointer"
                        >
                          <Link
                            href={link.id}
                            onClick={(e) => {
                              e.preventDefault();
                              if (link.name === "home") {
                                setIsActive(!isActive);
                                router.push(link.path);
                                return;
                              }
                              if (link.name === "contact") {
                                setContactOpen();
                                return;
                              }
                              if (link.name === "blogs") {
                                setIsActive(!isActive);
                                router.push(link.path);
                                return;
                              }
                              setIsActive(!isActive);
                              setTimeout(() => {
                                document
                                  .getElementById(link.id.substring(1))
                                  .scrollIntoView({ behavior: "smooth" });
                              }, 1000);
                            }}
                          >
                            <FlipText
                              duration={0.25}
                              stagger={0.025}
                              classes={"h-[40px] w-[120px]"}
                            >
                              {link.name}
                            </FlipText>
                          </Link>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {Socials.map((social, index) => (
                        <div
                          key={index}
                          className="text-white text-xl cursor-pointer"
                        >
                          <a href={social.link} target="_blank">
                            <FlipText
                              duration={0.25}
                              stagger={0.025}
                              classes={"h-[25px] w-[110px] "}
                            >
                              {social.name}
                            </FlipText>
                          </a>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
