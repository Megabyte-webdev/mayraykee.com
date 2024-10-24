
import React from "react";
import { registration_steps_keys } from "../../utils/constants";

function RegistrationProgress({ state, dispatch }) {
  const getSteps = () => {
    return Object.keys(registration_steps_keys).map((key) => {
      const currentStep = registration_steps_keys[key];

      const isSelected = currentStep.title === state.title;
      const icon = isSelected ? currentStep.activeIcon : currentStep.inactiveIcon;

      return (
        <li key={currentStep.title} className="w-full flex flex-col sm:flex-row items-center gap-4">
          <div className="flex flex-col items-center sm:w-[25%]">
            <div
              className={`bg-white rounded-md p-[10px] sm:p-[15px] ${
                isSelected && "border-2 border-gray-800 transition duration-1000"
              }`}
            >
              <img className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px]" src={icon} />
            </div>
            {currentStep.title !== registration_steps_keys.welcome_video.title && (
              <hr className="hidden sm:block h-[20px] sm:h-[25px] border-dashed border w-0" />
            )}
          </div>

          <div className="text-center sm:text-left hidden sm:block">
            <p className="font-semibold text-[10px] sm:text-[15px] text-white">{currentStep.title}</p>
            <p className="font-medium text-small text-gray-400">{currentStep.desc}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="w-full sm:w-full h-full bg-green flex items-center justify-center">
      <ul className="w-max sm:w-[60%] flex flex-row sm:flex-col gap-3 sm:gap-6">{getSteps()}</ul>
    </div>
  );
}

export default RegistrationProgress;