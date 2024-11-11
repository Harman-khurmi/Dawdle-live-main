import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import ConnectRight from './sections/ConnectRight'
import Provide from './sections/Provide'
import Solutions from './sections/Solutions'
import Consultant from './sections/Consultant'
import TrustedBy from './sections/TrustedBy'
import Footer from '../src/components/Footer'
import FormPopup from './components/FormPopup';
import ConfirmationPopup from './components/ConfirmationPopup';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (showForm || showConfirmation) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showForm, showConfirmation]);

  const openForm = () => setShowForm(true);

  const closePopups = () => {
    setShowForm(false);
    setShowConfirmation(false);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
    setShowForm(false);
    setShowConfirmation(true);

  };

  // reset

  return (
    <>


      <Navbar />
      <Hero />
      <ConnectRight />
      <Provide />
      <div className="relative">
        <Solutions onButtonClick={openForm} />
        <FormPopup show={showForm} onClose={() => setShowForm(false)} onSubmit={handleFormSubmit} />
        <ConfirmationPopup show={showConfirmation} onClose={closePopups} />
      </div>
      <Consultant />
      <TrustedBy />
      <Footer />


    </>
  )
}

export default App
