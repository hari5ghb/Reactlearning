import React from 'react';
import './index.css';
import root from './assets/foot.jpg';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export const App = () => {
  return (
    <>
      {/* Main Section with background image */}
      <section className="w-full min-h-screen bg-cover bg-center relative">
        {/* Blurred background image with reduced transparency */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${root})`,
           // Stronger blur effect
            zIndex: -1, // Keeps the background behind the content
            backgroundSize: 'cover',
            backgroundPosition: 'center',
           // Dark overlay for better readability
          }}
        ></div>

        {/* Content Sections */}
        <section className="p-10 flex justify-around items-center h-full relative z-10">
  {/* Form Section with solid background for content visibility */}
  <div className="max-w-md w-full bg-opacity-40 p-8 shadow-lg rounded-lg">
    <form action="" className="space-y-10 w-full">
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block my-3 text-sm font-medium text-white">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Phone Field */}
      <div>
        <label htmlFor="phone" className="block my-3 text-sm font-medium text-white">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

{/* Dropdown Field */}
<div>
  <label htmlFor="options" className="my-3 block text-sm font-medium text-white">
    Select Options
  </label>
  <select
    id="options"
    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
  >
    <option value="entrepreneur-policy-framework">Entrepreneur Policy Framework</option>
    <option value="business-process-framework">Business Process Framework</option>
    <option value="financial-assistance-scheme">Financial Assistance Scheme</option>
    <option value="marketing-assistance">Marketing Assistance</option>
    <option value="other">Other</option>
  </select>
</div>



      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Submit
        </button>
      </div>
    </form>
  </div>

{/* "Need Assistance?" Section without background */}
<div className="max-w-md w-full p-8 rounded-lg shadow-lg relative">
 
  {/* Button */}
  <div className="text-center group relative">
    <button className="w-full max-w-xs p-4 bg-indigo-600 text-white rounded-lg text-2xl hover:bg-indigo-700 transition duration-300">
      Schedule a Call
    </button>
    
    {/* Hover Box with Sentence */}
    <div className="absolute inset-x-0 top-full mt-4 p-4 bg-white text-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <h3 className="font-bold text-xl mb-2">Need Assistance?</h3>
      <p> We're here to help you! If you have any questions or need support, feel free to schedule a call with us!</p>
    </div>
  </div>
</div>


</section>



        {/* Footer Section */}
        <footer className="bg-black text-white py-16">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="flex justify-between items-center space-x-10">
              {/* Navigation Links */}
              <div className="space-y-4 font-semibold text-xl text-red-500">
                <a href="#home" className="block hover:text-white transition duration-300">Home</a>
                <a href="#services" className="block hover:text-white transition duration-300">Services</a>
                <a href="#about" className="block hover:text-white transition duration-300">About</a>
                <a href="#contact" className="block hover:text-white transition duration-300">Contact</a>
              </div>

              <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold text-white mb-10 p-10">Our Partners</h2>
        <div className="flex justify-between items-center space-x-16 font-semibold text-xl text-white">
          {/* Google */}
          <div className="flex items-center space-x-4">
            <p>
              <span style={{ color: '#4285F4' }}>G</span>
              <span style={{ color: '#EA4335' }}>o</span>
              <span style={{ color: '#FBBC05' }}>o</span>
              <span style={{ color: '#4285F4' }}>g</span>
              <span style={{ color: '#34A853' }}>l</span>
              <span style={{ color: '#EA4335' }}>e</span>
            </p>
          </div>

          {/* Microsoft */}
          <div className="flex items-center space-x-4">
            <p>
              <span style={{ color: '#F25022' }}>■</span>
              <span style={{ color: '#7FBA00' }}>■</span>
              <span style={{ color: '#00A4EF' }}>■</span>
              <span style={{ color: '#FFB900' }}>■</span> Microsoft
            </p>
          </div>

          {/* Amazon */}
          <div className="flex items-center space-x-4">
            <p>
              <span style={{ color: '#FF9900' }}>A</span>
              <span style={{ color: '#232F3E' }}>m</span>
              <span style={{ color: '#232F3E' }}>a</span>
              <span style={{ color: '#FF9900' }}>z</span>
              <span style={{ color: '#232F3E' }}>o</span>
              <span style={{ color: '#232F3E' }}>n</span>
            </p>
          </div>

          {/* Apple */}
          <div className="flex items-center space-x-4">
            <p>
              <span style={{ color: '#999999' }}>A</span>
              <span style={{ color: '#999999' }}>p</span>
              <span style={{ color: '#999999' }}>p</span>
              <span style={{ color: '#999999' }}>l</span>
              <span style={{ color: '#999999' }}>e</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-6">
  <a
    href="https://www.facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110 "
  >
    <FaFacebook size={30} />
  </a>
  <a
    href="https://www.twitter.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-600 transition duration-300 transform hover:scale-110 "
  >
    <FaTwitter size={30} />
  </a>
  <a
    href="https://www.instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-pink-500 hover:text-pink-700 transition duration-300 transform hover:scale-110 "
  >
    <FaInstagram size={30} />
  </a>
  <a
    href="https://www.linkedin.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-700 hover:text-blue-400 transition duration-300 transform hover:scale-110 "
  >
    <FaLinkedin size={30} />
  </a>
  <a
    href="https://www.github.com"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white  transform hover:scale-110"
  >
    <FaGithub size={30} />
  </a>
</div>

            </div>
          </div>
          <div className="flex justify-center">
  <hr className="w-4/5 border-t-2 border-white mx-auto my-7" />
</div>

          <div className="text-center text-blue-600 py-4 mt-12">
            <p>&copy; {new Date().getFullYear()} digiFynix. All Rights Reserved.</p>
          </div>
        </footer>
      </section>
    </>
  );
};
