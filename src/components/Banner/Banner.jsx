import PrimaryButton from '../Shared/PrimaryButton'
import leaf from '../../assets/images/leaf-icon.png'
import greenTechnology from '../../assets/images/green-technology.jpg'
import coffeeCup from '../../assets/images/cup-1.png'


const Banner = () => {
  return (
    <div className='container py-16 relative'>
      <div>
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
            <div>
              <p className='text-[1.15rem]'>Our ecobike is perfectly engeineered by state of the art skilled engeineers to meet our complete need for the biggest operation while preserving the full nature's form by depending on 100% green & renewable sustainable technologies</p>
            </div>
            


          </div>
        </div>

        {/* button section */}
        <div className='flex justify-center mt-14 md:mt-10'>
          <PrimaryButton text='Explore Our Features' />
        </div>

      </div>
      {/* bg images */}
      <div className='absolute bottom-0 left-0 md:top-5 md:left-6 lg:left-14'>
        <img src={leaf} alt="leaf" className='max-w-[60px] md:max-w-[80px]' />
      </div>
      <div
        className='absolute bottom-0 left-8 md:bottom-16 md:left-6 lg:left-14'
      >
        <img src={greenTechnology} alt="green technology" className='max-w-[210px] md:max-w-[260px] lg:max-w-[320px] opacity-90 rounded-full md:rounded-[4%]' />
      </div>
      <div
        className='absolute top-[23%] right-[20%] md:right-40 md:top-[24%] lg:top-40 lg:right-80 opacity-90 '
      >
        <img src={coffeeCup} alt="green technology" className='max-w-[90px] md:max-w-[100px]' />
      </div>
    </div>
  )
}

export default Banner
Banner