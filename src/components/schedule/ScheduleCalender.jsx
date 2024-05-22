import { timeScheduleDummy, timelineDummy } from "../../utils/dashboard/dummys";

function ScheduleCalender() {
  const getScheduleTimes = () => {
    return timeScheduleDummy.map((current) => (
      <li className="flex w-full items-center h-[30px] text-gray-400 text-sm justify-between">
        {current}
        <hr className="w-[90%] border border-dashed " />
      </li>
    ));
  };

  return (
    <>
      <h3 className="font-bold text-gray-700">Today Schedule</h3>
      <div className="w-full bg-white relative  h-[80%] rounded-[10px]">
        <div className="w-[40%] h-[20%] rounded-[10px] left-[15%] flex justify-between top-[2.5%] bg-white shadow-md overflow-hidden absolute">
          <hr className="w-[8%] h-full bg-red-400 " />
          <div className="w-[90%] pl-[2%] flex h-full pt-[5%]">
            <h2 className="font-semibold flex flex-col text-gray-600 gap-[5px] text-small">
              UX Research<span className="font-normal">A/B Testing</span>
            </h2>
          </div>
        </div>
        <div className="w-[40%] h-[20%] rounded-[10px] left-[40%] flex justify-between top-[30%] bg-white shadow-md overflow-hidden absolute">
          <hr className="w-[8%] h-full bg-green-400 " />
          <div className="w-[90%] pl-[2%] flex h-full pt-[5%]">
            <h2 className="font-semibold flex flex-col text-gray-600 gap-[5px] text-small">
              UI Design Beginner<span className="font-normal">Wireframe</span>
            </h2>
          </div>
        </div>
        <div className="w-[40%] h-[20%] rounded-[10px] left-[15%] flex justify-between top-[77%] bg-white shadow-md overflow-hidden absolute">
          <hr className="w-[8%] h-full bg-yellow-400 " />
          <div className="w-[90%] pl-[2%] flex h-full pt-[5%]">
            <h2 className="font-semibold flex flex-col text-gray-600 gap-[5px] text-small">
              Fullstack Developer
              <span className="font-normal">Form Request</span>
            </h2>
          </div>
        </div>

        <ul className="w-full flex h-full flex-col px-[10px] justify-between ">
          {getScheduleTimes()}
        </ul>
      </div>
    </>
  );
}

export default ScheduleCalender;
