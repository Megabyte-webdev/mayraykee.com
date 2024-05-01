import React, { useEffect, useState } from "react";
import { registration_steps_keys } from "../utils/constants";
import OTPInput from "react-otp-input";
import { useNavigate, useOutletContext } from "react-router-dom";
import { formatTime } from "../utils/UtilMethods";
import { onPrompt } from "../utils/notifications/onPrompt";

function EmailVerification() {
  const { state, dispatch } = useOutletContext();
  const [secondsLeft, setSecondsLeft] = useState(10);
  const navigate = useNavigate()

  useEffect(() => {
    const intervalId = setInterval(() => {
        setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);

    dispatch({
      type: registration_steps_keys.email_verification.title,
      payload: registration_steps_keys.email_verification,
    });

    return () => {
        clearInterval(intervalId);
      };
  }, []);

  useEffect(() => {   

    if(secondsLeft === 0){
        onPrompt('Time elapsed')
    }
  }, [secondsLeft]);


  return (
    <div className="flex flex-col items-center justify-start w-[50%] pt-[10%] px-[10%] ">

      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-[25px]">Verify your email</h1>
        <p className="text-sm text-gray-400">
          We sent a code to jamesjohn@gmail.com
        </p>
      </div>

      <div className="flex flex-col gap-[10px] mt-[5%] items-center">
        <OTPInput
          onChange={() => {}}
          value="0000"
          numInputs={4}
          inputStyle={{
            background: "white",
            fontSize: "25px",
            borderBottom: "1px solid gray",
            height: "50px",
            width: "60px",
          }}
          renderSeparator={<sdiv className="w-[10px]" />}
          renderInput={(props) => <input {...props} />}
        />
        <div className="flex gap-[10px] justify-between">
        <span className="text-small text-lime-700">Time Left: {formatTime(secondsLeft)}</span>
       
       </div> 
      </div>


      <button
          onClick={() => navigate('/registration/profile_details')}
          className="text-small hover:text-[13px] font-semibold w-[60%] text-white bg-green h-[45px] mt-[20px] rounded-md"
        >
          Create Account
        </button>
        <span className="text-small text-gray-400 hover:underline cursor-pointer ">Didn’t get a code? Resend</span>
    </div>
  );
}

export default EmailVerification;
