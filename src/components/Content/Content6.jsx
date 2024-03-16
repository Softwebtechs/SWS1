import React from 'react'

const Content6 = () => {
    return (
        <>
            <div className='flex flex-row h-96 text-white '>
                <div className='bg-blue-900 h-96 w-1/3 flex flex-col justify-center pl-20 gap-4'>
                    <h1 className='text-2xl font-bold'>Quality Resourching & <br /><span className='text-orange-500'>Analytics</span></h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Read more</p>
                </div>

                <div className='flex flex-col bg-orange-500 h-96 w-1/3  justify-center items-start gap-5 p-20'>
                    <h1 className='text-sx text-blue-900 font-bold'>Our Skills</h1>
                    <h1 className='text-2xl font-bold'>Get a solution for all your <br /> industries needs.</h1>
                    <div>
                        <p>Production</p>
                        <p>International</p>
                        <p>Customer Satisfaction</p>
                        <p>Utilization Rate</p>
                    </div>
                </div>

                <div className='bg-blue-900 h-96 w-1/3 p-10 flex flex-col justify-center gap-5 '>
                    <h1 className='text-orange-500 font-bold'>Clients</h1>
                    <h1 className='font-bold text-2xl '>We can work with Big & <br /> Small Clients</h1>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div className='flex justify-between'>
                        <h1 className='text-orange-500 text-5xl font-bold'>86+</h1>
                        <h1 className=' text-5xl font-bold'>546</h1>
                        <h1 className='text-5xl font-bold'>72k</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content6
