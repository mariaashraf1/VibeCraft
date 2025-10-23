import { useUserStore } from "../../../stores/User";
export default function UserInfo() {
  const user = useUserStore((state) => state.user);

  return (
    <div className="flex flex-col mt-5 mx-8 py-6">
      {/* About Me Section */}
      <div className="relative bg-[#1E1E2E]/70 border border-white/10 p-8 rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] backdrop-blur-sm">
        <h2 className="text-3xl font-outfit-bold italic mb-4 flex items-center gap-2">
          ✨ About Me
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 gap-y-3 text-lg leading-relaxed">
          <p>
            🎂 <span className="font-semibold text-[#F2EAD3]">Age:</span>{" "}
            {user.age}
          </p>
          <p>
            📍 <span className="font-semibold text-[#F2EAD3]">Location:</span>{" "}
            {user.location}
          </p>
          <p>
            💼 <span className="font-semibold text-[#F2EAD3]">Job:</span>{" "}
            {user.job}
          </p>
          <p className="sm:col-span-1">
            📝 <span className="font-semibold text-[#F2EAD3]">Bio:</span>{" "}
            {user.bio}
          </p>
          <div className="mt-10 mb-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          {/* Personal Interests Header */}
          <h2 className="text-3xl font-outfit-bold italic mb-4 text-[#FDF8F3] text-center">
            ✨ Personal Interests
          </h2>

          {/* Interest Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {user.music.length > 0 && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2C2C3C] to-[#2C2C3C] shadow-xl hover:shadow-[#FDF8F3]/20 hover:scale-[1.02] transition-all duration-300 mb-5">
                <div className="text-xl font-outfit-bold mb-2 text-[#FDF8F3]">
                  🎶 Favorite Music
                </div>
                <div className="text-md font-outfit text-[#C0C0C0]">
                  {user.music.map((item) => item).join(", ")}
                </div>
              </div>
            )}
            {user.movies.length > 0 && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2C2C3C] to-[#2C2C3C] shadow-xl hover:shadow-[#FDF8F3]/20 hover:scale-[1.02] transition-all duration-300 mb-5">
                <div className="text-xl font-outfit-bold mb-2 text-[#FDF8F3]">
                  🎬 Favorite Movies
                </div>
                <div className="text-md font-outfit text-[#C0C0C0]">
                  {user.movies.map((item) => item).join(", ")}
                </div>
              </div>
            )}
            {user.places.length > 0 && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2C2C3C] to-[#2C2C3C] shadow-xl hover:shadow-[#FDF8F3]/20 hover:scale-[1.02] transition-all duration-300 mb-5">
                <div className="text-xl font-outfit-bold mb-2 text-[#FDF8F3]">
                  📍 Favorite Places
                </div>
                <div className="text-md font-outfit text-[#C0C0C0]">
                  {user.places.map((item) => item).join(", ")}
                </div>
              </div>
            )}
            {user.food.length > 0 && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2C2C3C] to-[#2C2C3C] shadow-xl hover:shadow-[#FDF8F3]/20 hover:scale-[1.02] transition-all duration-300 mb-5">
                <div className="text-xl font-outfit-bold mb-2 text-[#FDF8F3]">
                  🍔 Favorite Foods
                </div>
                <div className="text-md font-outfit text-[#C0C0C0]">
                  {user.food.map((item) => item).join(", ")}
                </div>
              </div>
            )}
            {user.hobbies.length > 0 && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2C2C3C] to-[#2C2C3C] shadow-xl hover:shadow-[#FDF8F3]/20 hover:scale-[1.02] transition-all duration-300 mb-5">
                <div className="text-xl font-outfit-bold mb-2 text-[#FDF8F3]">
                  🎨 Hobbies
                </div>
                <div className="text-md font-outfit text-[#C0C0C0]">
                  {user.hobbies.map((item) => item).join(", ")}
                </div>
              </div>
            )}
            {user.books.length > 0 && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2C2C3C] to-[#2C2C3C] shadow-xl hover:shadow-[#FDF8F3]/20 hover:scale-[1.02] transition-all duration-300 mb-5">
                <div className="text-xl font-outfit-bold mb-2 text-[#FDF8F3]">
                  📚 Favorite Books
                </div>
                <div className="text-md font-outfit text-[#C0C0C0]">
                  {user.books.map((item) => item).join(", ")}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Soft Accent Glow */}
        <div className="absolute -top-12 -right-10 w-40 h-40 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}
