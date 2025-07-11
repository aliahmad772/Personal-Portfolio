import React from 'react'
import HeroImage from './HeroImage'
import HeroIntro from './HeroIntro'
import { Link } from 'react-router-dom'
import HireME from '../hireMe/HireME'

const HeroMain = () => {
    
  return (

    
    <div to="/" className='px-3 md:grid md:grid-cols-2 md:px-20'>
      

        <div className='h-[100vw] md:h-screen'>
            <HeroImage />
        </div>
        <div  className=' lg:h-screen mb-10'>
            <HeroIntro />
        </div>
       <HireME className={"fixed bottom-[5%] left-[3%] z-50 hidden lg:block h-35 w-35"}/>
    </div>
  )
}

export default HeroMain