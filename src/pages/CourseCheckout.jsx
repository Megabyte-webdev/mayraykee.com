import { useState } from "react";
import CheckoutCard from "../components/courses/ChecoutCard";
import { countriesDummy } from "../utils/dashboard/dummys";
import { paymentOptions } from "../utils/constants";
import { useLocation } from "react-router-dom";
import CheckoutSummary from "../components/courses/CheckoutSummary";

function CourseCheckout() {

    const location = useLocation()
    const checkoutCourses = location?.state?.data
    const [country, setCountry] = useState(countriesDummy[0]);
    const [termsStatus, setTermsStatus] = useState(false);
    const [chosenPaymentOption, setPaymentOption] = useState(paymentOptions.card)

    const toogleTermsStatus = () => setTermsStatus(!termsStatus)
    return ( 
    <section className="w-full flex justify-between h-[90%] py-[2%] px-[2%]">
        <CheckoutCard checkoutCourses={checkoutCourses} country={country} setCountry={setCountry} chosenPaymentOption={chosenPaymentOption} setPaymentOption={setPaymentOption}/>
        <CheckoutSummary termsStatus={termsStatus} toogleTermsStatus={toogleTermsStatus} chosenPaymentOption={chosenPaymentOption} checkoutCourses={checkoutCourses}/>
    </section> );
}

export default CourseCheckout;