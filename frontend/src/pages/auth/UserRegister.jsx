

function UserRegister() {
  return (
    <div className="h-200 flex items-center justify-center ">
  <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
    <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">User Register</h1>
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
    />
    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200 cursor-pointer">
      Send OTP
    </button>
  </div>
</div>
  )
}

export default UserRegister