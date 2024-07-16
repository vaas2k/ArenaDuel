import React from 'react';

const CalltoAction = () => {
  return (
    <section className="client__card bg-gray-900 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">Get started with DevSage</h2>
        <p className="text-gray-100 text-lg mb-8">
          Subscribe and get interesting offers from us, and get the best technology for your various activities
        </p>
        <button className="bg-white text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300 hover:bg-gray-900 hover:text-white">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CalltoAction;