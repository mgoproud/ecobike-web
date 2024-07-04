import { v4 as uuidv4 } from 'uuid'
import { navLinks } from '../../data'

const Navbar = () => {

    const newId = uuidv4()
console.log(newId);

  return (
    <header className='bg-brandBlack text-brandLight shadow-md'>
      <nav className="container flex justify-center md:justify-between gap-6 lg:gap-12 py-4 sm:py-3">
        <div className='text-brandRed font-cursive text-[2rem] font-semibold tracking-wide p-0'>ecobike coffee</div>
        <ul className='md:flex items-center gap-6 lg:gap-9 p-2 hidden'>
            {
                navLinks.map(({ name, path, id }) => (
                    <li key={id} className='cursor-pointer group duration-200'>
                        <a 
                            href={path}
                            className='inline-block text-[14px] lg:text-[16px] font-medium font-inter hover:scale-95 hover:text-brandRed'
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
