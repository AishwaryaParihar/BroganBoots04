import React from 'react';
import { FaFacebook, FaPinterest, FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="social-media-link flex justify-between mt-4">
      <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
        <FaFacebook className="mr-2" /> Share
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
        <BsTwitter className="mr-2" /> Tweet
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
        <FaPinterest className="mr-2" /> Pin it
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
        <AiOutlineMail className="mr-2" /> Mail
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900 flex items-center">
        <FaWhatsapp className="mr-2" /> Whatsapp
      </a>
    </div>
  );
};

export default SocialMedia;
