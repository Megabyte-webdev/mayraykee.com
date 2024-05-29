import { useRef } from "react";
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
import {useNavigate} from 'react-router-dom'
import { landingNavOptions } from "../utils/constants";

function Landing() {

  const navigate = useNavigate()

  const [showRecuitementAnimation, setShowRecuitementAnimation] = useState(false);
  const [showElearningAnimation, setShowElearningAnimation] = useState(false);
  const [showOilAndGasAnimation, setShowOilAndGasAnimation] = useState(false);


  const navigateToLandingTwo = () => navigate('/landing_two')


  return (
    <main className="w-full flex relative flex-col items-center  h-screen  bg-[#0d4704]">
      <NavBar navOptions={landingNavOptions} />

      <motion.div
        initial={false}
        animate={{
          y: (showRecuitementAnimation || showElearningAnimation || showOilAndGasAnimation) ? -100 : 0,
          transition: {
            duration: 1
          }
        }}
        className="flex flex-col  items-center mt-[10%] gap-[20px]"
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

      <AnimDisplay isOpen={showRecuitementAnimation} src={RecuitementSteps}/>
      <AnimDisplay isOpen={showElearningAnimation} src={Learning}/>
      <AnimDisplay isOpen={showOilAndGasAnimation} src={Refinery}/>

      <motion.ul initial={{
        opacity: 0,
        y: 50
      }} 
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1
        }
      }}
      className="w-[80%] *:cursor-pointer flex mt-[15%] items-center  justify-between">
        <li
          onMouseEnter={() => setShowRecuitementAnimation(true)}
          onMouseLeave={() => setShowRecuitementAnimation(false)}
          className="flex   w-[30%] hover:scale-105 duration-100 h-[140%] items-center gap-[15%] text-white"
        >
          <div className="flex flex-col">
            <h2 className="font-bold  text-2xl">Recruitment</h2>
            <span className="font-[300]  text-md">
              Apply and see available Jobs
            </span>
          </div>
        </li>
        <hr className='border-r-[1.5px] border-gray-500 h-[140%]'/>
        <li 
        onMouseEnter={() => setShowElearningAnimation(true)}
        onMouseLeave={() => setShowElearningAnimation(false)}
        className="flex  w-[30%] hover:scale-105 duration-100 h-[140%]  items-center gap-[15%] text-white">
          <div className="flex flex-col">
            <h2 className="font-bold  text-2xl">E-learning</h2>
            <span className="font-[300] text-md">
              for those who create and develop professional websites on their
              own
            </span>
          </div>
        </li>
        <hr className='border-r-[1.5px] border-gray-500 h-[140%]'/>
        <li
         onMouseEnter={() => setShowOilAndGasAnimation(true)}
         onMouseLeave={() => setShowOilAndGasAnimation(false)}
         className="flex last:w-[25%] h-[140%] hover:scale-105 duration-100   items-center gap-[15%] text-white">
          <div className="flex flex-col">
            <h2 className="font-bold  text-2xl">Oil & Gas</h2>
            <span className="font-[300] text-md">
              Enjoy More Live sessions using our platforms
            </span>
          </div>
        </li>
      </motion.ul>
    </main>
  );
}

export default Landing;
