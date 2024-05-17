import React, { useState } from "react";
import PopularCourses from "../components/courses/PopularCourses";
import { coursesContentDummy } from "../utils/dashboard/dummys";
import PageCount from "../components/courses/PageCount";
import { useLocation } from "react-router-dom";


function AllCourses() {
    const [currentPageContent, setCurrentPageContent] = useState(null);
    

  return (
    <section className="flex flex-col pt-[2%] pb-[10px] min-h-[90%] px-[2%] overflow-y-auto gap-[10%]">
      <PopularCourses />

      <ul className="w-full grid grid-cols-4 gap-y-[5%]">
        {currentPageContent}
      </ul>
      <PageCount
        currentPageContent={currentPageContent}
        setCurrentPageContent={setCurrentPageContent}
        contents={coursesContentDummy}
      />
    </section>
  );
}

export default AllCourses;
