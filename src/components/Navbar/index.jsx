import { useState } from 'react';
import { NavLink } from 'react-router-dom'
// import { navLinks } from '../../data'
import { GiHamburgerMenu } from "react-icons/gi";
import NavTabs from './NavTabs';


const Navbar = () => {

  const [navStatus, setNavStatus] = useState('hidden')

  const navToggle = () => {
    setNavStatus((prevStatus) => prevStatus === 'hidden' ? 'block' : 'hidden')
    console.log(navStatus)
  }

  return (
    <header className='bg-brandBlack text-brandLight shadow-md min-h-[14vh] max-h-full flex items-center'>
      <nav className="container flex justify-center md:justify-between gap-6 lg:gap-12 py-4 sm:py-3">
        <div className='text-brandRed font-cursive text-[2rem] font-semibold tracking-wide p-0'>
          <NavLink to='/'>
            ecobike coffee
          </NavLink>
        </div>
        <ul className='md:flex items-center gap-6 lg:gap-9 p-2 hidden'>
            <NavTabs
              liClasses='group duration-200 ml-0 md:last-of-type:ml-8 last-of-type:text-brandRed'
              linkClasses='cursor-pointer inline-block text-[14px] lg:text-[16px] font-medium font-inter hover:scale-95 hover:text-brandRed'
            />
        </ul>

                    {/* hamburger menu */}
        <div className='group'>
          <div className='flex items-center gap-[2px] py-2 '>
            <span className='flex'>
              <GiHamburgerMenu 
                  className={`z-[9999] cursor-pointer ${navStatus === 'block' ? 'rotate-45' : null} duration-0 text-3xl text-brandRed block md:hidden absolute right-5`} 
                  onClick={navToggle}
              />

            </span>
          </div>

          <div className={`absolute top-16 right-0 z-[999] ${navStatus} bg-brandBlack min-w-[140px]  h-[100vh] w-[100vw] flex flex-col justify-start`}   > 
            <ul className='p-4 relative top-16 flex flex-col items-center justify-evenly'>
              <NavTabs 
                liClasses='group duration-200 last-of-type:text-brandRed py-3'
                linkClasses='cursor-pointer inline-block text-[20px] lg:text-[16px] font-medium font-inter hover:scale-95 hover:text-brandRed'
                setNavStatus={setNavStatus}
              />
            </ul>
          </div>
        </div>
        

      </nav>
    </header>
  )
}

export default Navbar
