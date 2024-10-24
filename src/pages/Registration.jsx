import React, { useEffect, useReducer, useState } from "react";
import { registration_steps_keys, titlesOption } from "../utils/constants";
import MainIcon from "../assets/svgs/main-logo.svg";
import Person from "../assets/pngs/person.png";
import PersonCircle from "../assets/pngs/person-circle.png";
import Card from "../assets/pngs/card.png";
import Company from "../assets/pngs/company.png";
import Company2 from "../assets/pngs/company-2.png";
import MessageOpen from "../assets/pngs/message-open.png";
import Padlock from "../assets/pngs/padlock.png";
import { IoMdCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { NavLink, useNavigate, useOutletContext } from "react-router-dom";
import Selector from "../components/Selector";
import RegistrationSelector from "../components/registration/RegistrationSelector";
import useRegistration from "../hooks/useRegistration";
import FormBotton from "../components/FormButton";

const accountTypes = [
  {
    id: 2000,
    name: "--select account type--",
  },
  {
    id: 1,
    name: "Individual",
  },
  {
    id: 2,
    name: "Organisation",
  },
];

function Registration() {
  const [isTrained, setIsTrained] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useOutletContext();
  const [accountType, setAccountType] = useState(accountTypes[0]);
  const [title, setTitle] = useState(titlesOption[0]);
  const { registerUser, onTextChange, registrationDetails, loading } =
    useRegistration();

  const toogleIsTrained = () => setIsTrained(!isTrained);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    registerUser(accountType, title, () => {
      dispatch({
        type: registration_steps_keys.email_verification.title,
        payload: registration_steps_keys.email_verification,
      });
      navigate("/registration/email_verification");
    });
  };

  useEffect(() => {
  }, [state]);

  return (
    <div className="w-[50%] px-[5%] pt-[10px] flex flex-col  items-center">
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
            onChange={onTextChange}
            name="first_name"
            type="text"
            value={registrationDetails?.first_name}
            required
            className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 "
            placeholder="First name"
          />
        </div>
        <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
          <img src={PersonCircle} className="h-[20px]" />
          <input
            onChange={onTextChange}
            name="last_name"
            type="text"
            value={registrationDetails?.last_name}
            required
            className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 "
            placeholder="Last name"
          />
        </div>

        <RegistrationSelector
          icon={Card}
          data={titlesOption}
          selected={title}
          setSelected={setTitle}
        />
        <RegistrationSelector
          icon={Company2}
          data={accountTypes}
          selected={accountType}
          setSelected={setAccountType}
        />

        {accountType.name === "Organisation" && (
          <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
            <img src={Company} className="h-[20px]" />
            <input
              onChange={onTextChange}
              name="organization"
              type="text"
              value={registrationDetails?.organization}
              required
              className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 "
              placeholder="Company/Organization"
            />
          </div>
        )}

        <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
          <img src={MessageOpen} className="h-[20px]" />
          <input
            onChange={onTextChange}
            name="email"
            type="email"
            value={registrationDetails?.email}
            required
            className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 "
            placeholder="Email"
          />
        </div>
        <div className="h-[40px] w-full flex items-center pl-[10px]  gap-[10px] rounded-md border-[1.5px]">
          <img src={Padlock} className="h-[20px]" />
          <input
            onChange={onTextChange}
            name="password"
            type="password"
            value={registrationDetails?.password}
            required
            className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:outline-none text-gray-700 "
            placeholder="Password"
          />
        </div>
        <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
          <img src={Padlock} className="h-[20px]" />
          <input
            onChange={onTextChange}
            name="re_enter_password"
            type="password"
            value={registrationDetails?.re_enter_password}
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
        <FormBotton loading={loading}>Submit</FormBotton>
      </form>
    </div>
  );
}

export default Registration;
