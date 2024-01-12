import React, { useState } from 'react';
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { Desktop, Mobile } from '../utils/MediaQuery';

function Footer() {
  const [emailSent, setEmailSent] = useState(false);

  const handleSendEmail = () => {
    setEmailSent(true);
  };

  return (
    <>
      <Desktop>
        <div id='footer' className='Footer mt-4 mb-4 mx-44'>
          <div className='Footer1 flex flex-row mb-2'>
            <div className='font-bold mr-4'>Follow Us</div>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='font-bold mx-2'>
              <FaInstagram size={20} className='h-5 w-5' />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='font-bold mx-2'>
              <FaGithub size={20} className='h-5 w-5' />
            </a>
          </div>
          <div className='border-b-2 my-4 w-au'></div>
          <div className="flex flex-col">
            <input
              className="border border-white py-3 px-4 w-full mb-2"
              placeholder="Send us an email"
              name="send"
              type="text"
              required
            />
            <button
              className="bg-footer border-2 text-white w-fit py-3 px-4 rounded-full ml-auto"
              onClick={handleSendEmail}
            >
              Send
            </button>
            {emailSent && <div className="text-green-500 mt-2">Email sent!</div>}
          </div>
          <div className='mr-4 my-3 text-[12px]'>
            I accept Google's Terms and Conditions and acknowledge that my information will be used in accordance with Google's Privacy Policy.
          </div>
          <div className='border-b-2 my-4 w-au'></div>
          <div className='Footer1 flex flex-row pb-7'>
            <div className='font-bold mr-4'>Z-Sharp</div>
            <a href="/privacy" className='font-light mx-2'>Privacy</a>
            <a href="/terms" className='font-light mx-2'>Terms</a>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div id='footer' className='Footer mt-4 mb-4 mx-8'>
          <div className='Footer1 flex flex-row mb-2'>
            <div className='font-bold mr-4'>Follow Us</div>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className='font-bold mx-2'>
              <FaInstagram size={20} className='h-5 w-5' />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='font-bold mx-2'>
              <FaGithub size={20} className='h-5 w-5' />
            </a>
          </div>
          <div className='border-b-2 my-4 w-au'></div>
          <div className="flex flex-col">
            <input
              className="border border-white py-3 px-4 w-full mb-2"
              placeholder="Send us an email"
              name="send"
              type="text"
              required
            />
            <button
              className="bg-footer border-2 text-white w-fit py-3 px-4 rounded-full ml-auto"
              onClick={handleSendEmail}
            >
              Send
            </button>
            {emailSent && <div className="text-green-500 mt-2">Email sent!</div>}
          </div>
          <div className='mr-4 my-3 text-[8px]'>
            I accept Google's Terms and Conditions and acknowledge that my information will be used in accordance with Google's Privacy Policy.
          </div>
          <div className='border-b-2 my-4 w-au'></div>
          <div className='Footer1 flex flex-row pb-7'>
            <div className='font-bold mr-4'>Z-Sharp</div>
            <a href="/privacy" className='font-light mx-2'>Privacy</a>
            <a href="/terms" className='font-light mx-2'>Terms</a>
          </div>
        </div>
      </Mobile>
    </>
  );
}

export default Footer;
