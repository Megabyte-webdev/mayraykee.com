import { useEffect, useState } from "react";
import { FormatPrice, FormatPriceInUsd } from "../../utils/UtilMethods";
import TagLogo from "../../assets/pngs/tag-logo.png";
import PaymentTick from "../../assets/pngs/payment-tick.png";


function PaymentStatus({checkoutCourses}) {
  const [totalPrice, setTotalPrice] = useState(0);

  const getItemsSummary = () => {
    let courseTotal = 0;
    if (!checkoutCourses || checkoutCourses?.length === 0) {
      return;
    }
    const listComponent = checkoutCourses.map((currentCourse, index) => {
      const discountPrice = Number(currentCourse?.price) * 0; //default discount of 20%
      courseTotal =
        courseTotal +
        (Number(currentCourse?.price));
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
  const getItemsTotal = () => {
    let courseTotal = 0;
    if (!checkoutCourses || checkoutCourses?.length === 0) {
      return;
    }
    checkoutCourses.map((currentCourse) => {
      courseTotal =
        courseTotal +
        (Number(currentCourse?.price));
    });
    setTotalPrice(courseTotal);
  };

  useEffect(() => getItemsTotal(), []);

  return (
    <div className="w-[40%] h-full bg-green-100 flex items-center pt-[2%] flex-col px-[5%] gap-[10px]">


     <div className="w-full bg-green flex items-center justify-between px-[5%] h-[20%] mb-[40px]">
        <div className="flex flex-col">
         <h2 className="font-bold ml-[10px] text-white text-2xl">{FormatPrice(totalPrice)}</h2>
         <h4 className="font-bold text-white text-md">Payment Successful</h4>
        </div>
        <img src={PaymentTick} className="h-[50%]"/>
     </div>

      <h3 className="font-bold text-lg pb-[5px] border-b border-black w-[90%]">
        Transaction Details
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

    </div>
  );
}

export default PaymentStatus;
