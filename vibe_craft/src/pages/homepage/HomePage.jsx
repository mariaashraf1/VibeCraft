import HobbySection from "./components/HobbySection";
import FeaturesPreview from "./components/FeaturesPreview";
import  MusicSection from "./components/MusicSection";
import HomepageHeader from "./components/HomepageHeader";


export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* start of main container */}
      <div className=" w-[95%] mt-20 mx-6 bg-[#2C2C3C] rounded-lg min-h-screen shadow-lg">
        <div className="flex flex-col ml-20 mr-20 no-scrollbar">
          {/* start of  main col */}
          <HomepageHeader />
          <FeaturesPreview />
          <HobbySection/>
          <MusicSection />
        </div> 
      </div>
    </div>
  );
}
