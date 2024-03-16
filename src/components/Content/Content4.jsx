import React from 'react'

const Content4 = () => {
    return (
        <>
            <div className='flex flex-row  h-96 mb-10 '>
                <div className='bg-orange-500 w-1/2'>
                    <div className='flex flex-col justify-center items-center text-white gap-5 mt-28'>
                        <h1 className='text-2xl font-medium'>From Our <br /> Client's Speak</h1>
                        <p className='ml-12'> Lorem ipsum dolor sit amet.</p>
                        <button className='bg-blue-900 mr-6 px-6 py-2'>Read more</button>
                    </div>
                </div>
                <div className='flex flex-row bg-blue-900 w-1/2'>
                    <div className='flex flex-col text-white gap-5 justify-center ml-28 items-start mt-10'>
                        <div className='h-16 w-16 rounded-full bg-white'></div>
                        <h1>Jessy Smith</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p className='text-orange-500 font-bold text-2xl'>*****</p>
                    </div>
                    <div className='flex flex-col text-white gap-5 justify-center ml-28 items-start mt-10'>
                        <div className='h-16 w-16 rounded-full bg-white'></div>
                        <h1>Wills Doe</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p className='text-orange-500 font-bold text-2xl'>*****</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content4
