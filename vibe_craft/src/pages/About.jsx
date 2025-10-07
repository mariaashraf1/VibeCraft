import { Music, Brush, Image, Smile, Clock, LogIn } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: <LogIn className="w-6 h-6 text-[#A6C1D2]" />,
      title: "Login & Personalization",
      desc: "Sign up to save your moods, playlists, and favorite hobbies.",
    },
    {
      icon: <Smile className="w-6 h-6 text-[#A6C1D2]" />,
      title: "Mood Detection",
      desc: "Type how you feel — the app understands your emotion and tailors your experience.",
    },
    {
      icon: <Music className="w-6 h-6 text-[#A6C1D2]" />,
      title: "Mood-Based Music",
      desc: "Discover Spotify playlists that match your current mood and vibe.",
    },
    {
      icon: <Brush className="w-6 h-6 text-[#A6C1D2]" />,
      title: "Mood-Based Hobbies",
      desc: "Explore hobbies like journaling, painting, or crafts — all chosen to lift your mood.",
    },
    {
      icon: <Image className="w-6 h-6 text-[#A6C1D2]" />,
      title: "AI Mood Wallpapers",
      desc: "Generate calming wallpapers that visually reflect your mood.",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#A6C1D2]" />,
      title: "Mood History",
      desc: "Look back at your moods, playlists, and wallpapers over time.",
    },
  ];

  return (
    <section className="min-h-screen bg-[#1F1F2B] text-white px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          About <span className="text-[#A6C1D2]">VibeCraft</span>
        </h1>
        <p className="text-gray-400 text-lg mb-16">
          VibeCraft transforms your emotions into action. 
          Whether you feel calm, sad, or inspired — it connects you to 
          matching music, creative hobbies, and visuals that reflect your inner mood.
        </p>
      </div>
    </section>
  );
}
