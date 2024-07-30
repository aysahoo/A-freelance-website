// Import the React library
import React from 'react'
// Import the useState and useEffect hooks from React
import { useState, useEffect } from 'react';
// Import the JobListing component
import JobListing from './JobListing'
// Import the Spinner component
import Spinner from './Spinner';

// Define the JobListings functional component
const JobListings = ({ isHome = false }) => {
    // State to hold the list of jobs
    const [jobs, setJobs] = useState([]);
    // State to manage the loading state
    const [loading, setLoading] = useState(true);   

    // useEffect hook to fetch jobs when the component mounts
    useEffect(() => { 
      // Function to fetch jobs from the API
      const fetchJobs = async () => {
        // Determine the API URL based on the isHome prop
        const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
        try {
          // Fetch the jobs from the API
          const res = await fetch(apiUrl);
          // Parse the response as JSON
          const data = await res.json();
          // Update the jobs state with the fetched data
          setJobs(data);
        } catch (error) {
          // Log any errors that occur during the fetch
          console.log('Error fetching data', error);
        } finally {
          // Set the loading state to false once the fetch is complete
          setLoading(false);
        }
      }

      // Call the fetchJobs function
      fetchJobs();
    }, []) // Empty dependency array means this effect runs once when the component mounts

    return (
      // Section container with background color, padding, and margin
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto"></div>
        {/* Section title */}
        <h2 className="text-3xl font-bold text-green-500 mb-6 text-center">
          Browse Jobs
        </h2>
        
        {/* Show spinner while loading, otherwise show job listings */}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Map over the jobs and render a JobListing for each job */}
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        )}
      </section>
    )
}

// Export the JobListings component as the default export
export default JobListings
