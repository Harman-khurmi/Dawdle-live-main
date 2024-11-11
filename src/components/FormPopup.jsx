import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiAlertCircle } from 'react-icons/fi';

function FormPopup({ show, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    option_selected: ''
  });
  const [errors, setErrors] = useState({});
  const formRef = useRef();

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) newErrors.user_name = 'Name is required';
    if (!formData.user_email.trim() || !/^\S+@\S+\.\S+$/.test(formData.user_email)) newErrors.user_email = 'Valid email is required';
    if (!formData.user_phone.trim() || !/^\d{10}$/.test(formData.user_phone)) newErrors.user_phone = 'Valid 10-digit phone number is required';
    if (!formData.option_selected) newErrors.option_selected = 'Please select an option';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    emailjs
      .sendForm('service_9pfdt36', 'template_2y7htv6', formRef.current, '_PS_U9bl2HcRarjQb')
      .then(
        () => {
          console.log('Email sent successfully!');
          onSubmit(formData);  // Show confirmation popup on success
        },
        (error) => {
          console.error('Email send failed...', error.text);
        }
      );
    // resetForm();
  };

  // reset
  const resetForm = () => {
    setFormData({
      user_name: '',
      user_email: '',
      user_phone: '',
      option_selected: ''
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="bg-brandPrimary/20 text-brandSecondary backdrop-blur fixed inset-0 z-50 grid place-items-center max-h-screen overflow-y-auto xs:p-4 p-3"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-8 rounded-3xl w-full max-w-lg shadow-2xl shadow-brandPrimary/80 relative "
          >
            <FiX
              onClick={() => { onClose(); resetForm(); }}
              className="absolute top-2 right-2 text-3xl md:text-5xl cursor-pointer text-brandPrimary hover:text-red-600 hover:bg-bgWhite rounded-full p-1 md:p-2 "
            />
            <h2 className="text-2xl font-semibold mb-6 text-center">Enter Your Details</h2>
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="mb-4 ">
                <label className="block text-sm font-medium text-brandPrimary">Choose Industry</label>
                <select
                  name="option_selected"
                  value={formData.option_selected}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl focus:outline-none   "
                >
                  <option className='text-xs md:text-sm ' value="" disabled>Select an option</option>
                  <option className='text-xs md:text-sm ' value="Data Management and Analytics">Data Management and Analytics
                  </option>
                  <option className='text-xs md:text-sm ' value="Customer Experience and Engagement">Customer Experience and Engagement
                  </option>
                  <option className='text-xs md:text-sm ' value="Process Automation and Workflow Optimization">Process Automation and Workflow Optimization</option>
                  <option className='text-xs md:text-sm ' value="Sales and Marketing Enablement">Sales and Marketing Enablement
                  </option>
                  <option className='text-xs md:text-sm ' value="Human Resources and Workforce Management">Human Resources and Workforce Management
                  </option>
                  <option className='text-xs md:text-sm ' value="Financial Operations and Compliance">Financial Operations and Compliance</option>
                  <option className='text-xs md:text-sm ' value="Collaboration and Communication">Collaboration and Communication</option>
                  <option className='text-xs md:text-sm ' value="Supply Chain and Inventory Management">Supply Chain and Inventory Management
                  </option>
                  <option className='text-xs md:text-sm ' value="Productivity and Knowledge Management">Productivity and Knowledge Management</option>

                  <option className='text-xs md:text-sm ' value="Cybersecurity and Threat Prevention">Cybersecurity and Threat Prevention
                  </option>
                </select>
                {errors.option_selected && <p className="text-red-500 text-xs">{errors.option_selected}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-brandPrimary">Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl focus:outline-brandPrimary"
                  placeholder="Your name"
                />
                {errors.user_name && <p className="text-red-500 text-xs">{errors.user_name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-brandPrimary">Email</label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl focus:outline-brandPrimary"
                  placeholder="Your email"
                />
                {errors.user_email && <p className="text-red-500 text-xs">{errors.user_email}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-brandPrimary">Phone Number</label>
                <input
                  type="text"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-xl focus:outline-brandPrimary"
                  placeholder="Your phone number"
                />
                {errors.user_phone && <p className="text-red-500 text-xs">{errors.user_phone}</p>}
              </div>
              <div className="flex justify-center gap-10 mt-12">
                <button
                  type="button"
                  onClick={() => { onClose(); resetForm(); }}
                  className="px-6 py-2 bg-brandSecondary text-white rounded-xl hover:bg-brandSecondary/80"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-brandPrimary text-white rounded-xl hover:bg-brandPrimary/80"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FormPopup;
