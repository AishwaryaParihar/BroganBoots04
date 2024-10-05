import React from 'react';
// import { Link, Outlet } from 'react-router-dom';

import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="">
          <Link
            to={'product'}
            className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
          >
            product
          </Link>
          <Link
            to={'contact'}
            className="px-2 py-1 hover:bg-slate-100 hover:text-black hover:font-semibold"
          >
            contact
          </Link>
        </div>
        <div className="">
          |<Outlet />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
