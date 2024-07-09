import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/about'
import Features from './pages/features'
import Menu from './pages/menu'
import Community from './pages/community'
import './App.css'


function App() {

  return (
      <div className='overflow-x-hidden w-full min-h-[100vh] flex flex-col'>
          <Navbar />
          <Outlet />
          <Footer />
      </div>
         
  )
}

export default App
