import React from 'react'
import { TbError404 } from "react-icons/tb";


const NotFound = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-cyan-950'>
      <h1 className='text-6xl flex items-baseline text-lime-100 font-bold font-serif gap-2'>PAGE NOT FOUND <TbError404/></h1>
      <hr className='w-100 border-2 border-lime-100 mt-3'/>
    </div>
  )
}

export default NotFound
