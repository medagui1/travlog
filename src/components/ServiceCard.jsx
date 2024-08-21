import React from 'react'

const ServiceCard = ({item}) => {
  return (
    <figure className='rounded-[32px] bg-white p-wide flex flex-col justify-center items-center gap-wide'>
<img src={item.img} alt="" />
<h3 className='text-[24px] font-[500] '> {item.title} </h3>
<p className='text-p-50 font-fs-p '> {item.description} </p>
    </figure>
  )
}

export default ServiceCard