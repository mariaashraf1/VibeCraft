import { Palette, Sparkles, PenTool } from "lucide-react"; // icons

export default function FeaturesPreview() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 text-[#7A9CAB]" />,
      title: "Personalized Mood Magic",
      desc: "Turn your vibe into action — get custom music and AI wallpapers that match how you feel.",
    },
    {
      icon: <Palette className="w-8 h-8 text-[#7A9CAB]" />,
      title: "Mood-Based Hobby Space",
      desc: "Discover creative hobbies that vibe with your emotions — from calm crafts to energetic passions.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-[#7A9CAB]" />,
      title: "Your Thoughts, Your World",
      desc: "Write your diary, capture your feelings, and express your interests in movies, food, books, and more — all in one cozy space.",
    },
  ];
  

  return (
    <div className="mt-30 text-center px-6 md:px-16 lg:px-24  mb-10">
      <h1 className="text-4xl font-outfit-semibold text-[#FDF8F3] mb-6">
        What You Can Do with VibeCraft
      </h1>
      <p className="text-[#C0C0C0] font-outift mb-12 text-lg">
      VibeCraft turns your emotions into experiences. Whether you feel calm, sad, or inspired — it connects you with matching music, hobbies, and visuals that mirror your mood. It’s also your space to write thoughts and share your interests in movies, food, books, and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#1E1E2E] rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-medium text-[#FDF8F3] mb-2">{item.title}</h3>
            <p className="text-[#C0C0C0]">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
