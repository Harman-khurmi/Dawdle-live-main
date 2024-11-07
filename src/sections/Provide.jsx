import React from 'react'
import HoverCard from '../components/HoverCard';
// import growth from '../assets/benifits/growth.svg';
import Growth from '/src/assets/benifits/growth.svg'
import drop from '/src/assets/benifits/drop.svg'
import speed from '/src/assets/benifits/speed.svg'

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* Square 1 */}
            <div className="square hover-effect transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div className="content p-8">
                <h2 className="text-xl font-bold mb-2">Square 1</h2>
                <p className="text-gray-700">
                  This is the content inside the first square. Hover to see the effect.
                </p>
              </div>
            </div>

            {/* Square 2 */}
            <div className="square hover-effect transition-transform duration-300 ease-in-out transform hover:scale-105">
              <div className="content p-8">
                <h2 className="text-xl font-bold mb-2">Square 2</h2>
                <p className="text-gray-700">
                  This is the content inside the second square. Hover to see the effect.
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