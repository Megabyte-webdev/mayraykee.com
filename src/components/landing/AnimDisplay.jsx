import { useEffect } from "react";
import { useRef } from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

function AnimDisplay({ isOpen, src }) {
  const lottieRef = useRef();

  useEffect(() => {
    if (typeof lottieRef.current !== "undefined") {
      console.log(lottieRef);
      lottieRef.current.setSpeed(1.5);
    }
  }, [lottieRef]);

  return isOpen && (
    <motion.div
      initial={false}
      animate={{
        visibility: isOpen ? "visible" : "hidden",
        opacity: isOpen ? 1 : 0,
        transition: { duration: 1 },
      }}
      className="absolute bottom-[30%] transition duration-300 h-[45%]"
    >
      <Lottie
        lottieRef={lottieRef}
        style={{ height: "100%" }}
        animationData={src}
      />
    </motion.div>
  );
}

export default AnimDisplay;
