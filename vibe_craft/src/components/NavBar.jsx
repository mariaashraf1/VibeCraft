import { Link, useLocation } from "react-router-dom";
import logo2 from "../assets/logo2.png";

export default function NavBar() {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 py-6 text-xl font-outfit-semibold bg-gradient-to-r from-[#2C2C3C] via-[#2C2C3C] to-[#7A9CAB] backdrop-blur-lg bg-opacity-90 shadow-lg rounded-b-2xl h-16">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={logo2}
            alt="VibeCraft Logo"
            className="h-15 w-auto object-contain scale-140"
            style={{ transform: "scale(1.8)", marginLeft: "15px" }}
          />
        </Link>
         <div className="flex space-x-10">
           <Link
             to="/"
                className={`hover:underline hover:underline-offset-4 hover:decoration-[#2C2C3C] transition-colors ${
               isActive('/') ? 'text-[#2C2C3C] underline underline-offset-4 decoration-[#2C2C3C]' : 'text-[#FDF8F3] hover:text-[#2C2C3C]'
             }`}
           >
             Home
           </Link>
           <Link
             to="/login"
             className={`hover:underline hover:underline-offset-4 hover:decoration-[#2C2C3C] transition-colors ${
               isActive('/login') ? 'text-[#2C2C3C] underline underline-offset-4 decoration-[#2C2C3C]' : 'text-[#FDF8F3] hover:text-[#2C2C3C]'
             }`}
           >
             Login
           </Link>
           <Link
             to="/signup"
             className={`hover:underline hover:underline-offset-4 hover:decoration-[#2C2C3C] transition-colors ${
               isActive('/signup') ? 'text-[#2C2C3C] underline underline-offset-4 decoration-[#2C2C3C]' : 'text-[#FDF8F3] hover:text-[#2C2C3C]'
             }`}
           >
             SignUp
           </Link>
           <Link
             to="/mood-history"
             className={`hover:underline hover:underline-offset-4 hover:decoration-[#2C2C3C] transition-colors ${
               isActive('/mood-history') ? 'text-[#2C2C3C] underline underline-offset-4 decoration-[#2C2C3C]' : 'text-[#FDF8F3] hover:text-[#2C2C3C]'
             }`}
           >
             Mood History
           </Link>
           <Link
             to="/about"
             className={`hover:underline hover:underline-offset-4 hover:decoration-[#2C2C3C] transition-colors ${
               isActive('/about') ? 'text-[#2C2C3C] underline underline-offset-4 decoration-[#2C2C3C]' : 'text-[#FDF8F3] hover:text-[#2C2C3C]'
             }`}
           >
             About
           </Link>
         </div>
      </nav>
    );
}