// Import the NavLink component from react-router-dom for navigation
import { NavLink } from 'react-router-dom';
// Import the React library
import React from 'react';
// Import the logo image
import logo from '../assets/react-logo-1.png';

// Define the Navbar functional component
const Navbar = () => {
  // Function to determine the class for active and inactive links
  const LinkClass = ({ isActive }) => 
    isActive 
      ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2' 
      : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

  return (
    <div>
      {/* Navigation bar */}
      <nav className="bg-indigo-700 border-b border-indigo-500">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* Logo */}
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img
                  className="h-10 w-auto"
                  src={logo}
                  alt="React Jobs"
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  React Jobs
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  {/* Navigation links */}
                  <NavLink to="/" className={LinkClass}>Home</NavLink>
                  <NavLink to="/Jobs" className={LinkClass}>Jobs</NavLink>
                  <NavLink to="/add-job" className={LinkClass}>Add Job</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Export the Navbar component as the default export
export default Navbar;

