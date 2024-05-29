import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function LiveClassInfo({ active, context }) {
  const newState = { new_video: "Current Session" };
  const navigate = useNavigate();
  const [doesExist, setDoesExist] = useState();

  const createAndSetNewNavBarOption = () => {
    Object.keys(context.navStates).map((current) => {
      if (context.navStates[current] === newState["new_video"]) {
        setDoesExist(true);
        return;
      }
      setDoesExist(false);
    });
  };

  useEffect(() => {
    if (!doesExist && typeof doesExist !== "undefined") {
      context.setNavStates((prev) => {
        return { ...prev, ...newState };
      });
      context.setNavState(newState["new_video"]);
      navigate(`/dashboard/live_classes/${newState["new_video"]}`);
    } else if (doesExist) {
      context.setNavState(newState["new_video"]);
      navigate(`/dashboard/live_classes/${newState["new_video"]}`);
    }
  }, [doesExist]);

  return (
    <li
      className={`w-[98%] h-[80px] flex items-center px-[3%] justify-between   rounded-[10px] ${
        active ? "bg-green" : "bg-gray-300"
      }`}
    >
      <hr
        className={`h-[80%]  ${
          active ? "bg-white w-[1%]" : "bg-green w-[1.5%]"
        } rounded-t-[10px] rounded-b-[10px]`}
      />

      <div
        className={`w-[95%] flex flex-col h-[80%] justify-center gap-[10px] ${
          active ? "text-white" : "text-black"
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <p className="font-semibold text-small">
            Design Thinking and Innovation
          </p>
          <button
            onClick={createAndSetNewNavBarOption}
            className={`${
              active ? " text-green bg-white " : "border border-green "
            } rounded-[30px] hover:scale-105 duration-100 px-[15px] text-[10px]`}
          >
            Join
          </button>
        </div>
        <p className="text-small">8:00 Am - 9:00 PM</p>
      </div>
    </li>
  );
}

export default LiveClassInfo;
