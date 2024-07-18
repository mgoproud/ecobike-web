import { FaPhone } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <>
        <div 
            // data-aos='fade-down' 
            className='text-brandLight mt-8 relative bottom-0 w-full'
        >
            <div className='container font-medium max-w-full md:max-w-[92%] bg-gradient-to-b from-brandRed/90 to-brandDarkRed rounded-t-xl py-[2.5rem]'>
                {/* heading section */}
                    {/* <h1 className="py-6 text-xl md:text-2xl lg:text-3xl font-bold text-center">Contact Us</h1> */}

                    {/* grid section */}
                    <div className='text-brandLight grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10  pb-6 '>
                        
                        {/* Address Section */}
                        <div className="text-center space-y-2 lg:space-y-4">
                            <div className="flex justify-center">
                            <IoLocationSharp className="text-4xl lg:text-5xl text-brandLight" />
                            </div>
                            <p className="text-md">
                                Zone 7 Main Road,
                                <br />
                                Beirut, Lebanon
                            </p>
                        </div>

                        {/* Email Section */}
                        <div className="text-center space-y-2 lg:space-y-4 ">
                            <div className="flex justify-center">
                            <MdEmail className="text-4xl lg:text-5xl text-brandLight" />
                            </div>
                            <div className="text-md text-brandLight">
                                <p>info@ecobikecoffee.com</p>
                                <p>operations@ecobikecoffee.com</p>
                                {/* <p></p> */}
                            </div> 
                        </div>
                        <div className="text-center space-y-2 lg:space-y-4 ">
                            <div className="flex justify-center">
                            <FaPhone className="text-4xl lg:text-5xl text-brandLight" />
                            </div>
                            <div className="text-md text-brandLight">
                                <p>+961 81 694472 - Operations</p>
                                <p>+961 3 634440 - Info</p>
                                {/* <p></p> */}
                            </div> 
                        </div>

                    </div>  
                    {/* copyright section */}
                    <div className="flex justify-center p-2 items-center text-md text-brandLight">
                        <p>&copy; 2024 ecobike coffee. All rights reserved</p>
                        <div className="flex items-center flex-col ">

                        </div>
                    </div>  
            </div>
        </div>
    </>
  )
}

export default Footer
