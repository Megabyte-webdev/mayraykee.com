import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {Helmet} from 'react-helmet'


function Courses() {
  const [currentPageContent, setCurrentPageContent] = useState(null);

  return (
    <>
     <Helmet>
        <title>Mayrahkee - Africa | Courses</title>
      </Helmet>
      <Outlet />
    </>
  );
}

export default Courses;
