import React, { useState } from 'react';
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Left section with the logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt=" Logo" />
        </Link>

        {/* Hamburger button - Visible on small screens */}
        <button
          onClick={toggleNavbar}
          type="button"
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-hamburger"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation links - Visible on medium and large screens */}
        <div
          className={`w-full md:flex md:items-center md:space-x-8 md:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 md:flex-row md:mt-0 md:bg-transparent dark:md:bg-transparent">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600 md:text-gray-900 md:bg-transparent dark:md:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:text-white md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:text-white md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Search box - Always visible on large screens */}
        <div className="hidden md:block relative">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 pl-4 pr-10 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-2 text-gray-500 dark:text-gray-300">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M15 11a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
