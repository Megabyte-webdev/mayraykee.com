import React, { memo } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressPieChart() {
  return (
    <div className="w-full max-w-[300px] h-auto rounded-[10px] bg-white flex flex-col items-center p-[10px] mt-[20px]"> {/* Updated styles for responsiveness */}
      <div className="w-full h-[60%] flex justify-center items-center"> {/* Centering the chart */}
        <CircularProgressbar
          value={70}
          styles={buildStyles({
            textColor: "#313131",
            textSize: "20px",
            pathColor: "#313131",
            trailColor: "#f3f4f6",
          })}
          text={`${70}%`}
        />
      </div>

      <div className="flex flex-col items-center gap-[8px] text-center"> {/* Center text elements */}
        <h6 className="font-semibold text-md text-customBrown">My Progress</h6>
        <p className="font-normal text-customBrown text-sm px-2"> {/* Changed to text-sm for better responsiveness */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </p>
        <button className="py-[5px] w-[80%] bg-[#4cbc9a] text-white text-sm rounded-[5px] hover:scale-105 duration-150 font-medium"> {/* Adjusted button size */}
          More Details
        </button>
      </div>
    </div>
  );
}

export default memo(ProgressPieChart);
