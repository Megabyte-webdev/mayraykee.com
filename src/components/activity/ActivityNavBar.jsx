import { useNavigate } from "react-router-dom";
import { activityNavStates } from "../../utils/constants";
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
