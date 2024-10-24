import { useNavigate } from "react-router-dom";
import { memo} from "react";

function ExamsNavBar({ navState, setNavState, navStates }) {
  const navigate = useNavigate();

  const handleOnVideoo = (current) => {
      navigate(`/dashboard/exams/${current}`);
    setNavState(current);
  };

  const handleOnHome = () => {
    navigate("/dashboard/exams");
    setNavState(navStates.courses)
  };
 
  const getButtons = () => {
    return Object.keys(navStates).map((currentKey, index) => {
      const currentState = navStates[currentKey];
      
      return (
        <button
          key={index}
          onClick={() => {
            if(currentState === navStates.courses){
                handleOnHome()
            } else{
               handleOnVideoo(currentState)
            }
          }}
          className={`border-b-2 pb-[5px] pr-[10px] text-sm font-semibold ${
            navState === currentState
              ? "text-[#4cbc9a] border-b-[#4cbc9a]"
              : "text-gray-400 border-b-gray-200"
          }`}
        >
          {currentState}
        </button>
      );
    });
  };

  return (
    <div className="w-full">
      <div className="w-[30%] flex">{getButtons()}</div>
    </div>
  );
}

export default memo(ExamsNavBar);
