
// Import the React library
import React from 'react'

// Import the ReactDOM library for rendering React components to the DOM
import ReactDOM from 'react-dom/client'

// Import the main App component
import App from './App.jsx'

// Import the CSS file for styling
import './index.css'

// Create a root element and render the App component inside it
ReactDOM.createRoot(document.getElementById('root')).render(
  // Enable strict mode to highlight potential problems in the application
  <React.StrictMode>
    {/* Render the main App component */}
    <App />
  </React.StrictMode>,
)
