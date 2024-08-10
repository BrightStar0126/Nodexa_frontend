"use client"
import { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import "../css/style.css";

export default function Contact() {
  const [email, setEmail] = useState<string>("");
  const [first, setFirst] = useState<string>("");
  const [last, setLast] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-5">
      <div className="w-[95%] md:w-[80%] flex flex-col gap-12 p-3 md:p-10">
        <div className="w-full flex flex-col text-[64px] text-white text-center">
          Contact Us
        </div>
        <div className="w-full bg-gradient-to-r from-[#221E45] via-[#00AEB9] to-[#221E45] h-[1px]"></div>
        <div className="w-full flex flex-col items-center gap-9 ">
          <div className="w-full md:w-[450px] flex justify-start  flex-col gap-3">
            <div className=" text-white text-lg flex gap-1">
              First Name
            </div>
            <div className="relative flex items-center ">
              <input
                type="text"
                placeholder="Enter your first name"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                className="flex justify-center items-center border-[#1EC0CA] border rounded-[10px] text-xl text-white bg-[#1c1840] w-full  min-w-[fit-content] py-2 pl-3 pr-3"
              />
            </div>
          </div>
          <div className="w-full md:w-[450px] flex justify-start  flex-col gap-3">
            <div className=" text-white text-lg flex gap-1">
              Last Name
            </div>
            <div className="relative flex items-center ">
              <input
                type="text"
                placeholder="Enter your last name"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                className="flex justify-center items-center border-[#1EC0CA] border rounded-[10px] text-xl text-white bg-[#1c1840] w-full  min-w-[fit-content] py-2 pl-3 pr-3"
              />
            </div>
          </div>
          <div className="w-full md:w-[450px] flex justify-start  flex-col gap-3">
            <div className=" text-white text-lg flex gap-1">
              Email Address
            </div>
            <div className="relative flex items-center ">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex justify-center items-center border-[#1EC0CA] border rounded-[10px] text-xl text-white bg-[#1c1840] w-full  min-w-[fit-content] py-2 pl-3 pr-3"
              />
            </div>
          </div>
          <div className="w-full md:w-[450px] flex justify-start  flex-col gap-3">
            <div className=" text-white text-lg flex gap-1">
              Message
            </div>
            <div className="relative flex items-center ">
              <textarea
                value={message}
                rows={5}
                onChange={(e) => setMessage(e.target.value)}
                className="flex justify-center items-center border-[#1EC0CA] border rounded-[10px] text-xl text-white bg-[#1c1840] w-full  min-w-[fit-content] py-2 pl-3 pr-3 resize-none"
              />
            </div>
          </div>
          <button className="w-full md:w-[200px] gradient-button font-bold py-3 px-5 mt-4">Submit</button>
        </div>
        
      </div>
    </div>
  );
}
