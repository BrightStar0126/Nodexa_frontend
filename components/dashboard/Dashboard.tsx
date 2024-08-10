"use client";
import bgGradient1 from "../../public/bg-gradient/bg-gradient1.png";
import bgGradient2 from "../../public/bg-gradient/bg-gradient2.png";
import "../css/style.css";
import { useState } from "react";
import rewards from "../../public/assets/rewards.png";
import { tableData } from "../../data/table-data";
import { tableDetailedData } from "../../data/table-detailed-data";
import { transactionData } from "../../data/transaction-data";
import DetailsModal from "./DetailsModal";
import Image from "next/image";
const headerData = [
  "Name",
  "Status",
  "Pose Score",
  "Node IP",
  "Rewards",
  "Next Pay",
  "Hosting Plan",
  "Expiration Date",
];
const nodeDetailsHeaderData = [
  "Date",
  "Transactions",
  "Block Height",
  "Amount",
  "Time",
];
function formatNumberWithCommas(number: number, locale = "en-US") {
  return new Intl.NumberFormat(locale).format(number);
}
import { statusComponent } from "../statusComponent/statusComponent";
export default function Dashboard() {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [nodeDetailsData, setNodeDetailsData] = useState<any>({});
  const [isSelectedNodes, setIsSelectedNodes] = useState("privateNodes");
  const handleOpenDetailsModal = (item: any) => {
    setIsDetailsModalOpen(true);
    setNodeDetailsData(item);
    console.log("-----nodeDetailsData----->", item);
  };
  console.log("selected Nodes----->", isSelectedNodes);
  const handleCloseDetailsModal = () => {
    setIsDetailsModalOpen(false);
  };
  return (
    <div className="flex justify-center items-start w-screen h-full p-5 relative">
      <div className="flex flex-col xl:p-20 justify-start items-start w-full gap-16">
        <div className="flex flex-col 2xl:flex-row justify-center xl:items-center w-full gap-12">
          <div className="flex flex-col justify-center items-center gap-8 2xl:w-[350px]">
            <h1 className=" text-white text-center lg:text-left font-bold text-[40px]  2xl:translate-x-2">
              Dashboard
            </h1>
            <div
              className={`text-center 2xl:text-left cursor-pointer hover:bg-[#080525] hover:opacity-35 font-bold ${
                isSelectedNodes == "privateNodes"
                  ? "text-[#1EC0CA] text-[24px] 2xl:translate-x-3"
                  : "block text-[21px]"
              }`}
              onClick={() => setIsSelectedNodes("privateNodes")}
            >
              MY PRIVATE NODES
            </div>
            <div
              className={`text-center 2xl:text-left cursor-pointer hover:bg-[#080525] hover:opacity-35 font-bold ${
                isSelectedNodes == "privateNodes"
                  ? "block text-[21px]"
                  : "text-[#1EC0CA] text-[24px] 2xl:translate-x-3"
              }`}
              onClick={() => setIsSelectedNodes("sharedNodes")}
            >
              MY SHARED NODES
            </div>
          </div>
          <div
            id="privateNodes"
            className={`flex flex-wrap justify-center xl:items-center gap-4 ${
              isSelectedNodes == "privateNodes" ? "block" : "hidden"
            }`}
          >
            <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[330px] h-[200px] frame-border gap-3">
              <div className="w-full h-[200px] frame-body gap-3">
                <h1 className="text-2xl text-white font-bold">Private Nodes</h1>
                <h1 className="text-2xl text-white">8/8</h1>
                <h1 className="text-base text-[#26FF34] border-[#26FF34] border-[1px] bg-[#26FF34] bg-opacity-30 px-3 py-2 rounded-xl flex gap-3">
                  All Active
                  <Image
                    width={20}
                    height={20}
                    src="/assets/allActive.png"
                    alt="allActive"
                    className="text-center h-[20px] translate-y-[2px]"
                  />
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-4 w-full xl:w-[50%] md:h-[190px]">
              <div className="flex flex-col md:flex-row justify-center xl:justify-between  items-center gap-4 w-full">
                <div className="w-full min-w-[285px] md:w-[50%] lg:w-[420px] h-[77px] md:h-[90px] frame-border">
                  <div className="w-full  h-[77px] md:h-[90px] frame-body gap-3">
                    <h1 className="text-lg text-white">Avg Payment Time</h1>
                    <h1 className=" font-bold text-lg text-white">2D 6H 30M</h1>
                  </div>
                </div>
                <div className="w-full min-w-[285px]  md:w-[50%] lg:w-[420px] h-[77px] md:h-[90px] frame-border">
                  <div className="w-full h-[77px] md:h-[90px] frame-body gap-3">
                    <h1 className="text-lg text-white">Active Smartnodes</h1>
                    <h1 className=" font-bold text-lg text-white">2950</h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center xl:justify-between items-center gap-4 w-full">
                <div className="w-full min-w-[285px]  md:w-[50%] lg:w-[420px] h-[77px] md:h-[90px] frame-border">
                  <div className="w-full h-[77px] md:h-[90px] frame-body gap-3">
                    <h1 className="text-lg text-white">My Smartnodes Value</h1>
                    <h1 className=" font-bold text-lg text-white">$8000</h1>
                  </div>
                </div>
                <div className="w-full min-w-[285px]  md:w-[50%] lg:w-[420px] h-[77px] md:h-[90px] frame-border">
                  <div className="w-full h-[77px] md:h-[90px] frame-body gap-3">
                    <h1 className=" text-lg text-white">My Total Earnings</h1>
                    <div className=" font-bold text-lg text-white flex gap-2">
                      1,420,335
                      <Image
                        width={25}
                        height={20}
                        src="/assets/rewards.png"
                        alt="rewards"
                        className="h-4 w-4 translate-y-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="sharedNodes"
            className={`flex flex-wrap justify-center xl:items-center gap-4 ${
              isSelectedNodes == "privateNodes" ? "hidden" : "block"
            }`}
          >
            <div className="w-full md:w-[80%] lg:w-[70%] xl:w-[330px] h-[200px] frame-border gap-3">
              <div className="w-full h-[200px] frame-body gap-3">
                <h1 className="font-bold text-2xl text-white">Shared Nodes</h1>
                <h1 className="text-2xl text-white">2/2</h1>
                <h1 className="text-base text-[#26FF34] border-[#26FF34] border-[1px] bg-[#26FF34] bg-opacity-30 px-3 py-2 rounded-xl flex gap-3">
                  All Active
                  <Image
                    width={20}
                    height={20}
                    src="/assets/allActive.png"
                    alt="allActive"
                    className="text-center h-[20px] translate-y-[2px]"
                  />
                </h1>
              </div>
            </div>
            <div className="flex flex-col justify-between items-center gap-4 w-full xl:w-[50%] md:h-[190px]">
              <div className="flex flex-col md:flex-row justify-center xl:justify-between  items-center gap-4 w-full">
                <div className="w-full min-w-[285px]  md:w-[50%] lg:w-[420px] h-[77px] md:h-[90px] frame-border">
                  <div className="w-full  h-[77px] md:h-[90px] frame-body gap-3">
                    <h1 className="text-lg text-white">My Shared Nodes</h1>
                    <h1 className=" font-bold text-lg text-white">02</h1>
                  </div>
                </div>
                <div className="w-full min-w-[285px]  md:w-[50%] lg:w-[420px] h-[77px] md:h-[90px] frame-border">
                  <div className="w-full h-[77px] md:h-[90px] frame-body gap-3">
                    <h1 className="text-lg text-white">My Total Earnings</h1>
                    <h1 className=" font-bold text-lg text-white flex gap-4">
                      120,000
                      <Image
                        width={25}
                        height={20}
                        src="/assets/rewards.png"
                        alt="rewards"
                        className="h-4 w-4 translate-y-1"
                      />
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center xl:justify-between items-center gap-4 w-full">
                <div className="w-full min-w-[285px] md:w-[50%] lg:w-[420px] h-[77px] md:h-[90px] frame-border">
                  <div className="w-full h-[77px] md:h-[90px] frame-body gap-3">
                    <h1 className=" text-lg text-white text-center">
                      Collateral In Shared Nodes
                    </h1>
                    <h1 className=" font-bold text-lg text-white flex gap-4">
                      500,000
                      <Image
                        width={25}
                        height={20}
                        src="/assets/rewards.png"
                        alt="rewards"
                        className="h-4 w-4 translate-y-1"
                      />
                    </h1>
                  </div>
                </div>
                <div className="w-full min-w-[285px] md:w-[50%] lg:w-[420px] h-[77px] md:h-[90px] frame-border">
                  <div className="w-full h-[77px] md:h-[90px] frame-body gap-3">
                    <h1 className="text-lg text-white">Nodexa Smartnodes</h1>
                    <h1 className=" font-bold text-lg text-white">55</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b w-full border-[#00AEB9]"></div>
        <div
          className={`w-full overflow-auto ${
            isSelectedNodes == "privateNodes" ? "block" : "hidden"
          }`}
        >
          <div className="min-w-[1260px] flex justify-end items-center w-full p-[10px]">
            <div className="flex justify-around w-[95%] gap-3">
              {headerData.map((item, index) => (
                <h1
                  key={index}
                  className={`text-xl text-white ${
                    index == 3 ? `w-[200px]` : 
                    index == 6 ? `w-[180px]` : 
                    index == 7 ? `min-w-[160px] w-[180px]` : `w-[150px]`
                  }`}
                >
                  {item}
                </h1>
              ))}
              <div className="w-[90px]"></div>
            </div>
          </div>
          <div className="min-w-[1260px] flex flex-col justify-center items-center gap-10">
            {tableData.map((item, index) => {
              return (
                <div key={index} className="table-body">
                  <div
                    key={index}
                    className="flex justify-between items-center gap-3 w-[95%] "
                  >
                    <div className="text-lg text-white text-left w-[150px]">
                      {item.name}
                    </div>
                    <div className="text-lg text-white text-left w-[150px] flex gap-2 translate-x-[-25px]">
                      <span className="translate-x-[-5px] translate-y-[3px]">
                        {statusComponent(item.status)}
                      </span>
                      {item.status}
                    </div>
                    <div className="text-lg text-white text-left w-[150px]">
                      {item.poseScore}
                    </div>
                    <div className="text-lg text-white text-left w-[200px]">
                      {item.nodeIp}
                    </div>
                    <div className="text-lg text-white text-left w-[150px] flex gap-2">
                      {item.rewards}
                      <Image
                        src={rewards}
                        alt="rewards"
                        width={25}
                        height={15}
                        className="h-4 w-4 translate-y-1"
                      ></Image>
                    </div>
                    <div className="text-lg text-white text-left w-[150px]">
                      {item.nextPay}
                    </div>
                    <div className="text-lg text-white text-left w-[180px]">
                      {item.hostingPlan}
                    </div>
                    <div className="text-lg text-white text-left w-[180px]">
                      {item.expirationDate}
                    </div>
                    <div
                      className="flex justify-center items-center rounded-[20px] bg-[#404768] text-white px-4 py-2 cursor-pointer"
                      onClick={() => handleOpenDetailsModal(item)}
                    >
                      Details
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`flex flex-col w-full gap-10 ${
            isSelectedNodes == "privateNodes" ? "hidden" : "block"
          }`}
        >
          {tableDetailedData.map((item, index) => (
            <div key={index} className="dash-shared-tablebody gap-0 md:gap-8 xl:gap-[50px]">
              <div className="bg-[#EC008C] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-5 ml-3 mt-4">
                {item.id}
              </div>
              <div className="flex flex-wrap justify-center xl:justify-start items-center gap-5 text-xl w-full">
                <div className="flex flex-col gap-3 justify-center items-center xl:w-[8%]">
                  <h1 className="text-xl text-white font-bold border-[white]">
                    Status
                  </h1>
                  <div className="flex gap-4">
                    <div className="translate-y-[2px]">
                      {statusComponent(item.status)}
                    </div>
                    <h1 className="text-xl text-white">{item.status}</h1>
                  </div>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center xl:w-[15%]">
                  <h1 className="text-xl text-white font-bold border-[white]">
                    Pose Score
                  </h1>
                  <h1 className="text-xl text-white">{item.poseScore}</h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center xl:w-[25%]">
                  <h1 className="text-xl text-white font-bold border-[white]">
                    Node Address
                  </h1>
                  <h1 className="text-xl text-white">{item.nodeAddress}</h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center xl:w-[20%]">
                  <h1 className="text-xl text-white font-bold border-[white]">
                    Node Ip
                  </h1>
                  <h1 className="text-xl text-white">{item.nodeIp}</h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center xl:w-[10%]">
                  <h1 className="text-xl text-white font-bold border-[white]">
                    Rewards
                  </h1>
                  <h1 className="text-xl text-white flex gap-2">
                    {item.rewards}
                    <Image
                      width={25}
                      height={20}
                      src="/assets/rewards.png"
                      alt="rewards"
                      className="h-4 w-4 translate-y-1"
                    />
                  </h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center xl:w-[10%]">
                  <h1 className="text-xl text-white font-bold border-[white]">
                    Next Pay
                  </h1>
                  <h1 className="text-xl text-white">{item.nextPay}</h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center xl:w-[8%]">
                  <h1 className="text-xl text-white font-bold border-[white]">
                    Participants
                  </h1>
                  <h1 className="text-xl text-white">{item.participants}</h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center xl:w-[15%]">
                  <h1 className="text-xl text-white font-bold border-[white]">
                    My Collateral
                  </h1>
                  <h1 className="text-xl text-white">{item.myCollateral}</h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center xl:w-[25%]">
                  <h1 className="text-xl text-white font-bold border-[white]">
                    My Rewards
                  </h1>
                  <h1 className="text-xl text-white">{item.myRewards}</h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center xl:w-[20%]">
                  <h1 className="text-xl text-white font-bold border-[white]">
                    Hosting Plan
                  </h1>
                  <h1 className="text-xl text-white">{item.hostingPlan}</h1>
                </div>
                <div className="flex flex-col gap-3 justify-center items-center xl:w-[10%]">
                  <h1 className="text-xl text-white font-bold border-[white]">
                    Ends In
                  </h1>
                  <h1 className="text-xl text-white">{item.endsIn}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DetailsModal show={isDetailsModalOpen} onClose={handleCloseDetailsModal}>
        <div className="flex flex-col justify-between items-center h-full overflow-y-auto relative px-[30px] ">
          <div className="absolute top-4 right-7">
            <button className="" onClick={() => setIsDetailsModalOpen(false)}>
              <Image
                width={40}
                height={40}
                src="/modal/close.png"
                alt="close"
              ></Image>
            </button>
          </div>
          <div className=" w-full flex flex-col justify-center items-center gap-8 py-[40px]">
            <div className="flex justify-center w-[80%] items-center">
              <h1 className="text-4xl text-white font-bold text-center">
                SMARTNODE DETAILS
              </h1>
            </div>
            <div className="w-full bg-gradient-to-r from-[#221E45] via-[#00AEB9] to-[#221E45] h-[1px]"></div>
            <div className="flex w-full justify-center items-center gap-10 xl:gap-28 flex-col xl:flex-row">
              <div className="w-full md:w-[500px] h-[fit-content] frame-border">
                <div className="w-full frame-body gap-3 py-5 px-9">
                  <div className="flex flex-row justify-between items-center gap-3 w-full">
                    <h1 className="text-sm text-white w-[150px] min-w-[80px]">
                      Name:
                    </h1>
                    <div className=" flex justify-between flex-grow">
                      <input
                        type="text"
                        disabled
                        className="flex bg-transparent flex-grow px-5 py-2 border-[1px] border-[#1EC0CA] rounded-full w-full md:w-[60%] text-sm text-white"
                        value={nodeDetailsData.name}
                      />
                      <Image
                        width={20}
                        height={20}
                        src="/modal/edit.png"
                        alt="edit"
                        className="cursor-pointer w-5 h-5 translate-y-2 mx-3"
                      ></Image>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-3 w-full">
                    <h1 className="text-sm text-white w-[150px] min-w-[80px]">
                      Collaterall Address:
                    </h1>
                    <div className=" flex justify-between flex-grow">
                      <input
                        type="text"
                        disabled
                        className="flex bg-transparent flex-grow px-5 py-2 border-[1px] border-[#1EC0CA] rounded-full w-full md:w-[60%] text-sm text-white"
                        value={nodeDetailsData.collaterallAddress}
                      />
                      <Image
                        width={20}
                        height={20}
                        src="/modal/edit.png"
                        alt="edit"
                        className="cursor-pointer w-5 h-5 translate-y-2 mx-3"
                      ></Image>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-3 w-full">
                    <h1 className="text-sm text-white w-[150px] min-w-[80px]">
                      Payee Address:
                    </h1>
                    <div className=" flex justify-between flex-grow">
                      <input
                        type="text"
                        disabled
                        className="flex bg-transparent flex-grow px-5 py-2 border-[1px] border-[#1EC0CA] rounded-full w-full md:w-[60%] text-sm text-white"
                        value={nodeDetailsData.payeeAddress}
                      />
                      <Image
                        width={20}
                        height={20}
                        src="/modal/edit.png"
                        alt="edit"
                        className="cursor-pointer w-5 h-5 translate-y-2 mx-3"
                      ></Image>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-3 w-full">
                    <h1 className="text-sm text-white w-[150px] min-w-[80px]">
                      Owner Address:
                    </h1>
                    <div className=" flex justify-between flex-grow">
                      <input
                        type="text"
                        disabled
                        className="flex bg-transparent flex-grow px-5 py-2 border-[1px] border-[#1EC0CA] rounded-full w-full md:w-[60%] text-sm text-white"
                        value={nodeDetailsData.ownerAddress}
                      />
                      <Image
                        width={20}
                        height={20}
                        src="/modal/edit.png"
                        alt="edit"
                        className="cursor-pointer w-5 h-5 translate-y-2 mx-3"
                      ></Image>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-3 w-full">
                    <h1 className="text-sm text-white w-[150px] min-w-[80px]">
                      Voting Address:
                    </h1>
                    <div className=" flex justify-between flex-grow">
                      <input
                        type="text"
                        disabled
                        className="flex bg-transparent flex-grow px-5 py-2 border-[1px] border-[#1EC0CA] rounded-full w-full md:w-[60%] text-sm text-white"
                        value={nodeDetailsData.votingAddress}
                      />
                      <Image
                        width={20}
                        height={20}
                        src="/modal/edit.png"
                        alt="edit"
                        className="cursor-pointer w-5 h-5 translate-y-2 mx-3"
                      ></Image>
                    </div>
                  </div>
                  <div className="flex flex-row justify-between items-center gap-3 w-full">
                    <h1 className="text-sm text-white w-[150px] min-w-[80px]">
                      Fee Address:
                    </h1>
                    <div className=" flex justify-between flex-grow">
                      <input
                        type="text"
                        disabled
                        className="flex bg-transparent flex-grow px-5 py-2 border-[1px] border-[#1EC0CA] rounded-full w-full md:w-[60%] text-sm text-white"
                        value={nodeDetailsData.feeAddress}
                      />
                      <Image
                        width={20}
                        height={20}
                        src="/modal/edit.png"
                        alt="edit"
                        className="cursor-pointer w-5 h-5 translate-y-2 mx-3"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row xl:flex-col justify-center items-center gap-5 flex-col w-full md:w-[fit-content]">
                <div className="w-full md:w-[300px] h-[fit-content] frame-border">
                  <div className="w-full frame-body gap-3 p-5">
                    <h1 className="text-xl text-white">Smartnode Worth</h1>
                    <h1 className="text-xl text-white">$1080</h1>
                  </div>
                </div>
                <div className="w-full md:w-[300px] h-[fit-content] frame-border">
                  <div className="w-full frame-body gap-3 p-5">
                    <h1 className="text-xl text-white">Total Earnings</h1>
                    <h1 className="text-xl text-white flex gap-4">
                      25000{" "}
                      <Image
                        src={rewards}
                        alt="rewards"
                        width={25}
                        height={15}
                        className="h-4 w-4 translate-y-1"
                      ></Image>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-center gap-7 w-[80%] mt-6 my-16">
              <div className="flex justify-center items-center rounded-[20px] bg-[#1EC0CA] text-white px-5 py-2 cursor-pointer text-[14px] font-bold w-[180px]">
                Configure
              </div>
              <div className="flex justify-center items-center rounded-[20px] bg-[tomato] text-white px-5 py-2 cursor-pointer text-[14px] font-bold w-[180px] gap-3">
                Delete Node
                <Image
                  src="/modal/delete.png"
                  alt="trash"
                  width={20}
                  height={20}
                ></Image>
              </div>
            </div>
            <div className=" modal-table-body w-full lg:w-[80%]">
              <div className="overflow-auto flex flex-col items-start justify-start gap-5 w-full max-h-[250px]">
                <div className="flex justify-between items-center w-full border-b border-white  min-w-[610px]">
                  <div style={{ width: "5%" }}>Date</div>
                  <div style={{ width: "50%" }}>Transactions</div>
                  <div style={{ width: "15%" }}>Block Height</div>
                  <div style={{ width: "10%" }}>Amount</div>
                  <div style={{ width: "15%" }}>Time</div>
                </div>
                <div className="flex flex-col justify-between items-center w-full gap-3 min-w-[610px]">
                  {transactionData.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center w-full"
                    >
                      <div
                        style={{
                          width: "5%",
                          fontSize: "20px",
                        }}
                      >
                        {item.date}
                      </div>
                      <div style={{ width: "50%", wordWrap: "break-word" }}>
                        {item.transaction}
                      </div>
                      <div style={{ width: "15%" }}>{item.blockHeight}</div>
                      <div style={{ width: "10%" }}>{item.amount}</div>
                      <div style={{ width: "15%" }}>{item.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DetailsModal>
      <Image
        src={bgGradient2}
        alt="bg"
        width={500}
        height={500}
        className="hidden md:block absolute right-0 top-40 -z-10"
      ></Image>
    </div>
  );
}
