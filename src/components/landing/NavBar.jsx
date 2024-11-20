import { useNavigate } from "react-router-dom";
import MainLogo from "../../assets/pngs/main-logo-white.png";
import { landingNavOptions } from "../../utils/constants";
import { motion } from "framer-motion";
<<<<<<< HEAD
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar({ navOptions, setIsOpen }) {
  const navigate = useNavigate();
  const [menu, setMenu]= useState(false);
=======

function NavBar({ navOptions }) {
  const navigate = useNavigate();

>>>>>>> main
  const navigateToLogin = () => navigate("login");
  const navigateToLandingTwo = () => navigate("/landing_two");
  const navigateToLanding = () => navigate("/");

  const getOptions = () => {
    return navOptions.map((currentOption, index) => {
      const handleNavigate = () => {
        if (currentOption === navOptions[0]) {
          navigate("/dashboard/home");
        } else if (currentOption === navOptions[4]) {
          if (navOptions[4] === "Landing Two") {
            navigateToLandingTwo();
          } else {
            navigateToLanding();
          }
        } else if(currentOption === navOptions[1]){
          navigate("/admin/dashboard/home");
        }
      };

      return (
        <li
          key={index}
          onClick={handleNavigate}
          className="text-white hover:scale-105 duration-50 hover:underline cursor-pointer text-sm"
        >
          {currentOption}
        </li>
      );
    });
  };

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -50,
      }}
      whileInView={{
        opacity: 1,
        y: 0, // Slide in to its original position
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: true }}
<<<<<<< HEAD
      className="h-[90px] w-full overflow-hidden flex justify-between items-center px-[5%]"
    >
      <img className="w-32 md:w-60" src={MainLogo} />

      <div className="flex w-[60%] items-center">
        <ul className="hidden md:flex w-[80%] items-center gap-[8%]">{getOptions()}</ul>
        <ul className={`fixed z-[100000] pt-[30px] top-0 bottom-0 h-full w-60 ${menu ? 'right-0':'right-[-100%]'} bg-green-700 flex flex-col gap-4 md:hidden p-4 transition-all duration-500`}>
 <div
        onClick={() => {
          setMenu(!menu);
        }}
        className="block cursor-pointer md:hidden transition-all ease-in-out duration-300 text-white my-4 mx-2"
      >
        {!menu ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>
{getOptions()}
<li> <button
        onClick={() => setIsOpen(true)}
          className="block md:hidden text-sm bg-[#F5F5DC] hover:scale-105 duration-50 p-[8px] text-black font-semibold"
        >
          Login/Register
        </button></li></ul>
        
        <button
          onClick={() => setIsOpen(true)}
          className="hidden md:block ml-auto text-sm bg-[#F5F5DC] hover:scale-105 duration-50 p-[8px] text-black font-semibold"
        >
          Login/Register
        </button>
        <div
        onClick={() => {
          setMenu(!menu);
        }}
        className="ml-auto cursor-pointer block md:hidden transition-all ease-in-out duration-300 text-white"
      >
        {!menu ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>
=======
      className="h-[10%] w-full flex justify-between items-center px-[5%]"
    >
      <img className="h-[80%]" src={MainLogo} />

      <div className="flex w-[60%] items-center">
        <ul className="flex w-[80%] items-center gap-[8%]">{getOptions()}</ul>
        <button
          onClick={navigateToLogin}
          className="text-sm bg-[#F5F5DC] hover:scale-105 duration-50 p-[8px] text-black font-semibold"
        >
          Login/Register
        </button>
>>>>>>> main
      </div>
    </motion.nav>
  );
}

export default NavBar;
