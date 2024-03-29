import React from 'react'

const Topbar = () => {
  return (
    <div className='flex'>
        <div className='p-4 ml-4 flex flex-col'>
            <div className='text-3xl flex '>
                <div>Hello,</div>
                <div className='text-amber-400'>Brooklyn Simmons</div>
            </div>
            <div className='text-2xl flex'>
                <div>Welcome to</div>
                <div className='text-green-500 mx-1'>Spot trading!</div>
            </div>
        </div>
        <div>
            <button className='bg bg-green-600 mt-8 ml-80'>Start trading</button>
        </div>
    </div>
  )
}

export default Topbar
