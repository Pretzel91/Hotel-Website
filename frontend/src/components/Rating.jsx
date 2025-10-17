import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const Rating = ({rating = 4}) => {
  return (
    <>
        {Array(5).fill('').map((_, index) =>(
            rating > index ? (
                <FaStar key={`filled-${index}`} className='w-4.5 h-4.5 text-yellow-500'/>
            ) : (
                <CiStar key={`empty-${index}`} className='w-4.5 h-4.5 text-gray-400'/>
            )
        ))}
    </>
  )
}

export default Rating