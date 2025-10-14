import ProfileHeader from "./components/ProfileHeader";
import ThoughtsSection from "./components/ThoughtsSection";
import UserInfo from "./components/UserInfo";
import { useState } from "react";

export default function profile() {
  const tabs = ["Profile", "About me", "Mood History", "Wallpaper Gallery"];
  const [activeTab, setActiveTab] = useState("Profile");
  return (
    <div className="flex flex-col mt-25 ml-15 mr-15 mb-10">
      {/* start of main container */}
      <ProfileHeader />
      <div className="w-full flex border-b border-[#3A3A4A] items-start mt-8 pl-3 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative py-3 text-xl font-medium bg-transparent border-none outline-none focus:outline-none active:outline-none ring-0 hover:ring-0 transition-colors duration-200 ${
              activeTab === tab
                ? "text-[#8fb3c0] hover:outline-none outline-none"
                : "hover:text-gray-300 hover:outline-none"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute left-0 right-0 -bottom-[1px] mx-auto h-[2px] w-10 bg-[#8fb3c0] rounded-full transition-all duration-300"></span>
            )}
          </button>
        ))}
      </div>
      <div className=" w-[100%] mt-6 bg-[#2C2C3C] rounded-lg min-h-screen shadow-lg">
        {activeTab === "Profile" && <ThoughtsSection />}
        {activeTab === "About me" && <UserInfo />}
      </div>
    </div>
  );
}
