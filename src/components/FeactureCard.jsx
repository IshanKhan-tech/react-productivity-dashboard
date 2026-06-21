import React from 'react'

const FeatureCard = ({ data }) => {
  return (
    <div className='relative h-40 w-129 flex items-center justify-center overflow-hidden'>
      <img
        className='absolute inset-0 w-full h-full object-cover'
        src={data.img}
        alt={data.name}
      />

      <div className='absolute inset-0 bg-black/40'></div>

      <h1 className='relative z-10 text-white text-3xl font-semibold'>
        {data.name}
      </h1>
    </div>
  )
}

export default FeatureCard