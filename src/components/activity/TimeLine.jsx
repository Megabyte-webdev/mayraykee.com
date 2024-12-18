import TimeEvent from "./TimeEvent";

function TimeLine({current}) {

    const getEvents = () => {
        return current.events.map((currentEvent, index) => <TimeEvent key={index} currentEvent={currentEvent} />)
    }

    return ( 
    <div className="w-full flex flex-col gap-3">
        <h2 className="text-lg font-bold text-gray-600">
        {current.date}
        </h2>

        <ul className="flex flex-col gap-4">
            {getEvents()}
        </ul>
            
    </div> );
}

export default TimeLine;