import { useNavigate } from "react-router-dom";
import MainLogo from "../../assets/pngs/main-logo-white.png";
import { landingNavOptions } from "../../utils/constants";
import { motion } from "framer-motion";
import { useState } from "react";

function NavBar({ navOptions }) {
  const navigate = useNavigate();
  const [menu, setMenu]= useState(false);
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
      className="h-[90px] w-full overflow-hidden flex justify-between items-center px-[5%]"
    >
      <img className="w-32 md:w-60" src={MainLogo} />

      <div className="flex w-[60%] items-center">
        <ul className="hidden md:flex w-[80%] items-center gap-[8%]">{getOptions()}</ul>
        <ul className={`fixed top-[90px] bottom-0 h-full w-60 ${menu ? 'right-0':'right-[-100%]'} bg-green-600 flex flex-col gap-4 md:hidden transition-all duration-500`}>{getOptions()}</ul>
        
        <button
          onClick={navigateToLogin}
          className="ml-auto text-sm bg-[#F5F5DC] hover:scale-105 duration-50 p-[8px] text-black font-semibold"
        >
          Login/Register
        </button>
        <div onClick={()=>setMenu(!menu)} className='block md:hidden ml-2'>
          Menu
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
