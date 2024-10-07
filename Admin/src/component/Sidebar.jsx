import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 p-4 bg-gray-200 border-r border-gray-300 shadow-md">
        <nav>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Menu</h2>
          <Link
            to={'product'}
            className="block px-4 py-2 mb-2 text-gray-700 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Product
          </Link>
          <Link
            to={'contact'}
            className="block px-4 py-2 text-gray-700 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
            Contact
          </Link>
          <Link
            to={'aboutUpdate'}
            className="block px-4 py-2 text-gray-700 rounded-md hover:bg-blue-500 hover:text-white transition duration-300"
          >
          About Update
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
