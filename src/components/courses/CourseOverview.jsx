import { Rating } from "react-simple-star-rating";
import "../../css/extras.css";
import NameTag from "../NameTag";
<<<<<<< HEAD
import { useEffect, useReducer } from "react";
=======
import { useEffect, useReducer, useState } from "react";
>>>>>>> main
import { CourseOverviewOptionsReducer } from "../../reducers/CourseOverviewOptionsReducer";
import { courseOverviewOptions, responseKeys } from "../../utils/constants";
import About from "./About";
import useFetch from "../../hooks/useFetch";

function CourseOverview({ data }) {
  const initialState = {
    value: courseOverviewOptions.about,
    component: <About data={data} />,
    init: true,
  };
  const [state, dispatch] = useReducer(
    CourseOverviewOptionsReducer,
    initialState
  );

<<<<<<< HEAD
  const { datum, getDatum } = useFetch("Faculty Error");
=======
  const { datum, getDatum, loading } = useFetch("Faculty Error");
>>>>>>> main

  const getAuthors = () => {
    return data?.authors?.map((currentAuthor, index) => (
      <NameTag
        key={index}
        initials={currentAuthor?.initials}
        name={currentAuthor?.name}
        initialsBackground={currentAuthor?.initialsBackground}
      />
    ));
  };

  const getOverviewOptions = () => {
    return Object.keys(courseOverviewOptions).map((currentKey) => {
      const currentValue = courseOverviewOptions[currentKey];
      return (
        <li
          onClick={() =>
            dispatch({
              type: { value: currentValue, props: data },
              payload: currentValue,
            })
          }
          key={currentKey}
<<<<<<< HEAD
          className={`flex-1 px-2 ${
            state.value === currentValue
              ? "border-green font-semibold"
              : "border-gray-400 font-normal"
          } cursor-pointer text-sm md:text-base h-fit text-center border-b-2 pb-[5px]`}
=======
          className={`w-[25%] ${
            state.value === currentValue
              ? "border-green font-semibold"
              : "border-gray-400 font-normal"
          } cursor-pointer text-sm h-fit   text-center border-b-2  pb-[5px]`}
>>>>>>> main
        >
          {currentValue}
        </li>
      );
    });
  };

  useEffect(() => {
    if (state.init) {
      dispatch({
        type: { value: courseOverviewOptions.about, props: data },
        payload: courseOverviewOptions.about,
      });
    }
    getDatum(
      `/faculty/getFacultyById/${data?.faculty_id}`,
      data?.faculty_id,
      responseKeys.Faculty
    );
  }, []);

  return (
<<<<<<< HEAD
    <div className="min-w-[50%] rounded-[10px] bg-white px-4 md:px-[3%] pt-4 md:pt-[2%]">
      {/* First Section */}
      <div className="h-auto w-full text-start flex flex-col gap-4">
        <h2 className="font-extrabold text-lg md:text-xl">{data?.title}</h2>
        <p className="text-sm md:text-base text-gray-400">{data?.description}</p>

        {/* First Section - 2nd Layer */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-start justify-start gap-2">
            <p className="font-semibold text-sm text-black">Faculty:</p>
            <span className="text-sm text-gray-400">
=======
    <div className="w-[50%] rounded-[10px] bg-white px-[3%] pt-[2%]">
      {/* First Section */}
      <div className="h-[150px] w-full text-start items-start flex flex-col  gap-[5%]">
        <h2 className="font-extrabold text-xl">{data?.title}</h2>
        <p className="text-sm font-meduim text-gray-400">{data?.description}</p>

        {/* First Section - 2nd layer */}
        <div className="flex w-full items-center gap-[3%]">
          {/* <span className="flex items-center font-semibold gap-[5%]">
            {`${data?.rating}.0`}
            <Rating
              className="w-full pb-[3px]"
              size={15}
              readonly
              initialValue={data?.rating}
            />
          </span> */}
          <div className="flex items-start justify-start gap-[3px]">
            <p className="font-semibold text-sm text-black">Faculty:</p>
            <span className="w-full text-sm text-gray-400">
>>>>>>> main
              {datum ? datum?.title : "None"}
            </span>
          </div>

<<<<<<< HEAD
          <hr className="hidden md:block border-l border-gray-400 h-[20px]" />

          <span className="text-sm text-gray-400">
            Participants ({data?.participate})
          </span>

          <hr className="hidden md:block border-l border-gray-400 h-[20px]" />

          <span className="text-sm font-semibold text-black">
            Program:
            <span className="text-red-700">{` ${data?.program}`}</span>
          </span>
        </div>
      </div>

      {/* Second Section */}
      <div className="min-h-32 w-full flex flex-col gap-4 mt-4">
        <ul className="w-full flex flex-wrap justify-between">
=======
          <hr className="border-l border-gray-400 h-[20px]" />

          <span className="text-gray-400 text-sm">
            Participants ({data?.participate})
          </span>

          <hr className="border-l border-gray-400 h-[20px]" />

          <span className="text-small font-semibold text-black">
            Program:
            <span className=" text-red-700">{` ${data?.program}`}</span>
          </span>
        </div>

        {/* First section - 3rd layer (Authors) */}
      </div>

      {/* Second Section */}
      <div className="h-[300px] w-full flex flex-col gap-[15px]">
        <ul className="w-full flex ">
>>>>>>> main
          {getOverviewOptions()}
        </ul>
        <div className="overflow-y-auto">{state?.component}</div>
      </div>
    </div>
  );
}

export default CourseOverview;
