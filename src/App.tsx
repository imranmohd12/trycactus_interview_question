import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"

const App = () => {
  return <div>
    <Header />
    <div className='w-[100%] h-[100%] relative z-20 bg-white'></div>
    <Outlet />
  </div>
}

export default App
