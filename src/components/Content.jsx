import { LineGraph } from "./LineGraph";
import { LocationPie } from "./LocationPie";
import { ReferralPie } from "./ReferralPie";
  import axios from "axios";
  import { useEffect, useContext } from "react";
  import { DataContext } from "../context/data";

export const Content = () => {
  const { chartData, setChartData } = useContext(DataContext);

 useEffect(() => {
    axios
      .get('https://fe-task-api.mainstack.io/')
      .then((response) => {
        console.log(response);
        setChartData(response.data);
      });
  }, [setChartData]);

  console.log(chartData);

  return (
    <div className="px-[60px] pb-[160px]">
      <div className=" mt-[24px] flex justify-between items-center flex-wrap ">
        <div>
          <p className="text-[20px] font-extrabold text-[#131316]">
            Good morning, Blessing ⛅️
          </p>
          <p className="mt-[10px] text-[14px] text-[#31373D]">
            Check out your dashboard summary.
          </p>
        </div>
        <button>
          <p className="text-[14px] text-[#FF5403] font-bold">
            {" "}
            View analytics
          </p>
        </button>
      </div>
      <div className="mt-[23px] flex  items-center gap-[10px] text-[14px] text-[#31373D] font-bold mb-[24px]">
        <button className="py-[12px] px-[16px] rounded-[100px] border-[1px] border-[#EFF1F6]">
          3 Days
        </button>
        <button className="py-[12px] px-[16px] rounded-[100px] border-[1px] border-[#EFF1F6]">
          1 Day
        </button>
        <button className="py-[12px] px-[16px] rounded-[100px] border-[1px] border-[#EFF1F6]">
          7 Days
        </button>
        <button className="py-[12px] px-[16px] rounded-[100px] border-[1px] border-[#EFF1F6]">
          30 Days
        </button>
        <button className="py-[12px] px-[16px] rounded-[100px] border-[1px] border-[#FF5403] text-[#FF5403] bg-[#FFEEE5]">
          All Time
        </button>
        <button className="py-[12px] px-[16px] rounded-[100px] border-[1px] border-[#EFF1F6]">
          Custom Date
        </button>
      </div>

      <div className="h-[576px] border-[1.8px] border-[#EFF1F6] rounded-[12px] mb-[24px] pt-[32px] px-[24px] flex justify-between flex-col">
        {/* <div className=" flex justify-between flex-col"> */}
        <div className="h-[30%]">
        <div className="flex justify-between items-center flex-wrap ">
          <p className="text-[16px] text-[#131316] font-bold">Page Views</p>
          <div className="w-[20px] h-[20px] flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/dvikxcdh3/image/upload/v1682339006/main%20stack/info_crriso.png"
              alt=""
            />
          </div>
        </div>
        <p className="mt-[8px] text-[13px] mb-[24px]">All time</p>
        <p className="mb-[42px] text-[#131316] text-[54px] font-bold">500</p>
        </div>
        <div className="h-[70%] w-full">
        <LineGraph />
        </div>
        {/* </div> */}
      </div>

      <div className="h-[326px] flex justify-between items-center gap-[16px] flex-wrap">
        <div className="w-[48%] h-full border-[1.8px] border-[#EFF1F6] rounded-[12px] mb-[224px]"><LocationPie /></div>
        <div className="w-[48%] h-full border-[1.8px] border-[#EFF1F6] rounded-[12px] mb-[224px]"><ReferralPie /></div>
      </div>
    </div>
  );
};

// export default Content;
