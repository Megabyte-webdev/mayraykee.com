import { useCallback, useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../services/axios-client";
import { FormatError } from "../utils/UtilMethods";
import { onFailure } from "../utils/notifications/OnFailure";
import { onSuccess } from "../utils/notifications/OnSuccess";
import { AxiosResponse } from "axios";

function usePayment(checkoutCourses: any) {
  const PUBLIC_KEY = import.meta.env.VITE_TEST_PUBLIC_KEY;
  const { authDetails } = useContext(AuthenticationContext);
  const client = axiosClient(authDetails?.token);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    error: "",
  });

  const navigateToSuccessPage = (response: AxiosResponse<any, any>, reference: any) => {
    setLoading(false);
    let routeId = "";

    console.log("Succes Triggered", response);
    onSuccess({
        message: 'Payment Success',
        success: ' Your payment has been confirmed'
    })    

    checkoutCourses.map((currentCourse: any) => {
      routeId = `${routeId} ${currentCourse.id} ${currentCourse.name}`;
    });

    navigate(`/dashboard/courses/payment_session/${routeId}`, {
        state: { data: {checkoutCourses: checkoutCourses, reference: reference} },
      })
  };

  const makePaymentCheck = useCallback(async (reference: any) => {
    setLoading(true);
    try {
      const response = await client.post("/payment/pay", {
        reference: reference.reference,
        student_id: authDetails.user.id,
      });
      navigateToSuccessPage(response, reference);
    } catch (error) {
      FormatError(error, setError, "Payment Error");
    }
  }, []);

  const config = (price: number) => {
    const priceInKobo = price * 100;
    console.log(authDetails);

    return {
      reference: new Date().getTime().toString(),
      email: authDetails.user.email,
      amount: priceInKobo,
      publicKey: PUBLIC_KEY,
      text: "Paystack Button Implementation",
      onSuccess: (reference: any) => makePaymentCheck(reference),
      onClose: onClose,
    };
  };

  const onClose = () => {
    console.log("Payment Closed");
    setError({
        message: 'Payment Error',
        error: 'Unable to confirm payment'
    })
  };

  useEffect(() => {
    if (error.message && error.error) {
      onFailure(error);
      setLoading(false);
    }
  }, [error.message, error.error]);

  return { config, makePaymentCheck, onClose, loading };
}

export default usePayment;
