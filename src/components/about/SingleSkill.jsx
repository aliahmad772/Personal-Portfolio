import React from 'react'

const SingleSkill = ({ iconSvg, text, key, className="" }) => {
  return (
    <div 
    key={key}
    className={`group relative translate-y-10 hover:-translate-y-0 transform transition-all duration-300 text-center h-50 w-22 border bg-[#1b1b1b] rounded-t-full ${className}`}>
            <div>
              <div className="relative left-1/2 -translate-x-1/2 flex justify-center items-center h-18 w-18 mt-2 border  bg-white rounded-full text-[46px] overflow-hidden group-hover:shadow-[0px_0px_10px_2px_orange] group-hover:text-[#F97316]"> {iconSvg}</div>

              <p className='text-sm pt-2 text-white font-semibold group-hover:text-[#F97316]'>{text}</p>
            </div>
          </div>
  )
}

export default SingleSkill