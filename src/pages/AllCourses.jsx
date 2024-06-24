import React, { useContext, useEffect, useState } from "react";
import PopularCourses from "../components/courses/PopularCourses";
import { coursesContentDummy } from "../utils/dashboard/dummys";
import PageCount from "../components/courses/PageCount";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { axiosClient } from "../services/axios-client";
import { AuthenticationContext } from "../context/AuthenticationContext";
import useCourses from "../hooks/useCourses";
import FallbackComponent from "../utils/FallbackComponent";
import RequestLoader from "../utils/RequestLoader";

function AllCourses() {
  const [currentPageContent, setCurrentPageContent] = useState(null);
  const { courses, loading, getCourses } = useCourses();


  useEffect(() => {
     getCourses()
  }, [])

  return (
    <section className="flex flex-col pt-[2%] pb-[10px] min-h-[90%] px-[2%] overflow-y-auto gap-[10%]">
      <PopularCourses />

      {!loading && courses?.length !== 0 && (
        <>
          <ul className="w-full grid grid-cols-4 gap-y-[5%]">
            {currentPageContent}
          </ul>
          <PageCount
            currentPageContent={currentPageContent}
            setCurrentPageContent={setCurrentPageContent}
            contents={courses}
          />
        </>
      )}

      {loading && <RequestLoader />}

       {(!loading && courses.length === 0) && <span className='w-full text-center h-[50%] flex items-center justify-center text-red-500'>Error displaying courses</span>}
    </section>
  );
}

export default AllCourses;
