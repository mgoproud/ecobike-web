import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import HeroBg from '../../assets/images/bg-colors.jpg'
import PrimaryButton from '../Shared/PrimaryButton'
import { menu } from '../../data'

const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%'
}

const Menu = () => {
  return (
    <>
        <div className='relative w-full' style={BgStyle}>
            <div className="bg-brandLight/80 rounded-lg">
                <div className='tracking-wide flex flex-col items-center pt-6 relative top-10'>
                    <h2 className='inline-block font-cursive text-5xl text-brandRed font-semibold'>ecobike coffee</h2>
                    <p className='font-inter text-3xl text-brandBlack font-semibold'>menu</p>
                </div>
            
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center place-content-center min-h-[680px] lg:px-10">
                    {    
                    menu?.map((cat) => (
                            <div key={cat.category} className='space-y-4 md:space-y-6 lg:space-y-9 text-primary order-2 sm:order-1 px-2 lg:px-0 max-h-[440px]'>
                                <h2 className='text-center text-3xl font-semibold'>{cat.category}</h2>
                                <ul className='w-[400px] min-h-[250px] flex flex-col justify-center bg-brandGray text-brandLight p-4 rounded-xl !my-5'>
                                    { cat.menuItems?.map((item) => (
                                    <li className='group list-none px-3 py-2 rounded-xl'>
                                        <a className='group-hover:text-brandRed text-lg flex justify-between p-0 max-h-[28px] !duration-200' key={item.name} href="">
                                            <p className='max-h-max group-hover:!translate-x-1.25'>
                                                <FaArrowRight className='hidden group-hover:inline-block p-1 text-base text-brandRed h-[26px] w-[26px]' /> 
                                                {item.name}
                                                
                                            </p>
                                            <p className=' group-hover:!-translate-x-1.25'>{item.price}
                                            <FaArrowLeft className='hidden group-hover:inline-block p-1 text-brandRed h-[26px] w-[26px]' /> 
                                            </p>
                                        </a>
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
