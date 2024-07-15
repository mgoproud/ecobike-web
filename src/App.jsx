import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Popup from "./components/Popup";
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'


function App() {

  const [showPopup, setShowPopup] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handlePopup = () => {
    setShowPopup(true)
  }

useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  })
  AOS.refresh()
}, [])

  return (
      <div className='overflow-x-hidden w-full min-h-[100vh] flex flex-col'>
          <Navbar handlePopup={handlePopup} />
          <Outlet />
          <Footer />
          <Popup 
            showPopup={showPopup} 
            setShowPopup={setShowPopup}
            showMessage={showMessage}
            setShowMessage={setShowMessage}
          />
      </div>
         
  )
}

export default App
