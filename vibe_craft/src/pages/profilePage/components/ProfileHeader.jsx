import coverphoto from "../../../assets/coverphoto.png";
import pp from "../../../assets/pp.png";
import {  useState } from "react";
import { useUserStore } from "../../../stores/User";
export default function ProfileHeader() {
  
  const { user, setUser } = useUserStore();
  const [draft, setDraft] = useState(user);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative w-full mb-5">
        <div className="w-full rounded-3xl overflow-hidden">
          <img src={coverphoto} className="w-full h-[350px] object-cover" />
        </div>
        <img
          src={pp}
          alt="User Avatar"
          className=" absolute left-5 -bottom-20 w-35 h-35 rounded-full object-cover border-2 border-[#3A3A4A] shadow-md"
        />
      </div>
      <div className="flex flex-row items-start justify-between mr-3 ml-45">
        <h3 className=" text-3xl font-outfit-bold">{user.name}</h3>
        <div className="flex items-start justify-between space-x-8 ">
          <button
            className="w-[100%] bg-[#FDF8F3] text-xl text-black font-outfit-semibold rounded-4xl"
            onClick={() => setIsOpen(true)}
          >
            Edit your Info
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-[#1E1E2F] w-[500px] rounded-2xl p-5 shadow-lg">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-white">
                Edit Profile Info
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-200 bg-transparent"
              >
                ✕
              </button>
            </div>
            <label className="text-white mb-3">Name</label>
            <input
              className="w-full mb-3 p-2 rounded-lg bg-[#2C2C3C] text-white"
              placeholder="Name"
              value={draft.name}
              onChange={(e => setDraft({...draft, name: e.target.value}))}
            />
            <label className="text-white mb-3">Bio</label>
            <input
              className="w-full mb-4 p-2 rounded-lg bg-[#2C2C3C] text-white"
              placeholder="Bio"
              value={draft.bio}
              onChange={(e => setDraft({...draft, bio: e.target.value}))}
            />
            <label className="text-white mb-3">Location</label>
            <input
              className="w-full mb-3 p-2 rounded-lg bg-[#2C2C3C] text-white"
              placeholder="Location"
              value={draft.location}
              onChange={(e => setDraft({...draft, location: e.target.value}))}
            />
            <label className="text-white mb-3">Age</label>
            <input
              className="w-full mb-3 p-2 rounded-lg bg-[#2C2C3C] text-white"
              placeholder="Age"
              value={draft.age}
              onChange={(e => setDraft({...draft, age: e.target.value}))}
            />
            <label className="text-white mb-3">Job</label>
            <input
              className="w-full mb-3 p-2 rounded-lg bg-[#2C2C3C] text-white"
              placeholder="Job"
              value={draft.job}
              onChange={(e => setDraft({...draft, job: e.target.value}))}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => {
                  setUser(draft);
                  setIsOpen(false);
                }}
                className="bg-[#7A9CAB] text-white px-5 py-2 rounded-full  transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
