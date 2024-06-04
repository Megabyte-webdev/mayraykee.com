import NameTag from "../NameTag";
import { usersDummyForMeeting } from "../../utils/dashboard/dummys";
import Posts from "./Posts";

function GeneralPost() {
    const currentUser = usersDummyForMeeting[1]
    return ( <div className="w-full flex flex-col gap-[5px]">
        <h3 className="font-semibold text-black">General</h3>
        <div className="flex w-full h-fit bg-white rounded-[10px] py-[3%] px-[5%]">
            <NameTag initials={currentUser.initials} initialsBackground={currentUser.initialsBackground} />
            <input className={`h-[40px] outline-gray-400 rounded-[10px] bg-gray-100 border w-[80%] pl-[3%] text-small`} placeholder="Write something....."/>
        </div>
    </div> );
}

export default GeneralPost;