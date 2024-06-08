import { weeksDummy } from "../../utils/dummy";
import ProgressBar from "../ProgressBar";

function CourseActivity() {
  const getWeeksAnalysis = weeksDummy.map((current) => <li className="w-full flex items-center gap-[10px]">
     <span className="text-sm text-gray-500 font-semibold">{`W${current.week}`}</span>
     <div className="w-[95%] flex flex-col">
       <ProgressBar progress={current.current} bgcolor={'#4cbc9a'}/>
       <ProgressBar progress={current.last} bgcolor={'#fec64f'}/>
     </div>
  </li>);

  return (
    <div className="h-[50%] bg-white flex flex-col gap-[5%] justify-between px-[3%] py-[1%] w-full rounded-[10px]">
      <div className="w-full flex justify-between border-b pb-[3px]">
        <span className="font-bold">Courses Activity</span>

        <div className="flex gap-[10px]">
          <div className="flex items-center gap-[5px]">
            <div className="h-[10px] bg-[#4cbc9a] rounded-[2px] w-[10px]" />
            <span className="text-small text-gray-400">This Week</span>
          </div>

          <div className="flex items-center gap-[5px]">
            <div className="h-[10px] bg-[#fec64f] rounded-[2px] w-[10px]" />
            <span className="text-small text-gray-400">Last Week</span>
          </div>
        </div>

        <div className="flex font-semibold text-small *:cursor-pointer *:px-[10px] *:border-b-2">
          <span className="">Insight</span>
          <span className="border-b-[#4cbc9a] text-[#4cbc9a] ">Selling</span>
        </div>
      </div>

      <ul className="flex flex-col w-full justify-between h-[70%]">{getWeeksAnalysis}</ul>

     <div className="flex gap-[5%]">
      <span className="text-small text-gray-400">
        275 sales = 100%
      </span>

      <span className="text-small text-gray-400">
        132 sales = 50%
      </span>
      <span className="text-small text-gray-400">
        66 sales = 25%
      </span>
     </div>
    </div>
  );
}

export default CourseActivity;
