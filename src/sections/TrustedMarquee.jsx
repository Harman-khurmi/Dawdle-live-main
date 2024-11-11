import React from 'react'
import { motion } from "framer-motion";
import { fadeIn } from '../variants'

const TrustedMarquee = () => {

  const upperMarquee = [
    // "/Companies/1.web2",
    // "/Companies/2.web2",
    // "/Companies/3.web2",
    // "/Companies/4.web2",
    // "/Companies/5.web2",
    "/Companies/6.png",
    "/Companies/7.png",
    "/Companies/8.png",
    "/Companies/9.png",
    "/Companies/10.png",
    "/Companies/11.png",
    "/Companies/12.png",
    "/Companies/13.png",
    "/Companies/14.png",
    "/Companies/15.png",
    "/Companies/16.png",
    "/Companies/17.png",
    "/Companies/18.png",
    "/Companies/19.png",
    "/Companies/20.png",
    "/Companies/21.png",
    // "/Companies/22.jpg",
    // "/Companies/23.jpg",
    // "/Companies/24.jpg",
    // "/Companies/25.jpg",
    // "/Companies/26.jpg",
    // "/Companies/27.jpg",
    // "/Companies/28.jpg",
    // "/Companies/29.jpg",
    // "/Companies/30.jpg",
    // "/Companies/31.jpg",
    // "/Companies/32.jpg",
    // "/Companies/33.jpg",
    // "/Companies/34.jpg",
    // "/Companies/35.jpeg",
    // "/Companies/36.jpeg",
    // "/Companies/37.jpeg",
    // "/Companies/38.jpeg",
    // "/Companies/39.jpeg",
    // "/Companies/40.jpeg",
    // "/Companies/41.jpeg",
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
              <img className=' w-full h-full bg-center object-cover bg-cover p-2' src={image} alt={`company-logo-${index}`} />
            </div>
          ))}
        </motion.div>

        {/* Second marquee */}
        <motion.div initial={{ x: '0' }} animate={{ x: '-100%' }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }} className="flex flex-shrink-0 gap-20">
          {upperMarquee.map((image, index) => (
            <div key={index + upperMarquee.length} className='border border-solid border-slate-300 rounded-lg h-16 md:h-20 bg-cover  justify-center items-center content-center'>
              <img className=' w-full h-full bg-center object-cover bg-cover p-2' src={image} alt={`company-logo-${index}`} />
            </div>
          ))}
        </motion.div>

      </motion.div>

    </div>
  )
}

export default TrustedMarquee;
