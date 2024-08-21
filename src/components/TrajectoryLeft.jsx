import React from 'react'

const TrajectoryLeft = () => {
  return (
    <div className='trajectory relative'>
        <img src="images/hero/plane.png" className='absolute top-[-20px] left-[43px] ' width={12} height={12} alt="" />
        <img
        src="images/hero/trajectory-left.svg"
        alt=""
        className="absolute top-[-10px] left-0 "
        width={100}
      />
    </div>
  )
}

export default TrajectoryLeft