
import React from 'react'
import { jellyTriangle } from "ldrs";
jellyTriangle.register();

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <l-jelly-triangle
          size="30"
          speed="1.4"
          color={'whitesmoke'}
        ></l-jelly-triangle>
      </div>
  )
}

export default Loader