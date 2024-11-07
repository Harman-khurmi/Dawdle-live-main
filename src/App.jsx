import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ConnectRight from './sections/ConnectRight'
import Provide from './sections/Provide'
import Solutions from './sections/Solutions'
import Consultant from './sections/Consultant'
import TrustedBy from './sections/TrustedBy'
import Footer from '../src/components/Footer'
import SmoothScroll from './components/SmoothScroll'
// import Wrapper from './components/Wrapper'
// import './App.css'
const App = () => {
  return (
    <>

      {/* <SmoothScroll /> */}
      <Navbar />
      <Hero />
      <ConnectRight />
      <Provide />
      <Solutions />
      <Consultant />
      <TrustedBy />
      <Footer />


    </>
  )
}

export default App
