import { useState } from "react";
import VideoImg from "../../assets/pngs/video.png";
import { FormatPrice } from "../../utils/UtilMethods";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import Tick from "../../assets/pngs/tick.png";
import { useLocation, useNavigate } from "react-router-dom";

function CourseAction({ data }) {
  const [addToWishList, setAddToWishList] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toogleAddToWishList = () => setAddToWishList(!addToWishList);

  const navigateToCheckoutPage = () => {
    

   
     let routeId = ` ${data.id} ${data.name}`;
   

    navigate(`/courses/checkout_session/${routeId}`, {
      state: { data: [data] },
    });
  };

  const testNavigate = () =>
    navigate(`/courses/display/${data.id} ${data.name}`, {
      state: { data: data, previousPath: location.pathname },
    });

  const getThingsToLearn = () => {
    if (data.things_to_learn?.length === 0 || !data.things_to_learn) {
      return "No Data Found";
    }

    return data?.things_to_learn?.map((currentThing, index) => (
      <li
        className="flex items-center gap-[5px] text-small text-gray-400"
        key={index}
      >
        <img src={Tick} className="h-[10px]" />
        {currentThing}
      </li>
    ));
  };

  return (
    <div className="w-[45%] h-fit px-[2%] py-[3%] gap-[20px] flex flex-col bg-white rounded-[10px]">
      <div className="h-[250px] bg-gray-300 flex items-center justify-center rounded-[10px]">
        <div className="flex flex-col justify-center items-center gap-[10px]">
          <img className="h-[70px] w-[70px]" src={VideoImg} />
          <h3 className="font-bold text-black">Live Classes</h3>
        </div>
      </div>

      <div className="h-[200px] w-full flex flex-col gap-[15px]">
        <div className="w-full flex justify-between">
          <div className=" flex items-center gap-[10px]">
            <h3 className="font-bold text-2xl text-gray-700">{`${FormatPrice(
              Number(data?.price)
            )}.00`}</h3>
            <span className=" text-sm line-through text-gray-400">{`${FormatPrice(
              99
            )}.00`}</span>
            <p className=" py-[3px] rounded-[5px] border text-red-300 border-red-300 px-[5px]">
              Save 50%
            </p>
          </div>
          <div className="flex items-center gap-[5px]">
            {addToWishList ? (
              <IoIosHeart
                onClick={toogleAddToWishList}
                className="text-red-300 text-md cursor-pointer hover:scale-105 duration-100"
              />
            ) : (
              <IoIosHeartEmpty
                onClick={toogleAddToWishList}
                className=" cursor-pointer text-md hover:scale-105 duration-100"
              />
            )}
            <p className="text-sm text-gray-400">Add to wish list</p>
          </div>
        </div>

        <div className="w-ful flex flex-col gap-[15px]">
          <h3 className="font-bold text-start text-md text-gray-700">
            What you will learn:
          </h3>
          <ul className="w-full pl-[10px] gap-y-[5px] grid grid-cols-2">
            {getThingsToLearn()}
          </ul>
        </div>

        <div className="w-full flex justify-between ">
          <button
            onClick={testNavigate}
            className="border w-[45%] rounded-[10px] border-black hover:scale-105 duration-100 font-semibold py-[10px]"
          >
            Add to Cart
          </button>
          <button
            onClick={navigateToCheckoutPage}
            className="w-[45%] rounded-[10px] hover:scale-105 duration-100 text-white font-semibold bg-green py-[10px]"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseAction;
