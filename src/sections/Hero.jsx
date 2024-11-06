// import React from 'react';
// import networkBg from '../assets/networkBg.svg';
// import arrowBtn from '../assets/arrowBtn.svg';
// import heroCards from '../assets/heroCards.svg';
// const Hero = () => {
//   return (
//     <section className="relative h-auto pb-16 flex justify-center w-full overflow-y-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center w-full h-full"
//         style={{
//           backgroundImage: `url(${networkBg})`,
//           opacity: 1,
//         }}
//       ></div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white to-[#625CF9] opacity-80"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center p-3 max-w-4xl mx-auto">
//         <h1 className="lg:text-5xl md:text-4xl text-3xl xs:text-2xl font-semibold text-brandSecondary mb-4 mt-8 md:mt-16 leading-9 md:leading-tight lg:leading-tight">
//           <span className='poppins'>Streamlining Connections Between Technology</span> <span className="font-['Libre_Baskerville'] italic text-brandPrimary">Solution Providers</span> and <span className="font-['Libre_Baskerville'] italic text-brandPrimary">Enterprise Clients</span>
//         </h1>
//         <p className="text-sm xs:text-xs font-medium md:text-lg text-brandSecondary px-4 lg:px-0 mt-6">
//           Globally, 42% of technology providers struggle to generate demand, while 60% of enterprises experience buyer regret after investing in solutions that miss the mark. Dawdle bridges this divide by connecting businesses with the solutions they truly need, cutting down on churn and enabling sustainable growth.
//         </p>

//         {/* button */}
//         <div className='mt-6 h-16 items-center w-full flex justify-center'>
//           <button
//             // onClick={scrollToComponent}
//             className='xs:h-10 h-12 md:h-14 xs:w-52 w-60 md:w-64 lg:w-72 flex justify-between font-medium bg-brandPrimary items-center rounded-full pl-4 pr-1 text-bgWhite transition-all duration-300 ease-in-out transform hover:bg-bgWhite hover:text-brandPrimary hover:shadow-lg hover:scale-105'
//           >
//             <h3 className='xs:text-sm text-md md:text-lg lg:text-xl transition-all duration-100 ease-in-out'>
//               Learn about Dawdle
//             </h3>
//             <div className='flex rounded-full content-center justify-center items-center text-brandSecondary bg-bgWhite md:h-12 md:w-12 h-10 xs:h-8 xs:w-8 w-10 transition-all duration-100 ease-in-out '>
//               <img

//                 className='flex content-center justify-center items-center transition-transform duration-300 ease-in-out xs:h-3 '
//                 src={arrowBtn}
//                 alt="arrow"
//               />
//             </div>
//           </button>
//         </div>
//         {/* herocards */}
//         <div className='items-baseline justify-end align-bottom content-end'>
//           <img src={heroCards} alt="" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from 'react';
import networkBg from '../assets/networkBg.svg';
import arrowBtn from '../assets/arrowBtn.svg';
import heroCards from '../assets/heroCards.svg';

const Hero = () => {
  return (
    <section className="relative h-136 md:h-148 lg:h-148 pb-16 flex justify-center w-full overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: `url(${networkBg})`,
          opacity: 1,
        }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#625CF9] opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center p-3 max-w-4xl mx-auto items-center flex flex-col">
        <h1 className="lg:text-5xl md:text-4xl text-3xl xs:text-2xl font-semibold text-brandSecondary mb-4 mt-8 md:mt-16 leading-9 md:leading-tight lg:leading-tight">
          <span className="poppins">
            Streamlining Connections Between Technology
          </span>{' '}
          <span className="font-['Libre_Baskerville'] italic text-brandPrimary">
            Solution Providers
          </span>{' '}
          and{' '}
          <span className="font-['Libre_Baskerville'] italic text-brandPrimary">
            Enterprise Clients
          </span>
        </h1>
        <p className="text-sm xs:text-xs font-medium md:text-lg text-brandSecondary px-4 lg:px-0 mt-6">
          Globally, 42% of technology providers struggle to generate demand,
          while 60% of enterprises experience buyer regret after investing in
          solutions that miss the mark. Dawdle bridges this divide by connecting
          businesses with the solutions they truly need, cutting down on churn
          and enabling sustainable growth.
        </p>

        {/* Button */}
        <div className="mt-6 h-16 items-center w-full flex justify-center">
          <button
            // onClick={scrollToComponent}
            className="xs:h-10 h-12 md:h-14 xs:w-52 w-60 md:w-64 lg:w-72 flex justify-between font-medium bg-brandPrimary items-center rounded-full pl-4 pr-1 text-bgWhite transition-all duration-300 ease-in-out transform hover:bg-bgWhite hover:text-brandPrimary hover:shadow-lg hover:scale-105"
          >
            <h3 className="xs:text-sm text-md md:text-lg lg:text-xl transition-all duration-100 ease-in-out">
              Learn about Dawdle
            </h3>
            <div className="flex rounded-full content-center justify-center items-center text-brandSecondary bg-bgWhite md:h-12 md:w-12 h-10 xs:h-8 xs:w-8 w-10 transition-all duration-100 ease-in-out ">
              <img
                className="flex content-center justify-center items-center transition-transform duration-300 ease-in-out xs:h-3"
                src={arrowBtn}
                alt="arrow"
              />
            </div>
          </button>
        </div>

        {/* Hero Cards Image */}
        <div className="mt-24 md:mt-60 lg:mt-64 absolute top-128 flex justify-center transform -translate-y-1/2 w-full max-w-4xl overflow-y-hidden">
          <img
            className="w-full max-w-4xl object-contain "
            src={heroCards}
            alt="Hero Cards"
            style={{ maxHeight: '100vh' }} // Adjust maxHeight if needed
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
