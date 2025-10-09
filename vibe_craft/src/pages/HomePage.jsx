import girl6 from "../assets/girl6.png";
import HobbySection from "../components/HobbySection";
import FeaturesPreview from "../components/FeaturesPreview";
import  MusicSection from "../components/MusicSection";
export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* start of main container */}
      <div className=" w-[95%] mt-20 mx-6 bg-[#2C2C3C] rounded-lg min-h-screen shadow-lg">
        <div className="flex flex-col ml-20 mr-20 no-scrollbar">
          {/* start of  main col */}
          <div className="flex items-center justify-between mt-20 ">
            {" "}
            {/* start of row of pic and text */}
            <div className="flex flex-col ">
              <div className="flex flex-col items-start justify-center  mt-10 ">
                {/* start of text */}
                <h1 className="text-6xl font-outfit-bold italic text-[#FDF8F3]">
                  Connect Your Mood with
                </h1>
                <h1 className="text-6xl font-outfit-semibold italic mt-6 text-[#FDF8F3]">
                  Art & Music!
                </h1>
              </div>
              <div className="flex flex-col items-start justify-start   mt-30 mr-90 ">
                <h3 className="text-xl font-outfit text-[#FDF8F3]">Describe Your Mood to get started</h3>
                <button className="w-full bg-[#7A9CAB] text-white font-outfit-semibold py-2 rounded-full mt-10  hover:bg-[#6a8f9b] hoover:border-color:[#3A3A4A] transition">
                  Get Started
                </button>
              </div>
            </div>
            <div className="relative mr-20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A9CAB] to-[#2C2C3C] rounded-full blur-3xl opacity-30 scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#7A9CAB] to-[#2C2C3C] rounded-full blur-2xl opacity-40 scale-105"></div>
              <img
                src={girl6}
                alt="home_page"
                className="relative w-[200px] md:w-[400px] lg:w-[400px] h-auto object-contain z-10"
              />
            </div>
          </div>
          <FeaturesPreview />
          <HobbySection/>
          <MusicSection />
          
         

        </div>
        
      </div>
    </div>
  );
}
