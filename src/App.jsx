
import './App.css'
import Banner from './components/Banner/Banner'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (

      <div className='overflow-x-hidden w-full'>
        <Navbar />
        <Hero />
        <Banner />
      </div>   

  )
}

export default App
