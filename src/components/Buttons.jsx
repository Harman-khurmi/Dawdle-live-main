import React from 'react'
import arrowBtn from '../assets/arrowBtn.svg'
const Buttons = ({ Data }) => {
  return (
    <>
      <div className='mb-6 h-16 items-center w-full flex justify-center md:justify-start lg:justify-start'>
        <button
          className={`h-12 md:h-14 ${Data.width} lg:${Data.large} flex justify-between  font-medium bg-brandPrimary items-center rounded-full px-1 text-bgWhite transition-all duration-300 ease-in-out transform hover:bg-bgWhite hover:text-brandPrimary hover:shadow-lg hover:scale-105`}
        >
          <a className='flex items-center justify-between gap-2 w-full' href={Data.Link} target="_blank">
            <h3 className='text-md md:text-lg lg:text-xl w-full transition-all duration-100 ease-in-out opacity-100 '>
              {Data.Title}
            </h3>
            <div className='flex rounded-full content-center shrink-0 justify-center items-center text-brandSecondary bg-bgWhite h-12 w-12 transition-all duration-100 ease-in-out '>
              <img
                className='flex content-center justify-center items-center transition-transform duration-300 ease-in-out '
                src={arrowBtn}
              />
            </div>
          </a>
        </button>
      </div>
    </>
  )
}

export default Buttons