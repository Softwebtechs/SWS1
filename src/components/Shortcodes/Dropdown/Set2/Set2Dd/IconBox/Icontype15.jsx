import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';


const Icontype15 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  15</span></h1>
            </div>
            <div className=" xl:flex xl:flex-row flex flex-col gap-7  sm:px-44 px-24 py-10 lg:max-xl:px-56  ">
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-7  ">
                    <div className=" group flex flex-col border-4 border-orange-600 hover:bg-gray-100 gap-7 px-10 py-10 h-96 w-full md:w-72 lg:max-xl:w-96 justify-center items-center">

                        <div class=" flex justify-center items-center ">
                            <LanguageIcon style={{
                                color: "#ff5e14",
                                height: "100px",
                                width: "100px",
                            }}
                            />
                        </div>
                        <h1 className=" text-xl font-bold  font-poppins  ">Perpat Corum</h1>
                        <div class="border group-hover:border-orange-500 border-gray-200 w-44 "></div>
                        <div class="border-2 group-hover:border-orange-500 border-gray-200 w-44 -mt-6"></div>
                        <div className=" flex justify-center items-center text-gray-500  text-center ">Sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus rutrum.</div>
                    </div>
                    <div className=" group flex flex-col border-4 border-orange-600 hover:bg-gray-100 gap-7 px-10 py-10 h-96 w-full md:w-72 lg:max-xl:w-96 justify-center items-center">

                        <div class=" flex justify-center items-center ">
                            <AccessAlarmIcon style={{
                                color: "#ff5e14",
                                height: "100px",
                                width: "100px",
                            }}
                            />
                        </div>
                        <h1 className=" text-xl font-bold  font-poppins  ">Confam tecum</h1>
                        <div class="border group-hover:border-orange-500 border-gray-200 w-44 "></div>
                        <div class="border-2 group-hover:border-orange-500 border-gray-200 w-44 -mt-6"></div>
                        <div className=" flex justify-center items-center text-gray-500  text-center ">Sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus rutrum.</div>
                    </div>


                </div>
                <div class="xl:flex xl:flex-row lg:max-xl:flex lg:max-xl:flex-row md:max-lg:flex md:max-lg:flex-row flex flex-col gap-7  ">
                    <div className=" group flex flex-col border-4 border-orange-600 hover:bg-gray-100 gap-7 px-10 py-10 h-96 w-full md:w-72 lg:max-xl:w-96 justify-center items-center">

                        <div class=" flex justify-center items-center ">
                            <CatchingPokemonIcon style={{
                                color: "#ff5e14",
                                height: "100px",
                                width: "100px",
                            }}
                            />
                        </div>
                        <h1 className=" text-xl font-bold  font-poppins  ">Cuique Verso</h1>
                        <div class="border group-hover:border-orange-500 border-gray-200 w-44 "></div>
                        <div class="border-2 group-hover:border-orange-500 border-gray-200 w-44 -mt-6"></div>
                        <div className=" flex justify-center items-center text-gray-500  text-center ">Sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus rutrum.</div>
                    </div>
                    <div className=" group flex flex-col border-4 border-orange-600 hover:bg-gray-100 gap-7 px-10 py-10 h-96 w-full md:w-72 lg:max-xl:w-96 justify-center items-center">

                        <div class=" flex justify-center items-center ">
                            <CurrencyExchangeIcon style={{
                                color: "#ff5e14",
                                height: "100px",
                                width: "100px",
                            }}
                            />
                        </div>
                        <h1 className=" text-xl font-bold  font-poppins  ">Videur Fuise</h1>
                        <div class="border group-hover:border-orange-500 border-gray-200 w-44 "></div>
                        <div class="border-2 group-hover:border-orange-500 border-gray-200 w-44 -mt-6"></div>
                        <div className=" flex justify-center items-center text-gray-500  text-center ">Sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus rutrum.</div>
                    </div>


                </div>

            </div>

        </>
    )
}

export default Icontype15