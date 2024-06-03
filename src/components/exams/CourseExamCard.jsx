import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../ProgressBar";

function CourseExamCard({ active, context }) {
  const newState = { ongoing: "Ongoing Exam" };
  const navigate = useNavigate();
  const [doesExist, setDoesExist] = useState();

  const createAndSetNewNavBarOption = () => {
    Object.keys(context.navStates).map((current) => {
      if (context.navStates[current] === newState["ongoing"]) {
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
      context.setNavState(newState["ongoing"]);
      navigate(`/dashboard/exams/${newState["ongoing"]}`);
    } else if (doesExist) {
      context.setNavState(newState["ongoing"]);
      navigate(`/dashboard/live_classes/${newState["ongoing"]}`);
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
            Certified Cyber Intelligence Investigator (CCII)
          </p>
          <button
            onClick={createAndSetNewNavBarOption}
            className={`${
              active ? " text-green bg-white " : "border border-green "
            } rounded-[30px] hover:scale-105 duration-100 px-[15px] text-[10px]`}
          >
            Continue
          </button>
        </div>
        <div className='h-[10px] w-[50%] flex '>
        <ProgressBar bgcolor={'green'} progress={30} height={2} />
        </div>
          </div>
    </li>
  );
}

export default CourseExamCard;
