import { v4 as uuidv4 } from 'uuid';
import { navLinks } from '../../data'
import { useEffect } from 'react';

const Navbar = () => {

    const newId = uuidv4()
console.log(newId);

  return (
    <header className='bg-brandBlack text-brandLight shadow-md'>
      <nav className="container flex justify-between py-4 sm:py-3">
        <div className='text-brandRed place-content-center font-cursive text-[2rem] font-semibold tracking-widest p-0 ml-20'>Logo</div>
        <ul className='md:flex items-center gap-9 p-2 hidden'>
            {
                navLinks.map(({ name, path, id }) => (
                    <li key={id} className='cursor-pointer group duration-200'>
                        <a 
                            href={path}
                            className='inline-block text-[16px] font-medium font-inter hover:scale-95 hover:text-brandRed'
                            >{name}</a>
                    </li>
                ))
            }
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
