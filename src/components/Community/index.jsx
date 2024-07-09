import communityBg from '../../assets/images/communityBg.jpg'

const bgStyle = {
  backgroundImage: `url(${communityBg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  width: '100%',
  height: '100%',
  // position: 'relative',
}

const Community = () => {
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
                            {/* <FaUser /> */}
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            {/* wave vector */}
            <div>
                <img 
                  // src={vector} 
                  alt="" 
                  className='absolute top-0 right-0 w-full h-[300px] md:h-[350px]' />
            </div>
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
