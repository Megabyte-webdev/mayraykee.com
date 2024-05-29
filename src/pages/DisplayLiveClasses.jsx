import { useOutletContext } from "react-router-dom";
import LiveClassInfo from "../components/live-classes/LiveClassInfo";

function DisplayLiveClasses() {

    const context = useOutletContext()

    return ( 
    <ul className="w-[50%]">
        <LiveClassInfo context={context} active={true}/>
    </ul> );
}

export default DisplayLiveClasses;