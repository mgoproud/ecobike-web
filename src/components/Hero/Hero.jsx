import hero1 from '../../assets/images/hero-1.jpg'
import leafIcon from '../../assets/images/leaf-icon.png'
import HeroBg from '../../assets/images/heroBg.png'
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
    <div className="container py-0 md:py-16 bg-brandLight opacity-85 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 place-items-center min-h-[600px] lg:px-10">
            {/* text */}
            <div className='space-y-8 text-primary order-2 sm:order-1 px-8 lg:px-0 min-h-fit'>
                <h1 className='text-center md:text-start text-[1.7rem] md:text-[2.46rem] tracking-wide'><span className='text-brandRed font-cursive text-5xl font-medium px-0 mr-1'>I</span>nnovative <span className='text-brandRed font-cursive text-5xl font-medium px-0 mr-1'>S</span>ustainable <span className='text-brandRed font-cursive text-5xl font-medium px-0 mr-1'>M</span>obile <br /> <span className='text-brandRed font-cursive text-5xl font-medium px-0'>ecobike </span> coffee is alive</h1>
                <p className='place-items-center place-content-center text-center mt-20 md:text-start text-2xl lg:px-0'>Come on join us <span className='px-1 italic'>let's</span> brew <img src={leafIcon} alt='green' className='w-[4.25rem] md:w-[2.8rem] block md:inline relative bottom-[-10px] md:bottom-0 left-[40%] md:left-0 mb-6 '/></p>

                    <PrimaryButton />

            </div>
            <div className='relative z-30 order-1 sm:order-2 bg-white/70 mt-3 w-fit' >
                <img 
                    src={hero1} 
                    alt="hero_img" 
                    className='p-3 max-h-[320px] md:max-h-[380px] lg:max-h-[440px] w-full lg:scale-100 lg:translate-4' 
                    // className='w-[16rem] sm:scale-125 sm:translate-y-16' 
                    />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Hero
