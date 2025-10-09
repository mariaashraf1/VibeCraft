import { useEffect } from "react";
import { useHobbyStore } from "../stores/HobbyStore";
export default function HobbySection() {
    const { hobbies, fetchHobbies, loading, error } = useHobbyStore();
    useEffect(() => {
      fetchHobbies();
    }, [fetchHobbies]);
  
    return(
       <>
        <h1 className="text-4xl font-outfit-semibold mt-20 text-[#FDF8F3] text-center">
          Match your mood with creative hobbies and crafts.
          </h1>
        <div className="flex items-start justify-start space-x-10 mt-10  overflow-x-auto no-scrollbar">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!loading &&
              !error &&
              hobbies.map((item) => (
                <div key={item.id} className="mb-4 flex-shrink-0">
                  {/* Image wrapper */}
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={item.image}
                      alt="home1"
                      className="w-[220px] h-[220px] object-cover transition-transform duration-300 hover:scale-120"
                    />
                  </div>
                  <h3 className="text-xl font-outfit-semibold mt-6 text-[#FDF8F3]">
                    {item.name}
                  </h3>
                  <h4 className="text-md font-outfit mt-2 text-[#C0C0C0]">
                    {item.moods && item.moods.length>0
                    ?item.moods.map((moodItem)=> moodItem.name).join(", "):"'No moods available"}
                  </h4>
                </div>
              ))}
          </div>
          </>
          
    );
}