import React from 'react';
import HoverCard from '../components/HoverCard';
import Consultant from '/src/assets/consultantIcon.svg';
import connections from '/src/assets/connectionIcon.svg';
import { FaChartLine } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TbBrandSpeedtest } from "react-icons/tb";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
const Provide = () => {


  return (
    <>
      <section className='h-auto overflow-x-hidden flex justify-center w-full items-center content-center bg-brandPrimary/10 mt-20 relative pb-24'>
        {/* Content */}
        <div className="flex flex-col relative z-10 text-center p-3 max-w-4xl mx-auto items-center content-center justify-center">
          {/* heading */}
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="lg:text-5xl md:text-4xl text-3xl xs:text-2xl font-semibold text-brandSecondary mb-4 mt-8 md:mt-16 leading-9 md:leading-tight lg:leading-tight">
            <span className='poppins'>How do we</span> <span className="font-['Libre_Baskerville'] italic text-brandPrimary">Connect?</span>
          </motion.h1>
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 mt-6 items-center justify-center mx-auto content-center align-middle">
            {/* Square 1 */}
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="square hover-effect transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-3xl h-auto">
              <div
                // variants={fadeIn("up", 0.2)}
                // initial="hidden"
                // whileInView="show"
                // viewport={{ once: false, amount: 0.2 }}
                className="content p-9 items-center flex flex-col justify-center gap-4 ">
                <img src={Consultant} alt="" className='h-16 xs:h-12 ' />
                <h2 className="md:text-xl text-lg  font-bold">Dawdle Product Consultants</h2>
                <p className="text-gray-700 text-base ">
                  Leveraging a network of professionals and organizations with expertise in your field, Dawdle Product Consultants make meaningful connections that align with your product's strengths.
                </p>
              </div>
            </motion.div>

            {/* Square 2 */}
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.7 }}
              className="square hover-effect transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-3xl h-auto">
              <div
                // variants={fadeIn("up", 0.2)}
                // initial="hidden"
                // whileInView="show"
                // viewport={{ once: false, amount: 0.2 }}
                className="content p-9 items-center flex flex-col justify-center gap-4 ">
                <img src={connections} alt="" className='h-16 xs:h-12 ' />
                <h2 className="md:text-xl text-lg  font-bold ">Direct Enterprise Partnerships</h2>
                <p className="text-gray-700 text-base ">
                  Dawdle partners directly with enterprises actively seeking specific solutions, matching your product to clients ready to benefit from its unique capabilities.
                </p>
              </div>
            </motion.div>
          </div>

          {/* 2nd heading */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col relative z-10 text-center items-center content-center justify-center align-middle self-center">
            <h1 className="lg:text-5xl md:text-4xl text-3xl xs:text-2xl font-semibold text-brandSecondary mb-4 mt-10 md:mt-16 leading-9 md:leading-tight lg:leading-tight">
              <span className="poppins">Key Benefits for</span> <span className="font-['Libre_Baskerville'] italic text-brandPrimary">Solution Providers</span>
            </h1>

            {/* Animated 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full  mt-12  items-center justify-center content-center align-middle">
              <motion.div
                variants={fadeIn("left", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="h-44 flex justify-center w-full">
                <HoverCard
                  title="Lower customer churn, increasing lifetime value"

                  Icon={FaChartLine}

                />
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="h-44 flex justify-center w-full">
                <HoverCard
                  title="Shorter sales cycles, fueling growth"

                  Icon={TbBrandSpeedtest}
                />
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="h-44 flex justify-center w-full">
                <HoverCard
                  title="Lowered acquisition costs and optimized ROI"

                  Icon={FaHandHoldingDollar}
                />
              </motion.div>
            </div>

          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Provide