import girl2 from "../../../assets/girl2.png";
export default function ButtonsAndGallery({activeTab, setActiveTab}) {

    return(
      
      <div className="flex flex-col mt-8 ml-10 mr-10">
      <div className="px-8 bg-[#1E1E2E] rounded-2xl shadow-xl mb-4 ">
        <div className="text-[#FDF8F3] font-outfit-bold text-xl pt-5">
          User Information
        </div>
        <div className="flex flex-col justify-center items-center mt-5 mb-5">
          <button className="w-full rounded-full bg-[#FDF8F3] text-black mb-5">
            Edit User Info
          </button>
          <button className="w-full rounded-full bg-[#FDF8F3] text-black mb-5">
            Add Info
          </button>
          <button className="w-full rounded-full bg-[#FDF8F3] text-black ">
            Add Interest
          </button>
        </div>
      </div>
      <div className="px-8 bg-[#1E1E2E] rounded-2xl shadow-xl mb-4 mt-10  ">
        <div className="text-[#FDF8F3] font-outfit-bold text-xl pt-5 mb-3">
          Gallery
        </div>
        <div className="grid grid-cols-2 gap-5 mb-5 gap-y-5">
          <img
            src={girl2}
            className="w-[220px] h-[220px] object-cover transition-transform duration-300 hover:scale-120 rounded-2xl"
          />
          <img
            src={girl2}
            className="w-[220px] h-[220px] object-cover transition-transform duration-300 hover:scale-120 rounded-2xl"
          />
          <img
            src={girl2}
            className="w-[220px] h-[220px] object-cover transition-transform duration-300 hover:scale-120 rounded-2xl  "
          />
          <img
            src={girl2}
            className="w-[220px] h-[220px] object-cover transition-transform duration-300 hover:scale-120 rounded-2xl"
          />
        </div>
        <button
          onClick={() => setActiveTab("Wallpaper Gallery")}
          className="w-full rounded-full bg-[#FDF8F3] text-black mb-5"
        >
          Show More
        </button>
      </div>
    </div>
    );
}