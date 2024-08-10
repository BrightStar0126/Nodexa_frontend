"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import * as XLSX from "xlsx";
import { userGet, userUpdate } from "../../app/actions/auth";
const billingHistoryHeader = [
  "Transaction ID",
  "Description",
  "Amount",
  "Date",
];
const billingHistoryContent = [
  {
    txID: "dif24uni2i2i2u55bb90am53k4jnnklkn558c",
    description: "3 months plan",
    amount: "5000 Neoxa",
    date: "17/07/2024 15:26pm",
  },
  {
    txID: "dif24uni2i2i2u55bb90am53k4jnnklkn558c",
    description: "3 months plan",
    amount: "5000 Neoxa",
    date: "17/07/2024 15:26pm",
  },
];
export default function MyAccount() {
  const tableRef = useRef(null);

  const [email, setEmail] = useState<string>("");
  const [curPwd, setCurPwd] = useState<string>("password");
  const [curPwdHide, setCurPwdHide] = useState<boolean>(true);
  const [newPwd, setNewPwd] = useState<string>("password");
  const [newPwdHide, setNewPwdHide] = useState<boolean>(true);
  const [cnewPwd, setCNewPwd] = useState<string>("password");
  const [cnewPwdHide, setCNewPwdHide] = useState<boolean>(true);

  useEffect(() => {
    const res = userGet()
      .then(res => setEmail(res.email))
      .catch(err => console.log(err));
  }, []);

  const handleEmailChange = () => {
    userUpdate({ email, password: newPwd });
  }

  const handleExcelExport = () => {
    // Create a worksheet
    const worksheet = XLSX.utils.aoa_to_sheet([
      // Add header row first
      billingHistoryHeader.map((item) => item),
      // Then add the data rows
      ...billingHistoryContent.map((item) => [
        item.txID,
        item.description,
        item.amount,
        item.date,
      ]),
    ]);

    // Create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "BillingHistory");

    // Download the Excel file
    XLSX.writeFile(workbook, "BillingHistory.xlsx");
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-full p-5">
      <div className="w-[95%] md:w-[80%] flex flex-col gap-16 p-3 md:p-10">
        <div className="w-full flex flex-col">
          <div className="flex w-full my-9 justify-start items-center">
            <div className="font-bold text-white text-[30px] ">My Account</div>
          </div>
          <div className="flex w-full justify-start  flex-col gap-3">
            <div className=" text-white text-lg flex gap-1">
              Email Address<p className="text-xl text-red-800">*</p>
            </div>
            <div className="relative flex items-center ">
              <Image
                width={23}
                height={23}
                src="/assets/gmail.png"
                alt="gmail"
                className="absolute left-4"
              ></Image>
              <input
                type="email"
                placeholder="georgeb@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex justify-center items-center border-[#1EC0CA] border rounded-[10px] text-xl text-white bg-transparent w-1/3  min-w-[fit-content] py-2 pl-12 pr-3"
              />
            </div>
            <div className="flex justify-end gap-4">
              <button className="flex justify-end items-center rounded-[20px] bg-[#3CDD22] uppercase text-white py-2 px-5 cursor-pointer font-bold" onClick={handleEmailChange}>
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-[#221E45] via-[#00AEB9] to-[#221E45] h-[1px]"></div>
        <div className="w-full flex flex-col gap-9">
          <div className="flex w-full justify-start items-center">
            <div className="font-bold text-white text-[30px] ">Password</div>
          </div>
          <div className="flex w-full justify-start  flex-col gap-3">
            <div className=" text-white text-lg flex gap-1">
              Current Password<p className="text-xl text-red-800">*</p>
            </div>
            <div className="relative flex items-center ">
              <Image
                width={20}
                height={20}
                src="/assets/password.png"
                alt="gmail"
                className="absolute left-4"
              ></Image>
              <input
                type={curPwdHide ? "password" : "text"}
                value={curPwd}
                onChange={(e) => setCurPwd(e.target.value)}
                className="flex justify-center items-center border-[#1EC0CA] border rounded-[10px] text-xl text-white bg-transparent w-1/3  min-w-[fit-content] py-2 pl-11 pr-11 relative"
              />
              <div
                className="relative right-10 min-w-[25px]"
                onClick={() => setCurPwdHide(!curPwdHide)}
              >
                {curPwdHide ? (
                  <Image
                    width={25}
                    height={25}
                    src="/assets/lock-eye.png"
                    alt="gmail"
                  ></Image>
                ) : (
                  <Image
                    width={25}
                    height={25}
                    src="/assets/lock-eye.png"
                    alt="gmail"
                  ></Image>
                )}
              </div>
            </div>
          </div>
          <div className="flex w-full justify-start  flex-col gap-3">
            <div className=" text-white text-lg flex gap-1">
              New Password<p className="text-xl text-red-800">*</p>
            </div>
            <div className="relative flex items-center ">
              <Image
                width={20}
                height={20}
                src="/assets/password.png"
                alt="gmail"
                className="absolute left-4"
              ></Image>
              <input
                type={newPwdHide ? "password" : "text"}
                value={newPwd}
                onChange={(e) => setNewPwd(e.target.value)}
                className="flex justify-center items-center border-[#1EC0CA] border rounded-[10px] text-xl text-white bg-transparent w-1/3  min-w-[fit-content] py-2 pl-11 pr-11 relative"
              />
              <div
                className="relative right-10 min-w-[25px]"
                onClick={() => setNewPwdHide(!newPwdHide)}
              >
                {newPwdHide ? (
                  <Image
                    width={25}
                    height={25}
                    src="/assets/lock-eye.png"
                    alt="gmail"
                  ></Image>
                ) : (
                  <Image
                    width={25}
                    height={25}
                    src="/assets/lock-eye.png"
                    alt="gmail"
                  ></Image>
                )}
              </div>
            </div>
          </div>
          <div className="flex w-full justify-start  flex-col gap-3">
            <div className=" text-white text-lg flex gap-1">
              Verify New Password<p className="text-xl text-red-800">*</p>
            </div>
            <div className="relative flex items-center ">
              <Image
                width={20}
                height={20}
                src="/assets/password.png"
                alt="gmail"
                className="absolute left-4"
              ></Image>
              <input
                type={cnewPwdHide ? "password" : "text"}
                value={cnewPwd}
                onChange={(e) => setCNewPwd(e.target.value)}
                className="flex justify-center items-center border-[#1EC0CA] border rounded-[10px] text-xl text-white bg-transparent w-1/3  min-w-[fit-content] py-2 pl-11 pr-11 relative"
              />
              <div
                className="relative right-10 min-w-[25px]"
                onClick={() => setCNewPwdHide(!cnewPwdHide)}
              >
                {curPwdHide ? (
                  <Image
                    width={25}
                    height={25}
                    src="/assets/lock-eye.png"
                    alt="gmail"
                  ></Image>
                ) : (
                  <Image
                    width={25}
                    height={25}
                    src="/assets/lock-eye.png"
                    alt="gmail"
                  ></Image>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button className="flex justify-end items-center rounded-[20px] bg-[#3CDD22] uppercase text-white py-2 px-5 cursor-pointer font-bold" onClick={handleEmailChange}>
              Save
            </button>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-[#221E45] via-[#00AEB9] to-[#221E45] h-[1px]"></div>
        <div className="flex gap-5 justify-between items-start w-full xl:w-[70%] flex-col">
          <div className="font-bold text-white text-[30px]">
            Two Factor Authentication
          </div>
          <h1 className="text-white text-[22px]">
            Enable 2FA as extra layer of security
          </h1>
          <div className="flex flex-col justify-center  gap-16">
            <h1 className="text-white text-[22px] flex">
              2FA is&nbsp;<p className="font-bold">Enabled / DISABLED</p>
            </h1>
            <div className="flex gap-4">
              <div className="flex justify-center items-center rounded-[20px] bg-[#3CDD22] uppercase text-white py-2 px-5 cursor-pointer font-bold">
                Enable
              </div>
              <div className="flex justify-center items-center rounded-[20px] bg-[#FF5252] uppercase text-white py-2 px-5 cursor-pointer font-bold">
                Disable
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-[#221E45] via-[#00AEB9] to-[#221E45] h-[1px]"></div>
        <div className="flex gap-8 justify-between items-start w-full xl:w-[60%] flex-col">
          <div className="font-bold text-white text-xl">Delete Account</div>
          <div className="flex justify-center items-center rounded-[20px] bg-[#FF5252] uppercase text-white py-2 pr-3 pl-5 cursor-pointer font-bold gap-4 ">
            Delete
            <Image
              width={25}
              height={20}
              src="/modal/delete.png"
              alt="delete"

            />
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-[#221E45] via-[#00AEB9] to-[#221E45] h-[1px]"></div>
        <div className="flex gap-8 justify-between items-start w-full xl:w-full flex-wrap">
          <div className="font-bold text-white text-xl">Billing History</div>
          <div
            className="flex justify-center items-center rounded-[20px] bg-[#272E50] text-white py-3 px-10 cursor-pointer font-bold"
            onClick={handleExcelExport}
          >
            Export Billing History
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="table-container rounded-xl  border-none w-full overflow-y-auto">
            <table className="rounded-xl  border-none w-full" ref={tableRef}>
              <thead className="bg-transparent sticky top-0 z-10 ">
                <tr style={{ fontSize: "24px", fontFamily: "sora-bold" }}>
                  {billingHistoryHeader.map((item, index) => (
                    <th
                      key={index}
                      className="px-6 py-6 text-left font-bold text-white tracking-wider"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
                <tr className=" absolute bottom-0 w-full z-50 border-[rgba(89,200,255,0.8)] border-[1px]"></tr>
              </thead>
              <tbody className="bg-transparent divide-y divide-gray-200 border-none relative">
                {billingHistoryContent.map((item, index) => (
                  <>
                    <tr
                      key={index}
                      className={`hover:bg-[#4796d64f] transition-all border-none cursor-pointer ${index % 2 === 0 ? "bg-transparent" : "bg-transparent"
                        } `}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {item.txID}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {item.description}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {item.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-white">
                        {item.date}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
