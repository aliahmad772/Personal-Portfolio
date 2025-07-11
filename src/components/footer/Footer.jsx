import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  
  return (
    <div className='h-30 w-full '>
        <hr />
        <hr />
        <div className='flex flex-col space-y-6 md:space-y-0 my-8 md:my-0 md:grid grid-cols-3 text-center items-center h-full text-xl font-semibold'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <span>Build With <span> &#9825; </span>by <Link className='underline underline-offset-2'>Ali Jan</Link></span>
            <Link className='underline underline-offset-2'>Say Hello</Link>
        </div>
    </div>
  )
}

export default Footer