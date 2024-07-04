
import './App.css'
import Banner from './components/Banner/Banner'
import Features from './components/Features/Features'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {


  return (

      <div className='overflow-x-hidden w-full'>
        <Navbar />
        <Hero />
        <Banner />
        <About />
        <Features />
        <Footer />
      </div>   

  )
}

export default App
