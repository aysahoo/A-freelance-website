import React from 'react'

// Define the Hero functional component
const Hero = () => {
  return (
    <div>
      {/* Hero section with background color and padding */}
      <section className="bg-indigo-700 py-20 mb-4">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        >
          {/* Centered text content */}
          <div className="text-center">
            {/* Main heading */}
            <h1
              className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              Become a React Dev
            </h1>
            {/* Subheading */}
            <p className="my-4 text-xl text-white">
              Find the React job that fits your skills and needs
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

// Export the Hero component as the default export
export default Hero
