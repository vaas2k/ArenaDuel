import React from 'react';

const Hero = () => {
  return (
    <header className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="header__content">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Code <span className="text-purple-500">Together</span>{' '}
            <span className="text-purple-500">Solved</span> Faster.
          </h1>
          <p className=" text-lg mb-8">
            A collaborative coding platform that connects programmers for instant teamwork, mentorship, and
            problem-solving.
          </p>
          <div className="header__btns">
            <button className="bg-white text-black hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
              Start Collaborating Now
            </button>
          </div>
        </div>
        <div className="header__image">
          <img src="./header.png" alt="header" className="mx-auto" />
        </div>
      </div>
    </header>
  );
};

export default Hero;