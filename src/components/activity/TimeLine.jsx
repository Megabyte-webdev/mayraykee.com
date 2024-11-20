import TimeEvent from "./TimeEvent";

function TimeLine({current}) {

    const getEvents = () => {
        return current.events.map((currentEvent, index) => <TimeEvent key={index} currentEvent={currentEvent} />)
    }

    return ( 
<<<<<<< HEAD
    <div className="w-full flex flex-col gap-3">
=======
    <div className="w-[60%] flex flex-col gap-[20px]">
>>>>>>> main
        <h2 className="text-lg font-bold text-gray-600">
        {current.date}
        </h2>

<<<<<<< HEAD
        <ul className="flex flex-col gap-4">
=======
        <ul className="flex flex-col gap-[10px]">
>>>>>>> main
            {getEvents()}
        </ul>
            
    </div> );
}

export default TimeLine;