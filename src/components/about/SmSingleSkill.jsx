import React from 'react'

const SmSingleSkill = ({ iconSvg, text, key, className="" }) => {
  return (
    <div 
        key={key}
        className={`flex justify-center items-center ${className}`}>
        
        <div className='p-4 my-8 border bg-[#1b1b1b] text-[white] rounded-full text-[46px]'>{iconSvg}</div>
    </div>
  )
}

export default SmSingleSkill