import React from 'react'

const Content5 = () => {
    return (
        <>
            <div className='flex flex-col justify-center items-center mb-20'>
                <h1 className='text-3xl font-bold text-blue-900'>Our Expert in</h1>
                <h1 className='text-3xl font-bold text-orange-500'>Different Solutions</h1>

                <div className='flex flex-row'>
                    <div className='h-72 w-48 bg-gray-400 flex items-end m-5'>
                        <div className='bg-white h-28 w-48 flex flex-col justify-center items-center shadow-[rgba(0,0,0,0.3)_0px_2px_0px_0px]'>
                            <h1 className='text-purple-800 font-semibold '>Jason Smith</h1>
                            <p className='text-orange-500'>Founder / Ceo</p>
                        </div>
                    </div>

                    <div className='h-72 w-48 bg-gray-400 flex items-end m-5'>
                        <div className='bg-white h-28 w-48 flex flex-col justify-center items-center shadow-[rgba(0,0,0,0.3)_0px_2px_0px_0px]'>
                            <h1 className='text-purple-800 font-semibold '>Linda Johns</h1>
                            <p className='text-orange-500'>Money Management</p>
                        </div>
                    </div>

                    <div className='h-72 w-48 bg-gray-400 flex items-end m-5'>
                        <div className='bg-white h-28 w-48 flex flex-col justify-center items-center shadow-[rgba(0,0,0,0.3)_0px_2px_0px_0px]'>
                            <h1 className='text-purple-800 font-semibold '>Bill Goldberg</h1>
                            <p className='text-orange-500'>Production Head</p>
                        </div>
                    </div>

                    <div className='h-72 w-48 bg-gray-400 flex items-end m-5'>
                        <div className='bg-white h-28 w-48 flex flex-col justify-center items-center shadow-[rgba(0,0,0,0.3)_0px_2px_0px_0px]'>
                            <h1 className='text-purple-800 font-semibold '>Mark Hendry</h1>
                            <p className='text-orange-500'>Quality Inchange</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Content5
