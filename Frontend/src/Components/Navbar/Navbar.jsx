import { Link } from "react-router-dom";

import OpenLMSLogo from "../../assets/351264.svg";
function Navbar() {
  return (
    <nav className="bg-[#1D232A]">
      <div className="flex justify-between item">
        <div>
          <img
            src={OpenLMSLogo}
            alt="Open LMS Logo"
            className="w-auto h-20 text-white" // Tailwind classes for width and height
          />
        </div>
        <div className="flex justify-between text-white text-xl items-center">
          <Link to="/Home" className="px-4">
            Home
          </Link>
          <Link to="/About" className="px-4">
            About
          </Link>
          <Link to="/Courses" className="px-4">
            Courses
          </Link>
          <Link to="/Contact" className="px-4">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
