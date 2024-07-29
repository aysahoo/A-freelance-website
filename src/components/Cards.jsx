// Import the React library
import React from 'react'

// Define the Card functional component
// It accepts children (content to be displayed inside the card) and an optional bg prop for background color
const Card = ({ children, bg = 'bg-gray-100' }) => {
  return (
    // Apply the background color, padding, rounded corners, and shadow to the card
    <div className={`${bg} p-6 rounded-lg shadow-md`}>
      {/* Render the children content inside the card */}
      {children}
    </div>
  )
}

// Export the Card component as the default export
export default Card;
