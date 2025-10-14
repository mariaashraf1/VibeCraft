import pp from "../../../assets/pp.png";

export default function ThoughtsCard({ thought }) {
  return (
    <>
      <div className="w-[100%] min-h-[300px] h-auto bg-[#1E1E2E] shadow-lg  rounded-3xl px-3 py-3 mb-8">
        <div className="flex items-start mb-3">
          <img
            src={pp}
            alt="User Avatar"
            className="w-15 h-15 rounded-full object-cover border-2 border-[#3A3A4A] shadow-md"
          />
          <div className="ml-3">
            <div className="text-xl font-outfit-bold text-[#FDF8F3]">
              Maria Ashraf
            </div>
            <div className="text-sm text-gray-400">{thought.time}</div>
          </div>
        </div>
        <div className="text-[#FDF8F3] text-lg font-outfit-regular">
          {thought.idea}
        </div>
      </div>
      <div className="mt-1 mb-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
    </>
  );
}
