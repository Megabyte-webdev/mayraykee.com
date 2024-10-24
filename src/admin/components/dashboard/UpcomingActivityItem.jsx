function UpcomingActivityItem({ currentActivity }) {
  return (
    <li className="h-[23%] w-full flex py-[5px] items-center px-[10px] justify-between rounded-[10px] bg-gray-200">
      <span className="h-[80%] w-[15%] flex items-center justify-center rounded-[10px] text-white bg-green">
        {currentActivity.date}
      </span>
      <div className="w-[80%] h-full flex flex-col justify-between py-[3px]">
        <div className="w-full justify-between flex ">
          <span className="text-small font-semibold">
            {currentActivity.name}
          </span>
          <span className="text-[10px] font-semibold text-gray-400">
            {currentActivity.time}
          </span>
        </div>
        <div className="w-full justify-between items-center flex ">
          <span className="text-[8px] text-green cursor-pointer hover:underline">
            {currentActivity.link}
          </span>
          <span
            className={`text-[10px] ${
              currentActivity.status === 1 ? "text-red-600" : "text-gray-400"
            }`}
          >
            {currentActivity.status === 1 ? "Due Soon" : "Upcoming"}
          </span>
        </div>
      </div>
    </li>
  );
}

export default UpcomingActivityItem;
