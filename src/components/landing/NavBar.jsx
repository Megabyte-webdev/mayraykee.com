import { useNavigate, Link } from "react-router-dom";
import MainLogo from "../../assets/pngs/main-logo-white.png";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Btn from './Btn'
function NavBar({ navOptions = [], setIsOpen, setLogin }) {
  const [menu, setMenu] = useState(false);

  // Toggle menu visibility
  const toggleMenu = () => setMenu((prev) => !prev);

  // Generate navigation options
  const getOptions = () =>
    navOptions.map((option, index) => {
      const handleNavigate = () => {
        switch (option) {
          case navOptions[0]:
            return "https://job-portal-mayrahkee.vercel.app/";
          case navOptions[1]:
            return "https://job-portal-mayrahkee.vercel.app/about";
          case navOptions[3]:
            return "https://job-portal-mayrahkee.vercel.app/contact";
          default:
            return "#";
        }
      };

      return (
        <a
          key={index}
          href={handleNavigate()}
          className="text-white hover:scale-105 duration-50 hover:underline cursor-pointer text-sm lg:text-md"
        >
          {option}
        </a>
      );
    });

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      className="h-[90px] w-full flex justify-between items-center px-[5%]"
    >
      <img className="w-32 md:w-60" src={MainLogo} alt="Main Logo" />

      <div className="flex w-[60%] items-center">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex w-[80%] items-center gap-[8%]">
          {getOptions()}
        </ul>

        {/* Mobile Menu */}
        <ul
          className={`fixed z-[100000] pt-[30px] top-0 bottom-0 h-full w-60 ${
            menu ? "right-0" : "right-[-100%]"
          } bg-green-700 flex flex-col gap-4 lg:hidden p-4 transition-all duration-500`}
        >
           <div
        onClick={() => {
          setMenu(!menu);
        }}
        className="block lg:hidden transition-all ease-in-out duration-300 text-white my-4 mx-2"
      >
        {!menu ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>
          {getOptions()}
          <div className="flex flex-col items-start lg:hidden gap-3 lg:order-2">
        <Btn
          title="Login"
          func={()=>{setIsOpen(true);  setLogin(true)}}
          styl="bg-gray-100 shadow-[1px_1px_0_2px] shadow-gray-400 hover:shadow-[-1px_-1px_0]"
        />
        <Btn
          title="Register"
          func={()=>{setIsOpen(true); setLogin(false)}}
          styl="bg-black shadow-[1px_1px_0] shadow-gray-400 hover:shadow-[-1px_-1px_0] text-white"
        />
      </div>
        </ul>

        {/* Login/Register Button */}
        <div className="hidden lg:flex items-center justify-center gap-3 lg:order-2 ml-auto">
        <Btn
          title="Login"
          func={()=>{setIsOpen(true);  setLogin(true)}}
          styl="bg-gray-100 shadow-[1px_1px_0_2px] shadow-gray-400 hover:shadow-[-1px_-1px_0]"
        />
        <Btn
          title="Register"
          func={()=>{setIsOpen(true); setLogin(false)}}
          styl="bg-black shadow-[1px_1px_0] shadow-gray-400 hover:shadow-[-1px_-1px_0] text-white"
        />
      </div>

        {/* Menu Toggle */}
        <div
          onClick={toggleMenu}
          className="ml-auto cursor-pointer block lg:hidden transition-all ease-in-out duration-300 text-white"
        >
          {menu ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
    </motion.nav>
  );
}

export default NavBar;
