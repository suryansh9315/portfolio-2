import { Links, Socials } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="relative h-[340px]" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
      <div className="flex items-center justify-between px-20 py-20 bg-[#FFF] fixed h-[340px] w-full bottom-0 border-t border-gray-300">
        <div>
          <Image
            src={{ src: "/logo.jpeg", height: 63, width: 250 }}
            alt="logo"
            unoptimized
            className=""
          />
        </div>
        <div className="flex gap-14">
          <div>
            {Links.map((link, index) => (
              <div
                key={index}
                className="text-3xl cursor-pointer font-poppins opacity-50 hover:opacity-100 transition-all duration-200"
              >
                <Link href={link.path}>{link.name}</Link>
              </div>
            ))}
          </div>
          <div>
            {Socials.map((social, index) => (
              <div
                key={index}
                className="text-3xl cursor-pointer font-poppins opacity-50 hover:opacity-100 transition-all duration-200"
              >
                <Link href={social.link}>{social.name}</Link>
              </div>
            ))}
          </div>
        </div>
        <div className="text-xl font-quick cursor-pointer">
          <div>suryansh.sharma9315@gmail.com</div>
          <div>+91 9315566594</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
