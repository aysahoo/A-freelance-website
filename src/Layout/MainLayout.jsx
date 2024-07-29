// Import the React library
import React from 'react';
// Import the Outlet component from react-router-dom to render matched child routes
import { Outlet } from 'react-router-dom';
// Import the Navbar component
import Navbar from '../components/Navbar';
// Import the ToastContainer component from react-toastify for displaying toast notifications
import { ToastContainer } from 'react-toastify';
// Import the CSS for react-toastify
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
      {/* Render the Navbar component */}
      <Navbar />
      {/* Render the matched child route */}
      <Outlet />
      {/* Render the ToastContainer for toast notifications */}
      <ToastContainer />
    </>
  )
}

// Export the MainLayout component as the default export
export default MainLayout
