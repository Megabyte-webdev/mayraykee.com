import { useEffect, useState } from "react";
import { FormatPrice, FormatPriceInUsd } from "../../utils/UtilMethods";
import TagLogo from "../../assets/pngs/tag-logo.png";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { onFailure } from "../../utils/notifications/OnFailure";
import { useNavigate } from "react-router-dom";

function CheckoutSummary({ checkoutCourses, termsStatus, toogleTermsStatus }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate()

  const getItemsSummary = () => {
    let courseTotal = 0;
    if (!checkoutCourses || checkoutCourses?.length === 0) {
      return;
    }
    const listComponent = checkoutCourses.map((currentCourse, index) => {
      const discountPrice = Number(currentCourse?.price) * 0.2; //default discount of 20%
      courseTotal =
        courseTotal +
        (Number(currentCourse?.price) - Number(currentCourse?.price) * 0.2);
      return (
        <li
          key={index}
          className="flex last:border-b-0 border-b pb-[5px] border-black border-dotted flex-col gap-[5px] w-full"
        >
          <p className="text-small font-semibold">
            Title: {currentCourse.name}
          </p>
          <div className="flex flex-col gap-[8px] w-full">
            <span className="justify-between text-small flex w-full">
              Course Price
              <span>{FormatPrice(Number(currentCourse?.price))}</span>
            </span>
            <span className="justify-between text-small flex w-full">
              Discount<span>{FormatPrice(discountPrice)}</span>
            </span>
          </div>
        </li>
      );
    });

    return listComponent;
  };

  const navigateToPaymentPage = () => {
    if (!termsStatus) {
      onFailure("Accpet terms and conditions to continue");
      return;
    }
    let routeId = "";

    checkoutCourses.map((currentCourse) => {
      routeId = `${routeId} ${currentCourse.id} ${currentCourse.name}`;
    });

    navigate(`/dashboard/courses/payment_session/${routeId}`, {
      state: { data: checkoutCourses },
    });
  };

  const getItemsTotal = () => {
    let courseTotal = 0;
    if (!checkoutCourses || checkoutCourses?.length === 0) {
      return;
    }
    checkoutCourses.map((currentCourse) => {
      courseTotal =
        courseTotal +
        (Number(currentCourse?.price) - Number(currentCourse?.price) * 0.2);
    });
    setTotalPrice(courseTotal);
  };


  useEffect(() => getItemsTotal(), []);

  return (
    <div className="w-[40%] h-full bg-green-100 flex items-start pt-[2%] flex-col px-[5%] gap-[10px]">
      <h3 className="font-bold text-lg pb-[5px] border-b border-black w-[90%]">
        Summary
      </h3>

      <ul className="flex w-[90%] border-b border-b-black flex-col gap-[10px]">
        {getItemsSummary()}
      </ul>

      <div className="flex w-[90%] justify-between">
        <span className="text-sm font-semibold">Total</span>
        <span className="text-sm font-semibold flex items-center gap-[5px]">
          <img src={TagLogo} className="h-[12px]" />
          {totalPrice ? FormatPriceInUsd(totalPrice) : "Calculating..."}
        </span>
      </div>

      <div className=" bg-white w-fit mt-[10%] flex flex-col justify-center items-center rounded-[5px] gap-[10px] p-[15px]">
        <div className="flex justify-center items-center gap-[10px]">
          {termsStatus ? (
            <IoCheckbox
              onClick={toogleTermsStatus}
              className="text-3xl cursor-pointer text-[#4cbc9a] "
            />
          ) : (
            <MdOutlineCheckBoxOutlineBlank
              onClick={toogleTermsStatus}
              className="text-3xl cursor-pointer text-[#4cbc9a] "
            />
          )}

          <span className="font-normal text-small">
            By clicking this, I agree to Garazi Terms & Conditions and Privacy
            Policy
          </span>
        </div>

        <button onClick={navigateToPaymentPage} className="py-[8px] bg-green w-full rounded-[5px] text-sm text-white font-semibold duration-100 hover:scale-105">
         Pay for Course
        </button>
      </div>
    </div>
  );
}

export default CheckoutSummary;
