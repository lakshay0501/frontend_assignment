import React from 'react'

const Card = ({code,symbol,rate}) => {
  return (
    <div className='bg bg-blue-400 mx-2 w-40 rounded-md'>
       <div className='flex '>
        <div className='text-black'>Country Code:</div>
        <div>{code}</div>
        </div>
       <div className='flex '>
        <div className='text-black'>Symbol:</div>
        <div>{symbol}</div>
        </div>
       <div className='flex '>
        <div className='text-black'>Price:</div>
        <div>{rate}</div>
        </div>
    </div>
  )
}

export default Card
