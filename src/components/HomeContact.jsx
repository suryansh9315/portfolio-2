"use client";
import useStore from "@/stores/GlobalStore";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Tag from "./Tag";
import Image from "next/image";
import { FaCalendar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const HomeContact = () => {
  const { contactOpen, setContactOpen } = useStore();
  const [tags, setTags] = useState([
    { name: "Product Design", active: false },
    { name: "Website", active: false },
    { name: "App", active: false },
    { name: "Frontend", active: false },
    { name: "Backend", active: false },
    { name: "Devops", active: false },
    { name: "Branding", active: false },
    { name: "Marketing", active: false },
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [callbackMessage, setCallbackMessage] = useState("");
  const [callbackStatus, setCallbackStatus] = useState("success");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!isLoading) {
      setIsLoading(true);
      let query = "";
      tags.forEach((tag) => {
        if (tag.active) {
          query += tag.name + "-";
        }
      });
      if (!name || !email || !message || !query) {
        setCallbackMessage("Please fill all fields.");
        setCallbackStatus("error");
        return;
      }
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify({ name, email, message, query }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const json = await res.json();
        if (res.status == 200) {
          setCallbackMessage("Request Sent");
          setCallbackStatus("success");
          setName("");
          setEmail("");
          setMessage("");
          tags.forEach((tag) => (tag.active = false));
          setTimeout(() => {
            setContactOpen();
          }, 2000);
        } else {
          setCallbackMessage(json.message);
          setCallbackStatus("error");
        }
      } catch (error) {
        setCallbackMessage("Something went wrong");
        setCallbackStatus("error");
        console.log(error);
      } finally {
        setTimeout(() => {
          setCallbackMessage("");
        }, 3000);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: contactOpen ? 0.5 : 0 }}
        transition={{ duration: 0.4, ease: "linear" }}
        className="z-30 fixed top-0 h-screen w-screen bg-black pointer-events-none"
      ></motion.div>
      <motion.div
        initial={{ right: "-710px" }}
        animate={{ right: contactOpen ? "0px" : "-710px" }}
        transition={{ duration: 0.6, ease: "anticipate" }}
        className="z-40 fixed top-0 -right-[710px] h-screen w-[700px] p-[10px]"
      >
        <div className="absolute right-6 top-6 cursor-pointer">
          <IoClose
            onClick={setContactOpen}
            size={28}
            className="text-gray-500"
          />
        </div>
        <div className="w-full h-full bg-white rounded-sm shadow-sm p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-[15px]">
            <div className="text-4xl font-quick mb-5">Let's break the ice</div>
            <div className="flex gap-[15px] flex-wrap">
              <div className="">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="rounded outline-none w-[300px] px-6 py-3 border border-gray-300 placeholder:font-poppins font-poppins"
                />
              </div>
              <div className="">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  className="rounded outline-none w-[300px] px-6 py-3 border border-gray-300 placeholder:font-poppins font-poppins"
                />
              </div>
            </div>
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What's your goal, budget and timeline?"
                className="rounded outline-none w-[615px] px-6 py-3 border border-gray-300 placeholder:font-poppins font-poppins"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Tag tag={tag} key={index} setTags={setTags} tags={tags} />
              ))}
            </div>
            <div
              onClick={handleSend}
              className="my-4 z-10 font-poppins bg-[#00249C] hover:bg-[#0030CF] transition-colors duration-300 text-white w-[200px] h-[50px] rounded-lg flex items-center justify-center cursor-pointer text-sm"
            >
              Submit Request
              <span className="ml-3">
                <FaArrowRightLong />
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-gray-300 font-poppins flex gap-3 text-sm">
                Prefer email?{" "}
                <span className="text-black">
                  suryansh.sharma9315@gmail.com
                </span>
              </div>
              <div className="text-gray-300 font-poppins flex gap-3 text-sm">
                Prefer phone? <span className="text-black">+91 9315566594</span>
              </div>
            </div>
            <div
              className={`font-poppins ${
                callbackStatus === "error" ? "text-red-500" : "text-green-500"
              }`}
            >
              {callbackMessage && callbackMessage}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="font-poppins">Schedule a call:</div>
            <motion.a
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
              href="https://calendly.com/suryansh-sharma9315/30min"
              target="_blank"
              className="flex gap-3 border border-gray-200 px-2 py-2 w-[300px] cursor-pointer items-center"
            >
              <div>
                <Image
                  src={"/images/team_1.webp"}
                  className="rounded-md h-[50px] w-[50px] object-cover"
                  width={100}
                  height={100}
                  unoptimized
                  alt="Image"
                />
              </div>
              <div className="w-[150px]">
                <div className="font-quick text-base">Suryansh Sharma</div>
                <div className="font-quick text-gray-400 text-sm">
                  Co-founder
                </div>
              </div>
              <div className="h-[40px] w-[40px] rounded-[20px] flex items-center justify-center bg-[#00249C]">
                <FaCalendar color="#fff" size={14} />
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomeContact;
