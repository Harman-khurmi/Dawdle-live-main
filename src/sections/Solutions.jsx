import React from 'react'
import solution from '../assets/solutionVector.svg';
import arrowBtn from '../assets/arrowBtn.svg';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
const Solutions = ({ onButtonClick }) => {
  return (
    <>
      <section className='h-auto flex justify-center w-full items-center content-center mt-8'>
        {/* Content */}
        <div className="flex flex-col relative z-10 text-center p-3 max-w-4xl mx-auto items-center content-center justify-center">
          {/* heading */}
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="lg:text-5xl md:text-4xl text-3xl xs:text-2xl font-semibold text-brandSecondary mb-4 mt-8 md:mt-16 leading-9 md:leading-tight lg:leading-tight">
            <span className='poppins'>Enterprises Looking for Specialized </span> <span className="font-['Libre_Baskerville'] italic text-brandPrimary">Technology Solutions</span>
          </motion.h1>
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className=''>
            <img src={solution} alt="connectRight-image" className='xs:h-40 h-56 md:h-72 mt-6' />
          </motion.div>
          {/* parah */}
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="xs:text-xs text-sm font-medium md:text-lg text-brandSecondary xs:p- px-3 md:px-8 lg:px-0 mt-10">
            If your business requires specialized technology solutions, Dawdle connects you with a curated network of technology providers tailored to meet your needs, ensuring you find the right fit the first time around.
          </motion.p>

          {/* button */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className='mt-6 h-16 items-center w-full flex justify-center'>
            {/* <a href='https://cal.com/dawdle-clients/exploratory' target="_blank"> */}
            <button
              // onClick={scrollToComponent}
              onClick={onButtonClick}
              className='xs:h-10 h-12 md:h-14 xs:w-56 w-64 md:w-72 lg:w-80 flex justify-between font-medium bg-brandPrimary items-center rounded-full pl-4 pr-1 text-bgWhite transition-all duration-300 ease-in-out transform hover:bg-bgWhite hover:text-brandPrimary hover:shadow-lg hover:scale-105'
            >
              <h3 className='xs:text-sm text-md md:text-lg lg:text-xl transition-all duration-100 ease-in-out'>
                Discover Tech Solutions
              </h3>
              <div className='flex rounded-full content-center justify-center items-center text-brandSecondary bg-bgWhite md:h-12 md:w-12 h-10 xs:h-8 xs:w-8 w-10 transition-all duration-100 ease-in-out '>
                <img

                  className='flex content-center justify-center items-center transition-transform duration-300 ease-in-out xs:h-3 '
                  src={arrowBtn}
                  alt="arrow"
                />
              </div>
            </button>
            {/* </a> */}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Solutions