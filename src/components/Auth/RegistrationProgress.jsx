import React from "react";
import { registration_steps_keys } from "../../utils/constants";

function RegistrationProgress({ state }) {
  const getSteps = () => {
    return Object.keys(registration_steps_keys).map((key) => {
      const currentStep = registration_steps_keys[key];
      const isSelected = currentStep.title === state.title;
      const icon = isSelected ? currentStep.activeIcon : currentStep.inactiveIcon;

      return (
        <li 
          key={currentStep.title} 
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 p-2 rounded-md w-full"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-md">
            <img className="h-6 w-6" src={icon} alt={`${currentStep.title} icon`} />
          </div>
          <div className="text-center sm:text-left">
            <p className="font-semibold text-xs sm:text-sm text-white">
              {currentStep.title}
            </p>
            <p className="text-xs text-gray-400 hidden sm:block">
              {currentStep.desc}
            </p>
          </div>
        </li>
      );
    });
  };

  return (
    <div className="w-full h-full bg-green-600 p-4">
      <ul className="flex flex-row sm:flex-col flex-wrap gap-3">{getSteps()}</ul>
    </div>
  );
}

export default RegistrationProgress;
