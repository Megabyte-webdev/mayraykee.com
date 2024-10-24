import { FormatNumber } from "../../../utils/UtilMethods";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function CoursesOverviewItem({ currentItem }) {
  return (
    <li
      className={`w-[30%] flex items-center justify-between px-[10px] rounded-[10px] h-full ${currentItem.backgroundColor}`}
    >
      <img src={currentItem.icon} className="h-[35px]" />
      <div className="flex flex-col text-white">
        <span className="text-md font-bold">
          {FormatNumber(currentItem.number)}
        </span>
        <span className="text-small font-bnormal">{currentItem.title}</span>
      </div>

      <div className="h-[50%] flex w-[30%]">
        <CircularProgressbar
          value={currentItem.progress}
          styles={buildStyles({
            textColor: "#313131",
            textSize: "20px",
            pathColor: "#ffffff",
            trailColor: "#9ca3af",
          })}
          className="text-green "
        />
      </div>
    </li>
  );
}

export default CoursesOverviewItem;
