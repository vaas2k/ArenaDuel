import React, { useEffect } from 'react'
import { jellyTriangle } from "ldrs";

export default function Loader2 ()  {
  
    useEffect(() => {
      jellyTriangle.register();
    },[]);
  
    return (
      <div className="">
          <l-jelly-triangle
            size="30"
            speed="1.4"
            color={'whitesmoke'}
          ></l-jelly-triangle>
        </div>
    )
  }