import NavBar from "../components/landing/NavBar";
import "../css/extras.css";
import { motion } from "framer-motion";
import { useState } from "react";
import ScienceTools from "../assets/anim/science-tools.json";
import Refinery from "../assets/anim/refinery.json";
import RecuitementSteps from "../assets/anim/recuitment-steps.json";
import LaptopPeople from "../assets/anim/laptop-people.json";
import Learning from "../assets/anim/learning.json";
import AnimDisplay from "../components/landing/AnimDisplay";
import { landingNavOptionsTwo } from "../utils/constants";
import Elearning from "../assets/pngs/e-learning.png";
import Recuitement from "../assets/pngs/recuitement.png";
import Oil from "../assets/pngs/oil.png";

function LandingTwo() {
  const [showRecuitementAnimation, setShowRecuitementAnimation] =
    useState(false);
  const [showElearningAnimation, setShowElearningAnimation] = useState(false);
  const [showOilAndGasAnimation, setShowOilAndGasAnimation] = useState(false);

  return (
    <main className="w-full flex relative flex-col items-center justify-between h-screen bg-gradient-to-b from-[#458a28] to-green">
      <NavBar navOptions={landingNavOptionsTwo} />

      <motion.div
        initial={false}
        animate={{
          y:
            showRecuitementAnimation ||
            showElearningAnimation ||
            showOilAndGasAnimation
              ? -125
              : 0,
          transition: {
            duration: 1,
          },
        }}
        className="flex flex-col items-center gap-[10px]"
      >
        <motion.h1
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
          className="font-bold text-5xl text-white"
        >
          Welcome to Mayrahkee
        </motion.h1>

        <motion.span
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
          className="font-meduim w-[50%] text-center text-xl text-white"
        >
          We help people and companies build online visibility - from a business
          card website to an online superstore.
        </motion.span>
      </motion.div>

      <AnimDisplay isOpen={showRecuitementAnimation} src={RecuitementSteps} />
      <AnimDisplay isOpen={showElearningAnimation} src={Learning} />
      <AnimDisplay isOpen={showOilAndGasAnimation} src={Refinery} />

      <motion.ul
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        className="w-[80%] *:cursor-pointer flex  pb-[15px] items-center  justify-between"
      >
        <li
          onMouseEnter={() => setShowRecuitementAnimation(true)}
          onMouseLeave={() => setShowRecuitementAnimation(false)}
          className="flex  w-[30%] hover:scale-105 duration-100 items-center gap-[15%] text-white"
        >
          <div className="flex group flex-col items-center gap-[10px]">
          <img src={Recuitement} className='h-[100px] border-gray-300 w-[100px]'/>

            <div className="flex flex-col items-center">
              <h2 className=" text-[#47aa49] font-extrabold  text-3xl">
                Recruitment
              </h2>
              <span className="font-[300]  text-md">
                Apply and see available Jobs
              </span>
            </div>
          </div>
        </li>
        <hr className="border-r-[1.5px] border-[#458a28] h-[80%]" />
        <li
          onMouseEnter={() => setShowElearningAnimation(true)}
          onMouseLeave={() => setShowElearningAnimation(false)}
          className="flex  w-[30%] hover:scale-105 duration-100 h-[100%]  items-center gap-[15%] text-white"
        >
          <div className="flex flex-col items-center gap-[10px]">
            <img src={Elearning} className="h-[100px] w-[100px]" />
            <div className="flex flex-col items-center">
              <h2 className="font-extrabold  text-2xl">
                <span className="text-[#47aa49] ">E-</span>learning
              </h2>
              <span className="font-[300] text-center text-md">
                for those who create and develop professional websites on their
                own
              </span>
            </div>
          </div>
        </li>
        <hr className="border-r-[1.5px] border-[#458a28] h-[80%]" />
        <li
          onMouseEnter={() => setShowOilAndGasAnimation(true)}
          onMouseLeave={() => setShowOilAndGasAnimation(false)}
          className="flex last:w-[25%] hover:scale-105 duration-100 items-center gap-[15%] text-white"
        >
          <div className="flex flex-col items-center">
            <img src={Oil} className='h-[100px] w-[100px]'/>

            <div className="flex flex-col items-center">
            <h2 className="font-extrabold  text-3xl">
              <span className="text-[#47aa49] ">Oil </span>& Gas
            </h2>
            <span className="font-[300] text-md text-center">
              Enjoy More Live sessions using our platforms
            </span>
            </div>
          </div>
        </li>
      </motion.ul>
    </main>
  );
}

export default LandingTwo;
