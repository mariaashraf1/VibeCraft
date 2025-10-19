import girl2 from "../../../assets/girl2.png";

export default function WallpaperGallery() {
    return (
        <div className="flex flex-col mt-8 ml-10 mr-10">
        <div className="px-8 bg-[#1E1E2E] rounded-2xl shadow-xl mb-4 mt-10  ">
          <div className="text-[#FDF8F3] font-outfit-bold text-xl pt-5 mb-3">
            Wallpaper Gallery
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
          </div>
        </div>
    );
}