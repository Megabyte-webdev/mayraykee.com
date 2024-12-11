import { useEffect, useState } from "react";
import ArrowLeft from "../../assets/pngs/arrow-left-gray.png";
import ArrowRight from "../../assets/pngs/arrow-right-gray.png";
import CourseCard from "./CourseCard";

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
        } cursor-pointer flex items-center justify-center duration-100 hover:scale-105 px-1 md:px-2 `}
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
    <div className="w-full flex justify-between my-2 py-2 sticky bottom-0 bg-gray-100">
      <span className="text-sm text-gray-600">
        Showing <span className="text-green font-medium">{resultsText()}</span> from{" "}
        <span className="text-green font-medium">{totalContents}</span> results
      </span>
      <div className="flex gap-[20px] items-center justify-between">
        <img
          className="h-[15px] cursor-pointer"
          src={ArrowLeft}
          alt="Previous"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        />
        <ul className="flex flex-wrap gap-2 justify-center items-center">
          {getPages()}
        </ul>
        <img
          className="h-[15px] cursor-pointer"
          src={ArrowRight}
          alt="Next"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, getPages().length))
          }
        />
      </div>
    </div>
  );
}

export default PageCount;
