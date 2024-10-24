
import MeetingItem from "./MeetingItem";

function MeetingByDate({ data }) {
  return (
    <li className="w-[75%] flex flex-col first:pt-0 pt-[3%] ">
      <div className="w-full flex flex-col gap-[10px]">
        <span className="bg-gray-300 px-[10px] py-[5px] w-fit rounded-[15px] text-sm">
          Class Schedules
        </span>

        <span className="text-small pl-[5px] text-gray-400">{data}</span>

        <ul className="w-full gap-y-2 grid pl-[1%] grid-cols-2">
          <MeetingItem active={true} />
          <MeetingItem active={false} />
          <MeetingItem active={false} />
          <MeetingItem active={false} />
        </ul>
      </div>
    </li>
  );
}

export default MeetingByDate;
