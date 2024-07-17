import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const PrimaryButton = ({ value, path, type, btnClasses, arrowsClasses, setShowPopup }) => {
  return (
    <div className='flex justify-center group text-brandLight mr-auto ml-auto'>
        
        <FaArrowRight className={`${arrowsClasses} inline-block group-hover:!-translate-x-1.5 duration-200 p-2 text-base h-[40px] w-[40px] rounded-l-md`} />
        <button 
          type={type}
          className={`${btnClasses} h-[40px] px-5 py-2 text-[1.1rem] font-medium`}
          onClick={() => setShowPopup(false)}
        >

        {/* Find Out More */}
        {value}
        </button>
        <FaArrowLeft className={`${arrowsClasses} inline-block group-hover:!translate-x-1.5 duration-200 p-2 text-base h-[40px] w-[40px] rounded-r-md`} />
      
    </div>
  )
}

export default PrimaryButton
