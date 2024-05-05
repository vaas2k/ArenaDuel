import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <div className="relative" id="home">
    <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
    </div>
        <div className="relative pt-36 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
                <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Coding Struggles <span className="text-indigo-600 dark:text-white">Solved.</span></h1>
                <p className="mt-8 text-gray-700 dark:text-gray-300">DevBuddies connects you with experienced mentors for instant coding guidance and collaborative learning. Say goodbye to frustration and level up your skills today.</p>
                <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                    <Link
                      href="/sign-up"
                      className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-purple-800 before:transition before:duration-300 hover:before:scale-110 active:duration-75 active:before:scale-95 sm:w-max"
                    >
                      <span className="relative text-base text-white font-semibold "
                        >Get started</span>
                    </Link>
                </div>
                <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
                    <div className="text-left">
                        <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Find your pair</h6>
                        <p className="mt-2 text-gray-500"></p>
                    </div>
                    <div className="text-left">
                        <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Build Together</h6>
                        <p className="mt-2 text-gray-500"></p>
                    </div>
                    <div className="text-left">
                        <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Challenge your buddies</h6>
                        <p className="mt-2 text-gray-500"></p>
                    </div>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 py-[50px]">
                <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                    <img src="./images/clients/microsoft.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                  </div>
                <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                  <img src="./images/clients/airbnb.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
                <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                  <img src="./images/clients/google.svg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
                <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                    <img src="./images/clients/ge.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                  </div>
                  <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
                    <img src="./images/clients/netflix.svg" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
                  </div>
                <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
                    <img src="./images/clients/google-cloud.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
                </div>
              </div>
        </div>
</div>
  )
}

export default HeroSection