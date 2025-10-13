import coverphoto from "../assets/coverphoto.png";
import pp from "../assets/pp.png";
export default function profile() {
  return (
    <div className="flex flex-col mt-25 ml-15 mr-15 mb-10">
      {/* start of main container */}
      <div className="relative w-full mb-5">
        <div className="w-full rounded-3xl overflow-hidden">
          <img src={coverphoto} className="w-full h-[350px] object-cover" />
        </div>
        <img
          src={pp}
          alt="User Avatar"
          className=" absolute left-5 -bottom-20 w-35 h-35 rounded-full object-cover border-2 border-[#3A3A4A] shadow-md"
        />
      </div>
      <div className="flex flex-row items-start justify-between mr-3 ml-45">
        <h3 className=" text-3xl font-outfit-bold">Maria Ashraf</h3>
        <div className="flex items-start justify-between space-x-8 ">
          <button className="w-[100%] bg-[#FDF8F3] text-xl text-black font-outfit-semibold rounded-4xl">
            Lets Lift Up Your Mood
          </button>
        </div>
      </div>
      <div className=" w-[100%] mt-6 bg-[#2C2C3C] rounded-lg min-h-screen shadow-lg">
        <div className="grid grid-cols-[1fr_2fr] gap-4">
          <div className="flex flex-col mt-8 ml-10 mr-10">
              <div className="ml-3">
                <div className="text-2xl font-outfit-bold italic mb-1 text-[#FDF8F3]">✨ About Me</div>
                <div className="mt-2 flex flex-col space-y-2">
                  <div className="text-xl font-outfit italic ml-2 text-[#FDF8F3]">
                    🎂 Age: 23 years old
                  </div>
                  <div className="text-xl font-outfit italic ml-2 text-[#FDF8F3]">
                    📍 Location: New York, USA
                  </div>
                  <div className="text-xl font-outfit italic ml-2 text-[#FDF8F3]">
                    💼 Occupation: Graphic Designer
                  </div>
                  <div className="text-xl font-outfit italic ml-2 text-[#FDF8F3]">
                    📝 Bio: Passionate about art, music, and exploring new places.
                  </div>
                </div>
                <div className="text-2xl font-outfit-bold mt-8 mb-4 text-[#FDF8F3]">✨ Personal Interests</div>

                <div className="mt-4 p-3 bg-[#1E1E2E] rounded-lg shadow-xl">
                  <div className="text-xl font-outfit-bold mb-1 text-[#FDF8F3]">📍 Favorite Places</div>
                  <div className="text-lg font-outfit-regular text-[#FDF8F3]">
                    Cafes, Art Galleries, Nature Trails
                  </div>
                </div>

                <div className="mt-4 p-3 bg-[#1E1E2E] rounded-lg shadow-xl">
                  <div className="text-xl font-outfit-bold mb-1 text-[#FDF8F3]">📚 Favorite Books</div>
                  <div className="text-lg font-outfit-regular text-[#FDF8F3]">
                    "The Alchemist", "1984", "Sapiens"
                  </div>
                </div>

                <div className="mt-4 p-3 bg-[#1E1E2E] rounded-lg shadow-xl">
                  <div className="text-xl font-outfit-bold mb-1 text-[#FDF8F3]">🎬 Favorite Movies</div>
                  <div className="text-lg font-outfit-regular text-[#FDF8F3]">
                    "Interstellar", "Spirited Away", "Pulp Fiction"
                  </div>
                </div>

                <div className="mt-4 p-3 bg-[#1E1E2E] rounded-lg shadow-xl">
                  <div className="text-xl font-outfit-bold mb-1 text-[#FDF8F3]">🎨 Hobbies</div>
                  <div className="text-lg font-outfit-regular text-[#FDF8F3]">
                    Photography, Hiking, Playing Guitar
                  </div>
                </div>

                <div className="mt-4 p-3 bg-[#1E1E2E] rounded-lg shadow-xl">
                  <div className="text-xl font-outfit-bold mb-1 text-[#FDF8F3]">🎶 Favorite Music Genres</div>
                  <div className="text-lg font-outfit-regular text-[#FDF8F3]">
                    Indie Pop, Lo-fi Hip Hop, Classical
                  </div>
                </div>

                <div className="mt-4 p-3 bg-[#1E1E2E] rounded-lg shadow-xl mb-8">
                  <div className="text-xl font-outfit-bold mb-1 text-[#FDF8F3]">🍔 Favorite Foods</div>
                  <div className="text-lg font-outfit-regular text-[#FDF8F3]">
                    Sushi, Pasta, Tacos
                  </div>
                </div>
              </div>
          
            
            
            
            
            
            
            </div>
          <div className="flex flex-col mt-8 ml-10 mr-10">
            <div className="flex items-start ">
                <img src={pp} alt="User Avatar" className="w-15 h-15 rounded-full object-cover border-2 border-[#3A3A4A] shadow-md"/>
                <input type="text" name="diary" placeholder="What's on your mind, Maria?" className="bg-[#1E1E2E] w-full p-3 ml-2 mt-2 rounded-4xl shadow-md focus:shadow-lg focus:shadow-[#8FB3C0]/50 outline-none transition text-[#FDF8F3]"/>
            </div>
            <div className="text-2xl font-outfit-bold text-[#FDF8F3] mt-10 mb-5">Your Thoughts</div>
             <div className="w-[100%] min-h-[300px] h-auto bg-[#1E1E2E] shadow-lg  rounded-3xl px-3 py-3 mb-8" >
            <div className="flex items-start mb-3">
            <img src={pp} alt="User Avatar" className="w-15 h-15 rounded-full object-cover border-2 border-[#3A3A4A] shadow-md"/>
            <div className="ml-3">
              <div className="text-xl font-outfit-bold text-[#FDF8F3]">Maria Ashraf</div>
              <div className="text-sm text-gray-400">2 hours ago</div>
            </div>
            </div>
            <div className="text-[#FDF8F3] text-lg font-outfit-regular">
              Just had an amazing workout session! Feeling energized and ready to take on the day. 💪✨ #FitnessGoals #HealthyLiving
              </div>
            </div>
            <div className="w-[100%] min-h-[300px] h-auto bg-[#1E1E2E] shadow-lg  rounded-3xl px-3 py-3 mb-8" >
            <div className="flex items-start mb-3">
            <img src={pp} alt="User Avatar" className="w-15 h-15 rounded-full object-cover border-2 border-[#3A3A4A] shadow-md"/>
            <div className="ml-3">
              <div className="text-xl font-outfit-bold text-[#FDF8F3]">Maria Ashraf</div>
              <div className="text-sm text-gray-400">2 hours ago</div>
            </div>
            </div>
            <div className="text-[#FDF8F3] text-lg font-outfit-regular">
              Just had an amazing workout session! Feeling energized and ready to take on the day. 💪✨ #FitnessGoals #HealthyLiving
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
