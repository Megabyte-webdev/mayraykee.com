import { useNavigate } from "react-router-dom";
import { activityNavStates } from "../../utils/constants";
<<<<<<< HEAD
import { memo } from "react";

function ActivityNavBar({ navState, setNavState }) {
  const navigate = useNavigate();

  const navItems = [
    { label: "You", state: activityNavStates.you, path: "/dashboard/activity" },
    { label: "Following", state: activityNavStates.following, path: "/dashboard/activity/following" },
    { label: activityNavStates.myCourses, state: activityNavStates.myCourses, path: "/dashboard/activity/my_courses" },
    { label: activityNavStates.meetingHistory, state: activityNavStates.meetingHistory, path: "/dashboard/activity/meeting_history" },
    { label: activityNavStates.forumGroups, state: activityNavStates.forumGroups, path: "/dashboard/activity/forums_groups" },
  ];

  const handleNavigation = (state, path) => {
    setNavState(state);
    navigate(path);
  };

  return (
    <div className="w-full">
      <div className="w-full md:w-[50%] divide-x-2 flex flex-wrap">
        {navItems.map(({ label, state, path }) => (
          <button
            key={state}
            onClick={() => handleNavigation(state, path)}
            className={`border-b-2 p-[10px] md:py-[5px] md:px-[10px] text-sm font-semibold ${
              navState === state ? "text-[#4cbc9a] border-b-[#4cbc9a]" : "text-gray-400 border-b-gray-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(ActivityNavBar);
=======
import { memo, useEffect } from "react";

function ActivityNavBar({navState, setNavState}) {
    const navigate = useNavigate()

const handleOnYou = () => {
    setNavState(activityNavStates.you)
    navigate('/dashboard/activity')
}

const handleOnFollowing = () => {
    setNavState(activityNavStates.following)
    navigate('/dashboard/activity/following')
}
const handleOnMyCourses = () => {
    setNavState(activityNavStates.myCourses)
    navigate('/dashboard/activity/my_courses')
}

const handleOnMeetingHistory = () => {
    setNavState(activityNavStates.meetingHistory)
    navigate('/dashboard/activity/meeting_history')
}
const handleOnForumsGroups = () => {
    setNavState(activityNavStates.forumGroups)
    navigate('/dashboard/activity/forums_groups')
}

  return( 
  <div className="w-full">
    <div className="w-[50%] divide-x-2 flex">
        <button onClick={handleOnYou}  className={`border-b-2 pb-[5px] pr-[10px] text-sm font-semibold ${navState === activityNavStates.you ? 'text-[#4cbc9a] border-b-[#4cbc9a]' : 'text-gray-400 border-b-gray-200'}`}>You</button>
        <button onClick={handleOnFollowing} className={`border-b-2 pb-[5px] px-[10px] text-sm font-semibold ${navState === activityNavStates.following ? 'text-[#4cbc9a] border-b-[#4cbc9a]' : 'text-gray-400 border-b-gray-200'}`}>Following</button>
        <button onClick={handleOnMyCourses} className={`border-b-2 pb-[5px] px-[10px] text-sm font-semibold ${navState === activityNavStates.myCourses ? 'text-[#4cbc9a] border-b-[#4cbc9a]' : 'text-gray-400 border-b-gray-200'}`}>{activityNavStates.myCourses}</button>
        <button onClick={handleOnMeetingHistory} className={`border-b-2 pb-[5px] px-[10px] text-sm font-semibold ${navState === activityNavStates.meetingHistory ? 'text-[#4cbc9a] border-b-[#4cbc9a]' : 'text-gray-400 border-b-gray-200'}`}>{activityNavStates.meetingHistory}</button>
        <button onClick={handleOnForumsGroups} className={`border-b-2 pb-[5px] px-[10px] text-sm font-semibold ${navState === activityNavStates.forumGroups ? 'text-[#4cbc9a] border-b-[#4cbc9a]' : 'text-gray-400 border-b-gray-200'}`}>{activityNavStates.forumGroups}</button>
    </div>
  </div>)
}

export default  memo(ActivityNavBar);
>>>>>>> main
