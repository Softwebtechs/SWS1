import React from 'react'

const Testimonialtype6 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-600 flex justify-center gap-4 ">
                    TESTIMONIAL <span className="text-blue-950">TYPE 6</span>
                </h1>
            </div>

            <div class=" md:flex md:flex-row flex flex-col border w-full md:h-80 md:max-lg:h-full border-gray-400 mt-10">
                <div class="md:invisible visible flex flex-row  md:w-0 w-[600px] gap-5 px-5 items-center bg-gray-200">
                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-11.jpg" alt="" class="rounded-full h-24 w-24" />
                    <div class="flex flex-col gap-3">
                        <p class="font-bold font-xl ">Kenu Reeves</p>
                        <p class="text-gray-500">-Web Designer</p>
                    </div>
                </div>
                <div class="flex flex-row gap-10 justify-center items-center h-full w-full px-20 py-10 bg-gray-50">
                    <p class="text-gray-500 text-9xl">"</p>
                    <p class="text-gray-700 text-right">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                </div>
                <div class="md:visible invisible flex flex-row  w-[900px] gap-5 px-5 items-center bg-gray-200">
                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/test-11.jpg" alt="" class="rounded-full h-24 w-24" />
                    <div class="flex flex-col gap-3">
                        <p class="font-bold font-xl ">Kenu Reeves</p>
                        <p class="text-gray-500">-Web Designer</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Testimonialtype6