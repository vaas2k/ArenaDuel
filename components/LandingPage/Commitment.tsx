import React from 'react';

const Commitment = () => {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="commitment__image">
          <img src="./commitment.png" alt="commitment" className="mx-auto" />
        </div>
        <div className="commitment__content">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built for Powerful <span className="text-purple-500">Collaboration</span>
          </h2>
          <p className=" text-lg mb-8">
            We empower developers to work together seamlessly, solving problems and achieving more through real-time
            collaboration features.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li>
              <div className=" bg-gray-800 rounded-lg p-6 flex items-center gap-4">
                <span className="text-purple-500 text-2xl">
                  <i className="ri-shield-check-fill"></i>
                </span>
                <p className="text-white">Real-Time Code Editing</p>
              </div>
            </li>
            <li>
              <div className=" bg-gray-800 rounded-lg p-6 flex items-center gap-4">
                <span className="text-purple-500 text-2xl">
                  <i className="ri-shield-check-fill"></i>
                </span>
                <p className="text-white">Fast-Paced Problem Solving</p>
              </div>
            </li>
            <li>
              <div className=" bg-gray-800 rounded-lg p-6 flex items-center gap-4">
                <span className="text-purple-500 text-2xl">
                  <i className="ri-shield-check-fill"></i>
                </span>
                <p className="text-white">Git Version Control</p>
              </div>
            </li>
            <li>
              <div className=" bg-gray-800 rounded-lg p-6 flex items-center gap-4">
                <span className="text-purple-500 text-2xl">
                  <i className="ri-shield-check-fill"></i>
                </span>
                <p className="text-white">Expert Mentorship</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Commitment;