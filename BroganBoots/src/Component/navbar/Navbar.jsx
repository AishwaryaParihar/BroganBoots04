import React, { useState } from 'react';
import logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import Cart from "../Content/Cart"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [showCart, setShowCart] = useState(false); 
  const navigate = useNavigate();

  const toggleCartOffcanvas = () => {
    setShowCart(!showCart);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);

    if (value) {
      navigate(`/search?q=${value}`);
    } else {
      navigate("/searchProduct");
    }
  };

  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-12" alt="Logo" />
        </Link>

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

        <div
          className={`w-full md:flex md:items-center md:space-x-8 md:w-auto ${isOpen ? 'block' : 'hidden'}`}
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

        <div className="hidden md:block relative">
          <div className="flex gap-3">
            <div className="relative">
              <input
                onChange={handleSearch}
                type="text"
                placeholder="Search..."
                className="p-2 pl-4 pr-10 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-2 text-gray-500 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.742 13.063a6.45 6.45 0 1 1 .001-12.903 6.45 6.45 0 0 1-.001 12.903zm-1.4-1.4a5.45 5.45 0 1 0-.03-.068c.047.038.094.078.138.118a5.444 5.444 0 0 0 .198.267l.024.027 1.54 1.54c.17.17.439.17.609 0a.425.425 0 0 0 0-.609l-1.538-1.539z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <button
              className="flex items-center p-2 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              onClick={toggleCartOffcanvas}
            >
              <FaCartPlus className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      
      <Cart show={showCart} toggleOffcanvas={toggleCartOffcanvas} />
    </nav>
  );
};

export default Navbar;
