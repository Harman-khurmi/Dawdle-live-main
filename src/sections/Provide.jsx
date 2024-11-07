import React from 'react'
import HoverCard from '../components/HoverCard';
// import growth from '../assets/benifits/growth.svg';
import Growth from '/src/assets/benifits/growth.svg'
import drop from '/src/assets/benifits/drop.svg'
import speed from '/src/assets/benifits/speed.svg'
import Consultant from '/src/assets/consultantIcon.svg'
import connections from '/src/assets/connectionIcon.svg'

const Provide = () => {


  return (
    <>
      <section className='h-auto flex justify-center w-full items-center content-center bg-brandPrimary/10 mt-20 relative pb-24'>
        {/* Content */}
        <div className="flex flex-col relative z-10 text-center p-3 max-w-4xl mx-auto items-center content-center justify-center">
          {/* heading */}
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-brandSecondary mb-4 mt-8 md:mt-16 leading-9 md:leading-tight lg:leading-tight">
            <span className='poppins'>How do we</span> <span className="font-['Libre_Baskerville'] italic text-brandPrimary">Provide</span>
          </h1>
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 mt-6">
            {/* Square 1 */}
            <div className="square hover-effect transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-3xl">
              <div className="content p-8 items-center flex flex-col justify-center gap-4 ">
                <img src={Consultant} alt="" />
                <h2 className="text-xl font-bold mb-2">Dawdle Product Consultants</h2>
                <p className="text-gray-700">
                  Leveraging a network of professionals and organizations with expertise in your field, Dawdle Product Consultants make meaningful connections that align with your product's strengths.
                </p>
              </div>
            </div>

            {/* Square 2 */}
            <div className="square hover-effect transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-3xl">
              <div className="content p-8 items-center flex flex-col justify-center gap-4 ">
              <img src={connections} alt="" />
                <h2 className="text-xl font-bold mb-2">Direct Enterprise Partnerships</h2>
                <p className="text-gray-700">
                  Dawdle partners directly with enterprises actively seeking specific solutions, matching your product to clients ready to benefit from its unique capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* 2nd heading */}
          <div className="flex flex-col relative z-10 text-center items-center content-center justify-center align-middle self-center">
            <h1 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-brandSecondary mb-4 mt-8 md:mt-16 leading-9 md:leading-tight lg:leading-tight">
              <span className="poppins">Key Benefits for</span> <span className="font-['Libre_Baskerville'] italic text-brandPrimary">Solution Providers</span>
            </h1>

            {/* Animated 3 cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-48 mx-auto mt-12  items-center justify-center">
              <div className="h-44 flex justify-center w-80">
                <HoverCard
                  title="Lower customer churn, increasing lifetime value"
                  subtitle="Manage profile"
                  Icon={Growth}
                />
              </div>
              <div className="h-44 flex justify-center w-80">
                <HoverCard
                  title="Shorter sales cycles, fueling growth"
                  subtitle="Manage profile"
                  Icon={drop}
                />
              </div>
              <div className="h-44 flex justify-center w-80">
                <HoverCard
                  title="Lowered acquisition costs and optimized ROI"
                  subtitle="Manage profile"
                  Icon={speed}
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