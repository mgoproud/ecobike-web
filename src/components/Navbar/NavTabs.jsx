import { navLinks } from '../../data'
import { NavLink } from 'react-router-dom'

const NavTabs = ({liClasses, linkClasses, setNavStatus }) => {
  return (
    <>
        {
            navLinks?.map(({ name, path, id }) => (
                <li 
                    key={id} 
                    className={liClasses}
                >
                  <NavLink
                        key={id}
                        to={path}
                        className={linkClasses}
                        onClick={() => setNavStatus('hidden')}
                        >{name}</NavLink>
                </li>
            ))
        }
    </>
  )
}

export default NavTabs