
import React from 'react'

const Testimonials = () => {
  return (
    <div className="text-gray-600 dark:text-gray-300 py-[40px]" id="testimonials">
      
    <div className="mb-20 space-y-4 px-6 md:px-0">
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
        We have some fans.
      </h2>
    </div>
    <div className="flex wrap gap-[30px] p-[20px] sm:flex-col">
      
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <img className="w-12 h-12 rounded-full" src="./images/avatars/avatar-1.webp" alt="user avatar" width="200" height="200" loading="lazy" />
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane doe</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">Marketing</p>
          </div>
        </div>
        <p className="mt-8"> Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <img className="w-12 h-12 rounded-full" src="./images/avatars/avatar-2.webp" alt="user avatar" width="200" height="200" loading="lazy" />
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Yanick Doe</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">Developer</p>
          </div>
        </div>
        <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
      </div>
      <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
        <div className="flex gap-4">
          <img className="w-12 h-12 rounded-full" src="./images/avatars/avatar-3.webp" alt="user avatar" width="200" height="200" loading="lazy"/>
          <div>
            <h6 className="text-lg font-medium text-gray-700 dark:text-white">Jane Doe</h6>
            <p className="text-sm text-gray-500 dark:text-gray-300">Mobile dev</p>
          </div>
        </div>
        <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto laboriosam deleniti aperiam ab veniam sint non cumque quis tempore cupiditate. Sint libero voluptas veniam at reprehenderit, veritatis harum et rerum.</p>
      </div>
      

    </div>
</div>
  )
}

export default Testimonials


