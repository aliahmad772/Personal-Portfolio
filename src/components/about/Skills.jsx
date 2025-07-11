import React from "react";
import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import Line from "../line/Line";
import { motion } from "framer-motion";
import { fadeIn } from "../../../fadeIn";
import Breaker from "../breaker/Breaker";
import SmSingleSkill from "./SmSingleSkill";

const SkillIcons = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "Typescript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];

const Skills = () => {
  return (
    <div className="Main pt-14 ">
      <div className="flex flex-col md:justify-between h-full md:h-screen">
        <div className="">
          <h1 className="text-4xl md:text-8xl font-extrabold text-center pb-8  md:py-14">
            Skills
          </h1>

          <p className="text-center w-[80%] mx-auto text-lg font-medium ">
            I specialize in building modern, responsive websites using HTML,
            CSS, and JavaScript. Skilled in Tailwind CSS for fast, clean design
            and layout implementation. Experienced with ReactJS and NextJS for
            creating dynamic, high-performance web applications. I focus on
            writing clean, maintainable, and scalable code for real-world
            projects. Capable of transforming design concepts into fully
            functional web pages. Well-versed in component-based architecture
            and reusable UI development. Dedicated to continuous learning and
            staying updated with the latest web technologies.
          </p>
        </div>

        <div className="hidden md:block">
          <div className="flex justify-center items-end gap-6 w-full overflow-hidden ">
            {SkillIcons.map((item, index) => {
              return (
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0 }}
                >
                  <SingleSkill
                    key={index}
                    text={item.skill}
                    iconSvg={<item.icon />}
                    className={""}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 w-full overflow-hidden py-10 md:hidden">
          {SkillIcons.map((item, index) => {
            return (
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <SmSingleSkill
                  key={index}
                  text={item.skill}
                  iconSvg={<item.icon />}
                  className={""}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      <Breaker />
    </div>
  );
};

export default Skills;
