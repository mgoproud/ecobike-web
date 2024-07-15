import { useRef, useState } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'
import emailjs from '@emailjs/browser'

const Popup = ({ showPopup, setShowPopup, showMessage, setShowMessage }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [occupation, setOccupation] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const [alertStatus, setAlertStatus] = useState('hidden')
    const [alertType, setAlertType] = useState(null)

    const form = useRef()

    const handleMessageSent = () => {
        setAlertStatus('block')

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_lujgo5h', 'template_8oyu3lg', form.current, {
            publicKey: 'LRuO7mVxJiSFCqzB1',
          })
          .then((result) => {
              console.log(result.text);
              (result.status === 200  && result.text === 'OK') && setAlertType('#2E873D')
          }, (error) => {
              console.log(error.text);
              error && setAlertType('#E8393D')
          });

          setName('')
          setEmail('')
          setOccupation('')
          setPhone('')
          setMessage('')

          setShowMessage(true)
          setShowPopup(false)

          setTimeout(() => {
            setShowMessage(false)
          }, 5000)
        };

  return (
    <>
    {   showMessage &&
            <div
                data-aos='zoom-in'
                data-aos-delay='100'
                className='z-[9999] message bg-brandGreen rounded-lg absolute top-36 left-[26%] flex items-center p-1 duration-200'>
                <p className='font-medium text-lg text-brandLight py-2 px-2 tracking-wide'>We received your inquiry successfully and we'll contact you shortly. Thank you</p>
                <IoCloseOutline className='text-3xl cursor-pointer text-brandLight'
                    onClick={() => setShowMessage(false)}
                />
            </div>
        }
            {/* <div className='message'>
                <p className='hidden absolute top-36 left-[26%] font-medium text-lg bg-brandRed text-brandLight p-4 rounded-xl tracking-wider'>Your inquiry was not sent please contact us again later. Thank you</p>
            </div> */}
        
      {
    showPopup && (
        // <div>
            <div className="h-screen w-screen fixed top-0 left-0 bg-brandBlack/60 z-50 backdrop-blur-md">
                <div className='relative top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 shadow-md bg-white rounded-md duration-200 md:mx-0 w-[95%] md:w-[600px] lg:w-[680px]'>
                
                {/* header section */}
                <div className='flex items-center justify-between my-3 mx-1'>
                    <div>
                        <h1 className='text-2xl font-semibold text-brandBlack text-center mb-3'>Contact Us</h1>

                    </div>
                    <div>
                        <IoCloseOutline 
                            className='text-3xl cursor-pointer'
                            onClick={() => setShowPopup(false)}
                        />
                    </div>
                </div>

                {/* contact form */}
                <form className='my-4' ref={form} onSubmit={handleSubmit}>
                    <div className='flex flex-col md:flex-row items-center my-4'>
                        <div className='w-fit'>
                            <input 
                                type='text' 
                                name='user_name'
                                placeholder='Name' 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className='outline-none w-full md:w-4/5 rounded-md border border-brandGray/40 dark:border-brandGray/60 px-2 py-1 mb-4'    
                                required
                            />
                            <input 
                                type='email' 
                                name='user_email'
                                placeholder='Email Address' 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='outline-none w-full md:w-4/5 rounded-md border border-brandGray/40 dark:border-brandGray/60 px-2 py-1 mb-4'    
                                required
                            />
                            <input 
                                type='text' 
                                name='user_occupation'
                                placeholder='Occupation' 
                                value={occupation}
                                onChange={(e) => setOccupation(e.target.value)}
                                className='outline-none w-full md:w-4/5 rounded-md border border-brandGray/40 dark:border-brandGray/60 px-2 py-1 mb-4'    
                                required
                            />
                            <input 
                                type="text" 
                                name='user_phone'
                                placeholder='Phone Number' 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className='outline-none w-full md:w-4/5 rounded-md border border-brandGray/40 dark:border-brandGray/60 px-2 py-1 mb-4'        
                            />
                        </div>
                        <div className='w-full p-2'>
                            <textarea 
                                name="message" 
                                id="message" 
                                placeholder='Type your inquiry'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className='outline-none border border-brandGray w-full h-[12rem] p-2'
                                required></textarea>
                                
                        </div>
                    </div>
                    <button 
                        type='submit'
                        className='w-full bg-brandRed hover:bg-brandDarkRed text-brandLight p-2 rounded-md'
                        // onClick={() => setShowPopup(false)}
                        >
                        Send
                    </button>
                </form>
                
                {/* social login */}
                
                <div className='mt-5'>
                    
                    <p className='text-center text-lg'>Join our platforms</p>
                    <div className='flex justify-center gap-2 mt-2'>
                        <FaFacebook className='cursor-pointer text-3xl hover:text-brandDarkRed duration-200' />
                        <FaInstagram className='cursor-pointer text-3xl hover:text-brandDarkRed duration-200' />
                    </div>
                </div>
                </div>
            </div>

    )}
    </>
  )
}

export default Popup
