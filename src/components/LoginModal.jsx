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
          className="fixed flex z-[999] top-0 left-0 items-center justify-center w-full h-screen "
        >
          <div className="w-[45%] h-[50%] items-center rounded-lg p-2 bg-white flex flex-col">
            <IoIosCloseCircle
              onClick={() => setIsOpen(false)}
              className="place-self-end cursor-pointer text-lg"
            />

            <div className="flex flex-col items-center mt-[2%] text-gray-800">
              <h2 className="font-bold text-xl">Login to Account</h2>
              <p className="text-[11px] text-gray-400 w-[60%] text-center">
                Ready to expand your knowledge or take the next step in your
                career? Choose your path:
              </p>
            </div>

            <div className="w-full flex justify-center mt-[8%] gap-[30px] ">
              <button
                onClick={navigateToElearningLogin}
                className="h-[100px] hover:scale-105 duration-100 rounded-md w-[150px] items-center justify-center bg-green text-white font-bold flex flex-col"
              >
                <img src={laptopIcon} className="h-[30px]" />
                E-Learning
              </button>
              <a
                href="https://job-portal-mayrahkee.vercel.app/"
                className="h-[100px] hover:scale-105 duration-100  rounded-md w-[150px] items-center justify-center bg-white border border-green text-green font-bold flex flex-col"
              >
                <img src={caseIcon} className="h-[30px]" />
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
