"use client";
import React from "react";
import { useRouter,usePathname } from "next/navigation";
import Image from "next/image";
import "../css/style.css";
export default function Footer() {
  const router = useRouter();
  const path = usePathname();
  return (
    
      <div className="footer bg-[#080525] border-t border-[gray] text-[16px] z-50 py-3 gap-3">
        <div className= {`${(path == "" || path == "/")?"flex":"hidden"} gap-5 w-full justify-center items-center p-5 pb-2 font-bold`}>
            <div className="text-3xl text-[whtie]">Join</div>
            <div className="text-3xl text-[#00AEB9]">Us</div>
        </div>
        <div className={`${(path == "" || path == "/")?"flex":"hidden"} gap-5 w-full justify-center items-center p-3 font-bold`}>
            <Image
              width={60}
              height={60}
              src="/footer/twitter.png"
              alt="twitter"
              className="cursor-pointer"
            />
            <Image
              width={60}
              height={60}
              src="/footer/discord.png"
              alt="twitter"
              className="cursor-pointer"
            />
        </div>
        <div className="flex gap-7 w-full justify-center items-center p-3">
            <div className="cursor-pointer" onClick={()=>router.push("/terms")}>Terms Of Use</div>
            <div className="cursor-pointer" onClick={()=>router.push("/contact")}>Contact Us</div>
        </div>
        <div className="border-b w-full border-[#00AEB9]"></div>
        <div className="flex gap-7 w-full justify-center items-center p-3">
            Copyright © 2024 Nodexa labs
        </div>
      </div>
    
  );
}
