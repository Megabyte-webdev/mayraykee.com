import MeetingTimeEvent from "./MeetingTimeEvent";
import TimeEvent from "./TimeEvent";

function MeetingTimeLine({current}) {

    const getEvents = () => {
        return current.events.map((currentEvent, index) => <MeetingTimeEvent key={index} currentEvent={currentEvent} />)
    }

    return ( 
    <div className="w-full md:w-[60%] flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-600">
        {current.date}
        </h2>

        <ul className="flex flex-col gap-[10px]">
            {getEvents()}
        </ul>
            
    </div> );
}

export default MeetingTimeLine;