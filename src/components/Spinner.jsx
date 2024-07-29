// Import the React library
import React from 'react';
// Import the ClipLoader component from react-spinners
import ClipLoader from 'react-spinners/ClipLoader';

// Define the CSS override for the spinner
const override = {
    display: 'block',
    margin: '100px auto'
}

// Define the Spinner functional component
const Spinner = ({ loading }) => {
  return (
    // Render the ClipLoader component with specified props
    <ClipLoader
        color='#4338ca' // Set the color of the spinner
        loading={loading} // Control the loading state
        cssOverride={override} // Apply the CSS override
        size={150} // Set the size of the spinner
    />
  )
}

// Export the Spinner component as the default export
export default Spinner