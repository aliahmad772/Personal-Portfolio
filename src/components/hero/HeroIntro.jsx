
import { Link } from "react-router-dom";

const HeroIntro = () => {
  
  return (
    <div
        
       className="md:pt-16 lg:pt-20 md:w-[90%] text-[#1b1b1b] text-center md:text-left space-y-2 md:space-y-4">
      <h1 className="text-[8vw] md:text-7xl text-[#1b1b1b] font-bold lg:tracking-tighter lg:leading-17">Turning Vision  Into Reality With  Code And Design.</h1>
      <p className="md: text-[4vw] md:text-lg lg:leading-[20px]">As a creative front-end web developer and designer, I specialize in crafting beautiful, user-focused websites. Explore my latest work and designs, highlighting my skills in responsive development.</p>
      <div className="space-x-3">
        <button className="my-4 md:my-0 text-2xl py-2 px-4 border bg-[#1b1b1b] text-[#f5f5f5] rounded-lg hover:bg-[#303030ec] duration-200">Resume</button>
        <Link to={"/contact"} className="text-2xl underline offset-2" href="">Contact</Link>
      </div>
    </div>
  );
};

export default HeroIntro;
