import React from "react";
import MainLogo from "../../assets/svgs/main-logo.svg";
import Padlock from "../../assets/pngs/padlock.png";
import Person from "../../assets/pngs/person.png";
import { GiCircle, GiPlainCircle } from "react-icons/gi";
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

  return (
    <div
      id="login-form"
      className={`h-[60%] w-[25%] bg-white absolute rounded-md ${version.position} px-[3%] py-[10px]`}
    >
      <img src={MainLogo} />

      <div id="login-section" className="flex flex-col gap-[5px]  items-center">
        <h3 className="font-bold text-meduim text-gray-700">
          Login to your Account
        </h3>
        <span className="font-meduim text-gray-400 text-small">
          Enter to continue and explore within your grasp
        </span>

        <form
          onSubmit={handleOnSubmit}
          id="form-wrapper"
          className="flex flex-col w-full gap-[10px] items-center mt-[10px]"
        >
          <div className="h-[40px] w-full flex items-center pl-[10px] gap-[10px] rounded-md border-[1.5px]">
            <img src={Person} className="h-[20px]" />
          
            <input
              onChange={onTextChange}
              value={loginDetails?.email}
              name="email"
              type="text"
              required
              className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:bg-white/0  focus:outline-none text-gray-700 "
              placeholder="Enter email or phone"
            />
          </div>

          <div className="h-[40px] w-full flex items-center pl-[10px] mt-[10px] gap-[10px] rounded-md border-[1.5px]">
            <img src={Padlock} className="h-[20px]" />
            <input
              onChange={onTextChange}
              value={loginDetails?.password}
            
              name="password"
              type="password"
              required
              className="w-[80%] h-full placeholder:text-small text-small bg-white/0 focus:outline-none text-gray-700 "
              placeholder="Password"
            />
          </div>

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
              )}
              <span onClick={toogleRememberMe} className="cursor-pointer">
                Remember Me
              </span>
            </p>
            <p className="cursor-pointer hover:underline">
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
        </p>
      </div>
    </div>
  );
}

export default React.memo(LoginForm);
