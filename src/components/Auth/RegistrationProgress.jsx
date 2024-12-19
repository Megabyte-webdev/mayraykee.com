import React from "react";
import { registration_steps_keys } from "../../utils/constants";

function RegistrationProgress({ state, dispatch }) {
  const getSteps = () => {
    return Object.keys(registration_steps_keys).map((key) => {
      const currentStep = registration_steps_keys[key];

      const isSelected = currentStep.title === state.title;
      const icon = isSelected ? currentStep.activeIcon : currentStep.inactiveIcon;

      return (
        <li key={currentStep.title} className="w-full flex flex-col md:flex-row items-center gap-4">
          <div className="flex flex-col items-center md:w-[25%]">
            <div
              className={`bg-white rounded-md p-[10px] md:p-[15px] ${
                isSelected && "border-2 border-gray-800 transition duration-1000"
              }`}
            >
              <img className="h-[20px] w-[20px] md:h-[25px] md:w-[25px]" src={icon} alt={currentStep.title} />
            </div>
            {currentStep.title !== registration_steps_keys.welcome_video.title && (
              <hr className="hidden md:block h-[20px] md:h-[25px] border-dashed border w-0" />
            )}
          </div>

          <div className="text-center md:text-left hidden md:block">
            <p className="font-semibold text-[10px] sm:text-[15px] text-white">{currentStep.title}</p>
            <p className="font-medium text-small text-gray-400">{currentStep.desc}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="w-full h-[100px] md:h-full bg-green flex items-center justify-center">
      <ul className="flex md:flex-col justify-center items-center w-full md:w-[60%]">{getSteps()}</ul>
    </div>
  );
}

export default RegistrationProgress;
