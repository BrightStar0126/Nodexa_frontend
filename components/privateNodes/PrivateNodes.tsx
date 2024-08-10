"use client";

import { useState } from "react";

import bgGradient1 from "../../public/bg-gradient/bg-gradient1.png";
import bgGradient2 from "../../public/bg-gradient/bg-gradient2.png";
import "../css/style.css";
import Image from "next/image";

export default function PrivateNodes() {
  const [pageNum, setPageNum] = useState<number>(1);
  const handleHostingPlan_1 = () => {};
  const handleHostingPlan_3 = () => {};
  const handleHostingPlan_6 = () => {};
  const handleNext = () => {
    if (pageNum + 1 > 5) {
      setPageNum(5);
    } else {
      setPageNum((prevNum) => prevNum + 1);
    }
  };
  const handlePrev = () => {
    setPageNum((prevNum) => prevNum - 1);
  };
  const handleDeploy = () => {};
  console.log("PageNumber ---->", pageNum);
  return (
    <div className="flex justify-center items-start w-screen h-full p-5 relative">
      <div className="flex flex-col m-20 justify-start items-center w-full gap-16 min-w-[500px]">
        <div className="w-[300px] lg:w-[800px] h-[fit-content] frame-border gap-7">
        <div className="w-full h-[fit-content] frame-body gap-7">
          <h1 className="text-white text-[30px] font-semibold">
            Choose Hosting Plan
          </h1>
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
          <div className="flex md:flex-row justify-center md:justify-between w-full flex-col md:items-end items-center gap-5">
            <div className="md:w-[33%] w-full"></div>
            <div className="md:w-[33%] w-full flex flex-col justify-center items-center gap-5 relative">
              <h1 className="text-white text-[25px] font-semibold">
                Price: 12$
              </h1>
              <button className="gradient-button font-bold text-white w-[155px] py-3 px-5 text-base">
                Host
              </button>
            </div>
            <div className=" flex xl:justify-end justify-center items-end text-nowrap xl:w-[33%] w-full font-bold"></div>
          </div>
        </div>
        </div>
        <div className="flex justify-center items-center w-[90%]">
          <h1 className="text-white text-[35px] font-bold">SMARTNODE SETUP</h1>
        </div>
        <div
          className={`flex rounded-[40px] h-[fit-content] gap-3 items-center justify-center p-8 flex-wrap w-[90%] ${
            pageNum == 1
              ? "bg-transparent"
              : "bg-[#1c1840] border border-[#1EC0CA]"
          }`}
        >
          <div
            className={`w-full flex flex-col justify-center gap-8 items-start ${
              pageNum == 1 ? "block" : "hidden"
            }`}
          >
            <div className="flex items-center justify-center text-white font-bold text-xl prinum text-[24px] text-center">
              Step: 01
            </div>

            <div className="flex flex-wrap w-full justify-center items-center gap-6 font-thin">
              <div className="flex flex-col border border-[#1EC0CA] bg-[#1c1840] rounded-2xl px-8 py-6 w-full lg:w-[350px] md:h-64 text-xl text-white font-bold gap-4">
                <div className="bg-[#EC008C] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-5">
                  #1
                </div>
                <h1 className="font-medium">
                  On your QT wallet open the NEOXA debug console from the top
                  menu -&gt; tools -&gt; debug console.
                </h1>
              </div>
              <div className="flex flex-col border border-[#1EC0CA] bg-[#1c1840] rounded-2xl px-8 py-6 w-full lg:w-[350px] md:h-64 text-xl text-white font-bold gap-4">
                <div className="bg-[#EC008C] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-5">
                  #2
                </div>
                <h1 className="font-medium">
                  In the Debug console type “getnewaddress”. An address will be
                  generated, it will be referred to as the &quot;collateral
                  address&quot;.
                </h1>
              </div>
              <div className="flex flex-col border border-[#1EC0CA] bg-[#1c1840] rounded-2xl px-8 py-6 w-full lg:w-[350px] md:h-64 text-xl text-white font-bold gap-4">
                <div className="bg-[#EC008C] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-5">
                  #3
                </div>
                <h1 className="font-medium">
                  Send exactly 1,000,000 NEOXA to the collateral address you
                  just generated. Make sure that &quot;Subtract fee from
                  amount&quot; is NOT checked.
                </h1>
              </div>
              <div className="flex flex-col border border-[#1EC0CA] bg-[#1c1840] rounded-2xl px-8 py-6 w-full lg:w-[350px] md:h-64 text-xl text-white font-bold gap-4">
                <div className="bg-[#EC008C] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-5">
                  #4
                </div>
                <h1 className="font-medium">
                  Go to settings -&gt; options -&gt; wallet -&gt; tick the
                  “enable coin control features” and press Ok.
                </h1>
              </div>
              <div className="flex flex-col border border-[#1EC0CA] bg-[#1c1840] rounded-2xl px-8 py-6 w-full lg:w-[350px] md:h-64 text-xl text-white font-bold gap-4">
                <div className="bg-[#EC008C] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-5">
                  #5
                </div>
                <h1 className="font-medium">
                  On the “send” tab click “inputs” button and locate the
                  1,000,000 NEOXA transaction that executed as described on step
                  3.
                </h1>
              </div>
              <div className="flex flex-col border border-[#1EC0CA] bg-[#1c1840] rounded-2xl px-8 py-6 w-full lg:w-[350px] md:h-64 text-xl text-white font-bold gap-4">
                <div className="bg-[#EC008C] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-5">
                  #6
                </div>
                <h1 className="font-medium">
                  Right click on this transaction and press “lock unspent” (a
                  lock will appear next of this transaction).
                </h1>
              </div>
              <div className="flex flex-col border border-[#1EC0CA] bg-[#1c1840] rounded-2xl px-8 py-6 w-full lg:w-[350px] md:h-64 text-xl text-white font-bold gap-4">
                <div className="bg-[#EC008C] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-5">
                  #7
                </div>
                <h1 className="font-medium">
                  Right click again on the same transaction, press “copy
                  transaction id” and press Ok.
                </h1>
              </div>
              <div className="flex flex-col border border-[#1EC0CA] bg-[#1c1840] rounded-2xl px-8 py-6 w-full lg:w-[350px] md:h-64 text-xl text-white font-bold gap-4">
                <div className="bg-[#EC008C] rounded-[50%] w-[30px] h-[30px] flex justify-center items-center p-5">
                  #8
                </div>
                <div className="font-medium">
                  Paste this ID below and press “<strong>Next</strong>” button.
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-center items-center gap-8 p-5">
              <div className="flex justify-center items-center border border-[#EC008C] rounded-xl text-xl text-[#B0B0B0] py-4 w-[80%]">
                <input
                  type="text"
                  className="h-full w-full px-8 text-xl bg-transparent border-none outline-none text-center"
                  placeholder="Paste transaction ID here"
                />
              </div>
            </div>
          </div>
          <div
            className={`w-full flex flex-col justify-center items-start ${
              pageNum == 2 ? "block" : "hidden"
            } gap-12`}
          >
            <div className="flex items-center justify-center text-white font-bold text-xl prinum text-[24px] text-center">
              Step: 02
            </div>
            <div className="flex flex-wrap w-full justify-center items-center gap-6 ">
              <div className="w-full xl:w-[45%] flex flex-col gap-7">
                <div className="flex justify-start items-center text-2xl font-bold text-white w-full">
                  Owner Address
                </div>
                <h1 className="flex justify-start text-base text-[#E0E0E0] w-full xl:h-20">
                  Open tools -&gt; tebug console. Copy and paste the command
                  &quot;getnewaddress&quot; then press Enter.
                </h1>
                <div className="flex justify-start items-center border border-[#1EC0CA] rounded-xl bg-[#080525] text-xl text-[#B0B0B0] py-2 w-full">
                  <input
                    type="text"
                    className="h-full w-full bg-transparent text-xl  border-none outline-none px-10 py-1"
                    placeholder="Paste the address here"
                  />
                </div>
                <div className="flex justify-start items-center text-lg font-bold text-white w-full flex-col gap-4"></div>
              </div>
              <div className="w-full xl:w-[45%] flex flex-col gap-7">
                <div className="flex justify-start font-bold items-center text-2xl text-white w-full">
                  Voting Address
                </div>
                <h1 className="flex justify-start  text-base  text-[#E0E0E0] w-full xl:h-20">
                  This address can be the same as the Owner Address
                </h1>
                <div className="flex justify-start items-center border border-[#1EC0CA] rounded-xl bg-[#080525] text-xl text-[#B0B0B0] py-2 w-full">
                  <input
                    type="text"
                    className="h-full w-full bg-transparent text-xl  border-none outline-none px-10 py-1"
                    placeholder="Paste the address here"
                  />
                </div>
                <div className="flex justify-start items-center text-lg font-bold text-white w-full flex-col gap-4"></div>
              </div>
              <div className="w-full xl:w-[45%] flex flex-col gap-7">
                <div className="flex justify-start items-center text-2xl font-bold text-white w-full">
                  Payee address
                </div>
                <h1 className="flex justify-start  text-base text-[#E0E0E0] w-full xl:h-20">
                  This address will receive the smartnode rewards. Any existing
                  wallet address can be used.
                </h1>
                <div className="flex justify-start items-center border border-[#1EC0CA] rounded-xl bg-[#080525] text-xl text-[#B0B0B0] py-2 w-full">
                  <input
                    type="text"
                    className="h-full w-full bg-transparent text-xl  border-none outline-none px-10 py-1"
                    placeholder="Paste the address here"
                  />
                </div>
                <div className="flex justify-start items-center text-lg font-bold text-white w-full flex-col gap-4"></div>
              </div>
              <div className="w-full xl:w-[45%] flex flex-col gap-7">
                <div className="flex justify-start items-center text-2xl font-bold text-white w-full">
                  Fee source address
                </div>
                <h1 className="flex justify-start  text-base text-[#E0E0E0] w-full xl:h-20">
                  You can use as Fee Source address any wallet address
                  that&nbsp;
                  <strong>HOLDS</strong> &nbsp;some coins.
                </h1>
                <div className="flex justify-start items-center border border-[#1EC0CA] rounded-xl bg-[#080525] text-xl text-[#B0B0B0] py-2 w-full">
                  <input
                    type="text"
                    className="h-full w-full bg-transparent text-xl  border-none outline-none px-10 py-1"
                    placeholder="Paste the address here"
                  />
                </div>
                <div className="flex justify-start items-center text-lg font-bold text-white w-full flex-col gap-4"></div>
              </div>
            </div>
          </div>
          <div
            className={`w-full flex flex-col justify-center items-start ${
              pageNum == 3 ? "block" : "hidden"
            } gap-12`}
          >
            <div className="flex items-center justify-center text-white font-bold text-xl prinum text-[24px] text-center">
              Step: 03
            </div>
            <div className="flex ml-6 justify-start items-center text-white font-bold text-2xl">
              ProRegTx Transaction
            </div>
            <div className="flex justify-start items-start flex-col pl-5 pr-5 gap-8 w-full">
              <div className="flex text-xl text-white font-bold w-full">
                1.&nbsp;&nbsp;&nbsp;
                <h1 className=" font-medium">
                  Go to your wallet -&gt; settings -&gt; unlock Wallet. Enter
                  your passphrase and unlock your wallet.
                </h1>
              </div>
              <div className="flex text-xl text-white font-bold w-full">
                2.&nbsp;&nbsp;&nbsp;
                <h1 className=" font-medium">
                  As the wallet is unlocked, press tools button -&gt; debug
                  console.
                </h1>
              </div>
              <div className="flex text-xl text-white font-bold w-full">
                3.&nbsp;&nbsp;&nbsp;
                <div className="flex flex-col w-full">
                  <h1 className=" font-medium">
                    Paste the following command to the debug console and press
                    Enter.
                  </h1>
                  <div
                    className="text-[#00AEB9] text-xl break-words w-[95%] pt-3 font-medium"
                    style={{ overflowWrap: "break-word", whiteSpace: "normal" }}
                  >
                    protx register_preparel
                    d79f3fcb219ed193dfad3bcb674ji9ji97a84506e58490c586c92290c6b47404c
                    1 [2b03:c206:2137:280:0470::8]:8788
                    GaWwC7mHBBZcz5A4kJMhtj3yqtrpEcc5ko
                    9669357305942fb0265eba4215333550b11110d2103a2e531d2750d1d0a35cbebe0039a874f64295715a1f349d19f55pGaWwC7mHBBZcz5A4kJMhtj3yqtrpEccWVm
                    0 GTK8nxWynGj2DL9Kj6pDXKRJTyZ2e7o9za
                    GXFqfTfmhcTJf1nwQi4J5Q97oFbqja45aot&nbsp;&nbsp;&nbsp;
                    <span className=" border border-[#EC008C] bg-transparent text-white px-3 py-[6px] text-base rounded-[30px] w-[fit-content] cursor-pointer text-nowrap">
                      Copy&nbsp;&nbsp;&nbsp;
                      <Image
                        width={20}
                        height={20}
                        src="/assets/paste.png"
                        alt="copy"
                        className="w-5 h-5 inline-flex"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex text-xl text-white font-bold w-full">
                4.&nbsp;&nbsp;&nbsp;
                <div className="flex flex-col w-full gap-3 font-medium">
                  <h1>
                    Paste the output here and press&nbsp;<strong>Next</strong>
                    &nbsp;button.
                  </h1>
                  <div className="flex flex-wrap content-center border border-[#1EC0CA] rounded-xl bg-[#080525] text-xl text-[#B0B0B0] py-2 w-full h-[120px]">
                    <div
                      className="h-[fit-content] w-full bg-transparent text-xl border-none outline-none px-10 py-1 text-center text-wrap resize-none "
                      style={{
                        overflowWrap: "break-word",
                        whiteSpace: "normal",
                      }}
                    >
                      Paste output here
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full flex flex-col justify-center items-start ${
              pageNum == 4 ? "block" : "hidden"
            } gap-12`}
          >
            <div className="flex items-center justify-center text-white font-bold text-xl prinum text-[24px] text-center">
              Step: 04
            </div>
            <div className="flex ml-6 justify-start items-center text-white font-bold text-2xl">
              Sign The ProRegTx Transaction
            </div>
            <div className="flex justify-start items-start flex-col pl-5 pr-5 gap-8 w-full">
              <div className="flex text-xl text-white font-bold w-full">
                1.&nbsp;&nbsp;&nbsp;
                <div className="flex flex-col w-full font-medium ">
                  <h1 className="">
                    Paste the following command to the Debug console and press
                    Enter.
                  </h1>
                  <div
                    className="text-[#00AEB9] text-xl break-words w-[95%] pt-3"
                    style={{ overflowWrap: "break-word", whiteSpace: "normal" }}
                  >
                    protx register_submit
                    GdjoiwjdoiwjicervomHfNUMNy76Gr5fFHbrelwpfokcokfpoerkkfekfr6rgrg4596eg9vEWFREfgeriepoemepokroepkepokeprkpekgoreg509454095405tGTB^£$T$GTgvbvjnweaaadesskowm54o565r1f6e1e6r1fe6v1e6rv15trvtrv6rt6trtrrttrgtgmirmvovrotmrotmomttg56trt5gr6gv6rb5ujm1i6mn6fv6sc16a68e
                    &nbsp;&nbsp;&nbsp;
                    <span className=" border border-[#EC008C] bg-transparent text-white px-3 py-[6px] text-base rounded-[30px] w-[fit-content] cursor-pointer text-nowrap">
                      Copy&nbsp;&nbsp;&nbsp;
                      <Image
                        width={20}
                        height={20}
                        src="/assets/paste.png"
                        alt="copy"
                        className="w-5 h-5 inline-flex"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex text-xl text-white font-bold w-full">
                2.&nbsp;&nbsp;&nbsp;
                <div className="flex flex-col w-full gap-3 font-medium ">
                  <h1>
                    Paste the output here and press &nbsp;<strong>Next</strong>
                    &nbsp; button.
                  </h1>
                  <div className="flex flex-wrap content-center border border-[#1EC0CA] rounded-xl bg-[#080525] text-xl text-[#B0B0B0] py-2 w-full h-[120px]">
                    <div
                      className="h-[fit-content] w-full bg-transparent text-xl border-none outline-none px-10 py-1 text-center text-wrap resize-none "
                      style={{
                        overflowWrap: "break-word",
                        whiteSpace: "normal",
                      }}
                    >
                      Paste output here
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`w-full flex flex-col justify-center items-start ${
              pageNum == 5 ? "block" : "hidden"
            } gap-12`}
          >
            <div className="flex items-center justify-center text-white font-bold text-xl prinum text-[24px] text-center">
              Step: 05
            </div>
            <div className="flex ml-6 justify-start items-center text-white font-bold text-2xl">
              ProTx Register_ Submit
            </div>
            <div className="flex justify-start items-start flex-col pl-5 pr-5 gap-8 w-full">
              <div className="flex text-xl text-white font-bold w-full">
                1.&nbsp;&nbsp;&nbsp;
                <div className="flex flex-col w-full font-medium">
                  <h1 className="text-[white]">
                    Paste the following command to the Debug console and press
                    Enter.
                  </h1>
                  <div
                    className="text-[#00AEB9] text-xl break-words w-[95%] pt-3"
                    style={{ overflowWrap: "break-word", whiteSpace: "normal" }}
                  >
                    protx register_submit
                    GdjoiwjdoiwjicervomHfNUMNy76Gr5fFHbrelwpfokcokfpoerkkfekfr6rgrg4596eg9vEWFREfgeriepoemepokroepkepokeprkpekgoreg509454095405tGTB^£$T$GTgvbvjnweaaadesskowm54o565r1f6e1e6r1fe6v1e6rv15trvtrv6rt6trtrrttrgtgmirmvovrotmrotmomttg56trt5gr6gv6rb5ujm1i6mn6fv6sc16a68e
                    &nbsp;&nbsp;&nbsp;
                    <span className=" border border-[#EC008C] bg-transparent text-white px-3 py-[6px] text-base rounded-[30px] w-[fit-content] cursor-pointer text-nowrap">
                      Copy&nbsp;&nbsp;&nbsp;
                      <Image
                        width={20}
                        height={20}
                        src="/assets/paste.png"
                        alt="copy"
                        className="w-5 h-5 inline-flex"
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex text-xl text-white font-bold w-full">
                2.&nbsp;&nbsp;&nbsp;
                <div className="flex flex-col w-full gap-3 font-medium">
                  <h1 className="text-[white]">
                    Paste the output here and press Deploy.
                  </h1>
                  <div className="flex flex-wrap content-center border border-[#1EC0CA] rounded-xl bg-[#080525] text-xl text-[#B0B0B0] py-2 w-full h-[120px]">
                    <div
                      className="h-[fit-content] w-full bg-transparent text-xl border-none outline-none px-10 py-1 text-center text-wrap resize-none "
                      style={{
                        overflowWrap: "break-word",
                        whiteSpace: "normal",
                      }}
                    >
                      Paste output here
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center items-center gap-8 p-5">
            {pageNum != 1 && (
              <div
                className="flex justify-center items-center rounded-[20px] bg-[#272E50] text-white py-2 px-6 cursor-pointer font-bold w-[155px] h-[47px]"
                onClick={handlePrev}
              >
                GO BACK
              </div>
            )}
            {pageNum == 5 ? (
              <div
                className="flex justify-center items-center rounded-[20px] bg-[#3CDD22] text-white py-2 px-6 cursor-pointer font-bold w-[155px] h-[47px]"
                onClick={handleDeploy}
              >
                DEPLOY
              </div>
            ) : (
              <div
                className="flex justify-center items-center rounded-[20px] bg-[#3CDD22] text-white py-2 px-6 cursor-pointer font-bold w-[155px] h-[47px]"
                onClick={handleNext}
              >
                NEXT
              </div>
            )}
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
