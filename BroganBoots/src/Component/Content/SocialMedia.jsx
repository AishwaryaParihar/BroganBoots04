import React from 'react';

const SocialMedia = () => {
  return (
    <div className="social-media-link flex justify-between mt-4">
      <a href="#" className="text-gray-700 hover:text-gray-900">
        <span>
          <i className="fa-brands fa-facebook"></i> Share
        </span>
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900">
        <span>
          <i className="fa-brands fa-x-twitter"></i> Tweet
        </span>
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900">
        <span>
          <i className="fa-brands fa-pinterest"></i> Pin it
        </span>
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900">
        <span>
          <i className="fa-solid fa-envelope"></i> Mail
        </span>
      </a>
      <a href="#" className="text-gray-700 hover:text-gray-900">
        <span>
          <i className="fa-brands fa-whatsapp"></i> Whatsapp
        </span>
      </a>
    </div>
  );
};

export default SocialMedia;
