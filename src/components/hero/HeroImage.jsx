import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "../../../fadeIn";

const HeroImage = () => {
  
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0 }}
    className="flex justify-center h-full">
      <div className="bg-[url('../public/images/Ali.png')] bg-cover bg-no-repeat bg-center h-full w-[30rem]"></div>
    </motion.div>
  );
};

export default HeroImage;
