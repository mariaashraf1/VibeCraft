import pp from "../../../assets/pp.png";
import ThoughtsCard from "./ThoughtsCard";
import ButtonsAndGallery from "./ButtonsAndGallery";
import Modal from "../../../components/Modal";
import PostComposer from "./PostComposer";
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
      <ButtonsAndGallery />
      <div className="flex flex-col mt-8 ml-10 mr-10">
        <div className="flex items-start ">
          <img
            src={pp}
            alt="User Avatar"
            className="w-15 h-15 rounded-full object-cover border-2 border-[#3A3A4A] shadow-md"
          />
          <PostComposer/>
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
