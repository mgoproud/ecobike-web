import PrimaryButton from '../Shared/PrimaryButton'
import leaf from '../../assets/images/leaf-icon.png'
import greenTechnology from '../../assets/images/green-technology.jpg'
import coffeeCup from '../../assets/images/cup-1.png'


const Banner = () => {
  return (
    <div className='container md:py-14 relative mb-7'>
      <div 
        // data-aos='fade' 
        // data-aos-delay='300' 
        className='relative z-20'
      >
        <h2 className='py-8 tracking-wider text-2xl font-semibold text-brandBlack text-center'>
        Explore Our tailored menu
        </h2>

        <div className='space-y-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>

            <div>
              <p className='text-[1.15rem]'>Enjoy our wide range of unique quality beverages guaranteed to exceed your satisfaction</p>
            </div>
            <div></div>


          </div>
          {/* <div className='grid grid-cols-2 gap-4 py-10'> */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
          <div></div>
            <div className='lg:py-8'>
              <p className='text-[1.15rem]'>Our ecobike is perfectly engeineered by state of the art skilled engeineers to meet our complete need for the biggest operation while preserving the full nature's form by depending on 100% green & renewable sustainable technologies</p>
            </div>
          </div>
        </div>

        {/* button section */}
        <div 
          // data-aos='fade-up' 
          // data-aos-delay='300' 
          // data-aos-offset='0' 
          className='flex justify-center mt-40 md:mt-10'
        >
          <PrimaryButton text='Explore Our Features' />
        </div>
      </div>

      {/* bg images */}
      <div 
        // data-aos='fade-right' 
        className='absolute bottom-0 left-0 md:top-5 md:left-6 lg:left-14 hidden md:inline-block'
      >
        <img src={leaf} alt="leaf" className='max-w-[60px] md:max-w-[80px]' />
      </div>
      <div
        // data-aos='fade-right'
        className='absolute bottom-20 md:top-[22rem] left-[32%] md:left-6 lg:left-24'
      >
        <img src={greenTechnology} alt="green technology" className='max-w-[180px] md:max-w-[250px] opacity-90 rounded-full md:rounded-[4%]' />
      </div>
      <div
        // data-aos='fade-left'
        className='absolute left-[42%] md:left-[32rem] lg:left-[60rem] top-[30%] md:top-[9rem] lg:top-[8rem] opacity-90 '
      >
        <img src={coffeeCup} alt="green technology" className='max-w-[90px] md:max-w-[100px] lg:max-w-[120px]' />
      </div>
    </div>
  )
}

export default Banner
Banner