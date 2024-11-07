import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../variants'

const TrustedMarquee = () => {

  const upperMarquee = [
    "../assets/Trusted/1.png",
    "../assets/Trusted/2.png",
    "../assets/Trusted/3.png",
    "../assets/Trusted/4.png",
    "../assets/Trusted/5.png",
    "../assets/Trusted/6.png",
    "../assets/Trusted/7.png",
    "../assets/Trusted/8.png",
    "../assets/Trusted/9.png",
    "../assets/Trusted/10.png",
    "../assets/Trusted/11.png",
    "../assets/Trusted/12.png",
    "../assets/Trusted/13.png",
    "../assets/Trusted/14.png",
    "../assets/Trusted/15.jpeg",
    "../assets/Trusted/16.png"
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
        <motion.div initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0 gap-20">
          {upperMarquee.map((image, index) => (
            <div key={index} className='border border-solid border-slate-300 rounded-lg h-16 md:h-20 bg-cover  justify-center items-center content-center'>
              <img className=' w-full h-full bg-center bg-cover p-2' src={image} alt={`company-logo-${index}`} />
            </div>
          ))}
        </motion.div>

        {/* Second marquee */}
        <motion.div initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0 gap-20">
          {upperMarquee.map((image, index) => (
            <div key={index + upperMarquee.length} className='border border-solid border-slate-300 rounded-lg h-16 md:h-20 bg-cover  justify-center items-center content-center'>
              <img className=' w-full h-full bg-center bg-cover p-2' src={image} alt={`company-logo-${index}`} />
            </div>
          ))}
        </motion.div>

      </motion.div>

    </div>
  )
}

export default TrustedMarquee;
