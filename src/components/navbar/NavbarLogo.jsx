import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";
import { div } from 'framer-motion/client';


const NavbarLogo = () => {


  const colors = ['#0F172A', '#F97316', '#3B0764']; // Your 3 colors
  const [isHover, setIsHover] = useState(false);


  return (
    <div className='flex justify-center items-center'>
      <motion.div  onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      animate={
        isHover
          ? { backgroundColor: colors }
          : { backgroundColor: "black" }
      }
      transition={
        isHover
          ? {
              backgroundColor: {
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
              },
            }
          : { duration: 0.3 }} className=' flex justify-center items-center  h-16 w-16 rounded-full bg-black text-white text-3xl font-bold'>
         <img src="./images/logo.png" alt="" />
    </motion.div>
    </div>
    
  )
}

export default NavbarLogo