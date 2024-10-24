import TimeLine from "../components/activity/TimeLine";
import { timelineDummy } from "../utils/dashboard/dummys";

function Following() {
    const getTimeLines = () => {
        return timelineDummy.map((current, index) => <TimeLine key={index} current={current} />)
    }

    return ( 
    <div className="flex flex-col w-full h-full gap-[10%] items-start ">
    {getTimeLines()}
    </div> );
}

export default Following;