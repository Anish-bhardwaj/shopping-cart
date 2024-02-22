import React from 'react'
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='spinner'></div>
        <p className='text-semibold text-black font-bold'>Loading...</p>
    </div>
  )
}

export default Spinner