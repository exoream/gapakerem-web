import React from 'react'
import Icon1 from '../assets/mount.png'

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen w-full'>
            <img src={Icon1} alt="Loading" className='h-10' />
            <img src={Icon1} alt="Loading" className='h-20' />
            <img src={Icon1} alt="Loading" className='h-10' />
        </div>
    )
}

export default Loading
