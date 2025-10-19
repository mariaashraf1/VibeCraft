import ProfileHeader from "./components/ProfileHeader";
import Tabs from "./components/Tabs";
import ThoughtsSection from "./components/ThoughtsSection";
import UserInfo from "./components/UserInfo";
import WallpaperGallery from "./components/WallpaperGallery";
import TabsProvider, { useTabs } from "../../context/TabsContext";

export default function Profile() {
  const tabs = ["Profile", "About me", "Mood History", "Wallpaper Gallery"];

  return (
    <TabsProvider>
    <div className="flex flex-col mt-25 ml-15 mr-15 mb-10">
      {/* start of main container */}
      <ProfileHeader />
      <Tabs tabs={tabs} />
      <ProfileContent />
      {/* end of main container */}
    </div>
    </TabsProvider>
  );
}

function ProfileContent(){
  const { activeTab } = useTabs();
  return (
    <div>
       <div className=" w-[100%] mt-6 bg-[#2C2C3C] rounded-lg min-h-screen shadow-lg">
        {activeTab === "Profile" && <ThoughtsSection/>}
        {activeTab === "About me" && <UserInfo />}
        {activeTab === "Mood History" && <div className="p-10 text-[#FDF8F3]">Mood History Content</div>}
        {activeTab === "Wallpaper Gallery" && <WallpaperGallery />}
      </div>
    </div>
  );
}