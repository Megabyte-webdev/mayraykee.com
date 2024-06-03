import { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ExamsNavBar from "../components/exams/ExamsNavBar";

function Exams() {
  const [navStates, setNavStates] = useState({
    courses: "Courses",
  });
  const [navState, setNavState] = useState(navStates.courses);

  return (
    <section className="flex flex-col w-full h-full gap-[3%] mb-[10px] pt-[2%] overflow-y-auto px-[2%] items-start ">
      <Helmet>
        <title>Mayrahkee - Africa | Exams</title>
      </Helmet>

      <ExamsNavBar
        navStates={navStates}
        navState={navState}
        setNavState={setNavState}
      />
      <Outlet context={{ navState, navStates, setNavState, setNavStates }} />
    </section>
  );
}

export default Exams;
