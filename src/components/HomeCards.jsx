// Import the Link component from react-router-dom for navigation
import { Link } from 'react-router-dom'
// Import the React library
import React from 'react'
// Import the Card component
import Card from './Cards'

// Define the Homecards functional component
const Homecards = () => {
  return (
    <div>
      {/* Section for Developers and Employers */}
      <section className="py-4">
        <div className="container-xl lg:container m-auto">
          {/* Grid layout for the cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            {/* Card for Developers */}
            <Card>
              {/* Card title */}
              <h2 className="text-2xl font-bold">For Developers</h2>
              {/* Card description */}
              <p className="mt-2 mb-4">
                Browse our React jobs and start your career today
              </p>
              {/* Link to browse jobs */}
              <Link
                to="/jobs"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Browse Jobs
              </Link>
            </Card>
            {/* Card for Employers with custom background */}
            <Card bg='bg-indigo-100'>
              {/* Card title */}
              <h2 className="text-2xl font-bold">For Employers</h2>
              {/* Card description */}
              <p className="mt-2 mb-4">
                List your job to find the perfect developer for the role
              </p>
              {/* Link to add a job */}
              <Link
                to="/add-job"
                className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
              >
                Add Job
              </Link>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

// Export the Homecards component as the default export
export default Homecards