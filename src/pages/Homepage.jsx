// Importing the Hero component
import Hero from '../components/Hero';
// Importing the HomeCards component
import HomeCards from '../components/HomeCards';
// Importing the JobListings component
import JobListings from '../components/JobListings';
// Importing the ViewAllJobs component
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      {/* Rendering the Hero component */}
      <Hero />
      {/* Rendering the HomeCards component */}
      <HomeCards />
      {/* Rendering the JobListings component with isHome prop set to true */}
      <JobListings isHome={true} />
      {/* Rendering the ViewAllJobs component */}
      <ViewAllJobs />
    </>
  );
};

export default HomePage;