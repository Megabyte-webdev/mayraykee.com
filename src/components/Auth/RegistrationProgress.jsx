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
          className={`flex items-center gap-3 p-2 rounded-md ${
            isSelected ? "bg-gray-800 text-white" : "text-gray-500"
          }`}
        >
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-md">
            <img className="h-6 w-6" src={icon} />
          </div>
          <span className="text-sm font-medium">{currentStep.title}</span>
        </li>
      );
    });
  };

  return (
    <div className="w-[250px] bg-green-600 h-full p-4">
      <ul className="space-y-4">{getSteps()}</ul>
    </div>
  );
}

export default RegistrationProgress;
