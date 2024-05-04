'use client'

import { useEffect , useState } from "react"

export const useWidth = () => {

    const [ width , setwidth ] = useState(typeof window !== undefined ? window.innerWidth : '');

    const changewidth = () => setwidth(typeof window !== undefined ? window.innerWidth : '');
    useEffect(()=>{
        window.addEventListener('resize',changewidth)
        return () => {
            window.removeEventListener('resize',changewidth);
        }
    })
    return width;
}