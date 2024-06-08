import { upcomingActivitesDummy } from "../../utils/contants";
import UpcomingActivityItem from "./UpcomingActivityItem";

function UpcomingActivities() {
  const getActivities = upcomingActivitesDummy.map((curretActivity) => (
    <UpcomingActivityItem
      key={curretActivity.id}
      currentActivity={curretActivity}
    />
  ));

  return (
    <div className="w-[30%] rounded-[10px] bg-white h-full py-[1%] px-[2%]">
      <div className="w-full h-[10%] flex text-sm justify-between font-semibold border-b-[1.5px] bordder-b-gray-400 pb-[3px]">
        <h3 className="text-black">Upcoming Activites</h3>
        <span className="text-green hover:underline cursor-pointer ">
          See all
        </span>
      </div>

      <ul className="h-[90%] flex flex-col divide-y-[1px] py-[2%] justify-between">
        {getActivities}
      </ul>
    </div>
  );
}

export default UpcomingActivities;
