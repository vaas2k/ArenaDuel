import React from 'react';

const Community = () => {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="build__image">
          <img src="./build.png" alt="build" className="mx-auto" />
        </div>
        <div className="build__content">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  mb-4">
            Join a Thriving Programming <span className="text-purple-500">Community</span> now
          </h2>
          <p className=" text-lg mb-8">
            Connect, collaborate, and learn alongside a network of skilled developers. Share your knowledge, solve
            problems together, and elevate your coding skills.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <li>
              <div className="build__card gradient__box bg-gray-800 rounded-lg p-6 text-center">
                <span className="text-purple-500 text-4xl mb-4">
                  <i className="ri-eye-fill"></i>
                </span>
                <h4 className="text-lg font-semibold text-white">FullStack<br />Developers</h4>
              </div>
            </li>
            <li>
              <div className="build__card gradient__box bg-gray-800 rounded-lg p-6 text-center">
                <span className="text-purple-500 text-4xl mb-4">
                  <i className="ri-eye-fill"></i>
                </span>
                <h4 className="text-lg font-semibold text-white">Ui/Ux<br />Developers</h4>
              </div>
            </li>
            <li>
              <div className="build__card gradient__box bg-gray-800 rounded-lg p-6 text-center">
                <span className="text-purple-500 text-4xl mb-4">
                  <i className="ri-eye-fill"></i>
                </span>
                <h4 className="text-lg font-semibold text-white">AI<br />Engineers</h4>
              </div>
            </li>
            {/* Add the rest of the cards */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Community;