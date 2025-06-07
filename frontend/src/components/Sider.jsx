import { useState } from "react";
import { FaSun, FaMoon, FaUser } from "react-icons/fa";
import MiniLogo from '../assets/minLogo.png';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import dsalogo from '../../src/assets/dsalogo.png';
import AptiLogo from '../../src/assets/aptilogo.png';
function Sider() {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <div className="sm:hidden flex items-center justify-between p-2  text-white ">
        <button onClick={toggleSidebar}>
          <HiOutlineMenuAlt3 className="w-8 h-8 cursor-pointer" />
        </button>
        <img src={MiniLogo} alt="logo" className="w-10 cursor-pointer" />
      </div>

      {sidebarOpen && (
      <div className="sm:hidden flex  flex-col bg-[#161920] w-20 text-white p-2 fixed top-[65px] bottom-0 justify-between pb-4 ">
        <div className="flex flex-col items-center gap-y-4 ">
        <button onClick={toggleSidebar}>
          <HiOutlineMenuAlt3 className="w-8 h-8 cursor-pointer" />
        </button>
          <img src={dsalogo} alt="dsa" className="cursor-pointer"/>
          <img src={AptiLogo} alt="aptitude" className="cursor-pointer" />
        </div>
        <div className="flex flex-col items-center gap-y-6">
          <FaUser className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
      )}

      <div className="hidden sm:flex flex-col bg-[#161920] w-20 text-white p-2 fixed top-[65px] bottom-0 justify-between pb-4 ">
        <div className="flex flex-col items-center gap-y-4">
          <img src={MiniLogo} alt="logo" className="cursor-pointer"/>
          <img src={dsalogo} alt="dsa"className="cursor-pointer"/>
          <img src={AptiLogo} alt="aptitude" className="cursor-pointer" />
        </div>
        <div className="flex flex-col items-center gap-y-6">
          <FaUser className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Sider;