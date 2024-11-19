import { useNavigate } from "react-router-dom";
import { activityNavStates } from "../../utils/constants";
import { memo } from "react";

function ActivityNavBar({ navState, setNavState }) {
  const navigate = useNavigate();

  const handleNavigation = (state, path) => {
    setNavState(state);
    navigate(path);
  };

  const navItems = [
    { label: "You", state: activityNavStates.you, path: "/dashboard/activity" },
    { label: "Following", state: activityNavStates.following, path: "/dashboard/activity/following" },
    { label: activityNavStates.myCourses, state: activityNavStates.myCourses, path: "/dashboard/activity/my_courses" },
    { label: activityNavStates.meetingHistory, state: activityNavStates.meetingHistory, path: "/dashboard/activity/meeting_history" },
    { label: activityNavStates.forumGroups, state: activityNavStates.forumGroups, path: "/dashboard/activity/forums_groups" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex space-x-4 px-4 py-2">
        {navItems.map((item) => (
          <button
            key={item.state}
            onClick={() => handleNavigation(item.state, item.path)}
            className={`border-b-2 pb-1 text-sm font-semibold whitespace-nowrap ${
              navState === item.state
                ? "text-[#4cbc9a] border-b-[#4cbc9a]"
                : "text-gray-400 border-b-gray-200"
            } hover:text-[#4cbc9a] transition-colors duration-200`}
            aria-current={navState === item.state ? "page" : undefined}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default memo(ActivityNavBar);
