const Notifications = dynamic(() => import("@/components/shared/Notifications"), { ssr: false });

import dynamic from 'next/dynamic';
import React from 'react'

const About = () => {
  return (
    <div className='flex items-center justify-center'>
      <Notifications />
    </div>
  )
}

export default About