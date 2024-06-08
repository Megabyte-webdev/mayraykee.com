import { memo } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function ClassProgressItem({ currentClass }) {
  return (
    <li
      key={currentClass.id}
      className="w-full h-[23%] py-[5px] px-[10px] bg-gray-200 justify-between rounded-[10px] flex"
    >
      <div className="w-[35%] flex flex-col h-full justify-center">
        <span className="text-black text-sm font-semibold">
          {currentClass.name}
        </span>
        <span className="text-gray-400 text-[10px]">
          {currentClass.number} Registered
        </span>
      </div>
      <div className="flex w-[20%] h-full">
        <CircularProgressbar
          value={currentClass.percentage}
          styles={buildStyles({
            textColor: "#313131",
            textSize: "20px",
            pathColor: "#0f5a02",
            trailColor: "#f3f4f6",
          })}
          className="text-green "
          text={`${currentClass.percentage}%`}
        />
      </div>
    </li>
  );
}

export default memo(ClassProgressItem);
