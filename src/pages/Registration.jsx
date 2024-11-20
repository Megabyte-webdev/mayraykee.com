<<<<<<< HEAD
import React, { useEffect, useState } from "react";
=======
import React, { useEffect, useReducer, useState } from "react";
>>>>>>> main
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
<<<<<<< HEAD
=======
import Selector from "../components/Selector";
>>>>>>> main
import RegistrationSelector from "../components/registration/RegistrationSelector";
import useRegistration from "../hooks/useRegistration";
import FormBotton from "../components/FormButton";

const accountTypes = [
<<<<<<< HEAD
  { id: 2000, name: "--select account type--" },
  { id: 1, name: "Individual" },
  { id: 2, name: "Organisation" },
=======
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
>>>>>>> main
];

function Registration() {
  const [isTrained, setIsTrained] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useOutletContext();
  const [accountType, setAccountType] = useState(accountTypes[0]);
  const [title, setTitle] = useState(titlesOption[0]);
  const { registerUser, onTextChange, registrationDetails, loading } =
    useRegistration();

<<<<<<< HEAD
  const toggleIsTrained = () => setIsTrained(!isTrained);

  const handleOnSubmit = (e) => {
    e.preventDefault();
=======
  const toogleIsTrained = () => setIsTrained(!isTrained);

  const handleOnSubmit = (e) => {
    e.preventDefault();

>>>>>>> main
    registerUser(accountType, title, () => {
      dispatch({
        type: registration_steps_keys.email_verification.title,
        payload: registration_steps_keys.email_verification,
      });
      navigate("/registration/email_verification");
    });
  };

<<<<<<< HEAD
  useEffect(() => {}, [state]);

  return (
    <div className="w-full max-w-[600px] px-3 sm:px-6 pt-4 flex flex-col items-center mx-auto">
      <img src={MainIcon} className="w-[60%] max-w-[200px] mb-4" />

      <div className="flex flex-col items-center gap-2 w-full">
        <h1 className="font-semibold text-xl sm:text-2xl">Create Account</h1>
        <p className="text-sm text-gray-400 text-center">
          Please complete the fields below. If you already have an existing
          account, follow{" "}
          <span className="text-green hover:underline cursor-pointer">
            Get Access
          </span>{" "}
          to login.
=======
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
>>>>>>> main
        </p>
      </div>

      <form
        onSubmit={handleOnSubmit}
<<<<<<< HEAD
        className="flex flex-col w-full mt-4 items-center gap-4"
      >
        <InputField
          icon={Person}
          name="first_name"
          value={registrationDetails?.first_name}
          placeholder="First name"
          onChange={onTextChange}
        />
        <InputField
          icon={PersonCircle}
          name="last_name"
          value={registrationDetails?.last_name}
          placeholder="Last name"
          onChange={onTextChange}
        />
=======
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
>>>>>>> main

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
<<<<<<< HEAD
          <InputField
            icon={Company}
            name="organization"
            value={registrationDetails?.organization}
            placeholder="Company/Organization"
            onChange={onTextChange}
          />
        )}

        <InputField
          icon={MessageOpen}
          name="email"
          value={registrationDetails?.email}
          placeholder="Email"
          onChange={onTextChange}
        />
        <InputField
          icon={Padlock}
          name="password"
          type="password"
          value={registrationDetails?.password}
          placeholder="Password"
          onChange={onTextChange}
        />
        <InputField
          icon={Padlock}
          name="re_enter_password"
          type="password"
          value={registrationDetails?.re_enter_password}
          placeholder="Re-enter Password"
          onChange={onTextChange}
        />

        <p className="text-gray-400 flex gap-2 items-center text-xs sm:text-sm">
          {isTrained ? (
            <IoMdCheckbox
              onClick={toggleIsTrained}
              className="text-green cursor-pointer"
            />
          ) : (
            <MdCheckBoxOutlineBlank
              onClick={toggleIsTrained}
              className="cursor-pointer"
            />
          )}
          Have you been trained by us or Members School before?
        </p>

=======
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
>>>>>>> main
        <FormBotton loading={loading}>Submit</FormBotton>
      </form>
    </div>
  );
}

<<<<<<< HEAD
function InputField({ icon, name, value, placeholder, type = "text", onChange }) {
  return (
    <div className="h-10 w-full flex items-center pl-3 gap-3 rounded-md border">
      <img src={icon} className="h-5" />
      <input
        onChange={onChange}
        name={name}
        type={type}
        value={value}
        required
        className="w-full h-full placeholder:text-sm text-sm bg-transparent focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
}

=======
>>>>>>> main
export default Registration;
