import girl2 from "../../../assets/girl2.png";
import { useTabs } from "../../../context/TabsContext";

export default function ButtonsAndGallery() {

const { activeTab, setActiveTab } = useTabs();
    return(
      
      <div className="flex flex-col mt-8 ml-10 mr-10">
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
      {/* <div className="flex flex-col justify-center items-center mt-30">
          <button className=" w-[400px] rounded-full bg-[#7A9CAB] text-[#FDF8F3] text-xl ">
          Lets Generate Art And Music 
          </button>
      </div> */}
    </div>
    );
}