import Education from "./Education";
import Skills from "./Skills"


export default function About() {
  
  return (
    <>
      
      <div className="Main lg:py-14">
        
        <div className="">
          <h1 className="text-4xl md:text-8xl font-extrabold text-center mt-10 md:pb-14">Passion Fuels <br /> Purpose! </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:space-x-20 w-full md:pt-10">
          <div className="text-lg font-medium order-2 md:order-1 w-[90%] md:w-[30%]">
            <h1 className="text-center md:text-left text-xl font-semibold">BIOGRAPHY</h1>
            <br />


            <p>Hi, I'm <b>Ali Jan</b>, a web developer and designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 2 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life. </p>
            <br />

            <p>I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users.</p>
            <br />
            <p>I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p>
            <br />   
          </div>

          <div className=" order-1 md:order-2 flex flex-col md:flex-row md:mb-12 justify-center items-center h-96">
            <div className="shadow-[8px_8px_0px_rgba(0,0,0,1)] border-2 border-black w-[16rem] h-[16rem] md:w-[23rem] md:h-[23rem] bg-amber-50 p-6 rounded-xl">
              <img className="object-contain h-full w-full rounded-xl" src="../images/Aj.png" alt="" />
            </div>
          
          </div>

          <div>

          </div>
        </div>
      </div>

      <Skills />
      <Education />

    </>
  );
}
