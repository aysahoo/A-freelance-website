// Import React library
import React from 'react';
// Import useState hook for managing state
import { useState } from 'react';
// Import useNavigate hook for navigation
import { useNavigate } from 'react-router-dom';
// Import toast for displaying notifications
import { toast } from 'react-toastify';

const AddJobPage = ({ addJobSubmit }) => {
    // State variables for form fields
    const [title, setTitle] = useState('');
    const [type, setType] = useState('Full-Time');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [salary, setSalary] = useState('Under $50K');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');

    // Initialize navigate function
    const navigate = useNavigate();

    // Form submission handler
    const SubmitForm = (e) => {
        e.preventDefault();
        
        // Create a new job object with form data
        const newJob = {
            title,
            type,
            location,
            description,
            salary,
            company: {
                name: companyName,
                description: companyDescription,
                contactEmail,
                contactPhone,
            },
        };

        // Call the addJobSubmit function with the new job object
        addJobSubmit(newJob);
        // Display success notification
        toast.success('Job Added');
        // Navigate to the jobs page
        return navigate('/jobs');
    }

    return (
        <>
            <section className="bg-green-50">
                <div className="container m-auto max-w-2xl py-24">
                    <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
                        <form onSubmit={SubmitForm}>
                            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Job Type</label>
                                <select
                                    id="type"
                                    name="type"
                                    className="border rounded w-full py-2 px-3"
                                    required
                                    value={type}
                                    // Update the type state when the select value changes
                                    onChange={(e) => setType(e.target.value)}
                                >
                                    <option value="Full-Time">Full-Time</option>
                                    <option value="Part-Time">Part-Time</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2">Job Listing Name</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    className="border rounded w-full py-2 px-3 mb-2"
                                    placeholder="eg. Beautiful Apartment In Miami"
                                    required
                                    value={title}
                                    // Update the title state when the input value changes
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    className="border rounded w-full py-2 px-3"
                                    rows="4"
                                    placeholder="Add any job duties, expectations, requirements, etc"
                                    value={description}
                                    // Update the description state when the textarea value changes
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="type" className="block text-gray-700 font-bold mb-2">Salary</label>
                                <select
                                    id="salary"
                                    name="salary"
                                    className="border rounded w-full py-2 px-3"
                                    required
                                    value={salary}
                                    // Update the salary state when the select value changes
                                    onChange={(e) => setSalary(e.target.value)}
                                >
                                    <option value="Under $50K">Under $50K</option>
                                    <option value="$50K - 60K">$50K - $60K</option>
                                    <option value="$60K - 70K">$60K - $70K</option>
                                    <option value="$70K - 80K">$70K - $80K</option>
                                    <option value="$80K - 90K">$80K - $90K</option>
                                    <option value="$90K - 100K">$90K - $100K</option>
                                    <option value="$100K - 125K">$100K - $125K</option>
                                    <option value="$125K - 150K">$125K - $150K</option>
                                    <option value="$150K - 175K">$150K - $175K</option>
                                    <option value="$175K - 200K">$175K - $200K</option>
                                    <option value="Over $200K">Over $200K</option>
                                </select>
                            </div>

                            <div className='mb-4'>
                                <label className='block text-gray-700 font-bold mb-2'>Location</label>
                                <input
                                    type='text'
                                    id='location'
                                    name='location'
                                    className='border rounded w-full py-2 px-3 mb-2'
                                    placeholder='Company Location'
                                    required 
                                    value={location}
                                    // Update the location state when the input value changes
                                    onChange={(e) => setLocation(e.target.value)}          
                                />
                            </div>

                            <h3 className="text-2xl mb-5">Company Info</h3>

                            <div className="mb-4">
                                <label htmlFor="company" className="block text-gray-700 font-bold mb-2">Company Name</label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Company Name"
                                    value={companyName}
                                    // Update the companyName state when the input value changes
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="company_description" className="block text-gray-700 font-bold mb-2">Company Description</label>
                                <textarea
                                    id="company_description"
                                    name="company_description"
                                    className="border rounded w-full py-2 px-3"
                                    rows="4"
                                    placeholder="What does your company do?"
                                    value={companyDescription}
                                    // Update the companyDescription state when the textarea value changes
                                    onChange={(e) => setCompanyDescription(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="contact_email" className="block text-gray-700 font-bold mb-2">Contact Email</label>
                                <input
                                    type="email"
                                    id="contact_email"
                                    name="contact_email"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Email address for applicants"
                                    required
                                    value={contactEmail}
                                    // Update the contactEmail state when the input value changes
                                    onChange={(e) => setContactEmail(e.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="contact_phone" className="block text-gray-700 font-bold mb-2">Contact Phone</label>
                                <input
                                    type="tel"
                                    id="contact_phone"
                                    name="contact_phone"
                                    className="border rounded w-full py-2 px-3"
                                    placeholder="Optional phone for applicants"
                                    value={contactPhone}
                                    // Update the contactPhone state when the input value changes
                                    onChange={(e) => setContactPhone(e.target.value)}
                                />
                            </div>

                            <div>
                                <button
                                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Add Job
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddJobPage;