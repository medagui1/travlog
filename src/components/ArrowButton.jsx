import React from 'react'

const ArrowButton = ({active}) => {
    const customFill = active ? '#fff' : '#191825';
  return (
    <button className={` w-16 h-16 flex justify-center items-center rounded-full  ${active ? "bg-button btn" : "border-[#19182510] border-[2px] left-arrow"}`}>
        <svg  className={`${active && 'rotate-180'}`} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.42513 3.35924H11.12C11.4735 3.35924 11.76 3.64578 11.76 3.99924C11.76 4.35271 11.4735 4.63924 11.12 4.63924H2.42513L4.50042 6.71453C4.75035 6.96447 4.75035 7.3697 4.50042 7.61963C4.25048 7.86957 3.84526 7.86957 3.59532 7.61963L0.88003 4.90434C0.380159 4.40447 0.380159 3.59402 0.88003 3.09415L3.59532 0.378858C3.84526 0.128922 4.25048 0.128922 4.50042 0.378858C4.75035 0.628793 4.75035 1.03402 4.50042 1.28395L2.42513 3.35924Z"   fill={customFill}/>
</svg>

    </button>
  )
}

export default ArrowButton