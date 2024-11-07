import React from 'react'
import solution from '../assets/solutionVector.svg';
import arrowBtn from '../assets/arrowBtn.svg';
const Solutions = () => {
  return (
    <>
      <section className='h-auto flex justify-center w-full items-center content-center mt-8'>
        {/* Content */}
        <div className="flex flex-col relative z-10 text-center p-3 max-w-4xl mx-auto items-center content-center justify-center">
          {/* heading */}
          <h1 className="lg:text-5xl md:text-4xl text-3xl xs:text-2xl font-semibold text-brandSecondary mb-4 mt-8 md:mt-16 leading-9 md:leading-tight lg:leading-tight">
            <span className='poppins'>Enterprises Looking for Specialized </span> <span className="font-['Libre_Baskerville'] italic text-brandPrimary">Technology Solutions</span>
          </h1>
          {/* image */}
          <div className=''>
            <img src={solution} alt="connectRight-image" className='xs:h-40 h-56 md:h-72 mt-6' />
          </div>
          {/* parah */}
          <p className="xs:text-xs text-sm font-medium md:text-lg text-brandSecondary xs:p- px-3 md:px-8 lg:px-0 mt-10">
            If your business requires specialized technology solutions, Dawdle connects you with a curated network of technology providers tailored to meet your needs, ensuring you find the right fit the first time around.
          </p>

          {/* button */}
          <div className='mt-6 h-16 items-center w-full flex justify-center'>
            <a href='https://lucide.dev/icons/gauge ' target="_blank">
              <button
                // onClick={scrollToComponent}

                className='xs:h-10 h-12 md:h-14 xs:w-44 w-52 md:w-60 lg:w-64 flex justify-between font-medium bg-brandPrimary items-center rounded-full pl-4 pr-1 text-bgWhite transition-all duration-300 ease-in-out transform hover:bg-bgWhite hover:text-brandPrimary hover:shadow-lg hover:scale-105'
              >
                <h3 className='xs:text-sm text-md md:text-lg lg:text-xl transition-all duration-100 ease-in-out'>
                  Connect with Us
                </h3>
                <div className='flex rounded-full content-center justify-center items-center text-brandSecondary bg-bgWhite md:h-12 md:w-12 h-10 xs:h-8 xs:w-8 w-10 transition-all duration-100 ease-in-out '>
                  <img

                    className='flex content-center justify-center items-center transition-transform duration-300 ease-in-out xs:h-3 '
                    src={arrowBtn}
                    alt="arrow"
                  />
                </div>
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Solutions