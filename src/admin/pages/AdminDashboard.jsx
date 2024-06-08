import ClassProgress from "../components/dashboard/ClassProgress";
import EnrolledStudents from "../components/dashboard/EnrolledStudents";
import MeetingSummary from "../components/dashboard/MeetingSummary";
import UpcomingActivities from "../components/dashboard/UpcomingActivities";
import { meetingSummary } from "../utils/contants";

function AdminDashboard() {
  return (
    <main className="h-[90%] w-full pt-[2%] px-[2%] flex flex-col gap-[5%] items-center">
      <MeetingSummary data={meetingSummary}/>

      <div className="w-full flex justify-between h-[50%]">
        <EnrolledStudents/>
        <ClassProgress/>
        <UpcomingActivities/>
      </div>

      
    </main>
  );
}

export default AdminDashboard;
