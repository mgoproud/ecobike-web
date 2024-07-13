import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data'
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const [menuStatus, setMenuStatus] = useState('hidden')

  const menuToggle = () => {
    setMenuStatus((prevStatus) => prevStatus === 'hidden' ? 'block' : 'hidden')
    console.log(menuStatus)
  }

  const links = navLinks?.map(({ name, path, id }) => (
    <li key={id} className='cursor-pointer group duration-200 ml-0 md:last-of-type:ml-8 last-of-type:text-brandRed'>
      <NavLink
            key={id}
            to={path}
            className='inline-block text-[14px] lg:text-[16px] font-medium font-inter hover:scale-95 hover:text-brandRed'
            >{name}</NavLink>
    </li>
))



  return (
    <header className='bg-brandBlack text-brandLight shadow-md max-h-[90px]'>
      <nav className="container flex justify-center md:justify-between gap-6 lg:gap-12 py-4 sm:py-3">
        <div className='text-brandRed font-cursive text-[2rem] font-semibold tracking-wide p-0'>ecobike coffee</div>
        <ul className='md:flex items-center gap-6 lg:gap-9 p-2 hidden'>
            {
              links

                // navLinks.map(({ name, path, id }) => (
                //     <li key={id} className='cursor-pointer group duration-200 last-of-type:ml-8 last-of-type:text-brandRed'>
                //       <NavLink
                //             key={id}
                //             to={path}
                //             className='inline-block text-[14px] lg:text-[16px] font-medium font-inter hover:scale-95 hover:text-brandRed'
                //             >{name}</NavLink>
                //     </li>
                // ))
            }

        </ul>

                    {/* hamburger menu */}
        <div className='group'>
          <div className='flex items-center gap-[2px] py-2 '>
            <span className='flex'>
              <GiHamburgerMenu 
                  className={`z-[9999] cursor-pointer ${menuStatus === 'block' ? 'rotate-45' : null} duration-200 text-3xl text-brandRed block lg:hidden absolute right-5`} 
                  onClick={menuToggle}
              />

            </span>
          </div>

          <div className={`absolute top-20 right-0 z-[999] ${menuStatus} bg-brandBlack min-w-[140px]`}   > 
            <ul className='p-4 flex flex-col items-center justify-evenly'>
              {
                links
              }
            </ul>
          </div>
        </div>
        

      </nav>
    </header>
  )
}

export default Navbar
