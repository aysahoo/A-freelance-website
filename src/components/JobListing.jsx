// Import the Link component from react-router-dom for navigation
import { Link } from 'react-router-dom'
// Import the React library
import React from 'react'
// Import the useState hook from React
import { useState } from 'react'

// Define the JobListing functional component
const JobListing = ({ job }) => {
  // State to toggle the full description view
  const [showFullDescription, setShowFullDescription] = useState(false)
  
  // Variable to hold the job description
  let description = job.description;
  
  // If the full description is not shown, truncate it to 90 characters
  if (!showFullDescription) {
    description = description.substring(0, 90) + '...';
  }
  
  return (
    <div>
      {/* Container for the job listing with background, rounded corners, and shadow */}
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            {/* Job type */}
            <div className="text-gray-600 my-2">{job.type}</div>
            {/* Job title */}
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>

          {/* Job description */}
          <div className="mb-5">
            {description}
          </div>
          
          {/* Button to toggle the full description */}
          <button 
            onClick={() => setShowFullDescription((prevState) => !prevState)} 
            className="text-indigo-500 mb-5 hover:text-indigo-600"
          >
            {showFullDescription ? 'Less' : 'More'}
          </button>

          {/* Job salary */}
          <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

          {/* Divider */}
          <div className="border border-gray-100 mb-5"></div>

          {/* Job location and link to read more */}
          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
              <i className="fa-solid fa-location-dot text-lg"></i>
              {job.location}
            </div>
            <Link
              to={`/jobs/${job.id}`}
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Export the JobListing component as the default export
export default JobListing
