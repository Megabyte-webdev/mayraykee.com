import React, {memo} from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressPieChart() {
  return (
    <div className="w-[20%] h-[250px] rounded-[10px] bg-white justify-start flex px-[10px] pt-[10px] flex-col items-center center mt-[120px]">
      <div className="w-[80%] h-[45%]">
        <CircularProgressbar
          value={70}
          styles={buildStyles({
            textColor: "#313131",
            textSize: "20px",
            pathColor: "#313131",
            trailColor: "#f3f4f6",
          })}
          className="text-green "
          text={`${70}%`}
        />
      </div>

      <div className="flex flex-col items-center gap-[8px] ">
        <h6 className="font-semibold text-md text-customBrown">My Progress</h6>
        <p className="font-normal text-center text-customBrown text-[10px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
        <button className="py-[3px] w-[80%] bg-[#4cbc9a] text-white text-[12px] rounded-[5px] hover:scale-105 duration-150 font-meduim">More Details</button>
      </div>
    </div>
  );
}

export default memo(ProgressPieChart);
