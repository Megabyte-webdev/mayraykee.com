import { useState } from "react";
import { IoIosCheckboxOutline } from "react-icons/io";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

function Module() {
  const [viewDescription, setViewDescription] = useState(false);

  const toogleDescription = () => setViewDescription(!viewDescription);

  return (
    <div onClick={() => console.log('Clicked')} className="w-full  flex flex-col border-b pb-[5px]">
      <div className="flex w-full justify-between items-start">
        <div className="flex gap-[10px] items-start">
          <IoIosCheckboxOutline className="text-green text-4xl" />
          <h3 className="font-semibold cursor-pointer  hover:scale-[101%] duration-50 text-[13px] text-black">
            Welcome to the Certified Cyber Intelligence Investigator (CCII)
          </h3>
        </div>
        <div className="flex gap-[5px]">
          <span className="text-small text-green">10/10</span>
          {viewDescription ? (
            <MdOutlineKeyboardArrowDown
              onClick={toogleDescription}
              className="text-lg cursor-pointer"
            />
          ) : (
            <MdOutlineKeyboardArrowUp
              onClick={toogleDescription}
              className="text-lg cursor-pointer"
            />
          )}
        </div>
      </div>

      {viewDescription && <div className="w-full pl-[10%] pr-[8%] text-small pt-[3px]">
        <p className="w-full text-[11px] border-t border-dashed">
          Understanding the Manual Reading Assin gment, Prep Review Quiz History
          and Background
        </p>
      </div>}
    </div>
  );
}

export default Module;
