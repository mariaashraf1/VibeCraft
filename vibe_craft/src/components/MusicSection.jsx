export default function MusicSection() {
    const categories = [{
        "musicCategories": [
          "Chill",
          "Upbeat",
          "Instrumental",
          "Ambient",
          "Classical",
          "Pop",
          "Indie",
          "Jazz",
          "Rock",
          "Electronic",
          "Hip Hop",
          "Acoustic",
          "Reggae",
          "Soul",
          "Folk",
          "R&B",
          "World Music"
        ]
      }
    ];
  return (
    <div className="mt-20 mb-20">
      <h2 className="text-4xl text-[#FDF8F3] font-outfit-semibold text-center">
           Explore Music
          </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-10 ml-15 mr-15">
        {categories[0].musicCategories.map((category, index) => (
          <button
            key={index}
            className=" bg-[#FDF8F3] text-[#2C2C3C] font-outfit-semibold py-2 rounded-full hover:bg-[#7A9CAB] hoover:border-color:[#7A9CA] transition"
          >
           {category}
          </button>
        ))}
      </div>
    </div>
  );      
}