// Import necessary modules and components from 'react-router-dom' and 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import React from 'react';

// Import custom components and pages
import Homepage from './pages/Homepage';
import MainLayout from './Layout/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';




const App = () => {
  //Add new job
  const addJob = async(newJob) => {
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application.json'
      },
      body: JSON.stringify(newJob),
    });
    return;

  };

  //Delete Job
  const deleteJob = async(id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
    
  }
  //Update Job
  const updateJob = async(job) => {
      const res = await fetch(`/api/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application.json'
        },
        body: JSON.stringify(job),
  
      });
      return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element = {<MainLayout />}>
      <Route index element = {<Homepage />} />
      <Route path='/Jobs' element = {<JobsPage />} />
      <Route path='/add-job' element = {<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/edit-job/:id' element = {<EditJobPage updateJobSubmit={updateJob} />}loader = {jobLoader} />
      <Route path='/Jobs/:id' element = {<JobPage  deleteJob = {deleteJob}  />}loader = {jobLoader} />
      <Route path='*' element = {<NotFoundPage />} />
      
  
    </Route>
    )
  ); 
  return <RouterProvider router={router} />;
};

export default App ;
