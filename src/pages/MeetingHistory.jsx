import MeetingTimeLine from "../components/activity/MeetingTimeLine";
import MyCourseDescription from "../components/activity/MyCourseDescription";
import TimeEvent from "../components/activity/TimeEvent";
import TimeLine from "../components/activity/TimeLine";
import { meetingTimelineDummy, timeScheduleDummy, timelineDummy } from "../utils/dashboard/dummys";

function MeetingHistory() {
    const getMeetingTimeLines = () => {
        return meetingTimelineDummy.map((current, index) => <MeetingTimeLine key={index} current={current} />)
    }
    const getTimeLines = () => {
        console.log(timelineDummy[0])
        return timelineDummy[1].events.map((current, index) => <TimeEvent key={index} currentEvent={current} />)
    }

    return ( 
    <div className="flex flex-col overflow-y-auto w-full h-full gap-[25%] items-start ">
         {getMeetingTimeLines()}
       <div className="flex flex-col gap-[5%] w-full">
        <h3 className="text-lg font-bold text-gray-600">18 May 2024</h3>
        <MyCourseDescription/>
        {getTimeLines()}
       </div>

    </div> );
}

export default MeetingHistory;