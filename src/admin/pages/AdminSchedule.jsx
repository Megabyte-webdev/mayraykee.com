import Upcoming from "../../components/dashboard/Upcoming";
import UpcomingActivities from "../components/dashboard/UpcomingActivities";
import Calender from "../components/schedule/Calender";

function AdminSchedule() {
  return (
    <main className="w-full justify-between h-[90%] flex py-[2%] items-center px-[1%]">
      <Calender />
      <div className="w-[28%] mt-[-60px]">
        <Upcoming />
      </div>
    </main>
  );
}

export default AdminSchedule;
