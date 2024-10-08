import React, { useContext, useState } from 'react';
import logo from '../../assets/logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaCartPlus } from 'react-icons/fa';
import Cart from '../Content/Cart';
import Context from '../../context';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const context = useContext(Context);
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
      navigate('/searchProduct');
    }
  };

  return (
    <nav className="border-b border-gray-200 bg-white shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
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
          className={`w-full md:flex md:items-center md:space-x-8 md:w-auto ${
            isOpen ? 'block' : 'hidden'
          }`}
          id="navbar-hamburger"
        >
          <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 md:flex-row md:mt-0 md:bg-transparent dark:md:bg-transparent">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-gray-700 rounded dark:bg-gray-600 md:text-gray-900 md:bg-transparent dark:md:text-black transition duration-200 hover:bg-gray-600"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:text-white md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:text-white md:hover:bg-transparent dark:hover:bg-gray-700 dark:hover:text-white transition duration-200"
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
                className="p-3 pl-10 pr-10 w-full text-sm text-gray-900 bg-gray-100 rounded-full border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-200"
              />
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-900 dark:text-gray-500">
                <FaSearch className="w-5 h-5" />
              </button>
            </div>
            <Link to={"/cart"}>
            <button

              className=" text-3xl mt-1 text-gray-900"
            >
              <FaCartPlus />
              {/* Add a badge for item count */}
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full px-1">
              {context?.cartProductCount}
              </span>
            </button>
            </Link>
          </div>
        </div>

        <div className={`md:hidden w-full ${isOpen ? 'block' : 'hidden'}`}>
  <div className="flex items-center p-2 relative">
    <input
      onChange={handleSearch}
      type="text"
      placeholder="Search..."
      className="w-full p-3 pl-10 pr-10 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200"
    />
    <button className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300">
      <FaSearch className="w-5 h-5" />
    </button>

    <button
      onClick={toggleCartOffcanvas}
      className="absolute right-3 top-1/2 transform -translate-y-1/2"
    >
      <FaCartPlus className="text-3xl text-gray-900 cursor-pointer" />
    </button>
  </div>
</div>

      </div>

      {/* Optional Cart Offcanvas Component */}
      {showCart && (
        <Cart show={showCart} toggleOffcanvas={toggleCartOffcanvas} />
      )}
    </nav>
  );
};

export default Navbar;
