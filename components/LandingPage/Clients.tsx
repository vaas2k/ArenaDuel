import React from 'react';

const Clients = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="client__image gradient__box bg-gray-800 rounded-lg pt-[60px]">
          <img src="./client.png" alt="client" className="mx-auto" />
        </div>
        <div className="client__content">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What our <span className="text-purple-500">trusted clients</span> say
          </h2>
          <div className="flex py-[20px]">
            <div className="swiper-wrapper ">
              <div className="swiper-slide">
                <div className="client__card gradient__box bg-gray-800 rounded-lg p-6 h-auto">
                  <p className="text-gray-400 mb-4">
                    I no longer dread coding challenges thanks to DevSage real-time support. Its like having a personal
                    coding coach!
                  </p>
                  <h4 className="text-lg font-semibold text-white mb-1">Sarah Thompson</h4>
                  <h5 className="text-gray-400">Frontend Developer</h5>
                </div>
              </div>
              <div className="swiper-slide pt-[40px]">
                <div className="client__card gradient__box bg-gray-800 rounded-lg p-6 h-auto">
                  <p className="text-gray-400 mb-4">
                  As a mentor on DevSage, I get to share my passion for coding while helping shape the next generation of developers 
                  </p>
                  <h4 className="text-lg font-semibold text-white mb-1">John kennedy</h4>
                  <h5 className="text-gray-400">Senior Developer</h5>
                </div>
              </div>
              {/* Add the rest of the testimonials */}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;