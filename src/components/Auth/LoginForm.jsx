import React from "react";
import MainLogo from "../../assets/svgs/main-logo.svg";
import Padlock from "../../assets/pngs/padlock.png";
import Person from "../../assets/pngs/person.png";
import { GiCircle, GiPlainCircle } from "react-icons/gi";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import FormButton from "../FormButton";

function LoginForm({ rememberMe, toogleRememberMe, version }) {
  const { loginDetails, handleLogin, loading, onTextChange } = useLogin();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };
=======
import { handleOnChange } from "../../utils/UtilMethods";
import { NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import FormBotton from "../FormButton";

function LoginForm({
  rememberMe,
  toogleRememberMe,
  version,
}) {
  const { loginDetails, handleLogin, loading, onTextChange } = useLogin();


  const handleOnSubmit = (e) => {
      e.preventDefault()
      handleLogin()
  }
>>>>>>> main

  return (
    <div
      id="login-form"
<<<<<<< HEAD
      className={`bg-white absolute rounded-md ${version.position} px-4 py-4 
        w-[90%] max-w-[400px] h-auto`}
      style={{ minHeight: "400px" }}
    >
      <img src={MainLogo} className="w-[50%] mx-auto mb-4" alt="Main Logo" />

      <div id="login-section" className="flex flex-col gap-2 items-center">
        <h3 className="font-bold text-lg text-gray-700">Login to your Account</h3>
        <span className="text-sm text-gray-400 text-center">
=======
      className={`h-[60%] w-[25%] bg-white absolute rounded-md ${version.position} px-[3%] py-[10px]`}
    >
      <img src={MainLogo} />

      <div id="login-section" className="flex flex-col gap-[5px]  items-center">
        <h3 className="font-bold text-meduim text-gray-700">
          Login to your Account
        </h3>
        <span className="font-meduim text-gray-400 text-small">
>>>>>>> main
          Enter to continue and explore within your grasp
        </span>

        <form
          onSubmit={handleOnSubmit}
          id="form-wrapper"
<<<<<<< HEAD
          className="flex flex-col w-full gap-3 items-center mt-4"
        >
          <div className="flex items-center h-10 w-full pl-2 gap-2 rounded-md border-[1.5px]">
            <img src={Person} className="h-5" alt="Person Icon" />
=======
          className="flex flex-col w-full gap-[10px] items-center mt-[10px]"
        >
          <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
            <img src={Person} className="h-[20px]" />
          
>>>>>>> main
            <input
              onChange={onTextChange}
              value={loginDetails?.email}
              name="email"
              type="text"
              required
<<<<<<< HEAD
              className="w-full placeholder:text-sm text-sm bg-transparent focus:outline-none text-gray-700"
=======
              className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 "
>>>>>>> main
              placeholder="Enter email or phone"
            />
          </div>

<<<<<<< HEAD
          <div className="flex items-center h-10 w-full pl-2 gap-2 mt-2 rounded-md border-[1.5px]">
            <img src={Padlock} className="h-5" alt="Padlock Icon" />
            <input
              onChange={onTextChange}
              value={loginDetails?.password}
              name="password"
              type="password"
              required
              className="w-full placeholder:text-sm text-sm bg-transparent focus:outline-none text-gray-700"
=======
          <div className="h-[40px] w-full flex items-center pl-[10px] mt-[10px] gap-[10px] rounded-md border-[1.5px]">
            <img src={Padlock} className="h-[20px]" />
            <input
              onChange={onTextChange}
              value={loginDetails?.password}
            
              name="password"
              type="password"
              required
              className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:outline-none text-gray-700 "
>>>>>>> main
              placeholder="Password"
            />
          </div>

<<<<<<< HEAD
          <div className="flex justify-between text-sm w-full text-gray-400 mt-2">
            <p className="flex items-center gap-1">
              {rememberMe ? (
                <GiPlainCircle
                  onClick={toogleRememberMe}
                  className="text-green-500 cursor-pointer"
                />
              ) : (
                <GiCircle className="cursor-pointer" onClick={toogleRememberMe} />
=======
          <div className="flex justify-between text-small w-full text-gray-400">
            <p className="flex items-center gap-[3px]">
              {rememberMe ? (
                <GiPlainCircle
                  onClick={toogleRememberMe}
                  className="text-green cursor-pointer"
                />
              ) : (
                <GiCircle
                  className="cursor-pointer"
                  onClick={toogleRememberMe}
                />
>>>>>>> main
              )}
              <span onClick={toogleRememberMe} className="cursor-pointer">
                Remember Me
              </span>
            </p>
            <p className="cursor-pointer hover:underline">
<<<<<<< HEAD
              <NavLink to="/forgot_password">Forgot Password?</NavLink>
            </p>
          </div>

          <FormButton loading={loading}>Login to continue</FormButton>
        </form>

        <p className="flex w-full items-center mt-4 justify-center gap-1 text-sm text-gray-400">
          <NavLink to="/registration">
            Do not have an account?{" "}
            <span className="text-green-500 hover:underline">Sign up</span>
          </NavLink>
=======
              <NavLink to={"/forgot_password"}>Forgot Password?</NavLink>
            </p>
          </div>

          <FormBotton loading={loading}>Login to continue</FormBotton>
        </form>

        <p className="flex w-full group items-center mt-[10px] cursor-pointer hover:underline justify-center gap-[3px] text-small text-gray-400">
          <NavLink to="/registration">
            Do not have an account?
            <span className="text-green group-hover:underline">Sign up</span>
          </NavLink>{" "}
>>>>>>> main
        </p>
      </div>
    </div>
  );
}

export default React.memo(LoginForm);
