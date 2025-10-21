import pp from "../../../assets/pp.png";
import ThoughtsCard from "./ThoughtsCard";
import ButtonsAndGallery from "./ButtonsAndGallery";
import PostComposer from "./PostComposer";
import { useThoughtsStore } from "../../../stores/ThoughtsStore";

export default function ThoughtsSection() {

  const thoughts = useThoughtsStore((state) => state.thoughts);
  return (
    <div className="grid grid-cols-[1.2fr_2fr] gap-1">
      <ButtonsAndGallery />
      <div className="flex flex-col mt-8  mr-10">
        <div className="flex items-start ">
          <img
            src={pp}
            alt="User Avatar"
            className="w-15 h-15 rounded-full object-cover border-2 border-[#3A3A4A] shadow-md"
          />
          <PostComposer/>
        </div>
        <div className="text-2xl font-outfit-bold text-[#FDF8F3] mt-10 mb-5 ">
          Your Thoughts
        </div>
        <div className="overflow-y-auto max-h-[750px] no-scrollbar">
        {thoughts.map((thought, index) => (
          <ThoughtsCard key={index} thought={thought} />
        ))}
        </div>
      </div>
    </div>
  );
}
