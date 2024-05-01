import React, { useEffect, useReducer, useState } from "react";
import {
  RegistrationReducer,
  intialProfileState,
} from "../reducers/RegistrationReducer";
import { registration_steps_keys } from "../utils/constants";
import MainIcon from "../assets/svgs/main-logo.svg";
import Person from "../assets/pngs/person.png";
import PersonCircle from "../assets/pngs/person-circle.png";
import Card from "../assets/pngs/card.png";
import Company from "../assets/pngs/company.png";
import MessageOpen from "../assets/pngs/message-open.png";
import Padlock from "../assets/pngs/padlock.png";
import { IoMdCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";

function Registration() {
  
  const [isTrained, setIsTrained] = useState(false);
  const navigate = useNavigate()
  const {state, dispatch} = useOutletContext()


  const toogleIsTrained = () => setIsTrained(!isTrained);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate('/registration/email_verification')
    dispatch({ type: registration_steps_keys.email_verification.title, payload: registration_steps_keys.email_verification })
  };

  useEffect(() => {
    console.log(state);
  }, [state])

  return (
    <div className="w-[50%] px-[5%] pt-[10px] flex flex-col  items-center">
      {/* <button onClick={() => dispatch({ type: registration_steps_keys.email_verification.title, payload: registration_steps_keys.email_verification })}>Clock</button>
            <button onClick={() => dispatch({ type: registration_steps_keys.course_details.title, payload: registration_steps_keys.course_details })}>Clock</button> */}
      <img src={MainIcon} className="w-[60%]" />

      <div className="flex flex-col items-center gap-[8px] w-[60%]">
        <h1 className="font-semibold text-[25px]">Create Account</h1>
        <p className="text-small text-gray-400 text-center">
          Please complete the fields below.If you already have an existing
          accounts, please follow{" "}
          <span className="text-green hover:underline cursor-pointer">
            Get Access
          </span>{" "}
          to login
        </p>
      </div>

      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col w-[65%] mt-[10px] items-center gap-[5px] "
      >
        <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
          <img src={Person} className="h-[20px]" />
          <input
            onChange={() => {}}
            defaultValue="x"
            name="first_name"
            type="text"
            required
            className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 "
            placeholder="First name"
          />
        </div>
        <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
          <img src={PersonCircle} className="h-[20px]" />
          <input
            onChange={() => {}}
            defaultValue="x"
            name="first_name"
            type="text"
            required
            className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 "
            placeholder="Last name"
          />
        </div>
        <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
          <img src={Card} className="w-[20px]" />
          <input
            onChange={() => {}}
            defaultValue="x"
            name="first_name"
            type="text"
            required
            className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 "
            placeholder="Title or Position"
          />
        </div>
        <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
          <img src={Company} className="h-[20px]" />
          <input
            onChange={() => {}}
            defaultValue="x"
            name="first_name"
            type="text"
            required
            className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 "
            placeholder="Company/Organization"
          />
        </div>
        <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
          <img src={Company} className="h-[20px]" />
          <input
            onChange={() => {}}
            defaultValue="x"
            name="first_name"
            type="text"
            required
            className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 "
            placeholder="Company/Organization"
          />
        </div>
        <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
          <img src={MessageOpen} className="h-[20px]" />
          <input
            onChange={() => {}}
            defaultValue="x"
            name="mess_name"
            type="text"
            required
            className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 "
            placeholder="Email"
          />
        </div>
        <div className="h-[40px] w-full flex items-center pl-[10px]  gap-[10px] rounded-md border-[1.5px]">
          <img src={Padlock} className="h-[20px]" />
          <input
            onChange={() => {}}
            defaultValue="x"
            name="password"
            type="password"
            required
            className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:outline-none text-gray-700 "
            placeholder="Password"
          />
        </div>
        <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
          <img src={Padlock} className="h-[20px]" />
          <input
            onChange={() => {}}
            defaultValue="x"
            name="password"
            type="password"
            required
            className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:outline-none text-gray-700 "
            placeholder="Re-enter Password"
          />
        </div>

        <p className="text-gray-400 flex gap-[10px] items-center text-small">
          {isTrained ? (
            <IoMdCheckbox
              onClick={toogleIsTrained}
              className="text-meduim text-green"
            />
          ) : (
            <MdCheckBoxOutlineBlank
              onClick={toogleIsTrained}
              className="text-meduim"
            />
          )}{" "}
          Have you been trained by us or Members School before?
        </p>

        <button
          type="submit"
          className="text-small hover:text-[13px] w-full font-semibold text-white bg-green h-[45px] mt-[10px] rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Registration;
