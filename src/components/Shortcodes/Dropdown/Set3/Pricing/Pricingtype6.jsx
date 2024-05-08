import React from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const Pricingtype6 = () => {
    const check = (
        <svg class=" w-6 h-6 text-green-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
        </svg>

    )
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl w-full  font-bold text-orange-500 flex justify-center gap-4 " >PRICING TABLE   <span className="text-blue-950">TYPE 4</span></h1>
            </div>

            <div class="flex flex-col md:px-44 lg:max-xl:px-10 px-10 py-10 ">
                <div class="group flex flex-row border border-orange-500 h-56 w-full">
                    <div class="w-80 bg-red-100 group-hover:bg-white px-5 py-5 flex flex-col">
                        <p class="text-2xl font-bold">BASIC</p>
                        <p class="text-gray-500 font-bold ">19.95/mo</p>
                        <p class="text-gray-500 mt-4 text-l ">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                    </div>
                    <div class="flex flex-col w-full h-full group-hover:bg-red-100">
                        <div class="flex flex-row justify-center items-center gap-8 w-full h-20">
                            <div class="flex flex-row gap-2 ">
                                {check}
                                <p class="text-gray-700 text-l">Stater Pack Included</p>
                            </div>
                            <div class="flex flex-row gap-2 ">
                                {check}
                                <p class="text-gray-700 text-l">Stater Pack Included</p>
                            </div>
                            <div class="flex flex-row gap-2 ">
                                {check}
                                <p class="text-gray-700 text-l">Stater Pack Included</p>
                            </div>
                        </div>
                        <div class="flex flex-row justify-center items-center gap-8 w-full h-20 ">
                            <div class="flex flex-row gap-2 ">
                                {check}
                                <p class="text-gray-700 text-l">Stater Pack Included</p>
                            </div>
                            <div class="flex flex-row gap-2 ">
                                {check}
                                <p class="text-gray-700 text-l">Stater Pack Included</p>
                            </div>
                            <div class="flex flex-row gap-2 ">
                                {check}
                                <p class="text-gray-700 text-l">Stater Pack Included</p>
                            </div>
                        </div>
                        <div class="flex flex-row w-full justify-center items-center gap-8 h-20">
                            <div class="flex flex-row gap-2 ">
                                {check}
                                <p class="text-gray-700 text-l">Stater Pack Included</p>
                            </div>
                            <div class="flex flex-row gap-2 ">
                                {check}
                                <p class="text-gray-700 text-l">Stater Pack Included</p>
                            </div>
                            <div class="flex flex-row gap-2 ">
                                {check}
                                <p class="text-gray-700 text-l">Stater Pack Included</p>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center items-center gap-3 w-80 h-full group-hover:bg-red-100">
                        <div class="border border-orange-500 w-40 h-12 flex flex-row cursor-pointer">
                            <div class="h-full w-16 group-hover:bg-orange-500 flex justify-center items-center"><FileDownloadIcon
                                style={{
                                    height: "20px",
                                    color: "black",
                                    marginBottom: " 5px",
                                }}
                                fontSize="small"
                            /></div>
                            <div class="w-full h-full flex justify-center items-center bg-orange-500 text-white group-hover:bg-white group-hover:text-black font-bold">BUY NOW</div>
                        </div>
                        <div class="border border-orange-500 w-40 h-12 flex flex-row cursor-pointer">
                            <div class="h-full w-16 group-hover:bg-orange-500 flex justify-center items-center"><FileDownloadIcon
                                style={{
                                    height: "20px",
                                    color: "black",
                                    marginBottom: " 5px",
                                }}
                                fontSize="small"
                            /></div>
                            <div class="w-full h-full flex justify-center items-center bg-orange-500 text-white group-hover:bg-white group-hover:text-black font-bold">BUY NOW</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Pricingtype6