import { useNavigate } from "react-router-dom";
import MainLogo from "../../assets/pngs/main-logo-white.png";
import { landingNavOptions } from "../../utils/constants";
import { motion } from "framer-motion";

function NavBar() {
  const navigate = useNavigate();

  const navigateToLogin = () => navigate("login");

  const getOptions = () => {
    return landingNavOptions.map((currentOption, index) => {
      const handleNavigate = () => {
        if (currentOption === landingNavOptions[0]) {
            navigate('dashboard/home')
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
      className="h-[10%] w-full flex justify-between items-center px-[5%]"
    >
      <img className="h-[80%]" src={MainLogo} />

      <div className="flex w-[50%] items-center">
        <ul className="flex w-[80%] items-center gap-[8%]">{getOptions()}</ul>
        <button
          onClick={navigateToLogin}
          className="text-sm bg-[#F5F5DC] hover:scale-105 duration-50 p-[8px] text-black font-semibold"
        >
          Login/Register
        </button>
      </div>
    </motion.nav>
  );
}

export default NavBar;
