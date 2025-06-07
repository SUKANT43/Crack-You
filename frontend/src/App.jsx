import React from 'react'
import Logo from './components/Logo'
import Navbar from './components/Navbar'
import UserRegister from './pages/auth/UserRegister'
const App = () => {
  return (
    <div className='bg-gray-950 min-h-screen flex flex-col '>
    <Navbar/>
    <UserRegister/>
    </div>
  )
}

export default App