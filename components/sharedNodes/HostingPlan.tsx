export default function HostingPlan(props: any) {
  return (
    <div className="flex flex-wrap justify-center gap-12 w-full">
      <div className="flex flex-col flex-wrap w-[90%] bg-[#272E50] lg:w-[45%] rounded-[30px] h-[fit-content] gap-4 justify-center items-start px-7 py-5 hosting-detailed-body">
        <div className="flex gap-5 justify-between items-center w-full">
          <h1 className="text-[27px] text-white font-bold ">#01 </h1>
          <h1 className="text-2xl text-white font-bold ml-6">Hosting Plan</h1>
          <div className="w-[150px] hosting-plan2 px-1 py-1 font-bold ">
            {props.hostingPlan} {props.hostingPlan==1?" Month":" Months"}
          </div>
        </div>
        <div className="flex gap-5 justify-start items-center w-full flex-wrap ">
          <h1 className="text-xl text-white w-[250px]">Neoxa Been Deposit</h1>
          <div className="bg-[#0B1331] py-2 border border-[#ec008c] rounded-md w-[240px] text-white text-xl text-center">
            0/1000000
          </div>
          <h1 className="text-xl text-white w-[100px]">
            &#8317; 0% &#8318;
          </h1>
        </div>
        <div className="flex gap-5 justify-start items-center w-full flex-wrap">
          <h1 className="text-xl text-white w-[250px]">Deposit Collateral</h1>
          <div className="bg-[#0B1331] py-2 border border-[#ec008c] rounded-md w-[240px]  text-white text-xl text-center">100000-900000</div>
          <h1 className="text-[12px] text-[#26FF34] border-[#26FF34] border-[1px] bg-[#3CDD22] bg-opacity-40 py-3 px-6 rounded-full flex gap-3 cursor-pointer">
            DEPOSIT
          </h1>
        </div>
        <div className="flex gap-5 justify-start items-center w-full lg:flex-wrap">
          <h1 className="text-xl text-white">Participants: 0/4</h1>
          
        </div>
        <div className="flex gap-5 justify-start items-center w-full lg:flex-wrap">
          <div className="w-[130px] join-button py-3 px-5 text-white cursor-pointer">
            JOIN
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap w-[90%] bg-[#272E50] lg:w-[45%] rounded-[30px] h-[fit-content] gap-4 justify-center items-start px-7 py-5 hosting-detailed-body">
        <div className="flex gap-5 justify-between items-center w-full">
          <h1 className="text-[27px] text-white font-bold ">#02 </h1>
          <h1 className="text-2xl text-white font-bold ml-6">Hosting Plan</h1>
          <div className="w-[150px] hosting-plan2 px-1 py-1 font-bold ">
          {props.hostingPlan} {props.hostingPlan==1?" Month":" Months"}
          </div>
        </div>
        <div className="flex gap-5 justify-start items-center w-full flex-wrap">
          <h1 className="text-xl text-white w-[250px]">Neoxa Been Deposit</h1>
          <div className="bg-[#0B1331] py-2 border border-[#ec008c] rounded-md w-[240px] text-white text-xl text-center">
            100000/1000000
          </div>
          <h1 className="text-xl text-white  w-[100px]">
            &#8317; 10% &#8318;
          </h1>
        </div>
        <div className="flex gap-5 justify-start items-center w-full flex-wrap">
          <h1 className="text-xl text-white w-[250px]">Deposit Collateral</h1>
          <div className="bg-[#0B1331] py-2 border border-[#ec008c] rounded-md w-[240px]  text-white text-xl text-center">100000-900000</div>
          <h1 className="text-[12px] text-[#26FF34] border-[#26FF34] border-[1px] bg-[#3CDD22] bg-opacity-40 py-3 px-6 rounded-full flex gap-3 cursor-pointer">
            DEPOSIT
          </h1>
        </div>
        <div className="flex gap-5 justify-start items-center w-full lg:flex-wrap">
          <h1 className="text-xl text-white">Participants: 1/4</h1>
          
        </div>
        <div className="flex gap-5 justify-start items-center w-full lg:flex-wrap">
          <div className="w-[130px] join-button py-3 px-5 text-white cursor-pointer">
            JOIN
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap w-[90%] bg-[#272E50] lg:w-[45%] rounded-[30px] h-[fit-content] gap-4 justify-center items-start px-7 py-5 hosting-detailed-body">
        <div className="flex gap-5 justify-between items-center w-full">
          <h1 className="text-[27px] text-white font-bold ">#03 </h1>
          <h1 className="text-2xl text-white font-bold ml-6">Hosting Plan</h1>
          <div className="w-[150px] hosting-plan2 px-1 py-1 font-bold ">
          {props.hostingPlan} {props.hostingPlan==1?" Month":" Months"}
          </div>
        </div>
        <div className="flex gap-5 justify-start items-center w-full flex-wrap">
          <h1 className="text-xl text-white w-[250px]">Neoxa Been Deposit</h1>
          <div className="bg-[#0B1331] py-2 border border-[#ec008c] rounded-md w-[240px] text-white text-xl text-center">
            500000/1000000
          </div>
          <h1 className="text-xl text-white w-[100px]">
            &#8317; 50% &#8318;
          </h1>
        </div>
        <div className="flex gap-5 justify-start items-center w-full flex-wrap">
          <h1 className="text-xl text-white w-[250px]">Deposit Collateral</h1>
          <div className="bg-[#0B1331] py-2 border border-[#ec008c] rounded-md w-[240px]  text-white text-xl text-center">500000</div>
          <h1 className="text-[12px] text-[#26FF34] border-[#26FF34] border-[1px] bg-[#3CDD22] bg-opacity-40 py-3 px-6 rounded-full flex gap-3 cursor-pointer">
            DEPOSIT
          </h1>
        </div>
        <div className="flex gap-5 justify-start items-center w-full lg:flex-wrap">
          <h1 className="text-xl text-white">Participants: 3/4</h1>
          
        </div>
        <div className="flex gap-5 justify-start items-center w-full lg:flex-wrap">
          <div className="w-[130px] join-button py-3 px-5 text-white cursor-pointer">
            JOIN
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-wrap w-[90%] bg-[#272E50] lg:w-[45%] rounded-[30px] h-[fit-content] gap-4 justify-center items-start px-7 py-5 hosting-detailed-body">
        <div className="flex gap-5 justify-between items-center w-full">
          <h1 className="text-[27px] text-white font-bold ">#04 </h1>
          <h1 className="text-2xl text-white font-bold ml-6">Hosting Plan</h1>
          <div className="w-[150px] hosting-plan2 px-1 py-1 font-bold ">
          {props.hostingPlan} {props.hostingPlan==1?" Month":" Months"}
          </div>
        </div>
        <div className="flex gap-5 justify-start items-center w-full flex-wrap">
          <h1 className="text-xl text-white w-[250px]">Neoxa Been Deposit</h1>
          <div className="bg-[#0B1331] py-2 border border-[#ec008c] rounded-md w-[240px] text-white text-xl text-center">
            800000/1000000
          </div>
          <h1 className="text-xl text-white w-[100px]">
            &#8317; 80% &#8318;
          </h1>
        </div>
        <div className="flex gap-5 justify-start items-center w-full flex-wrap">
          <h1 className="text-xl text-white w-[250px]">Deposit Collateral</h1>
          <div className="bg-[#0B1331] py-2 border border-[#ec008c] rounded-md w-[240px]  text-white text-xl text-center">100000-200000</div>
          <h1 className="text-[12px] text-[#26FF34] border-[#26FF34] border-[1px] bg-[#3CDD22] bg-opacity-40 py-3 px-6 rounded-full flex gap-3 cursor-pointer">
            DEPOSIT
          </h1>
        </div>
        <div className="flex gap-5 justify-start items-center w-full lg:flex-wrap">
          <h1 className="text-xl text-white">Participants: 2/4</h1>
        </div>
        <div className="flex gap-5 justify-start items-center w-full lg:flex-wrap">
          <div className="w-[130px] join-button py-3 px-5 text-white cursor-pointer">
            JOIN
          </div>
        </div>
      </div>
    </div>
  );
}
