import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
export default function Footer() {
    return (
      <footer className="bg-[#2C2C3C] text-[#FDF8F3] font-outfit text-center py-6 mt-10">
        <div className="flex justify-between mr-15 ml-15">
        <div className="flex flex-col items-start justify-start ">
        <p className="text-l font-outfit">© 2025 VibeCraft. All rights reserved.</p>
        <p className="text-xl mt-10 font-outfit-semibold">Follow Us</p>
        <div className="flex  justify-start space-x-6 mt-6 text-2xl">
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-500">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-sky-400">
            <FaTwitter />
          </a>
          </div>
          </div>
          <div className="flex justify-start space-x-10 ">
          <div className="flex flex-col justify-start item-start space-y-5  ">
            <p className="text-l flex font-outfit-semibold  ">Join Our Community</p>
            <p className="text-l flex font-outfit">For User Feedback</p>
            <p className="text-l flex font-outfit">Community</p>
          </div>
          <div className="flex flex-col justify-start item-start space-y-5 ">
            <p className="text-l flex font-outfit-semibold ">Careers</p>
            <p className="text-l flex font-outfit ">Apply Now</p>
          </div>
          <div className="flex flex-col justify-start item-start space-y-5  ">
            <p className="text-l flex font-outfit-semibold ">Contact Us</p>
            <p className="text-l flex font-outfit ">Email: vibecraft@gmail.com</p>
          </div>
          </div>
        </div>
      </footer>
    );
  }
  