import { Rating } from "react-simple-star-rating";
import "../../css/extras.css";
import NameTag from "../NameTag";
import { useEffect, useReducer, useState } from "react";
import {
  CourseOverviewOptionsReducer,
  initialState,
} from "../../reducers/CourseOverviewOptionsReducer";
import { courseOverviewOptions } from "../../utils/constants";

function CourseOverview({ data }) {
  const [state, dispatch] = useReducer(
    CourseOverviewOptionsReducer,
    initialState
  );

  const [optionContent, setOptionContent] = useState();

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
          className={`w-[25%] ${
            state.value === currentValue
              ? "border-green font-semibold"
              : "border-gray-400 font-normal"
          } cursor-pointer text-sm h-fit  text-center border-b-2  pb-[5px]`}
        >
          {currentValue}
        </li>
      );
    });
  };

  useEffect(() => {
    if(state.init){
        dispatch({
          type: { value: courseOverviewOptions.about, props: data },
          payload: courseOverviewOptions.about,
        });
    }
  }, []);

  return (
    <div className="w-[50%] rounded-[10px] bg-white px-[3%] pt-[2%]">
      {/* First Section */}
      <div className="h-[260px] w-full text-start items-start flex flex-col  gap-[5%]">
        <h2 className="font-extrabold text-xl">{data.name}</h2>
        <p className="text-sm font-meduim text-gray-400">{data?.mainDesc}</p>

        {/* First Section - 2nd layer */}
        <div className="flex w-full items-center gap-[3%]">
          <span className="flex items-center font-semibold gap-[5%]">
            {`${data?.rating}.0`}
            <Rating
              className="w-full pb-[3px]"
              size={15}
              readonly
              initialValue={data?.rating}
            />
          </span>
          <hr className="border-l border-gray-400 h-[20px]" />

          <span className="text-gray-400 text-sm">
            Review ({data?.review?.length})
          </span>

          <hr className="border-l border-gray-400 h-[20px]" />

          <span className="text-sm font-semibold text-black">
            <span className=" text-red-700">{data?.slots}</span> slots
            avalilable
          </span>
        </div>

        {/* First section - 3rd layer (Authors) */}
        <div className="flex items-start justify-start flex-col gap-[10px] w-full">
          <p className="font-semibold text-sm text-black">Course Authors</p>
          <ul className="w-full grid pl-[10px] grid-cols-3">{getAuthors()}</ul>
        </div>
      </div>

      {/* Second Section */}
      <div className="h-[300px] w-full flex flex-col gap-[15px]">
        <ul className="w-full flex">{getOverviewOptions()}</ul>
        {state?.component}
      </div>
    </div>
  );
}

export default CourseOverview;
