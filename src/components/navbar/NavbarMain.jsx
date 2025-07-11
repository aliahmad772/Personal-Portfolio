import React from "react";
import NavbarMenu from "./NavbarMenu";
import NavbarLogo from "./NavbarLogo";
import NavbarIcons from "./NavbarIcons";
import { motion } from "framer-motion";
import { fadeIn } from "../../../fadeIn";


const NavbarMain = () => {
  return (
    <motion.div
      variants={fadeIn(0.2)}
      initial="hidden"
      animate="show"
      className="grid grid-cols-3 h-22 text-lg"
    >
      <NavbarMenu />
      <NavbarLogo />
      <NavbarIcons />
    </motion.div>
  );
};

export default NavbarMain;
