import { FaUser } from 'react-icons/fa'
import aboutBg from '../../assets/images/about-bg-3.jpg'
import vector from '../../assets/images/vector-wave.png'

const bgStyle = {
    backgroundImage: `url(${aboutBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    position: 'relative',
}

const About = () => {
  return (
    <>
        <div style={bgStyle} className='pb-14'>
            <div className='container flex flex-col min-h-[550px] gap-32 relative z-10'>
                <h1 className='py-4 tracking-wider text-3xl md:text-4xl font-semibold text-brandBlack text-center relative top-6 md:top-12'>About Us</h1>

                {/* card section */}
                <div className='text-center bg-brandLight/85 p-10 my-10 max-w-[100%] md:max-w-[90%] mx-auto rounded-md'>
                    <p className='text-brandBlack text-lg'>
                        We are a team of professionals, engeineers & investors that using our full efforts and time, we invented this nature-friendly sustainable full-featured ecobike coffee
                    </p>
                    <div className='pt-10 flex justify-center'>
                        <button
                            className='flex justify-center items-center gap-2 bg-brandRed text-xl h-[40px] text-brandLight px-5 py-2 hover:scale-105 duration-200'
                        >
                            <FaUser />
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            {/* wave vector */}
            <div>
                <img src={vector} alt="" className='absolute top-0 right-0 w-full h-[300px] md:h-[350px]' />
            </div>
        </div>
    </>
    
  )
}

export default About
