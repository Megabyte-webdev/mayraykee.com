import { useNavigate } from "react-router-dom";
import { activityNavStates } from "../../utils/constants";
import { memo, useEffect } from "react";

function ActivityNavBar({navState, setNavState}) {
    const navigate = useNavigate()

const handleOnYou = () => {
    setNavState(activityNavStates.you)
    navigate('/activity')
}

const handleOnFollowing = () => {
    setNavState(activityNavStates.following)
    navigate('/activity/following')
}

  return( 
  <div className="w-full">
    <div className="w-[30%] flex">
        <button onClick={handleOnYou}  className={`border-b-2 pb-[5px] pr-[10px] text-sm font-semibold ${navState === activityNavStates.you ? 'text-[#4cbc9a] border-b-[#4cbc9a]' : 'text-gray-400 border-b-gray-200'}`}>You</button>
        <button onClick={handleOnFollowing} className={`border-b-2 pb-[5px] pl-[10px] text-sm font-semibold ${navState === activityNavStates.following ? 'text-[#4cbc9a] border-b-[#4cbc9a]' : 'text-gray-400 border-b-gray-200'}`}>Following</button>
    </div>

  </div>)
}

export default  memo(ActivityNavBar);
