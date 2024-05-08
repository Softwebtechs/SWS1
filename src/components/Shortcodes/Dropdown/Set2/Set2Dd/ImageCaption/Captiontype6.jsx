import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

const Captiontype6 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-10">

                <h1 className="md:text-5xl text-3xl md:w-full w-full font-bold text-orange-500 flex justify-center gap-4 " >IMAGE CAPTION  <span className="text-blue-950">TYPE  6</span></h1>
            </div>

            <div className="lg:flex-row lg:flex flex flex-col md:px-6 px-20 md:max-lg:px-24 lg:max-xl:px-10 gap-5 py-16">
                <div className="group  relative overflow-hidden   bg-cover bg-no-repeat bg-gray-200 h-[300px] w-[500px] md:max-lg:h-full  flex  ">
                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-6-1.jpg" alt="" class="w-[500px] h-[300px]  group-hover:bg-black group-hover:opacity-40  group-hover:scale-110 transition duration-300 ease-in-out" />
                    <div class="flex flex-col gap-4 px-6 py-10 absolute">
                        <AccessAlarmIcon style={{ color: "white", height: "60px ", width: "60px" }} class="mt-10" />
                        <h1 class="text-white text-2xl font-bold ">Vimus eumod soles</h1>
                        <p class="text-white text-l">Quisque volutpat mattis eros. Nullam malesuada. Suspendisse urna nibh, semper suscipit, posuere a, pede.</p>
                    </div>
                </div>
                <div className="group  relative overflow-hidden   bg-cover bg-no-repeat bg-gray-200 h-[300px] w-[500px] md:max-lg:h-full  flex  ">
                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-3-1.jpg" alt="" class="w-[500px] h-[300px]  group-hover:bg-black group-hover:opacity-40  group-hover:scale-110 transition duration-300 ease-in-out" />
                    <div class="flex flex-col gap-4 px-6 py-10 absolute">
                        <LanguageIcon style={{ color: "white", height: "60px ", width: "60px" }} class="mt-10" />
                        <h1 class="text-white text-2xl font-bold ">Donec Morbi ereos</h1>
                        <p class="text-white text-l">Quisque volutpat mattis eros. Nullam malesuada. Suspendisse urna nibh, semper suscipit, posuere a, pede.</p>
                    </div>
                </div>
                <div className="group  relative overflow-hidden   bg-cover bg-no-repeat bg-gray-200 h-[300px] w-[500px] md:max-lg:h-full  flex  ">
                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-3-3.jpg" alt="" class="w-[500px] h-[300px]  group-hover:bg-black group-hover:opacity-40  group-hover:scale-110 transition duration-300 ease-in-out" />
                    <div class="flex flex-col gap-4 px-6 py-10 absolute">
                        <CurrencyExchangeIcon style={{ color: "white", height: "60px ", width: "60px" }} class="mt-10" />
                        <h1 class="text-white text-2xl font-bold ">Phlus molis nulla</h1>
                        <p class="text-white text-l">Quisque volutpat mattis eros. Nullam malesuada. Suspendisse urna nibh, semper suscipit, posuere a, pede.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Captiontype6