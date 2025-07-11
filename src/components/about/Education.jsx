import { motion, useScroll } from 'framer-motion'
import React, { useRef } from 'react'
import LiIcon from '../liIcon/LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null)
  return (
    <li className='my-8 first:mt-0 last:mb-0 w-[55%] mx-auto flex flex-col items-center justify-between text-center sm:text-left'>
        <LiIcon ref={ref} className={"hidden sm:block"}/>
      <div>
        <h3 className='capitalize font-bold text-2xl'>
          {position}&nbsp;
        </h3>
        <span className='capitalize text-black/55'>
          {time} | {address}
        </span>
        <p className='font-medium w-full'>
          {work}
        </p>
      </div>
    </li>
  )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

  return (
    <div className='my-20 pb-28'>
      <h2 className=' text-4xl md:text-8xl font-extrabold pb-8 lg:mb-32 w-full text-center'>
        Eduction
      </h2>

      <div ref={ref} className=' lg:w-[75%] mx-auto relative'>

        <motion.div
            style={{scaleY:scrollYProgress}}
            className='absolute left-12 hidden sm:block top-0 w-[4px] bg-black origin-top h-full'
        />

        <ul>
          

          <Details
            position="Intermediate (Computer Science) completed."
            time="2019-2021"
            address="Sedna Higher Secondary School"
            work="Gained foundational knowledge and hands-on experience in programming, computer systems, and IT concepts during my Intermediate studies in Computer Science."
          />

          <Details
            position="Bachelor of Science in Computer Science"
            time="2022-2026"
            address="SZABIST Islamabad"
            work="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
          />

        </ul>
      </div>
    </div>
  )
}

export default Experience
