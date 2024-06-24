import MeetingByDate from "../components/activity/MeetingByDate";

function ActivityMeeting() {
  return (
    <ul className="h-full w-full flex flex-col divide-y-[1px] gap-[10pxb]">
      <MeetingByDate data={"Dec 31 wednesday"} />
      <MeetingByDate data={"Dec 31 wednesday"} />
    </ul>
  );
}

export default ActivityMeeting;
