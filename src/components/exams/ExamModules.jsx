import ProgressBar from "../ProgressBar";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import Module from "./Module";
import { useState } from "react";

function ExamModule() {
  const [viewModules, setViewModules] = useState(false);

  const toogleViewModules = () => setViewModules(!viewModules);

  return (
    <div className="w-[30%] h-full flex flex-col gap-[5%]">
      <div className="px-[5%] bg-green rounded-[10px] text-white justify-between flex flex-col py-[3%] h-[20%]">
        <p>Certified Cyber Intelligence Investigator (CCII)</p>
        <ProgressBar bgcolor={"green"} progress={30} height={2} />
      </div>

      <div className={`w-full bg-white ${viewModules ? 'h-[75%]' : 'h-fit'} rounded-[10px]  flex flex-col gap-[5%] p-[2%]`}>
        <button
          onClick={toogleViewModules}
          className="w-full text-sm border flex justify-between items-center px-[2%] py-[3px] rounded-[5px] bg-gray-100"
        >
          Quiz Questions
          {viewModules ? (
            <MdOutlineKeyboardArrowUp className="text-lg" />
          ) : (
            <MdOutlineKeyboardArrowDown className="text-lg" />
          )}
        </button>
        {viewModules && (
          <ul className="flex flex-col gap-[20px] overflow-y-auto scroll-m-5">
            <Module />
            <Module />
            <Module />
            <Module />
            <Module />
          </ul>
        )}
      </div>
    </div>
  );
}

export default ExamModule;
