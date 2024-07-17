import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MenuContext } from '../../contexts/MenuContext'

const MenuItem = () => {

  const { currentItem, setCurrentItem } = useContext(MenuContext)

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('currentItem'))

    if (!item) return
     console.log(item)
     setCurrentItem(item)
  }, [])
  console.log(currentItem)


  return (
    <div className='relative w-full text-brandBlack'>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 place-items-center lg:px-14 py-[4rem]">
        <div className='w-full flex justify-between p-2'>
          <h2 className='text-center text-2xl font-semibold '>{ currentItem && currentItem.name }</h2>
          <h2 className='text-center text-2xl font-semibold '>{ currentItem && currentItem.price }</h2>
        </div>
                 
        <div className='space-y-4 md:space-y-6 lg:space-y-9 text-primary order-1 sm:order-2 px-2 lg:px-0 max-h-[440px]'>     
              {/* <img src={ (currentItem && currentItem.img) && currentItem.img } alt={`${currentItem.name} image`} /> */}
              <p>
                { currentItem && currentItem.description }
              </p>
        </div>               
      </div>
    </div>
  )
}

export default MenuItem
