import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

const Icontype14 = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center  md:gap-10 gap-7  font-poppins mt-20">

                <h1 className="md:text-5xl text-3xl md:w-full w-80 font-bold text-orange-500 flex justify-center gap-4 " >ICON BOX  <span className="text-blue-950">TYPE  14</span></h1>
            </div>

            <div className=" lg:flex lg:flex-row flex flex-col w-full md:h-96 h-full md:max-lg:h-full py-14  ">
                <div class="lg:flex lg:flex-row md:max-lg:flex md:max-lg:flex-row ">
                    <div className="group hover:bg-red-500 bg-gray-200 h-80 md:w-96 w-full md:max-lg:w-1/2 lg:max-xl:w-72 flex justify-center items-center ">
                        <div className="flex flex-col gap-7 justify-center items-center ">
                            <LanguageIcon style={{
                                color: "red",
                                height: "80px",
                                width: "80px",
                            }}
                            />
                            <h1 className="font-bold text-3xl font-poppins text-red-500 group-hover:text-white">Perpat Corum</h1>

                            <p className="text-gray-500 text-center px-5 group-hover:text-white">Sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus rutrum.</p>
                        </div>

                    </div>
                    <div className="group hover:bg-green-600 bg-gray-200 h-80 md:w-96 w-full md:max-lg:w-1/2 lg:max-xl:w-72 flex justify-center items-center ">
                        <div className="flex flex-col gap-7 justify-center items-center ">
                            <AccessAlarmIcon style={{
                                color: "green",
                                height: "80px",
                                width: "80px",
                            }}
                            />
                            <h1 className="font-bold text-3xl font-poppins text-green-600 group-hover:text-white">Confam Tecum</h1>

                            <p className="text-gray-500 text-center px-5 group-hover:text-white">Sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus rutrum.</p>
                        </div>

                    </div>


                </div>
                <div class="lg:flex lg:flex-row md:max-lg:flex md:max-lg:flex-row ">
                    <div className="group hover:bg-blue-500 bg-gray-200 h-80 md:w-96 w-full md:max-lg:w-1/2 lg:max-xl:w-72 flex justify-center items-center ">
                        <div className="flex flex-col gap-7 justify-center items-center ">
                            <CatchingPokemonIcon style={{
                                color: "blue",
                                height: "80px",
                                width: "80px",
                            }}
                            />
                            <h1 className="font-bold text-3xl font-poppins text-blue-500 group-hover:text-white">Cuique Verso</h1>

                            <p className="text-gray-500 text-center px-5 group-hover:text-white">Sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus rutrum.</p>
                        </div>

                    </div>
                    <div className="group hover:bg-indigo-500 bg-gray-200 h-80 md:w-96 w-full md:max-lg:w-1/2 lg:max-xl:w-72 flex justify-center items-center ">
                        <div className="flex flex-col gap-7 justify-center items-center ">
                            <CurrencyExchangeIcon style={{
                                color: "indigo",
                                height: "80px",
                                width: "80px",
                            }}
                            />
                            <h1 className="font-bold text-3xl font-poppins text-indigo-500 group-hover:text-white">Videur Fuise</h1>

                            <p className="text-gray-500 text-center px-5 group-hover:text-white">Sed diam nonummy nibh euismod tincidunt ut laoreet dolore. Phasellus viverra nulla ut metus rutrum.</p>
                        </div>

                    </div>


                </div>

            </div>

        </>
    )
}

export default Icontype14