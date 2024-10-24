import { useState } from "react";
import { VictoryPie } from "victory-pie";

function PopularCourses() {
  const sampleData = [
    { x: "35%", y: 35 },
    { x: "40%", y: 40 },
    { x: "55%", y: 55 },
  ];

  const style = {
    data: {
      fillOpacity: 0.9,
    },
    labels: {
      fontSize: 12,
      fill: "white",
    },
  };

  const colorScale = ["#0f5a02", "#fec64f", "#fc6b57"];
  return (
    <div className="w-full flex flex-col px-[5%] gap-[15px] py-[2%] bg-white rounded-[10px]">
      <div className="w-full flex justify-between h-fit border-b pb-[3px]">
        <span className="font-bold">Popular Courses</span>
      </div>

      <div className="flex items-center h-[230px] justify-center">
        <svg width={200} height={200}>
          <VictoryPie
            style={style}
            colorScale={colorScale}
            standalone={false}
            width={200}
            height={200}
            innerRadius={100}
            data={sampleData}
          />
        </svg>
      </div>

      <ul className="w-full flex flex-col gap-[5px]">
        <li className="flex justify-between w-full">
          <div className="flex items-center gap-[5px]">
            <div className="h-[10px] bg-[#fc6b57] rounded-[2px] w-[10px]" />
            <span className="text-small text-gray-400">Design(55%)</span>
          </div>
            <span className="text-small font-bold text-gray-700">247</span>
        </li>
        <li className="flex justify-between w-full">
          <div className="flex items-center gap-[5px]">
            <div className="h-[10px] bg-green rounded-[2px] w-[10px]" />
            <span className="text-small text-gray-400">Programming(35%)</span>
          </div>
            <span className="text-small font-bold text-gray-700">157</span>
        </li>
        <li className="flex justify-between w-full">
          <div className="flex items-center gap-[5px]">
            <div className="h-[10px] bg-[#fec64f] rounded-[2px] w-[10px]" />
            <span className="text-small text-gray-400">Science(40%)</span>
          </div>
            <span className="text-small font-bold text-gray-700">200</span>
        </li>



      </ul>
    </div>
  );
}

export default PopularCourses;
