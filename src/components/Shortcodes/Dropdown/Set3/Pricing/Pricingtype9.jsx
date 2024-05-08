import React from 'react'

const Pricingtype9 = () => {
    const check = (
        <svg class=" w-6 h-6 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
        </svg>

    )
    const minus = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
        </svg>

    )
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 " >PRICING TABLE   <span className="text-blue-950">TYPE 7</span></h1>
            </div>

            <div className="xl:flex-row xl:flex flex flex-col md:px-40 px-20 md:max-lg:px-10 lg:max-xl:px-10 gap-5 py-16">
                <div className="flex flex-col gap-8  group  border rounded border-gray-200 h-[740px] w-[400px] md:max-lg:h-full ">
                    <div className="group flex flex-col gap-5 justify-center items-center  w-full h-96 group-hover:bg-gray-200 p-4 ">
                        <div class="bg-black h-40 w-40 flex justify-center items-center ">
                            <p class="text-9xl font-bold text-white">1</p>
                        </div>
                        <p class="text-6xl font-bold">$50</p>
                    </div>
                    <div class="px-7 flex flex-col gap-4">
                        <div class="flex flex-row gap-2 ">
                            {check}
                            <p class="text-gray-700 text-l">Stater Pack Included</p>
                        </div>
                        <div class="flex flex-row gap-2 ">
                            {check}
                            <p class="text-gray-700 text-l">Personal Trainer</p>
                        </div>
                        <div class="flex flex-row gap-2 ">
                            {minus}
                            <p class="text-gray-700 text-l">Convienient Time</p>
                        </div>
                        <div class="flex flex-row gap-2 ">
                            {minus}
                            <p class="text-gray-700 text-l">Special Class</p>
                        </div>
                        <div class="flex flex-row gap-2 ">
                            {minus}
                            <p class="text-gray-700 text-l">Group Training</p>
                        </div>
                    </div>
                    <div class="flex px-3">
                        <button className="flex justify-center items-center bg-gray-100 h-14 w-full font-bold group-hover:text-white text-black group-hover:bg-orange-500 rounded ">Buy Now</button>
                    </div>
                </div>
                <div className="flex flex-col gap-8  group  border rounded border-gray-200 h-[740px] w-[400px] md:max-lg:h-full ">
                    <div className="group flex flex-col gap-5 justify-center items-center  w-full h-96 bg-gray-200 p-4 ">
                        <div class="bg-black h-40 w-40 flex justify-center items-center ">
                            <p class="text-9xl font-bold text-white">1</p>
                        </div>
                        <p class="text-6xl font-bold">$50</p>
                    </div>
                    <div class="px-7 flex flex-col gap-4">
                        <div class="flex flex-row gap-2 ">
                            {check}
                            <p class="text-gray-700 text-l">Stater Pack Included</p>
                        </div>
                        <div class="flex flex-row gap-2 ">
                            {check}
                            <p class="text-gray-700 text-l">Personal Trainer</p>
                        </div>
                        <div class="flex flex-row gap-2 ">
                            {check}
                            <p class="text-gray-700 text-l">Convienient Time</p>
                        </div>
                        <div class="flex flex-row gap-2 ">
                            {check}
                            <p class="text-gray-700 text-l">Special Class</p>
                        </div>
                        <div class="flex flex-row gap-2 ">
                            {minus}
                            <p class="text-gray-700 text-l">Group Training</p>
                        </div>
                    </div>
                    <div class="flex px-3">
                        <button className="flex justify-center items-center h-14 w-full font-bold text-white bg-orange-500 rounded ">Buy Now</button>
                    </div>
                </div>
                <div className="flex flex-col gap-8  group  border rounded border-gray-200 h-[740px] w-[400px] md:max-lg:h-full ">
                    <div className="group flex flex-col gap-5 justify-center items-center  w-full h-96 group-hover:bg-gray-200 p-4 ">
                        <div class="bg-black h-40 w-40 flex justify-center items-center ">
                            <p class="text-9xl font-bold text-white">3</p>
                        </div>
                        <p class="text-6xl font-bold">$90</p>
                    </div>
                    <div class="px-7 flex flex-col gap-4">
                        <div class="flex flex-row gap-2 ">
                            {check}
                            <p class="text-gray-700 text-l">Stater Pack Included</p>
                        </div>
                        <div class="flex flex-row gap-2 ">
                            {check}
                            <p class="text-gray-700 text-l">Personal Trainer</p>
                        </div>
                        <div class="flex flex-row gap-2 ">
                            {check}
                            <p class="text-gray-700 text-l">Convienient Time</p>
                        </div>
                        <div class="flex flex-row gap-2 ">
                            {check}
                            <p class="text-gray-700 text-l">Special Class</p>
                        </div>
                        <div class="flex flex-row gap-2 ">
                            {check}
                            <p class="text-gray-700 text-l">Group Training</p>
                        </div>
                    </div>
                    <div class="flex px-3">
                        <button className="flex justify-center items-center bg-gray-100 h-14 w-full font-bold group-hover:text-white text-black group-hover:bg-orange-500 rounded ">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricingtype9