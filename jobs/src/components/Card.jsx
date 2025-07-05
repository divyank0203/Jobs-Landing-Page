import React from 'react'

function Card({children}) {
  return (
    <div className='bg-gray-200 rounded-lg shadow-md p-6'>
        {children}
    </div>
  )
}

export default Card 