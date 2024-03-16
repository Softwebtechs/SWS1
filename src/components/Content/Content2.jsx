import React from 'react'

const Content2 = () => {
    return (
        <>
            <div className='flex flex-row h-screen text-white'>
                <div className='bg-gray-500 h-4/5 w-1/4' ></div>
                <div className='bg-black h-4/5 w-1/4'>
                    <div className='flex flex-col justify-center items-center h-3/6 gap-4'>
                        <h1 className='text-orange-500'>Why We are <br /> Best i Industry</h1>
                        <p className=''>Lorem ipsum dolor sit amet. </p>
                    </div>
                    <div className='flex flex-col justify-center items-center h-3/6 gap-3'>
                        <div className='bg-gray-300 h-20 w-20 rounded-full'></div>
                        <h1>JOHN DOE - FOUNDER</h1>
                        <h2 className='text-orange-500'>Patrai Industry Limited</h2>
                    </div>
                </div>
                <div className='flex flex-col text-white bg-blue-900 h-4/5 w-1/4 '>
                    <div className='flex h-3/6 justify-center items-center'>Advanced Technology</div>
                    <div className='flex h-3/6 justify-center items-center bg-orange-500'>Expert Engineers</div>
                </div>
                <div className='text-white bg-orange-500 h-4/5 w-1/4'>
                    <div className='flex flex-col h-3/6 justify-center items-center'>
                        <h1>Delivery on time</h1>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                    <div className='flex h-3/6 justify-center items-center bg-blue-900'>
                        <h1>Customer Support</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content2
