import React, { useState } from "react";
import PopularCourses from "../components/courses/PopularCourses";
import { coursesContentDummy } from "../utils/dashboard/dummys";
import PageCount from "../components/courses/PageCount";
import { Outlet } from "react-router-dom";

function Courses() {
  const [currentPageContent, setCurrentPageContent] = useState(null);


  return (
    <>
      <Outlet/>
    </>
  );
}

export default Courses;
