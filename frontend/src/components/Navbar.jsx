import Logo from './Logo'
import {FaUser, FaMoon, FaSun} from 'react-icons/fa'
import { useState } from 'react'
function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
     
    }


  return (
    <div>
        <div className='bg-gray-800 text-white px-4 py-2 flex justify-between items-center'>
            <div className='flex items-center space-x-3'>
            <Logo/>
            <p  className='text-xs tracking-widest hidden sm:block '>PREP . CRACK . CONQUER</p>
            </div>
            
            <div className='flex items-center space-x-4'>
                <button onClick={toggleDarkMode} className='cursor-pointer'>
                    {darkMode ? <FaSun  className='w-5 h-5'/> : <FaMoon className='w-5 h-5'/>}
                </button>
                    <FaUser className='w-5 h-5 cursor-pointer'/>
            </div>
            
            

        </div>
    </div>
  )
}


export default Navbar

//hidden: hidden on small screens (mobile).