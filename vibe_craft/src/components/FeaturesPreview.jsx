import { Music, Sparkles, Image } from "lucide-react"; // icons

export default function FeaturesPreview() {
  const features = [
    {
      icon: <Music className="w-10 h-10 text-[#7A9CAB]" />,
      title: "Mood-Based Music",
      desc: "Let your feelings choose the playlist that match your vibe.",
    },
    {
        icon: <Sparkles className="w-8 h-8 text-[#7A9CAB]" />,
        title: "Personalized Mood Recommendations",
        desc: "Describe your mood and get instant hobby + playlist suggestions — tailored to how you feel.",
    },
    {
      icon: <Image className="w-10 h-10 text-[#7A9CAB]" />,
      title: "AI Mood Wallpapers",
      desc: "Generate a unique mood-inspired wallpaper.",
    },
  ];

  return (
    <div className="mt-20 text-center px-6 md:px-16 lg:px-24 ">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#FDF8F3] mb-6">
        What You Can Do with VibeCraft
      </h2>
      <p className="text-[#C0C0C0] mb-12 text-lg">
      VibeCraft transforms your emotions into action. Whether you feel calm, sad, or inspired — it connects you to matching music, creative hobbies, and visuals that reflect your inner mood.
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
