import { Helmet } from "react-helmet";
import ClassProgress from "../components/schedule/ClassProgress";
import ScheduleCalender from "../components/schedule/ScheduleCalender";
import { Calendar } from "primereact/calendar";
import Upcoming from "../components/dashboard/Upcoming";

const preselectedDates = [
  new Date(2024, 5, 15), // Pre-selected date (December 25, 2023)
  new Date(2024, 5, 16), // New Year's Eve
];

function Schedule() {
  return (
<<<<<<< HEAD
    <section className="w-full flex flex-wrap gap-3 py-[1%] overflow-y-auto justify-between h-[90%] px-[2%]">
=======
    <section className="w-full flex py-[1%] overflow-y-auto justify-between h-[90%] px-[2%]">
>>>>>>> main
      <Helmet>
        <title>Mayrahkee - Africa | Schedule</title>
      </Helmet>

<<<<<<< HEAD
      <div className="flex-1 w-2/3 flex flex-col gap-[15px]">
        <div className="flex flex-col gap-[15px]">
          <h3 className="font-bold text-gray-700">Ongoing Class</h3>
          <div className="w-full flex gap-2 justify-between overflow-x-auto">
=======
      <div className="w-[60%] flex flex-col gap-[15px]">
        <div className="flex flex-col gap-[15px]">
          <h3 className="font-bold text-gray-700">Ongoing Class</h3>
          <div className="w-full flex gap-[20px]">
>>>>>>> main
            <ClassProgress
              colorOpaque={"bg-green/50"}
              text={"UI Design Basic"}
              score={7}
              color={"bg-green"}
            />
            <ClassProgress
              colorOpaque={"bg-yellow-500/50"}
              text={"Full Stack Development"}
              score={8}
              color={"bg-yellow-500"}
            />
          </div>
        </div>
        <ScheduleCalender />
      </div>

<<<<<<< HEAD
      <div className="w-full md:max-w-[250px] gap-[5%] flex flex-col">
         <div className="bg-gray-400 h-[300px] md:h-[55%] w-full rounded-[10px]">
=======
      <div className="w-[35%] gap-[5%] flex flex-col">
        <div className="bg-gray-400 h-[55%] w-full rounded-[10px]">
>>>>>>> main
          <Calendar
            value={preselectedDates}
            selectionMode="multiple"
            showWeek
            className="w-full text-gray-700 text-sm h-full"
            inline
          />
        </div>
        <Upcoming/>
      </div>
    </section>
  );
}

export default Schedule;
