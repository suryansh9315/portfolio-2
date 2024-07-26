"use client";
import useStore from "@/stores/GlobalStore";
import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Cursor from "./Cursor";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const Loader = ({ children }) => {
  const { loading, setLoadingTrue, setLoadingFalse } = useStore();
  const [showAnother, setShowAnother] = useState(false);

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
                  src={{ src: "/logo.jpeg", height: 63, width: 250 }}
                  alt="logo"
                  unoptimized
                  className=""
                />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <>
            <Cursor />
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Loader;
