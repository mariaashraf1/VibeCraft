import logo2 from "../assets/logo2.png";
import { useState } from "react";
import { FaEye, FaEyeSlash ,FaLock } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center mb-20 mt-5 ">
      {/* start of main container */}
        <div className="flex flex-col items-center justify-center bg-[#2C2C3C] w-[550px] h-[500px] rounded-2xl shadow-lg mx-auto mt-30">
            <img src={logo2} alt="VibeCraft Logo" className="h-15 w-auto object-contain scale-500 mt-10 " />
            <h1 className="text-3xl font-outfit-semibold mt-10 mb- text-[#FDF8F3] text-center ">
              Welcome Back!</h1>
            <form className="flex flex-col items-center justify-center w-[80%] h-[95%]">
                <label className="text-[#FDF8F3] mb-2 self-start">Email</label>
                <input type="email" name="email" placeholder="Enter Your Email" className="bg-[#1E1E2E] w-full p-3 mb-6 rounded-xl shadow-md focus:shadow-lg focus:shadow-[#8FB3C0]/50 outline-none transition"/>
                 <label className="text-[#FDF8F3] mb-2 self-start">Password</label>
                 <div className="relative w-full mb-10">
                 <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 ml-0 text-[#7A9CAB]" size={18} />
                   <input 
                     type={showPassword ? "text" : "password"} 
                     name="password" 
                     placeholder="Enter Your Password" 
                     className="bg-[#1E1E2E] w-full p-3 pl-12 pr-12 rounded-xl shadow-md focus:shadow-lg focus:shadow-[#8FB3C0]/50 outline-none transition text-[#FDF8F3]"
                   />
                   <button
                     type="button"
                     onClick={() => setShowPassword(!showPassword)}
                     className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none outline-none cursor-pointer text-[#FDF8F3] hover:text-[#7A9CAB] focus:outline-none transition-colors"
                   >
                     {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                   </button>
                 </div>
                <button type="submit" className="w-[50%] bg-[#7A9CAB] text-white font-outfit-semibold py-3 rounded-full  hover:bg-[#6a8f9b] hoover:border-color:[#3A3A4A] transition ">Login</button>
            </form>
      </div>
    </div>
  );
}
