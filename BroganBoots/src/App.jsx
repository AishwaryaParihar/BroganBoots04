import './index.css'
import './App.css'
import Navbar from './Component/navbar/Navbar'
import Footer from './Component/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  ) 
}

export default App
