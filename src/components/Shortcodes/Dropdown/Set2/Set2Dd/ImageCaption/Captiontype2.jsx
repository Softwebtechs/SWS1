import React from 'react'

const Captiontype2 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-full font-bold text-orange-500 flex justify-center gap-4 " >IMAGE CAPTION  <span className="text-blue-950">TYPE  2</span></h1>
            </div>

            <div className="md:flex-row md:flex flex flex-col md:px-40 px-20 md:max-lg:px-10 lg:max-xl:px-10 gap-5 py-16">
                <div className="group border border-gray-300 hover:bg-blue-950 h-[450px] w-[400px] md:max-lg:h-[450px]  flex justify-center items-center ">
                    <div className="flex flex-col gap-5 justify-center items-center  ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-2-2.jpg" alt="" class="rounded-full w-56 h-56 md:max-lg:h-40 md:max-lg:w-40 group-hover:border-4 group-hover:border-white " />
                        <h1 class="text-2xl text-blue-950 group-hover:text-white font-bold font-poppins">Vimus eumod</h1>
                        <div class="flex flex-row gap-3 ">
                            <p class="text-blue-950 group-hover:text-white">in</p>
                            <p class="bg-black text-white h-7 w-24 flex justify-center items-center">Enviroment</p>
                        </div>
                    </div>
                </div>
                <div className="group border border-gray-300 hover:bg-blue-950 h-[450px] w-[400px] md:max-lg:h-[450px]  flex justify-center items-center ">
                    <div className="flex flex-col gap-5 justify-center items-center  ">
                        <h1 class="text-2xl text-blue-950 group-hover:text-white font-bold font-poppins">Phlus molis</h1>
                        <div class="flex flex-row gap-3 ">
                            <p class="text-blue-950 group-hover:text-white">in</p>
                            <p class="bg-black text-white h-7 w-24 flex justify-center items-center">Enviroment</p>
                        </div>
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-2-3.jpg" alt="" class="rounded-full w-56 h-56 md:max-lg:h-40 md:max-lg:w-40 group-hover:border-4 group-hover:border-white " />

                    </div>
                </div>
                <div className="group border border-gray-300 hover:bg-blue-950 h-[450px] w-[400px] md:max-lg:h-[450px]  flex justify-center items-center ">
                    <div className="flex flex-col gap-5 justify-center items-center  ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-2-1.jpg" alt="" class="rounded-full w-56 h-56 md:max-lg:h-40 md:max-lg:w-40 group-hover:border-4 group-hover:border-white " />
                        <h1 class="text-2xl text-blue-950 group-hover:text-white font-bold font-poppins">Donec Morbi</h1>
                        <div class="flex flex-row gap-3 ">
                            <p class="text-blue-950 group-hover:text-white">in</p>
                            <p class="bg-black text-white h-7 w-24 flex justify-center items-center">Enviroment</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Captiontype2
