import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Icontype10 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  10</span></h1>

            </div>
            <div className=" xl:flex xl:flex-row flex flex-col gap-7  sm:px-44 px-24 py-10 lg:max-xl:px-56  ">
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-7  ">
                    <div className=" group flex flex-col border border-orange-600 gap-7 px-10 py-10 h-96 w-full md:w-72 lg:max-xl:w-96 justify-center items-center">
                        <div class="group-hover:bg-black h-24 w-24 group-hover:-ml-3 relative rotate-45"></div>
                        <div class="border-orange-500 border border-r-4 rotate-45 group-hover:bg-orange-500 flex justify-center items-center h-24 w-24 absolute -mt-[200px] ml-2">
                            <LanguageIcon style={{
                                color: "black",
                                height: "60px",
                                width: "60px",
                            }}
                                class="-rotate-45" />
                        </div>
                        <h1 className=" text-xl font-bold  font-poppins group-hover:text-orange-500 mt-6">Perpat Corum</h1>

                        <div className=" flex justify-center items-center text-gray-500  text-center ">Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse</div>
                    </div>
                    <div className=" group flex flex-col border border-orange-600 gap-7 px-10 py-10 h-96 w-full md:w-72 lg:max-xl:w-96 justify-center items-center">
                        <div class="group-hover:bg-black h-24 w-24 group-hover:-ml-3 relative rotate-45"></div>
                        <div class="border-orange-500 border border-r-4 rotate-45 group-hover:bg-orange-500 flex justify-center items-center h-24 w-24 absolute -mt-[200px] ml-2">
                            <AccessAlarmIcon style={{
                                color: "black",
                                height: "60px",
                                width: "60px",
                            }}
                                class="-rotate-45" />
                        </div>
                        <h1 className=" text-xl font-bold  font-poppins group-hover:text-orange-500 mt-6">CONFAM TECUM</h1>

                        <div className=" flex justify-center items-center text-gray-500  text-center ">Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse</div>
                    </div>

                </div>
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-7  ">
                    <div className=" group flex flex-col border border-orange-600 gap-7 px-10 py-10 h-96 w-full md:w-72 lg:max-xl:w-96 justify-center items-center">
                        <div class="group-hover:bg-black h-24 w-24 group-hover:-ml-3 relative rotate-45"></div>
                        <div class="border-orange-500 border border-r-4 rotate-45 group-hover:bg-orange-500 flex justify-center items-center h-24 w-24 absolute -mt-[200px] ml-2">
                            <CatchingPokemonIcon style={{
                                color: "black",
                                height: "60px",
                                width: "60px",
                            }}
                                class="-rotate-45" />
                        </div>
                        <h1 className=" text-xl font-bold  font-poppins group-hover:text-orange-500 mt-6">CUIQUE VERSO</h1>

                        <div className=" flex justify-center items-center text-gray-500  text-center ">Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse</div>
                    </div>
                    <div className=" group flex flex-col border border-orange-600 gap-7 px-10 py-10 h-96 w-full md:w-72 lg:max-xl:w-96 justify-center items-center">
                        <div class="group-hover:bg-black h-24 w-24 group-hover:-ml-3 relative rotate-45"></div>
                        <div class="border-orange-500 border border-r-4 rotate-45 group-hover:bg-orange-500 flex justify-center items-center h-24 w-24 absolute -mt-[200px] ml-2">
                            <CurrencyExchangeIcon style={{
                                color: "black",
                                height: "60px",
                                width: "60px",
                            }}
                                class="-rotate-45" />
                        </div>
                        <h1 className=" text-xl font-bold  font-poppins group-hover:text-orange-500 mt-6">VIDEUR FUISE</h1>

                        <div className=" flex justify-center items-center text-gray-500  text-center ">Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse</div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Icontype10