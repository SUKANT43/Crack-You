import React from 'react'
import logo from '../../src/assets/logo.png'
function Logo() {
  return (
    <div className="w-40 h-12  flex items-center px-3 space-x-2  ">
      <svg
        width="30"
        height="30"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="white" strokeWidth="2">
          <circle cx="10" cy="20" r="4" fill="white" />
          <circle cx="25" cy="40" r="4" fill="white" />
          <circle cx="10" cy="60" r="4" fill="white" />
          <line x1="10" y1="20" x2="40" y2="20" />
          <line x1="10" y1="60" x2="40" y2="60" />
          <line x1="25" y1="40" x2="40" y2="40" />
          <line x1="25" y1="40" x2="25" y2="20" />
          <line x1="25" y1="40" x2="25" y2="60" />
        </g>
      </svg>
      <h1 className="text-xl font-bold">Crack You</h1>
    </div>

  )
}

export default Logo