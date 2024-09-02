import Lottie from "lottie-react";
import computer from "../assets/lottie/computer.json";
import { useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  useEffect(() => {
    // Adding animations when the component mounts
  }, []);

  return (
    <section
      id="about"
      className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="WRAPPER mt-12 flex justify-between max-sm:flex-col gap-5"
      >
        <div className="INTRO text-[70px] leading-[80px] font-semibold max-sm:text-[50px] max-sm:leading-[70px] max-sm:font-semibold">
          <h3 className="text-[#00040f] dark:text-white hover:text-blue-500 transition duration-500">
            Hi, there! <br />I am
          </h3>
          <motion.span
            className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: "100% 50%" }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Zakarya Oukil
          </motion.span>

          <motion.p
            className="ABOUT h-[150px] text-xl max-sm:text-[15px] bg-clip-text text-transparent bg-gradient-to-r from-[#00040f] to-slate-500 dark:from-slate-500 dark:to-slate-200 max-w-[470px] mt-5 pl-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Graphic designer, UI/UX designer, and web developer passionate about creating innovative solutions to solve real-world problems.
          </motion.p>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="Lottie-Wrapper max-w-[650px] shadow-xl rounded-xl border border-[#00040f]"
        >
          <Lottie animationData={computer} loop={true} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
