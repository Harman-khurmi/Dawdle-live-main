import React from 'react'
import TrustedMarquee from './TrustedMarquee'

const TrustedBy = () => {
  return (
    <>
      <div className="mt-10 rounded-3xl mb-6  relative mx-auto  justify-center items-center overflow-x-hidden">
        <div className=' flex flex-col gap-20 w-full justify-center items-center content-center text-center py-4 h-auto '>
          {/* heading */}
          <h1 className="lg:text-5xl md:text-4xl text-3xl xs:text-2xl font-semibold text-brandSecondary mb-4 mt-8 md:mt-16 leading-9 md:leading-tight lg:leading-tight">
            <span className='poppins'>Trusted by</span> <span className="font-['Libre_Baskerville'] italic text-brandPrimary">400+ Companies</span>
          </h1>
          {/* Companies logo */}
          <TrustedMarquee />
        </div>

      </div>
    </>
  )
}

export default TrustedBy