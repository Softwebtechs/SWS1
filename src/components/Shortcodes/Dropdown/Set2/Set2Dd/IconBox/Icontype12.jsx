import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Icontype12 = () => {
    return (
        <><div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

            <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  12</span></h1>
        </div>

            <div className=" xl:flex xl:flex-row flex flex-col gap-7 sm:px-44 px-14 py-10 lg:max-xl:px-56  ">

                <div className=" group flex flex-col bg-gray-50  gap-12 px-10 py-7 h-96 w-full md:w-[400px] lg:max-xl:w-full">
                    <div className="border border-gray-200 w-full"></div>
                    <div className="flex flex-row gap-2">
                        <AccessAlarmIcon style={{
                            color: "#ff5e14",
                            height: "70px",
                            width: "70px",
                        }}
                        />
                        <div>
                            <h1 className=" font-poppinns text-l font-semibold">Petrat Corum</h1>
                            <div class="border-2 group-hover:border-orange-500 border-gray-200 w-12 mt-4"></div>
                            <h2 className="font-poppins text-black text-xl mt-2">-Try Our <span class="text-orange-500">Online Documentation</span></h2>
                            <p class="text-gray-500 text-s mt-2">Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 w-full"></div>
                </div>
                <div className=" group flex flex-col bg-gray-50  gap-12 px-10 py-7 h-96 w-full md:w-[400px] lg:max-xl:w-full">
                    <div className="border border-gray-200 w-full"></div>
                    <div className="flex flex-row gap-2">
                        <CatchingPokemonIcon style={{
                            color: "#ff5e14",
                            height: "70px",
                            width: "70px",
                        }}
                        />
                        <div>
                            <h1 className=" font-poppinns text-l font-semibold">Confam tecum</h1>
                            <div class="border-2 group-hover:border-orange-500 border-gray-200 w-12 mt-4"></div>
                            <h2 className="font-poppins text-black text-xl mt-2">-Try Our <span class="text-orange-500">Online Documentation</span></h2>
                            <p class="text-gray-500 text-s mt-2">Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 w-full"></div>
                </div>
                <div className=" group flex flex-col bg-gray-50  gap-12 px-10 py-7 h-96 w-full md:w-[400px] lg:max-xl:w-full">
                    <div className="border border-gray-200 w-full"></div>
                    <div className="flex flex-row gap-2">
                        <CurrencyExchangeIcon style={{
                            color: "#ff5e14",
                            height: "70px",
                            width: "70px",
                        }}
                        />
                        <div>
                            <h1 className=" font-poppinns text-l font-semibold">Cuique Verso</h1>
                            <div class="border-2 group-hover:border-orange-500 border-gray-200 w-12 mt-4"></div>
                            <h2 className="font-poppins text-black text-xl mt-2">-Try Our <span class="text-orange-500">Online Documentation</span></h2>
                            <p class="text-gray-500 text-s mt-2">Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress.</p>
                        </div>
                    </div>
                    <div className="border border-gray-200 w-full"></div>
                </div>
            </div>

        </>
    )
}

export default Icontype12