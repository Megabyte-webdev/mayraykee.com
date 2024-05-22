import { useState } from "react";
import { countriesDummy } from "../../utils/dashboard/dummys";
import CountrySelector from "./CountrySelector";
import { IoCheckbox } from "react-icons/io5";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { paymentOptions } from "../../utils/constants";
import CreditCard from "../../assets/pngs/credit-card.png";
import VisaCardLogo from "../../assets/pngs/visa-card-logo.png";
import MasterCardLogo from "../../assets/pngs/master-card-logo.png";
import PaypalLogo from "../../assets/pngs/paypal-logo.png";
import ChecoutItem from "./CheckoutItem";

function CheckoutCard({
  country,
  setCountry,
  chosenPaymentOption,
  setPaymentOption,
  checkoutCourses
}) {
  const toogleToCard = () => setPaymentOption(paymentOptions.card);
  const toogleToPaypal = () => setPaymentOption(paymentOptions.paypal);


  const getCheckoutItems = () => {
     
    if(!checkoutCourses || checkoutCourses?.length === 0){
        return
    }
    return checkoutCourses.map((currentCourse, index) => <ChecoutItem data={currentCourse} />)
  }

  return (
    <div className="w-[45%] flex flex-col gap-[20px]">
      <div className="w-full flex items-end mt-[5%]">
        <button className="w-[20%] border-b-2 text-lg font-semibold text-[#4cbc9a] border-b-[#4cbc9a] pb-[5px]">
          Checkout
        </button>
        <hr className="w-[70%] h-[2px] border-0 bg-gray-300" />
      </div>

      <div className="w-full flex flex-col gap-[15px]">
        <h3 className="text-md font-semibold">Billing Address</h3>

        <div className="flex flex-col gap-[5px] ">
          <span className="font-semibold text-[14px]">Country</span>
          <CountrySelector
            data={countriesDummy}
            selected={country}
            setSelected={setCountry}
          />
          <p className="w-full text-small text-gray-400 font-normal">
            Rotterdam business school is required by law to collect applicable
            transaction taxes for purchases made in certain tax jurisdictions.
          </p>
        </div>

        <div className="w-full flex flex-col gap-[10px]">
          <div className="w-full border h-[35px] gap-[10px] px-[5px] border-black bg-lime-600/20 flex items-center ">
            <div  className="flex justify-self-end h-full w-[50%] justify-start items-center gap-[10px]">
              {chosenPaymentOption === paymentOptions.card ? (
                <IoCheckbox onClick={toogleToCard} className="text-xl cursor-pointer text-[#4cbc9a] " />
              ) : (
                <MdOutlineCheckBoxOutlineBlank onClick={toogleToCard} className="text-xl cursor-pointer text-[#4cbc9a] " />
              )}
              <img src={CreditCard} className="h-[80%]" />
              <span className="font-semibold text-small">
                {paymentOptions.card}
              </span>
            </div>

            <div className="flex justify-self-end h-full w-[50%] justify-end items-center gap-[10px]">
              <img src={VisaCardLogo} className="h-[70%]" />
              <img src={MasterCardLogo} className="h-[70%]" />
            </div>
          </div>


          <div className="w-full border h-[35px] gap-[10px] px-[5px] border-black bg-lime-600/20 flex items-center ">
            <div  className="flex justify-self-end h-full w-[50%] justify-start items-center gap-[10px]">
              {chosenPaymentOption === paymentOptions.paypal ? (
                <IoCheckbox onClick={toogleToPaypal} className="text-xl cursor-pointer text-[#4cbc9a] " />
              ) : (
                <MdOutlineCheckBoxOutlineBlank onClick={toogleToPaypal} className="text-xl cursor-pointer text-[#4cbc9a] " />
              )}
              <img src={PaypalLogo} className="h-[80%]" />
              <span className="font-semibold text-small">
                {paymentOptions.paypal}
              </span>
            </div>
          </div>
        </div>

        <ul className="flex flex-col gap-[10px]">
          {getCheckoutItems()}
        </ul>

      </div>
    </div>
  );
}

export default CheckoutCard;
