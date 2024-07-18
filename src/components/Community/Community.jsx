import communityBg from '../../assets/images/communityBg.jpg'
import vector from '../../assets/images/vector-wave.png'
import heroEcobike from '../../assets/images/hero-ecobike.jpeg'

const bgStyle = {
  backgroundImage: `url(${heroEcobike})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  // backgroundSize: 'cover',
  width: '100%',
  minHeight: '80vh',
  position: 'relative',
}

const Community = ({ showPopup }) => {
  return (

<>
        <div className=' bg-brandRed/20 flex px-4'>
            <div style={bgStyle} className='container py-14 grid grid-cols-col md:grid-cols-2 gap-4 md:gap-28 relative z-10'>
                {/* <h1 className='py-4 tracking-wider text-3xl md:text-4xl font-semibold text-brandBlack text-center relative top-6 md:top-12'>About Us</h1> */}

                {/* card section */}
                    <div className='w-[80%] lg:w-[50%] -rotate-12 text-center h-fit bg-brandLight/90 px-4 py-8 my-10 mx-auto rounded-lg  border-2 border-brandBlack'>
                        <p className='text-brandBlack text-lg font-medium tracking-tight'>
                            We are a team of professionals, engeineers & investors that using our full efforts and time, we invented this nature-friendly sustainable full-featured ecobike coffee
                        </p>
                    </div>
                    <div className='w-[80%] lg:w-[50%] rotate-12 text-center h-fit bg-brandLight/90 px-4 py-8 my-10 mt-24 mx-auto rounded-lg'>
                        <p className='text-brandBlack text-lg font-medium tracking-tight'>
                            We are a team of professionals, engeineers & investors that using our full efforts and time, we invented this nature-friendly sustainable full-featured ecobike coffee
                        </p>
                    </div>
                
                

            </div>
            {/* wave vector */}
            {/* <div className='backdrop-blur-lg'>
                <img 
                  src={vector} 
                  alt="" 
                  className='absolute bottom-60 right-0 w-full h-[300px] md:h-[350px]' />
            </div> */}
        </div>
    </>

    // <div className='py-10'>
    //     <div className='container flex flex-col items-center justify-center min-h-[550px] gap-32 relative z-10'>
    //       <div style={bgStyle} className='max-w-[420px] min-h-[500px] opacity-80'>
    //         <h1 className='py-4 tracking-wider text-3xl md:text-4xl font-semibold text-brandBlack text-center relative top-6 md:top-12'>
    //         {/* <h1 className='text-[2rem]'> */}
    //           Community</h1>
    //         <p className='text-[1.3rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni earum rem aperiam, possimus ex, asperiores soluta nam iusto molestias repellat eveniet reprehenderit. Quam libero doloribus impedit sit adipisci molestiae porro.</p>
    //       </div>
    //     </div>
      
    // </div>
  )
}

export default Community
