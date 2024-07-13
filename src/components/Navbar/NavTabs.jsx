import { navLinks } from '../../data'
import { NavLink } from 'react-router-dom'

const NavTabs = ({liClasses, linkClasses }) => {
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
                        >{name}</NavLink>
                </li>
            ))
        }
    </>
  )
}

export default NavTabs