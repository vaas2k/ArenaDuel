import React from 'react';

const Discover = () => {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
          Unlock the Power of Collaboration
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="discover__card bg-gray-800 rounded-lg p-6 text-center">
            <span className="text-purple-500 text-4xl mb-4">
              <i className="ri-group-fill"></i>
            </span>
            <h4 className="text-lg font-semibold text-white">Real-Time Coding</h4>
          </div>
          <div className="discover__card bg-gray-800 rounded-lg p-6 text-center">
            <span className="text-purple-500 text-4xl mb-4">
              <i className="ri-group-fill"></i>
            </span>
            <h4 className="text-lg font-semibold text-white">Joinable Coding Rooms</h4>
          </div>
          <div className="discover__card bg-gray-800 rounded-lg p-6 text-center">
            <span className="text-purple-500 text-4xl mb-4">
              <i className="ri-group-fill"></i>
            </span>
            <h4 className="text-lg font-semibold text-white">Expert Mentorship</h4>
          </div>
          <div className="discover__card bg-gray-800 rounded-lg p-6 text-center">
            <span className="text-purple-500 text-4xl mb-4">
              <i className="ri-group-fill"></i>
            </span>
            <h4 className="text-lg font-semibold text-white">Fast-Paced Problem Solving</h4>
          </div>
          <div className="discover__card bg-gray-800 rounded-lg p-6 text-center">
            <span className="text-purple-500 text-4xl mb-4">
              <i className="ri-group-fill"></i>
            </span>
            <h4 className="text-lg font-semibold text-white">Seamless Device Integration</h4>
          </div>
          <div className="discover__card bg-gray-800 rounded-lg p-6 text-center">
            <span className="text-purple-500 text-4xl mb-4">
              <i className="ri-group-fill"></i>
            </span>
            <h4 className="text-lg font-semibold text-white">Secure Coding Environment</h4>
          </div>
          <div className="discover__card bg-gray-800 rounded-lg p-6 text-center">
            <span className="text-purple-500 text-4xl mb-4">
              <i className="ri-group-fill"></i>
            </span>
            <h4 className="text-lg font-semibold text-white">Collaborative Editing</h4>
          </div>
          <div className="discover__card bg-gray-800 rounded-lg p-6 text-center">
            <span className="text-purple-500 text-4xl mb-4">
              <i className="ri-group-fill"></i>
            </span>
            <h4 className="text-lg font-semibold text-white">Secure Code History & Rollback</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;