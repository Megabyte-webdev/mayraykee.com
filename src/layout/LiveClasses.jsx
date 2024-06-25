import { useEffect, useState } from "react";
import ActivityNavBar from "../components/activity/ActivityNavBar";
import { activityNavStates } from "../utils/constants";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import LiveClassNavBar from "../components/live-classes/LiveClassNavBar";

function LiveClasses() {
  const [navStates, setNavStates] = useState({
    live_classes: "Live Class",
  });
  const [navState, setNavState] = useState(navStates.live_classes);

 
  return (
    
    <section className="flex flex-col w-full h-full gap-[3%] mb-[10px] py-[2%] overflow-y-auto px-[2%] items-start ">
      <Helmet>
        <title>Mayrahkee - Africa | Live Classes</title>
      </Helmet>

      <LiveClassNavBar
        navStates={navStates}
        navState={navState}
        setNavState={setNavState}
      />
        <Outlet context={{ navState, navStates, setNavState, setNavStates }} />
    </section>
  );
}

export default LiveClasses;
