import NavBar from "../components/landing/NavBar";
import "../css/extras.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { landingNavOptionsTwo } from "../utils/constants";
import Elearning from "../assets/pngs/laptop-2.png";
import Recuitement from "../assets/pngs/wallet-2.png";
import Oil from "../assets/pngs/factory.png";
import WomanInOrange from "../assets/jpgs/woman-in-orange.jpg";
import LoginModal from "../components/LoginModal";

function LandingTwo() {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(true);
  return (
    <main className="h-max w-full flex bg-cover bg-center relative">
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} setLogin={setLogin} login={login} />
      <img src={WomanInOrange} className="absolute object-cover w-full h-full z-10" alt="Background" />

      <div className="w-full flex relative flex-col z-20 items-center min-h-screen bg-green/85 px-4">
        <NavBar navOptions={landingNavOptionsTwo} setIsOpen={setIsOpen} setLogin={setLogin} />

        <motion.div className="flex-1 flex flex-col items-center justify-center gap-2 my-4">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white text-center tracking-wide"
          >
            Mayrahkee Africa,
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="font-medium w-full sm:w-[80%] md:w-[60%] text-center text-sm sm:text-xl text-white mb-4 tracking-wider"
          >
            Re-orientating Our Thinking Towards Talent Development
          </motion.span>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          className="w-full sm:w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-6 pb-4 md:pb-6"
        >
          {/* Recruitment */}
          <Link to='https://job-portal-mayrahkee.vercel.app/' className="flex flex-col items-center justify-center p-4 hover:scale-105 duration-100 gap-4 text-white bg-opacity-75 rounded-lg bg-green-900/50">
            <div className="flex flex-col items-center gap-3">
              <img
                src={Recuitement}
                className="h-[40px] md:h-[50px] w-[40px] md:w-[50px]"
                alt="Recruitment"
              />
              <div className="flex flex-col items-center">
                <h2 className="text-[#47aa49] font-extrabold text-2xl md:text-3xl">
                  Recruitment
                </h2>
                <span className="font-light text-sm text-center">
                  Create an account to hire best talent.<br /> Find employment with reputable organisations.
                </span>
              </div>
            </div>
          </Link>

          {/* Divider */}
          <hr className="md:block border-r-[1.5px] border-[#458a28] h-[80%]" />

          {/* Capacity Building */}
          <Link to='https://job-portal-mayrahkee.vercel.app/learning' className="flex flex-col items-center justify-center p-4 hover:scale-105 duration-100 gap-4 text-white bg-opacity-75 rounded-lg bg-green-900/50">
            <div className="flex flex-col items-center gap-3">
              <img
                src={Elearning}
                className="h-[40px] md:h-[50px] w-[60px] md:w-[70px]"
                alt="E-Learning"
              />
              <div className="flex flex-col items-center">
                <h2 className="text-white font-extrabold text-2xl md:text-3xl text-center">
                  <span className="capitalize text-[#47aa49]">Capacity</span> Building and <span className="capitalize text-[#47aa49]">Development</span>
                </h2>
                <span className="font-light text-sm text-center">
                  Transforming lives through learning and training
                </span>
              </div>
            </div>
          </Link>

          {/* Divider */}
          <hr className="md:block border-r-[1.5px] border-[#458a28] h-[80%]" />

          {/* Oil and Gas */}
          <li className="flex flex-col items-center justify-center p-4 hover:scale-105 duration-100 gap-4 text-white bg-opacity-75 rounded-lg bg-green-900/50">
            <div className="flex flex-col items-center gap-3">
              <img
                src={Oil}
                className="h-[40px] md:h-[50px] w-[40px] md:w-[50px]"
                alt="Oil and Gas"
              />
              <div className="flex flex-col items-center">
                <h2 className="text-white font-extrabold text-2xl md:text-3xl">
                  <span className="capitalize text-[#47aa49]">Oil</span> &amp; Gas
                </h2>
                <span className="font-light text-sm text-center">
                  Protect the earth, power the future
                </span>
              </div>
            </div>
          </li>
        </motion.ul>
      </div>
    </main>
  );
}

export default LandingTwo;
