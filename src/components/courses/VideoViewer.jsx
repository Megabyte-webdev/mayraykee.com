import VideoImg from "../../assets/pngs/video.png";
import Wallet from "../../assets/pngs/wallet.png";
import BookMark from "../../assets/pngs/bookmark.png";
import Share from "../../assets/pngs/share.png";
import "../../css/extras.css";
import { Rating } from "react-simple-star-rating";
import { useEffect, useReducer } from "react";
import { CourseDisplayOptionsReducer, initialState } from "../../reducers/CourseDisplayOptionsReducer";
import { courseDisplayOptions } from "../../utils/constants";

function VideoViewer({ data }) {

    const [state, dispatch] = useReducer(CourseDisplayOptionsReducer, initialState)


    const getDisplayOptions = () => {
        return Object.keys(courseDisplayOptions).map((currentKey) => {
          const currentValue = courseDisplayOptions[currentKey];
          return (
            <li
              onClick={() =>
                dispatch({
                  type: { value: currentValue, props: data },
                  payload: currentValue,
                })
              }
              key={currentKey}
              className={`w-[33%] ${
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
              type: { value: courseDisplayOptions.about, props: data },
              payload: courseDisplayOptions.about,
            });
        }
      }, []);

  return (
    <div className="w-[60%] bg-white px-[2%] pt-[2%] flex flex-col gap-[25px] rounded-[10px] ">
      <div className="w-full flex flex-col gap-[10px]">
        <div className="h-fit w-full text-start items-start flex flex-col  gap-[3%]">
          <div className="flex justify-between w-full">
            <h2 className="font-extrabold text-lg">{data?.name}</h2>

            <div className="w-[15%] flex justify-between">
              <img
                src={Wallet}
                className="h-[15px] hover:scale-105 duration-100 cursor-pointer"
              />
              <img
                src={BookMark}
                className="h-[15px] hover:scale-110 duration-100 cursor-pointer"
              />
              <img
                src={Share}
                className="h-[15px] hover:scale-105 duration-100 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-[3%]">
            <span className="flex items-center text-sm font-semibold gap-[5%]">
              {`${data?.rating}.0`}
              <Rating
                className="w-full pb-[3px]"
                size={12}
                readonly
                initialValue={data?.rating}
              />
            </span>
            <hr className="border-l border-gray-400 h-[20px]" />

            <span className="text-gray-400 text-sm">
              Review ({data?.review?.length})
            </span>

            <hr className="border-l border-gray-400 h-[20px]" />

            <span className="text-gray-400 text-sm">
              {data?.students?.length} Students
            </span>
          </div>
        </div>

        <div className="h-[300px] bg-gray-300 flex items-center justify-center rounded-[10px]">
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <img className="h-[70px] w-[70px]" src={VideoImg} />
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="h-[300px] w-full flex flex-col gap-[15px]">
        <ul className="w-full flex">
            {getDisplayOptions()}
            </ul>
        {state?.component}
      </div>
    </div>
  );
}

export default VideoViewer;
