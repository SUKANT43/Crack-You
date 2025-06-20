

//pages
import Navbar from './components/Navbar'
import Sider from './components/Sider'
import Login from './pages/auth/Login'
const App = () => {
  return (
    <div className='bg-gray-950 min-h-screen flex flex-col text-white'
    style={{ backgroundColor: '#050505' }}>
    <Navbar/>
    <Sider/>
    <Login/>
    
    </div>
  )
}

export default App