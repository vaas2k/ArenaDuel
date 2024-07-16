'use client'

import { useEffect , useState } from "react"

export const useWidth = () => {

    if(typeof window !== 'undefined'){

        const [ width , setwidth ] = useState(window.innerWidth );
        
        const changewidth = () => setwidth(window.innerWidth);
        useEffect(()=>{
            window.addEventListener('resize',changewidth)
            return () => {
                window.removeEventListener('resize',changewidth);
            }
        })
        return width;
    }
}