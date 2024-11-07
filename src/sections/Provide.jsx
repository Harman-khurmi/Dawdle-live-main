
import React from 'react';
import HoverCard from '../components/HoverCard';
import Consultant from '/src/assets/consultantIcon.svg';
import connections from '/src/assets/connectionIcon.svg';
import { FaChartLine } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { TbBrandSpeedtest } from "react-icons/tb";
const Provide = () => {


  return (
    <>
      <section className='h-auto flex justify-center w-full items-center content-center bg-brandPrimary/10 mt-20 relative pb-24'>
        {/* Content */}
        <div className="flex flex-col relative z-10 text-center p-3 max-w-4xl mx-auto items-center content-center justify-center">
          {/* heading */}
          <h1 className="lg:text-5xl md:text-4xl text-3xl xs:text-2xl font-semibold text-brandSecondary mb-4 mt-8 md:mt-16 leading-9 md:leading-tight lg:leading-tight">
            <span className='poppins'>How do we</span> <span className="font-['Libre_Baskerville'] italic text-brandPrimary">Provide?</span>
          </h1>
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 mt-6 items-center justify-center mx-auto content-center align-middle">
            {/* Square 1 */}
            <div className="square hover-effect transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-3xl h-auto">
              <div className="content p-8 items-center flex flex-col justify-center gap-4 ">
                <img src={Consultant} alt="" className='h-16 xs:h-12 ' />
                <h2 className="md:text-xl text-lg  font-bold">Dawdle Product Consultants</h2>
                <p className="text-gray-700 text-base ">
                  Leveraging a network of professionals and organizations with expertise in your field, Dawdle Product Consultants make meaningful connections that align with your product's strengths.
                </p>
              </div>
            </div>

            {/* Square 2 */}
            <div className="square hover-effect transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-3xl h-auto">
              <div className="content p-8 items-center flex flex-col justify-center gap-4 ">
                <img src={connections} alt="" className='h-16 xs:h-12 ' />
                <h2 className="md:text-xl text-lg  font-bold ">Direct Enterprise Partnerships</h2>
                <p className="text-gray-700 text-base ">
                  Dawdle partners directly with enterprises actively seeking specific solutions, matching your product to clients ready to benefit from its unique capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd heading */}
          <div className="flex flex-col relative z-10 text-center items-center content-center justify-center align-middle self-center">
            <h1 className="lg:text-5xl md:text-4xl text-3xl xs:text-2xl font-semibold text-brandSecondary mb-4 mt-10 md:mt-16 leading-9 md:leading-tight lg:leading-tight">
              <span className="poppins">Key Benefits for</span> <span className="font-['Libre_Baskerville'] italic text-brandPrimary">Solution Providers</span>
            </h1>

            {/* Animated 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full  mt-12  items-center justify-center content-center align-middle">
              <div className="h-44 flex justify-center w-full">
                <HoverCard
                  title="Lower customer churn, increasing lifetime value"

                  Icon={FaChartLine}

                />
              </div>
              <div className="h-44 flex justify-center w-full">
                <HoverCard
                  title="Shorter sales cycles, fueling growth"

                  Icon={TbBrandSpeedtest}
                />
              </div>
              <div className="h-44 flex justify-center w-full">
                <HoverCard
                  title="Lowered acquisition costs and optimized ROI"

                  Icon={FaHandHoldingDollar}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Provide