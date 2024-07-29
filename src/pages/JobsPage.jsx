// Importing React library
import React from 'react';
// Importing JobListings component from the components directory
import JobListings from '../components/JobListings';

const JobsPage = () => {
  return (
    // Main section for the Jobs page with background color and padding
    <section className='bg-blue-50 px-4 py-6'>
      {/* Rendering the JobListings component */}
      <JobListings />
    </section>
  );
};

export default JobsPage;
