import NavBar from "../components/landing/NavBar";
import "../css/extras.css";
import { motion } from "framer-motion";
import { landingNavOptionsTwo } from "../utils/constants";
import Elearning from "../assets/pngs/laptop-2.png";
import Recuitement from "../assets/pngs/wallet-2.png";
import Oil from "../assets/pngs/factory.png";
import WomanInOrange from '../assets/jpgs/woman-in-orange.jpg'

function LandingTwo() {
  return (
    <main className="h-max w-full flex bg-cover bg-center relative">
      <img src={WomanInOrange} className="absolute object-cover w-full z-10 h-full" alt="" />
 
      <div className="w-full flex relative flex-col z-20 items-center min-h-screen bg-green/85">
 <NavBar navOptions={landingNavOptionsTwo} />

       
        <motion.div
          className="flex-1 flex flex-col items-center justify-center gap-[10px]"
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
            className="font-bold text-4xl text-white text-center"
          >
           The minimalist that offers maximalist
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
            className="font-meduim w-[95%] md:w-[50%] text-center text-sm md:text-md text-white mb-2"
          >
            We help people and companies build online visibility - from a
            business card website to an online superstore.
          </motion.span>
        </motion.div>

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
          className="w-[80%] *:cursor-pointer flex flex-col md:flex-row pb-[15px] items-center gap-2 md:gap-0 md:justify-between my-2 md:my-0"
        >
          <li className="flex w-60 md:w-[30%] hover:scale-105 duration-100 items-center gap-[15%] text-white">
            <div className="flex group flex-col items-center gap-[10px]">
              <img
                src={Recuitement}
               className="h-[50px] w-[50px]"
              />

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
          <li className="flex  w-60 md:w-[30%] hover:scale-105 duration-100 h-[100%] items-center gap-[15%] text-white">
            <div className="flex   flex-col items-center gap-[10px]">
              <img src={Elearning} className="h-[50px] w-[70px]"/>
              <div className="flex flex-col items-center">
                <h2 className="font-extrabold  text-2xl">
                  <span className="text-[#47aa49] ">E-</span>learning
                </h2>
                <span className="font-[300] text-center text-md">
                  for those who create and develop professional websites on
                  their own
                </span>
              </div>
            </div>
          </li>
          <hr className="border-r-[1.5px] border-[#458a28] h-[80%]" />
          <li className="flex w-60 md:last:w-[25%] hover:scale-105 duration-100 items-center gap-[15%] text-white">
            <div className="flex flex-col items-center gap-[10px]">
              <img src={Oil} className="h-[50px] w-[50px]" />

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
      </div>
    </main>
  );
}

export default LandingTwo;
