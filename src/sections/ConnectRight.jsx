import connect from '../assets/connectRight.svg';
import arrowBtn from '../assets/arrowBtn.svg';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
import React, { forwardRef } from 'react';
const ConnectRight = forwardRef((props, ref) => {
  return (
    <>
      <section className='h-auto flex justify-center w-full items-center content-center relative overflow-hidden'>
        {/* Content */}
        <div id="targetComponent" className="flex flex-col relative z-10 text-center p-3 max-w-4xl mx-auto items-center content-center justify-center">
          {/* heading */}
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}

            className="lg:text-5xl md:text-4xl text-3xl xs:text-2xl font-semibold text-brandSecondary mb-4 mt-8 md:mt-16 md:px-16 lg:px-0 leading-9 md:leading-tight lg:leading-tight">
            <span className='poppins'>We Connect Solution Providers with the</span> <span className="font-['Libre_Baskerville'] italic text-brandPrimary">Right Enterprises</span>
          </motion.h1>
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className=''>
            <img src={connect} alt="connectRight-image" className='xs:h-48 h-60 md:h-72' />
          </motion.div>
          {/* parah */}
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="xs:text-xs text-sm font-medium md:text-lg text-brandSecondary xs:p- px-3 md:px-8 lg:px-0 mt-6">
            If your company has developed a technology product to solve business challenges, Dawdle ensures it reaches the right enterprises. Through our platform, your product finds the audiences that need it most, maximizing its impact and success potential.
          </motion.p>

          {/* button */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className='mt-6 h-16 items-center w-full flex justify-center'>
            <a href='https://cal.com/dawdle-clients/exploratory' target="_blank">
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
          </motion.div>
        </div>
      </section>
    </>
  )
}
)

export default ConnectRight