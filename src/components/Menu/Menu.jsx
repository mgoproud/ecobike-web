import { v4 as uuidv4 } from 'uuid';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import HeroBg from '../../assets/images/bg-colors.jpg'
import { menu } from '../../data'
import { Link, useParams } from 'react-router-dom'
import { MenuContext } from '../../contexts/MenuContext'
import { useContext } from 'react'

const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
}


const Menu = () => {

    const { setCurrentItem } = useContext(MenuContext)

    const createId = uuidv4()

const itemName = useParams()

    const handleMenuData = (data) => {
        const item =  {
            id: createId(),
            name: data.name && data.name,
            img: data.img && data.img,
            description: data.description && data.description,
            price: data.price && data.price,
        }

        setCurrentItem(item)
    }

  return (
    <>
        <div className='relative w-full' style={BgStyle}>
            <div className="bg-brandLight/80 rounded-lg">
                <div className='tracking-wide flex flex-col items-center relative top-10'>
                    <h2 className='inline-block font-cursive text-5xl text-brandRed font-semibold'>ecobike coffee</h2>
                    <p className='font-inter text-2xl text-brandBlack font-semibold'>menu</p>
                </div>
            
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center lg:px-14 py-[4rem]">
                    {    
                    menu?.map((cat) => (
                            <div key={cat.category} className='space-y-4 md:space-y-6 lg:space-y-9 text-primary order-2 sm:order-1 px-2 lg:px-0 max-h-[440px]'>
                                <h2 className='text-center text-2xl font-semibold '>{cat.category}</h2>
                                <ul className='w-[400px] flex flex-col justify-center bg-brandBlack text-brandLight px-4 py-6 rounded-xl !my-5'>
                                    { cat.menuItems?.map((data) => (
                                        <li key={data.name} className='group list-none px-3 py-2 rounded-xl '>
                                            <Link 
                                                className='uppercase group-hover:text-brandRed text-md flex justify-between p-0 max-h-[28px] !duration-200 speed' 
                                                onClick={() => handleMenuData(data)}
                                                to={data.name}
                                                
                                            >
                                                <p className='max-h-max group-hover:!translate-x-1'>
                                                    <FaArrowRight className='hidden group-hover:inline-block p-1 text-base text-brandRed h-[26px] w-[26px]' /> 
                                                    {data.name }
                                                </p>
                                                
                                                <p className=' group-hover:!-translate-x-1.25'>{data.price}
                                                    <FaArrowLeft className='hidden group-hover:inline-block p-1 text-brandRed h-[26px] w-[26px]' /> 
                                                </p>
                                            </Link>
                                        </li>
                                        
                                )) }
                                </ul>
                            </div>
                        ))
                        }
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Menu
