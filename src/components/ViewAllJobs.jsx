// Import the React library
import React from 'react'
// Import the Link component from react-router-dom for navigation
import { Link } from 'react-router-dom'

// Define the ViewAllJobs functional component
const ViewAllJobs = () => {
  return (
    // Section container with margin, max width, and padding
    <section className='m-auto max-w-lg my-10 px-6'>
      {/* Link to navigate to the jobs page */}
      <Link
        to='/jobs'
        className='block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700'
      >
        View All Jobs
      </Link>
    </section>
  )
}

// Export the ViewAllJobs component as the default export
export default ViewAllJobs
