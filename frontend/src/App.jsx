import Navbar from './components/Navbar'
import Sider from './components/Sider'
const App = () => {
  return (
    <div className='bg-gray-950 min-h-screen flex flex-col text-white'
    style={{ backgroundColor: '#050505' }}>
    <Navbar/>
    <Sider/>
    </div>
  )
}

export default App