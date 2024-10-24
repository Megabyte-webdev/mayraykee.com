import { FaBookOpenReader } from "react-icons/fa6";

function TopCourses() {
  return (
    <div className="w-full flex flex-col h-[30%] px-[5%] gap-[15px] py-[2%] bg-white rounded-[10px]">
      <div className="w-full flex justify-between h-fit border-b pb-[3px]">
        <span className="font-bold">Top Courses</span>
      </div>

      <ul className="w-full flex flex-col gap-[15px]">
           <li className="w-full flex gap-[5%]">
            <div className="h-[40px] items-center justify-center flex w-[40px] rounded-[5px] bg-[#4cbc9a]/50">
            <FaBookOpenReader className="text-2xl text-[#4cbc9a]"/>
            </div>
            <div className="flex flex-col justify-center">
               <span className="text-[11px] text-gray-400">UI Design</span>
               <span className="text-small text-black font-bold">12.345</span>
            </div>
           </li>
           <li className="w-full flex gap-[5%]">
            <div className="h-[40px] items-center justify-center flex w-[40px] rounded-[5px] bg-[#fec64f]/50">
            <FaBookOpenReader className="text-2xl text-[#fec64f]"/>
            </div>
            <div className="flex flex-col justify-center">
               <span className="text-[11px] text-gray-400">UI Design</span>
               <span className="text-small text-black font-bold">12.345</span>
            </div>
           </li>
      </ul>
    </div>
  );
}

export default TopCourses;
