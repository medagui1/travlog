import React from 'react'

const TrajectoryRight = () => {
  return (
    <div className='trajectory relative'>
        <img src="images/hero/plane.png" height={12} width={12} className='absolute right-[56px] top-[-10px] rotate-[245deg] ' alt="" />
        <img
        src="images/hero/trajectory-right.svg"
        alt=""
        className="absolute right-0"
        width={55}
      />
    </div>
  )
}

export default TrajectoryRight