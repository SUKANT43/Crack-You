import Logo from './Logo'
import {FaUser, FaMoon, FaSun} from 'react-icons/fa'
import { useState } from 'react'
function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    const [isOpen,setIsOpen]=useState(false);
    const [isLogin, setIsLogin] = useState(false);
    function toggleDarkMode() {
        setDarkMode(!darkMode);
     
    }

    function toogleUser(){
        setIsOpen(!isOpen);
    }

    function handleLogin(){
        setIsLogin(!isLogin);
    }

  return (
    <div>
        <div className='bg-gray-800 text-white px-4 py-2 flex justify-between items-center'>
            <div className='flex items-center space-x-3'>
            <Logo/>
            <p  className='text-xs tracking-widest hidden sm:block   '>PREP . CRACK . CONQUER</p>
            </div>
            
            <div className='flex items-center space-x-4'>
                <button onClick={toggleDarkMode} className='cursor-pointer'>
                    {darkMode ? <FaSun  className='w-5 h-5'/> : <FaMoon className='w-5 h-5'/>}
                </button>
                <div className='relative'>
                    <FaUser className='w-5 h-5 cursor-pointer ' onClick={toogleUser}/>
                    { isOpen && <p onClick={handleLogin} className='cursor-pointer absolute top-8 right-0  px-2 py-2  shadow-md rounded text-white'>{isLogin ? "Login" : "Logout"}</p>}
                </div>
            </div>
        </div>
        <hr className='text-gray-300'/>
    </div>
  )
}


export default Navbar

//hidden: hidden on small screens (mobile).