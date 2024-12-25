"use client";
import useStore from "@/stores/GlobalStore";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import useWindowSize from "@/hooks/useWindowSize";
import SmoothScroll, { Lenis } from "./SmoothScroll";
import { usePathname } from "next/navigation";
import HomeContact from "./HomeContact";
import ResetLenisScroll from "./ResetLenisScroll";

const Loader = ({ children }) => {
  const { loading, setLoadingFalse } = useStore();
  const { width } = useWindowSize();
  const pathname = usePathname()

  return (
    <div>
      <AnimatePresence>
        {loading ? (
          <motion.div className="flex items-center justify-center h-screen w-screen">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                onAnimationComplete={setLoadingFalse}
                className=""
                layoutId="loader_anim_1"
              >
                <Image
                  src={{ src: "/images/logo.png", height: 63, width: 250 }}
                  alt="logo"
                  unoptimized
                  className=""
                />
              </motion.div>
              {width > 800 && pathname === "/" && (
                <motion.video
                  layoutId="loader_anim_2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  src="/deqube_2.mp4"
                  height="250"
                  width="300"
                  className="object-cover rounded-lg h-[250px] w-[300px] absolute top-[65px] -right-[252px]"
                  autoPlay
                  loop
                  muted
                ></motion.video>
              )}
            </div>
          </motion.div>
        ) : (
          <>
            <SmoothScroll>
              <ResetLenisScroll />
              {width > 1200 && <Cursor />}
              <Navbar />
              <HomeContact />
              {children}
              <Footer />
            </SmoothScroll>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loader;
