import { FaPhone } from "react-icons/fa"
import { IoLocationSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"

const Footer = () => {
  return (
    <>
        <div className='text-brandLight bg-brandGray'>
            <div className='container max-w-full md:max-w-[92%] bg-gradient-to-b from-brandRed to-brandDarkRed rounded-t-xl py-[2.5rem]'>
                {/* heading section */}
                    {/* <h1 className="py-6 text-xl md:text-2xl lg:text-3xl font-bold text-center">Contact Us</h1> */}

                    {/* grid section */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10  pb-6 '>
                        
                        {/* Address Section */}
                        <div className="text-center text-brandGray space-y-2 lg:space-y-4 ">
                            <div className="flex justify-center">
                            <IoLocationSharp className="text-4xl lg:text-5xl" />
                            </div>
                            <p className="text-sm font-semibold">
                                Zone 7 Main Road,
                                <br />
                                Beirut, Lebanon
                            </p>
                        </div>

                        {/* Email Section */}
                        <div className="text-center text-brandGray space-y-2 lg:space-y-4 ">
                            <div className="flex justify-center">
                            <MdEmail className="text-4xl lg:text-5xl" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold">info@ecobikecoffee.com</p>
                                <p className="text-sm font-semibold">operations@ecobikecoffee.com</p>
                                {/* <p></p> */}
                            </div> 
                        </div>

                    </div>    
            </div>
        </div>
    </>
  )
}

export default Footer
