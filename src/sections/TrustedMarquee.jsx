import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../variants'

const TrustedMarquee = () => {

  const upperMarquee = [
    // "/Companies/1.web2",
     "/Companies/1.svg",
     "/Companies/2.svg",
     "/Companies/3.svg",
     "/Companies/4.svg",
     "/Companies/5.svg",
     "/Companies/6.svg",
     "/Companies/7.svg",
     "/Companies/8.svg",
     "/Companies/9.svg",
     "/Companies/10.svg",
     "/Companies/11.svg",
     "/Companies/12.svg",
     "/Companies/13.svg",
     "/Companies/14.svg",
     "/Companies/15.svg",
     "/Companies/16.svg",
     "/Companies/17.svg",
     "/Companies/18.svg",
     "/Companies/19.svg",
     "/Companies/20.svg",
     "/Companies/21.svg",
     "/Companies/22.svg",
     "/Companies/23.svg",

  ];

  return (
    <div className="container w-full mx-auto ">

      {/* top marquee */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="w-full flex MyGradient gap-16">

        {/* First marquee */}
        <motion.div initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0 gap-20">
          {upperMarquee.map((image, index) => (
            <div key={index} className='border border-solid border-slate-300 rounded-lg h-16 md:h-20 bg-cover  justify-center items-center content-center'>
              <img className='h-full p-2' src={image} alt={`company-logo-${index}`} />
            </div>
          ))}
        </motion.div>

        {/* Second marquee */}
        <motion.div initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0 gap-20">
          {upperMarquee.map((image, index) => (
            <div key={index + upperMarquee.length} className='border border-solid border-slate-300 rounded-lg h-16 md:h-20 bg-cover  justify-center items-center content-center'>
              <img className='h-full p-2' src={image} alt={`company-logo-${index}`} />
            </div>
          ))}
        </motion.div>

      </motion.div>

    </div>
  )
}

export default TrustedMarquee;
