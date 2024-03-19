import React from 'react'

const Content3 = () => {
    return (
        <>
            <div className='gap-10 '>
                <div className='flex flex-row justify-center gap-10 text-blue-900 divide-x-[3px]'>
                    <h1 className='font-semibold text-3xl '>Supplementary <br /> <span className='text-orange-500'>Services</span></h1>
                    <p className='p-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam quam perferendis <br /> quasi accusantium necessitatibus nesciunt dolorum dolore optio rerum distinctio.</p>
                </div>

                <div className='flex flex-row gap-5 justify-center items-center mt-10 mb-5'>
                    <div className='h-72 w-72 bg-gray-300 flex items-end'>
                        <div className=' flex justify-center items-center h-10 w-72 bg-blue-900 text-white'>
                            <h1>Electronic Materials</h1>
                        </div>
                    </div>

                    <div className='h-72 w-72 bg-orange-500 text-white flex flex-col justify-center items-center gap-3' >
                        <h1>Building Management</h1>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>View Projects </p>
                    </div>

                    <div className='h-72 w-72 bg-gray-300 flex items-end'>
                        <div className=' flex justify-center  items-center h-10 w-72 bg-blue-900 text-white'>
                            <h1>Power System</h1>
                        </div>
                    </div>

                </div>
                <div className='flex flex-row gap-5 justify-center items-center mb-20'>
                    <div className='h-72 w-72 bg-gray-300 flex items-end'>
                        <div className=' flex justify-center items-center h-10 w-72 bg-blue-900 text-white'>
                            <h1>Auto Parts</h1>
                        </div>
                    </div>


                    <div className='h-72 w-72 bg-gray-300 flex items-end'>
                        <div className=' flex justify-center items-center h-10 w-72 bg-blue-900 text-white'>
                            <h1>Heavy Machinery</h1>
                        </div>
                    </div>


                    <div className='h-72 w-72 bg-gray-300 flex items-end'>
                        <div className=' flex justify-center items-center h-10 w-72 bg-blue-900 text-white'>
                            <h1>oil and Mineral oil</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content3
