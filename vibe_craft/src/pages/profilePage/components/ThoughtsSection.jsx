import pp from "../../../assets/pp.png";
import ThoughtsCard from "./ThoughtsCard";
import girl2 from "../../../assets/girl2.png";
export default function ThoughtsSection() {
  const thoughts = [
    {
      idea: "Just had an amazing workout session! Feeling energized and ready to take on the day. 💪✨ #FitnessGoals #HealthyLiving",
      time: "2 hours ago",
    },
    {
      idea: "Just had an amazing workout session! Feeling energized and ready to take on the day. 💪✨ #FitnessGoals #HealthyLiving",
      time: "3 hours ago",
    },
  ];
  return (
    <div className="grid grid-cols-[1.2fr_2fr] gap-1">
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
            onClick={() => alert("Show More Clicked")}
            className="w-full rounded-full bg-[#FDF8F3] text-black mb-5"
          >
            Show More
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-8 ml-10 mr-10">
        <div className="flex items-start ">
          <img
            src={pp}
            alt="User Avatar"
            className="w-15 h-15 rounded-full object-cover border-2 border-[#3A3A4A] shadow-md"
          />
          <input
            type="text"
            name="diary"
            placeholder="What's on your mind, Maria?"
            className="bg-[#1E1E2E] w-full p-3 ml-2 mt-2 rounded-4xl shadow-md focus:shadow-lg focus:shadow-[#8FB3C0]/50 outline-none transition text-[#FDF8F3]"
          />
        </div>
        <div className="text-2xl font-outfit-bold text-[#FDF8F3] mt-10 mb-5">
          Your Thoughts
        </div>
        {thoughts.map((thought, index) => (
          <ThoughtsCard key={index} thought={thought} />
        ))}
      </div>
    </div>
  );
}
