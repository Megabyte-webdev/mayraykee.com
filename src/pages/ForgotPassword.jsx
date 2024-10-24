import React, { useState } from "react";
import MainLogo from "../assets/svgs/main-logo.svg";
import Person from "../assets/pngs/person.png";


function ForgotPassword() {

    const [email, setEmail] = useState('')


  return (
    <main className="flex h-screen w-full ">
        <div className="w-[60%] flex px-[5%] flex-col items-center gap-[5%] pt-[5%]">
         <img className="h-[15%]" src={MainLogo} />
        
         <div className="flex flex-col gap-[10px]">
            <h1 className="font-bold text-[25px] text-gray-600">Forgot Password</h1>
            <p className="text-[18px] text-gray-600 font-meduim">Enter your mail to reset</p>

            <div className="h-[45px] w-full flex mt-[10px] items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
               <img src={Person} className="h-[20px]" />
               <input onChange={(e) => setEmail(e.target.value)} name="email_phone" type="text" required className="w-full h-full placeholder:text-sm text-sm bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 " placeholder="Enter email or phone" />
            </div>

            <button type="submit" className="w-full text-sm hover:text-[15px] hover:scale-105 duration-150 font-semibold text-white bg-green h-[45px] mt-[10px] rounded-md">
                  Verify
            </button>
         </div>

        </div>

        <div className='bg-forgot-password-background w-[40%] bg-[length:100%_110%]'/>
    </main>
  );
}

export default ForgotPassword;
