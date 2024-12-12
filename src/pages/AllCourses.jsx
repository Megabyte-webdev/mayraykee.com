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
  const sortedCourses = courses?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
     
  return (
    <section className="flex flex-col pt-[2%] h-auto px-5 md:px-[2%] overflow-y-auto gap-[10%]">
     <PopularCourses popular={sortedCourses?.slice(0, 4)} />
      {!loading && courses?.length !== 0 && (
        <>
          <ul className="w-full min-h-auto grid grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 min-[1200px]:grid-cols-4 gap-y-[5%] justify-center place-items-center">
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
