import NavBar from "../components/landing/NavBar";
import "../css/extras.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { landingNavOptionsTwo } from "../utils/constants";
import Elearning from "../assets/pngs/laptop-2.png";
import Recuitement from "../assets/pngs/wallet-2.png";
import Oil from "../assets/pngs/factory.png";
import WomanInOrange from "../assets/jpgs/woman-in-orange.jpg";
import LoginModal from "../components/LoginModal";

function LandingTwo() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="h-max w-full flex bg-cover bg-center relative">
      <LoginModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <img src={WomanInOrange} className="absolute object-cover w-full h-full z-10" alt="Background" />

      <div className="w-full flex relative flex-col z-20 items-center min-h-screen bg-green/85 px-4">
        <NavBar navOptions={landingNavOptionsTwo} setIsOpen={setIsOpen} />

        <motion.div className="flex-1 flex flex-col items-center justify-center gap-2 my-4">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="font-bold text-3xl sm:text-4xl lg:text-5xl text-white text-center"
          >
            The minimalist that offers maximalist
          </motion.h1>

          <motion.span
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1 },
            }}
            viewport={{ once: true }}
            className="font-medium w-full sm:w-[80%] md:w-[60%] text-center text-sm sm:text-md text-white mb-4"
          >
            We help people and companies build online visibility - from a business card website to an online superstore.
          </motion.span>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          className="w-full sm:w-[90%] lg:w-[80%] flex flex-col md:flex-row items-center gap-4 md:gap-6 pb-4 md:pb-6"
        >
          <li className="flex w-full md:w-[30%] p-4 hover:scale-105 duration-100 items-center gap-4 text-white bg-opacity-75 rounded-lg bg-green-900/50">
            <div className="flex flex-col items-center gap-3">
              <img src={Recuitement} className="h-[40px] md:h-[50px] w-[40px] md:w-[50px]" alt="Recruitment" />
              <div className="flex flex-col items-center">
                <h2 className="text-[#47aa49] font-extrabold text-2xl md:text-3xl">Recruitment</h2>
                <span className="font-light text-sm text-center">
                  Create an account to hire best talent find employment with reputable organisations.
                </span>
              </div>
            </div>
          </li>

          <hr className="hidden md:block border-r-[1.5px] border-[#458a28] h-[80%]" />

          <li className="flex w-full md:w-[30%] p-4 hover:scale-105 duration-100 items-center gap-4 text-white bg-opacity-75 rounded-lg bg-green-900/50">
            <div className="flex flex-col items-center gap-3">
              <img src={Elearning} className="h-[40px] md:h-[50px] w-[60px] md:w-[70px]" alt="E-Learning" />
              <div className="flex flex-col items-center">
                <h2 className="text-white font-extrabold text-2xl md:text-3xl">
                  Capacity <span className="capitalize text-[#47aa49]">Building</span> and <span className="capitalize text-[#47aa49]">Development</span>
                </h2>
                <span className="font-light text-sm text-center">
                  Transforming lives through learning and training
                </span>
              </div>
            </div>
          </li>

          <hr className="hidden md:block border-r-[1.5px] border-[#458a28] h-[80%]" />

          <li className="flex w-full md:w-[30%] p-4 hover:scale-105 duration-100 items-center gap-4 text-white bg-opacity-75 rounded-lg bg-green-900/50">
            <div className="flex flex-col items-center gap-3">
              <img src={Oil} className="h-[40px] md:h-[50px] w-[40px] md:w-[50px]" alt="Oil and Gas" />
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
