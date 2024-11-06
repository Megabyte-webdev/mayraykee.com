import { IoIosCloseCircle } from "react-icons/io";
import laptopIcon from "../assets/pngs/lapto.png";
import caseIcon from "../assets/pngs/case-icon.png";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

function LoginModal({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const navigateToElearningLogin = () => navigate("/login");
  const navigateToJobLogin = () => navigate("/landing_two");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="login_modal"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: [0, 1, 1.1, 1.1, 1],
            transition: {
              duration: 0.4,
              ease: "easeOut",
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          viewport={{ once: true }}
          className="fixed flex z-[999] top-0 left-0 items-center justify-center w-full h-screen"
        >
          <div className="w-[90%] sm:w-[75%] md:w-[60%] lg:w-[45%] h-auto max-h-[90%] sm:max-h-[70%] md:max-h-[50%] items-center rounded-lg p-4 sm:p-6 bg-white flex flex-col overflow-y-auto">
            <IoIosCloseCircle
              onClick={() => setIsOpen(false)}
              className="place-self-end cursor-pointer text-2xl sm:text-lg"
            />

            <div className="flex flex-col items-center mt-2 sm:mt-4 text-gray-800">
              <h2 className="font-bold text-lg sm:text-xl">Login to Account</h2>
              <p className="text-sm sm:text-[11px] text-gray-400 w-[80%] sm:w-[60%] text-center">
                Ready to expand your knowledge or take the next step in your
                career? Choose your path:
              </p>
            </div>

            <div className="w-full flex flex-col sm:flex-row justify-center items-center mt-4 sm:mt-8 gap-4 sm:gap-[30px]">
              <button
                onClick={navigateToElearningLogin}
                className="h-[80px] sm:h-[100px] hover:scale-105 duration-100 rounded-md w-[130px] sm:w-[150px] items-center justify-center bg-green text-white font-bold flex flex-col"
              >
                <img src={laptopIcon} className="h-[25px] sm:h-[30px]" alt="E-Learning Icon" />
                E-Learning
              </button>
              <a
                href="https://job-portal-mayrahkee.vercel.app/"
                className="h-[80px] sm:h-[100px] hover:scale-105 duration-100 rounded-md w-[130px] sm:w-[150px] items-center justify-center bg-white border border-green text-green font-bold flex flex-col"
              >
                <img src={caseIcon} className="h-[25px] sm:h-[30px]" alt="Job Portal Icon" />
                Job Portal
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoginModal;
