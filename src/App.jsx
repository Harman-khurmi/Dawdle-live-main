import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ConnectRight from './sections/ConnectRight'
import Provide from './sections/Provide'
const App = () => {
  return (
    <>
      <Navbar />
        <Hero />
        <ConnectRight/>
        <Provide/>
      <div className="div max-w-256 mx-auto pt-8  px-6 overflow-x-hidden">
      </div>
    </>
  )
}

export default App
