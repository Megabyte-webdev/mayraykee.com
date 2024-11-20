import TimeEvent from "./TimeEvent";

function TimeLine({current}) {

    const getEvents = () => {
        return current.events.map((currentEvent, index) => <TimeEvent key={index} currentEvent={currentEvent} />)
    }

    return ( 
    <div className="w-full md:w-[60%] flex flex-col gap-[20px]">
        <h2 className="text-lg font-bold text-gray-600">
        {current.date}
        </h2>

        <ul className="flex flex-col gap-[10px]">
            {getEvents()}
        </ul>
            
    </div> );
}

export default TimeLine;