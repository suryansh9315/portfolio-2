"use client"
import useStore from "@/stores/GlobalStore";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const HomeHero = () => {
  const { setContactOpen } = useStore();

  return (
    <>
      <div className="w-screen h-[50vh] flex items-end justify-center pb-10 bg-white">
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="text-5xl leading-tight tracking-tight text-center font-quick w-[70%]">
            Transforming Ideas into Powerful Software Driving Your Success
            Forward
          </div>
          <div className="text-center w-1/2 font-poppins text-gray-400">
            Welcome to De.Qube, where creativity meets code. Our passionate team
            of developers, designers, and strategists collaborates seamlessly to
            turn visionary concepts into robust software solutions
          </div>
          <div onClick={setContactOpen} className="z-10 font-poppins px-10 py-4 text-white font-semibold bg-black rounded-lg cursor-pointer text-base flex gap-3 items-center justify-center">
            Book a demo
            <span>
              <FaArrowRightLong />
            </span>
          </div>
        </div>
      </div>
      <div className="w-screen h-screen py-10 flex items-center justify-center">
        <video
          src="/deqube.mp4"
          height="100%"
          width="95%"
          className="object-cover rounded-lg"
          autoPlay
          loop
          muted
        ></video>
      </div>
    </>
  );
};

export default HomeHero;
