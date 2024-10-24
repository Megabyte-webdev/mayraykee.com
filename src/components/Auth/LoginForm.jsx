import React from "react";
import MainLogo from "../../assets/svgs/main-logo.svg";
import Padlock from "../../assets/pngs/padlock.png";
import Person from "../../assets/pngs/person.png";
import { GiCircle, GiPlainCircle } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import FormButton from "../FormButton";

function LoginForm({ rememberMe, toogleRememberMe, version }) {
  const { loginDetails, handleLogin, loading, onTextChange } = useLogin();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div
      id="login-form"
      className={`bg-white absolute rounded-md ${version.position} px-4 py-4 
        w-[90%] max-w-[400px] h-auto sm:w-[50%] md:w-[30%]`}
      style={{ minHeight: "60%" }}
    >
      <img src={MainLogo} className="w-[50%] mx-auto mb-4" alt="Main Logo" />

      <div id="login-section" className="flex flex-col gap-2 items-center">
        <h3 className="font-bold text-lg text-gray-700">Login to your Account</h3>
        <span className="text-sm text-gray-400 text-center">
          Enter to continue and explore within your grasp
        </span>

        <form
          onSubmit={handleOnSubmit}
          id="form-wrapper"
          className="flex flex-col w-full gap-3 items-center mt-4"
        >
          <div className="flex items-center h-10 w-full pl-2 gap-2 rounded-md border-[1.5px]">
            <img src={Person} className="h-5" alt="Person Icon" />
            <input
              onChange={onTextChange}
              value={loginDetails?.email}
              name="email"
              type="text"
              required
              className="w-full placeholder:text-sm text-sm bg-transparent focus:outline-none text-gray-700"
              placeholder="Enter email or phone"
            />
          </div>

          <div className="flex items-center h-10 w-full pl-2 gap-2 mt-2 rounded-md border-[1.5px]">
            <img src={Padlock} className="h-5" alt="Padlock Icon" />
            <input
              onChange={onTextChange}
              value={loginDetails?.password}
              name="password"
              type="password"
              required
              className="w-full placeholder:text-sm text-sm bg-transparent focus:outline-none text-gray-700"
              placeholder="Password"
            />
          </div>

          <div className="flex justify-between text-sm w-full text-gray-400 mt-2">
            <p className="flex items-center gap-1">
              {rememberMe ? (
                <GiPlainCircle
                  onClick={toogleRememberMe}
                  className="text-green-500 cursor-pointer"
                />
              ) : (
                <GiCircle className="cursor-pointer" onClick={toogleRememberMe} />
              )}
              <span onClick={toogleRememberMe} className="cursor-pointer">
                Remember Me
              </span>
            </p>
            <p className="cursor-pointer hover:underline">
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
        </p>
      </div>
    </div>
  );
}

export default React.memo(LoginForm);
