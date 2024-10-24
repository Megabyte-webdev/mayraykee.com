import { useEffect, useState } from "react";
import ArrowLeft from "../../assets/pngs/arrow-left-gray.png";
import ArrowRight from "../../assets/pngs/arrow-right-gray.png";
import CourseCard from "./CourseCard";

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
      </span>
      <div className="flex gap-[20px] items-center justify-between">
        <img
          className="h-[15px] cursor-pointer"
          src={ArrowLeft}
        />
        <ul className="*:h-[30px] *:w-[40px] *:text-center *:cursor-pointer *:rounded-[5px] w-[60%] justify-center gap-[10%]  flex ">
          {getPages()}
        </ul>
        <img
          className="h-[15px] cursor-pointer"
          src={ArrowRight}
        />
      </div>
    </div>
  );
}

export default PageCount;
