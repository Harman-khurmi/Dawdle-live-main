import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import logo from "../assets/Logo.svg";
import { navItems } from "../constants";
import arrowLink from "../assets/LinkArrow.svg";

import { fadeIn } from '../variants'

const Navbar = () => {
  const [mobileSideOpen, setMobileSideOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileSideOpen(!mobileSideOpen);
  };

  // Animation variants
  const menuVariants = {
    open: { opacity: 1, scaleY: 1, transition: { staggerChildren: 0.1 } },
    closed: { opacity: 0, scaleY: 0, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  // for nav hide on scroll
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 100) {
      setHidden(true);
    }
    else {
      setHidden(false);
    }
  });


  // onclick navigation
  const handleClick = () => {
    window.location.href = '/'; // Replace with your target URL or path
  };
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: '-100%' },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 py-3 md:py-3 backdrop-blur-lg border-b border-neutral-300 mx-auto">
      <div className="container lg:px-28 md:px-10 px-6 mx-auto relative text-lg font-medium">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <motion.img
              variants={fadeIn("up", 0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0 }}
              className="py-2  h-11 md:h-12 lg:h-14 cursor-pointer" src={logo} alt="logo" onClick={handleClick} />
          </div>
          <motion.ul
            variants={fadeIn("up", 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
                <span>
                  <img src={arrowLink} alt="" />
                </span>
              </li>
            ))}
          </motion.ul>
          <div className="lg:hidden flex">
            <button className="text-brandSecondary" onClick={toggleNavbar}>
              <motion.div
                animate={{ rotate: mobileSideOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileSideOpen ? <X /> : <Menu />}
              </motion.div>
            </button>
          </div>
        </div>
        <motion.div
          initial="closed"
          animate={mobileSideOpen ? "open" : "closed"}
          variants={menuVariants}
          className="fixed right-0 z-20 bg-bgWhite w-full p-10 mt-3 flex flex-col items-center lg:hidden origin-top"
        >
          <ul>
            {navItems.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center gap-2 py-2"
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg"
                >
                  {item.label}
                </a>
                <span>
                  <img src={arrowLink} alt="" />
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
