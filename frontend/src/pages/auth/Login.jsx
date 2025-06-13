import React, { useState } from 'react'
import MiniLogo from '../../assets/minLogo.png'

function Login() {
  const [show, setShow] = useState(false)

  function showPassword() {
    setShow(!show)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1E1E1E] px-4">
      <div className="bg-[rgb(17,17,17)] text-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center gap-2 mb-6">
          <img src={MiniLogo} alt="Logo" className="w-14 h-14" />
          <h2 className="text-xl font-semibold">Welcome to Crack You</h2>
          <p className="text-sm text-gray-400 text-center">
            Sign up to start your journey with us
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-[#1E1E1E] border border-gray-700 text-white px-4 py-2 rounded outline-none focus:border-orange-400"
          />
          <div className="relative">
            <input
              type={show ? 'text' : 'password'}
              placeholder="Enter Password"
              className="bg-[#1E1E1E] border border-gray-700 text-white px-4 py-2 rounded outline-none w-full"
            />
            <span
              onClick={showPassword}
              className="absolute right-3 top-2.5 text-gray-400 cursor-pointer"
            >
              {show ? '🙈' : '👁️'}
            </span>
          </div>
          <p className="text-orange-400 text-sm text-right cursor-pointer hover:underline">
            Forgot Password?
          </p>
        </div>

        <button className="bg-orange-500 hover:bg-orange-600 transition duration-200 w-full py-2 rounded text-white font-medium mb-4">
          Login
        </button>

        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
          <hr className="flex-grow border-gray-700" />
          <span>Or</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{' '}
          <span className="text-orange-400 cursor-pointer hover:underline">Register</span>
        </p>
      </div>
    </div>
  )
}

export default Login
