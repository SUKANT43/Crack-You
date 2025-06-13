import React from 'react';
import Logo from './Logo'; 

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#1E1E1E]">
      <div className="px-4 py-2 flex justify-between items-center">
        
        <div className="flex items-center space-x-3">
          <Logo />
          <p className="text-xs tracking-widest hidden sm:block text-white">
            PREP . CRACK . CONQUER
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl px-4 py-2 cursor-pointer">
            Login
          </button>
        </div>
      </div>

      <hr className="border-gray-700" />
    </div>
  );
}

export default Navbar;
