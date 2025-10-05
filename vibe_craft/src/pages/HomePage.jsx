import home2 from "../assets/home2.png";
import home1 from "../assets/home1.png";
export default function HomePage() {
    return (
    <div className="flex flex-col items-center justify-center">
        {/* start of main container */}
      <div className=" w-[95%] mt-20 mx-6 bg-[#2C2C3C] rounded-lg min-h-screen overflow-auto shadow-lg">
        <div className="flex flex-col "> {/* start of  main col */}
        <div className="flex items-start justify-between mt-20 "> {/* start of row of pic and text */}
        <div className="flex flex-col "> 
        <div className="flex flex-col items-start justify-center ml-20 mt-20 "> {/* start of text */}
        <h1 className="text-5xl font-bold flex justify-start ">
            Connect Your Mood with </h1>
            <h1 className="text-5xl font-semibold flex justify-start mt-6">
            Music & Art!</h1>
             </div>
             <h3 className="text-2xl  flex justify-start ml-20 mt-10 ">
            Describe Your Mood to get started
        </h3>
        <button className="bg-[#7A9CAB] text-white px-4 py-2 rounded-full mt-10 ml-20">"Start Now"</button>
        </div>
        <img src={home2} alt="home_page"  className="w-[200px] md:w-[400px] lg:w-[600px] h-auto  object-contain" />
        </div>
        </div>
        </div>
      </div>
    );

}