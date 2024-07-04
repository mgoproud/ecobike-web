import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const PrimaryButton = ({ text }) => {
  return (
    <div className='flex justify-center lg:justify-start group text-brandLight mr-auto ml-auto'>
        
        <FaArrowRight className='inline-block group-hover:!-translate-x-1.5 duration-200 p-2 text-base bg-brandDarkGreen h-[40px] w-[40px]' />
        <button className='bg-brandGreen h-[40px] px-3 py-2 text-[1.1rem] font-medium'>
        {/* Find Out More */}
        {text}
        </button>
        <FaArrowLeft className='inline-block group-hover:!translate-x-1.5 duration-200 p-2 text-base bg-brandDarkGreen h-[40px] w-[40px]' />
      
    </div>
  )
}

export default PrimaryButton
