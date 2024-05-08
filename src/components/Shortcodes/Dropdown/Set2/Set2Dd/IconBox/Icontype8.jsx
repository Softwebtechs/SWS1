import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Icontype8 = () => {
    return (
        <>
            <div className="mt-14 w-full md:h-[600px] md:max-lg:h-[800px] h-full bg-black px-24 py-3">
                <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-14">

                    <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-white">TYPE  8</span></h1>
                </div>
                <div className="md:flex md:flex-row flex flex-col gap-7 py-5 md:px-10 px-2">
                    <div className="  md:w-[600px] h-full w-[400px] flex flex-col">
                        <div className="flex flex-row justify-end gap-2 ">
                            <h1 className="text-white font-bold text-3xl text-right  ">Perpat Corum</h1>
                            <LanguageIcon style={{
                                color: "gray",
                                height: "60px",
                                width: "60px",
                            }}
                            />
                        </div>
                        <p class="text-gray-500 text-right mr-10">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Donec nec justo eget felis facilisis fermentum.</p>
                    </div>
                    <div className="md:invisible visible border border-gray-500 md:w-0 w-96"></div>
                    <div className=" md:h-32 md:w-[600px] h-full w-[400px] flex flex-col">
                        <div className="flex flex-row  gap-2 ">

                            <AccessAlarmIcon style={{
                                color: "gray",
                                height: "60px",
                                width: "60px",
                            }}
                            />
                            <h1 className="text-white font-bold text-3xl   ">Confam tecum</h1>
                        </div>
                        <p class="text-gray-500 ml-10">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Donec nec justo eget felis facilisis fermentum.</p>
                    </div>


                </div>
                <div class="md:visible invisible flex flex-row gap-7 px-16 py-5">
                    <div class="border border-gray-500 w-[550px]"></div>
                    <div class="border border-gray-500 w-[550px] ml-10"></div>
                </div>
                <div className="md:flex md:flex-row flex flex-col gap-7 py-5 md:px-10 px-2">
                    <div className=" md:h-32 md:w-[600px] h-full w-[400px] flex flex-col">
                        <div className="flex flex-row justify-end gap-2 ">
                            <h1 className="text-white font-bold text-3xl text-right  ">Cuique Verso</h1>
                            <CatchingPokemonIcon style={{
                                color: "gray",
                                height: "60px",
                                width: "60px",
                            }}
                            />
                        </div>
                        <p class="text-gray-500 text-right mr-10">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Donec nec justo eget felis facilisis fermentum.</p>
                    </div>
                    <div className="md:invisible visible border border-gray-500 md:w-0 w-96"></div>
                    <div className="md:h-32 md:w-[600px] h-full w-[400px] flex flex-col">
                        <div className="flex flex-row  gap-2 ">

                            <CurrencyExchangeIcon style={{
                                color: "gray",
                                height: "60px",
                                width: "60px",
                            }}
                            />
                            <h1 className="text-white font-bold text-3xl   ">Videur Fuise</h1>
                        </div>
                        <p class="text-gray-500 ml-10">Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Donec nec justo eget felis facilisis fermentum.</p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Icontype8