import coverphoto from "../../../assets/coverphoto.png";
import pp from "../../../assets/pp.png";

export default function ProfileHeader() {
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
        <h3 className=" text-3xl font-outfit-bold">Maria Ashraf</h3>
        <div className="flex items-start justify-between space-x-8 ">
          <button className="w-[100%] bg-[#FDF8F3] text-xl text-black font-outfit-semibold rounded-4xl">
            Edit your Personal Info
          </button>
        </div>
      </div>
    </>
  );
}
