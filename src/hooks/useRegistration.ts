import { useCallback, useContext, useEffect, useState } from "react";
import { axiosClient } from "../services/axios-client";
import { onFailure } from "../utils/notifications/OnFailure";
import { onSuccess } from "../utils/notifications/OnSuccess";
import { json } from "react-router-dom";
import { FormatError } from "../utils/UtilMethods";
import { formErrorMessages } from "../utils/constants";
import {AuthenticationContext} from '../context/AuthenticationContext'


function useRegistration() {
  const client = axiosClient(null);
  const {authDetails} = useContext(AuthenticationContext);
  const [profileDetails, setProfilDetails] = useState(authDetails.user)


  const getFromSessionId = () => {
    const details = sessionStorage.getItem("registration details");
    if (details) {
      return JSON.parse(details);
    } else {
      return {};
    }
  };

  const [registrationDetails, setRegistrationDetails] = useState(
    getFromSessionId()
  );

  const [otp, setOtp] = useState({});

  const formData = new FormData();
  const [error, setError] = useState({
    message: "",
    error: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const storeInSessionId = () => {
    const detailWithoutPassword = {
      ...registrationDetails,
      password: null,
      re_enter_password: null,
    };
    sessionStorage.setItem(
      "registration details",
      JSON.stringify(detailWithoutPassword)
    );
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegistrationDetails({ ...registrationDetails, [name]: value });
  };

  const onProfileTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfilDetails({ ...profileDetails, [name]: value });
  };


  const onOtpChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value);
    setOtp({ otp: value, email: registrationDetails?.email });
  };

  type dropdownOption = {
    id: number;
    name: string;
  };

  const mapRegistrationDetailsToFormData = (
    accountType: dropdownOption,
    title: dropdownOption
  ) => {
    Object.keys(registrationDetails).map((currentKey) => {
      const currentDetail = registrationDetails[currentKey];
      formData.append(currentKey, currentDetail);
    });

    //validate upassword
    if (
      registrationDetails?.password !== registrationDetails?.re_enter_password
    ) {
      throw new Error(formErrorMessages.passwordMismatch);
    }

    //validate title dropdown
    if (title.id === 2000) {
      throw new Error(formErrorMessages.selectTitle);
    }
    formData.append("position", title.name);

    //validate account-type dropdown
    if (accountType.id === 2000) {
      throw new Error("Please select an account type");
    }
    formData.append("role", formErrorMessages.accountType);
  };

  const onRegistrationSuccessful = (handleOnSuccess: () => void) => {
    onSuccess({
      message: "Registration Successful",
      success: "An otp has been sent to your email",
    });
    storeInSessionId();
    handleOnSuccess();
    setLoading(false);
  };

  const registerUser = async (
    accountType: dropdownOption,
    title: dropdownOption,
    handleOnSuccess: () => void
  ) => {
    console.log(registrationDetails);
    try {
      setLoading(true);
      mapRegistrationDetailsToFormData(accountType, title);
      for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
      }
      const response = await client.post("/NewUser", formData);
      onRegistrationSuccessful(handleOnSuccess);
    } catch (error) {
      FormatError(error, setError, "Registration error");
    };
  };

  const resendOtp = async (resetTimer: () => void) => {
    setLoading(true);
    try {
      // if(!registrationDetails.email){
      //   throw new Error("No email found");
      // }
      await client.post("/resendOtp", {
        email: registrationDetails?.email,
      });
      setLoading(false);
      onSuccess({
        message: "Otp sent",
        success: "An otp has been sent to your email.",
      });
      resetTimer();
    } catch (error) {
      FormatError(error, setError, "Otp Error");
    }
  };

  const handleOnVerifiedSuccesfully = (navigateToHome: () => void) => {
    onSuccess({
      message: "Verification Successful",
      success: "Login with your email and password",
    });
    sessionStorage.removeItem("registration details");
    navigateToHome();
  };

  const verifyOtp = async (navigateToHome: () => void) => {
    try {
      setLoading(true);
      if (!otp?.otp) {
        throw new Error("Please insert Otp");
      } else if (!otp?.email) {
        throw new Error("Something went wrong");
      }
      await client.post("/verifyOtp", otp);
      handleOnVerifiedSuccesfully(navigateToHome);
    } catch (error) {
      FormatError(error, setError, "Otp Verification failed");
    }
  };

  useEffect(() => {
    if (error.message && error.error) {
      onFailure(error);
      setError({
        message: "",
        error: "",
      });
      setLoading(false);
    }
  }, [error.message, error.error]);

  return {
    registerUser,
    onTextChange,
    registrationDetails,
    error,
    loading,
    getFromSessionId,
    otp,
    onOtpChange,
    resendOtp,
    verifyOtp,
    profileDetails, 
    onProfileTextChange
  };
}

export default useRegistration;
