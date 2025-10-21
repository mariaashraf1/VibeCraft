import girl2 from "../../../assets/girl2.png";
import { useTabs } from "../../../context/TabsContext";
import { useState,useRef } from "react";
import { useUserStore } from "../../../stores/User";
export default function ButtonsAndGallery() {
  const { activeTab, setActiveTab } = useTabs();
  const [isOpen, setIsOpen] = useState(false);
  const categories = ["Music", "Food", "Movies", "Books", "Places", "Hobbies"];
  const [activeCategory, setActiveCategory] = useState(null);
  const [isNextOpen, setIsNextOpen] = useState(false);
  const updateUserField = useUserStore((state) => state.updateUserField);
  const inputRef = useRef();

  return (
    <div className="flex flex-col mt-8 ml-10 mr-20">
      <div className="px-8 bg-[#1E1E2E] rounded-2xl shadow-xl mb-16 py-5">
        <div className="flex flex-col justify-center items-center mt-5 mb-5">
          <button className="w-full rounded-full bg-[#7A9CAB] text-[#FDF8F3] mb-10">
            Lets Generate Art And Music for You
          </button>
          <button
            className="w-full rounded-full bg-[#7A9CAB] text-[#FDF8F3] "
            onClick={() => setIsOpen(true)}
          >
            Add Intersets
          </button>
        </div>
      </div>
      <div className="px-8 bg-[#1E1E2E] rounded-2xl shadow-xl mb-4 mt-2">
        <div className="text-[#FDF8F3] font-outfit-bold text-xl pt-5 mb-3">
          Gallery
        </div>
        <div className="grid grid-cols-2 gap-5 mb-5 gap-y-5">
          <img
            src={girl2}
            className="w-[200px] h-[200px] object-cover transition-transform duration-300 hover:scale-120 rounded-2xl"
          />
          <img
            src={girl2}
            className="w-[200px] h-[200px] object-cover transition-transform duration-300 hover:scale-120 rounded-2xl"
          />
          <img
            src={girl2}
            className="w-[200px] h-[200px] object-cover transition-transform duration-300 hover:scale-120 rounded-2xl  "
          />
          <img
            src={girl2}
            className="w-[200px] h-[200px] object-cover transition-transform duration-300 hover:scale-120 rounded-2xl"
          />
        </div>
        <button
          onClick={() => setActiveTab("Wallpaper Gallery")}
          className="w-full rounded-full bg-[#FDF8F3] text-black mb-5"
        >
          Show More
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50">
          <div className="bg-[#1E1E2E] w-[500px] rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-outfit-bold text-[#FDF8F3] mb-4">
              Add Your Interests
            </h2>
            <div className="flex flex-wrap justify-center gap-y-6 gap-x-4 mt-10 mb-10">
              {categories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCategory(category)}
                  className={`${
                    activeCategory === category
                      ? "bg-[#7A9CAB] text-[#FDF8F3]"
                      : "bg-[#FDF8F3] text-[#2C2C3C]"
                  } font-outfit-semibold py-2 rounded-full hover:bg-[#7A9CAB] hover:text-[#FDF8F3] transition hover:outline-none hover:border-none focus:outline-none`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-full bg-gray-500 text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsOpen(false), setIsNextOpen(true);
                }}
                className="px-4 py-2 rounded-full bg-[#7A9CAB] text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
      {isNextOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 bg-opacity-50 z-50 ">
          <div className="bg-[#1E1E2E] w-[500px] rounded-2xl px-8 py-15 shadow-lg">
            <h2 className="font-outfit-semibold text-[#FDF8F3] text-xl">
              Add Your Favourite {activeCategory} now
            </h2>
            <input
              className="w-full mt-4 p-2 rounded-lg bg-[#2C2C3C] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#7A9CAB]"
              placeholder="please write one per time"
              ref={inputRef}

            />
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={() =>{ setIsNextOpen(false), setActiveCategory(null),
                  setIsOpen(true)}}
                className="px-4 py-2 rounded-full bg-gray-500 text-white"
              >
                Back
              </button>
              <button
                onClick={() => {
                  const newValue = inputRef.current.value;
                  setIsNextOpen(false),
                  updateUserField(
                    activeCategory.toLowerCase(),
                    newValue
                  )
                }
                }
                className="px-4 py-2 rounded-full bg-[#7A9CAB] text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
