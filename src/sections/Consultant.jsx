import React from 'react'
import vector from '../assets/consultVector.svg';
import arrowBtn from '../assets/arrowBtn.svg';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
const Consultant = () => {
  return (
    <>
      <section className='h-auto flex justify-center w-full items-center content-center bg-brandPrimary/10 mt-20 relative pb-16 overflow-hidden'>
        {/* Content */}
        <div className="flex flex-col relative z-10 text-center p-3 max-w-4xl mx-auto items-center content-center justify-center">
          {/* heading */}
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="lg:text-5xl md:text-4xl text-3xl xs:text-2xl font-semibold text-brandSecondary mb-4 mt-8 md:mt-16 leading-9 md:leading-tight lg:leading-tight">
            <span className='poppins'>Join us as Dawdle</span> <span className="font-['Libre_Baskerville'] italic text-brandPrimary">Product Consultant</span>
          </motion.h1>
          {/* image */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className=''>
            <img src={vector} alt="connectRight-image" className='xs:h-40 h-56 md:h-72' />
          </motion.div>
          {/* parah */}
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="xs:text-xs text-sm font-medium md:text-lg text-brandPrimary  px-3 md:px-8 lg:px-0 mt-6  text-center">
            Ready to make meaningful connections and earn rewards?

          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="xs:text-xs text-sm font-medium md:text-lg text-brandSecondary px-3 md:px-8 lg:px-0 mt-3">
            As a Dawdle Product Consultant, you can be a pivotal part of this ecosystem. Whether as an organization or an individual, join us to help connect technology providers with enterprises, making an impact with every connection you facilitate.

          </motion.p>

          {/* button */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className='mt-6 h-16 items-center w-full flex justify-center'>
            <a href='https://partners.dawdle.live/' target="_blank">
              <button
                // onClick={scrollToComponent}
                className='xs:h-10 h-12 md:h-14 xs:w-36 w-44 md:w-48 lg:w-52 flex justify-between font-medium bg-brandPrimary items-center rounded-full pl-4 pr-1 text-bgWhite transition-all duration-300 ease-in-out transform hover:bg-bgWhite hover:text-brandPrimary hover:shadow-lg hover:scale-105'
              >
                <h3 className='xs:text-sm text-md md:text-lg lg:text-xl transition-all duration-100 ease-in-out'>
                  Join with Us
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

export default Consultant