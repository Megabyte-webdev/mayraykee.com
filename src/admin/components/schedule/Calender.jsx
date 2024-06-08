import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import EventItem from "./EventItem";
import { eventsDummy } from "../../utils/dummy";

const localizer = dayjsLocalizer(dayjs);

// const events = [
//   {
//     title: "All Day Event very long title",
//     allDay: true,
//     start: new Date(2024, 5, 15),
//     end: new Date(2024, 5, 19),
//   },
//   {
//     title: "Long Event",
//     start: new Date(2024, 5, 12),
//     end: new Date(2024, 5, 12),
//   },
//   {
//     title: "DTS STARTS",
//     start: new Date(2024, 5, 20),
//     end: new Date(2024, 5, 24),
//   },
// ];



function Calender() {


  const eventWrapper = () => <div className="h-[100px] w-[100px] bg-red-300"></div>

  return (
    <div className="w-[70%] h-full flex flex-col px-[2%] py-[1%] gap-[2%] rounded-[10px] bg-white">
      <div className="w-full flex justify-end border-b pb-[5px] px-[5px]">
        <button className="px-[10px] hover:scale-105 duration-75 py-[3px] text-sm bg-green rounded-[10px] text-white">
          New Schedule
        </button>
      </div>

      <div className="w-full h-[90%]">
        <Calendar
          localizer={localizer}
          events={eventsDummy}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          components={{
            eventWrapper: EventItem
          }}
        />
      </div>
    </div>
  );
}

export default Calender;
