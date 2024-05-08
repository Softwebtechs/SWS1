import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


const Captiontype3 = () => {
    return (

        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-full font-bold text-orange-500 flex justify-center gap-4 " >IMAGE CAPTION  <span className="text-blue-950">TYPE  3</span></h1>
            </div>

            <div className="md:flex-row md:flex flex flex-col md:px-40 px-20 md:max-lg:px-10 lg:max-xl:px-10 gap-5 py-16">
                <div className="group relative bg-gray-50 h-[500px] w-[400px] md:max-lg:h-full  flex ">
                    <div className="flex flex-col gap-5  relative overflow-hidden   bg-cover bg-no-repeat ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-3-1.jpg" alt="" class="w-[400px] h-[300px] group-hover:-translate-x-6 overflow-hidden  transition duration-500 " />
                        <div class="w-0 h-0 absolute inset-40 mt-16 md:max-lg:inset-20 md:max-lg:mt-[148px] border-l-[60px] border-l-transparent border-b-[76px] border-b-white border-r-[60px] border-r-transparent">
                            <AccessAlarmIcon style={{ color: "black", width: "40px", height: "40px" }} class="-ml-5 mt-5" />
                        </div>
                        <h1 class="text-2xl text-blue-950 font-bold ">Vimus eumod soles</h1>
                        <p class="text-gray-700">Nunc eget feugiat ex. Aliquam commodo dapibus. Duis sed venenatis est. Vestibulum tem ipsum ut molestie imperdiet.</p>
                    </div>
                </div>
                <div className="group relative bg-gray-50 h-[500px] w-[400px] md:max-lg:h-full  flex ">
                    <div className="flex flex-col gap-5  relative overflow-hidden   bg-cover bg-no-repeat ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-3-2.jpg" alt="" class="w-[400px] h-[300px] group-hover:-translate-x-6 overflow-hidden  transition duration-500 " />
                        <div class="w-0 h-0 absolute inset-40 mt-16 md:max-lg:inset-20 md:max-lg:mt-[148px] border-l-[60px] border-l-transparent border-b-[76px] border-b-white border-r-[60px] border-r-transparent">
                            <LanguageIcon style={{ color: "black", width: "40px", height: "40px" }} class="-ml-5 mt-5" />
                        </div>
                        <h1 class="text-2xl text-blue-950 font-bold ">Donec Morbi ereos</h1>
                        <p class="text-gray-700">Nunc eget feugiat ex. Aliquam commodo dapibus. Duis sed venenatis est. Vestibulum tem ipsum ut molestie imperdiet.</p>
                    </div>
                </div>
                <div className="group relative bg-gray-50 h-[500px] w-[400px] md:max-lg:h-full  flex ">
                    <div className="flex flex-col gap-5 relative overflow-hidden   bg-cover bg-no-repeat  ">
                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/img-cap-3-3.jpg" alt="" class="w-[400px] h-[300px] group-hover:-translate-x-6 overflow-hidden  transition duration-500" />
                        <div class="w-0 h-0 absolute inset-40 md:max-lg:inset-20 md:max-lg:mt-[148px] mt-16  border-l-[60px] border-l-transparent border-b-[76px] border-b-white border-r-[60px] border-r-transparent">
                            <CurrencyExchangeIcon style={{ color: "black", width: "40px", height: "40px" }} class="-ml-5 mt-5" />
                        </div>
                        <h1 class="text-2xl text-blue-950 font-bold ">Phlus molis nulla</h1>
                        <p class="text-gray-700">Nunc eget feugiat ex. Aliquam commodo dapibus. Duis sed venenatis est. Vestibulum tem ipsum ut molestie imperdiet.</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Captiontype3