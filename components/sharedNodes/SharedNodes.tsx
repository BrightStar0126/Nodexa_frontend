"use client";
import { sharedNodesData } from "../../data/shared-nodes-data";
import bgGradient1 from "../../public/bg-gradient/bg-gradient1.png";
import bgGradient2 from "../../public/bg-gradient/bg-gradient2.png";
import "../css/style.css";
import Image from "next/image";
import HostingPlan from "./HostingPlan";
import { useState } from "react";
import { statusComponent } from "../statusComponent/statusComponent";
export default function SharedNodes() {
  console.log("sharedNodesData", sharedNodesData);
  const [hostingPlan, setHostingPlan] = useState<number>(3);
  const handleHostingPlan_1 = () => {
    setHostingPlan(1);
  };
  const handleHostingPlan_3 = () => {
    setHostingPlan(3);
  };
  const handleHostingPlan_6 = () => {
    setHostingPlan(6);
  };
  return (
    <div className="flex justify-center items-start w-screen h-full p-5 relative z-20">
      <div className="flex flex-col m-20 justify-start items-center w-full gap-16">
        <div className="flex justify-start items-center w-[90%]">
          <h1 className="text-white text-[30px] font-bold text-center w-full">JOIN A SHARED NODE</h1>
        </div>
        <div className="w-[300px] lg:w-[800px] h-[fit-content] frame-border gap-7">
        <div className="w-full h-[fit-content] frame-body gap-7">
          <h1 className="text-white text-2xl font-semibold">Choose Hosting Plan</h1>
          <div className="flex flex-col lg:flex-row gap-3">
            <div
              className="w-[200px] hosting-plan cursor-pointer"
              onClick={handleHostingPlan_1}
            >
              1 Month
            </div>
            <div
              className="w-[200px] hosting-plan cursor-pointer"
              onClick={handleHostingPlan_3}
            >
              3 Months
            </div>
            <div
              className="w-[200px] hosting-plan cursor-pointer"
              onClick={handleHostingPlan_6}
            >
              6 Months
            </div>
          </div>
        </div>
        </div>
        <HostingPlan hostingPlan={hostingPlan} />

        <div className="flex flex-col justify-start items-center w-[90%] gap-7">
          <h1 className="text-white text-3xl text-center w-full font-bold">
            ACTIVE SHARED NODES
          </h1>
          <div className="border-b w-full border-[#00AEB9]"></div>
        </div>
        <div className="w-[90%] overflow-auto">
          <div className="flex flex-col w-full gap-5 ">
            {sharedNodesData.map((data, index) => (
              <div
                key={index}
                className="w-full min-w-[650px] table-shared-body "
              >
                <h1 className="text-xl text-white w-[20px]">{data.id}</h1>
                <div className="flex justify-center items-center gap-3 w-[400px]">
                  <div className="flex justify-center items-center rounded-[999px] w-[300px] p-2 gap-3">
                    {statusComponent("Active")}
                    IP{data.ip}
                  </div>
                </div>
                <div className="text-white text-xl w-[200px]">
                  PoSe Score: {data.score}
                </div>
                <div className="text-white text-xl w-[200px]">
                  Ends In: {data.endsIn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Image
        src={bgGradient1}
        alt="bg"
        width={500}
        height={500}
        className="absolute left-0 top-20 -z-10"
      ></Image>
      <Image
        src={bgGradient2}
        alt="bg"
        width={500}
        height={500}
        className="absolute right-0 top-80 -z-10"
      ></Image>
    </div>
  );
}
