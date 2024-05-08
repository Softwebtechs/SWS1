import React from 'react'

const ImageFlip = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-full font-bold text-orange-500 flex justify-center gap-4 " >IMAGE <span className="text-blue-950">FLIP</span></h1>
            </div>
            <div class="w-full h-full md:flex md:flex-row flex flex-col gap-7 xl:px-44 px-16 mt-10">
                <div class="h-96 md:w-[550px] w-full bg-[url('https://patrai.wpengine.com/wp-content/uploads/2019/04/img-flip-2.jpg')] hover:bg-[url('https://patrai.wpengine.com/wp-content/uploads/2019/04/img-flip-4.jpg')] bg-cover hover:border hover:border-orange-500 cursor-pointer "></div>
                <div class="h-96 md:w-[550px] w-full bg-[url('https://patrai.wpengine.com/wp-content/uploads/2019/04/img-flip-2.jpg')] hover:bg-[url('https://patrai.wpengine.com/wp-content/uploads/2019/04/img-flip-4.jpg')] bg-cover hover:border hover:border-orange-500 cursor-pointer "></div>
            </div>
        </>
    )
}

export default ImageFlip