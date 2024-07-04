import React from 'react'
import { FaBity, FaBus, FaLeaf } from 'react-icons/fa'
import { GiPowerLightning } from 'react-icons/gi'

const Features = () => {
  return (
    <>
        <div className='py-28 lg:py-14 bg-white'>
            <div className='container flex flex-col '>
                <h1 className='pb-16 tracking-wider text-2xl font-semibold text-brandBlack text-center'>
                    ecobike coffee top features
                </h1>
                {/* card section */}
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-14 sm:gap-4'>

                        {/* 1st card */}
                        <div className='text-center flex justify-center items-center flex-col gap-3 px-16 md:px-4'>
                            <FaBity  className='text-5xl text-brandGreen' />
                            <p className='text-4xl rotate-90 text-brandGreen text-center translate-x-3'>....</p>
                            <h3 className='text-lg font-medium'>Full-Featured Functionality & Menu</h3>
                            <p className='text-brandBlack/70 font-semibold'>sit amet consectetur adipisicing elit. Laborum unde odio cupiditate soluta. Ea dignissimos, sint, consequatur</p>
                        </div>

                        {/* 2nd card */}
                        <div className='text-center flex justify-center items-center flex-col gap-3 px-16 md:px-4'>
                            <GiPowerLightning className='text-5xl text-brandRed'  />
                            <p className='text-4xl rotate-90 text-brandRed text-center translate-x-3'>....</p>
                            <h3 className='text-lg font-medium'>Lightning-Fast Service</h3>
                            <p className='text-brandBlack/70 font-semibold'>placeat dolorem repudiandae labore veritatis reprehenderit dolorem illo quidem, officiis est dolorum sequi veritatis libero!</p>
                        </div>
                        {/*  */}
                        {/* 3rd card */}
                        <div className='text-center flex justify-center items-center flex-col gap-3 px-16 md:px-4'>
                            <FaLeaf className='text-5xl text-brandGreen' />
                            <p className='text-4xl rotate-90 text-brandGreen text-center translate-x-3'>....</p>
                            <h3 className='text-lg font-medium'>Nature & Environment-Friendly</h3>
                            <p className='text-brandBlack/70 font-semibold'>Nostrum praesentium ut aperiam atque assumenda a consequatur deserunt illo, voluptatem minima quasi modi! Vel ipsam under</p>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Features
