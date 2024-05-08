import React from 'react'

const Testimonialtype4 = () => {
    return (
        <><div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
            <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-600 flex justify-center gap-4 ">
                TESTIMONIAL <span className="text-blue-950">TYPE 4</span>
            </h1>
        </div>

            <div class="md:flex md:flex-row flex flex-col md:px-44 px-14 md:max-lg:px-10 gap-7 mt-7">
                <div class="flex flex-col   md:w-1/2  w-full md:h-64 h-full md:max-lg:h-full">
                    <div class="flex flex-row gap-5">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-5.jpg" alt="img" class="rounded-full h-32 w-32" />
                        <p class="text-gray-500 text-xl mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                    <div class="flex justify-end items-end text-right mt-3">
                        <p class="font-bold font-xl text-gray-500">Kenu Reeves</p>
                        <p class="text-gray-500">-Web Designer</p>
                    </div>


                </div>
                <div class="flex flex-col   md:w-1/2  w-full md:h-64 h-full md:max-lg:h-full">
                    <div class="flex flex-row gap-5">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-6.jpg" alt="img" class="rounded-full h-32 w-32" />
                        <p class="text-gray-500 text-xl mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                    <div class="flex justify-end items-end text-right mt-3">
                        <p class="font-bold font-xl text-gray-500">Scarlett Johanson</p>
                        <p class="text-gray-500">-Web Devloper</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Testimonialtype4