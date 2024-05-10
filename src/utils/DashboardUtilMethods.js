import SideBarOptionCard from "../components/dashboard/SideBarOptionCard";
import { sidebar_keys } from "./constants";

// export const getSideBarOptions = (state, dispatch) => {
//   return Object.keys(sidebar_keys).map((currentKey) => {
//     const currentOption = sidebar_keys[currentKey];
//     return (
//       <SideBarOptionCard
//         state={state}
//         dispatch={dispatch}
//         option={currentOption}
//         key={currentOption.title}
//       />
//     );
//   });
// };

export const getInitialDashboardState = (extractedRoute, intialDashboardState) => {
  let stateToReturn = null;

  Object.keys(sidebar_keys).map((currentKey) => {
    const currentOption = sidebar_keys[currentKey];

    if (extractedRoute.includes(currentOption.route)) {
      stateToReturn = currentOption;
      return;
    }
  });

  return stateToReturn ? stateToReturn : intialDashboardState;
};
