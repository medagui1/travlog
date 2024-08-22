import React from 'react'

const TravelPointCard = ({item}) => {
  return (
    <div className='p-wide text-center border-[#19182510] border-[2px] rounded-[32px] w-full max-w-[400px] '>
<h3 className='text-important font-[600] text-[36px] mb-thin'> {item.number} </h3>
<p className='text-[18px] text-p font-thin'> {item.title} </p>
    </div>
  )
}

export default TravelPointCard