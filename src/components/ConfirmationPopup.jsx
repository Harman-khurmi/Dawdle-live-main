import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

function ConfirmationPopup({ show, onClose }) {
  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="bg-brandPrimary/20 text-brandSecondary max-h-screen overflow-y-auto backdrop-blur fixed inset-0 z-50 grid place-items-center p-3 xs:p-4"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg w-full max-w-sm shadow-2xl shadow-brandPrimary/80 text-center relative"
          >
            <FiCheckCircle className="text-brandPrimary text-5xl mx-auto mb-4" />
            <p className="text-lg mb-4 px-4">We will send you a list of solutions to your email.</p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-brandPrimary text-white rounded-xl hover:bg-brandPrimary/80"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ConfirmationPopup;
