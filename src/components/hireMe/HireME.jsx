import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const HireME = ({className=""}) => {
  
  return (
    <div className={`  rounded-full ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
  transition={{
    repeat: Infinity,
    duration: 8,
    ease: "linear",
  }}
        className='absolute w-full h-full bg-[url("/images/CurvedText.png")] bg-center bg-cover text-[#1b1b1b]'
        
      ></motion.div>

      <Link to={"/contact"} className="absolute z-51 flex items-center justify-center text-xs lg:text-lg lg:font-semibold hover:bg-[#f5f5f5] hover:text-[#1b1b1b] hover:border-2 hover-border-[#1b1b1b] bg-[#1b1b1b] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 lg:h-20 lg:w-20 text-white rounded-full">
        <p>Hire Me</p>
      </Link>
    </div>
  );
};

export default HireME;
