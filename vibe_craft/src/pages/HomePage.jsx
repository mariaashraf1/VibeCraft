import home2 from "../assets/home2.png";
import home1 from "../assets/home1.png";
import girl6 from "../assets/girl6.png";
import { useEffect } from "react";
import { useHobbyStore } from "../stores/HobbyStore";
export default function HomePage() {
  const { hobbies, fetchHobbies, loading, error } = useHobbyStore();
  useEffect(() => {
    fetchHobbies();
  }, [fetchHobbies]);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* start of main container */}
      <div className=" w-[95%] mt-20 mx-6 bg-[#2C2C3C] rounded-lg min-h-screen overflow-auto shadow-lg">
        <div className="flex flex-col ml-20">
          {/* start of  main col */}
          <div className="flex items-center justify-between mt-20 ">
            {" "}
            {/* start of row of pic and text */}
            <div className="flex flex-col ">
              <div className="flex flex-col items-start justify-center  mt-10 ">
                {/* start of text */}
                <h1 className="text-5xl font-bold italic ">
                  Connect Your Mood with
                </h1>
                <h1 className="text-5xl font-semibold italic mt-6">
                  Art & Music!
                </h1>
              </div>
              <div className="flex flex-col items-start justify-start   mt-30 mr-60 ">
                <h3 className="text-xl  ">Describe Your Mood to get started</h3>
                <button className="w-full bg-[#7A9CAB] text-white font-semibold py-2 rounded-full mt-10  hover:bg-[#6a8f9b] transition">
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
          <h1 className="text-2xl font-semibold italic mt-6">
            Explore Hobbies and Crafts to craft your mood
          </h1>

          <div className="flex items-start justify-start space-x-20 mt-10 mr-15 overflow-x-auto no-scrollbar">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading &&
              !error &&
              hobbies.map((item) => (
                <div key={item.id} className="mb-4 flex-shrink-0">
                  <img
                    src={item.image}
                    alt="home1"
                    className="w-[200px] h-[200px] object-cover rounded-2xl"
                  />
                  <h3 className="text-xl font-semibold italic mt-3 text-center">
                    {item.name}
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
