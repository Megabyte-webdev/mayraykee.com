import { useEffect, useState } from "react";
import ArrowLeft from "../../assets/pngs/arrow-left-gray.png";
import ArrowRight from "../../assets/pngs/arrow-right-gray.png";
import CourseCard from "./CourseCard";

<<<<<<< HEAD
function PageCount({ currentPageContent, setCurrentPageContent, contents }) {
  const totalContents = contents.length;
  const [contentPerPage, setContentPerPage] = useState(8); // Default for larger screens
  const [currentPage, setCurrentPage] = useState(1);
  const [contentRange, setContentRange] = useState(null);

  // Adjust items per page based on screen size
  useEffect(() => {
    const updateContentPerPage = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 640) {
        setContentPerPage(2); // 1 column
      } else if (screenWidth <= 900) {
        setContentPerPage(4); // 2 columns
      } else if (screenWidth <= 1200) {
        setContentPerPage(6); // 3 columns
      } else {
        setContentPerPage(8); // 4 columns
      }
    };

    updateContentPerPage(); // Set initial value
    window.addEventListener("resize", updateContentPerPage); // Listen to screen size changes
    return () => window.removeEventListener("resize", updateContentPerPage);
  }, []);

  // Calculate content range for pagination
  useEffect(() => {
    const calculatedUpper = currentPage * contentPerPage;
    const calculatedLower = calculatedUpper - contentPerPage;
    setContentRange({ lower: calculatedLower, upper: calculatedUpper });
  }, [currentPage, contentPerPage]);

  // Populate current page content
  useEffect(() => {
    if (!contentRange) return;

    const pageContent = [];
    for (let index = contentRange.lower; index < contentRange.upper; index++) {
      if (index >= totalContents) break; // Avoid overflow
      pageContent.push(<CourseCard key={index} data={contents[index]} />);
    }
    setCurrentPageContent(pageContent);
  }, [contentRange, contents]);

  const getPages = () => {
    const totalPages = Math.ceil(totalContents / contentPerPage);
    return Array.from({ length: totalPages }, (_, index) => (
      <li
        key={index}
        onClick={() => setCurrentPage(index + 1)}
        className={`${
          currentPage === index + 1 ? "bg-green text-white" : "bg-white"
        } cursor-pointer flex items-center justify-center duration-100 hover:scale-105 px-2`}
      >
        {index + 1}
      </li>
    ));
  };

  const resultsText = () => {
    if (!contentRange) return "";
    const lower = contentRange.lower + 1;
    const upper = Math.min(contentRange.upper, totalContents);
    return `${lower}-${upper}`;
  };

  return (
    <div className="w-full flex justify-between my-4">
      <span className="text-sm text-gray-400">
        Showing <span className="text-green">{resultsText()}</span> from{" "}
        <span className="text-green">{totalContents}</span> results
=======
const getContentRange = (currentPage, contentPerPage, setContentRange) => {
  const calculatedUpper = currentPage * contentPerPage;
  const calculatedLower = calculatedUpper - contentPerPage;

  setContentRange({
    lower: calculatedLower,
    upper: calculatedUpper,
  });
};

function PageCount({ currentPageContent, setCurrentPageContent, contents }) {
  const totalContents = contents.length;
  const contentPerPage = 8;
  const totalPages = Math.ceil(contents.length / contentPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentRange, setContentRange] = useState(null);

  const getCourseContent = () => {
    //    const upperLowerDifference = (contentRange.upper - contentRange.lower)
    //    const contentIndexes =
    if (!contentRange) {
      return;
    }
    let pageContent = [];
    for (
      let index = contentRange?.lower;
      index < contentRange?.upper;
      index++
    ) {
      if (index >= totalContents) {
        console.log(index);
        console.log(totalContents);
        console.log(pageContent.length);
        break;
      }
      pageContent.push(
        <CourseCard key={index} data={contents[index]} />
      );
    }

    console.log(pageContent.length);
    setCurrentPageContent(pageContent);
  };

  const getPages = () => {
    const pages = [];

    for (let index = 0; index < totalPages; index++) {
      pages.push(
        <li
          onClick={() => setCurrentPage(index + 1)}
          key={index}
          className={`${
            currentPage === index + 1 ? "bg-green text-white" : "bg-white"
          } flex items-center justify-center duration-100 hover:scale-105`}
        >
          {index + 1}
        </li>
      );
    }

    return pages;
  };

  const resultsText = () => {
    let text = "";
    const formattedLower = contentRange?.lower + 1 ;
    let formattedUpper ;

    if((formattedLower + contentPerPage) !== totalContents && (totalContents - formattedLower) < contentPerPage){
        formattedUpper = totalContents
    } else{
        formattedUpper = contentRange?.upper
    }

    text = ` ${formattedLower}-${formattedUpper} `;

    return text;
  };


  useEffect(() => {
    getContentRange(currentPage, contentPerPage, setContentRange);
  }, [currentPage]);

  useEffect(() => {
    getCourseContent();
  }, [contentRange]);

  return (
    <div className="w-full flex justify-between">
      <span className="text-sm text-gray-400">
        Showing
        <span className="text-green">{resultsText()}</span>{" "}
        from <span className="text-green">{totalContents} </span>results
>>>>>>> main
      </span>
      <div className="flex gap-[20px] items-center justify-between">
        <img
          className="h-[15px] cursor-pointer"
          src={ArrowLeft}
<<<<<<< HEAD
          alt="Previous"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        />
        <ul className="flex flex-wrap gap-2 justify-center items-center">
=======
        />
        <ul className="*:h-[30px] *:w-[40px] *:text-center *:cursor-pointer *:rounded-[5px] w-[60%] justify-center gap-[10%]  flex ">
>>>>>>> main
          {getPages()}
        </ul>
        <img
          className="h-[15px] cursor-pointer"
          src={ArrowRight}
<<<<<<< HEAD
          alt="Next"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, getPages().length))
          }
=======
>>>>>>> main
        />
      </div>
    </div>
  );
}

export default PageCount;
