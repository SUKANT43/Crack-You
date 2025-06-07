import Logo from './Logo'
import {FaUser, FaMoon, FaSun} from 'react-icons/fa'
import { useState } from 'react'
function Navbar() {
    const [isOpen,setIsOpen]=useState(false);
    const [isLogin, setIsLogin] = useState(false);
    

    function toogleUser(){
        setIsOpen(!isOpen);
    }

    function handleLogin(){
        setIsLogin(!isLogin);
    }

  return (
    <div>
        <div className='bg-gray-950 text-white px-4 py-2 flex justify-between items-center'>
            <div className='flex items-center space-x-3'>
            <Logo/>
            <p  className='text-xs tracking-widest hidden sm:block   '>PREP . CRACK . CONQUER</p>
            </div>
            
            <div className='flex items-center space-x-4'>
                <button className='bg-orange-500 rounded-xl p-2 cursor-pointer w-18'>Login</button>

            </div>
        </div>
        <hr className='text-gray-300'/>
    </div>
  )
}


export default Navbar

//hidden: hidden on small screens (mobile).