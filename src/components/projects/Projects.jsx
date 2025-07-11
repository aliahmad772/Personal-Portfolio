import React from "react";
import { FaGithub } from 'react-icons/fa';

const SmallCards = ({proType, proTitle, src, href}) => {
  return (
    <div className="shadow-[8px_8px_0px_rgba(0,0,0,1)]  bg-white rounded-2xl overflow-hidden p-8 h-auto w-full lg:w-[50%]  my-10 border border-black">
      <div className="relative rounded-xl w-auto border border-black/20  overflow-hidden">
        <img
          src={src} 
          alt="NFT Collection Website"
          className="max-h-[16rem] w-full object-cover  hover:scale-105 transition-all duration-300"
        />
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-pink-600 text-lg xl:text-2xl">{proType}</p>
        <h3 className="Text-3xl lg:text-4xl font-semibold xl:w-[80%]">
          {proTitle}
        </h3>

        <div className="flex items-center justify-end mt-2">
          
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[#1b1b1b] hover:text-[#303030ec]"
          >
            <FaGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};


const Cards = ({proType, proTitle, proDesc, src, href}) => {
  return(
    
        <div className={`shadow-[8px_8px_0px_rgba(0,0,0,1)] relative flex flex-col lg:flex-row justify-center items-center border border-black bg-amber-50 p-4 lg:p-10 rounded-xl gap-6 h-auto xl:h-[26rem] w-[80%] mx-auto mb-2 lg:mb-0 mt-12`}>
          <img
            className=" h-full w-full md:w-[42%] rounded-xl object-cover object-left border border-black/20"
            src={src}
            alt=""
          />
          <div className="flex flex-col text-start justify-between h-full space-y-4">
            <p className="text-pink-600 text-lg lg:text-2xl">{proType}</p>
            <h1 className="text-3xl lg:text-5xl font-semibold lg:w-[80%]">{proTitle}</h1>
            <p className="text-md lg:text-lg">{proDesc}</p>
            <span className="flex items-center justify-start space-x-4">
              <FaGithub size={30} className="text-[#1b1b1b]"/>
              <a href={href} target="_blank" rel="noopener noreferrer" className="my-4 md:my-0 text-2xl py-2 px-4 border bg-[#1b1b1b] text-[#f5f5f5] rounded-lg hover:bg-[#303030ec] duration-200">Visit</a>
            </span>
          </div>
        </div>
      
      
  )
}

const Projects = () => {

  const size = "23rem";

  return (
    <div className="">
      <h1 className="text-4xl md:text-8xl font-extrabold text-center mt-10 lg:mt-24 md:pb-14 w-[80%] mx-auto">
        Imagination Trumps <br /> Knowledge!{" "}
      </h1>

      <Cards 
        proType={"Featured Project"}
        proTitle={"Oshi (Awarded Web App)"}
        proDesc={"An award-winning website, developed with modern web technologies. It features a phenomenal GUI, and interactive animations. Designed with attention to detail, it offers an engaging user experience and showcases advanced frontend skills."}
        src={'/images/Oshi.PNG'}
        href={'https://oshi-tan.vercel.app/'}
        />

      <div className="flex justify-between items-start  w-[80%]  mt-10  mx-auto flex-col sm:flex-row sm:gap-20 ">
        <SmallCards
         proType={"Practice Project"}
         proTitle={"Tic Tac Toe"}
         src={"./images/Tictactoe.PNG"}
         href={'https://github.com/aliahmad772/Tic-Tac-Toe'}
         />
         
        <SmallCards
         proType={"Practice Project"}
         proTitle={"Todo List"}
         src={"./images/todoList.PNG"}
         href={'https://github.com/aliahmad772/Todo-List'}
         />

         

         
      </div>

      <div className="flex justify-between items-start mb-20 w-[80%] mx-auto flex-col sm:flex-row sm:gap-20 ">
        <SmallCards
         proType={"Project clone"}
         proTitle={"Microsoft Website"}
         src={"./images/Microsoft.PNG"}
         href={'https://github.com/aliahmad772/Microsoft-Clone'}
         />
         
        <SmallCards
         proType={"Project clone"}
         proTitle={"Amazon Website"}
         src={"./images/Amazon.PNG"}
         href={'hhttps://github.com/aliahmad772/Amazon-Website/tree/main/Amazone%20Project'}
         />

         

         
      </div>
        
      
    </div>
  );
};

export default Projects;
