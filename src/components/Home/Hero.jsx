import hero1 from '../../assets/images/hero-1.jpg'
import heroEcobike from '../../assets/images/hero-ecobike.jpeg'
import leafIcon from '../../assets/images/leaf-icon.png'
// import HeroBg from '../../assets/images/heroBg.png'
import HeroBg from '../../assets/images/bg-colors.jpg'
import PrimaryButton from '../Shared/PrimaryButton'


const BgStyle = {
    backgroundImage: `url(${HeroBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%',
    minHeight: '70vh'
}

const Hero = () => {
  return (
    <>
        <div className='relative w-full min-h-[70vh]'  style={BgStyle}>
            <div className="bg-brandLight/80 rounded-lg py-10 min-h-[70vh] flex flex-col justify-center">
            
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center place-content-start md:place-content-center p-5 lg:px-10">
                    {/* text */}
                    <div className='space-y-8 md:space-y-6 lg:space-y-9 text-primary order-1 md:order-2 px-2 lg:px-0 my-5 max-h-[440px]'>
                        <h1 
                            // data-aos='fade-up' 
                            className='text-center lg:text-start text-[1.5rem] md:text-[2rem] lg:text-[2.25rem] md:tracking-wide'><span className='font-cursive text-5xl font-medium mr-1'>I</span>nnovative <span className='font-cursive text-5xl font-medium mr-1'>S</span>ustainable <span className='font-cursive text-5xl font-medium mr-1'>M</span>obile <br /><span className='inline-block mt-2'> <span className='text-brandRed font-cursive text-5xl font-semibold px-0'
                        >ecobike coffee </span> is alive</span></h1>
                       <div 
                            // data-aos='fade-up' 
                            // data-aos-delay='500'
                        >
                            <PrimaryButton btnClasses='bg-brandGreen' arrowsClasses='bg-brandDarkGreen' value='Discover More' />
                        </div>  
                        
                    </div>
                    <div 
                        // data-aos='zoom-in' 
                        // data-aos-delay='500' 
                        className='relative z-30 order-2 md:order-1 bg-white/70 my-3 w-[90%] md:w-[60%]' 
                    >
                        <img 
                            src={heroEcobike} 
                            alt="hero_img" 
                            className='p-3 lg:scale-100 lg:translate-4 w-[100%]' 
                            />
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Hero
