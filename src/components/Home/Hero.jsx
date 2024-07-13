import hero1 from '../../assets/images/hero-1.jpg'
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
    height: '100%'
}

const Hero = () => {
  return (
    <>
    <div className='relative w-full' style={BgStyle}>
    <div className="bg-brandLight/80 rounded-lg">
        <div className="container min-h-[100vh] md:min-h-[680px] grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center place-content-start p-3 lg:px-10">
            {/* text */}
            <div className='space-y-4 md:space-y-6 lg:space-y-9 text-primary order-2 sm:order-1 px-2 lg:px-0 max-h-[440px]'>
                <h1 className='text-center lg:text-start text-[1.5rem] md:text-[2rem] lg:text-[2.25rem] md:tracking-wide'><span className='font-cursive text-5xl font-medium mr-1'>I</span>nnovative <span className='font-cursive text-5xl font-medium mr-1'>S</span>ustainable <span className='font-cursive text-5xl font-medium mr-1'>M</span>obile <br /><span className='inline-block mt-2'> <span className='text-brandRed font-cursive text-5xl font-semibold px-0'>ecobike coffee </span> is alive</span></h1>
                <p className=' place-items-center place-content-center text-center lg:text-start text-xl lg:px-0'>Come on join us <span className='px-1 italic'>let's</span> brew <img src={leafIcon} alt='green' className='w-[4rem] md:w-[2.5rem] block md:inline relative bottom-[-10px] md:bottom-0 left-[40%] md:left-0 mb-6 '/></p>
                    <PrimaryButton text='Discover More' />
            </div>
            <div className='relative z-30 order-1 sm:order-2 bg-white/70 mt-3 w-fit' >
                <img 
                    src={hero1} 
                    alt="hero_img" 
                    className='p-3 max-h-[280px] md:max-h-[380px] lg:max-h-[440px] w-auto lg:scale-100 lg:translate-4' 
                    />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Hero
