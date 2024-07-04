import { FaPhone } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <>
        <div className='text-brandLight mt-20 '>
            <div className='container bg-gradient-to-b from-brandRed to-brandDarkRed rounded-t-3xl'>
                {/* heading section */}
                    <h1 className="py-10 text-3xl font-bold text-center">Contact Us</h1>

                    {/* grid section */}
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-14 border-b-2 border-brandLight pb-6 '>
                        
                        {/* Address Section */}
                        <div className="text-center space-y-4 ">
                            <div className="flex justify-center">
                            <IoLocationSharp className="text-5xl" />
                            </div>
                            <p>
                                Zone 7 Main Road,
                                <br />
                                Beirut, Lebanon
                            </p>
                        </div>

                        {/* Email Section */}
                        <div className="text-center space-y-4 ">
                            <div className="flex justify-center">
                            <MdEmail className="text-5xl" />
                            </div>
                            <div>
                                <p>info@ecobikecoffee.com</p>
                                <p>operations@ecobikecoffee.com</p>
                                <p></p>
                            </div> 
                        </div>
                    </div>    
            </div>
        </div>
    </>
  )
}

export default Footer
