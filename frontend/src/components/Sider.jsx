import { useState } from "react";
import { FaSun, FaMoon, FaUser } from "react-icons/fa";
import MiniLogo from '../../src/assets/minilogo.png';
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Sider() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <div className="sm:hidden flex items-center justify-between p-2  text-white ">
        <button onClick={toggleSidebar}>
          <HiOutlineMenuAlt3 className="w-8 h-8" />
        </button>
        <img src={MiniLogo} alt="logo" className="w-10" />
      </div>

      {sidebarOpen && (
        <div className="sm:hidden fixed top-17 left-0 w-25 h-full bg-[#161920] text-white z-50 p-4 flex flex-col justify-between"
        style={{height: 'calc(100vh - 65px)' }}>
          <div className="space-y-6">
          <button onClick={toggleSidebar}>
          <HiOutlineMenuAlt3 className="w-8 h-8" />
            </button>

            <p>DSA</p>
            <p>Aptitude</p>
          </div>
          <div className="flex flex-col items-center gap-y-4">
            <button onClick={toggleDarkMode}>
              {darkMode ? <FaMoon className="w-6 h-6" /> : <FaSun className="w-6 h-6" />}
            </button>
            <FaUser className="w-6 h-6" />
          </div>
        </div>
      )}

      <div className="hidden sm:flex flex-col bg-[#161920] w-20 text-white p-2 fixed top-[65px] bottom-0 justify-between pb-4 ">
        <div className="flex flex-col items-center gap-y-4">
          <img src={MiniLogo} alt="logo" />
          <p>DSA</p>
          <p>Aptitude</p>
        </div>
        <div className="flex flex-col items-center gap-y-6">
          <button onClick={toggleDarkMode}>
            {darkMode ? <FaMoon className="w-6 h-6" /> : <FaSun className="w-6 h-6" />}
          </button>
          <FaUser className="w-6 h-6" />
        </div>
      </div>
    </>
  );
}

export default Sider;
