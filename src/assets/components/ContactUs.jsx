// import React from 'react'
// import Navbar from './Navbar'

// function ContactUs() {
//   return (
//     <div><Navbar /><div></div>
    
//     <div>Email:sukhmoneyhealings@gmail.com</div>
//     <div>Phone number:</div>
//     <div>Facebook:</div>
//     <div>Instagram:</div>
    
//     </div>
//   )
// }
// export default ContactUs
import React from 'react';
import Navbar from './Navbar';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-4/5 md:w-1/2 lg:w-1/3">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <p className="text-gray-600">sukhmoneyhealings@gmail.com</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone number:</label>
            <p className="text-gray-600">+91 8728846695</p>
          </div>
          <div className="mb-4 flex items-center">
            <FaFacebookF className="text-blue-600 mr-2" />
            <label className="block text-gray-700 text-sm font-bold mb-2">Facebook:</label>
            <p className="text-gray-600">Your Facebook link here</p>
          </div>
          <div className="mb-4 flex items-center">
            <FaInstagram className="text-pink-600 mr-2" />
            <label className="block text-gray-700 text-sm font-bold mb-2">Instagram:</label>
            <p className="text-gray-600">Your Instagram link here</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
